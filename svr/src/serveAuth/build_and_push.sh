#!/usr/bin/env bash

echo
echo "===== Building Redis Server Image ====="
echo

CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -o auth

docker build -t gcr.io/traveleasy-1554765588100/auth:latest .
docker push gcr.io/traveleasy-1554765588100/auth:latest

rm -v auth

echo
echo "===== Done ====="
echo