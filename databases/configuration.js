const mongoose = require('mongoose')

const coneMongo = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexión ok con mongo")
    }catch(e){
        console.log("Error de conexion", e)
        throw new Error('Error de conexión')

    }
}

module.exports = { coneMongo }