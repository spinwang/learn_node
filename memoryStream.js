var stream = require('stream');
var express = require('express');
var util = require('util');
var app = express();

function MemoryStream(limit){
  this.limit = limit;
  stream.Readable.call(this);
};

util.inherits(MemoryStream, stream.Readable);

MemoryStream.prototype._read = function(){
  if (this.limit === 0){
    this.push();
  } else {
    this.push(util.inspect(process.memoryUsage()));
    this.push('\n');
    this.limit--;
  };

};

app.get('/', function(req,res){
  memoryStream = new MemoryStream(10);
  memoryStream.pipe(res);
});

app.listen(3000);
