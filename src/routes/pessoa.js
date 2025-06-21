//4
const express = require('express');
const controllerPessoa = require('../controllers/pessoa');


const controller = new controllerPessoa();
const router = express.Router();

router.get('/api/v1/nomes', controller.PegarTodos)
router.get('/api/v1/nome/:id', controller.PegarUm)
router.post('/api/v1/nome/', controller.Adicionar)
router.put('/api/v1/nome/:id', controller.Alterar)
router.delete('/api/v1/nomes/:id', controller.Deletar)

module.exports = router;