// imports
const mongoose = require('mongoose');


// Establishing connection with MongoDB Local Database through connection String
mongoose.connect('mongodb://localhost:27017/my_database', {});

// Getting connection instance into db variable
const db = mongoose.connection;

// if error occured, then it shows error in Console
db.on('error', console.error.bind(console, 'Database connection error !:'));

// When connection is successfully established, it shows success message in console
db.once('open', function() {
  console.log('Database connected successfully.');
});


module.exports = db;