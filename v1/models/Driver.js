var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var DriverSchema;

DriverSchema = new mongoose.Schema({

    driverId: String,
    io: mongoose.Schema.Types.Mixed,
    ui: [{
        type: String, // btn, display or input
        name: String,
        css_class: String, // bootstrap, ts library, or user defined
        id: String,
        position: String
    }],
    commands: [{
        id: String,
        command: String
    }]

});

module.exports = mongoose.model('Driver', DriverSchema);