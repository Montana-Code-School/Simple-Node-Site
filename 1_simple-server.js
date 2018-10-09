/*
    HTTP is a core Node.js module.
*/

// Since this data is unchanging, we are defining it as a const
const http = require('http');

//Set the port number. You can think of this as a label attached
//to the process while it runs. Since this is running on localhost,
//you will soon be able to navigate to localhost:2000 in your browser
var port = 2000;

http.createServer((request,response) => {

// First, we write the HTTP header
  response.writeHead( 200, { 'Content-Type': 'text/plain' });
// Then, we send the content of our response
  response.write('Hello World!\n');

  response.end();

}).listen(port);

//You now have a local HTTP server running on your computer!

//Type in localhost:2000 in your browser.
