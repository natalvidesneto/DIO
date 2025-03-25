//Acessando Diamicamente valores de um Objeto

const pokemons = {
    eletrico: 'Pikachu',
    fogo: "Charmande",

    poder1: function(){
        return this.eletrico + "choque do tovão."
    }
}

//Acessando um atributo de Objetos pela nome em string
let tipo = 'fogo'
console.log(pokemons[tipo])
//ou
console.log(pokemons['fogo'])

//Atribundo um novo valor no objeto
pokemons['eletrico'] = 'tipo fantasma'
console.log(pokemons.eletrico)

pokemons.eletrico = 'Tipo grama'
console.log(pokemons.eletrico)