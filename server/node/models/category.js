const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: String, require: true, unique: true, lowercase: true},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Category', categorySchema);