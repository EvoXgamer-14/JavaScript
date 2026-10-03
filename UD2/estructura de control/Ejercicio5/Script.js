let suma = 0;
let contador = 0;
let numero;

do {
    numero = Number(prompt("Introduce un número (negativo para terminar):"));

    if (numero >= 0 && Number.isFinite(numero)) {
        suma += numero;
        contador++;
    } else if (numero < 0) {
        alert("Número negativo detectado. Calculando resultados...");
    } else {
        alert("⚠️ Valor no válido. Introduce solo números.");
    }

} while (numero >= 0);

if (contador > 0) {
    let media = suma / contador;
    alert(`Suma total: ${suma}\nMedia: ${media.toFixed(2)}`);
} else {
    alert("No se introdujeron números válidos.");
}
