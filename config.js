#!/bin/env node

/**
 * 应用配置信息
 */

var catg = 'dev';
if(process.env.BAE_ENV_AK) {
	catg = 'bae';
} else if(process.env.OPENSHIFT_GEAR_NAME) {
	catg = 'rhc';
}

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('DB-CONFIG-TYPE: ' + catg);

var config = require('./config-' + catg + '.js');
for(key in config) {
	if(!(typeof (config[key]) == "function")) {
		console.log(key + ' = ' + config[key]);
	}
}

module.exports = {
	/* 是否使用HTTPS */
	'use_ssl': config['use_ssl'] || false,
	
	/* 静态资源 */
	'static_host': config['static_host'] || 'http://obullxl.github.io',
	
	/* 数据库配置参数 */
	'db_host': config['db_host'] || process.env.DB_HOST,
	'db_port': config['db_port'] || process.env.DB_PORT,
	'db_name': config['db_name'] || process.env.DB_NAME,
	'db_user': config['db_user'] || process.env.DB_USER,
	'db_passwd': config['db_passwd'] || process.env.DB_PASSWD,
	'db_charset': 'UTF8',
	'db_conn_limit': 5,
	
	/* 日志配置 */
	'log_type': config['log_type'] || 'console',
	'log_level': config['log_level'] || 0, // 0-TRACE, 1-DEBUG, 2-INFO, 3-WARN, 4-ERROR, 5-FETAL
	
	/* 缓存配置 */
	'cache_type': 'global',
	
	'ads_show': process.env.ADS_SHOW || true,
	
	'uploadPath': './public/upload/',
	'pageSize': 30
};
