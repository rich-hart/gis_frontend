from node:latest

workdir /app

copy dashboard .

cmd node index.js
