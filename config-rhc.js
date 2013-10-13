#!/bin/env node
/**
 * 应用配置信息
 */
module.exports = {
	/* 静态资源 */
	'static_host': 'https://' + process.env.OPENSHIFT_APP_DNS,
	
	/* 数据库配置参数 */
	'db_host': process.env.OPENSHIFT_MYSQL_DB_HOST,
	'db_port': process.env.OPENSHIFT_MYSQL_DB_PORT,
	'db_name': process.env.OPENSHIFT_GEAR_NAME,
	'db_user': process.env.OPENSHIFT_MYSQL_DB_USERNAME,
	'db_passwd': process.env.OPENSHIFT_MYSQL_DB_PASSWORD
};
