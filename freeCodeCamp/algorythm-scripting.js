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
