#!/usr/bin/env bash

echo
echo "===== Building Redis Server Image ====="
echo

cd ./serveAuth/
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -o redisServer
cd -

docker build -t gcr.io/traveleasy-1554765588100/redis:latest -f ./Dockerfile_Auth ./
docker push gcr.io/traveleasy-1554765588100/redis:latest

rm -v ./serveAuth/redisServer

echo
echo "===== Done ====="
echo