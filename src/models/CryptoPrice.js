const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CryptoPriceSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    price: {
        type: String,
        required: [true, 'Price field is required']
    },
    price: {
        type: String,
        required: [true, 'Price field is required']
    },
    change: {
        type: String,
        required: [true, 'Change field is required']
    },
    volumn: {
        type: String,
        required: [true, 'Volumn field is required']
    },
    marketCap: {
        type: String,
        required: [true, 'MarketCap field is required']
    }
});

const CryptoPrice = mongoose.model('crypto', CryptoPriceSchema);

module.exports = CryptoPrice;