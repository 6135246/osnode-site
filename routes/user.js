/**
 * Modules dependencies
 */
var user = require("../models/user");
var log = require("../lib/log");

var url = require("url");
var querystring = require("querystring");

/**
 * Create a user
 */
exports.create = function(request, response) {
	var pathname = url.parse(request.url).pathname;
};
 
/**
 * GET users listing.
 */
exports.list = function(request, response) {
	log.info("+Query: " + url.parse(request.url).query);
	log.info("+PathName: " + url.parse(request.url).pathname);
	
	user.findAll(function(results) {
		response.send(results);
	});
};

exports.list2 = function(request, response) {
	var args = querystring.parse(url.parse(request.url).query);
	var minId = args['minId'] || 5;
	
	user.findMinID(minId, function(results) {
		response.send(results);
	});
};

