const mongoose = require('mongoose')

var x = Math.floor(Math.random() * 1000000000)
const ventas = mongoose.Schema({
    productos: {
        type: String
    },
    total: {
        type: Number,
        default: x
    },
    sucursal: {
        type: String
    },
    usuario: {
        type: String
    },
    metodo_pago: {
        type: String
    },
    timesptamp: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('ventas', ventas)