let nombre = "Jaime";
let apellido1 = "López";
let apellido2 = "Amezcua";

let completo = nombre + " " + apellido1 + " " + apellido2;
console.log("Nombre completo:", completo);

console.log("Longitud:", completo.length);

console.log("Caracteres 7 a 10:", completo.slice(7, 10));

let reemplazado = completo.replace(apellido2, "Martínez");
console.log("Reemplazado:", reemplazado);

console.log("Mayúsculas:", completo.toUpperCase());

console.log("Último carácter:", completo.charAt(completo.length - 1));

let array = completo.split(" ");
console.log("Array:", array);

console.log("Posición del primer apellido:", completo.indexOf(apellido1));

console.log(`Bienvenido/a ${completo}`);

let iniciales = nombre.charAt(0).toUpperCase() +
                apellido1.charAt(0).toUpperCase() +
                apellido2.charAt(0).toUpperCase();

console.log("Iniciales:", iniciales);
