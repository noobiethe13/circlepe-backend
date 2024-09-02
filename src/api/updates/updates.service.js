const Update = require('../../models/update.model');

const getRealTimeUpdates = async () => {
    try {
        // Fetch the latest updates, sorted by timestamp (newest first)
        const updates = await Update.find().sort({ timestamp: -1 }).limit(10);
        return updates;
    } catch (error) {
        throw new Error('Failed to fetch real-time updates');
    }
};

module.exports = { getRealTimeUpdates };