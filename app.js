let amigos = [];
function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    console.log(amigos);  
    input.value = "";
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega algunos nombres.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡Tu amigo secreto es: ${amigoSorteado}!</li>`;
}

