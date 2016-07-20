'use strict';

var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var ipsumsSchema = new mongoose.Schema({
	sentence: String,
});

ipsumsSchema.plugin(random);

var model = mongoose.model('ipsums', ipsumsSchema);

module.exports = model;
