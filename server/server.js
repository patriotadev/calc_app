const express = require('express');
const app = express();
const authRouter = require('./routes/auth');
const cors = require('cors');
require('dotenv').config();
require('./utils/database');

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${process.env.PORT}`);
})