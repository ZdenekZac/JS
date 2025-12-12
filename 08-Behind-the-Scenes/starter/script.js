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
