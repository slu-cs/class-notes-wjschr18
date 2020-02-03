//1. Create an array of objects representing the courses you are taking this semester.
//Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
//Iterate through this array to find the largest course number in your schedule.
  const courses = [
    {subject: 'CS', number: 332},
    {subject: 'CS', number: 220},
    {subject: 'MATH', number: 280},
    {subject: 'MUS', number: 210},
    {subject: 'PHYS', number: 105}
  ];

  let max = 0;
  for (let i = 0; i < courses.length; i++){
    if (courses[i].number > max){
      max = courses[i].number;
    }
  };
  console.log(`Largest course number is: ${max}`); // 332

  //2. Define a constructor function for Book objects.
  //Each book should have a title and an array of authors. Define a shared method for books that
  //lets you check whether a given author was one of the authors in this book.

  const Book = function(title, authors){
    this.title = title;
    this.authors = authors;
  };

  Book.prototype.checkAuthor = function(author){
    if (author === this.authors){
      return true;
    }
    return false;
  };

  const magazine = new Book('TestTitle', 'TestAuthor');
  console.log(magazine);
  console.log(magazine.checkAuthor('TestAuthor'));

  // 3. Define a function that works like the range function in Python
  const Range = function(a,b){
    const rangedArray = [];
    if (b === undefined){
      for (let i = 0; i < a; i++){
        rangedArray.push(i);
      }
    } else {
      for (let i = a; i < b; i++){
        rangedArray.push(i);
      }
    }
    return rangedArray;
  };

  console.log(Range(3));
  console.log(Range(4, 16));
