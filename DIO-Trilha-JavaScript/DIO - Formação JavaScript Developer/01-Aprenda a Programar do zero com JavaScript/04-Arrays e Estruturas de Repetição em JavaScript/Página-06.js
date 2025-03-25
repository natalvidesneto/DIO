//Executando For Para exibir a Média de Notas

const notas = []

notas.push(7)
notas.push(8.5)
notas.push(9)
notas.push(10)

let soma = 0

for(let i=0; i < notas.length; i++){
    const notasTotal  = notas[i]
    soma += notasTotal
}
const media = soma / notas.length
console.log(media)