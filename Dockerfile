FROM node:12.18.2-alpine

WORKDIR /app

copy . /app

EXPOSE 8000

ENV PORT=8000

ENTRYPOINT npm start