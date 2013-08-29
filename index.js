/**
 * Module dependencies.
 */
var config = require('./config');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var topic = require('./routes/topic');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', config.appPort || process.env.PORT || 10080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('atom-nodejs-server'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// 路由配置
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users2', user.list2);

/* 主题信息 */
app.get('/topic/create', topic.create);
app.get('/topic/view/:id', topic.view);
app.get('/topic/update/:id', topic.update);
app.get('/topic/manage', topic.manage);
app.post('/topic/store', topic.store);

// 创建服务端
http.createServer(app).listen(app.get('port'), function() {
	console.log('启动服务器完成，Web端口: ' + app.get('port'));
});
