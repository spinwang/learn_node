Function.prototype.memoize = function(){
    var func = this;
    var value;

    var evaluated = {};

    return function(){
        var args = [].slice.call(arguments);
        var hash = evaluated[args.join(',')]

        if(typeof evaluated[hash] !== 'undefined'){
            return evaluated[hash];
        }

        evaluated[hash] = func.apply(null, arguments);

        return evaluated[hash];

    }
}

var isEven = (function(num){
    console.log('hey')
    return num % 2 === 0;

}).memoize();

console.log(isEven(4));
console.log(isEven(4));
