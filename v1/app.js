var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// mongodb database
dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/ts';
db = mongoose.connect(dbUrl,{safe:true});

// express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('3CCC4ACD-6ED1-48844-9217-82131BDCB239'));
app.use(session({secret: '2C44774A-D649-4D44-9535-46E296EF984F'}));
app.use(express.static(path.join(__dirname, 'public')));
        



/*// Authentication middleware
app.use(function(req,res,next){
  if (req.session && req.session.user)
    res.locals.user = true;
  next();
})

// Authorization middleware
var authorize = function(req,res,next){
  if (req.session && req.session.user)
    return next();
  else 
    res.send(401);
};*/

// models
require('./models/Device.js');
require('./models/User.js');

// routes
routes = require('./routes');




// API device
app.get('/devices',routes.device.index);
app.post('/devices',routes.device.creates);
app.get('/devices/:device_id',routes.device.show);
app.put('/devices/:device_id',routes.device.update);

// API user
app.get('/users',routes.user.index);
app.post('/users',routes.user.create);
app.get('/users/:user_id',routes.user.show);
app.put('/users/:user_id',routes.user.update);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
