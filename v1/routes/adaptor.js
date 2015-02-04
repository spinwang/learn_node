var express = require('express');
router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Device = mongoose.model('Device');

// router
router.param('driver_id', function(req,res,next,driver_id){
    var query = Device.find({driverId:driver_id});
    query.exec(function (err, driver){

        if (err) {return next(err);}
        if (!driver) {return next(new Error('cannot find driver'));}
        if (driver.length>1) {return next(new Error('more than 1 driver has this name'));}
        req.driver = driver;
        return next();

    })
});

module.exports.router = router;

module.exports.index = function (req,res) {
    res.send(Driver.find());
};

module.exports.creates = function (req,res) {
    Driver.create(req.body,function(err,newDriver){
        res.send(newDriver);
    })
};

module.exports.show = function (req,res) {

};

module.exports.update = function (req,res) {

};

