const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 100,
    },
    address: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    isFreeAppUser: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("user1", userSchema)