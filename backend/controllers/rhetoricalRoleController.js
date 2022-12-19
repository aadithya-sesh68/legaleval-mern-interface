const RhetoricalRole = require('../models/rhetoricalRoleModel')

// get all documents' Rhetorical Roles
const getAllRRDocs = async (req,res) => {
    const rrdocs = await RhetoricalRole.find({})

    res.status(200).json(rrdocs)
}
// get a single document's rhetorical roles
const getRRDoc = async (req,res) => {
    const { id } = req.params

    const rrdoc = await RhetoricalRole.findOne({api_docid: id})

    if(!rrdoc) {
        return res.status(404).json({error: 'No such RR document'})
    }
    res.status(200).json(rrdoc)
}

// Create a new document for Rhetorical Roles
const createRRDoc = async (req,res) => {
    const {api_docid, sent_tags} = req.body
    try{
        //add to db
        const rhetoricalrole = await RhetoricalRole.create({api_docid, sent_tags})
        res.status(200).json(rhetoricalrole)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllRRDocs,
    getRRDoc,
    createRRDoc
}