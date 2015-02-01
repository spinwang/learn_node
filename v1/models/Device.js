var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

var DeviceSchema = new mongoose.Schema({
    deviceType : String, //SENS, CAM, ADAPTOR
    deviceName : String,
    deviceApikey : String, // let apiKey === _id ?
    user : [{type: ObjectId, ref: 'User'}],
    owner : {tye: ObjectId, ref: 'User'},
    date : {type: Date, default: Date.now}
});

mongoose.model('Device',DeviceSchema);