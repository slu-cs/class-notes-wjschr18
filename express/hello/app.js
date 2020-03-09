  // Hello world web server
  const express = require('express');

  // Create the server
  const app = express();

  // Respond to one request
  // cs-linuxlab-15.stlawu.edu:3000/
  app.get('/', function(request, response){
    response.send('Hello Will');
  });

  // cs-linuxlab-15.stlawu.edu:3000/foo
  app.get('/foo', function(request, response){
    response.send('Hello foo');
  });

  // cs-linuxlab-15.stlawu.edu:3000/foo/bar
  app.get('/foo/bar', function(request, response){
    response.send('Hello bar');
  });

  // cs-linuxlab-15.stlawu.edu:3000/zap/z (for any z)
  app.get('/zap/:z', function(request, response){ // ':z' is like a parameter
    response.send(`Hello ${request.params.z}`);
  });

  // cs-linuxlab-15.stlawu.edu:3000/zap?x=X&y=Y  // query string
  app.get('/zap', function(request, response){
    response.send(`Hello zap with ${request.query.x} and ${request.query.y}`);
  });

  // Start the server
  app.listen(3000); // port = 3000
  console.log('Server is ready');
