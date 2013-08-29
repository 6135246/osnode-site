/**
 * 日志模块
 */
exports.info = function(text) {
	process.stdout.write(text + "\n");
};

exports.error = function(text) {
	process.stderr.write(text + "\n");
};
