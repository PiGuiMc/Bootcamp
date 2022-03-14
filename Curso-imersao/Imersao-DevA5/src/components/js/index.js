function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

var jogadores = [];

if(jogadores.length == 0){
    document.getElementById("returnForm").innerHTML = "Por favor adicione os jogadores."
}

function exibiJogadoresNaTela(jogadores){
    var elemento = ""
    for(let i=0; i<jogadores.length; i++){  
        elemento += "<tr>"
        elemento += "<td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>"+ jogadores[i].empates + "</td>"
        elemento += "<td>"+ jogadores[i].derrotas +"</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibiJogadoresNaTela(jogadores)

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador)
    exibiJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador)
    exibiJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++;
    exibiJogadoresNaTela(jogadores)
}

function adicionarJogador(){
    document.getElementById("returnForm").innerHTML = "";
    var inputJogador = document.getElementById("newJogador").value;

    if(inputJogador.length > 0){
        var nJogador = {nome: inputJogador, vitorias:0, empates:0, derrotas:0, pontos:0}
        jogadores.push(nJogador)
        
        exibiJogadoresNaTela(jogadores)
    }else{
        document.getElementById("returnForm").innerHTML = "O Nome precisa ser preenchido!"
       
    }
    document.getElementById("newJogador").value = ""
}

function finalizar(){
    var pos=0, mPontos = 0;
    for(let j=0; j<jogadores.length; j++){
        if(mPontos < jogadores[j].pontos){
            mPontos = jogadores[j].pontos
            pos = j;
        }
    }
    var img = document.getElementById("imgGanhador");
    img.innerHTML = "<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RMWPc1s_cjUXLZ-K5Z9dz9rS92UTl7WOsQ&usqp=CAU >"
    
    var ganhador = document.getElementById("ganhador");
    ganhador.innerHTML = `O ganhador é o jogador(a) ${jogadores[pos].nome} com ${jogadores[pos].pontos}
    Parabéns ${jogadores[pos].nome}!!!`
}