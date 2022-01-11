// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
function logGreeting() {
  console.log('The argument is not passed in here, it is the hello excercise, Hello!');
}
logGreeting();

function logsGreeting(str) {
  console.log(str);
}
logsGreeting('~~ Hello! ~~~');
//console.log(logGreeting("This function prints Hello!"));
// Underneath the function, write the line of code that runs the function.

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName() {
  return 'This function is returning my name, Fariba.';
}
console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
function logGreeting2() {    // <-- function
  function myName() { // <-- inner function
    return `Hello! My name is Fariba.`;
   // <-- use variables from outer scope
  }
  return myName;       // <-- you can even return a function.
}
console.log(logGreeting2()());

// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
function threeParams(n1, n2, n3) {
  return n1 + n2 + n3;
}
// The function should return the sum of the 3 numbers.
console.log(threeParams(2, 3, 1));

// Then write some function calls you would use to test your function.
function some() {
  return 'This is calling me when I test it!';
}
console.log(some());

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
function discountByAge(age) {
  //discount if 14 or less && if 65 and more
  //return boolean
  if (age <= 14 || age >= 65) return true;
  return false;
}
console.log(discountByAge(64));
console.log(discountByAge(40));
console.log(discountByAge(14));
console.log(discountByAge(65));

// Otherwise it should return false.
// Then write some function calls you would use to test your function.
console.log('I am NOT clear on line 75, What does it mean calls you?')

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
function mixPrimitive(num, str) {
  console.log(str.repeat(num));
}
// The function should print the string the given number of times.
const bb = mixPrimitive(40, ' yay,');
console.log(bb);


// Then write some function calls you would use to test your function.

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
console.log('mysteryFunction1 multiplies thge value of the passed parameter by 2.');

// 2. What prints out for the value of y
console.log("Line 93. Since we are passing the argument '4' as a parameter to 'y'.");

// 3. What prints out for the value of z
console.log('Line 95. Since we are assigning the funtion mysteryFunction1(y) and passed an argument on line 92.');
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  //this function assigns 'x' the value of deduction of the 2 values of p2 from p1 and returns that value which is assigned to 'x'; 
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
console.log("this function assigns 'x' the value of deduction of the 2 values of p2 from p1 and returns that value which is assigned to 'x'.");
// 2. What prints out for the value of a
console.log('10 - 4 = 6');
// 3. What prints out for the value of b
console.log('b is a function that calling on its own and recurses and returns 5.');
// Now run the code and see if you're correct.

// Were you correct? If not, what did you learn?

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = 'eggs,carrots,orange juice';
console.log(groceryList.split(','));
console.log("The split(',') returns the array with each element as string as such: [ 'eggs', 'carrots', 'orange juice' ]");

console.log(groceryList.split(' '));
console.log("This method seperates the elements where there is an space as such: [ 'eggs,carrots,orange', 'juice' ]");

// Here's a string I made representing my morning schedule.

// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = 'wake up--->brush teeth--->eat breakfast--->go to work';
const firstTwo = mySchedule.split('--->');
console.log(firstTwo.slice(2)); //[ 'eat breakfast', 'go to work' ]

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
console.log('It was easy, but got tricky, 😊.');
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
