const NamedEntity = require('../models/namedEntityModel')

// get all documents' Named Entities 
const getAllNERDocs = async (req,res) => {
    const nerdocs = await NamedEntity.find({})

    res.status(200).json(nerdocs)
}
// get a single document's named entities
const getNERDoc = async (req,res) => {
    const { id } = req.params

    const nerdoc = await NamedEntity.findOne({api_docid: id})

    if(!nerdoc) {
        return res.status(404).json({error: 'No such NER document'})
    }
    res.status(200).json(nerdoc)
}

// Create a new document for Named Entities
const createNERDoc = async (req,res) => {
    const {api_docid, document_text, named_entities, entities_indices} = req.body
    try{
        //add to db
        const namedentity = await NamedEntity.create({api_docid, document_text, named_entities, entities_indices})
        res.status(200).json(namedentity)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllNERDocs,
    getNERDoc,
    createNERDoc
}