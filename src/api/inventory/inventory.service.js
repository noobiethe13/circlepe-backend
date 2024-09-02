const Inventory = require('../../models/inventory.model');

const getInventory = async (stationId) => {
    try {
        const inventory = await Inventory.findOne({ stationId });
        return inventory;
    } catch (error) {
        throw new Error('Failed to fetch inventory: ' + error.message);
    }
};

const addInventory = async (stationId, newItem) => {
    try {
        let inventory = await Inventory.findOne({ stationId });

        if (!inventory) {
            inventory = new Inventory({ stationId, items: [newItem] });
        } else {
            inventory.items.push(newItem);
        }

        await inventory.save();
        return inventory;
    } catch (error) {
        throw new Error('Failed to add inventory: ' + error.message);
    }
};

const getStationWiseInventory = async () => {
    try {
        const inventories = await Inventory.find();
        const stationWiseInventory = inventories.reduce((result, inventory) => {
            const stationTotal = inventory.items.reduce((stationSum, item) => stationSum + item.quantity, 0);
            result[inventory.stationId] = Math.abs(stationTotal);
            return result;
        }, {});
        
        return stationWiseInventory;
    } catch (error) {
        throw new Error('Failed to fetch station-wise inventory: ' + error.message);
    }
};

module.exports = { getInventory, addInventory, getStationWiseInventory };
