const express = require("express");
const router = express.Router();
const { createCargo } = require("../cargo/cargo.service");
const { addInventory } = require("../inventory/inventory.service");
const { createTrade } = require("../trades/trade.service");
const Update = require("../../models/update.model");

function generateRandomString(length) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const planetStationMapping = {
  MilkyWay: 'ST001',
  Andromeda: 'ST002',
  CometGalaxy: 'ST003',
  BlackEyeGalaxy: 'ST004',
};

router.post('/inject-dummy-data', async (req, res) => {
  try {
    const { amount = 5 } = req.body;

    const createdData = {
      cargo: [],
      inventory: [],
      trades: [],
      updates: []
    };

    for (let i = 0; i < amount; i++) {
      const originPlanet = ['MilkyWay', 'Andromeda', 'CometGalaxy', 'BlackEyeGalaxy'][generateRandomNumber(0, 3)];
      const destinationPlanet = ['MilkyWay', 'Andromeda', 'CometGalaxy', 'BlackEyeGalaxy'][generateRandomNumber(0, 3)];
      const originStationId = planetStationMapping[originPlanet];
      const destinationStationId = planetStationMapping[destinationPlanet];
      const status = ['in_transit', 'delivered', 'delayed'][generateRandomNumber(0, 2)];
      const currentLocation = ['MilkyWay Orbit', 'Andromeda Orbit', 'CometGalaxy Orbit', 'BlackEyeGalaxy Orbit'][generateRandomNumber(0, 3)];
      const itemId = `I${generateRandomString(3)}`;
      const quantity = generateRandomNumber(50, 500);

      const cargoData = {
        shipmentId: `S${generateRandomString(4)}`,
        items: [{ itemId, quantity }],
        origin: originPlanet,
        destination: destinationPlanet,
        status,
        currentLocation
      };
      const cargo = await createCargo(cargoData);
      createdData.cargo.push(cargo);

      const tradeData = {
        tradeId: `T${generateRandomString(4)}`,
        items: cargoData.items,
        origin: cargoData.origin,
        destination: cargoData.destination,
        status: status === 'delivered' ? 'completed' : 'pending'
      };
      const trade = await createTrade(tradeData);
      createdData.trades.push(trade);

      if (status === 'in_transit') {
        await addInventory(originStationId, { itemId, quantity: -quantity });
      } else if (status === 'delivered') {
        await addInventory(destinationStationId, { itemId, quantity });
      }

      const originInventoryUpdate = await addInventory(originStationId, { itemId, quantity: -quantity });
      const destinationInventoryUpdate = status === 'delivered' 
        ? await addInventory(destinationStationId, { itemId, quantity }) 
        : null;
        
      createdData.inventory.push(originInventoryUpdate);
      if (destinationInventoryUpdate) {
        createdData.inventory.push(destinationInventoryUpdate);
      }

      const updateTitles = {
        in_transit: 'Cargo is in transit',
        delivered: 'Cargo has been delivered',
        delayed: 'Cargo is delayed'
      };

      const updateData = {
        title: updateTitles[cargoData.status],
        content: `${updateTitles[cargoData.status]} from ${cargoData.origin} (Station ${originStationId}) to ${cargoData.destination} (Station ${destinationStationId}). Current location: ${cargoData.currentLocation}.`
      };
      const update = await Update.create(updateData);
      createdData.updates.push(update);
    }

    res.status(201).json({
      message: `Successfully injected ${amount} dummy data entries`,
      data: createdData
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
