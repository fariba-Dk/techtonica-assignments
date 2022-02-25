const router = require('express').Router();
const books = require('./book-data');

let bookArr = books; //instance of books

//--> routes here localhost:3007/api/v1/books
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
  /* MAKE SURE BOOK DOES NOT EXIST*/
  if (bookExist) return res.send('Book Already Exists!!');

  /*if book does not exists then we add new book with these properties*/
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

router.put('/books/:id', (req, res) => {
  const { id } = req.params; //LOOK FOR ID AND destruct book id
  const {
    //destruct the body of our request
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
  } = req.params;

  const book = bookArr.find((b) => b.isbn === id);
  if (!book) res.send('This book does NOT exist!');

  /* we check the value is not defined use the previous value => else updated the value use a terniary operation*/
  const updatedField = (value, prev) => (!value ? prev : value);

  const updatedBook = {
    /* we update the fields with pass all properties, default data REM: WE CAN NOT UPDATE ISBN*/
    ...book,
    title: updatedField(title, book.title),
    pageCount: updatedField(pageCount, book.pageCount),
    publishedDate: updatedField(publishedDate, book.publishedDate),
    thumbnailUrl: updatedField(thumbnailUrl, book.thumbnailUrl),
    shortDescription: updatedField(shortDescription, book.shortDescription),
    longDescription: updatedField(longDescription, book.longDescription),
    status: updatedField(status, book.status),
    authors: updatedField(authors, book.authors),
    catagories: updatedField(catagories, book.catagories),
  };

  const bookIndex = bookArr.findIndex((b) => b.isbn === id);
  /* we update using bookIndex and splice() ~~~ splice(start: number, deleteCount?: number):
   */
  bookArr.splice(bookIndex, 1, updatedBook);
  res.send(updatedBook);
});

// DELETE
router.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const bookToBeDeleted = bookArr.find((b) => b.isbn === id);

  if (!bookToBeDeleted)
    return res.status(404).res.send('This Book does not exist');
  /* use filter to find and remove the book */
  bookArr.filter((b) => b.isbn !== id); //we return the book without this id
  res.send('Successfully Deleted!');
});

module.exports = router;
