var mongoose = require('mongoose');

var movimentacao = new mongoose.Schema({
    valor: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Movimentacao', movimentacao);