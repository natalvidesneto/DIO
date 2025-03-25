//Como organizar as Funções
/**
 * Podemos criar um função main() e inserir todas o código e outras funções
 * externas dentro da função main().
 */

//Exemplo:

function soma(a,b){
    return a+b
}

function main(){
    console.log("Ola função main.")
    let valor = soma(10,10)
    console.log("Valor: " + valor)
    console.log(soma(20,20))
}

main()