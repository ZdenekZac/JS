'use strict';

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     let output = `${firstName} you are ${age}, born in ${birthYear}`;
//     //console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'yac';
//       const str = `oh, and you are a millenial, ${firstName}`;
//       //console.log(str);
//       //console.log('');

//       function add(a, b) {
//         return a + b;
//       }
//       output = 'new output';
//     }
//     //console.log(add(2,3));
//     //console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'jonas';
// console.log(calcAge(1988));

// // ---------------------- 101. the this keyword ---------------

// //console.log(this);

// const calcAge2 = function (birthYear) {
//   //console.log(2037 - birthYear);
//   //console.log(this);
// };
// calcAge2(1980);

// const calcAgeArrow = birthYear => {
//   //console.log(2037 - birthYear);
//   //console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     //console.log(this);
//     // console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matylda = {
//   year: 2017,
// };
// matylda.calcAge = jonas.calcAge;
// matylda.calcAge();

// const f = jonas.calcAge;
// f();

// --------- 102. Regular Functions vs Arrow Functions-----------

// const jonas = {
//   firstname: 'jonas',
//   year: 1990,
//   calcAge: function () {
//     //console.log(this);
//     //console.log(this.firstname, this.year);

//     const test = () => {
//       console.log(this);
//       console.log(this.firstname);
//     };
//     test();
//   },
//   greet: () => {
//     console.log(`hey ${firstname}`), console.log(this);
//   },
// };
// //jonas.calcAge();

// function test() {
//   const firstname = 'zac';

//   const jonas = {
//     firstname: 'jonas',
//     year: 1990,
//     calcAge2: function () {
//       console.log(this);
//       console.log(this.firstname, this.year);

//       const greet = () => console.log(`hey ${this.firstname}`);
//       greet();
//     },
//   };
//   jonas.calcAge2();
// }
// test();

// arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3);
// addExpr(2, 3, 4, 5);

// var addArow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArow(2, 3, 4);

// ------- 103. Memory Management: Primitives vs. Objects ---------

//PRIMITIVES: NUMBER, STRING, BOOLEAN, UNDEFINED, NULL, SYMBOL, BIGINT
//OBJECTS: OBJECT LITERALS, ARRAYS, FUNCTIONS, MANY MORE...
//OBJECTS ARE STORED IN THE HEAP
//PRIMITIVES ARE STORED IN THE CALL STACK, IN GLOBAL EXECUTION CONTEXT ETC.
//REFERENCES TO OBJECTS AND FUNCTIONS ARE STORED IN CALL STACK, THEY POINT TO THE HEAP
// const obj={city: "Prague"} // const newObj = obj // newObj.city = "Dublin" ----->
//-----> THIS WILL MUTATE THE ORIGINAL OBJECT, BECAUSE OF REFERENCING

//---------- 104. Object referencing in practice (shalow vs. deep copies)

const jessica1 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

function marryPerson(originalperson, newLastName) {
  originalperson.lastName = newLastName;
  return originalperson;
}

const marriedJessica = marryPerson(jessica1, 'OBrian');

//const marriedJessica = jessica;
//marriedJessica.lastName = 'Davis';

//console.log('before', jessica1);
//console.log('after', marriedJessica);

// CREATE NEW OBJECT WITHOUT MUTATING

const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};

// !! NESTED OBJECTS KEEPS ONLY REFERENCE TOO !!!

// SAHALLOW COPY, JUST ONE LEVEL
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

//console.log(jessica2, jessicaCopy);
// THATS WHY THIS MUTATES jessica2.family AS WELL !!!
//jessicaCopy.family.push('mary');
//jessicaCopy.family.push('john');

//console.log(jessica2);
//console.log(jessicaCopy);

// DEEP CLONE,OR DEEP COPY
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('mary');
jessicaClone.family.push('john');

console.log('original: ', jessica2);
console.log('clone: ', jessicaClone);
