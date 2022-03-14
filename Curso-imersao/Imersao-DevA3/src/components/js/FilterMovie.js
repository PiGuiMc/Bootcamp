var filmes = [ "https://br.web.img3.acsta.net/medias/nmedia/18/84/38/87/19843353.jpg",
 "https://www.autografia.com.br/wp-content/uploads/2020/10/viva-por-um-milagre.jpg",
 "https://br.web.img3.acsta.net/medias/nmedia/18/87/06/15/19871623.jpg"]


function Filter(){
    var img = document.getElementById("image");

    var select = document.getElementById('form-select');
    var value = parseInt(select.options[select.selectedIndex].value);

    if(value == 100){
        for(let i=0; i<filmes.length;i++){
            img.setAttribute('src', filmes[i]);
            console.log("caiu aqui")
        }
    }else if(value < 100){
        var images = document.getElementsByClassName('iFilmes');
        var l = images.length;
        for (var i = 0; i < l; i++) {
            images[i].parentNode.removeChild(images[i]);
        }
    }else{
        img.setAttribute('src', filmes[value]);
        console.log(value)
    }
}