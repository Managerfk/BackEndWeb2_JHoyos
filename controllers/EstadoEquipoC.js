const EstadoEquipo = require('../models/EstadoEquipo')
const { request, response } = require('express')

/**
 * crear un Estado de equipo(create)
 */

const createEstadoEquipo = async(req = request, res = response) =>{

    const nombre = (req.body.Nombre)? req.body.Nombre.toUpperCase(): ''
    const ubi = (req.body.Ubicacion)? req.body.Ubicacion.toUpperCase(): req.body.Ubicacion
    
    const datos = {
        Nombre: nombre,
        Ubicacion: ubi
    }

    const estadoEquipo = new EstadoEquipo(datos)
    console.log(estadoEquipo)
    await estadoEquipo.save()

    res.status(201).json(estadoEquipo)
}

/**
 * Consulta por id(Read)
 */

const getTipoById = async(req = request, res = response) => {
    try{
        const id = req.params.id

        const filter = {_id: id}
        const Equipo = await EstadoEquipo.findOne(filter)
        return res.json(Equipo)
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
        const Equipo = await EstadoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(Equipo)
    }catch(e){
        return res.status(500).json({msj:e})
    }
}

/**
 * Borrar Estado de equipo por id(delete)
 */

const deleteById = async(req = request, res = response) =>{
    try{
        const id= req.params.id
        const Equipo = await EstadoEquipo.findById(id)
        if(!Equipo){
            return res.status(400).json({msg: 'No existe el registro'})
        }
        await EstadoEquipo.findByIdAndDelete(id)
        return res.status(204).json({msg: 'borrado '})
    }catch(e){
        return res.status(500).json({msj:e})
    }

}

module.exports = {
    createEstadoEquipo,
    uptdateById,
    getTipoById,
    deleteById
}

