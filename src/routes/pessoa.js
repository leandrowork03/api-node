const express = require("express");
const ControllerPessoa = require("../controllers/pessoa");

const controller = new ControllerPessoa();

const router = express.Router();

router.get('/api/v1/nomes', controller.PegarTodos)
router.get('/api/v1/nome/:id', controller.PegarUm)
router.post('/api/v1/nome', controller.Adicionar)
router.put('/api/v1/nome/:id', controller.Alterar)
router.delete('/api/v1/nome/:id', controller.Deletar)

module.exports = router;

//5