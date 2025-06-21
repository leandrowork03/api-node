const servicoPessoa = require("../services/pessoa");
const service = new servicoPessoa();

class ControllerPessoa {
    PegarTodos(req, res) {
        try {
            const nomes = service.PegarTodos();
            res.status(200).json({ nomes });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    PegarUm(req, res) {
        try {
            const id = req.params.id;
            const nome = service.PegarUm(id);
            res.status(200).json({ nome });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    Adicionar(req, res) {
        try {
            const dados = req.body;
            const novo = service.Adicionar(dados);
            res.status(201).json({ pessoa: novo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id;
            const dados = req.body;
            const atualizado = service.Alterar(id, dados);
            res.status(200).json({ pessoa: "atualizado" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id;
            service.Deletar(id);
            res.status(204).send(); // Sem conteúdo, só sucesso
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ControllerPessoa;
