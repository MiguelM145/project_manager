const Product = require('../models/product.model');    /* this is new */


module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => {
        res.json({Product: newProduct})
    })
    .catch(err => console.log(err))
};

module.exports.getAllProducts = (req, res) => {
    Product.find()
    .then((products) => res.json(products))
    .catch((err) => console.log(err));
}

module.exports.getOneProduct = (req, res) =>{
    Product.findOne({_id: req.params.id})
    .then((oneProduct) =>{
        console.log(oneProduct);
        res.json(oneProduct);
    })
}

module.exports.editProduct = (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => console.log(err));
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deleteProd => res.json(deleteProd))
    .catch(err => res.json(err));
}