const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresunicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresunicos(meuArray))