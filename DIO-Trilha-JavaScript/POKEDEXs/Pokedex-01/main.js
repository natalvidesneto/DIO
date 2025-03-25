let contador = 1; // Inicia no primeiro Pokémon
const maxPokemons = 100; // Limite de Pokémons

let botao = document.getElementById('button');

botao.addEventListener('click', () => {
    
    let url = `https://pokeapi.co/api/v2/pokemon/${contador}`;

    fetch(url)
    .then((resposta) => {
        if (!resposta.ok) {
            throw new Error('Erro ao buscar dados');
        }
        return resposta.json();
    })
    .then((resposta) => {
        let name = resposta.name;
        let order = resposta.order;
        let imagem = resposta.sprites.other.dream_world.front_default;
        document.getElementById('content').innerHTML = `
            <figure>
                <img src="${imagem}" alt="image-pokemon">
            </figure>
            <ul>
                <li>${name}</li>
                <li>#${order}</li>
            </ul>
        `;
    })
    .catch((erro) => {
        console.error('Erro:', erro);
        document.getElementById('content').innerHTML = 'Erro ao buscar os dados.';
    });

    // Incrementa o contador, até o máximo de 100
    contador++;
    if (contador > maxPokemons) {
        contador = 1; // Reinicia para o primeiro Pokémon após o 100
    }
});
