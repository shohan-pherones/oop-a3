"use strict";

/* // Functional prototypes
// Class-based prototypes
// Object-create() function

// Class
class Student {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcbirthYear() {
    return 2022 - this.birthYear;
  }
}

console.log(Student.prototype);

const student1 = new Student("Nibir Ahmed", 1995);
const student2 = new Student("Sadril Amin", 1996);

// console.log(student1);
// console.log(student2);

console.log(student1.calcbirthYear());

// console.log(student1.##proto##);

const arr = [1, 2, 3];

console.log(arr.##proto##.##proto##);
console.log(arr.indexOf(3));

// Object
// Array  --- has lot's of methods
// arr ---

class Computer {
  // Private fields
  #password = 1234;
  #bank; // private bank variable

  constructor() {
    this.#bank = []; // re-assign
  }

  cpuClockSpeedTest() {
    console.log("Your computer is 80% faster than others!");
  }

  depositMoney(money) {
    this.#bank.push(money);
    // console.log(this.#password);
  }
}

const computer1 = new Computer();
console.log(computer1);
computer1.cpuClockSpeedTest();

computer1.depositMoney(1500);
computer1.depositMoney(2500);

console.log(computer1.bank);

// console.log(computer1.password);
// console.log(computer1.#password); */

/* const obj = {
  number: 1990,
};

console.log(obj.hasOwnProperty("number"));

class Test {
  // birthYear = 1990;
  constructor(birthYear) {
    this.birthYear = this.birthYear;
  }
}

const testObj = new Test(1995);

console.log(testObj.hasOwnProperty("birthYear")); */

/* /////////////////////////////////////////////////
// Constructor function
/////////////////////////////////////////////////////
function Person(nickName, birthYear) {
  this.nickName = nickName;
  this.birthYear = birthYear;

  // Never do
  // this.calcbirthYear = function () {
  //   console.log(2022 - birthYear);
  // };
}

const sadril = new Person("Sadril", 1995);
const nasim = new Person("Nasim", 1998);
const fahim = new Person("Fahim", 1995);

// 1. New {} will create
// 2. function will be called, this = {}
// 3. {} linked to prototype
// 4. function will automatically returns {}

console.log(sadril);
console.log(nasim);
console.log(fahim);

console.log(sadril instanceof Person);

Person.prototype.calcbirthYear = function () {
  console.log(2022 - this.birthYear);
};

sadril.calcbirthYear();
nasim.calcbirthYear();

console.log(Person.prototype);

console.log(sadril.##proto## === Person.prototype);
console.log(Person.prototype === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sadril));
console.log(Person.prototype.isPrototypeOf(fahim));
console.log(Person.prototype.isPrototypeOf(Person)); */

/* function User(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
}

User.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const rahim = new User("Rahim", 1996);
rahim.calcAge();
console.log(rahim);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(Array.prototype);

const arr = [5, 4, 2, 5, 4, 2, 1, 3, 2, 2, 4, 5];

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1); */

//////////////////////////////////////
// ES6 Classes
/////////////////////////////////////

/* class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hello, ${this.fullName}!`);
  }

  static couponCode() {
    console.log(515151514444);
  }
}

const kajol = new Person("Kajol Rekha", 1995);
const sadril = new Person("SAdril", 1994);

kajol.calcAge();
console.log(kajol);
kajol.greet();
console.log(sadril);
console.log(Person.prototype === kajol.##proto##);
console.log(Person.prototype.constructor);

Person.couponCode(); */
// kajol.couponCode();
// Person.calcAge();

// Classes are not HOISTED
// Classes are first-class functions
// Classes always use 'use strict'

/* class CinemaHall {
  constructor(movieName, seatCount) {
    this.movieName = movieName;
    this.seatCount = seatCount;
    this.audience = [];
  }
  // // setter
  // set seatCount(seats) {
  //   console.log(seats);
  // }

  // //getter
  // get ticketPrice() {
  //   return this.seatCount * 100;
  // }

  audienceCount(name) {
    this.audience.push(name, this.movieName, this.seatCount);
  }
}

const abdullah = new CinemaHall("Inception", 10);
const sumaiya = new CinemaHall("Snowman", 5);
const suma = new CinemaHall("Snowman", 50);

console.log(abdullah.ticketPrice);
console.log(sumaiya.ticketPrice);
abdullah.audienceCount("Abdullah");
console.log(abdullah);
abdullah.seatCount; */

/* ///////////////////////////////////////////
// Object.create()
///////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
};

const jessica = Object.create(PersonProto);

jessica.fullName = "Jessica Jennie";
jessica.birthYear = 1990;

console.log(jessica);

jessica.calcAge(); */

// Inheritance between multiple classes:
// 1. Constructor function
// 2. ES6 classes
// 3. Object.create()

///////////////////////////////////////////////////////
// 1. Constructor function:
/////////////////////////////////////////////

/* // Class 1
function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// Method of Class 1
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

Person.prototype.greet = function () {
  console.log(`Hello, ${this.firstName}`);
};

// Obejct from Class 1
const tumpa = new Person("Tumpa", 1996);
console.log(tumpa);
tumpa.calcAge();

// Class 2
function Student(firstName, birthYear, department) {
  Person.call(this, firstName, birthYear);
  this.department = department;
}

// Linking prototypes between class 1 and class 2
// Student.prototype = Person.prototype; // don't do this
Student.prototype = Object.create(Person.prototype);

const sabrina = new Student("Sabrina", 1996, "CSE");
console.log(sabrina);
sabrina.calcAge();
console.log(Person.prototype);
console.log(Student.prototype);
sabrina.greet();
tumpa.greet(); */

////////////////////////////////////////////////////
// 2. ES6 classes
/////////////////////////////////////////////

class Player {
  #tokenNum; // init private field
  #password = 1234;

  constructor(nickName, jerseyNum, rating, tokenNum) {
    this.nickName = nickName;
    this.jerseyNum = jerseyNum;
    this.rating = rating;
    this.#tokenNum = tokenNum; // assign
    // console.log(this.#password);
    this.#greet();
    this.#playerRating();
  }

  #greet() {
    console.log(`Hi, ${this.nickName}`);
  }

  #playerRating() {
    console.log(`${this.nickName} has ${this.rating} ratings.`);
  }
}

const neymar = new Player("Neymar", 10, 90);

class Captain extends Player {
  constructor(nickName, jerseyNum, rating, bandColor) {
    super(nickName, jerseyNum, rating);
    this.bandColor = bandColor;
  }
}

const fabinho = new Captain("Fabinho", 11, 85, "red");

/* neymar.#greet();
fabinho.#greet();
fabinho.#playerRating();
neymar.#playerRating(); */

///////////////////////////////////////////////////////////////
// Object.create()
///////////////////////////////////////////////////////////////

/* const PersonProto = {
  calcAge() {
    console.log(2042 - this.birthYear);
  },

  getParam(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jessica = Object.create(PersonProto);

jessica.getParam("Jessica", 1995);

console.log(jessica);
jessica.calcAge();

// New prototype
const StudentProto = Object.create(PersonProto);

const natasha = Object.create(StudentProto);

natasha.getParam("Natasha", 1998);
natasha.calcAge();
 */
