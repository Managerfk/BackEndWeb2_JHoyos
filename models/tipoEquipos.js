const { Schema, model } = require("mongoose");

const tipoEquipoSchema = Schema({
    Nombre:{
        type: String,
        requiered: [true, 'Nombre del equipo obligatorio'] 
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

module.exports = model('TipoEquipo', tipoEquipoSchema)