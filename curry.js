/*Listing 5.10 and 5.12 in JS Ninja
* partially applying function or currying*/

var assert = require('assert');

Function.prototype.partial = function(){
    var func = this;
    var argList = Array.prototype.slice.call(arguments);
    return function(){
        return func.apply(this,argList);
    }
}

String.prototype.csv = String.prototype.split.partial(/\s*,\s*/);
var time = new Date().toString();
var data = ('time,'+time+',value,'+Math.random());
var result = data.csv();
console.log(result);

assert(result.length==4, 'The curry works');
