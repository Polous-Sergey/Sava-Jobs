const Image = require('../models/image');
const fs = require('fs');


function imageGet(req, res) {
    Image.find({}, (err, data) => {
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                err: err
            });
        }

        if (data && data.length > 0) {
            let result = [];
            data.forEach((item) => {
                result.push(
                    'data:image/png;base64, ' + new Buffer(item.img.data, 'binary').toString('base64')
                )
            });

            return res.json({
                success: true,
                data: result
            });
        }
        return res.json({
            success: true,
            data: []
        });
    });
}

function imagePost(req, res) {
    let newItem = new Image();
    newItem.img.data = fs.readFileSync(req.file.path);
    // newItem.path = '../../../' + req.file.path.substring(4);
    newItem.img.contentType = 'image/png';
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