const years = [1986, 1990, 1977, 1967, 1988, 2004];

function arrayCalc(arr, fn) {
  var resArr = [];

  for (var i = 0; i < arr.length; i++) {
    resArr.push(fn(arr[i]));
  }

  return resArr;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el > 18 && el < 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

const ages = arrayCalc(years, calculateAge);
console.log(ages); // [32, 28, 41, 51, 30]

const isFull = arrayCalc(years, isFullAge);
console.log(isFull); // [true, true....]

const heartRates = arrayCalc(years, maxHeartRate);
console.log(heartRates);
