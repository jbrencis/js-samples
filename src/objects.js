/*========================Objects and properties======================================
===================================================================*/
// Object literal
const john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john); // Object {firstname: "John", lastName: "Smith", birthYear: 1990, family: Array[4], job: "teacher"…}
console.log(john.firstName); // John
console.log(john['lastName']); // Smith
console.log(john['isMarried']); // false

const isMarried = 'isMarried';
console.log(john[isMarried]); // false, isMarried = variable

john.job = 'designer'; //job mutation
john['birthYear'] = 1980;
console.log(john); // Object {firstName: "John", lastName: "Smith",birthYear: 1980, family: Array[4], job: "designer"…}

//new Object syntax
const jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1988;
jane['lastName'] = 'Smith';
console.log(jane); //Object {name: "Jane", birthYear: 1988, lastName: "Smith"}
