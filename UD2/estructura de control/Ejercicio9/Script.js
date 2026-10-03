let contraseña = "evox14";
let intento;

do {
    intento = prompt("Introduce la contraseña:");
    if (intento !== contraseña) {
        alert("❌ Contraseña incorrecta. Inténtalo de nuevo.");
    }
} while (intento !== contraseña);

alert("✅ Contraseña correcta. ¡Bienvenido!");
