const { response } = require('express')
const express = require('express')

const {createNERDoc, getAllNERDocs, getNERDoc} = require('../controllers/namedEntityController')
const {getAllRRDocs, getRRDoc, createRRDoc} = require('../controllers/rhetoricalRoleController')

const router = express.Router()

router.get('/named_entities', getAllNERDocs)

router.get('/named_entities/:id', getNERDoc)

router.get('/rhetorical_roles',getAllRRDocs)

router.get('/rhetorical_roles/:id', getRRDoc)

//Tested POST for validating the API
router.post('/named_entities', createNERDoc)

router.post('/rhetorical_roles', createRRDoc)

module.exports = router