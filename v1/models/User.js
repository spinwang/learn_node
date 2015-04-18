var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema = new mongoose.Schema({
    userName : String,
    password : String,

    device : [{type: ObjectId, ref: 'Device'}]

});

module.exports = mongoose.model('User', UserSchema);
