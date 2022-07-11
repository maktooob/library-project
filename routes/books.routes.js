const Book = require("../models/Book.model");

const router = require("express").Router();


router.get("/books", (req, res, next) => {

  Book.find()
    .then( (booksFromDB) => {
      console.log("Query to DB worked...", booksFromDB.length)

      const data = {
        booksArr: booksFromDB
      };
      res.render("books/books-list", data);
    })
    .catch( (error) => {
      console.log("Error getting data from DB", error)
    })
});

router.get("/books/:bookId", (req, res) => {
  const bookId = req.params.bookId
  Book.findById(bookId)
  .then( (bookById) => {
    console.log(bookById);
    res.render("books/books-details", bookById)
  } )


})


module.exports = router;
