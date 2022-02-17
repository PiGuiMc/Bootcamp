var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n')

for(let i=0; i<7; i++){
    var n = parseInt(lines.shift());

    const teste = (n) => {
        if(n % 2 == 0){
            return "par";
        }else{
            return "impar";
        }
    }

    console.log(teste(n))
}