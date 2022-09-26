const { Schema, model } = require("mongoose");

const marcaSchema = Schema({
    Nombre:{
        type: String,
        requiered: [true, 'Nombre de la marca obligatorio'] 
    },

    Estado:{
        type: Boolean,
        default: true,
        required: true
    },

    FechaCreacion:{
        type: Date,
        default: new Date()
    },

    FechaActualizacion:{
        type: Date
    }
    
})

module.exports = model('marca', marcaSchema)