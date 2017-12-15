var Movimentacao = require('../models/movimentacoes');

module.exports.buscaTodos = function (req, res) {
    Movimentacao.find().exec()
        .then(
        function (movimentacoes) {
            res.json(movimentacoes);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.busca = function (req, res) {
    Contato.findById(req.params.id).exec()
        .then(
        function (contato) {
            res.json(contato);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.salva = function (req, res) {
    Movimentacao.create(req.body)
        .then(
        function (movimentacao) {
            res.json(movimentacao);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.remove = function (req, res) {
    var _id = req.params.id;
    Movimentacao.remove({ "_id": _id }).exec()
        .then(
        function () {
            res.status(204).end();
        },
        function (erro) {
            return console.error(erro);
        }
        );
};
