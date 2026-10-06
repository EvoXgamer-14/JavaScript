function calcularInforme(...numeros) {

    if (numeros.length === 0) {
        return "No se han introducido números.";
    }

    for (let n of numeros) {
        if (!Number.isFinite(n)) {
            return "Error: todos los valores deben ser números válidos.";
        }
    }

    let suma = 0;
    let min = numeros[0];
    let max = numeros[0];

    for (let n of numeros) {
        suma += n;
        if (n < min) min = n;
        if (n > max) max = n;
    }

    let media = suma / numeros.length;

    return { suma, media, min, max, cantidad: numeros.length };
}

function mostrarInforme(informe) {
    if (typeof informe === "string") {
        console.log(informe);
    } else {
        console.log(`INFORME DE NÚMEROS
-------------------------
Cantidad: ${informe.cantidad}
Suma total: ${informe.suma}
Media: ${informe.media.toFixed(2)}
Mínimo: ${informe.min}
Máximo: ${informe.max}`);
    }
}

mostrarInforme(calcularInforme(5, 10, 15, 20));
mostrarInforme(calcularInforme(-3, 0, 3, 6, 9));
mostrarInforme(calcularInforme()); 
mostrarInforme(calcularInforme(10, "hola", 20)); 

let valores = [2, 4, 6, 8, 10];
mostrarInforme(calcularInforme(...valores));
