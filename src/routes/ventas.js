const express = require('express')
const veSchema = require('../models/ventas')

const router = express.Router()

//registrar venta
router.post('/ventas', (req, res) => {
    const venta = veSchema(req.body);
    venta
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//listado
router.get('/ventas', (req, res) => {
    veSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//detalle venta
router.get('/ventas/id=:id', (req, res) => {
    const { id } = req.params

    veSchema
        .find({
            _id: id
        }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router
