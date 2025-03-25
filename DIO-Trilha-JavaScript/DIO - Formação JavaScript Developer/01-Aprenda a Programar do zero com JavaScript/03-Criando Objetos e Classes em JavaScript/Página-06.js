//Constructores
class Pessoa{
    nome
    idade
    data_de_nascimento

    descrição(){
        console.log(`Ola Mundo, me chamo ${this.nome} tenho ${this.idade} e nasci em ${this.data_de_nascimento}`)
    }

    constructor(nome, idade, data_de_nascimento){
        this.nome = nome
        this.idade = idade
        this.data_de_nascimento = data_de_nascimento
    }
}

const aluno1 = new Pessoa('Neto', 27, 1997)
aluno1.descrição()