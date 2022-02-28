console.log('this is sanity check');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;

const app = express();
const path = require('path');

app.use(express.static('public'));
express.static(path.join(__dirname, '/public'));

//localhost:8080 should take users to index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  //res.send('hey I worked')
});

//localhost:8080/about should take users to about.html
app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/about.html');
  //res.send('hey I worked')
});

//localhost:8080/contactme should take users to contact-me.html
app.get('/contactme', function (req, res) {
  res.sendFile(__dirname + '/contactme.html'); //contactme.html
  //res.sendsend('hey I worked')
});

//404.html should display any time the user tries to go to a page not listed above.
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/404.html');
  //res.send('hey I worked')
});
app.listen(PORT, () => {
  console.log(`Server is working on: ${PORT}!`);
});
