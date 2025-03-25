function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="types">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name.toUpperCase()}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="Imagem-${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonList = document.getElementById("pokemonList")

pokeApi.getPokemons().then((pokemons = []) => {
    const newList = pokemons.map((pokemon) =>{
        return convertPokemonToLi(pokemon)
    })
    const newHtml = newList.join('')
    pokemonList.innerHTML += newHtml
})

/*
Reduzindo ainda mais o código

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
}

Ou podemos fazer

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
}
*/