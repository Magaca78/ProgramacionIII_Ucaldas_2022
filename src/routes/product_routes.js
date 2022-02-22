const express = require('express')
const productShema = require ('../models/product_model')
const route = express.Router()

/* Crear la ruta para creacion de productos*/

route.post('/product', (req,res)=>{
    const product = productShema(req.body)
    product
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))

})

/* Listar los productos existentes */

route.get('/products',(req,res)=>{
    productShema
                .find()
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))
})

/* Mostrar info de producto especifico */
route.get('/products/:id', (req,res)=>{
    const {id}= req.params
    productShema
                .findById(id)
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))

})

/*  Eliminar un producto especifico*/
route.delete('/products/:id', (req,res)=>{
    const {id}= req.params
    productShema
                .remove({_id: id})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))

})

/* Editar un recurso especifico */
route.put('/products/:id', (req,res)=>{
    const {id}= req.params
    const {product,img,price,cant,state} =req.body
    productShema
                .updateOne({_id: id}, {$set: {product,img,price,cant,state}})
                .then((data)=>res.json(data))
                .catch((error)=>res.json({message: error}))

})

module.exports = route
