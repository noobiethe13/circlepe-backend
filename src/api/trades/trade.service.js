const Trade = require('../../models/trade.model');

const createTrade = async (tradeData) => {
    try {
        const trade = new Trade(tradeData);
        await trade.save();
        return trade;
    } catch (error) {
        throw new Error('Failed to create trade: ' + error.message);
    }
};

const getTrade = async (tradeId) => {
    try {
        const trade = await Trade.findOne({ tradeId });
        return trade;
    } catch (error) {
        throw new Error('Failed to fetch trade: ' + error.message);
    }
};

const countCompletedTrades = async () => {
    try {
        const completedTradesCount = await Trade.countDocuments({ status: 'completed' });
        return completedTradesCount;
    } catch (error) {
        throw new Error('Failed to count completed trades: ' + error.message);
    }
};

module.exports = { createTrade, getTrade, countCompletedTrades };