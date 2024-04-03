// imports
const express = require('express');
// importing body-parser middleware
const bodyParser = require('body-parser');

// importing and storing router object from routes module
const routes = require('./routes');


// creating express app
const app = express();

// using Middlewares

// our express app will use this Middleware
// it will handle the POST and PUT request that contain JSON data
// This middleware will parse any JSON data that is sent in the body of an HTTP request ( like - POST, PUT ) and make it available on the req.body object
app.use(bodyParser.json());

// This line of code tells Express to use the routes middleware for all requests that are sent to the root path (/). 
// The routes middleware is a function that is responsible for handling incoming requests and sending back responses.
//
// mounting the router object to the '/' path
// now our express app will use this router object to handle all requests
app.use('/', routes);


// Listening to port

//This line of code tells Express to start listening for requests on port No. = 3000
// Once the server is started, it will log a message to the console indicating that it is ready to accept requests
app.listen(3000, () => {
  console.log('Server started on port No. = 3000');
});