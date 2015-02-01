var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema = new mongoose.Schema({
    userName : String,
    password : String,

    device : [{type: ObjectId, ref: 'Device'}]

});

mongoose.model('User', UserSchema);
