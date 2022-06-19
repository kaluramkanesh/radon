const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController")
const userController = require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/loginUser", userController.loginUser1)
router.get("/getUserData/:userId", userController.userDetail)
router.post("/user/:userId/post", userController.postMessage)
// router.post("/login", userController.loginUser)
// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.get("/GetUsersData/userID", userController.getUserData)//mine

// router.put("/users/:userId", userController.updateUser)

module.exports = router;