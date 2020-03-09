// Name: Will Schroeder

//////////////////////////////////////////////////////////////// Question 1

const labs = [
  {location: 'Bewkes 107', seats: 15},
  {location: 'Bewkes 109', seats: 25},
  {location: 'Bewkes 144', seats: 7}
];

//A. Generate a new array containing the seat numbers of all the labs (by invoking the built-in map method).
let seats = labs.map(lab => {
  let seatMap = {};
  for (let i = 0; i < labs.length; i++){
    seatMap[i] = labs.seats;
  }
  return seatMap;
});
console.log(seats);



// B. Generate a new array containing only the labs with more than 10 seats (by invoking the built-in filter method).
let bigLabs = labs.filter(function(e){
  return e.seats > 10;
});
console.log(bigLabs);

// C. Sort the existing array in order of (increasing) seat numbers (by invoking the built-in sort method).
let sortedLabs = function(){
  labs.sort(function(a,b){
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  });
}

console.log(sortedLabs);

//////////////////////////////////////////////////////////////// Question 2

const numbers = [5, 4, 3, 2, 1];

// A. Get the first even number (by invoking the built-in find method).
const even = numbers.find(element => element % 2 === 0);
console.log(even);

// B. Define a standalone find function. The array is its first argument and the callback is its second argument.
Array.prototype.standaloneFind = function(callback){
  for (let i = 0; i < this.length; i++){
    if (callback){
      return this[i];
    }
  }
  return undefined;
};
console.log(numbers.standaloneFind(element => element % 2 === 0));

//////////////////////////////////////////////////////////////// Question 3

// // This creates the user object described on the quiz.
// // It has a question method you can call in part A.
// const readline = require('readline');
// const user = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// // A. Make small talk, using traditional callbacks.
//
//
// // The user.question method doesn't actually return a promise, so here is a question function that does.
// // Call this question function in part B instead of calling the user.question method.
// const question = function(prompt) {
//   return new Promise(resolve => user.question(prompt, resolve));
// };
//
// // B. Make small talk again, using promises.
//

//////////////////////////////////////////////////////////////// Question 4
// Question 4 is commented out because otherwise it would interfere with Question 3.
// When you're ready to work on Question 4, uncomment it and comment out Question 3.

// This function returns a promise, which produces 42 after an asynchronous delay of one second.
const f1 = function() {
  return new Promise(resolve => setTimeout(() => resolve(42), 1000));
};

// This function returns a promise, which produces 24 after an asynchronous delay of one second.
const f2 = function() {
  return new Promise(resolve => setTimeout(() => resolve(24), 1000));
};

// Run f1 and f2 in parallel and log 'f1', 'f2', or 'equal' to indicate which function returned the larger result.
const largerFunc = function(){
  let [f1Out, f2Out] = await Promise.all([f1(), f2()]);
  if f1Out > f2Out console.log('f1');
  if f2Out > f1Out console.log('f2');
  if f2Out === f1Out console.log('equal');
}
