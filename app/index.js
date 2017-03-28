var express = require('express');//falando que ele vamos precisamos do express aquele framework node que instalamos
var router  = express.Router();//estamos trazendo um modulo de rotas

// Rota para o inicio do site
router.get('/', require('./home/index'));//estamos pegando a pagina principal '/' e estamos falando para o navegador onde ele irá buscar o arquivo correspondente a está pagina, com isso podemos criar varias rotas para o navegador buscar

module.exports = router;
