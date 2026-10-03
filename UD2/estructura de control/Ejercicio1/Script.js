let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));

if (Number.isFinite(num1) && Number.isFinite(num2)) {
    if (num1 === num2) {
        alert("Los números son iguales.");
    } else if (num1 > num2) {
        alert("El primero es mayor que el segundo.");
    } else {
        alert("El segundo es mayor que el primero.");
    }
} else {
    alert("⚠️ Debes introducir números válidos.");
}