if(typeof window !== "undefined"){

  function changeImage(a) {
    document.getElementById("img").src = a;
  }
    // Using DOM manipulation change the color of the first person's hometown
  let rebutton = document.getElementByClassName('button');
    rebutton.style.background-color="green";

}else{
  console.log('this is good')
}
//
document.addEventListener("click", myFunction);
{/* <div id="main_img">
        <img id="img" src="/Recipe-page/photos/">
      </div>
      <div id="thumb_img">
        <img src="/Recipe-page/photos/tahchin-4.jpeg" onclick='changeImage(a);'>
        <img src="/Recipe-page/photos/tahchin-3.jpeg" onclick='changeImage(a);'>
      </div> */}
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
// document.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
// //Simpler syntax:

// document.addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World";
// });
// //More examples below.
// const fruitList = ['apple', 'banana', 'tomato'];
// document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'white';

// let ul = document.createElement('ul');
// document.body.appendChild(ul);

// fruitList.forEach(function (fruit) {
//   let li = document.createElement('li');
//   ul.appendChild(li);
//   li.innerText = fruit;
// });

// let num = 1;
// let cc = console.log;

// /*
//   <ul id='listFirstPerson'>
//     <li class="firstItem">Nickname: <span id="nicknameSarah">Fariba</span>
//     <li>Favorites:  <span id="favorites">Sushi</span>
//     <li id='lastItemFirstPerson'>Hometown: <span id="hometownFirstPerson">Los Angeles, CA</span>
//    </ul>

// √ 1. Add a script tag with `src="script.js"`, add  `<link href="style.css" rel="stylesheet" type="text/css" />` into the head tag (what do these do?).

// √ 2. Change the body style so it has a font-family of "Arial, sans-serif".

// √ 3. Replace each of the spans (nickname, favorites, hometown) with your own information (make a new set of 3 of list items for each person). (Think about the fact there are IDs for each list item, you will need to change something for each new item)
// */

// function changeClass() {
//   let oldClass = document.getElementsByClassName('firstItem');

//   for (var i = 0; i < oldClass.length; i++) {
//     // PERFORM STUFF ON THE ELEMENT
//     oldClass[i].setAttribute('class', 'listItem');
//   }
// }
// console.log(changeClass());

// // √ 4. Iterate through each li and change the class to "listItem". Add a style tag that sets a rule for "listItem" to make the color red.(Hint: you will need CSS too)*/

// let newColor = document.getElementsByTagName('li');
// for (let i = 0; i < newColor.length; i++) {
//   newColor[i].style.color = 'blue';
// }

// /*
// √ 5. Create a new img element and set its src attribute to a picture of you. Append that element to the page.*/

// let currentImage = 'image1';
// let photoArr = [
//   Recipe-page/photos/tahchin-4.jpeg
// ]

// function change() {
//   //onClick event change

//   let image = document.getElementById('image1');
//   if (currentImage == 'image1') {
//     image.src =
//       'https://media-exp1.licdn.com/dms/image/C5603AQHGZXRFlVa9Ag/profile-displayphoto-shrink_400_400/0/1628667098576?e=1648684800&v=beta&t=AO4xwG86zvArBB43g3upCoKdxCr4egUpQ-uDJ-gEjQA';
//   } else {
//     image.src =
//       'https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/fariba-dadko-a0d23e14';
//   }
// }

// // 6. Try using JS DOM manipulation to change the text of the first li to "YAY I WORK" */
// let liArray = document.getElementsByTagName('li'); //whole array
// let firstLi = liArray[0];
// console.log('This is first li tag', firstLi);
// console.log('this is the 2nd console......', firstLi.innerText);
// // firsUl.push('Training: Techtonica')

// // 7. Using DOM manipulation add one more li to the end of your list, give it all the information needed

// //attach th enew element to the parte

// //1. get access to parent element
// let myList = document.getElementById('listFirstPerson');

// //create a new elm 'li'
// let myListItem = document.createElement('li');

// //add the li to the list Array myList
// myList.appendChild(myListItem);

// //create a new a tag
// let myTag = document.createElement('a');

// //assign value of the contect of the text
// myTag.textContent = 'Techton';

// //append the a tag to the li element we created
// myListItem.appendChild(myTag);

// // let newHref = setAttribute('href', "https://techtonica.org/")
// myTag.setAttribute('href', 'https://techtonica.org'); // set href here


