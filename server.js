

var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID ,
  appKey: process.env.LEANCLOUD_APP_KEY ,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');

app.use(express.static('./build'));
app.use(cors());

app.get('/1.1/functions/_ops/metadatas', (req, res)=> {
  res.sendStatus(404)
})

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.use(AV.express());

// 强制使用 https
app.enable('trust proxy');
app.use(AV.Cloud.HttpsRedirect());

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000)

var server = app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT);
});
