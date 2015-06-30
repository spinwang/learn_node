/**
 * Created by spin on 6/27/15.
 */
var fs = require('fs');
fs.watch('testdir', function (event, filename) {
    console.log('event is: ' + event);
    if (filename) {
        console.log('filename provided: ' + filename);
    } else {
        console.log('filename not provided');
    }
});