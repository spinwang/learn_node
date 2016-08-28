/**
 * Created by spin on 10/30/15.
 */
setTimeout(function(){
        // while loop that takes 0.5 sec
/*        var check = true;
        for (var count =0; count< 10e8; count ++){
            check = count;
        }
        console.log('while loop done');*/

        process.nextTick(function(){
            var check = true;
            for (var count =0; count< 10e8; count ++){
                check = count;
            }
            console.log('while loop done')
        })
    },
    200);
setTimeout(function(){console.log('hey spin')},200); // when ?
console.log('hey john!');

/*
setInterval(function(){
    console.log('func 1')
},0);

setInterval(function(){
    console.log('func 2')
},0);*/
