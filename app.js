let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let adminRouter = require('./routes/admin');
let recruiterRouter = require('./routes/recruiter');
let studentRouter = require('./routes/student');

let app = express();


// line 13 - line 33 database setup, Yingying
// module for database setup
const mongoose = require("mongoose");
const DBConfig = require("./config/db");
const expressSession = require('express-session');
const ourDB = (DBConfig.RemoteURI) ? DBConfig.RemoteURI : DBConfig.LocalURI;
mongoose.connect(ourDB);
const db = mongoose.connection; //alias for the mongoose connection
db.on("error", () => {
  console.error("Connection Error");
});
db.once("open", () => {
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

// create sessions
app.use(expressSession({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');// configure engine to ejs: express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/recruiter', recruiterRouter);
app.use('/student', studentRouter);

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
  res.render('error',{title:'Error'});
});

module.exports = app;
