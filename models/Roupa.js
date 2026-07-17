const mongoose = require("mongoose");

const roupaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    cor: {
        type: String,
        required: true
    },

    tamanho: {
        type: String,
        required: true
    },

    preco: {
        type: Number,
        required: true
    },

    marca: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Roupa", roupaSchema);