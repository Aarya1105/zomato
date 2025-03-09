const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path');
const app = express()
const PORT = process.env.PORT || 5000;
dotEnv.config();
app.use(cors())
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected successfully!"))
.catch((error) => console.log(error))
app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes)