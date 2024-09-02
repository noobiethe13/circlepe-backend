require('dotenv').config();
const mongoose = require('mongoose');

const connectMongoDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });
};

module.exports = { connectMongoDB };
