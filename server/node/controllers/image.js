const Image = require('../models/image');
const fs = require('fs');


function imageGet(req, res) {
    console.log(req.params.id);
    Image.findById({_id: req.params.id}, (err, product) => {
        console.log(err);
        console.log(product);


        // if (err) {
        //     res.json({
        //         succes: false,
        //         message: 'Product is not found',
        //         err: err
        //     });
        // } else {
        //     res.json({
        //         succes: true,
        //         message: 'Success',
        //         product: product
        //     });
        // }
    });
    Image.find({}, (err, data) => {
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                err: err
            });
        }

        // if (data && data.length > 0) {
        //     let result = [];
        //     data.forEach((item) => {
        //         result.push(
        //             'data:image/png;base64, ' + new Buffer(item.img.data, 'binary').toString('base64')
        //         )
        //     });
        //
        //     return res.json({
        //         success: true,
        //         data: result
        //     });
        // }
        // return res.json({
        //     success: true,
        //     data: []
        // });

        res.send(data[0].img);
    });
}

function imagePost(req, res) {
    let newItem = new Image();
    newItem.img = fs.readFileSync(req.file.path);
    newItem.save((err, data) => {
        if (err) {
            return res.json({
                success: false,
                err: err
            });
        }
        return res.json({
            success: true,
            data: data,
            req: req.file
        });
    });
}

function imagePut(req, res) {
    res.status(200);
    res.json({
        "succes": true
    });
}

function imageDelete(req, res) {
    res.status(200);
    res.json({
        "succes": true
    });
}

module.exports = {
    imageGet,
    imagePost,
    imagePut,
    imageDelete
};