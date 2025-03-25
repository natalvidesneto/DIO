//Criando Classes e Instâncias
class Pessoa{
    nome
    idade
    data_de_nascimento

    descrição(){
        console.log(`Ola Mundo, me chamo ${this.nome} tenho ${this.idade} e nasci em ${this.data_de_nascimento}`)
    }
}

const aluno1 = new Pessoa()
aluno1.nome = 'Neto'
aluno1.idade = 27
aluno1.data_de_nascimento = 1997

aluno1.descrição()