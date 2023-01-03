const express = require('express');
const router = express.Router();
const protect = require("../middleWares/auth");
module.exports = router;
const {
    createProduct,
    // getProducts,
    // getProduct,
    // deleteProduct,
    // updateProduct
} = require('../controllers/product');

router.post('/createProduct',protect,createProduct);