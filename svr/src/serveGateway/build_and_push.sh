#!/usr/bin/env bash

echo
echo "===== Building Gateway Image ====="
echo

CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -o gateway

docker build -t gcr.io/traveleasy-1554765588100/gateway:latest .
docker push gcr.io/traveleasy-1554765588100/gateway:latest

rm -v gateway

echo
echo "===== Done ====="
echo