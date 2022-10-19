const express = require('express')
const su57 = require('../models/usuarios')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const router = express.Router()

router.post('/login', async (req, res) => {

    let body = req.body;

    try {
        // Buscamos email en DB
        const usuarioDB = await su57.findOne({
            correo: body.correo,
            contraseña: body.contraseña
        })

        // Evaluamos si existe el usuario en DB
        if (!usuarioDB) {
            return res.status(400).json({
                Estado: "Usuario no encontrado, corregir datos",
                Datos: "Sin datos",
                token: "Entrada negada"
            });
        }

        // Pasó las validaciones
        return res.json({
            Estado: "Usuario encontrado",
            Datos: usuarioDB,
            token: "Entrada permitida"
        })

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }

})

module.exports = router