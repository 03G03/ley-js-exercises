const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function (nums) {
  return nums.reduce((sum, num) => sum * num, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let numfact = 1;
  if (num == 0){
    return 1;
  }
  for (let i = 1; i < num; i++){
    numfact = numfact * i;
  }
  return numfact * num;
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