/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
  let commonStr = str.slice(str.length - target.length);
  if (commonStr === target) return true;
  return false;
}
confirmEnding('Bastian', 'n');



/*Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.*/

function repeatStringNumTimes(str, num) {
  //edge case:
  if (num <= 0) return '';
  // do not use .repeat()
  //for-loop
  let newStr = '';
  for (let i = 0; i < num; i++){
    newStr += str;
  }
  return newStr;
}
repeatStringNumTimes("abc", 3);


/*Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

/*Check if a value is classified as a boolean primitive. Return true or false.
 Boolean primitives are true and false.
 In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null. ... It is important not to confuse a primitive itself with a variable assigned a primitive value.Oct 7, 2021*/

function booWho(bool) {
  return typeof bool === "boolean";
}
// test here
booWho(null);


/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
//https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";

  // Step 2. Split the string into an array of strings
  str = str.split(' ');
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];

  // Step 3. Create the FOR loop
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  /* Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   str[1] = "A"                            + "";
                   str[1] = "A";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                   str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                   str[2] = "L"                              + "ittle";
                   str[2] = "Little";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                   str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                   str[3] = "T"                            + "ea";
                   str[3] = "Tea";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   str[4] = "P"                           + "ot";
                   str[4] = "Pot";
    End of the FOR Loop*/
  }

  // Step 4. Return the output*/
  return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}
titleCase("I'm a little tea pot");



Array.slice()
Array.splice()

// Hint 1
// Create a copy of the second array inside of the function. This will ensure that the original array is not mutated. This can be done by using the slice operation on the second array, and assign it to a variable.

// Hint 2
// Loop through all of the items in the first array. For each item in the first array splice it into the copied array in the index given as argument.

// Hint 3
// Increment the index after performing the splice.

// Solutions
//Solution 1 (Click to Show/Hide)
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
// Code Explanation
// Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.

// Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.

// Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.

// We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.

// Finally, we return the localArray and end the function.

Solution 2 (Click to Show/Hide)
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
// Since our goal is to return the new array with out altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function

// Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ....

// localArr is returned and the function is complete.

/* Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
Hint 1
Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, “” (empty string), and false of course.

Hint 2
We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values…

Hint 3
Then we need to add a filter() with the falsy values function */

function bouncer(arr) {
  let truthy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) truthy.push(arr[i]);
  }
  return truthy;
}

bouncer([7, "ate", "", false, 9]);



/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
  //sort the arry from low - high
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }
  return arr.length;
}
getIndexToIns([40, 60], 50);
