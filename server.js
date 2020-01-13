const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// load environment
dotenv.config({ path: './config.env' });

// creates express server
const app = express(); 

// dev logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// profile routes
app.use('/api/v1/profile', require('./routes/profile'));

// handle production
if (process.env.NODE_ENV === 'production') {
    // set static folder (ie public)
    app.use(express.static(__dirname + '/public/'));

    // handle single page application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
})