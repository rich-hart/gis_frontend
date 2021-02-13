from node:latest

workdir /app

copy dashboard .

cmd node dev.js
