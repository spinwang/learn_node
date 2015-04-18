var express = require('express');
router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Device = mongoose.model('Device');


// router
router.param('user_id', function(req,res,next,user_id){
    var query = User.findById(user_id);
    query.exec(function (err, user){

        if (err) {return next(err);}
        if (!device) {return next(new Error('cannot find device'));}
        req.user = user;
        return next();

    })
});

module.exports.router = router;

module.exports.index = function (req,res) {

};

module.exports.creates = function (req,res,next) {
    var user = req.body;
    User.findOne({email:user.email},function(err,user){
        if (err) {return next(err);}
        if (user) {
            res.send( { warning:'Email already exists.' });
        } else User.create(user, function (err, newUser) {
            res.send(newUser);
        });
    });

};

module.exports.show = function (req,res) {

};

module.exports.update = function (req,res) {

};

module.exports.showDevices = function (req,res) {
    var email = req.user;
    res.send();

};