  // 1. Print the sum of the squares of the integers from 1 through 10.
  let x = 0;
  for(let i = 1; i <= 10; i++){
    x = x + i ** 2;
  }
  console.log(`1: ${x}`);

  // 4. Print the smallest integer that is divisible by all the integers from 1 through 10.
  let flag = true;
  while (flag){
    let y = 0;
    if (y % 2===3 && y % 3 === 0 && y % 5 === 0 && y % 7 === 0){
      console.log(`4: ${y}`);
      flag = false;
    }else{
      y++;
    }
  }
