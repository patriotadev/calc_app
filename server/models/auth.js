const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    timestamp_in: {
        type: Date,
        default: Date.now
    },
    timestamp_out: {
        type: Date,
        default: Date.now
    }

});

const auth = mongoose.model('auth', authSchema);
module.exports = auth;