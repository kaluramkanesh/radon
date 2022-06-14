const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const user1Controller=require("..//controllers/user1Controller")
const productController=require("..//controllers/productController")
const orderDetail=require("..//controllers/orderController")
const middleware = require('../middleware/commonMiddlewares');

router.post('/addProduct', productController.createProduct);
router.post('/addUser', middleware.headerValidation, user1Controller.createUser);
router.post('/createOrder', middleware.headerValidation, orderDetail.createOrder);


module.exports = router;