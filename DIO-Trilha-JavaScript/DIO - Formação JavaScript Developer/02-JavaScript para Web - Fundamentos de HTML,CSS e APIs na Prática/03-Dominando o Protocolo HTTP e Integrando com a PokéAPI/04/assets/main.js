const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name.toUpperCase()}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Imagem-${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonList = document.getElementById("pokemonList")

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for(let i=0; i< pokemons.length; i++){
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    })
    .catch((error) => console.error(error))


/*
Uso do console.log para imprimir na tela

fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemonList) => {
    console.log(pokemonList)
})
.catch((error) => console.error(error))
*/


/*
Uso do for

fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemonList) => {
    for(let i=0; i< pokemonList.length; i++){
        console.log(pokemonList[i])
    }
})
.catch((error) => console.error(error))
*/


/*
Uso do for com a function


fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemonList) => {
    for(let i=0; i< pokemonList.length; i++){
        const pokemon = pokemonList[i]
        console.log(convertPokemonToLi(pokemon))
    }
})
.catch((error) => console.error(error))
*/