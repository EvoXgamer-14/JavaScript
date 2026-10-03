let secreto = Math.floor(Math.random() * 10) + 1;
let intento;
let contador = 0;

while (intento !== secreto) {
    intento = Number(prompt("Adivina el número (entre 1 y 10):"));
    contador++;

    if (!Number.isFinite(intento) || intento < 1 || intento > 10) {
        alert("⚠️ Introduce un número válido entre 1 y 10.");
    } else if (intento < secreto) {
        alert("🔼 El número secreto es mayor.");
    } else if (intento > secreto) {
        alert("🔽 El número secreto es menor.");
    } else {
        alert(`🎯 ¡Correcto! El número era ${secreto}. Lo adivinaste en ${contador} intento(s).`);
    }

} ;
