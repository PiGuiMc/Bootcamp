function Limpar(i){
    var img = document.getElementById("imgGanhador");
    for(let i=0; i<jogadores.length; i++){
        var jogador = jogadores[i]
        jogador.vitorias = 0;
        jogador.empates = 0;
        jogador.derrotas = 0;
        jogador.pontos = 0;
        exibiJogadoresNaTela(jogadores)
    }
    ganhador.innerHTML = ""
    img.innerHTML = "<img src=>"
}