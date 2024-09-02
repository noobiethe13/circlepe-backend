const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
    shipmentId: { type: String, required: true, unique: true },
    items: [{ itemId: String, quantity: Number }],
    origin: String,
    destination: String,
    status: { type: String, enum: ['in_transit', 'delivered', 'delayed'], default: 'in_transit' },
    currentLocation: String,
    createdAt: { type: Date, default: Date.now },
});

const Cargo = mongoose.model('Cargo', cargoSchema);
module.exports = Cargo;
