const express = require('express')
const paSchema = require('../models/pagos')

const router = express.Router()

//listado
router.get('/metodospagos', (req, res) => {
    paSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//detalle pagos
router.get('/metodospagos/id=:id&tipo=:p', (req, res) => {
    const { id, p } = req.params

    paSchema
        .find({
            _id: id,
            nombre: p
        }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//actualizar usuario
router.put('/metodospago/id=:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body
    paSchema
        .updateOne({
            _id: id
        }, { $set: { nombre } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router