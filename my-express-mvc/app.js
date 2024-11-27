var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app-server/models/db');



var indexRouter = require('./app-server/routes/index');
var usersRouter = require('./app-server/routes/users');
var mahasiswasRouter = require('./app-server/routes/mahasiswa');
var housingRouter = require('./app-server/routes/housing');
var registerController = require('./app-server/routes/register');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app-server/views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ALLOW CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', mahasiswasRouter);
app.use('/housing', housingRouter);
app.use('/insert', registerController);
app.u
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
