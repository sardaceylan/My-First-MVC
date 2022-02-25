const req = require('express/lib/request');
const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    res.render('admin/products', {
        title: 'Admin Products',
        products: products,
        path: '/admin/products',
        action: req.query.action
    });
}

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        title: 'New Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(
        req.body.name,
        req.body.price,
        req.body.imageUrl,
        req.body.description);

    product.saveProduct();
    res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {

    const product = Product.getById(req.params.id);
    
    res.render('admin/edit-product', {
        title: 'Edit Product',
        product: product,
        path: '/admin/products'
    });
};

exports.postEditProduct = (req, res, next) => {
    const product =  Product.getById(req.body.id);

    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;

    Product.Update(product);
    res.redirect('/admin/products?action=edit&id='+product.id);
};

exports.postDeleteProduct = (req, res,next) => {
    Product.DeleteById(req.body.id);
    
    res.redirect("/admin/products?action=delete");
}