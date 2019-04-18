#!/usr/bin/env bash

# server
docker pull gcr.io/traveleasy-1554765588100/gateway:latest
docker run -p 8080:8080 \
    -e SESSION_SERVER_ADDR=35.247.92.87:8080 \
    --name gateway \
    -d gcr.io/traveleasy-1554765588100/gateway:latest

#FIRESTORE_KEY_PATH /go/src/TravelEasy/svr/src/firestore_key.json
#SESSION_SERVER_ADDR 35.247.92.87:8080