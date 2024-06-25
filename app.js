const express = require('express');
const mongoose = require(`mongoose`);

const app = express();
const bookRouter = express.Router();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

bookRouter.route('/books').get(async (req, res) => {
  try {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port  ${port}`);
});
