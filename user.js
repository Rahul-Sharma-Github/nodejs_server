// imports
const mongoose = require('mongoose');

// Creating user Schema for Posting/Getting user data 
const userSchema = new mongoose.Schema({
  name: {type:String},
  email: {type:String, unique:true},
  age: {type:Number}
});

// creating model named 'User' from user schema 
const User = mongoose.model('User', userSchema);

// exporting user model
module.exports = User;