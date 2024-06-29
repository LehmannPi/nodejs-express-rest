## RESTful Web Services with Node.js and Express

The goals for the project are

- Get Data

  - Creating a [Model](#on-mongoose-)
  - Implement HTTP GET
  - Wire up to [MongoDB](#on-mongodb-)
  - List and search for items

- Post Data

  - POST with Body Parser
  - Testing with Postman
  - Saving data

- Updating Data
  - Implementing PUT
  - Middleware
  - Implementing PATCH

## Stack ⚙️

- Node.js
- Express

## Tooling 🔧

- Nodemon
- Eslint
- Postman

## On MongoDB 🍃

When using Windows, an important part to understand handling MongoDB is how to include the MongoDB binaries to the environment variables.

The procedure is explained on the [installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) but an interesting explanation on the legacy command 'mongo' is found [here](https://www.youtube.com/watch?v=V-d6VAYrjeQ) and was very useful in the development the project.

We create and populante the bookAPI database used on the project by doing `mongosh bookAPI booksJson.js`. To check it, we can enter `mongosh` and execute in the terminal

```bash
show dbs
use bookAPI
```

After that, we have switched to the bookAPI, we can see the collections using `show collections` and display the contents of it using `db.books.find()`

Important entries to understand the commands used are the [Databases and Collections](https://www.mongodb.com/docs/manual/core/databases-and-collections/#databases-and-collections), [listCollections](https://www.mongodb.com/docs/manual/reference/command/listCollections/) and [Collection Methods](https://www.mongodb.com/docs/manual/reference/method/js-collection/) pages from MongoDB docs.

## On Mongoose 🦦

According to a [MongoDB developer article](https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/) "Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB. It is akin to an Object Relational Mapper (ORM) such as SQLAlchemy for traditional SQL databases". So it is necessary to have [MongoDB](http://www.mongodb.org/downloads) and [Node.js](http://nodejs.org/) installed.

It was used to created the Book [model](<https://mongoosejs.com/docs/api/model.html#Model()>) through the [Schema](https://mongoosejs.com/docs/guide.html) defining the shape of the documents within the MongoDB collection.

An important page to understand the methods used throught the project as well as other data query possibilities is the [Model](https://mongoosejs.com/docs/api/model.html) page, with methods like create, find, findById, save, delete methods and many more.
