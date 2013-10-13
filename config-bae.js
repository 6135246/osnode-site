#!/bin/env node
/**
 * 应用配置信息
 */
module.exports = {
	/* 是否使用HTTPS */
	'use_ssl': false,
	
	/* 静态资源 */
	'static_host': 'http://obullxl.github.io',
	
	/* 数据库配置参数 */
	'db_host': process.env.BAE_ENV_ADDR_SQL_IP,
	'db_port': process.env.BAE_ENV_ADDR_SQL_PORT,
	'db_name': 'XxSJRHDfpheLlikgBqSI',
	'db_user': process.env.BAE_ENV_AK,
	'db_passwd': process.env.BAE_ENV_SK,
	
	/* 日志配置 */
	'log_type': 'console',
	'log_level': 2 // 0-TRACE, 1-DEBUG, 2-INFO, 3-WARN, 4-ERROR, 5-FETAL
};
