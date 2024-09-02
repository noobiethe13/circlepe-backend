# Backend Repository for CirclePe Assessment:</br>
Tech Stack: Nodejs/Expressjs & MongoDB</br>

# Dataflow Diagram:</br>
<img src = "https://github.com/user-attachments/assets/0802baf1-4986-47da-a401-3923f1f883a1" width="400">

# Endpoints List:
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
