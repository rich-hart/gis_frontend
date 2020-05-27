const express = require('express')
const { createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.use(express.static('public'))
app.use(express.static('./node_modules/lcars-sdk'))
app.use(express.static('./node_modules/particles'))


app.use(
   '/api',
   createProxyMiddleware(
      {target: 'http://127.0.0.1:8001/', changeOrigin:true}
   )
)
app.use(
   '/accounts',
   createProxyMiddleware(
      {target: 'http://127.0.0.1:8001/', changeOrigin:true}
   )
)
//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

