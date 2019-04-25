#!/bin/bash

BUCKETNAME=`cat s3bucketname`

if [ -z "$BUCKETNAME" ]; then
  echo "s3bucketname file is missing or empty. Exiting..."
  exit 1
fi

echo "Deploying to production..."
npm run build
aws s3 sync dist/ s3://$BUCKETNAME
echo "Done."
