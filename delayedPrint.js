/**
 * Created by spin on 10/3/15.
 */
// Question 2
function printMessage(msg){
    console.log(msg);
}

var msgs = ['hello','world','java','script'];

function delayedPrint(arr){
    var interval;
    var total = arr.length;
    var current = 1;

    interval = setInterval(function(){
        printMessage(arr[current-1]);

        if(current === total){
            clearInterval(interval);
        }

        current++;
    }, 1000);
}


delayedPrint(msgs);