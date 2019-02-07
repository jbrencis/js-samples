//immediately invoked function expressions
// required for data privacy

/*( function() {
  const score = Math.random() * 10;
  console.log(score > 5);
})();*/

(() => {
  const score = Math.random() * 10;
  console.log(score > 5);
})();

(goodLuck => {
  const score = Math.random() * 10;
  console.log(score > 5 - goodLuck);
})(5);
