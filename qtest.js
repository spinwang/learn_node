/**
 * Created by spin on 10/25/15.
 */
var Q = require('q');
var fs = require('fs');

var readFile = Q.denodeify(fs.readFile);
readFile("package.json", "utf-8");

function promiseProduceFn(){
    var deferred = Q.defer();
    fs.readFile('package.json',function(err,stdout){
        if (err) {deferred.reject(err)}
        else {deferred.resolve(stdout)}
    });
    return deferred.promise;
}

console.log(promiseProduceFn())
Q.allSettled([promiseProduceFn(), promiseProduceFn()])
    .then(function(results){
        console.log(results);
    })