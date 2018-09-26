const async = require('async');

const Product = require('../models/products');

function productGet(req, res) {
    Product.find({}, (err, data) => {
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                err: err
            });
        }

        res.json({
            success: true,
            data: data
        });
    });
}

function productPost(req, res) {
    let product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.description = req.body.description;
    product.shortDescription = req.body.shortDescription;
    product.category = req.body.categoryId;
    product.totalRating = req.body.totalRating;
    product.save((err, data) => {
        if(err) {
            return res.json({
                success: false,
                err: err
            });
        }
        return res.json({
            success: true,
            data: data
        });
    });
}

function productPut(req, res) {
    res.status(200);
    res.json({
        "succes": true
    });
}

function productDelete(req, res) {
    res.status(200);
    res.json({
        "succes": true
    });
}

module.exports = {
    productGet,
    productPost,
    productPut,
    productDelete
};