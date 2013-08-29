
/*
 * GET home page.
 */

exports.index = function(request, response){
  // res.render('index', { title: 'Express' });
  response.redirect('/topic/create');
};