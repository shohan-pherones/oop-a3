// Functional prototypes
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
// console.log(computer1.#password);
