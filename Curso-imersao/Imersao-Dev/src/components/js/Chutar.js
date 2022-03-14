// var elementoSecreto = parseInt(Math.random() * 11);
var elementoSecreto = 3;
var qt = 0

function Chutar (){

    while(qt < 3){
        var elementoRetorno = document.getElementById("teste");
        var chute = parseInt(document.getElementById("valor").value);

        if(elementoSecreto == chute){
            elementoRetorno.innerHTML = `Você acertou o valor é ${chute}`;
            
            break;
        }else if(chute > 10 || chute < 0){
            elementoRetorno.innerHTML = `O valor precisa estar entre 0 - 10 você digitou${chute}`;
            
        }else{
            elementoRetorno.innerHTML = `Você errou!`;
        }
        qt += 1
    }

    if(qt = 3){
        elementoRetorno.innerHTML = `Acabou as suas chances, tente novamente`;
        console.log(qt)
        qt = 0
    }
}
