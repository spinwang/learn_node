var util = require('util');
var events = require('events');

function Pulsar(speed,times) {
  this.speed = speed;
  this.times = times;

  var self = this;

  events.EventEmitter.call(this);

  this.on('newListener', function(eventName, listener){
    if (eventName === 'pulse'){
      // why can't be this.start()
      self.start();
    }
  })
};

util.inherits(Pulsar,events.EventEmitter);

Pulsar.prototype.start = function() {
  var self = this;
  var id =  setInterval(function(){
    self.emit('pulse');
    --self.times;
    if (self.times === 0){
      clearInterval(id);
    }
  }, self.speed);

};

pulsar = new Pulsar(500,10);

pulsar.on('pulse' , function(){
  console.log('.');
});
