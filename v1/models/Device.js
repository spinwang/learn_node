var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var DeviceSchema;

DeviceSchema = new mongoose.Schema({
    deviceType: String, //SENS, CAM, ADAPTOR
    deviceName: String,
    deviceApikey: String, // let apiKey === _id ?
    user: [{type: ObjectId, ref: 'User'}],
    owner: {type: ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Device', DeviceSchema);