const sumAll = function(startNum, endNum) {
  // Make sure both ends of the range are numbers and non-negative
  if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
    return "ERROR";
  }

  if (startNum < 0 || endNum < 0) {
    return "ERROR";
  }

  // Make startNum the smaller number for sake of order
  if (startNum > endNum) {
    [startNum, endNum] = [endNum, startNum];
  }

  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
