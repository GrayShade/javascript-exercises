const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (arr) {
  // using 0 as default value to cater empty array:
  return arr.reduce((prev, current) => prev + current, 0)
};

const multiply = function (arr) {
  return arr.reduce((prev, current) => prev * current)
};

const power = function (num, power) {
  let finalNum = num;
  let counter = 1;
  while (counter != power) {
    finalNum *= num;
    counter++;
  }
  return finalNum;
  // could simply use:
  // return Math.pow(num, power);
};

const factorial = function (num) {

  let arr = []
  for (let i = num; i >= 1; i--) {
    arr.push(i);
  }
  const factorial = arr.reduce((prev, current) => {
    return prev * current;
    //console.log(fact);
  }, 1);

  return factorial;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
