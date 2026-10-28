#!/usr/bin/env bash
# Print the whole shared wishlist as JSON: { placeId: { checked, updatedAt } }.
set -euo pipefail
cd "$(dirname "$0")"
source ./config.env
export AWS_PROFILE AWS_REGION
command aws --region "$AWS_REGION" dynamodb query --table-name "$TABLE" \
  --key-condition-expression 'trip = :t' --expression-attribute-values "{\":t\":{\"S\":\"$TRIP_ID\"}}" --output json |
  python3 -c 'import json,sys; print(json.dumps({i["place"]["S"]: {"checked": i["checked"]["BOOL"], "updatedAt": i["updatedAt"]["S"]} for i in json.load(sys.stdin)["Items"]}, ensure_ascii=False, indent=2))'
