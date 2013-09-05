/**
 * Module dependencies.
 */
var config = require('./config');
var express = require('express');
var http = require('http');
var path = require('path');
var mware = require("./lib/mware");

var app = express();
global.host = "http://localhost";
// global.host = "http://www.aliapp.com";

// all environments
app.set('port', config.appPort || process.env.PORT || 10080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.use(express.favicon("/favicon.png"));
app.use(express.logger('dev'));
app.use(express.bodyParser({
	uploadDir: config.uploadPath
}));
app.use(express.methodOverride());
app.use(express.cookieParser('aliapp-nodejs'));
app.use(express.session());
app.use(app.router);
app.use("/public", express.static(path.join(__dirname, 'public'), {
	maxAge: 0
}));

app.use("/topic/manage", mware.topic);

// development only
if('development' == app.get('env')) {
	app.use(express.errorHandler());
}

/* 前台页面 */
var front = require('./routes/front');
app.get('/about.html', front.about);
app.get('/album.html', front.album);

app.get('/', front.index);
app.get('/index.html', front.index);
app.get('/index-:catg-:page.html', front.index);
app.get('/index-:catg.html', front.index);

app.get('/topic-:catg-:id.html', front.topic);

app.post("/topic-reply", front.reply)

/* 用户页面 */
var user = require('./routes/user');
app.get('/users', user.list);
app.get('/users2', user.list2);

/* 文件配置 */
var file = require('./routes/file');
app.get('/file/select', file.select);
app.post('/file/upload', file.upload);

/* 主题信息 */
var topic = require('./routes/topic');
app.get('/topic/create', topic.create);
app.get('/topic/view/:id', topic.view);
app.get('/topic/update/:id', topic.update);
app.get('/topic/manage', topic.manage);
app.post('/topic/store', topic.store);

// 创建服务端
http.createServer(app).listen(app.get('port'), function() {
	console.log('启动服务器完成，Web端口: ' + app.get('port'));
});
