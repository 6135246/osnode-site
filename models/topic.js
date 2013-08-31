/*
 * Topic model
 */
exports.model = function() {
	return {
		"id": "",
		"firstname": "",
		"lastname": "",
		"message": ""
	};
};

/**
 * 模块依赖
 */
var db = require("../lib/db");

/**
 * DAO: insert
 */
exports.insert = function(tpc, handler) {
	db.execQuery({
		"sql": "INSERT INTO atom_topic(catg, title, summary, content, gmt_create, gmt_modify) VALUES(?, ?, ?, ?, NOW(), NOW())",
		"args": [tpc.catg, tpc.title, tpc.summary, tpc.content],
		"handler": handler
	});
};

/**
 * DAO: update
 */
exports.update = function(tpc, handler) {
	db.execQuery({
		"sql": "UPDATE atom_topic SET catg=?, title=?, summary=?, content=?, gmt_modify=NOW() WHERE id=?)",
		"args": [tpc.catg, tpc.title, tpc.summary, tpc.content, tpc.id],
		"handler": handler
	});
};

/**
 * DAO: delete
 */
exports.remove = function(id, handler) {
	db.execQuery({
		"sql": "DELETE FROM atom_topic WHERE id=?",
		"args": [id],
		"handler": handler
	});
};

/**
 * DAO: findID
 */
exports.findID = function(id, handler) {
	db.execQuery({
		"sql": "SELECT * FROM atom_topic WHERE id=?",
		"args": [id],
		"handler": handler
	});
};

/**
 * DAO: findAll
 */
exports.findAll = function(handler) {
	db.execQuery({
		"sql": "SELECT * FROM atom_topic ORDER BY id DESC",
		"handler": handler
	});
};

/**
 * DAO: count
 */
exports.count = function(args, handler) {
	db.execQuery({
		"sql": "SELECT COUNT(*) AS count FROM atom_topic WHERE catg IN (?)",
		args: [args.catgs],
		"handler": function(results) {
			handler(parseInt(results[0].count));
		}
	});
};

/**
 * DAO: findPage
 */
exports.findPage = function(args, handler) {
	db.execQuery({
		"sql": "SELECT * FROM atom_topic WHERE catg IN (?) ORDER BY id DESC LIMIT ?,?",
		args: [args.catgs, args.offset, args.limit],
		"handler": handler
	});
};

exports.findList = function(args, handler) {
	db.execQuery({
		"sql": "SELECT * FROM atom_topic ORDER BY id DESC LIMIT ?,?",
		args: [args.offset, args.limit],
		"handler": handler
	});
};

exports.findTopVisits = function(args, handler) {
	db.execQuery({
		"sql": "SELECT * FROM atom_topic ORDER BY visit_count DESC, id DESC LIMIT 5",
		args: [args.offset, args.limit],
		"handler": handler
	});
};

exports.findTopReplys = function(args, handler) {
	db.execQuery({
		"sql": "SELECT * FROM atom_topic ORDER BY reply_count DESC, id DESC LIMIT 5",
		args: [args.offset, args.limit],
		"handler": handler
	});
};

/**
 * DAO: findMinID
 */
exports.findMinID = function(minId, handler) {
	db.execQuery({
		"sql": "SELECT * FROM atom_topic WHERE id>?",
		"args": [minId],
		"handler": handler
	});
};
