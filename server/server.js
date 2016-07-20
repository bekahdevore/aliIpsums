'use strict';

var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost/aliIpsums', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});

var Ipsums = require('./models/ipsums');

var router = express.Router();

router.get('/ipsum/:num', function(req, res) {
  var num = req.params.num;

  Ipsums.findRandom({}, {}, {limit: parseInt(num)}, function(err, ipsums) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ ipsums: ipsums });
  });
});

var app = express();

app.use('/api', router);

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
