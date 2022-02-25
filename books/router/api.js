const router = require('express').Router();
const books = require('./book-data');

let bookArr = books; //instance of books

//--> routes here localhost:3005/api/v1/books
//GET
router.get('/books', (req, res) => {
  //req obj or res obj
  res.send(bookArr);
});

router.get('/books/:id', (req, res) => {
  const { id } = req.params;
  //we can destruct params, id here
  const book = bookArr.find((b) => b.isbn === id);

  if (!book) return res.status(404).send('This Book Does Not Exist!');
  //if we find the book we send the book
  res.send(book);
});

//POST
router.post('/books', (req, res) => {
  //book params
  const {
    title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    catagories,
  } = req.body; //this is our body

  const bookExist = bookArr.find((b) => b.isbn === isbn);

  if (bookExist) return res.send('Book Already Exists!!');

  //if book does not exists then we add newbook with these properties
  const newBook = {
    title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    catagories,
  };
  //send this new bok
  bookArr.push(newBook);
  res.send(newBook);
});

//router.put('/books/:id', (req, res) => {});

module.exports = router;
