var lamp = window.document.getElementById('lampada')

function quebrou(){
    return lamp.src.indexOf('quebrada') > -1
}

function ligar(){
    if (!quebrou()){
        lamp.src = 'ligada.svg'
    }
}

function desligar(){
    if (!quebrou()){
        lamp.src = 'desligada.svg'
    }
}
lamp.addEventListener ('click', quebrar)
function quebrar(){
    lamp.src = 'quebrada.svg'
}