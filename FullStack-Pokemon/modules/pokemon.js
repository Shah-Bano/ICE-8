const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    pokemonId: Number,
    name: String,
    height: Number,
    photo: String
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;