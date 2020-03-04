// Router for pie related requests
const express = require('express');

// create Router
const router = express.Router();

// cs-linuxlab-15.stlawu.edu:3000/pies/
router.get('/', function(request, response){
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a href="/pies/apple">Apple</a></li>
      <li><a href="/pies/cherry">Cherry</a></li>
    `);
});

//cs-linuxlab-15.stlawu.edu:3000/pies/id
router.get('/:id', function(request, response, next){
  if(request.params.id === 'apple'){
    response.send('Apple pies');
  } else if (request.params.id === 'cherry'){
    response.send('Cherry pies');
  } else {
    next(); // pass on this request
  }
});

module.exports = router;
