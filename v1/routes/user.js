var express = require('express');
router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Device = mongoose.model('Device');


// router
router.param('user_id', function(req,res,next,user_id){
    var query = Device.findById(user_id);
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

module.exports.create = function (req,res) {


};

module.exports.show = function (req,res) {

};

module.exports.update = function (req,res) {

};