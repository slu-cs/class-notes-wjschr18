// Objects and array syntax

  // Object literal
  const point = {x:1 ,y: 2};
  console.log(point);

  // accessing properties
  console.log(point.x);

  // Change properties
  point.x = 3;

  //Nested object literal
  const circle = {
    center: point,
    radius: 4
  };

  //Access subproperties
  console.log(circle.center.x);

  // Undefined subproperties
  console.log(circle.color);
  circle.color = 'blue';
  console.log(circle);

  //array
  const languages = ['HTML','CSS','JS'];
  console.log(languages);

  // Accessing length and elements
  for (let i = 0; i < languages.length; i++){
    console.log(languages[i]);
  }

  // Change elements
  languages[2] = 'JavaScript'

  // adding elements
  languages.push('MongoDB'); // adds to end of array

  //iterating over elements
  for (const lang of languages){
    console.log(lang);
  }
