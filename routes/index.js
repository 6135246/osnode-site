/**
 * 前台页面模块
 */
exports.index = function(request, response) {
	// res.render('index', { title: 'Express' });
	response.redirect('/topic/create');
};
