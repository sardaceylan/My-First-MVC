const Product = require('../models/product');
const Category = require("../models/category");

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
    const categories = Category.GetAll();
    res.render('admin/add-product', {
        title: 'New Product',
        categories: categories,
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product();

    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;
    product.categoryId = req.body.categoryId;

    product.saveProduct();
    res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {

    const product = Product.getById(req.params.id);
    const categories = Category.GetAll();

    res.render('admin/edit-product', {
        title: 'Edit Product',
        product: product,
        path: '/admin/products',
        categories: categories
    });
};

exports.postEditProduct = (req, res, next) => {
    const product = Product.getById(req.body.id);

    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;
    product.categoryId = req.body.categoryId;

    Product.Update(product);
    res.redirect('/admin/products?action=edit&id=' + product.id);
};

exports.postDeleteProduct = (req, res, next) => {
    Product.DeleteById(req.body.id);
    res.redirect("/admin/products?action=delete");
}