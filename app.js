// Variables
let nombres = [];

// Funcion para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    nombres.push(nombre);

    // Crear un nuevo elemento <li> y añadirlo a la lista
    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    input.value = "";

    // Habilitar el botón de sorteo si hay al menos un nombre
    document.querySelector(".button-draw").disabled = nombres.length === 0;
}

// Función para sortear amigo secreto
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Debe ingresar al menos un nombre antes de sortear.");
        return;
    }
    
    let indice = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").innerText = `El amigo secreto es: ${nombres[indice]}`;
    
    // Vaciar la lista de nombres y ocultar la lista
    nombres = [];
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Deshabilitar el botón de sorteo
    document.querySelector(".button-draw").disabled = true;
}