'use-strict';

// FUNCTIONS
function describeCountry(country, population, capitalCity) {
  return `${country} has a ${population} million people and its capital city is ${capitalCity}`;
}

const finland = describeCountry('finland', 6, 'helsinky');
const cze = describeCountry('czechia', 11, 'prague');
const portugal = describeCountry('portugal', 8, 'lisbon');

console.log(finland, cze, portugal);

// FUNCTION DECLARATIONS VS. EXPRESSIONS

//FCE DECLARATION
function percentageOfWorld1(population) {
  const result = Math.round((population / 7900) * 100 * 100) / 100;
  return result;
}

const china = percentageOfWorld1(1441);
const czechia = percentageOfWorld1(11);
const portug = percentageOfWorld1(8);

console.log('china' + ' ' + china, 'czechia' + ' ' + czechia, 'portugal' + ' ' + portug);

// FCE EXPRESSION
const percentageOfWorld2 = function (population) {
  const result = Math.round((population / 7900) * 100 * 100) / 100;
  return result;
};

const china2 = percentageOfWorld2(1441);
const czechia2 = percentageOfWorld2(11);
const portug2 = percentageOfWorld2(8);

console.log('china' + ' ' + china2, 'czechia' + ' ' + czechia2, 'portugal' + ' ' + portug2);

// ARROW FUNCTION
const percentageOfWorld3 = (population) => Math.round((population / 7900) * 100 * 100) / 100;

console.log(percentageOfWorld3(1441));

// FUNCTIONS CALLING OTHER FUNCTIONS
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} milion people, which is about ${percentage} of the world `;
  console.log(description);
}

describePopulation('CHINA', 1441);
describePopulation('CZECHIA', 11);
describePopulation('PORTUGAL', 8);

// INTRODUCTION TO ARRAYS

// 1.
const populations = [1441, 11, 8, 6];

// 2.
console.log(populations.length === 4);

// 3.
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// Basic Array Operations (Methods)

// 1.
