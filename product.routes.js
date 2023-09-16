const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/all', ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.patch("/api/edit/:id", ProductController.editProduct);
    app.delete("/api/delete/:id", ProductController.deleteProduct);
}

