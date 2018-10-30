FROM node:alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 4200

RUN npm install

CMD ["npm","run","start"]