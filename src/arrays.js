/*========================Arrays======================================
===================================================================*/

const names = ['John', 'Mark', 'Jane'];
const years = new Array(1990, 1969, 1948);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names[2]); //Jane
console.log(names); //["John", "Ben", "Jane", "Mary"]

// Different data types

const john = ['John', 'Smith', 1990, 'teacher'];

john.push('blue'); //Appends new elements to an array, and returns the new length of the array.
john.unshift('Mr'); // Inserts new elements at the start of an array.

console.log(john); // ["Mr", "John", "Smith", 1990, "teacher", "blue"]

john.pop(); //removes el from the end
john.shift(); //Removes the first element from an array and returns it.

console.log(john); //["Mr", "John", "Smith", 1990, "teacher"]
console.log(john.indexOf(1990)); //Returns the index of the first occurrence of a value in an array. ==> 2,
console.log(john.indexOf(23)); // -1 el doesnot exist in the array

const isDesigner =
  john.indexOf('designer') === -1
    ? 'John is Not a designer'
    : 'John IS a designer';

console.log(isDesigner);
