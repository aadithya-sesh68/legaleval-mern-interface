const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rrSchema = new Schema({
    api_docid: {
        type: String, 
        required: true
    }, 
    sent_tags: [[]]
})

module.exports = mongoose.model("RhetoricalRole", rrSchema)