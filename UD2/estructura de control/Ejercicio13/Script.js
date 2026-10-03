let numero = Number(prompt("Introduce un número:"));

if (Number.isFinite(numero) && numero > 0) {
    let divisores = "";

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores += i + " ";
        }
    }

    alert(`Los divisores de ${numero} son:\n${divisores}`);
} else {
    alert("⚠️ Debes introducir un número válido y mayor que 0.");
}
