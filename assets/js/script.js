const original = document.getElementById('original');
const span = document.querySelector('span');
var modificado = document.getElementById('modificado');
const seletor = document.getElementById('efeito')

original.addEventListener('keyup', function() {
    span.innerHTML = original.value.length

    if(seletor.value == "lowercase") {
        modificado.innerText = original.value.toLowerCase()
    }else {
        modificado.innerText = original.value.toUpperCase()
    }
})

seletor.addEventListener('change', function() {
    if(seletor.value == "lowercase") {
        modificado.innerText = original.value.toLowerCase()
    }else {
        modificado.innerText = original.value.toUpperCase()
    }
})