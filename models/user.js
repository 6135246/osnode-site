/*
 * User model
 */
exports.model = function() {
	return {
		"id" : "",
		"firstname" : "",
		"lastname" : "",
		"message" : ""
	};
};

/**
 * 模块依赖
 */
var db = require("../lib/db");

/**
 * DAO: find
 */
exports.findID = function(id, handler) {
	db.execQuery({
		"sql" : "SELECT * FROM MyTable WHERE id=?",
		"args" : [ id ],
		"handler" : handler
	});
};

/**
 * DAO: findAll
 */
exports.findAll = function(handler) {
	db.execQuery({
		"sql" : "SELECT * FROM MyTable",
		"handler" : handler
	});
};

/**
 * DAO: findMinID
 */
exports.findMinID = function(minId, handler) {
	db.execQuery({
		"sql" : "SELECT * FROM MyTable WHERE id>?",
		"args" : [ minId ],
		"handler" : handler
	});
};
