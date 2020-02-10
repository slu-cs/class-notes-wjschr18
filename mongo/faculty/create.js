  // Store some data in the faculty database

  const mongoose = require('mongoose');
  const connect = require('./db'); // connects to the database
  const Professor = require('./schema');

  connect();

  // Create some faculty
  const harcourt = new Professor({
    name: 'Ed Harcourt',
    rank: 'Full',
    started: 2003,
    courses: [140, 220, 345, 362, 364]
  });

  const torrey = new Professor({
    name: 'Lisa Torrey',
    rank: 'Assosiate',
    started: 2009,
    courses: [140, 219, 332, 362, 374, 380]
  });

  const lee = new Professor({
    name: 'Choong-Soo Lee',
    rank: 'Associate',
    started: 2010,
    courses: [140, 219, 256, 321, 370]
  });

  // Delete any previous data in this collection (inside is after the database is dropped)
  mongoose.connection.dropDatabase(function(){
    // Save new database
    harcourt.save(function(error){
      if (error) console.error(error.stack); // if error !== undefined

      torrey.save(function(error){
        if (error) console.error(error.stack);

        lee.save(function(error){
          if (error) console.error(error.stack);

          // Disconnect from the database so code can end
          mongoose.connection.close(function(){
            console.log('Database is ready.');
          });
        });
      });
    });
  });
