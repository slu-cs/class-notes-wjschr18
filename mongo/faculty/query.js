  // Query the faculty database

  const mongoose = require('mongoose');
  const connect = require('./db'); // connects to the database
  const Professor = require('./schema');

  connect();

  // What documents are in the collection?
  const query = Professor.find();
  query.exec(function(error, professors){
    if (error) console.error(error.stack);
    console.log(professors);
  });
