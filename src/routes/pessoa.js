//3
const express = require('express');
const controllerPessoa = require('../controllers/pessoa');


const controller = new controllerPessoa();
const router = express.Router();

router.get('/api/v1/nomes', controller.PegarTodos)

module.exports = router;