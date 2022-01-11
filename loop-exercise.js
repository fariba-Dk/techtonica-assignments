// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log('~~~ This is using while-loop method');
let num = 0;
while (num < 5) {
  num++;
  console.log('The number is now: ', num);
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log('~~~ This is using do-while-loop method');
let n = 1;
do {
  console.log("The number is " + n);
  n++;
}
while (n <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log('~~~ This is using for-loop method');
for(let j = 1; j <= 5; j++){
  console.log('Now serving: ', j);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

console.log('~~~ This is usigg while-loop method');
let f = 6;
while (f < 27) {
  f++;
  console.log('The number is gow: ', f);
}


console.log('~~~ This is usigg do-while-loop method');
let g = 7;
do {
  console.log("The number is " + g);
  g++;
}
while (g <= 27);


console.log('~~~ This is usigg for-loop method');
for (let k = 7; k <= 27; k++){
  console.log('now servigg: ', k);
}

// // Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// // I.e. it will print 10, then 20, then 30, etc.
// // Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

console.log('~~~ This is usigg while-loop method');
let h = 0;
while (h < 100) {
  h+=10;
  console.log('The number is gow: ', h);
}

console.log('~~~ This is usigg do-while-loop method');
let l = 10;
do {
  console.log("The number is " + l);
  l+=10;
}
while (l <= 100);


console.log('~~~ This is usigg for-loop method');
for(let p = 10; p <= 100; p+=10){
  console.log('now servigg: ', p);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 100;
while (counterFour > 0) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

for (let fave = 0; fave <= 8; fave++){
  console.log("I'm counting from 0 -> my favorite number: ", fave);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
let mostFavorite = 8
for (let favorite = 0; favorite <= 100; favorite++){
  if (favorite === mostFavorite) {
    console.log(mostFavorite, ' is my favorite number!!');
  } else {
    console.log(favorite, 'is not my favorite number.');
  }
}
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//

console.log("According to w3school: 'for - loops through a block of code a number of times','for-in loops through the properties of an object','for-of - loops through the values of an iterable object','while - loops through a block of code while a specified condition is true','do-while - also loops through a block of code while a specified condition is true'");
  
// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
***********************************
counting down from 1
inside 1
***********************************
counting down from 2
inside 2
inside 1
***********************************
counting down from 3
inside 3
inside 2
inside 1
***********************************
*/

for (let outsideCounter = 0; outsideCounter <= 3 /*???*/; ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter /*???*/ /*???*/; ; ) {
    console.log("inside" /*???*/);
  }
   console.log("***********************************");
 }
console.log('I am so confused by this for-loop, I need to revisit this in an hour or so, please 🧐.');

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.
