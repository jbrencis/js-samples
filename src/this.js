// console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// calculateAge(1990);

// function calculateAge(year) {
//   console.log(2018 - year);
//   console.log(this); // Window
// }

var john = {
  name: 'John',
  birthYear: 1990,
  //method --- function that is attatched to the object
  calculateAge: function() {
    console.log(this);
    console.log(2018 - this.birthYear); // 1990

    // regular function (if regular function ===> this === window)
    // if method ==> this === object

    /* function innerFunction() {
      console.log(this); // Window
      console.log(john.name); // John
    }
    innerFunction();
	*/
  }
};
john.calculateAge(); // 28

var mike = {
  name: 'Mike',
  birthYear: 1984
};
// method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge(); // 34
