#!/usr/bin/env bash
# Issue a new share-link passcode. The old link stops working immediately; the wishlist stays.
# The passcode is never printed: the link is written to $LINK_FILE (mode 600) only.
set -euo pipefail
cd "$(dirname "$0")"
source ./config.env
export AWS_PROFILE AWS_REGION
aws() { command aws --region "$AWS_REGION" "$@"; }
[[ "$(aws sts get-caller-identity --query Account --output text)" == "$AWS_ACCOUNT" ]] || { echo "wrong AWS account" >&2; exit 1; }

key=$(openssl rand -base64 32 | tr '+/' '-_' | tr -d '=\n')
sha=$(printf '%s' "$key" | shasum -a 256 | cut -d' ' -f1)
api=$(aws lambda get-function-url-config --function-name "$FUNCTION" --query FunctionUrl --output text)

aws lambda update-function-configuration --function-name "$FUNCTION" \
  --environment "{\"Variables\":{\"TABLE_NAME\":\"$TABLE\",\"TRIP_ID\":\"$TRIP_ID\",\"KEY_SHA256\":\"$sha\"}}" >/dev/null
aws lambda wait function-updated --function-name "$FUNCTION"

mkdir -p "$(dirname "$LINK_FILE")"; chmod 700 "$(dirname "$LINK_FILE")"
umask 077
printf '%s#share=%s\n' "$SITE_URL" "$key" > "$LINK_FILE"
echo "New share link written to $LINK_FILE (old link no longer works). API: $api"
