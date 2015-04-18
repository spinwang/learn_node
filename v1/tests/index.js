/*
    Testing script
    - data base is cleared every time before the run
    - data base is NOT cleared after  the run
    - can be used as the seeding script to prepare for demo
*/



// Testing modules
var superagent = require('superagent');
var expect = require('expect.js');

// db modules
var mongoose = require('mongoose');
var dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/ts';
var clearDB = require('mocha-mongoose')(dbUrl,{noClear:true});
var Device = require('../models/Device.js');
var Driver = require('../models/Driver.js');



describe('TS CLOUD SERVER',function(){

    var seedDevice = {
        deviceType:'SENSOR12',
        deviceName:'TC-001'
    };

    var seedDriver = {
        driverId : 'MassBalancer',
        io: {
            port:'/dev/tty0',
            standard:'RS232'
        },
        ui : [{
            type:'button',
            name:'Single Acquisition',
            css_class:'btn',
            id : 'singleAcquisition',
            position: ''
        },{
            type:'input',
            name:'Interval(sec)',
            css_class:'input',
            id : 'interval',
            position: ''
        },{
            type:'button',
            name:'Multiple Acquisition',
            css_class:'btn',
            id : 'multipleAcquisition',
            position: ''
        }],
        commands : [{
            id : 'singleAcquisition',
            command:'\rRS232-COMMAND'
        }]
    };

    // Connect to db
    before(function(done){
        if (mongoose.connection.db) return done();
        mongoose.connect(dbUrl,done);
    });

    // clearDB
    before(function(done){
        clearDB(done);
    });

    // Seed Driver
    before(function(done){
       Driver.create(seedDriver,done);
    });

    // TEST
    it('check data seeding', function(done){
        Driver.count(function(err,length){
            expect(err).to.eql(null);
            expect(length).to.eql(1);
            done();
        })
    });

    // TEST
    it('post a new device', function(done){
        superagent.post('http://localhost:3000/devices')
            .send(seedDevice)
            .end(function(e,res){
                expect(e).to.eql(null);
                expect(res.body._id.length).to.eql(24);
                done();
            })

    })


});

