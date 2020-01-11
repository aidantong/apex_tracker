const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// load environment
dotenv.config({ path: './config.env' });

const app = express(); // creates express server

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
})