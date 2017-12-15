var express = require('express');
var router = express.Router();
var ctrlMovimentacoes = require('../controllers/movimentacoes');

//movimentacoes
router.get('/movimentacoes', ctrlMovimentacoes.buscaTodos);
router.delete('/movimentacoes/:id', ctrlMovimentacoes.remove);
router.post('/movimentacoes', ctrlMovimentacoes.salva);

module.exports = router;
