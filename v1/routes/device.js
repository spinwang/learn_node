var express = require('express');
router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Device = mongoose.model('Device');

// router
router.param('device_id', function(req,res,next,device_id){
    var query = Device.findById(device_id);
    query.exec(function (err, device){

        if (err) {return next(err);}
        if (!device) {return next(new Error('cannot find device'));}
        req.device = device;
        return next();

    })
});

module.exports.router = router;

module.exports.index = function (req,res) {
    Device.find({},function(err,results){
        res.send(results);
    });
};

module.exports.creates = function (req,res) {
    Device.create(req.body,function(err,newDevice){
        res.send(newDevice);
    })
};

module.exports.show = function (req,res) {

};

module.exports.update = function (req,res) {

};
