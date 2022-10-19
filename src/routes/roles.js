const express = require('express')
const roSchema = require('../models/rol')

const router = express.Router()

//listado
router.get('/roles', (req, res) => {
    roSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router