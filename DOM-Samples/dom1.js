let cc = console.log;
cc('This is the Sanity test! Yay ~~~~~~~~~~~~~~~~~~~!');

/* ~~~~~~~~~~~~~~~~~ S P L I T  ~~~~~~~~~~~~~~~~~~~~~~`
  ex 1: let message = 'I am a Happy Go lucky Guy';
  console.log(message.split(' ', 4)); // ["I", "am", "a", "Happy"]
  ex 2: document.body.innerText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

  ex 3: let message = 'The sky is blue. Grass is green! Do you know the color of the Cloud?';
*/

if(typeof document !== "undefined"){

  const paragraph = window.document.querySelector('p')
  paragraph.innerHTML = paragraph.innerText
    .split(/[.,!,' ',?]/)
    //.split(' ')
    .map((word) =>
      word.length >= 6
        ? `<span style="background-color:yellow">${word}</span>`
        : word
    )
    .join(' ');
  }else{
  cc('This is not working')
}


  /*
    Exercise 02
    -----------
    Add a link back to the source of the text after the paragraph tag.
    (https://forcemipsum.com/)
  */
  // create an elm 'a'
  // add href to it
  // add a body to it that reads the link
  // append it to the document
  // let link = document.createElement('a');
  // link.href = "https://www.youtube.com/watch?v=EHF7xBUAmrQ";
  // link.innerText ="************ here! ***********"
  // document.body.appendChild(link)

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
