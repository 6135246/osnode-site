/**
 * 前台页面模块
 */
var config = require('../config');
var log = require('../lib/log');
var Topic = require('../models/topic-front');
var enms = require('../lib/enms');
var EventProxy = require('eventproxy');
var dateformat = require('dateformat');

/**
 * 关于
 */
exports.about = function(request, response) {
	var data = {
		title: '最新 Java/Node.js/Spring/MySQL/数据库 技术博客',
		catg: 'about',
		url: request.path,

		dateFormat: function(date) {
			return dateformat(date, "yyyy-mm-dd");
		}
	};

	// 返回页面
	response.render('front-about', data);
};

/**
 * 美图
 */
exports.album = function(request, response) {
	var data = {
		title: '最新 Java/Node.js/Spring/MySQL/数据库 技术博客',
		catg: 'album',
		url: request.path,

		dateFormat: function(date) {
			return dateformat(date, "yyyy-mm-dd");
		}
	};

	// 返回页面
	response.render('front-album', data);
};

/**
 * 首页-列表
 */
exports.index = function(request, response) {
	log.info("Web请求：" + require('util').inspect(request));
	
	var data = {
		catg: 'index',
		title: '最新 Java/Node.js/Spring/MySQL/数据库 技术博客',
		url: request.path,

		catgValue: function(catg) {
			return enms.topicCatgValue(catg);
		},
		dateFormat: function(date) {
			return dateformat(date, "yyyy-mm-dd");
		}
	};

	// SQL参数
	var args = {};

	// 请求参数
	var catg = request.params.catg;
	if(catg) {
		data.catg = catg;
		args.catgs = [catg];
	}

	var pageSize = config.pageSize || 30;
	var pageNo = request.params.page || 1;
	args.page = (pageNo < 1) ? 1 : pageNo;
	args.offset = (pageNo - 1) * pageSize;
	args.limit = pageSize;
	
	log.info("SQL参数：" + require('util').inspect(args));

	// 并行处理
	var ep = EventProxy.create("topics", "topVisits", "topReplys", function(topics, topVisits, topReplys) {
		// 数据
		data.page = pageNo;
		data.topics = topics;
		data.topVisits = topVisits;
		data.topReplys = topReplys;

		// 返回页面
		response.render('front-index', data);
	});

	Topic.findList(args, function(results) {
		ep.emit("topics", results);
	});

	Topic.findTopVisits(args, function(results) {
		ep.emit("topVisits", results);
	});

	Topic.findTopReplys(args, function(results) {
		ep.emit("topReplys", results);
	});
};

/**
 * 主题-查看
 */
exports.topic = function(request, response) {
	log.info("Web请求：" + require('util').inspect(request));
	
	var data = {
		catg: 'index',
		title: '最新 Java/Node.js/Spring/MySQL/数据库 技术博客',
		url: request.path,
		
		catgValue: function(catg) {
			return enms.topicCatgValue(catg);
		},
		dateFormat: function(date) {
			return dateformat(date, "yyyy-mm-dd");
		}
	};

	// SQL参数
	var args = {};

	// 请求参数
	var id = request.params.id;
	var catg = request.params.catg;
	if(catg) {
		data.catg = catg;
		args.catgs = [catg];
	}
	
	log.info("SQL参数：" + require('util').inspect(args));

	// 并行处理
	var ep = EventProxy.create("topic", "visit", "topVisits", "topReplys", function(topic, visit, topVisits, topReplys) {
		// 数据
		if(topic.length > 0) {
			data.topic = topic[0];
		}
		data.topVisits = topVisits;
		data.topReplys = topReplys;

		// 返回页面
		response.render('front-topic', data);
	});

	Topic.findID(id, function(results) {
		ep.emit("topic", results);
	});
	
	Topic.updateVisit(id, function(results) {
		ep.emit("visit", results);
	});

	Topic.findTopVisits(args, function(results) {
		ep.emit("topVisits", results);
	});

	Topic.findTopReplys(args, function(results) {
		ep.emit("topReplys", results);
	});
};
