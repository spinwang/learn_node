function Request() {
  this.max = 10;
  this.redirects = 0;
};

Request.prototype.get = function(){
  console.log(this);
  function temp_bind() {
    console.log(this);
  };
  function temp_nobind() {
    console.log(this);
  };
  temp_bind.bind(this);
  console.log('temp bind');
  temp_bind();
  console.log('temp nobind');
  temp_nobind();
}

request = new Request();
request.get();
