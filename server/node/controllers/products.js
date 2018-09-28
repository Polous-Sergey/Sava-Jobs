const Image = require('../models/image');
const fs = require('fs');

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

async function productPost(req, res) {
    let imageId = await writeAllImages(req.files);
    let body = JSON.parse(req.body.product);

    let product = new Product();
    product.title = body.title;
    product.price = body.price;
    product.description = body.description;
    product.shortDescription = body.shortDescription;
    // product.category = body.categoryId;
    product.totalRating = body.totalRating;
    product.images = imageId;
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

function writeAllImages(files) {
    return Promise.all(files.map((file) => {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.img = fs.readFileSync(file.path);
            image.save((err, data) => {
                fs.unlink(file.path);
                if (err) {
                    return reject(err);
                }
                resolve(data._id);
            });
        })
    }))
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