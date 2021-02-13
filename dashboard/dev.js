const express = require('express')
const { createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.use(express.static('public'))
app.use(express.static('./node_modules/lcars-sdk'))
app.use(express.static('./node_modules/particles'))

app.listen(8001, () => {
  console.log('Example app listening on port 8001!')
});

