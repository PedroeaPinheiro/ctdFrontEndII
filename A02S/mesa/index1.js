var pontosMaquina = 0
var pontosUsuario = 0 

function opcaoUsuario() {
    let maoUsuario = parseInt(prompt('Pedra(1), Papel(2), Tesoura(3)?'))
    return maoUsuario;
}

function opcaoComputador() {
    let maoComputador = parseInt(Math.random() * 3 + 1);
    return maoComputador;
}

function jogo() {
    let maoComputador = opcaoComputador;
    let maoUsuario = opcaoUsuario;

    console.log("A sua mão foi: " + maoUsuario);
    console.log("A mão do computador foi: " + maoComputador);

    switch(maoUsuario) {
        case maoMaquina: 
        alert("Empate, o computador jogou a mesma mão.")
        break;
        case 1:
            if (maoComputador == 2) {
                pontosMaquina++
                alert("A máquina venceu!")
            } else {
                pontosUsuario++
                alert("O usuário venceu!")
            } break;
        case 2:
            if (maoComputador == 1) {
                pontosUsuario++;
                alert("O usuário venceu!")
            } else {
                pontosMaquina++
                alert("A máquina venceu!")
            }
        case 3:
            if (maoComputador == 1) {
                pontosMaquina++
                alert("A máquina venceu!")
            } else {
                pontosUsuario++
                alert("O usuário venceu!")
            } break;
    }
    console.log("Pontos do usuário: " + pontosUsuario);
    console.log("Pontos da máquina: " + pontosMaquina); 
}