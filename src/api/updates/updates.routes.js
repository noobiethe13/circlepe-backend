const express = require('express');
const { getRealTimeUpdates } = require('./updates.controller');

const router = express.Router();

router.get('/real-time', getRealTimeUpdates);

module.exports = router;
