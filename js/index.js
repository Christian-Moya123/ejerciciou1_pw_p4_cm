var attempts = 0;
var score = 0;

function incrementarIntento() {
    attempts++;
}

function verificarOpcion(idBoton) {
    incrementarIntento();
    var atm = attempts;

    if (idBoton === "btnexcadrill") {
        score = calcularPuntaje(attempts);

        document.getElementById("divmensaje").innerHTML = "<h3 onclick='seleccionarOpcion()'>Felicitaciones, has seleccionado la opción correcta<p>Intentos: <span id='intentos'></span></p> <p>Puntaje: <span id='puntaje'></span></p></h3>";
        seleccionarOpcion();
        document.getElementById("intentos").textContent = atm;
    } else {
        score = calcularPuntaje(attempts+1);
        document.getElementById("divmensaje").innerHTML = "<h3 onclick='seleccionarOpcion()'>Pokémon incorrecto, la respuesta es excadrill<p>Intentos: <span id='intentos'></span></p> <p>Puntaje: <span id='puntaje'></span></p> </h3>";
        seleccionarOpcion();
        document.getElementById("intentos").textContent = atm;
    }

    document.getElementById("puntaje").textContent = score;
}

function resetearJuego() {
    attempts = 0;
    score = 0;
    document.getElementById("divmensaje").innerHTML = "<h3  onclick='seleccionarOpcion()'></h3>";
    document.getElementById("idimagen").src = "../img/pnegro.jpg";
}

function seleccionarOpcion() {
    document.getElementById("idimagen").src = "../img/pcolor.jpg";
}

function calcularPuntaje(intentos) {
    if (intentos == 1) {
        return 5;
    } else if (intentos == 2) {
        return 3;
    } else if (intentos == 3) {
        return 1;
    } else {
        resetearJuego();
        return 0;
    }
}
