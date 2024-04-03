// imports
const mongoose = require('mongoose');


// Establishing connection with MongoDB Local Database through connection String
try {
  await mongoose.connect('mongodb://localhost:27017/jumbo_foods_database', {});
} catch (error) {
  // handling error while connecting to database
  handleError(error);
}


// Getting connection instance into db variable
const db = mongoose.connection;

// handling error after initial established connection
// if error occured, then it shows error in Console
db.on('error', console.error.bind(console, 'Database connection error !:'));




// When connection is successfully established, it shows success message in console
db.once('open', function() {
  console.log('Database connected successfully.');
});


module.exports = db;