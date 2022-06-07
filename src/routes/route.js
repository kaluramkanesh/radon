const express = require('express');
const router = express.Router();

const books = require("../booksController/booksController")

router.post("/createNewBookPost", books.NewBooksEntry)
router.post("/postApiYears",books.getBooksInYear)
router.get("/getAllBookList",books.bookList)
router.get("/getAvailableBooks",books.getRandomBooks)
router.post("/getParticularBooksApi",books.getParticularBooks)
router.get("/getXINRBooks",books.getXINRBooks)

module.exports = router;