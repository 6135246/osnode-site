/**
 * 中间件
 */

var log = require("./log");

exports.topic = function(request, response, next) {
	log.info("中间件：" + request.path);
	
	// 下一个中间件
	next();
};
