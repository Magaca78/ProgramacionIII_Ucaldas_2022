// Instalamos el framework express para manejar los request HTTP y establecer el puerto a usar
const express = require('express')
// La libreria mongoose nos permite la conexion con la BD MongoDb
const mongoose = require('mongoose')
// process.env es una variable global para representar el estado de las variables de ambiente
const port = process.env.PORT || 3000
const execute_app = express()
require('dotenv').config()

//Conexion al puerto 3000
execute_app.listen(port, ()=>{console.log('Listening the port', port)})

// Primer request para accder a http://localhost:3000
execute_app.get('/', (req, res) => res.send('Programacion III'))

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('Connect with mongodb'))
    .catch((error) => console.error(error))


const productSchemaRoutes = require('./routes/product_routes')
const clientSchemaRoutes = require('./routes/client_routes')

/* Middleware*/
execute_app.use(express.json())
execute_app.use('/dashboard',productSchemaRoutes)
execute_app.use('/dashboard',clientSchemaRoutes)