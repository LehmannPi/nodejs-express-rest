## RESTful Web Services with Node.js and Express

The goals for the project are

- Get Data
  - Implement HTTP GET
  - Get a list of items or just one
  - Wire up to MongoDB
  - Search for items

## Stack ⚙️

- Node.js
- Express

## Tooling 🔧

- Nodemon
- Eslint

## On MongoDB 🍃

When using Windows, an important part to understand handling MongoDB is how to include the MongoDB binaries to the environment variables.

The procedure is explained on the [installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) but an interesting explanation on the legacy command 'mongo' is found [here](https://www.youtube.com/watch?v=V-d6VAYrjeQ) and was very useful in the development the project.

We create and populante the bookAPI database used on the project by doing `mongosh bookAPI booksJson.js`. To check it, we can enter `mongosh` and execute in the terminal

```bash
show dbs;
use bookAPI
```

After that, we have switched to the bookAPI, we can see the collections using `show collections` and display the contents of it using `db.books.find()`
