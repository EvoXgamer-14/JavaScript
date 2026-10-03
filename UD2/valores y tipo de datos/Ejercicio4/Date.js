
let hoy = new Date();

let dia = hoy.getDate();
console.log("Día del mes:", dia);

let mes = hoy.getMonth() + 1;
console.log("Mes:", mes);


let año = hoy.getFullYear();
console.log("Año:", año);

let formatoES = new Intl.DateTimeFormat("es-ES", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}).format(hoy);

console.log("Fecha completa:", formatoES);
