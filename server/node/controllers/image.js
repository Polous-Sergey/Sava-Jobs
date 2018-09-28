const Image = require('../models/image');
const fs = require('fs');


function imageGetByID(req, res) {
    Image.findById({_id: req.params.id}, (err, image) => {
        if (err || !image) {
            return res.json({
                succes: false,
            });
        }
        res.send(image.img)
    });
}

function imageGet2(req, res) {
    Image.find({}, (err, data) => {
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                err: err
            });
        }

        if (data && data.length > 0) {
            return res.json({
                success: true,
                data: data
            });
        }
        return res.json({
            success: true,
            data: []
        });
    });
}

function imagePost(req, res) {
    console.log(req.body);
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
    imageGetByID,
    imageGet2,
    imagePost,
    imagePut,
    imageDelete
};