const product1 = require("..//models/productModel")

// const Product = require('../models/productModel');
// const createProduct = async function (req, res) {
//     let product = req.body
//     let productCreated = await product1.create(product)
//     console.log(productCreated)
//     res.send({ Data: productCreated })
// }
// module.exports.addProduct = addProduct;


const createProduct = async (req, res) => {
  const getProductData = req.body;

  const showData = await product1.create(getProductData);
  res.send({ data: showData, status: true});
}
module.exports.createProduct=createProduct