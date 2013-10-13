#!/bin/env node
/**
 * 应用配置信息
 */
module.exports = {
	/* 静态资源 */
	'static_host': 'http://obullxl.github.io',
	
	/* 数据库配置参数 */
	'db_host': process.env.BAE_ENV_ADDR_SQL_IP,
	'db_port': process.env.BAE_ENV_ADDR_SQL_PORT,
	'db_name': 'XxSJRHDfpheLlikgBqSI',
	'db_user': process.env.BAE_ENV_AK,
	'db_passwd': process.env.BAE_ENV_SK
};
