const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    img: {data: Buffer, contentType: String}
});

// const imageSchema = new mongoose.Schema({
//     path: String
// });

module.exports = mongoose.model('Image', imageSchema);