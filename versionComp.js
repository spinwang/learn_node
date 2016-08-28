/**
 * Created by spin on 11/18/15.
 */
var assert = require('assert');
function compareVersion(version1, version2){
    var v1= version1.split('.');
    var v2= version2.split('.');

    var max_length = Math.max(v1.length,v2.length);
    var i;
    for(i=0; i < max_length; i++){
        if (+v1[i] < +v2[i]){
            return -1;
        } else if (+v1[i] > +v2[i]){
            return 1;
        }
    }
    if(v1[i] === undefined && +v2[i] != 0){
        return -1;
    }
    if(v2[i] === undefined && +v1[i] != 0){
        return 1;
    }
    else{
        return 0;
    }
}

assert(compareVersion('1.1','1.1.0') === 0);
assert(compareVersion('0.1','1.1') === -1);
assert(compareVersion('2.13','1.1.0') === 1);
