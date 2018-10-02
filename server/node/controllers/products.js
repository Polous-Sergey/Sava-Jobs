const Image = require('../models/image');
const fs = require('fs');
const compress_images = require('compress-images');

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
    let body = JSON.parse(req.body.product);
    let imageId = await writeAllImages(req.files.images ? req.files.images : []).catch((err) => {
        return res.json({
            success: false,
            err: err
        });
    });
    let coverId = await writeAllImages(req.files.cover ? req.files.cover : []).catch((err) => {
        return res.json({
            success: false,
            err: err
        });
    });

    let product = new Product();
    product.title = body.title;
    product.price = body.price;
    product.description = body.description;
    product.shortDescription = body.shortDescription;
    // product.category = body.categoryId;
    product.totalRating = body.totalRating;
    product.images = imageId;
    product.cover = coverId[0];
    product.save((err, data) => {
        if (err) {
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
            compress_images(file.path, 'upload/', {
                    compress_force: false,
                    statistic: true,
                    autoupdate: false
                }, false,
                {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                {png: {engine: 'pngquant', command: false}},
                {svg: {engine: 'svgo', command: false}},
                {gif: {engine: 'gifsicle', command: false}}, function (err) {
                    if (err) reject(err);
                    let image = new Image();
                    image.img = fs.readFileSync('upload/' + file.filename);
                    image.save((err, data) => {
                        fs.unlink(file.path, unlinkCB);
                        fs.unlink('upload/' + file.filename, unlinkCB);
                        if (err) {
                            return reject(err);
                        }
                        resolve(data._id);
                    });

                });
        })
    }))
}

function unlinkCB(err) {
    if (err) console.log('Cant delete', err)
}

function productPut(req, res) {
    let body = JSON.parse(req.body.product);
    console.log(body);
    Product.findById({_id: body._id}, (err, product) => {
        if (err || !product) {
            return res.json({
                succes: false,
            });
        }
        res.send(product);
    });
}

function productDelete(req, res) {
    Product.findById({_id: req.params.id}, (err, product) => {
        if (err || !product) {
            return res.json({
                succes: false,
            });
        }
        res.send(product);
    });
}

module.exports = {
    productGet,
    productPost,
    productPut,
    productDelete
};