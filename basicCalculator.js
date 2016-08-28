/**
 * Created by spin on 11/7/15.
 */

var assert = require('assert');
var calculate = function(s) {
    // filter out all the empty space in the string
    s = s.replace(/\s+/g,'');
    s = s.split(''); // convert string into array
    console.log(s);
    return cal(s);

    function cal(s){
        console.log('tick', s);

        var arg1 = s[0], arg2 = s[2];
        var op = s[1];
        if (s.length > 3 ){
            if ( isPriorityOperator(op) ) { // * or /, work on these first
                var result = applyOp(op,arg1,arg2);
                s.splice(0,3,result);       // replace the arg1,arg2,op with the result, then keep going
                return cal(s);
            } else {
                s.splice(0,2);
                return applyOp(op,arg1, cal(s))
            }
        } else {
            return applyOp(op,arg1,arg2);
        }
    }
};

function isOperator(s){
    var regExp = /\-|\+|\\|\*/;
    return regExp.test(s);
}

function isPriorityOperator(s){
    var regExp = /\\|\*/;
    return regExp.test(s);
}

function isNum(s){
    var regExp = /[0-9]/;
    return regExp.test(s);
}

function applyOp(op,arg1,arg2){
    arg1 = parseInt(arg1);
    arg2 = parseInt(arg2);
    switch (op) {
        case '*':
            return arg1*arg2;
        case '+':
            return arg1+arg2;
        case '-':
            return arg1-arg2;
        case '/':
            return parseInt(arg1/arg2);
    }
}

var formula = '1+4/3';
assert( calculate(formula) === 2);
formula = '5+6+5*6';
assert( calculate(formula) === 41);
formula = '5+6+5*6/3';
assert( calculate(formula) === 21);