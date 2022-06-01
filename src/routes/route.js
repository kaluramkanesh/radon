const express = require('express');
const logger = require("../logger/logger.js")
const helper = require("../util/helper")
const validator = require("../validator/formetter.js")
const router = express.Router();
router.get('/test-me', function (req, res) {
    res.send('My first ever api! Hello kaluram')
    logger.xyz();
    helper.printDate()
    helper.month()
    helper.batchInfo()
    validator.trimString()
    validator.changetoLowerCase()
    validator.changeToUpperCase()
});
router.get("/test-me1", function (req, res) {
    res.send("This is my second api's on nodejs")
});
router.get("/my-api's", function (req, res) {
    res.send("Hello kaluram this is my api's don't touch it please")
})
router.get("/Hello-Api's", function (req, res) {
    res.send("Hello from kaluram what are you doing now")
});

module.exports = router;
// adding this comment for no reason