var Writable = require('stream').Writable;
var util = require('util');

module.exports = CountStream;

util.inherits(CountStream, Writable);

function CountStream(matchText, options){
  Writable.call(this,options);
  this.count = 0;
  this.matcher = new RegExp(matchText, 'ig');
};

CountStream.prototype._write = function(chunk, encoding, cb) {
  console.log('hry');
  console.log(chunk.toString('ascii'));
  var matches = chunk.toString('ascii').match(this.matcher);
  if (matches) {
    console.log('matched');
    if (matches.length) {this.count += matches.length;}
  };
  cb();
};

CountStream.prototype.end = function(){
  console.log('end...');
  this.emit('Total', this.count)
};

CountStream.prototype.on('data', function(){
  console.log('here');
});



