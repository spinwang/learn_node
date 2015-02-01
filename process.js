// Node in Practice list 2.17

var args = {
  '-h' : displayHelp,
  '-r' : readFile
};

function displayHelp() {
  console.log("Type --> node process.js -r FILENAME --> to read file \n");
};

function readFile( fileName ) {
  if (fileName && fileName.length>0 ){
    require('fs').createReadStream(fileName).pipe(process.stdout);
  } else {
    console.log('please add valid filename');
  };
};

if ( process.argv.length > 0) {
  process.argv.forEach( function(arg, index) {
    //console.log(arg, '\n');
    var func = args[arg];
    if ( func ) {
      func.apply(this,process.argv.slice(index+1));
    }
  });
}
  
