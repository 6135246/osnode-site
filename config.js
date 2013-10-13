#!/bin/env node
/**
 * 应用配置信息
 */

var catg = 'rhc';
if(process.env.BAE_ENV_AK) {
	catg = 'bae';
}
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('DB-CONFIG-TYPE: ' + catg);

var config = require('./config-' + catg + '.js');
for(key in config) {
	if(!(typeof (config[key]) == "function")) {
		console.log(key + '\t\t= ' + config[key]);
	}
}

module.exports = {
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
	'log_type': 'console',
	'log_level': 1, // 0-TRACE, 1-DEBUG, 2-INFO, 3-WARN, 4-ERROR, 5-FETAL
	
	/* 缓存配置 */
	'cache_type': 'global',
	
	'ads_show': process.env.ADS_SHOW || true,
	
	'uploadPath': './public/upload/',
	'pageSize': 30
};
