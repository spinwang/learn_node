var superagent = require('superagent');
var expect = require('expect.js');

describe('ts cloud server',function(){

    var seedDevice = {
        deviceType:'SENS',
        deviceName:'TC-001'
    };

    it('post a new device', function(done){
        superagent.post('http://localhost:3000/devices')
            .send(seedDevice)
            .end(function(e,res){
                expect(e).to.eql(null)
                expect(res.body._id.length).to.eql(24)
                done()
            })

    })


});

