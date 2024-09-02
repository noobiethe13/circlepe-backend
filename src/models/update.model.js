const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
    title: String,
    content: String,
    timestamp: { type: Date, default: Date.now }
});

const Update = mongoose.model('Update', updateSchema);

module.exports = Update;