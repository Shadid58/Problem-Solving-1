                        // Please comment out each solution to see the results in git bash

// Solution 1

/*Output will be:
I am var
letVariable is not defined
constVariable is not defined

var is function-scoped or globally scoped. So it will show the output in scopetest  function. Whether let and const is block scoped. That's why it will show ReferenceError.*/


// Solution 2

/*function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
  
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!" */


// Solution 3

/*function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
  
console.log(sum(1, 2, 3)); 
console.log(sum(10, 20, 30, 40)); 
console.log(sum(5));  */


// Solution 4

/*const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); */


// Solution 5

/*const name = "John";
const age = 30;

const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
};

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old." */


// Solution 6

/*const fruits = ["apple", "banana", "cherry"];

for (const singleFruit of fruits) {
  console.log(singleFruit);
}*/


// Solution 7

/*const name = "Alice";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);*/


// Solution 8

/*const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
];
  
for (const singleStudent of students) {
    console.log(`${singleStudent.name}: ${singleStudent.grade}`);
}*/


// Solution 9

/*const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
  
for (const singleArray of nestedArrays) {
    let sum = 0;
    for (const number of singleArray) {
      sum += number;
    }
    console.log(sum);
}*/


// Solution 10

/*const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."*/

  