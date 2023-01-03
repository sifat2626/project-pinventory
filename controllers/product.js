const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');
const Product = require("../models/product");

const createProduct = asyncHandler(async(req,res)=>{
    const {user,name,sku,category,quantity,price,description} = req.body;
    //validation
    if(!name||!category||!quantity||!price||!description)
    {
        res.status(400);
        throw new Error("Please fill all the details")
    }
    //handle image upload


    const product = await Product.create({
        user:req.user.id,
        name,sku,category,quantity,price,description
        // ,image
    })
    res.status(201).json(product);
})
module.exports = {
    createProduct,
    // getProducts,
    // getProduct,
    // deleteProduct,
    // updateProduct
}