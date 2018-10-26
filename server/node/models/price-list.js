const mongoose = require('mongoose');

const priceListSchema = new mongoose.Schema({
    type: {type: String, required: true},
    model: {type: String, required: true},
    image: {type: String, required: true},
    listImage: {type: String, required: true},
    topItems: {
        type: [{
            title: {type: String, required: true},
            subTitle: {type: String, required: true},
            price: {type: String, required: true}
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
                    price: {type: String, required: true}
                }],
                default: []
            },
        }],
        default: []
    },
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PriceList', priceListSchema);