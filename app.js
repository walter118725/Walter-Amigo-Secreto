// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.// Array para almacenar los nombres de los amigos
let listaAmigos = [];


function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor ingresa un nombre');
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        return;
    }

    listaAmigos.push(nombreAmigo);

    actualizarListaAmigos();

    inputAmigo.value = '';

    inputAmigo.focus();
}

function actualizarListaAmigos() {
    const ulAmigos = document.getElementById('listaAmigos');
    ulAmigos.innerHTML = '';

     listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ulAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Debes agregar al menos 2 amigos para poder sortear');
        return;
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    const botonSortear = document.querySelector('.button-draw');
    botonSortear.disabled = true;

    let contador = 0;
    const intervalo = setInterval(() => {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        resultadoElement.textContent = listaAmigos[indiceAleatorio];
        contador++;

        if (contador > 20) { 
            clearInterval(intervalo);
            const ganadorFinal = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
            resultadoElement.textContent = `¡${ganadorFinal} es tu amigo secreto!`;
            botonSortear.disabled = false;
        }
    }, 100);
}

document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});