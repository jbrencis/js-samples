// function constructor
const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function() {
  //   console.log(2018 - this.yearOfBirth);
  // };
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

// every instance will ingerit `lastName` = 'Smith'
Person.prototype.lastName = 'Smith';

// instantiation
const john = new Person('John', 1990, 'teacher');
const jane = new Person('Jane', 1988, 'designer');
const mark = new Person('Mark', 1948, 'retired');

john.calculateAge(); // 28
jane.calculateAge(); // 30
mark.calculateAge(); // 70

console.log(john.lastName); // Smith
console.log(john.lastName); // Smith
console.log(john.lastName); // Smith

// Chrome console
john.hasOwnProperty('job'); //true
john.hasOwnProperty('lastName'); //false
john instanceof Person; // true
