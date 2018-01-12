
var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');


app.use(express.static('./build'));
app.use(cors());

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})


//module.exports =app
