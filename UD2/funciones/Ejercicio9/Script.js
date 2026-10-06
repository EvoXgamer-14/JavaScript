function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

function obtenerIntentosPorNivel(nivel) {
    switch (nivel) {
        case "1": return 10; 
        case "2": return 7;  
        case "3": return 5;  
        default: return 10;  
    }
}

function validarIntento(intent) {
    return Number.isFinite(intent) && intent >= 1 && intent <= 100;
}

function jugarRonda(nivel = "1") {
    const numeroSecreto = generarNumeroSecreto();
    const intentosMax = obtenerIntentosPorNivel(nivel);
    let puntos = 0;

    alert(`Nivel ${nivel} seleccionado. Tienes ${intentosMax} intentos para adivinar el número (1–100).`);

    for (let intento = 1; intento <= intentosMax; intento++) {
        let entrada = prompt(`Intento ${intento}/${intentosMax}: Introduce un número (o escribe "salir" para terminar)`);

        if (entrada === null || entrada.toLowerCase() === "salir") {
            alert("🚪 Has salido de la ronda.");
            return 0;
        }

        let numero = Number(entrada);

        if (!validarIntento(numero)) {
            alert("Valor no válido. Introduce un número entre 1 y 100.");
            intento--; // No cuenta como intento
            continue;
        }

        if (numero === numeroSecreto) {
            puntos += 10;
            alert(`¡Correcto! El número era ${numeroSecreto}. Ganaste 10 puntos.`);
            return puntos;
        } else {
            puntos -= 1;
            alert(numero < numeroSecreto ? "El número secreto es mayor. " : " El número secreto es menor.");
        }
    }

    alert(`Se acabaron los intentos. El número era ${numeroSecreto}.`);
    return puntos;
}

function juegoAdivinar() {
    let puntuacionTotal = 0;
    let opcion;

    do {
        opcion = prompt(
`🎮 MENÚ DE DIFICULTAD
1. Fácil (10 intentos)
2. Medio (7 intentos)
3. Difícil (5 intentos)
4. Salir
Elige una opción (1–4):`
        );

        switch (opcion) {
            case "1":
            case "2":
            case "3":
                let puntosRonda = jugarRonda(opcion);
                puntuacionTotal += puntosRonda;
                alert(`Fin de la ronda. Puntuación acumulada: ${puntuacionTotal} puntos.`);
                break;

            case "4":
                alert(`Juego terminado. Puntuación final: ${puntuacionTotal} puntos.`);
                break;

            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    } while (opcion !== "4");
}


juegoAdivinar();
