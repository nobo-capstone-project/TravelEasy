#!/usr/bin/env bash

echo
echo "===== Building Gateway Image ====="
echo

cd ./serveGateway/
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -o gateway
cd -

docker build -t gcr.io/traveleasy-1554765588100/gateway:latest -f ./Dockerfile_Gateway ./
docker push gcr.io/traveleasy-1554765588100/gateway:latest

rm -v ./serveGateway/gateway

echo
echo "===== Done ====="
echo