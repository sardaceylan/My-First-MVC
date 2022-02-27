const Category = require("../models/category");
const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
    const products = Product.getAll();
    const categories = Category.GetAll();
    res.render("shop/index", {
        title: 'Shopping',
        products: products,
        categories: categories,
        path: '/'
    });
};

exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    const categories = Category.GetAll();

    res.render("shop/products", {
        title: 'Products',
        products: products,
        categories: categories,
        path: '/products'
    });
};

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryId = req.params.categoryId;
    const products = Product.getProductsByCategoryId(categoryId);
    const categories = Category.GetAll();
    
    res.render("shop/products", {
        title: 'Products',
        products: products,
        categories: categories,
        selectedCategory: categoryId,
        path: '/products'
    });
}

exports.getProduct = (req, res, next) => {
    const product = Product.getById(req.params.id);

    res.render("shop/product-detail", {
        title: product.name,
        product: product,
        path: "/products"
    });
};

exports.getProductDetails = (req, res, next) => {

    res.render("shop/details", {
        title: 'Details',
        path: '/details'
    });
};

exports.getCart = (req, res, next) => {

    res.render("shop/cart", {
        title: 'Cart',
        path: '/cart'
    });
};

exports.getOrders = (req, res, next) => {

    res.render("shop/orders", {
        title: 'Orders',
        path: '/orders'
    });
};