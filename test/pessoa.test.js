const { describe, expect, it } = require('@jest/globals');
const ServicePessoa = require("../src/services/pessoa");

describe("Primeiro teste de pessoa", () => {
    const service = new ServicePessoa();

    it("Add um nome na lista", () => {
        const nome = "Ana";
        service.Adicionar(nome);
        const nomes = service.PegarTodos();

        expect(nomes[nomes.length - 1]).toBe(nome)
    })

    it("update um nome na lista", () => {
        const nome = "Lucas";
        const index = 2
        service.Alterar(index, nome);
        const nomes = service.PegarTodos();

        expect(nomes[index]).toBe(nome)
    })

    it("deletar um nome na lista", () => {
        const index = 0
        const nomeAntes = service.PegarUm(index);
        service.Deletar(index);
        const nomeDepois = service.PegarUm(index);

        expect(nomeAntes).not.toBe(nomeDepois)
    })
})

//6