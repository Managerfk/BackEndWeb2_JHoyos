const Inventario = require('../models/inventario')
const {request, response} = require('express')
const UsuarioO = require('../models/Usuario')
const MarcaA = require('../models/Marcas')

/**
 * Consulta todos los inventarios
 */
const getInventarios = async(req= request,res=response) =>{
    try{
        const inventarios = await Inventario.find().populate({
            path:'Usuario'

        }).populate({
            path:"Marca"
        })
        res.json(inventarios)  
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error:'Error' + e
        })
    }
}

/**
 * Guardar un inventario
 */

const createInventario = async(req= request,res=response) => {
    try{
        const data = req.body
        const { Usuario, Marca } = data
        console.log(Usuario._id)

        //validacion de usuario activo
        const usuarioBD = await UsuarioO.findOne({
            _id: Usuario._id, Estado: true
        })
        if(!usuarioBD){
            return res.status(400).json({
                msj: 'Usuario inactivo'
            })
        }

        //Validacion Marca
        const marcaDB = await MarcaA.findOne({
            _id: Marca._id, Estado: true
        })
        if(!marcaDB){
            return res.status(400).json({
                msj: 'Marca inactiva'
            })
        }

        const inventario = new Inventario(data)
        console.log(inventario)
        await inventario.save()
        res.status(201).json(inventario)     
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'})

    }
}

/**
 * Consultar por ID
 */
 const getInventarioById = async(req= request,res=response) => {
    try{
        const id = req.params.id
        const filter = {_id:id}
        const inventarioDB = await Inventario.findById(filter).populate({
            path:'Usuario'
        }).populate({
            path:'Marca'
        })
        res.json(inventarioDB)

    
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'})

    }
}

/**
 * Actualizar por Id
 */
 const updateInventarioByID = async(req= request,res=response) => {
    try{
        const id= req.params.id
        const filter = {_id:id}
        const data = req.body

        const inventario = await Inventario.findByIdAndUpdate(filter, data, {new: true})
        return res.status(201).json(inventario)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'})

    }
}


/**
 * Borrar inventario
 */
 const deleteInventario = async(req= request,res=response) => {
    try{
        const id= req.params.id
        const data = req.body

        await Inventario.findByIdAndDelete(id)
        return res.status(204).json({})
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'})
    }
    }


module.exports = {
    getInventarios,
    createInventario,
    getInventarioById,
    updateInventarioByID,
    deleteInventario
}

