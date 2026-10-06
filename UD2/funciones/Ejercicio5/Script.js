function esNotaValida(nota) {
    return Number.isFinite(nota) && nota >= 0 && nota <= 10;
}

function clasificarNota(nota) {
    if (nota < 5) return "Suspenso";
    if (nota < 7) return "Aprobado";
    if (nota < 9) return "Notable";
    return "Sobresaliente";
}

function calcularMedia(notas) {
    let suma = notas.reduce((x, n) => x + n, 0);
    return (suma / notas.length).toFixed(2);
}

function informeNotas() {
    let notas = [];
    let entrada;

    do {
        entrada = prompt("Introduce una nota (0–10) o -1 para terminar:");
        let nota = Number(entrada);

        if (entrada === "" || isNaN(nota)) {
            alert("Entrada no válida. Introduce un número.");
        } else if (nota === -1) {
            break;
        } else if (!esNotaValida(nota)) {
            alert("La nota debe estar entre 0 y 10.");
        } else {
            notas.push(nota);
        }
    } while (true);

    if (notas.length === 0) {
        alert("No se introdujo ninguna nota válida.");
        return;
    }

    let media = calcularMedia(notas);
    let max = Math.max(...notas);
    let min = Math.min(...notas);

    console.log("📋 INFORME DE NOTAS");
    console.log("-------------------");
    notas.forEach(n => console.log(`${n} → ${clasificarNota(n)}`));
    console.log(`\nTotal de notas: ${notas.length}`);
    console.log(`Media: ${media}`);
    console.log(`Máxima: ${max}`);
    console.log(`Mínima: ${min}`);
}


informeNotas();