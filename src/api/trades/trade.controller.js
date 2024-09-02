const { createTrade, getTrade, countCompletedTrades } = require('./trade.service');

exports.initiateTrade = async (req, res) => {
    try {
        const trade = await createTrade(req.body);
        res.status(201).json(trade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTradeDetails = async (req, res) => {
    try {
        const trade = await getTrade(req.params.transactionId);
        if (!trade) return res.status(404).json({ message: 'Trade not found' });
        res.status(200).json(trade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.countCompletedTrades = async (req, res) => {
    try {
        const trade = await countCompletedTrades();
        res.status(200).json(trade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
