if(typeof document !== 'undefined'){

let d = new Date()
console.log('this is date, ', d);
window.document.getElementsByClassName('date').innerHTML = d

}else{
  console.log('The code is broken')
}




