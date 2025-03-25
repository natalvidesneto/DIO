//Executando For em Uma String

const isName = "Natalvides Neto" //Vamos consumir letra por letra

for(let i=0; i<isName.length;i++){
    console.log(isName[i])
}
console.log("\n***--------------------***\n")
/**
 * Obs: A String que sempre estamos usando é um Array de Caracteres
 */

for(let i=0; i < isName.length; i++){
    const element = isName[i]
    console.log(element)
}