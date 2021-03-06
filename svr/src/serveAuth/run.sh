#!/usr/bin/env bash

echo
echo "===== Running Redis ====="
echo

# redis
docker rm -f redis
docker pull redis
docker run -p 6379:6379 --name redis --network test -d redis

# server
docker rm -f auth
docker pull gcr.io/traveleasy-1554765588100/auth:latest
docker run -p 8080:8080 \
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