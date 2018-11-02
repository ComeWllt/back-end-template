FROM node:alpine

WORKDIR /usr/src/app

EXPOSE 4200

COPY . .

RUN npm install

CMD ["npm","run","start"]
