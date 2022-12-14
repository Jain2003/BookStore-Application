const express = require("express");
const router = express.Router();
// const Book = require("../models/books");
const booksController = require("../controllers/books-controller.js");
router.get("/", booksController.getAllBooks);
router.post("/",booksController.addNewBook);
router.get("/:id",booksController.getBookById);
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
module.exports = router;