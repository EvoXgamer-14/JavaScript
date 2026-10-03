let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));

if (Number.isFinite(num1) && Number.isFinite(num2) && num1 !== 0 && num2 !== 0) {
    if (num1 === num2) {
        alert("Los números son iguales.");
    } else if (num1 > num2) {
        alert("El primero es mayor que el segundo.");
    } else {
        alert("El segundo es mayor que el primero.");
    }
} else {
    alert("⚠️ Error: ambos valores deben ser números válidos y distintos de cero.");
}
