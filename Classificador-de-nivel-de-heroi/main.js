console.log('*** Iniciando Game ***');
let nameHero = 'Lord Do Deserto';
let xp = 0;
let level = '';
console.log(`\nName Herói : \"${nameHero}\"`);
console.log(`Nível inicial do Herói : ${xp}\n`);
console.log(`Iniciando jornada...\n`);
for (let i = 0; i < 8; i++) {
    if(xp == 0){
        xp = 1000;
        level = 'Ferro';
        console.log(`O Herói de nome ${nameHero} está no nível de ${level}`);
    }else if (xp == 1000){
        xp = 2000;
        level = 'Bronze';
        console.log(`O Herói de nome ${nameHero} está no nível de ${level}`);
    }else if (xp == 2000){
        xp = 5000;
        level = 'Prata';
        console.log(`O Herói de nome ${nameHero} está no nível de ${level}`);
    }else if (xp == 5000){
        xp = 7000;
        level = 'Ouro';
        console.log(`O Herói de nome ${nameHero} está no nível de ${level}`);
    }else if (xp = 7000){
        xp = 8000;
        level = 'Platina';
        console.log(`O Herói de nome ${nameHero} está no nível de ${level}`);
    }else if (xp == 8000){
        xp = 9000;
        level = 'Ascendente';
        console.log(`O Herói de nome ${nameHero} está no nível de ${level}`)
    }else if (xp == 9000){
        xp == 10000;
        level = 'Imortal';
        console.log(`O Herói de nome ${nameHero} está no nível de ${level}`);
    }else if (xp == 10000){
        xp = 10001;
        level = 'Radiante';
        console.log(`O Herói de nome ${nameHero} está no nível de ${xp}`);
    }
}