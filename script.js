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

  calcAge() {
    return 2022 - this.birthYear;
  }
}

console.log(Student.prototype);

const student1 = new Student("Nibir Ahmed", 1995);
const student2 = new Student("Sadril Amin", 1996);

// console.log(student1);
// console.log(student2);

console.log(student1.calcAge());

// console.log(student1.__proto__);

const arr = [1, 2, 3];

console.log(arr.__proto__.__proto__);
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

/////////////////////////////////////////////////
// Constructor function
/////////////////////////////////////////////////////
function Person(nickName, birthYear) {
  this.nickName = nickName;
  this.birthYear = birthYear;

  // Never do
  // this.calcAge = function () {
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

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

sadril.calcAge();
nasim.calcAge();

console.log(Person.prototype);

console.log(sadril.__proto__ === Person.prototype);
console.log(Person.prototype === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sadril));
console.log(Person.prototype.isPrototypeOf(fahim));
console.log(Person.prototype.isPrototypeOf(Person));
