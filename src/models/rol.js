const mongoose = require('mongoose')

var x = Math.floor(Math.random() * 1000000000)

const rolesdecanela = mongoose.Schema({
    nombre: {
        type: String
    },
    codigo: {
        type: Number,
        default: x
    },
    timesptamp: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('roles', rolesdecanela)