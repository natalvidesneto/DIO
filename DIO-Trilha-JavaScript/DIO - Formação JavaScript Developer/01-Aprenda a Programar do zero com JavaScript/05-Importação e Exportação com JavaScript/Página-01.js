//Criando a Função gets e print

function print(texto){
    console.log(texto)
}

function soma(a,b){
    return a+b
}

//Para exportar usamos o module.exports

module.exports = {soma, print}

/**
 * Ou podemmos fazer dessa forma:
 * 
 * module.exports = {
 *      soma: soma,
 *      print: print
 * }
 */

/**
 * Podemos exportar uma função diretamente:
 * 
 * module.exports.soma = soma
 */

//O que estamos fazendo é exportando um objeto