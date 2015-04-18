var stream = require('stream');
var util = require('util');

DuplexStream = function(){
  this.waiting = false;
  stream.Duplex.call(this);
};

util.inherits(DuplexStream,stream.Duplex);

DuplexStream.prototype._write = function(chunk,encoding,callback){
  this.waiting = false; // checks if prompt is being displayed
  this.push('\u001b[;32m'+chunk+'\u001b[;39m');
  callback();
};

DuplexStream.prototype._read = function(size){
  if (!this.waiting){
    this.push('Feed me with data!\n');
    this.waiting = true;
  }
};

duplexStream = new DuplexStream();

process.stdin.pipe(duplexStream).pipe(process.stdout);
