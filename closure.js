/*function  asyncFunction(cb,time){
    setTimeout(cb,time);
}

var color = 'blue';

asyncFunction(function(){
    console.log('#1 Color is',color)
}, 500);


(function(color){
    asyncFunction(function(){
        console.log('#2 Color is',color);
    }, 500)
})(color);

color = 'red';

//
function Thing(name) {
    this.name = name
}
var thing = new Thing('whatsit')
Thing.prototype.delayedName = function(callback) {
    var that = this;
    setTimeout(function () {
        callback(that.name)
    }, 1000)
}

thing.delayedName(function(name){
    console.log("clicked", name.toUpperCase())
})*/

//
function Thing(name) {
    this.name = name
}
Thing.prototype.delayedName = function(callback) {
    setTimeout((function(that) {
            callback(that.name);
    })(this), 1000);
};

var thing = new Thing('whatsit')
thing.delayedName(function(name){
    console.log("clicked", name.toUpperCase())
})

var a = '3';

function hey() {
    var a = '2';
    console.log(a);
}

hey();