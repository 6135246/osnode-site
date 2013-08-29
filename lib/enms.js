/**
 * 系统代码模块
 */
var log = require('./log');

/**
 * 主题类型枚举
 */
var topicCatgEnums = [{
	'key': 'TOP',
	'value': '最新资讯'
}, {
	'key': 'TWEET',
	'value': '开源博客'
}];

/**
 * 所有枚举对象
 */
exports.topicCatgEnums = function() {
	return topicCatgEnums;
};

/**
 * 所有枚举代码
 */
exports.topicCatgCodes = function() {
	var codes = [];

	topicCatgEnums.forEach(function(enm) {
		codes.push(enm.key);
	});

	return codes;
};

/**
 * 获取枚举值
 */
exports.topicCatgValue = function(catg) {
	var value = 'UNKOWN';
	topicCatgEnums.forEach(function(enm) {
		if(enm.key === catg) {
			value = enm.value;
		}
	});

	return value;
};
