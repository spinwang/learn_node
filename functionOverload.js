// variable number of arguments


var whatever ={
    data : ['CNAME', 'MERGE SORT']
}

function addFunction(obj,funcName,func){
    var old  = obj[funcName];
    obj[funcName] = function() {
        if (func.length == arguments.length) {
            // execute the new function
            return func.apply(this,arguments);
        } else if (typeof  old == 'function') {
            // execute the old function
            return old.apply(this,arguments);
        }
    };
}

addFunction(whatever,'ninja',function(a,b){
    console.log(this.data);
});
addFunction(whatever,'ninja',function(a){
    console.log(a+'lol')
});
addFunction
whatever.ninja('a','b');
whatever.ninja('a');

