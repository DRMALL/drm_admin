
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID ,
  appKey: process.env.LEANCLOUD_APP_KEY ,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

var app = require('./app')

// 强制使用 https
app.enable('trust proxy');
app.use(AV.express());
app.use(AV.Cloud.HttpsRedirect());


// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000)

app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT);
});

// const io = require('socket.io');

// var socket = io('http://192.168.2.236/socket:3000')

// socket.on('newteo', (data) => {
//   console.log(data)
// })

// socket.emit('order', '123')


