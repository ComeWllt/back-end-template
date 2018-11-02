FROM node:alpine

WORKDIR /usr/src/app

EXPOSE 4200

COPY . .

RUN npm install --only=prod

CMD ["npm","run","start"]
