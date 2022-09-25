const express = require('express');

const app = express();

//por hacer: cuidado cors

/**
 * Importación de rutas
 */
const tipoEquipos = require('./routes/tipoEquipoR')

/**
 * Middlewares
 */

//middleware para urlencoded
app.use(express.json())
//middleware para subida fotos
//middleware de cors


app.use('/api/tipoequipos', tipoEquipos)



module.exports = app;