const bookeSechma = require("../bookSchema/bookSchema")

const NewBooksEntry = async function (req, res) {
    let data = req.body
    let savaData = await bookeSechma.create(data)
    res.send(savaData)
}

const getBooksInYear = async function (req, res) {
    // let year = req.query.years
    // let allBooks = await bookeSechma.find({ year })
    // res.send(allBooks)
    let year=req.body
    let getBook=await bookeSechma.find(year)
    res.send(getBook)
}
const bookList = async function (req, res) {
    let getAllBooks = await bookeSechma.find().select({ bookeName: 1, authorName: 1, _id: 0 })
    res.send(getAllBooks)
}
const getRandomBooks = async function (req, res) {
    let getAllBooks = await bookeSechma.find({ totalPages: { $gt: 500 }, stockAvailable: true })
    res.send(getAllBooks)
}
const getParticularBooks = async function (req, res) {
    //(this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
    //e.g if body had { name: “hi”} then you would fetch the books with this name
    //if body had { year: 2020} then you would fetch the books in this year
    //hence the condition will differ based on what you input in the request body
    let getBookByAnyAtribute = req.body
    let getBookByBookAnyAtribute = await bookeSechma.find(getBookByAnyAtribute)
    res.send(getBookByBookAnyAtribute)
}
const getXINRBooks = async function (req, res) {
    //request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
    //let getAllBooks= await bookeSchema.find(price:["IndianPrice"]:)
    let getAllBooks = await bookeSechma.find({ $or: [{ "price.IndianPrice": ["Rs. 100", "Rs. 200", "Rs. 500"] }] })
    res.send(getAllBooks)

}
module.exports.NewBooksEntry = NewBooksEntry
module.exports.getBooksInYear = getBooksInYear
module.exports.bookList = bookList
module.exports.getRandomBooks = getRandomBooks
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks = getXINRBooks