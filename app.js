<<<<<<< HEAD
=======

>>>>>>> 35e9d0ed37f14beeddcb953ba4dcd5c7901eb3c1
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

=======
const cors = require('cors');

var indexRouter = require('./routes/index');
const tripsRouter = require('./routes/trips');
const cartsRouter = require('./routes/carts');

require('./models/connection');

var app = express();

app.use(cors());
>>>>>>> 35e9d0ed37f14beeddcb953ba4dcd5c7901eb3c1
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/users', usersRouter);
=======
app.use('/trips', tripsRouter);
app.use('/carts', cartsRouter);
>>>>>>> 35e9d0ed37f14beeddcb953ba4dcd5c7901eb3c1

module.exports = app;
