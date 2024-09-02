const express = require('express');
const { initiateTrade, getTradeDetails, countCompletedTrades } = require('./trade.controller');

const router = express.Router();

router.post('/', initiateTrade);
router.get('/completedtrades', countCompletedTrades);
router.get('/:transactionId', getTradeDetails);

module.exports = router;
