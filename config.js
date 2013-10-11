/**
 * 应用配置信息
 */
module.exports = {
	/* 静态资源 */
	'static_host': process.env.STATIC_HOST || 'http://obullxl.github.io',
	
	/* 数据库配置参数 */
	'db_host': process.env.BAE_ENV_ADDR_SQL_IP || process.env.OPENSHIFT_MYSQL_DB_HOST || process.env.DB_HOST,
	'db_port': process.env.BAE_ENV_ADDR_SQL_PORT || process.env.OPENSHIFT_MYSQL_DB_PORT || process.env.DB_PORT,
	'db_name': process.env.DB_NAME || 'obullxl' || 'XxSJRHDfpheLlikgBqSI',
	'db_user': process.env.BAE_ENV_AK || process.env.DB_USER || 'adminLFMqBvC',
	'db_passwd': process.env.BAE_ENV_SK || process.env.DB_PASSWD || '5TrqWh3jc7i7',
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
