var db = require('../util/db_mongodb');

exports.main = function(req, res) {
	res.render('index.jade');
}

exports.regStudent = function(req, res) {
	db.insert('zjdgx-student',parseStudentInfo(req), null, function (err, result) {
		if (err) {
			res.json({result: -1, msg: err});
		} else {
			res.json({result: 1});
		}
	});
}

function parseStudentInfo(req) {
	var info = {};
	
	info.name    = req.body.studentName,
	info.age     = req.body.studentAge,
	info.tele    = req.body.phoneNumber,
	info.addr    = req.body.address,
	info.grade   = req.body.grade,
	info.school  = req.body.school;
	info.regTime = new Date();
	
	return info;
}