let cc = console.log
cc('This is a sanity check')

const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const cors = require('cors')
const PORT = 3005;

//middleware
app.use(bodyParser.json())//grabs http as req.body
app.use(cors())

//books go here
let bookArr = []

//GET
app.get('/', (req,res) => {
  res.send('----> AHOY FROM INDEX.JS')
});
// app.get('/books', (req,res) => {
//   res.send('----> AHOY FROM INDEX.JS')
// });

//POST
app.post('/book', (req,res) =>{
  const book = req.body
  cc(book)
  bookArr.push(book)

  res.send('Adding book to bookArr')


})

//UPDATE


//DELETE

app.listen(PORT, () => {
  console.log(`app is listening on: https://localhost:${PORT}`);
});
