/**
 * Created by spin on 8/6/15.
 */

'use strict'
for (var i= 0;  i <5; i++){
    var func = function(arg){
        console.log(arg);
    };

    setTimeout(func.bind(null,i),(i+1)*1000);
}

function print(i) {
    console.log(i);
}

for (var i= 0;  i <5; i++){

    (function(){
        var j = i;
        setTimeout(print(j),1000)
    })();
}

for (var i= 0;  i <5; i++){

    var hey = function(x) {
        setTimeout(print(x),1000)
    };

    hey(i);
}


for (let i=0; i<5; i++){
    setTimeout(console.log(i),1000);
}
