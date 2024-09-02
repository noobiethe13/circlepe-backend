const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
    tradeId: { type: String, required: true, unique: true },
    items: [{ itemId: String, quantity: Number }],
    origin: String,
    destination: String,
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

const Trade = mongoose.model('Trade', tradeSchema);
module.exports = Trade;
