const { Schema, model } = require("mongoose") 

const EstadoEquipoSchema = Schema({
    Nombre:{
        type: String,
        requiered: [true, 'Nombre del equipo obligatorio'] 
    },

    Ubicacion:{
        type: String,
        required: true
        
    },

    FechaCreacion:{
        type: Date,
        default: new Date()
    },

    FechaActualizacion:{
        type: Date,
        default: new Date()
    }

})

module.exports = model('EstadoEquipo', EstadoEquipoSchema)