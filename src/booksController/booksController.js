const bookeSechma = require("../bookSchema/bookSchema")

const createNewBooks = async function (req, res) {
    let data = req.body
    let savaData = await bookeSechma.create(data)
    res.send(savaData)
}

const getBookPost = async function (req, res) {
    let year = req.query.years
    let allBooks = await bookeSechma.find({ year })
    res.send(allBooks)
}
const getnewBook = async function (req, res) {
     //let getAllBooks=await bookeSechma.find().select({bookeName:1,authorName:1,_id:0 })
   // let getAllBooks = await bookeSechma.find({$or:[{price:{ IndianPrice: {$or:["Rs. 100"]} }} ,  {price:{ IndianPrice: {$or:["Rs. 200"] } }},{ price: { IndianPrice: {$or:["Rs. 500"] }}} ]})
     let getAllBooks= await bookeSechma.find({totalPages:{$gt:500},stockAvailable:true})
    res.send(getAllBooks)
}

module.exports.createNewBooks = createNewBooks
module.exports.getBookPost = getBookPost
module.exports.getnewBook = getnewBook