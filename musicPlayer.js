var events = require('events');
var util = require('util');

// Utility function Audo Device
var AudioDevice = {
  play : function(track){
    console.log('Now playing', track);
  },

  stop : function(track){
    console.log(track,'stopped');
  }

}

// Constructor for Music Player
function MusicPlayer(){
  this.playing = false;
  this.track = '';

  events.EventEmitter.call(this);
};

// Inherit from EventEmitter
util.inherits(MusicPlayer, events.EventEmitter);

// Make new player 
mp3_player = new MusicPlayer();

mp3_player.on('play' , function(track){
  if (!this.playing || track != this.track ) {
    this.playing = true;
    this.track = track;
    AudioDevice.play(track);  
  } else {
    console.log('Already playing');
  }
});

mp3_player.on('stop', function(track){
  if (this.playing && track == this.track ){
    this.playing = false;
    AudioDevice.stop(track);
  } else {
    console.log('Nothing to stop')
  }
});

mp3_player.emit('play','Tong Hua');

setTimeout(function(){
  mp3_player.emit('play','Tong Hua1');
},1000);


