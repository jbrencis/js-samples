var a = 'Hello';
first();

function first() {
  var b = 'Hi!';

  second();

  function second() {
    var c = 'Hey!';
    // console.log(b); // Hi!
    third();
  }
}

function third() {
  var d = 'John';

  console.log(c); //c is not defined
  console.log(a + d); //HelloJohn
}
