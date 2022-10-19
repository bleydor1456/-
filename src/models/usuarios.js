const mongoose = require('mongoose')

const usuario = mongoose.Schema({
    correo: {
        type: String,
        required: true
    },

    contraseña: {
        type: String,
        required: true
    },

    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    sucursal: {
        type: String,
        required: true
    },
    timesptamp: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('user', usuario)