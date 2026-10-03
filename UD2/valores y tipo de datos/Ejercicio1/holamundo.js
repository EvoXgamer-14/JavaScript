const fecha = new Date();
const nombre = "Jaime";
alert(
    "Hola "+nombre+" , hoy es " + new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(fecha)
);