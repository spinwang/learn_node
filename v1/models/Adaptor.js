var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var AdaptorSchema = new mongoose.Schema({

    // generic device information
    deviceType: String, //SENS, CAM, ADAPTOR
    deviceName: String,
    deviceApikey: String, // let apiKey === _id ?
    user: [{type: ObjectId, ref: 'User'}],
    owner: {type: ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now},

    // adaptor specific information
    driver: {type: ObjectId, ref: 'Driver'},

    // socket information
    browserSocketId:[String],
    hardwareSocketId:String,

    // meta-data
    location:String,
    information:String

});

mongoose.model('Adaptor', AdaptorSchema);