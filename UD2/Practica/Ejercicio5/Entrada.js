let edad = Number(prompt("Introduce tu edad:"));
let nota = Number(prompt("Introduce tu nota media (0 a 10):"));

if (Number.isFinite(edad) && Number.isFinite(nota) && nota >= 0 && nota <= 10 && edad > 0) {

    console.log("Nota con dos decimales:", nota.toFixed(2));

    let suma = edad + nota;
    let resta = edad - nota;
    let multiplicacion = edad * nota;
    let division = edad / nota;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);

    let divisionString = String(division);
    console.log("División como string:", divisionString);

    let esValido = true;
    console.log("Variable booleana:", esValido);

    console.log("Tipo de edad:", typeof edad);
    console.log("Tipo de nota:", typeof nota);
    console.log("Tipo de esValido:", typeof esValido);
    console.log("Tipo de divisionString:", typeof divisionString);

} else {
    console.log("⚠️ Error: valores no válidos. La nota debe estar entre 0 y 10, y la edad debe ser positiva.");
}
