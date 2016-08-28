/**
 * Created by spin on 11/28/15.
 */
var Q = require('q');
var fs  = require('fs');
/*var promise = Promise.resolve();
var createNum = function(){
    var num = Math.random();
    console.log(num);
    return num;
};
var success = function(num){
    console.log('-----');
    console.log('done',num);
};

//promise.then(createNum).then(success);

function promisify(f){
    return function(){
        var args = Array.prototype.slice.call(arguments);
        console.log(arguments);
        console.log(args);
        console.log(f)
        return Q.spread(args,f);
    }
}

function syncFunc1(a,b){
    return a+b;
}

var a = new Promise(function(resolve,reject){
    setTimeout(function(){resolve(1)},3000);
});

var b = new Promise(function(resolve,reject){
    setTimeout(function(){resolve(2)},1000)
});

var promiseFunc1 = promisify(syncFunc1);

promiseFunc1(a,b).then(success);

function eventualAdd(a, b) {
    console.log(arguments);
    return Q.spread([a, b], function (a, b) {
        return a + b;
    })
}*/

function promiseProduceFn(){
    var deferred = Q.defer();
    fs.readFile('yo.json',function(err,stdout){
        if (err) {deferred.reject(err)}
        else {deferred.resolve(stdout)}
    });
    return deferred.promise;
}

/*promiseProduceFn()
    .then(function(){
        return 0;
    })
    .then(function(res){
        console.log(1);
        console.log(res)
    });*/

function readJSON(){
    return promiseProduceFn().then(JSON.parse);
}

console.log(readJSON().then(function(js){console.log(js)}));

/*Q.fcall(function(){
    //return 10;
    throw new Error('hey')

}).catch(function(err){console.log(err)});*/

console.log('hey');
//eventualAdd(a,b).then(success)