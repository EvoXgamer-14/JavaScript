let numero = Number(prompt("Introduce un número:"));

if (Number.isFinite(numero)) {
    if (numero % 2 === 0) {
        alert(`El número ${numero} es PAR 🟢`);
    } else {
        alert(`El número ${numero} es IMPAR 🔴`);
    }
} else {
    alert("⚠️ Debes introducir un número válido.");
}
