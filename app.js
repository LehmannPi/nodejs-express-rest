const express = require('express');
const mongoose = require(`mongoose`);
const bodyParser = require('body-parser');

const app = express();
const bookRouter = express.Router();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

// "kind of sets the whole thing up so that it'll pull JSON out of the POST body and give it to us in that req.body"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bookRouter
  .route('/books')
  .post((req, res) => {
    const book = new Book(req.body);

    book.save();
    return res.status(201).json(book);
  })
  .get(async (req, res) => {
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

bookRouter.route('/books/:bookId').get(async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    res.status(200).json(book);
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
