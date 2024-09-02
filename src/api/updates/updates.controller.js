const { getRealTimeUpdates } = require('./updates.service');

exports.getRealTimeUpdates = async (req, res) => {
    try {
        const updates = await getRealTimeUpdates();
        res.status(200).json(updates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
