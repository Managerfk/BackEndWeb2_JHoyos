const MarcaA = require('../models/Marcas')
const { request, response } = require('express')

/**
 * crear un tipo de marca de Equipo(create)
 */

const createMarca= async(req = request, res = response) =>{

    const nombre = (req.body.Nombre)? req.body.Nombre.toUpperCase(): ''
    const fechaActualizacion = (req.body.FechaActualizacion)? req.body.FechaActualizacion: new Date()
    
    const datos = {
        Nombre: nombre,
        FechaActualizacion: fechaActualizacion
    }

    const marca = new MarcaA(datos);
    console.log(marca)
    await marca.save()

    res.status(201).json(marca)


}

/**
 * Consulta por id(Read)
 */

const getTipoById = async(req = request, res = response) => {
    try{
        const id = req.params.id

        const filter = {_id: id}
        const marca = await MarcaA.findOne(filter)
        return res.json(marca)
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
        const marca = await MarcaA.findByIdAndUpdate(id, data, {new: true})
        return res.json(marca)
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
        const marca = await MarcaA.findById(id)
        if(!marca){
            return res.status(400).json({msg: 'No existe el registro'})
        }
        await MarcaA.findByIdAndDelete(id)
        return res.status(204).json({msg: 'borrado '})
    }catch(e){
        return res.status(500).json({msj:e})
    }


}

module.exports = {
    createMarca,
    uptdateById,
    getTipoById,
    deleteById
}

