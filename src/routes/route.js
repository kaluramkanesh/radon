const express = require('express');
const router = express.Router();

const books = require("../booksController/booksController")

router.post("/newBooks", books.createNewBooks)
router.post("/postApiYears",books.getBookPost)
router.get("/getNewBooks",books.getnewBook)

module.exports = router;