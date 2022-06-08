const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")


router.post("/createAuthor",BookController.createAuthor  )

router.post("/createBook",BookController.createBook)

router.get("/getBookbyChetanBhagat", BookController.getBooksbyChetanBhagat)

router.get("/authorBook", BookController.authorofBook)

router.get("/getBook",BookController.findBook)
module.exports = router;