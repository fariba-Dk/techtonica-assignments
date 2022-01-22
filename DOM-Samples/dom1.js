let cc = console.log;
cc('This is the Sanity test! Yay ~~~~~~~~~~~~~~~~~~~!');

/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */
//let body = null;
/*

  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
if (typeof document !== 'undefined') {
  // during server evaluation
  const fiveLong = window.document.querySelector('p')

    //take the element that is inside the tag
    fiveLong.innerHTML = fiveLong.innerText;
    fiveLong.innerText.split(' ') //split in to an array
    //map thru to see if the length is over 8
    .map(word => word.length > 8 ? `<span "style:"background-color: yellow">${word}</span>` : word).join(' ')
    //     : console.log('No words smaller that  letters').join(' ')
    // ); //inline style5}
    }else{
  cc('~~~~~~~~~~~~~ Do Nothing~~~~~~~~~~~~~')
    }

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

/*
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲)
*/
