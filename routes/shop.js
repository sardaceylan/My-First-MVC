const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products/delete', shopController.getProduct);

router.get('/products/update', shopController.getProduct);


router.get('/products/:id', shopController.getProduct);

router.get('/details', shopController.getProductDetails);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

module.exports = router;