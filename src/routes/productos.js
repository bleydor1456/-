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
router.get('/productos/nombre=:n&sku=:s', (req, res) => {
    const { n, s } = req.params

    prodSchema
        .find({
            nombre: n,
            sku: s
        }).then((data) => res.json(data))
        .catch((error) => res.send("El producto no existe"))
})

//borrar producto
router.delete('/productos/nombre=:n&sku=:s', (req, res) => {
    const { n, s } = req.params

    prodSchema
        .remove({
            nombre: n,
            sku: s
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//actualizar producto
router.put('/productos/nombre=:n&sku=:s', (req, res) => {
    const { n, s } = req.params
    const { nombre, sku, stock, sucursal, precio, status } = req.body
    prodSchema
        .updateOne({
            nombre: n,
            sku: s
        }, { $set: { nombre, sku, stock, sucursal, precio, status } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router