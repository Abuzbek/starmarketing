const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
// ======== mongoose connection ========
const mongoose = require('mongoose')

const monDb = require('./helper/db')

mongoose.connect(monDb.global, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongodb global ulandi');
});

// ======== mongoose connection ========
const indexRouter = require('./routes/index');


const app = express();
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

if( process.env.NODE_ENV === "production" ){

  app.use(express.static(__dirname + '/public'))

  app.get(/.*/, (req,res)=>{

    res.sendFile(__dirname+'/public/index.html')

  })
}
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
