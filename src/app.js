const express = require('express');
const mongoose = require('mongoose');
const CrypoPrice = require('./models/CryptoPrice');

const app = express();

mongoose.connect('mongodb://localhost/crypto');

app.get('/crypto', function (req, res) {
    CrypoPrice.find({}, function (err, tokens) {
        const responseData = {}
        tokens.forEach(t => {
            responseData[t.name] = t;
        });
        res.json(responseData);
    });
});

app.listen(8000, function () {
    console.log('now listening for requests at port 8000');
});