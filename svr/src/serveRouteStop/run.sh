#!/usr/bin/env bash

# server
docker rm -f routestop
docker pull gcr.io/traveleasy-1554765588100/routestop:latest
docker run -p 8080:8080 \
    -e SESSION_SERVER_ADDR=35.247.92.87:6379 \
    --name routestop \
    -d gcr.io/traveleasy-1554765588100/routestop:latest