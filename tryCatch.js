/**
 * Created by spin on 11/24/15.
 */
try{
    setTimeout(function(){
        throw new Error('delayed error')
    }, 100)
} catch(err){
    console.log('error caught');
    console.error(err);
}