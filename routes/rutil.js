/**
 * 路由工具类
 */

var enms = require('../lib/enms');
var dateformat = require('dateformat');

/**
 * 公用数据
 */
exports.data = function(request) {
	return {
		url: request.path,
		catg: '',
		title: '',
		host: 'http://obullxl.github.io',
		breadcrumbs: [{
			label: "管理后台",
			href: "/admin/topic-manage.html"
		}, {
			label: "主题管理",
			href: "/admin/topic-manage.html"
		}, {
			label: '创建主题'
		}],
		catgs: enms.topicCatgEnums(),
		catgValue: function(catg) {
			return enms.topicCatgValue(catg);
		},
		topicCatgCodes: enms.topicCatgCodes(),
		md5: function(text) {
			return require('crypto').createHash('md5').update(text).digest('hex');
		},
		dateFormat: function(date) {
			return dateformat(date, "yyyy-mm-dd");
		},
		datetimeFormat: function(date) {
			return dateformat(date, "yyyy-mm-dd hh:mm:ss");
		}
	};
};

/**
 * 不支持的方法
 */
exports.notSupportMethod = function(request, response) {
	response.writeHead(404, {
		'Content-Type': 'text/html'
	});

	response.end('The request method[' + request.method.toUpperCase() + '] is not supported!');
};
