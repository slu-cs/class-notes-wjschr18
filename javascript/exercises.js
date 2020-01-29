  // 1. Print the sum of the squares of the integers from 1 through 10.
  let x = 0;
  for(let i = 1; i <= 10; i++){
    x = x + (i ** 2);
  }
  console.log(`1: ${x}`);

  //3. Print the number of integers from 1 through 100 that are divisible by 3 or 5 but not both.
  let counter = 0;
  for(let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 !== 0){
      //console.log(`${i} is divisible by 3`);
      counter++;
    }
    elseif (i % 5 === 0 && i % 3 !== 0){
      //console.log(`${i} is divisible by 5`);
      counter++;
    }
  }
  console.log(`${counter} integers from 1-100 are divisible by 3 OR 5`);
