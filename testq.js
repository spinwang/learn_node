/**
 * Created by spin on 9/7/15.
 */
var Q = require('q');

function promise1(){
    var deferred = Q.defer();
    setTimeout(function(){
        deferred.resolve('promise 1');
        //return 1;
    }, 10);
    return deferred.promise;
}

function promise11(){

}

function promise2(data){
    console.log(data);
    return Q.fcall(function(){
        return 'promise 2';
    })
}

promise1().then(
    function(data){
        console.log(data);
        //return promise2();
        //return function(){return 0;};
        return 2;
    }
).then(
    function(data){
        console.log(data);
        return {
            hey: 1
        };
    }
).then(
    success, fail
);

function success(data){
    console.log(data);
    console.log('done')
};

function fail(err){
    console.error(err);
}