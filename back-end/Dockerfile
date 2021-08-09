FROM node:14.17.4 

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]


RUN npm install glob rimraf
RUN npm install

COPY . /app

RUN npm run build
