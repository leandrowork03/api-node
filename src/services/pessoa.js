const RepositoryPessoa = require("../repository/pessoa");

//2
const repo = new RepositoryPessoa();
class servicoPessoa{
    PegarTodos(){
        return repo.PegarTodos();
    }
    PegarUm(id){
        return repo.PegarUm(id);
    }
    Adicionar(nome){
        return repo.Adicionar(nome);
    }
    Alterar(id, nome){
        return repo.Alterar(id, nome);
    }
    Deletar(id){
        return repo.Deletar(id);
    }
}

module.exports = servicoPessoa;
