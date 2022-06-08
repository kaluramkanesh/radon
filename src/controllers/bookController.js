// const { count } = require("console")
// const res = require("express/lib/response")
// const { Module } = require("module")
// const BookModel = require("../models/bookModel")

// const createBook = async function (req, res) {
//     let data = req.body

//     let savedData = await BookModel.create(data)
//     res.send({ msg: savedData })
// }


// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }
//..................CRUD OPERATIONS.......................
//.................CREATE BOOK DATA..........................
// const createNewBook = async function (req, res) {
//     let data = req.body
//     let savaData = await BookModel.create(data)
//     res.send({ savaData })
// }
// //..............READ BOOK DATA.........................
// const getAllBooks = async function (req, res) {

//     let savaData = await BookModel.find()
//     res.send(savaData)
// }
// //................UPDATE BOOK DATA.....................
// const UpdateNewBooks = async function (req, res) {
//     let data = req.body
//     let savaData = await BookModel.updateOne({ authorName: "kaluram" },
//         { $set: data },
//         { new: true, upsert: true })
//     res.send(savaData)
// }
// //...................DELETE BOOK DATA...............
// const delteBookData = async function (req, res) {
//     let deleteBook = await BookModel.updateMany(
//         { authorName: "kaluram" },
//         { $set: { isDeleted: true } },
//         {new:true}
        
//         )
//         res.send(deleteBook)
// }
// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE


// module.exports.createNewBook = createNewBook
// module.exports.getAllBooks = getAllBooks
// module.exports.UpdateNewBooks = UpdateNewBooks
// module.exports.delteBookData=delteBookData
// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks



const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedata=data.author_id
    let createAuthor=await AuthorModel.create(data)
    if(!savedata){
        return res.send("Author id is not present")
    }
    else{
        res.send(createAuthor)
    }

}
const createBook= async function (req, res) {
   let data=req.body
   let savadata=data.author_id
   let createBook=await BookModel.create(data)
   if(!savadata){
       return res.send("Author id is not present")
   }
   else{
       res.send(createBook)
   }
}

const getBooksbyChetanBhagat= async function (req, res) {
     let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
     let bookData = await BookModel.find({author_id:data[0].author_id})
    console.log(data)
    console.log(bookData)
  res.send({msg:bookData})
}


const authorofBook= async function (req, res) {
  let data=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
  let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name")
  let price= data.prices
    // console.log(data)
     //console.log(authorData)
     res.send( { msg: authorData,price})
}
const findBook=async function(req,res){
//    let data=await BookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } )
//    console.log(data)
//bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..
//run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)
let data= await BookModel.find()
let arr=[]
for(let i=0;i<data.length;i++){
    if(data[i].prices>=50&&data[i].prices<=100){
        arr.push(data[i])
    }
}
res.send(arr)
console.log(arr)
console.log(data)
 }
module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat
module.exports.authorofBook=authorofBook
module.exports.findBook=findBook
