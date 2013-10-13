#!/bin/env node

/**
 * 应用配置信息
 */
module.exports = {
	/* 是否使用HTTPS */
	'use_ssl': false,
	'web_protocal': 'http://',
	
	/* 静态资源 */
	'static_host': 'http://obullxl.github.io',
	
	/* 数据库配置参数 */
	'db_host': process.env.DB_HOST,
	'db_port': process.env.DB_PORT,
	'db_name': process.env.DB_NAME,
	'db_user': process.env.DB_USER,
	'db_passwd': process.env.DB_PASSWD,
	
	/* 日志配置 */
	'log_type': 'console',
	'log_level': 0,
	
	/* 广告推荐显示开关 */
	'ads_show': process.env.ADS_SHOW || false
};
