var db = require('../db');
const shortid = require('shortid');

module.exports.index = function (req, res) {
  	res.render('user/index', {
  		users: db.get('users').value()
  	});
};
module.exports.seach = function (req,res){
	var q= req.query.q;
	var users = db.get('users').value();
	var matchUser = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
	});
	res.render('user/index',{
		users: matchUser
	})
}

module.exports.id =  function (req,res){
	var id = req.params.id;
	var user = db.get('users').find({id : id}).value();
	res.render('user/view',{
		user: user
	})
}

module.exports.creatGet = function (req,res){
	res.render("user/create");
}

module.exports.creatPost = function(req,res){
	req.body.id =shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
}