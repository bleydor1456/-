const express = require('express')
const suSchema = require('../models/sucursales')

const router = express.Router()

//crear usuario
router.post('/sucursal', (req, res) => {
    const su = suSchema(req.body);
    su
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//listado
router.get('/sucursal', (req, res) => {
    suSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//actualizar usuario
router.put('/sucursal/codigo=:c', (req, res) => {
    const { c } = req.params;
    const { nombre, telefono, direccion, status} = req.body
    suSchema
        .updateOne({
            codigo: c
        }, { $set: { nombre, telefono, direccion, status } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router