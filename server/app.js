const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');


app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());

// routes
const productRoutes = require('./routes/product');
const categoryRoute = require('./routes/category');

app.use('/api/category', categoryRoute);
app.use('/api/products', productRoutes);


// database
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Server
try {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
} catch (err) {
    console.log('Error starting the server:', err);
}


