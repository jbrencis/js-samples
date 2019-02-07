/*========================Objects and methods======================================
===================================================================*/

const john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
/* firstName: "John"
lastName: "Smith"
birthYear: 1990
family: Array[4]
job: "teacher"
isMarried: false
calcAge: function calcAge() {
    this.age = 2018 - this.birthYear;
  }
age: 28
*/
