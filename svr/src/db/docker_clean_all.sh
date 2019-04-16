#!/usr/bin/env bash

echo
echo "=============================="
echo "     Cleaning Containers"
echo "=============================="
echo

echo "Removing active containers..."
CONTAINER_ID=`docker ps -aq`
if [[ ! -z "$CONTAINER_ID" ]]; then
    for id in ${CONTAINER_ID}; do
       docker rm -f ${id}
    done
fi
echo "Done!"
echo

echo "Removing images..."
IMAGE_ID=`docker images -aq`
if [[ ! -z "$IMAGE_ID" ]]; then
    for id in ${IMAGE_ID}; do
        docker rmi ${id}
    done
fi
echo "Done!"
echo

echo "Pruning containers..."
docker container prune -f
echo "Done!"
echo

echo "Pruning images..."
docker image prune -af
echo "Done!"
echo

echo "Pruning system..."
docker system prune -af
echo "Done!"
echo

echo "Pruning volumes..."
docker volume prune -f
echo "Done!"
echo

echo "Cleaned!!!"
echo