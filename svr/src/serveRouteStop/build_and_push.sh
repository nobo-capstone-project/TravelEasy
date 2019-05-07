#!/usr/bin/env bash

echo
echo "===== Building RouteStop Image ====="
echo

CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -o routeStop

docker build -t gcr.io/traveleasy-1554765588100/routestop:latest -f ./Dockerfile ./
docker push gcr.io/traveleasy-1554765588100/routestop:latest

rm -v ./routeStop

echo
echo "===== Done ====="
echo