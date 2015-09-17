function Request() {
  this.max = 10;
  this.redirects = 0;
};


Request.prototype.get = function(){
  console.log(this.hey);
  function temp_bind() {
    console.log(this);
  };
  temp_bind.bind(this);
  console.log('temp bind');
}

global.hey = 10;
var my2String = {
  hey : 1,
  newMethod : function(){
    console.log(this.hey);
  }
}
var unsolictedCallback = my2String.newMethod.bind(global);
unsolictedCallback();

request = new Request();
request.get();

var test = {
  prop : 10 ,
  addPropTo : function ( array ) {
    return array.map ( function ( elt ) {
      console.log(this);
      return this.prop + elt ;
    }. bind ( this ) ) ;
  }
};
var test1 = {
  prop : 10 ,
  addPropTo : function ( array ) {
    return array.map ( function ( elt ) {
      //console.log(this);
      return elt ;
    } ) ;
  }
};
console.log( test.addPropTo ([5]) ) ;
console.log( test1.addPropTo ([5]) ) ;

var testObj  = {hey:'e'};
var testFunc = function(){};

var dog = 9;
testFunc.prototype.miao = function(key){
  var self = this;
  self[key] = 'miaomiao';
  console.log(self.dog);
};

//testFunc.prototype.miao = function(){console.log(1)};
//testObj.prototype.miao = 1;
atestFunc = new testFunc();
atestFunc.miao('cat');
console.log(testObj.miao);
console.log(atestFunc);

