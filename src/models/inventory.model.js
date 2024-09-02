const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    stationId: { type: String, required: true },
    items: [{ itemId: String, quantity: Number }],
});

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
