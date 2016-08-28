/**
 * Created by spin on 12/1/15.
 */
var request = require('request');

request('https://localhost:4001',function(error,response,body){
    console.log(error);
    console.log(response);
    console.log(body);
})