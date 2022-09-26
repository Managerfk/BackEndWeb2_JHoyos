const Usuario = require('../models/Usuario')
const { request, response } = require('express')

/**
 * crear un usuario(create)
 */

const createUsuario = async(req = request, res = response) =>{

    const nombre = (req.body.Nombre)? req.body.Nombre.toUpperCase(): ''
    const email = (req.body.Email)? req.body.Email: '@'
    const fechaActualizacion = (req.body.FechaActualizacion)? req.body.FechaActualizacion: new Date()

    const datos = {
        Nombre: nombre,
        Email: email,
        FechaActualizacion: fechaActualizacion
    }

    const usuario = new Usuario(datos)
    console.log(usuario)
    await usuario.save()

    res.status(201).json(usuario)


}

/**
 * Consulta por id(Read)
 */

const getTipoById = async(req = request, res = response) => {
    try{
        const id = req.params.id

        const filter = {_id: id}
        const usuario = await Usuario.findOne(filter)
        return res.json(usuario)
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
        const usuario = await Usuario.findByIdAndUpdate(id, data, {new: true})
        return res.json(usuario)
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
        const usuario = await Usuario.findById(id)
        if(!usuario){
            return res.status(400).json({msg: 'No existe el registro'})
        }
        await Usuario.findByIdAndDelete(id)
        return res.status(204).json({msg: 'borrado '})
    }catch(e){
        return res.status(500).json({msj:e})
    }

}

module.exports = {
    createUsuario,
    uptdateById,
    getTipoById,
    deleteById
}

