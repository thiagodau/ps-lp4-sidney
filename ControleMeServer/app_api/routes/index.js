var express = require('express');
var router = express.Router();
var ctrlContatos = require('../controllers/contatos');
var ctrlMovimentacoes = require('../controllers/movimentacoes');

/* GET home page. */
router.get('/contatos', ctrlContatos.buscaTodos);
router.get('/contatos/favoritos', ctrlContatos.retornaFavoritos);
router.get('/contatos/:id', ctrlContatos.busca);
router.post('/contatos', ctrlContatos.salva);
router.put('/contatos', ctrlContatos.atualiza);
router.delete('/contatos/:id', ctrlContatos.remove);

//movimentacoes
router.get('/movimentacoes', ctrlMovimentacoes.buscaTodos);
router.delete('/movimentacoes/:id', ctrlMovimentacoes.remove);
router.post('/movimentacoes', ctrlMovimentacoes.salva);

module.exports = router;
