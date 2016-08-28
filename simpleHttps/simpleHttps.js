/**
 * Created by spin on 11/25/15.
 */
var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var keyPath = '../../Tetrascience_device/provisioning/roles/base_bbb/files/tslink_localserver.key';
var certPath = '../../Tetrascience_device/provisioning/roles/base_bbb/files/tslink_localserver.crt';

var options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
};

// Create a service (the app object is just a callback).
var app = express();
app.get('/',function(req,res){
    res.send('Hey, this is from an HTTPS server on 127.0.0.1:4001 !!!');
})

// Create an HTTP service.
http.createServer(app).listen(4000, cb.bind(null,4000));
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(4001,cb.bind(null,4001));

function cb(port){
    console.log('server running at port', port)
}