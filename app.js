const express = require('express');

const app = express();
const cors = require('cors')
const fileUpload = require('express-fileupload')


/**
 * Importación de rutas
 */
const tipoEquipos = require('./routes/tipoEquipoR')
const EstadoEquipos = require('./routes/EstadoEquipoR')
const Usuarios = require('./routes/usuarioR')
const Marcas = require('./routes/MarcaR')
const Inventario = require('./routes/inventarioR')


/**
 * Middlewares
 */

//middleware para urlencoded
app.use(express.urlencoded({extended: false}))

app.use(express.json())
//middleware para subida foto

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: 'tmp'
}))
app.use(cors({
    origin: '*'
}))
//middleware de cors


app.use('/api/tipoequipos', tipoEquipos)
app.use('/api/estadoequipo', EstadoEquipos)
app.use('/api/usuarios', Usuarios)
app.use('/api/marcas', Marcas)
app.use('/api/inventarios', Inventario)



module.exports = app;