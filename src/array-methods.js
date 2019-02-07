https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


const fruits = ['Apple', 'Banana'];

/*========================forEach======================================
===================================================================*/

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

/*========================push======================================
===================================================================*/
//Add to the end of an Array

var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

/*========================pop======================================
===================================================================*/

//Remove from the end of an Array
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

/*========================shift======================================
===================================================================*/

//Remove from the front of an Array
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

/*========================unshift======================================
===================================================================*/

// Add to the front of an Array
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];

/*========================indexOf======================================
===================================================================*/

// Find the index of an item in the Array

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1

/*========================splice======================================
===================================================================*/

// Remove an item by index position
var pos = fruits.indexOf('Banana');
var removedItem = fruits.splice(pos, 1); // this is how to remove an item
                                        
// ["Strawberry", "Mango"]

/*========================splice 2nd example======================================
===================================================================*/

// Remove items from an index position

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems); 
// ["Turnip", "Radish"]

/*========================slice======================================
===================================================================*/

// Copy an Array

var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]

/*========================entries() and  for...of======================================
===================================================================*/
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

//========================

var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

/*========================every()======================================
===================================================================*/

// The every() method tests whether all elements in the array pass the test implemented by the provided function.

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

/*========================filter()======================================
===================================================================*/

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]















