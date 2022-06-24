
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById('btnSubtrair').addEventListener("click", decrement);
document.getElementById('btnAdicionar').addEventListener("click", increment);
document.getElementById('btnAdicionar').addEventListener("click", desabilitaBotao);
document.getElementById('btnSubtrair').addEventListener("click", desabilitaBotao);

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
}

function desabilitaBotao(){
    document.getElementById('btnAdicionar').disabled = currentNumber >= 10;
    document.getElementById('btnSubtrair').disabled = currentNumber <= -10;
}


