let vitorias = 10;
let derrotas = 5;
let nivel = ['Ferro','Bronze','Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal'];

function partidasRankeadas(vitorias, derrotas){
    let saldoRankeadas = (vitorias - derrotas);

    if(vitorias <= 10){
        console.log(`O Herói tem de saldo ${saldoRankeadas} está no nível de ${nivel[0]}`);
    }else if((vitorias >= 11) && (vitorias <= 20)){
        console.log(`O Herói tem de saldo ${saldoRankeadas} está no nível de ${nivel[1]}`);
    }else if((vitorias >= 21) && (vitorias <= 50)){
        console.log(`O Herói tem de saldo ${saldoRankeadas} está no nível de ${nivel[2]}`);
    }else if((vitorias >= 51) && (vitorias <= 80)){
        console.log(`O Herói tem de saldo ${saldoRankeadas} está no nível de ${nivel[3]}`);
    }else if((vitorias >= 81) && (vitorias <= 90)){
        console.log(`O Herói tem de saldo ${saldoRankeadas} está no nível de ${nivel[4]}`);
    }else if((vitorias >= 91) && (vitorias <= 100)){
        console.log(`O Herói tem de saldo ${saldoRankeadas} está no nível de ${nivel[5]}`);
    }else if(vitorias >= 101){
        console.log(`O Herói tem de saldo ${saldoRankeadas} está no nível de ${nivel[6]}`);
    }else {
        console.log("Erro.")
    }
}

partidasRankeadas(vitorias, derrotas);