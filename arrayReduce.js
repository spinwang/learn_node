
function add(a,b){
    return a+b;
};



Array.prototype.reduce = function(func){
    var self = this;
    var count;
    var value = 0;
    for (count = self.length-1; count > -1; count--) {
        value = func(self[count],value);
    }

    console.log(value);
    return value;
}

var numArray = [0,1,2,3,4];
numArray.reduce(add);

