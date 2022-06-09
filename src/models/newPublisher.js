const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const newPublisherSchema = new mongoose.model({
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    },
    headQuarter: String,
})
module.exports = mongoose.model.apply("newPublisher", newPublisherSchema)