const express = require('express');
const cors = require('cors')
const tradeRoutes = require('./api/trades/trade.routes');
const cargoRoutes = require('./api/cargo/cargo.routes');
const inventoryRoutes = require('./api/inventory/inventory.routes');
const updatesRoutes = require('./api/updates/updates.routes');
const dummyDataRoutes = require('./api/dummy/dummyData.routes');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/trades', tradeRoutes);
app.use('/api/cargo', cargoRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/updates', updatesRoutes);
app.use('/api/dummy-data', dummyDataRoutes);

module.exports = app;