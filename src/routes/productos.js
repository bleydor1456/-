const express = require('express')
const prodSchema = require('../models/productos')

const router = express.Router()

//agregar producto
router.post('/productos', (req, res) => {
    const prod = prodSchema(req.body);
    prod
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//listado
router.get('/productos', (req, res) => {
    prodSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//buscar producto
router.get('/productos/sku=:s', (req, res) => {
    const { s } = req.params

    prodSchema
        .find({
            sku: s
        }).then((data) => res.json(data))
        .catch((error) => res.send("El producto no existe"))
})

//borrar producto
router.delete('/productos/sku=:s', (req, res) => {
    const { s } = req.params

    prodSchema
        .remove({
            sku: s
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//actualizar producto
router.put('/productos/sku=:s', (req, res) => {
    const { n } = req.params
    const { nombre, stock, sucursal, precio, status } = req.body
    prodSchema
        .updateOne({
            sku: s
        }, { $set: { nombre, stock, sucursal, precio, status } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router