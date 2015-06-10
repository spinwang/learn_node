/**
 * Created by spin on 4/30/15.
 */
var writable = require('stream').Writable;
var util =require('util');

function FilteredStream() {
    writable.call(this);
};

util.inherits(FilteredStream,writable);

var filteredStream = new FilteredStream();

filteredStream._write = function(chunck,encoding, cb){
    process.stdout.write('echo'+chunck+'\n');
    cb();
};

var filter = /(\d+)(.(\d+))? C/g;
var input = '25 C 53.1243 C 34 C';

var result = input.match(filter);
console.log(result);

String.prototype.isValidDeviceName = function(){
	var regExp_deviceName = /^[a-zA-Z0-9]+$/;
	return regExp_deviceName.test(this);
}

console.log('123'.isValidDeviceName());
console.log('12_'.isValidDeviceName());
process.stdin.pipe(filteredStream);


