let opcion; 

while (opcion !== 4){
    opcion = Number(prompt(
        "MENÚ DE NIVELES\n" +
        "1. Usuario principiante\n" +
        "2. Usuario intermedio\n" +
        "3. Usuario avanzado\n" +
        "4. Salir\n\n" +
        "Elige una opción (1-4):"
    ));

    switch (opcion) {
        case 1:
            alert("Has elegido el nivel: Usuario principiante 🟢");
            break;

        case 2:
            alert("Has elegido el nivel: Usuario intermedio 🟡");
            break;

        case 3:
            alert("Has elegido el nivel: Usuario avanzado 🔴");
            break;

        case 4:
            alert("Saliendo del programa...");
            break;

        default:
            alert("⚠️ Opción no válida. Debes elegir entre 1 y 4.");
            break;
    }
}
