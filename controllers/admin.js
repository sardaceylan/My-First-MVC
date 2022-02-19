const Product = require("../models/product");


/* exports.getProduct = (req, res, next) => {
    res.render("index", {
        title: 'Homepage',
        products: products,
        path: '/'
    });
};

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        title: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(
        req.body.name,
        req.body.price,
        req.body.image,
        req.body.description
    );

    product.save();
    res.redirect('/');
} */