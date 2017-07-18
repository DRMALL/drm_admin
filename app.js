
var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
// var AV = require('leanengine');

// var http = require('http').Server(app)

// AV.init({
//   appId: process.env.LEANCLOUD_APP_ID ,
//   appKey: process.env.LEANCLOUD_APP_KEY ,
//   masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
// });


app.use(express.static('./build'));
app.use(cors());


app.get('/1.1/functions/_ops/metadatas', (req, res)=> {
  // res.sendStatus(404);
  // res.end();
  res.json({
    time: new Date()
  });
})

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})


module.exports =app



