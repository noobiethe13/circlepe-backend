const Cargo = require('../../models/cargo.model');

const createCargo = async (cargoData) => {
    try {
        const cargo = new Cargo(cargoData);
        await cargo.save();
        return cargo;
    } catch (error) {
        throw new Error('Failed to create cargo: ' + error.message);
    }
};

const getCargo = async (shipmentId) => {
    try {
        const cargo = await Cargo.findOne({ shipmentId });
        return cargo;
    } catch (error) {
        throw new Error('Failed to fetch cargo: ' + error.message);
    }
};


const countActiveCargo = async () => {
    try {
        const notDeliveredTradesCount = await Cargo.countDocuments({ status: { $ne: 'delivered' } });
        if (notDeliveredTradesCount === 0) {
            return { message: 'No active cargo found' };
        }
        return notDeliveredTradesCount;
    } catch (error) {
        throw new Error('Failed to count not delivered trades: ' + error.message);
    }
};

module.exports = { createCargo, getCargo, countActiveCargo };