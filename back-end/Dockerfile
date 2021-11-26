FROM node:14.15.4-alpine3.12

WORKDIR /usr/app

COPY package*.json ./

RUN npm i -g @nestjs/cli@8.0.0

RUN npm install 

RUN npm i --save class-validator class-transformer

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]
