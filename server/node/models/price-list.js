const mongoose = require('mongoose');

// const deepPopulate = require('mongoose-deep-populate')(mongoose);

const productSchema = new mongoose.Schema({
    model: {type: String, required: true},
    image: {type: String, required: true},
    listImage: {type: String, required: true},
    topItems: {
        type: [{
            title: {type: String, required: true},
            subTitle: {type: String, required: true},
            price: {type: String, required: true},
        }],
        default: []
    },
    categories: {
        type: [{
            name: {type: String, required: true},
            items: {
                type: [{
                    title: {type: String, required: true},
                    subTitle: {type: String, required: true},
                    price: {type: String, required: true},
                }],
                default: []
            },
        }],
        default: []
    }
});

// productSchema.plugin(deepPopulate);

module.exports = mongoose.model('Product', productSchema);