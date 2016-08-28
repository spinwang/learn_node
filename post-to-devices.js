/**
 * Created by spin on 8/17/16.
 */
var mongoose    = require('mongoose');
var Q           = require('q');
require('./../models/device.js');
var Device = mongoose.model('Device');


Q.async(function* (){
    var devices = yield findAllDevices();
    devices = yield Q.all(devices.map(changeDeviceDriver));
    for (var d in devices) {

    }
})();

function findAllDevices(query){
    return Device.find(query);
}

function changeDeviceDriver(device,driverId){
    device.driverId = driverId || 'GPIOThermocouple_ts';
    return d.save();
}