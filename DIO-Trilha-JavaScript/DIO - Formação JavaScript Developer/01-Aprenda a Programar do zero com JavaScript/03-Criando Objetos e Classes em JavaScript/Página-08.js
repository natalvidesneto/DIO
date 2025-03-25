class Pessoa{
    nome
    nota
    constructor(nome,nota){
        this.nome = nome
        this.nota = nota
    }
}

function maiorNota(nota1,nota2){
    if(nota1 > nota2){
        console.log('A mairo nota é a primiera.')
    }else if(nota2 > nota1){
        console.log('A maior nota é a seguna.')
    }else{
        console.log('Ambas as notas tem o mesmo valor.')
    }
}

const aluno1 = new Pessoa('Ana', 8)

const aluno2 = new Pessoa('Julia', 9)

maiorNota(aluno1.nota,aluno2.nota)