/**
 * Created by root on 2/1/15.
 */
var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var CameraSchema;

CameraSchema = new mongoose.Schema({

    // generic device information
    deviceType: {type:String,default:'CAM'}, //SENS, CAM, ADAPTOR
    deviceName: String,
    user: [{type: ObjectId, ref: 'User'}],
    owner: {tye: ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now},

    // camera specific information
    video: Boolean, // default is snapshot mode
    resolution: {
        x: {type:Number,default:320},
        y: {type:Number,default:240}
    },

    // socket information
    browserSocketId:[String],
    hardwareSocketId:String,

    // meta-data
    location:String,
    information:String

});

mongoose.model('Device', DeviceSchema);