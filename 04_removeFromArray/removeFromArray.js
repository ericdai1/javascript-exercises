const removeFromArray = function(arr, ...args) {
  // Utilize an object to store values to be removed
  return arr.filter((value) => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
