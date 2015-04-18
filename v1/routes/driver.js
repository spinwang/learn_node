var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Device = mongoose.model('Device');
var Driver = mongoose.model('Driver');

// router
router.param('driver_id', function(req,res,next,driver_id){
    console.log('driverid is',driver_id);
    var query = Driver.find({driverId:driver_id});
    query.exec(function (err, driver){

        if (err) {return next(err);}
        if (!driver) {return next(new Error('cannot find driver'));}
        if (driver.length>1) {return next(new Error('more than 1 driver has this name'));}
        req.driver = driver;
        console.log('here');
        return next();

    })
});



module.exports.param = function(req,res,next,param){
    Driver.find({driverId:param},function(err,result){
        // only ONE driver should be found
        if (err) {return next(err);}
        if (!result) {return next(new Error('cannot find driver'));}
        if (result.length>1) {return next(new Error('more than 1 driver has this name'));}
        req.driver = result;
        return next();
    });
};



module.exports.index = function (req,res) {
    Driver.find({},function(err,results){
        res.json(results);
    });
};

module.exports.creates = function (req,res) {
    Driver.create(req.body,function(err,newDriver){
        res.json(newDriver);
    })
};

module.exports.show = function (req,res) {
    // always use findOne if there is only one expected.
    Driver.findOne({driverId:req.params.driver_id},function(err,result){
        res.json(result);
        console.log(result);
    });

    //res.json(req.driver);
};

module.exports.update = function (req,res) {

};
