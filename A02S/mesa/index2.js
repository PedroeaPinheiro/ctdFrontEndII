var pontosUsuario = 0
var pontosMaquina = 0

function escolhaUsuario() {
    return parseInt(prompt("Pedra(1), Papel(2) ou Tesoura(3)?"));
}

function escolhaMaquina() {
    return parseInt(prompt(Math.random * 3 + 1));
}

function jogar() {
    console.log("Sua escolha foi: " + escolhaUsuario)
    console.log("A escolha da máquina foi: " + escolhaUsuario)
    switch(escolhaUsuario) {
        case escolhaMaquina:
            alert("Rodada empate, a máquina escolheu a mesma mão.")
        break;
        case 1:
            if(escolhaMaquina == 2) {
                pontosMaquina++
                alert("Você perdeu! A máquina escolheu papel.")
            } else {
                pontosUsuario++
                alert("Você venceu! A máquina escolheu tesoura.")
            } 
        break;
        case 2:
            if(escolhaMaquina == 3) {
                pontosMaquina++
                alert("Você perdeu! A máquina escolheu papel.")
            } else {
                pontosUsuario++
                alert("Você venceu! A máquina escolheu tesoura.")
            }
        break;
        case 3:
            if(escolhaMaquina == 1) {
                pontosMaquina ++
                alert("Você perdeu! A máquina escolheu papel.")
            } else {
                pontosUsuario++
                alert("Você venceu! A máquina escolheu tesoura.")
            }
        break;
    }
    console.log("Sua pontução foi de: " + pontosUsuario)
    console.log("A pontuação da máquina foi de: " + pontosMaquina)
}