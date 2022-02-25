const express = require('express');
const bodyParser = require('body-parser');
const api = require('./router/api');

const app = express();
const PORT = 3007;

// middleware
app.use(bodyParser.json()); //
app.use('/api/v1', api);
//middleware

app.listen(PORT, () => {
  console.log(`app is listening on: https://localhost:${PORT}`);
});
