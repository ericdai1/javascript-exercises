const findTheOldest = function(peopleArray) {
  const currYear = new Date().getFullYear();

  // Sort from oldest to youngest in terms of age
  let peopleFromOldestToYoungest = peopleArray.sort((personOne, personTwo) => {
    let personOneAge = personOne.yearOfDeath ? personOne.yearOfDeath - personOne.yearOfBirth : currYear - personOne.yearOfBirth;

    let personTwoAge = personTwo.yearOfDeath ? personTwo.yearOfDeath - personTwo.yearOfBirth : currYear - personTwo.yearOfBirth;
    
    return personTwoAge - personOneAge;
  })

  console.log(peopleFromOldestToYoungest);

  return peopleFromOldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
