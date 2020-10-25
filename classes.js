/**
 * In Javascript anything is an object, including functions.
 */

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  greet() {
    console.log(`Hello ${this.name} you are in grade ${this.grade}`);
  }
}

const o1 = new Person("Ranganath");
const o2 = new Student("SNR", "1st");
const o3 = new Student("Alex", "2nd");
o3.greet = () => console.log("I am special, Attention please!");

o1.greet();
o2.greet();
o3.greet();
