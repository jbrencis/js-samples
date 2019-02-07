// `call` - method borrowing

// `apply` - the same as a `call`, the only difference is theat it applies
// arguments as an array

/* `bing` allows to set `this` variable explicitly. 
 Doesn't call a function immidieately, but saves the copy of the function - we can store it somewhere( useful - to save ...) */

const john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeOfDay +
          ", Ladies and Gentlemen! I'm a " +
          this.name +
          " I'm a " +
          this.job +
          " I'm a " +
          this.age +
          ' years old'
      );
    } else if (style === 'friendly') {
      console.log(
        'Hey ' +
          timeOfDay +
          ", What's up  I'm a " +
          this.name +
          "I'm a " +
          this.job +
          "I'm a " +
          this.age +
          ' years old'
      );
    }
  }
};

const emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

/*========================call======================================
===================================================================*/

//call - method borrowing

john.presentation('formal', 'morning');

// first argument - `this`
john.presentation.call(emily, 'friendly', 'afternoon');

/*========================apply======================================
===================================================================*/

//apply - the same as a `call`, the only difference is theat it applies
//arguments as an array
john.presentation.apply(emily, ['formal', 'evening']);

/*========================bind======================================
===================================================================*/
//bind creates a copy of function with different presets

const johnFriendly = john.presentation.bind(john, 'friendly');
const bindRes = johnFriendly('morning');
console.log(bindRes); // Hey morning, What's up  I'm a JohnI'm a teacherI'm a 26 years old

const johnFriendlyMorning = john.presentation.bind(john, 'friendly', 'morning');
const res = johnFriendlyMorning();

console.log(res); // Hey morning, What's up  I'm a JohnI'm a teacherI'm a 26 years old

/*========================apply======================================
===================================================================*/

const john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(...rest) {
    const [style, timeOfDay] = rest;
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeOfDay +
          ", Ladies and Gentlemen! I'm a " +
          this.name +
          " I'm a " +
          this.job +
          " I'm a " +
          this.age +
          ' years old'
      );
    } else if (style === 'friendly') {
      console.log(
        'Hey ' +
          timeOfDay +
          ", What's up  I'm a " +
          this.name +
          "I'm a " +
          this.job +
          "I'm a " +
          this.age +
          ' years old'
      );
    }
  }
};

const emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation.apply(emily, ['formal', 'evening']);
