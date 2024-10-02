'use strict';

// -------** Functions

// --- Function is simply a piece of code that we can reuse over and over again in our code.

// 01. Function Declaration - Function that can be used before it's declared (Hoisting)
function calcAge(birthyear) {
  return 2024 - birthyear;
}

const showAge = calcAge(2002);
console.log(showAge);

// 02. Function Expression - Essentially a function value store in a variable
const calcAge2 = function (birthyear) {
  return 2024 - birthyear;
};

const showAge2 = calcAge2(2003);
console.log(showAge2);

// 03. Arrow Function - Great for a quick one-line function. has no this keyword.
const calcAge3 = (birthyear) => 2024 - birthyear;
const showAge3 = calcAge(2004);
console.log(showAge3);

// ----- Create a Fruit Processor Function()

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
fruitProcessor(5, 0); // calling / running / invoking function

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log(fruitProcessor(5, 0));

// Parameter : It's a variable in a function definition. it's a placeholder for value that will be provided when the function is called.

// Argumant : It's the actual value that is passed to the function when calling it. These value are assigned to the function's parameters.

// Return : The return statement stops the execution of a function and return a value.
// The return statemets makes the function reusable you can use the some function in multiple places.

// ----- Function Calling Other Function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor2(2, 4));

// ----- Exercise - Arrow Function
const calcAge4 = (birthYear) => 2024 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  // const age = 2024 - birthYear;
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1990, 'Anil'));
console.log(yearsUntilRetirement(1991, 'Manoj'));

// ------- ** Arrays

// --- Arrays in javascript are data structures used to store multiple values in single variable.

const friends = ['Manoj', 'Gagan', 'Mallesh'];
console.log(friends);

const years = new Array(2000, 2001, 2002);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = 'Anil';
// const anil = [firstName, "Kunda", 2024 - 2002, "Developer", friends];
// console.log(anil);

// Exercise

const calcAge5 = function (birthYear) {
  return 2025 - birthYear;
};
const years2 = [1992, 1998, 2002, 2004];

const age1 = calcAge5(years[0]);
const age2 = calcAge5(years[1]);
const age3 = calcAge5(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge5(years[0]),
  calcAge5(years[1]),
  calcAge5(years[years.length - 1]),
];
console.log(ages);

// ----- Basic Arrays Operations (Methods)

const friends2 = ['Manoj', 'Gagan', 'Mallesh'];

// Add Elements
const newLength = friends.push('Vishnu');
console.log(friends);
console.log(newLength);

friends.unshift('Anil');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Gagan'));
console.log(friends.indexOf('Mallesh'));
console.log(friends.includes('Gagan'));
console.log(friends.includes('Pradeep'));

// ------- ** Objects

// --- Objects in javascript are data structures that store callection of key-value pairs.

const manoj = {
  firstName: 'Manoj',
  lastName: 'Gowda',
  age: 2024 - 2003,
  job: 'Developer',
  friends: ['Anil', 'Gagan', 'Mallesh'],
};

console.log(manoj);

// Dot Notation .
console.log(manoj.firstName);
console.log(manoj.lastName);
console.log(manoj.age);

// Bracket Notation []

console.log(manoj['firstName']);
console.log(manoj['lastName']);
console.log(manoj['age']);

const namekey = 'Name';
console.log(manoj['first' + namekey]);
console.log(manoj['last' + namekey]);

console.log(
  `${manoj.firstName} has ${manoj.friends.length} friends, and his best friends in called ${manoj.friends[0]}`
);

// ----- Basic Object Methods

const gagan = {
  firstName: 'Gagan',
  lastName: 'Gowda',
  birthYear: 2003,
  job: 'Developer',
  friends: ['Manoj', 'Anil', 'Mallesh'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -years old ${
      gagan.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} drive's license.`;
  },
};

console.log(gagan.calcAge());

console.log(gagan.age);
console.log(gagan.age);
console.log(gagan.age);

console.log(gagan.getSummary());

// BMI Calculator
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s (${jahn.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
