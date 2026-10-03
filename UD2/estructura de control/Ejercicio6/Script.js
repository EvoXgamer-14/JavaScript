let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));

if (Number.isFinite(num1) && Number.isFinite(num2)) {
  
    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);

    let resultado = "";

    for (let i = inicio; i <= fin; i++) {
        resultado += i + " ";
    }

    alert(`Números comprendidos entre ${inicio} y ${fin}:\n${resultado}`);
} else {
    alert("⚠️ Error: debes introducir números válidos.");
}
