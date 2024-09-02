Backend Repository for CirclePe Assessment:
Tech Stack: Nodejs/Expressjs & MongoDB

Endpoints List:
1. /api/trades/

    - / (POST)
    - /completedtrades (GET)
    - /:transactionId (GET)

2. /api/cargo/

    - / (POST)
    - /activecargo (GET)
    - /:shipmentId (GET)

3. /api/inventory/

    - /stationinventory (GET)
    - /:stationId (GET)
    - /:stationId (POST)

4. /api/updates/real-time (GET)

5. /api/dummy-data/inject-dummy-data (POST)
   
   req : {
    "amount" : integer
   }