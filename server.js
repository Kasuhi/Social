const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 50