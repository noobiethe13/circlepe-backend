require('dotenv').config();
const server = require('./server');
const { connectMongoDB } = require('./config/db');
// const { connectRedis } = require('./config/redis');
// const { connectKafka } = require('./config/kafka');

async function startServer() {
    await connectMongoDB();
    // await connectRedis();
    // await connectKafka();

    server.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

startServer();