
/*var writable = require('stream').Writable;
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

var cookie = 's%3A0MiBotm_c7xeHs56Hfiqmykf-dEk63CT.dxCNrLkRhbTFc2l3y4LpuzXn1kwRZV9S5ftMjitjAV4; Path=/; HttpOnly';
var cookieFilter = /(?:; Path=\/; HttpOnly)$/g;
console.log(cookie.match(cookieFilter));
console.log(cookieFilter.exec(cookie));

var pattern = /^([a-z-]+)sword/g;
var data = 'ninja-ninja-ninja-sword';
console.log(data.match(pattern));
console.log(pattern.exec(data));

pattern = RegExp("O (\\d{4}.\\d{1})\\r\\n")
data = "O 0209.4\r\n";
console.log(data.match(pattern)[0]);
console.log(data.match(pattern)[1]);
console.log(data.match(pattern)[2]);
console.log(pattern.exec(data));*/


/*data = "*V<SD>\r\n<RH Units=\"%RH\">41.22</RH>\r\n<TEMP Units=\"C\">24.24</TEMP>\r\n</SD>CRC=0x27C1\r\n";
pattern = RegExp("(.+<SD>\\\r\\\n<RH Units=\\\"%RH\\\">)(\\d+.\\d+)(?:<\\/RH>)",'g');
console.log(data.match(pattern));
console.log(pattern.exec(data));*/


var str = 'For more information, see Chapter 3.4.5.1 Chapter 3.4.6.6';
var re = /Chapter (\d+(\.\d)*)/g;
var found = str.match(re);
var found1 = re.exec(str);
var found2 = re.exec(str);

console.log(found);
console.log(found1);
console.log(found2);
