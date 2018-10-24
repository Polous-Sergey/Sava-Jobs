const mongoose = require('mongoose');

// const deepPopulate = require('mongoose-deep-populate')(mongoose);

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    shortDescription: {type: String, required: true},
    description: {type: String, required: true},
    conditions: {
        type: [{
            name: String,
            condition: Number
        }],
        default: []
    },
    // images: {type: [mongoose.Schema.Types.ObjectId], ref: 'Image'},
    // cover: {type: mongoose.Schema.Types.ObjectId, ref: 'Image', required: true},
    images: {type: [String], default: []},
    cover: {type: String, required: true},
    category: {type: [mongoose.Schema.Types.ObjectId], ref: 'Category'},
    totalRating: {type: Number, required: true},
    equipment: {type: [String], default: []},
    createdBy: {type: String, default: 'admin'},
    hidden: {type: Boolean, default: false},
    isSold: {type: Boolean, default: false},
    created: {type: Date, default: Date.now}
});

// productSchema.plugin(deepPopulate);

module.exports = mongoose.model('Product', productSchema);