const mongoose = require('mongoose')

const productos = mongoose.Schema({
    nombre: {
        type: String
    },

    sku : {
        type:Number
    },

    stock: {
        type: Number
    },

    sucursal: {
        type: String
    },

    precio: {
        Type: String
    },

    status: {
        Type: String
    },
    
    timesptamp: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('products', productos)