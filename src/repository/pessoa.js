//5
const banco = new Array("joão", "maria", "leandro")
class RepositoryPessoa{
    PegarTodos(){
        return banco
    }
    PegarUm(index){
        return banco[index]
    }
    Adicionar(nome){
        banco.push(nome)
    }
    Alterar(index){
        banco[index] = nome
    }
    Deletar(index){
        banco.splice(index, 1)
    }
}

module.exports =RepositoryPessoa