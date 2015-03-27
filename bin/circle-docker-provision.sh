#!/bin/bash

# Usage :
# circle-docker-provision.sh image [image]...

if [ 0 -eq  $(ps -ef | grep "docker" | grep -v "grep" | wc -l) ]; then
  echo "Docker is not started, you probably forgot to declare it in circle.yml's service section"
  exit 1;
fi

cache=~/.docker
compose=$cache/docker-compose

if [[ -f $compose ]]; then
  echo "docker compose already downloaded"
else
  echo "installing docker compose"
  mkdir -p $cache
  curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > $compose
  chmod +x $compose
fi

for name in $@; do

  img=$cache/$name.tar
  mkdir -p $(dirname $img)

  if [[ -f $img ]]; then
    echo "loading docker image <$name>"
    docker load -i $img
  else
    echo "pulling docker image <$name>"
    docker pull $name
    echo "saving docker image <$name> in <$img>"
    docker save -o $img $name
  fi
done

exit 0