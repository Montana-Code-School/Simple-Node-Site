/*
  Express is a lightweight web framework for Node.js. We will be
  using this package a lot, so let's look at some of the ways it
  simplifies what we have just been introduced to.
*/

// First, we require the express package, and then create the app
const express = require('express');
const app = express();

var port = 3000;

// Now, we can route a GET request to a path ('/'), and with a
// callback, we are sending "Hello World!" as a response.
app.get('/', function(request, response) {
  response.send('Hello World!')
});

// Tell the app to listen on our specified port
app.listen(port);

/*
  To summarize, we are using Express as a more efficient framework
  for interfacing with Node.js. We are currently listening for GET
  HTTP requests, and responding with a string.

  Notice that we didn't have to be quite as thorough with our responses.
*/
