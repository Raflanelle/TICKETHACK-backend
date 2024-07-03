var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
=======
const fetch = require('node-fetch');
const Trip = require('../models/trips');



module.exports = router;


// || trips.arrival === null
>>>>>>> 35e9d0ed37f14beeddcb953ba4dcd5c7901eb3c1
