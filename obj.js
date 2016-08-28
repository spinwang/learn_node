/*
* JS obj
* */
//part 1
var assert = require('assert');

var translation = {
    "for" : 1,
    while : 2,
    spin : 1,
    anObj : {
        hey: 1,
        yo: 2
    }
};

translation.anObj.hey = 4;
console.log(translation.anObj.hey)

assert(translation.for == 1,"Can have string in the obj property");
assert(translation.while == translation['while'],"Get Obj property");

var person1 = {
    name : 'Spin'
};

//part 2
Object.defineProperty(person1,"name",{
    enumerable:false
});

assert(Object.keys(person1).length == 0, 'Enumerable');