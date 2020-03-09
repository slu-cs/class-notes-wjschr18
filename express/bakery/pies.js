// Router for pie related requests
const express = require('express');

// create Router
const router = express.Router();

// Prtend database collection
const pies = [
  {id: 'cherry', flavor: 'Cherry'},
  {id: 'apple', flavor: 'Apple'},
  {id: 'blueberry', flavor: 'Blueberry'}
];

// cs-linuxlab-15.stlawu.edu:3000/pies/
router.get('/', function(request, response){
  response.render('pies/index');
});

//cs-linuxlab-15.stlawu.edu:3000/pies/id
router.get('/:id', function(request, response, next){
  const pie = pies.find(pie => pies === request.params.id);

  if (!pie){
    next();
  } else {
    response.render('pies/detail', {pie: pie});
  }
});

module.exports = router;
