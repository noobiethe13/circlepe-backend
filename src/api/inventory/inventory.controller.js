const { getInventory, addInventory, getStationWiseInventory } = require('./inventory.service');

exports.getInventoryLevels = async (req, res) => {
    try {
        const inventory = await getInventory(req.params.stationId);
        if (!inventory) return res.status(404).json({ message: 'Inventory not found' });
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStationWiseInventory = async (req, res) => {
    try {
        const inventory = await getStationWiseInventory();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addInventoryItem = async (req, res) => {
    try {
        const newItem = req.body;
        const inventory = await addInventory(req.params.stationId, newItem);
        res.status(201).json(inventory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};