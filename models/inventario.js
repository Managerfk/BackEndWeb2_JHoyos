const { Schema, model } = require("mongoose");

const inventarioSchema = Schema({
    Serial:{
        type: String,
        requiered: [true, 'serial obligatorio'],
        unique: true
    },

    Modelo:{
        type: String,
        required: [true, 'modelo obligatorio']
    },

    Descripcion:{
        type:String
    },

    Foto:{
        type:String
    },

    Color:{
        type:String
    },

    FechaCompra:{
        type:Date,
        default: new Date()
    },

    Precio:{
        type:Number
    },

    Usuario:{
        type:Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true

    },

    Marca:{
        type:Schema.Types.ObjectId,
        ref:'marca',
        required:true
    },

    Estado:{
        type:Schema.Types.ObjectId,
        ref:'EstadoEquipo',
        required:true
    },

    TipoEquipo:{
        type:Schema.Types.ObjectId,
        ref:'TipoEquipo',
        required:true
    }
})

module.exports = model('inventario', inventarioSchema)