const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numbers) {
	let result = numbers.reduce((total, currNum) => {
    return total + currNum;
  }, 0);

  return result;
};

const multiply = function(numbers) {
  let result = numbers.reduce((total, currNum) => {
    return total * currNum;
  }, 1);

  return result;
};

const power = function(numOne, numTwo) {
  let result = numOne;
	for (let i = 1; i < numTwo; i++) {
    result *= numOne;
  }

  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
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
