// imports
const express = require('express');
const router = express.Router();

// importing user model from user module
const User = require('./user');


// All CRUD operations

// Create a new user
router.post('/users', async (req, res) => {

    // here we are getting passed data from req parameter as Object ( req.body ) [ from Client App ]
    // and storing each value of req.body object's property inside constant variables in sequence according to Schema and making a Single Object from them

  const { name, email, age } = req.body;

  // the above line is similar to Below 3 Lines

        // const name = req.body.name;
        // const email = req.body.email;
        // const age = req.body.age;

  try {
    // storing Single object in user variable
    const user = new User({ name, email, age });
    // then saving the User Document object inside MongoDB Database
    await user.save();

    res.send(user);
  } catch (error) {
    console.error('error while Post Request = ',error);
    res.status(500).send(error);
  }
});


// Get all users
router.get('/users', async (req, res) => {
  try {
    // here we are Fetching all the Documents from users collection in Database
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// Update a user
router.put('/users/:id', async (req, res) => {
    // getting passed id and storing in id variable
  const { id } = req.params;
    // getting new updated data and storing them inside related variables
  const { name, email, age } = req.body;

  try {
    // after that finding document using specific id and updating it with new updated data
    const user = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// Delete a user
router.delete('/users/:id', async (req, res) => {
    // getting passed id
  const { id } = req.params;

  try {
    // deleting a specific document by passed id
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// exporting router
module.exports = router ;