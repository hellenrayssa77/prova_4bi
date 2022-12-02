const express = require('express')
const ProductsController = require('./controller/ProductsController');

const routes = express.Router();

routes.get('/', (req,res) => {
    res.send('ola, pres pres')
})

routes.get('/products',ProductsController.index)

module.exports = routes;
