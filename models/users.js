var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    username: {
      type: String,
      unique: true
    },
    password: String,
});

// Create object with all DB users in it
var Users = mongoose.model('User', UserSchema);

module.exports = Users;
