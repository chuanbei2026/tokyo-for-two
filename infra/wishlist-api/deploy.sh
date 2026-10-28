#!/usr/bin/env bash
# Create or update the shared wishlist API. Safe to re-run: existing resources are kept,
# the code is updated, and the current passcode hash is preserved.
# Requires the personal AWS profile (never the work account): AWS_PROFILE=claude-agent.
set -euo pipefail
cd "$(dirname "$0")"
source ./config.env
export AWS_PROFILE AWS_REGION
aws() { command aws --region "$AWS_REGION" "$@"; }

account=$(aws sts get-caller-identity --query Account --output text)
if [[ "$account" != "$AWS_ACCOUNT" ]]; then
  echo "Refusing to deploy: profile $AWS_PROFILE is account $account, expected $AWS_ACCOUNT" >&2
  exit 1
fi

# 1. DynamoDB table (on demand): one item per (trip, place).
if ! aws dynamodb describe-table --table-name "$TABLE" >/dev/null 2>&1; then
  aws dynamodb create-table --table-name "$TABLE" --billing-mode PAY_PER_REQUEST \
    --attribute-definitions AttributeName=trip,AttributeType=S AttributeName=place,AttributeType=S \
    --key-schema AttributeName=trip,KeyType=HASH AttributeName=place,KeyType=RANGE \
    --tags Key=project,Value=tokyo-for-two >/dev/null
  aws dynamodb wait table-exists --table-name "$TABLE"
  aws dynamodb update-continuous-backups --table-name "$TABLE" \
    --point-in-time-recovery-specification PointInTimeRecoveryEnabled=false >/dev/null || true
fi
table_arn=$(aws dynamodb describe-table --table-name "$TABLE" --query Table.TableArn --output text)

# 2. Log group with short retention (created before the function so it is ours).
aws logs create-log-group --log-group-name "/aws/lambda/$FUNCTION" 2>/dev/null || true
aws logs put-retention-policy --log-group-name "/aws/lambda/$FUNCTION" --retention-in-days "$LOG_RETENTION_DAYS"

# 3. Least-privilege role: this table's items and this function's logs only.
if ! aws iam get-role --role-name "$ROLE" >/dev/null 2>&1; then
  aws iam create-role --role-name "$ROLE" \
    --permissions-boundary "arn:aws:iam::$AWS_ACCOUNT:policy/ClaudeWorkloadBoundary" \
    --assume-role-policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}' >/dev/null
  sleep 10
fi
aws iam put-role-policy --role-name "$ROLE" --policy-name access --policy-document "$(cat <<JSON
{"Version":"2012-10-17","Statement":[
 {"Effect":"Allow","Action":["dynamodb:Query","dynamodb:PutItem"],"Resource":"$table_arn"},
 {"Effect":"Allow","Action":["logs:CreateLogStream","logs:PutLogEvents"],"Resource":"arn:aws:logs:$AWS_REGION:$AWS_ACCOUNT:log-group:/aws/lambda/$FUNCTION:*"}
]}
JSON
)"
role_arn=$(aws iam get-role --role-name "$ROLE" --query Role.Arn --output text)

# 4. Function code.
zip_file=$(mktemp -d)/function.zip
zip -qj "$zip_file" index.mjs
if aws lambda get-function --function-name "$FUNCTION" >/dev/null 2>&1; then
  aws lambda update-function-code --function-name "$FUNCTION" --zip-file "fileb://$zip_file" >/dev/null
  aws lambda wait function-updated --function-name "$FUNCTION"
  key_sha=$(aws lambda get-function-configuration --function-name "$FUNCTION" \
    --query 'Environment.Variables.KEY_SHA256' --output text)
  [[ "$key_sha" == "None" ]] && key_sha=""
  aws lambda update-function-configuration --function-name "$FUNCTION" --runtime nodejs22.x \
    --memory-size 256 --timeout 10 --role "$role_arn" \
    --environment "{\"Variables\":{\"TABLE_NAME\":\"$TABLE\",\"TRIP_ID\":\"$TRIP_ID\",\"KEY_SHA256\":\"$key_sha\"}}" >/dev/null
else
  aws lambda create-function --function-name "$FUNCTION" --runtime nodejs22.x --handler index.handler \
    --role "$role_arn" --zip-file "fileb://$zip_file" --memory-size 256 --timeout 10 \
    --environment "{\"Variables\":{\"TABLE_NAME\":\"$TABLE\",\"TRIP_ID\":\"$TRIP_ID\",\"KEY_SHA256\":\"\"}}" \
    --tags project=tokyo-for-two >/dev/null
fi
aws lambda wait function-updated --function-name "$FUNCTION"

# 5. Concurrency cap (two people need very little) and the public HTTPS URL.
aws lambda put-function-concurrency --function-name "$FUNCTION" \
  --reserved-concurrent-executions "$RESERVED_CONCURRENCY" >/dev/null
cors="AllowOrigins=$ALLOWED_ORIGINS,AllowMethods=GET,PUT,POST,AllowHeaders=content-type,x-trip-key,MaxAge=600"
if aws lambda get-function-url-config --function-name "$FUNCTION" >/dev/null 2>&1; then
  aws lambda update-function-url-config --function-name "$FUNCTION" --auth-type NONE --cors "$cors" >/dev/null
else
  aws lambda create-function-url-config --function-name "$FUNCTION" --auth-type NONE --cors "$cors" >/dev/null
  aws lambda add-permission --function-name "$FUNCTION" --statement-id public-url \
    --action lambda:InvokeFunctionUrl --principal '*' --function-url-auth-type NONE >/dev/null
fi
aws lambda add-permission --function-name "$FUNCTION" --statement-id public-url-invoke \
  --action lambda:InvokeFunction --principal '*' --invoked-via-function-url >/dev/null 2>&1 || true

url=$(aws lambda get-function-url-config --function-name "$FUNCTION" --query FunctionUrl --output text)
echo "API: $url"
echo "Passcode configured: $([[ -n "${key_sha:-}" ]] && echo yes || echo 'no - run ./rotate-key.sh')"
