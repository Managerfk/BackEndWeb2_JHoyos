const TipoEquipo = require('../models/tipoEquipos')
const { request, response } = require('express')

/**
 * crear un tipo de equipo(create)
 */

const createTipoEquipo = async(req = request, res = response) =>{
    const nombre = (req.body.Nombre)? req.body.Nombre.toUpperCase(): ''
    const fechaActualizacion = (req.body.FechaActualizacion)? req.body.FechaActualizacion: new Date()

    /** 
    const tipoEquipoDB = await TipoEquipo.findOne({nombre})
    if(tipoEquipoDB){
        return res.status(400).json({msg: 'Ya existe nombre'})
    }*/
    
    const datos = {
        Nombre: nombre,
        FechaActualizacion: fechaActualizacion
    }

    const tipoEquipo = new TipoEquipo(datos)
    console.log(tipoEquipo)
    await tipoEquipo.save()

    res.status(201).json(tipoEquipo)
}

/**
 * Consulta por id(Read)
 */

const getTipoById = async(req = request, res = response) => {
    try{
        const id = req.params.id
        const estado = req.query.Estado

        const filter = {Estado: estado, _id: id}
        const tipoEquipoDB = await TipoEquipo.findOne(filter)
        return res.json(tipoEquipoDB)
    }catch(e)
    {
        return res.status(500).json({msj:e})
    }
}

/**
 * Actualizar por id(update)
 */

const uptdateById = async(req = request, res = response) => {
    try{
        const id = req.params.id
        const data = req.body

        console.log(id)
        data.FechaActualizacion = new Date()
        console.log(data)
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoEquipo) 
    }catch(e){
        return res.status(500).json({msj:e})
    }
}

/**
 * Borrar tipo de equipo por id(delete)
 */

const deleteById = async(req = request, res = response) =>{
    try{
        const id= req.params.id
        const tipoEquipoDB = await TipoEquipo.findById(id)
        if(!tipoEquipoDB){
            return res.status(400).json({msg: 'No existe el registro'})
        }
        await TipoEquipo.findByIdAndDelete(id)
        return res.status(204).json({msg: 'borrado '})
    }catch(e){
        return res.status(500).json({msj:e})
    }
}

module.exports = {
    createTipoEquipo,
    uptdateById,
    getTipoById,
    deleteById
}

