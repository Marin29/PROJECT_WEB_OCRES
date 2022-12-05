const mongoose = require("mongoose");
const { Schema } = mongoose;

const tournoiSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    debut: { type: Number, required: true },
    fin: { type: Number, required: true },
    ville: { type: String, required: true },
    pays: { type: String, required: true },
    surface: { type: String, required: true },
    creation: { type: Number, required: true }
}, {
    timestamps: true
});

const gChelem = mongoose.model("gChelem", tournoiSchema);

module.exports = gChelem;