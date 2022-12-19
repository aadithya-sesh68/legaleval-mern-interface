const mongoose = require('mongoose')

const Schema = mongoose.Schema

const nerSchema = new Schema({
    api_docid: {
        type: String, 
        required: true
    }, 
    document_text: {
        type: String, 
        required: true
    }, 
    named_entities: [[]],
    entities_indices: [[]]
})

module.exports = mongoose.model("NamedEntity", nerSchema)