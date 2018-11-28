const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {type: String, require: true},
    number: {type: Number, require: true},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    created: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Order', orderSchema);