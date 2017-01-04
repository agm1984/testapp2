var mongoose = require('mongoose');
var config = require('../config.json');

// Connect to database
function dbConnect() {
  mongoose.connect(config.db);
};

module.exports = dbConnect;
