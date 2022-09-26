const { Schema, model } = require("mongoose");

const usuarioSchema= Schema({
    Nombre:{
        type: String,
        requiered: [true, 'Nombre del usuario obligatorio'] 
    },
    Email:{
        type:String,
        default:"Ejemplo@email"
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

module.exports = model('Usuarios', usuarioSchema)