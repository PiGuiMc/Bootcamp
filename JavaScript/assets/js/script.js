var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var btnAdd = document.getElementById("Add");
var btnDesc = document.getElementById("Desc");

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber == 10){
        btnAdd.disabled = true;
    }
    if(currentNumber > -10){
        btnDesc.disabled = false;
    }
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'blue';
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 10){
        btnAdd.disabled = false;
    }
    if(currentNumber == -10){
        btnDesc.disabled = true;
    }
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
}
