const express = require('express')
const clientShema = require ('../models/client_model')
const route = express.Router()

/* Crear la ruta para creacion de clientes*/

route.post('/client', (req,res)=>{
    const client = clientShema(req.body)
    client
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))

})

/* Listar los clientes existentes */

route.get('/clients',(req,res)=>{
    clientShema
                .find()
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))
})

/* Mostrar info de cliente especifico */
route.get('/clients/:id', (req,res)=>{
    const {id}= req.params
    clientShema
                .findById(id)
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))

})

/*  Eliminar un cliente especifico*/
route.delete('/clients/:id', (req,res)=>{
    const {id}= req.params
    clientShema
                .remove({_id: id})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))

})

/* Editar un recurso especifico */
route.put('/clients/:id', (req,res)=>{
    const {id}= req.params
    const {name, lastname,address, count_bank} =req.body
    clientShema
                .updateOne({_id: id}, {$set: {name,lastname,address,count_bank}})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))

})

module.exports = route
