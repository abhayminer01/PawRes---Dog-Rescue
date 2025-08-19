require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDatabase = require('./configs/database');
const authController = require('./controllers/auth.controller');

const app = express();
app.use(cors({ origin: "http://127.0.0.1:5500", credentials: true }));
app.use(express.json());

app.post('/api/auth/login', authController.userLogin);
app.post('/api/auth/register', authController.userregistration);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running in port : ${PORT}`);
    connectDatabase();
});