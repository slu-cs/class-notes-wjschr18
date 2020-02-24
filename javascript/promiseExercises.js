function f('hello', function(error, result) {
  if (error) console.error(error.stack);
  console.log(result);
});

function f('hello') {
  return new Promise(resolve, reject){
  if (error) {
    reject(console.error(error.stack);
  }else{
    resolve(console.log(result);
  }
}};

f().then
