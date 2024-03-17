class Persona {
    constructor(id, nome, idade, profissao) {
        this.id = id
        this.nome   = nome
        this.idade = idade
        this.profissao = profissao
    }
    getInfo() {
        return `\nID: ${this.id} \nNome: ${this.nome} \nIdade: ${this.idade} \nProfissão: ${this.profissao} \n`
    }
}

function createPersona(id, nome, idade, profissao) {
    return new Persona(id, nome, idade, profissao)
}

module.exports = {
    Persona,
    createPersona
}