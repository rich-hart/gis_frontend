const express = require('express')
const app = express();

app.use(express.static('public'))
//app.use(express.static('./node_modules/chart.js/dist/'))
app.use(express.static('./node_modules/lcars-sdk'))
app.use(express.static('./node_modules/particles'))
app.use(express.static('./node_modules/angular-cookies'))

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

