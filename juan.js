
//one()
//two()
twoPointFive()
//three()
//four()
//five()
//six()
//seven()

'use strict';
function one() {
    console.log("problem one start :");
    console.log(product(3,5));
    console.log(product(3)(5))
    function product(x,y) {
        if(y === undefined) {
            return function(arg) {
                return x * arg;
            }
        } else {
            return x*y;
        }
    }
};

function two() {
    console.log("problem two start :");
    function printMessage(msg) {
        console.log(msg);
    }
    var msgs = ['hello','world','java','script']
    for (var i = 0; i < msgs.length; i++) {
        printMessage(msgs[i]);
        delay(1000);
    };
    function delay(ms) {
        ms += new Date().getTime();
        while(new Date() < ms) {}
    };
};

function twoPointFive(){
    console.log("problem two.five start :");
    function printMessage(msg) { console.log(msg);}
    var msgs = ['hello','world','java','script'];
    var delay = 0;

    for (var i = 0; i < msgs.length; i++) {
        (function(t,m) {
            setTimeout(printMessage,t,m);
        })(i*1000,msgs[i]);
    };
}

function three() {
    console.log("problem three start :");
    console.log("The output of the code is 'Hello'. The proper output will be displayed soon! ")
    var p1 = new Promise(function(fulfill, reject){
        fulfill('hello');
    });
    var p2 = new Promise(function(fulfill, reject){
        fulfill('world');
    });
    var output = "";
    p1.then(function(value) {
        output += value;
        return p2;
    }).then(function(secondValue) {
        output = output + " " + secondValue;
        console.log(output);
    });
}
// Count the # of prime numbers less than a non-negative number n
// A prime number is a number greater than one that can only be divided by 1 and itself evenly
function four(argument) {
    console.log("problem four start : ")
    var countPrimes = function(n) {
        var primes = [];
        for (var i = 2; i <= n; i++) {
            if(isPrime(i))
                primes.push(i);
        };
        function isPrime(n) {
            for (var i = 2; i < n; i++) {
                if(n % i === 0)
                    return false;
            };
            return true;
        };
        return primes.length;
    };
    console.log("The number of prime values for less than the value of n, where n = 10 is : " + countPrimes(10));
}
function five(){
    console.log("problem five start : ");
    // Arrays are objects too but I am assuming the question wants to know about
    // iterating over a basic object such as :
    var obj = { a: 1, b: 2, c: 5 }
    // answering by example..
    for(var key in obj) {
        console.log(key + " : " + obj[key]);
    }
};

function six() {
    console.log("problem six start : ");
    Function.prototype.memoize = function(){
        var self = this;
        var cache = {};
        return function(arg){
            if(arg in cache)
                return cache[arg];
            else{
                return cache[arg] = self(arg);
            }
        }
    }
    var isEven = (function(num){
        return num % 2 === 0;
    }).memoize();
    console.log(isEven(17));
    console.log(isEven(17));
};

function seven() {
    console.log("problem seven start : ");
    Function.prototype.partial = function() {
        var fn = this;
        var args = Array.prototype.slice.call(arguments);
        return function() {
            var arg = 0;
            for(var i = 0; i < args.length && arg < arguments.length; i++)
                if(args[i] === undefined)
                    args[i] = arguments[arg++];
            return fn.apply(this, args);
        };
    };

    function printParts(part1,part2,part3,part4) {
        console.log(part1 + " " + " " + part2 + " " + part3 + " " + part4);
    }

    var delay = setTimeout.partial(undefined, 1000);
    var printMissingParts = printParts.partial(undefined, 'world', undefined, 'script');
    delay(function() {
        console.log('welcome to tetrascience')
    });
    printMissingParts('hello','java');
}


