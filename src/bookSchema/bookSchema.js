const { default: mongoose } = require("mongoose")
const newBookSchema = require("mongoose")

const BookSchema = new mongoose.Schema({
    // Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) ,
    // tags array, authorName, totalPages , stockAvailable ( true false) 
    bookeName: {
        type: String,
        required: true
    },
    authorName: {
        type: String
    },
    price: {
        IndianPrice: String,
        EuropeanPrice: String
    },
    year: {
        type: Number, default: 2021
    },
    tags: [String],
    totalPages: Number,
    stockAvailable: Boolean
},{timestamps:true})

module.exports=mongoose.model("AssignmentBook",BookSchema)