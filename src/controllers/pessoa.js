//2
const servicoPessoa = require("../services/pessoa")
const service = new servicoPessoa()

class controllerPessoa {
    PegarTodos(req, res) {
        try {
            const nomes = service.PegarTodos()
            res.status(200).json({ nomes })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = controllerPessoa

