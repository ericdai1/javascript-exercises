const repeatString = function(stringToRepeat, times) {
  if (times < 0) {
    return "ERROR";
  }

  let output = "";
  for (let i = 0; i < times; i++) {
    output += stringToRepeat;
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
