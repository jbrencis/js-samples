const greeting = () => {
  console.log('Thanks for visiting');
};

closeTerminal(greeting);

function closeTerminal(message) {
  message();
}
//"Thanks for visiting"

/*==============================================================
===================================================================*/
const greeting = () => {
  console.log('Thanks for visiting');
};

closeTerminal(greeting);

const closeTerminal = message => {
  message();
};
// error: closeTerminal = undefined

/*==============================================================
===================================================================*/

var name = 'John';

function first() {
  var a = 'Hello ';
  second();
  var x = a + name;
  return x;
}

function second() {
  var b = 'Hi!';
  third();
}

function third() {
  var c = 'Hey!';
  var z = c + name;
}

const res = first();
console.log(res); // Hello John

/*==============================================================
===================================================================*/

//======= functions
calculateAge(1990);

// function declaration
function calculateAge(year) {
  console.log(2016 - year);
}

retirement(1965); //TypeError: retirement is not a function

// function expression
var retirement = function(year) {
  console.log(65 - (2018 - year));
};
retirement(1955); // 2

//=======variables

// console.log(age); //undefined
var age = 23; // global
// console.log(age); // 23

function foo() {
  var age = 64;
  console.log(age); // 64
}
foo();
console.log(age); // 23
