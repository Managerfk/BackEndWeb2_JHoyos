const TipoEquipo = require('../models/tipoEquipos')
const { request, response } = require('express')

/**
 * crear un tipo de equipo(create)
 */

const createTipoEquipo = async(req = request, res = response) =>{

    const nombre = (req.body.Nombre)? req.body.Nombre.toUpperCase(): ''

    const tipoEquipoDB = await TipoEquipo.findOne({nombre})
    if(tipoEquipoDB){
        return res.status(400).json({msg: 'Ya existe nombre'})
    }
    
    const datos = {
        Nombre: nombre
    }

    const tipoEquipo = new TipoEquipo(datos)
    console.log(tipoEquipo)
    await tipoEquipo.save()

    res.status(201).json(tipoEquipo)


}

/**
 * Consulta por id(Read)
 */

const getTipoById = () => {
    

}

/**
 * Actualizar por id(update)
 */

const uptdateById = () => {

}

/**
 * Borrar tipo de equipo por id(delete)
 */

const deleteById = () =>{

}

module.exports = {
    createTipoEquipo,
    uptdateById,
    getTipoById,
    deleteById
}

