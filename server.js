const express = require('express');
const { Router } = require('express');
const routerProduct = Router();
const app = express();

app.use('/api', routerProduct);


const products = [
    {product : 'Fish',
    price : 250,
    id: 1},
    {product : 'Funboard',
    price : 250,
    id: 2},
    {product : 'Longboard',
    price : 250,
    id: 3}
];
console.log(products);

routerProduct.get ('/products', (req, res) =>{
    let newProducts = [...products]
    res.json(newProducts)
})
routerProduct.get ('/products/:id', (req, res, id) =>{
    let getId = req.params
    if(getId == products.id){
        res.json({id: `${products.product} ${products.id}`});
    }else {return  undefined};
})

routerProduct.post ('/products', (req, res) =>{
    let addProducts = req.body;
    let newProduct = addProducts.push(products);
    res.json(newProduct)
})
console.log(products);

routerProduct.put('/products/:id', (req, res)=>{
})

routerProduct.delete('/products/:id', (req, res) =>{
})

const PORT = 8080;

const server = app.listen (PORT, () => console.log(`running in ${PORT}`));
server.on('error', error => console.log(error));