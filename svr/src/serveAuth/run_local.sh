#!/usr/bin/env bash

echo
echo "===== Running Auth ====="
echo

docker rm -f redis
docker rm -f auth

# network
docker network rm test
docker network create test

# redis
docker pull redis
docker run -p 6379:6379 --name redis --network test -d redis

# server
docker pull gcr.io/traveleasy-1554765588100/redis:latest
docker run -p 8081:8080 \
    --name auth \
	--network test \
    -d gcr.io/traveleasy-1554765588100/auth:latest

echo
echo ">docker ps"
docker ps -a
echo

echo
echo "===== Done ====="
echo