const mongoose = require( 'mongoose' );

const productSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    conditions: {
        type: String,
        required: true
    },
    totalRating: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    }
});

mongoose.model('Product', productSchema);