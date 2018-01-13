
var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
var PORT = 3008


app.use(express.static('./build'));
app.use(cors());

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT);
});


//module.exports =app
