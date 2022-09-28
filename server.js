const express = require('express');
const { Router } = require('express');
const routerProduct = Router();
const app = express();

app.use('/api', routerProduct);
routerProduct.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

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
routerProduct.get ('/products/:id', (req, res,) =>{
    const numId = parseInt(req.params.id)
    res.json(getById(numId))
})

routerProduct.post ('/products', (req, res) =>{
    let addProducts = req.body;
    products.push(addProducts)
    res.json(products);
})

routerProduct.put('/products/:id', (req, res)=>{
    const num = parseInt(req.params.id)
    const product = req.body
    res.json(changeById(num, products))
})

routerProduct.delete('/products/:id', (req, res) =>{
    const numId = parseInt(req.params.id)
    res.json(deleteById(numId))
})



getById = (id) =>{
    const findId = products.find( prod => prod.id == id)
    console.log(findId);
    if (findId){
        return products.id;
    }else return null;
}
changeById = (id, products) =>{
    products.id = id;
    const changeId = products.splice(0, 0, products);
    return products.id;
}

deleteById = (id) =>{
    products.find ( prod => prod.id !== id);
    return ({msg: `The products ${id} was deleted`})
}

const PORT = 8080;

const server = app.listen (PORT, () => console.log(`running in ${PORT}`));
server.on('error', error => console.log(error));

