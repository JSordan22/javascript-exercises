const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return Math.abs(num1 - num2);
};

const sum = function(arr) {
	return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, num) => acc * num, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function() {
	
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
