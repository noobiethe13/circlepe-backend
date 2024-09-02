const express = require('express');
const { getInventoryLevels, addInventoryItem, getStationWiseInventory } = require('./inventory.controller');

const router = express.Router();

router.get('/stationinventory', getStationWiseInventory);
router.get('/:stationId', getInventoryLevels);
router.post('/:stationId', addInventoryItem);

module.exports = router;
