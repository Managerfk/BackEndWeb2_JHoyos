const app = require('./app')
const {coneMongo} = require('./databases/configuration')
const dotenv = require('dotenv').config()

app.set('port', process.env.PORT || 3000)

const conn = coneMongo()

app.listen(app.get('port'), () =>{
    console.log(`Servidor arranco por puerto ${app.get('port')}`)
})