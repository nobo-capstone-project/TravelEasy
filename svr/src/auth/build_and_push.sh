#!/usr/bin/env bash

echo
echo "===== Building Redis Server Image ====="
echo

CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -o redisServer

docker build -t gcr.io/traveleasy-1554765588100/redis:latest .
docker push gcr.io/traveleasy-1554765588100/redis:latest

rm -v redisServer

echo
echo "===== Done ====="
echo