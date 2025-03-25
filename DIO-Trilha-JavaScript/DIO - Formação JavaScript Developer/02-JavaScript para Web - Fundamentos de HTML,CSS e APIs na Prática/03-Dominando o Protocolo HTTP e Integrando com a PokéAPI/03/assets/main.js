const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(bodyResponse){
    console.log(bodyResponse)
})
.catch(function(error){
    console.error(error)
})
.finally(function(){
    console.log('Requisição concluída!')
})


/**
 * Uso do Arrow function
 * 
 * fetch(url)
 * .then((response) => response.json())
 * .then((jsonBody) => console.log(jsonBody))
 * .then((error) => console.error(error))
 */