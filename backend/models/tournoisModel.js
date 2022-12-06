const mongoose = require("mongoose");

const tournoisModel = mongoose.model(
    "node-api",
    {
        nom: {
            type: String,
            required: true
        },
        debut: {
            type: String,
            required: true
        },
        fin: {
            type: String,
            required: true
        },
        ville: {
            type: String,
            required: true
        },
        pays: {
            type: String,
            required: true
        },
        surface: {
            type: String,
            required: true
        },
        creation: {
            type: Number,
            required: true
        },
    },
    "tournoi"

);

module.exports = { tournoisModel };