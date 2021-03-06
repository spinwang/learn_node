/**
 * Created by spin on 8/28/16.
 */
var usb = require('usb');
var _   = require('underscore');
var vid = 0x2457;
var pid = 0x101E;
var ep1out = 0x01;
var ep1in  = 0x81;
var ep2in  = 0x82;
var ocean = usb.findByIds(vid,pid);
if (ocean) {
    ocean.open();
} else {
    console.error('No Ocean Optics connected');
    process.exit(1);
}

var interface = ocean.interfaces[0]; // there is usually only 1 interface
interface.claim();      // need to claim the interface before use any of the interface's endpoint
var endPoints = interface.endpoints;


// commands are sent through endpoint 1 Out
var ep_command = findEndPointByAddress(endPoints,ep1out);
// spectrum is acquired through endpoint 2 In
var ep_result_spectrum = findEndPointByAddress(endPoints,ep2in);
// all other result comes from endpoint 1 In
var ep_result = findEndPointByAddress(endPoints,ep1in);

// start the polling
ep_result.startPoll();
ep_result.on('data',function(buf){
    console.log(buf.toString());
});
ep_result_spectrum.startPoll();
var counter = 0;
var spectrum = [];
ep_result_spectrum.on('data',function(buf){
    counter ++;

    if (counter ===9) { // 9 packet is sent out, this the last one
        console.log(buf);
    } else {
        var data = processSpectrum(buf);
        console.log(data);
        console.log('data length', data.length);
        spectrum = spectrum.concat(data);
    };

});


// assemble the commands to send
var getSerialNum = createCmd(2,[0x05,0x00]);
var getSpectrum  = createCmd(1,[0x09]);
var cmd = new Buffer(2);

ep_command.transfer(getSerialNum,transferCB);
ep_command.transfer(getSpectrum,transferCB);

// need to properly close the usb device
//ocean.close();


function findEndPointByAddress(endPoints,address){
    return _.find(endPoints,function(ep){
        return ep.address === address;
    })
}

function createCmd(size,bytes){
    var buf = new Buffer(size);
    console.log('buffer length', buf.fill(0));
    while (bytes.length > 0) {
        buf.writeUInt8(bytes.pop(),bytes.length);
    }
    console.log(buf);
    return buf;
}

function transferCB(err){
    if (err) {
        console.error('command transfer failed');
        console.error(err);
    }
};

function processSpectrum(buf){
    var spectrum =[];
    var i;
    for (i = 0; i<buf.length; i = i+2){
        var decimal_val = buf.readUIntLE(i,2); // the order is LSB and then MSB
        spectrum.push(decimal_val);
    }
    return spectrum;
}