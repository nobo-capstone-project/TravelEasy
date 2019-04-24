#!/usr/bin/env bash

echo
echo "===== Running Redis ====="
echo

# redis
docker rm -f redis
docker pull redis
docker run -p 6379:6379 --name redis --network redisServer -d redis

# server
docker rm -f server
docker pull gcr.io/traveleasy-1554765588100/redis:latest
docker run -p 8080:8080 \
    --name server \
    --network redisServer \
    -d gcr.io/traveleasy-1554765588100/redis:latest

echo
echo ">docker ps"
docker ps -a
echo

echo
echo "===== Done ====="
echo