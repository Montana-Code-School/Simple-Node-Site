/*
  Routing with Express.js

  Routing is how we point an HTTP request to our code. If you go to a
  URL, your server will likely receive a GET request (there are more
  types of requests), and you will send a response, probably your
  site content.
*/

const express = require('express');
const app = express();

var port = 3000;

/*
  Below we are defining how we handle a specific request for a specific
  URI.

  URI: Uniform Resource Identifier, good discussion of URI, URL, and URN:
  http://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn)
*/

//  This defines the route pointing to the root of the app

//  Go to localhost:3000 and you will receive this response
app.get('/', function(request, response) {
  response.send('Hello World!')
});

//  If the client is sending a GET request to the server, the server will
//  respond with the callback (second argument)

//  Go to localhost:3000/myURI to get this response
app.get('/myURI', function(request, response) {
  response.send('Responding to a GET request!');
});

//  If the client is attempting to submit data to the server via POST
//  We will process that request and send back a response below

//  It is not quite as easy to just send a POST request right now, we will
//  figure that out later.
app.post('/myURI', function(request, response) {
  response.send('Responding to a POST request!');
});

app.listen(port);
