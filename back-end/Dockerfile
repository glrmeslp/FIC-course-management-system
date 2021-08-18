FROM node:14.15.4-alpine3.12


RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@8.0.0

RUN npm install --save @nestjs/mongoose mongoose

RUN npm i --save class-validator class-transformer

COPY package*.json ./


ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

USER node

WORKDIR /home/node/app


ENTRYPOINT ["./.docker/entrypoint.sh"]
