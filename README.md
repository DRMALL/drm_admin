# drm_admin

* [开发文档](#开发文档)
* [依赖清单](#依赖清单)
* [结构文档](#结构文档)
* [交互文档](#交互文档)

### 开发文档
本项目基于react框架，采用react-router V3.0.2版本进行路由管理，使用redux进行数据管理，也用了ant-design的UI框架，后期的测试中使用了enzyme、enzyme-to-json，同时使用了superagent-mocker模拟了Http请求的返回数据来进行测试。
本项目部署在leancloud上面，目前采用的是免费版的，每天可以使用的时间为16小时。

本项目在github上面，需要下载，在本地进行测试的时候
```
git clone https://github.com/DRMALL/drm_admin.git
cd drm_admin
yarn install 或者 npm install
npm start
```
当运行完毕之后，本地的调试页面将会打开

测试
```
npm test
```
### 依赖清单
本项目所使用依赖关系如下
```
  "dependencies": {
    "antd": "2.12.0",
    "cors": "2.8.3",
    "express": "4.15.3",
    "history": "4.6.3",
    "konva": "1.2.2",
    "leanengine": "2.0.4",
    "moment": "2.18.1",
    "react": "15.4.2",
    "react-dom": "15.4.2",
    "react-konva": "1.1.1",
    "react-router": "3.0.2",
    "redux": "3.7.1",
    "socket.io": "2.0.3",
    "stylus": "0.54.5",
    "superagent": "3.5.2"
  },
  "devDependencies": {
    "enzyme": "2.9.1",
    "enzyme-to-json": "1.5.1",
    "jest": "20.0.4",
    "npm-run-all": "4.0.2",
    "react-addons-test-utils": "15.4.2",
    "react-scripts": "1.0.10",
    "react-test-renderer": "15.4.2",
    "redux-mock-store": "1.2.3",
    "superagent-mocker": "0.5.2"
  },
```
同时，为了保证不会因为依赖版本的更新而导致一些不可控因素，将packjson文件里面的依赖版本全部固定了


### 结构文档
本项目入口文件为server.js，当你在本地跑的时候，需要确定packjson里面的start是
```
    "start": "npm-run-all -p watch-css start-js",
```
当你准备部署的时候，应该改为
```
    "start": "node server.js",
```

本项目的主要文件在src文件夹下
#### actions
其中actions文件主要存放管理redux的action的有关文件，同时也因为http请求所涉及到的获取，新增，修改，删除也涉及到了action的派发，因此http请求也放置在本文件夹下面

#### commons
commons文件夹里放置了api，一些固定的字符串、数组和redux的store

#### components
components文件夹里放置了所有的组件

#### containers
containers文件夹里放置了所有的页面文件

#### images
images文件中放置了本项目中所用到的本地文件，还有部分icon是使用icon-font所引入的

#### reducers
reducers文件中放置redux相关的reducer文件

#### style
style文件中放置着所有的css样式文件，注意，因为本项目使用了stylus预编译，因此如果需要修改css样式，则只需要在style文件夹下的stylus文件夹中找到对应的文件进行修改

#### utils
utils文件夹里存放的主要输一个功能函数，注意，并不是所有的功能函数都放置在本文件夹下，有些函数直接就写在了对应的页面文件之下


### 交互文档

* 在后台上传的图片尺寸不宜太大，以免影响App的响应速度，故后台设置了限制，图片尺寸大于500k的在上传的时候将会被忽视。
* 点击左侧边的栏目可以最快的回到你的本栏的首页。
* 在创建新的信息或者设备管理等项目的时候，需要把所有数据填写完成才能新增。

#### 信息发布
1. 在创建信息的时候，需要填写所有字段，才能保存或者发布成功

#### 用户管理
1. 在修改用户信息的时候，密码为空是正常的，因为密码不会明文发给后台显示，如果用户忘记密码，则只需要在密码字段输入你想重置的密码，就能重新修改密码。




