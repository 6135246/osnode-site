/**
 * 应用配置信息
 */
module.exports = {
	'host': process.env.NODEHOST || 'http://obullxl.github.io',
	'db': process.env.DB_NAME || 'XxSJRHDfpheLlikgBqSI',
	'dbhost': process.env.BAE_ENV_ADDR_SQL_IP || process.env.DB_HOST,
	'port': process.env.BAE_ENV_ADDR_SQL_PORT || process.env.DB_PORT,
	'user': process.env.BAE_ENV_AK || process.env.DB_USER,
	'password': process.env.BAE_ENV_SK || process.env.DB_PASSWD,
	'charset': 'UTF8',
	'maxConnLimit': 5,
	'uploadPath': './public/upload/',
	'pageSize': 30
};
