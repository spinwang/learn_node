var fs = require('fs');

fs.readFile('./test.file', function(err,buf){
  console.log(buf,'\n');

  console.log(buf.toString(), '\n');
  console.log(buf.toString('ascii'), '\n');

});
