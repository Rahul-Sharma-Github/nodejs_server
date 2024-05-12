// imports
const mongoose = require('mongoose');


// Establishing connection with MongoDB Local Database through connection String
// And handling error while initially connecting to database
mongoose.connect('mongodb://localhost:27017/jumbo_foods_database', {directConnection:true});



// Getting connection instance into db variable
const db = mongoose.connection;


// handling error after initial established connection
// if error occured, then it shows error in Console
db.on('error', console.error.bind(console, 'Database connection error !'));

// if mongoose is disconnected from MongoDB, then it will show error in console
db.on('disconnected', console.error.bind(console, 'Mongoose lost connection to the MongoDB server !'));

// show message after closing the connection
db.on('close',() => console.log('connection closed.'));


// after successful connection
// When connection is successfully established, it shows success message in console
db.once('open', function() {
  console.log('Database connected successfully.');
});


module.exports = db;