const express = require('express');

function routes(Book) {
  const bookRouter = express.Router();
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

  return bookRouter;
}

module.exports = routes;
