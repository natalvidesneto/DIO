const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');

// Tocar ou pausar a música ao clicar no botão
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = 'Pausar';
    } else {
        audioPlayer.pause();
        playBtn.textContent = 'Play';
    }
});

let contador = 1;
const maxPokemons =  1302;

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
            document.getElementById('pokemon-container').innerHTML = `
            <figure>
                <img src="${imagem}" alt="imagem-${name}">
                <ul class="informacoes">
                    <li>${name}</li>
                    <li>${order}</li>
                </ul>
            </figure>
            `;
        })
        .catch((erro) => {
            console.log('Erro:', erro);
            document.getElementById('pokemon-container').innerHTML = 'Erro ao buscar dados.';
        });

    contador++;
    if (contador > maxPokemons) {
        contador = 1;
    }
});

