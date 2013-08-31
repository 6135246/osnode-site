/**
 * 前台页面模块
 */
var config = require('../config');
var log = require('../lib/log');
var Topic = require('../models/topic');
var enms = require('../lib/enms');
var EventProxy = require('eventproxy');
var dateformat = require('dateformat');

/**
 * 首页
 */
exports.index = function(request, response) {
	var data = {
		title: '最新 Java/Node.js/Spring/MySQL/数据库 技术博客',
		module: 'index',
		url: request.path,
		
		dateFormat: function(date) {
			return dateformat(date, "yyyy-mm-dd");
		}
	};

	// 分页信息
	var pageSize = config.pageSize || 30;
	var pageNo = request.query.p || 1;
	pageNo = (pageNo < 1) ? 1 : pageNo;

	var args = {
		offset: (pageNo - 1) * pageSize,
		limit: pageSize
	};
	
	// 并行处理
	var ep = EventProxy.create("topics", "topVisits", "topReplys", function(topics, topVisits, topReplys) {
		// 数据
		data.page = pageNo;
		data.topics = topics;
		data.topVisits = topVisits;
		data.topReplys = topReplys;

		// log.info("结果数据: " + require('util').inspect(data));

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