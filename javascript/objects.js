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
