/**
 * 应用配置信息
 */
module.exports = {
	'host': process.env.NODEHOST || 'http://anode.aliapp.com',
	'db': 'r631obullxl',
	'dbhost': 'r7821obullxl.mysql.aliyun.com',
	'port': 3306,
	'user': 'r631obullxl',
	'password': 'rd828439b',
	'charset': 'UTF8',
	'maxConnLimit': 5,
	'uploadPath': './public/upload/',
	'appPort': process.env.PORT || 10080,
	'pageSize': 30
};
