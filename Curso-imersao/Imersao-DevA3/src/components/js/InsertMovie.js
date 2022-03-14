function InsertFilme(){
    var campoFilme = document.querySelector("#form-control").value;
    //console.log(iFilme)
    var elementoFilmeFavorito = "<img src=" + campoFilme + ">";
    var listaFilme = document.getElementById("filmes");

    listaFilme.innerHTML = listaFilme.innerHTML + elementoFilmeFavorito;

    document.querySelector("#form-control").value = ""
}