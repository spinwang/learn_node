/**
 * Created by spin on 7/22/15.
 */



// http server serves dashboard
var STREAM_SECRET = process.argv[2],
    STREAM_PORT = process.argv[3] || 8082,
    WEBSOCKET_PORT = process.argv[4] || 8084,
    STREAM_MAGIC_BYTES = 'jsmp'; // Must be 4 bytes

var width = 320,
    height = 240;

// Websocket Server
var socketServer = new (require('ws').Server)({port: WEBSOCKET_PORT});
socketServer.on('connection', function(socket) {
    // Send magic bytes and video size to the newly connected socket
    // struct { char magic[4]; unsigned short width, height;}
    var streamHeader = new Buffer(8);
    streamHeader.write(STREAM_MAGIC_BYTES);
    streamHeader.writeUInt16BE(width, 4);
    streamHeader.writeUInt16BE(height, 6);
    socket.send(streamHeader, {binary:true});

    console.log( 'New WebSocket Connection ('+socketServer.clients.length+' total)' );

    socket.on('close', function(code, message){
        console.log( 'Disconnected WebSocket ('+socketServer.clients.length+' total)' );
    });
});

socketServer.broadcast = function(data, opts) {
    for( var i in this.clients ) {
        if (this.clients[i].readyState == 1) {
            this.clients[i].send(data, opts);
        }
        else {
            console.log( 'Error: Client ('+i+') not connected.' );
        }
    }
};

// UDP server takes video stream
var PORT = 1234;

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log('Message to: ' +  remote.address + ', from: ' + remote.port);
    socketServer.broadcast(message, {binary:true});
});

server.bind(PORT);

// HTTP server
var app = require('express').createServer();
app.listen(80);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});


