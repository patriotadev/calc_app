const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
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
    created_at: {
        type: Date,
        default: Date.now
    },
    timestamp_in: {
        type: String,
        default: null
    },
    timestamp_out: {
        type: String,
        default: null
    },
});

const auth = mongoose.model('auth', authSchema);
module.exports = auth;