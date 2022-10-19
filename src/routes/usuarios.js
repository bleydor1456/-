const express = require('express')
const userSchema = require('../models/usuarios')

const router = express.Router()


//crear usuario
router.post('/usuarios', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//listado
router.get('/usuarios', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//buscar usuario
router.get('/usuarios/correo=:c&pass=:p', (req, res) => {
    const { c, p } = req.params

    userSchema
        .find({
            correo: c,
            contraseña: p
        }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//borrar usuario
router.delete('/usuarios/correo=:correo&pass=:pass', (req, res) => {
    const { correo, pass } = req.params

    userSchema
        .remove({
            correo: correo,
            contraseña: pass
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//actualizar usuario
router.put('/usuarios/correo=:c&pass=:p', (req, res) => {
    const { c, p } = req.params;
    const { correo, contraseña, nombre, edad, rol, sucursal } = req.body
    userSchema
        .updateOne({
            correo: c,
            contraseña: p
        }, { $set: { correo, contraseña, nombre, edad, rol, sucursal } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router