const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let filteredLetters = str.toLowerCase().split('').filter((letter) => {
    return alphanumerical.includes(letter);
  });

  const cleanedString = filteredLetters.join('');
  const reversedString = filteredLetters.reverse().join('');
  
  return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
