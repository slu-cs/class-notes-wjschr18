// Router for cake related requests
const express = require('express');

// create Router
const router = express.Router();

// Prtend database collection
const cakes = [
  {id: 'vanilla', flavor: 'Vanilla'},
  {id: 'chocolate', flavor: 'Chocolate'},
  {id: 'blueberry', flavor: 'Blueberry'}
];

// cs-linuxlab-15.stlawu.edu:3000/cakes/
router.get('/', function(request, response){
  response.render('cakes/index', {cakes: cakes});
});

//cs-linuxlab-15.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response, next){

  // Pretend database lookup
  const cake = cakes.find(cake => cake.id === request.params.id);

  if (!cake){ // if cake === undefined
    next();
  } else {
    response.render('cakes/detail', {cake: cake});
  }
});

module.exports = router;
