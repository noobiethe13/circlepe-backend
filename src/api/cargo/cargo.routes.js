const express = require('express');
const { createCargoShipment, getCargoDetails, countActiveCargo } = require('./cargo.controller');

const router = express.Router();

router.post('/', createCargoShipment);
router.get('/activecargo', countActiveCargo);
router.get('/:shipmentId', getCargoDetails);

module.exports = router;
