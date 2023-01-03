const express = require('express');
const router = express.Router();
const { upload } = require("../utils/fileUpload");
const protect = require("../middleWares/auth");
module.exports = router;
const {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/product');

router.post('/createProduct',protect,upload.single("image"),createProduct);
router.get('/getProducts',protect,getProducts);
router.get('/getProduct/:id',protect,getProduct);
router.delete('/deleteProduct/:id',protect,deleteProduct);
router.patch('/updateProduct/:id',protect,upload.single("image"),updateProduct);