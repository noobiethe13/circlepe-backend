# Backend Repository for CirclePe Assessment:
Tech Stack: Nodejs/Expressjs & MongoDB</br>
Deployed on: AWS (http://13.127.162.188/)<br>
Dashboard: http://circlepe-dashboard.debtfolio.tech/

# Dataflow Diagram:
<img src = "https://github.com/user-attachments/assets/0802baf1-4986-47da-a401-3923f1f883a1" width="400">

# Endpoints List:
1. /api/trades/

    - / (POST)
  
      req : {</br>
          tradeId: { type: String, required: true, unique: true },</br>
          items: [{ itemId: String, quantity: Number }],</br>
          origin: String,</br>
          destination: String,</br>
          status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },</br>
          createdAt: { type: Date, default: Date.now },</br>
      }

    - /completedtrades (GET)
    - /:transactionId (GET)

1. /api/cargo/

    - / (POST)
  
      req : {</br>
          shipmentId: { type: String, required: true, unique: true },</br>
          items: [{ itemId: String, quantity: Number }],</br>
          origin: String,</br>
          destination: String,</br>
          status: { type: String, enum: ['in_transit', 'delivered', 'delayed'], default: 'in_transit' },</br>
          currentLocation: String,</br>
          createdAt: { type: Date, default: Date.now },</br>
      }

    - /activecargo (GET)
    - /:shipmentId (GET)

2. /api/inventory/

    - /stationinventory (GET)
    - /:stationId (GET)
    - /:stationId (POST)
  
        req : {</br>
          stationId: { type: String, required: true }, //fixed values : [ST001, ST002, ST003, ST004]</br>
          items: [{ itemId: String, quantity: Number }],</br>
      }        

3. /api/updates/real-time (GET)

4. /api/dummy-data/inject-dummy-data (POST)
   
   req : {</br>
    "amount" : integer</br>
   }
