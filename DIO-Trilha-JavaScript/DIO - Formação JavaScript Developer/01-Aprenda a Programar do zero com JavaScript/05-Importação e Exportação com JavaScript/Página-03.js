//Object Destructuring (Destruição de objeto)

const {soma, print} = require('./Página-01')

print(soma(10,20))

/**
 * A destruição de um objeto
 * 
 * {soma, print} entre chaves
 * 
 * Outro exemplo:
 * const objeto = {
 *      nome: 'Neto'
 * }
 * 
 * const {nome} = pessoa
 * 
 * Que seria o mesmo que:
 * const nome = objeto.nome
 * console.log(nome) --> Neto
 */