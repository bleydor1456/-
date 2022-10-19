const mongoose = require('mongoose')

var x = Math.floor(Math.random() * 1000000000)
const sucursales = mongoose.Schema({
    nombre: {
        type: String
    },
    codigo: {
        type: Number,
        default: x
    },
    telefono: {
        type: Number
    },
    direccion: {
        type: String
    },
    ubicacion: {
        type: String
    },
    status: {
        type: String
    },
    timesptamp: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('sucursales', sucursales)