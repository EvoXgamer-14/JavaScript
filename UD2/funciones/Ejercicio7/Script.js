function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kmAMillas(km) {
    return km * 0.621371;
}

function millasAKm(millas) {
    return millas / 0.621371;
}

function eurosADolares(euros, cambio = 1.01) {
    return euros * cambio;
}

function mostrarResultado(origen, destino, valorOriginal, valorConvertido) {
    alert(`${valorOriginal} ${origen} equivalen a ${valorConvertido.toFixed(2)} ${destino}`);
}

function menuConversion() {
    let opcion;
    do {
        opcion = prompt(
`MENÚ DE CONVERSIÓN
1. Celsius → Fahrenheit
2. Fahrenheit → Celsius
3. Kilómetros → Millas
4. Millas → Kilómetros
5. Euros → Dólares
6. Salir
Elige una opción (1-6):`
        );

        switch (opcion) {
            case "1":
                let c = Number(prompt("Introduce grados Celsius:"));
                if (Number.isFinite(c)) mostrarResultado("°C", "°F", c, celsiusAFahrenheit(c));
                else alert("Valor no válido.");
                break;

            case "2":
                let f = Number(prompt("Introduce grados Fahrenheit:"));
                if (Number.isFinite(f)) mostrarResultado("°F", "°C", f, fahrenheitACelsius(f));
                else alert("Valor no válido.");
                break;

            case "3":
                let km = Number(prompt("Introduce kilómetros:"));
                if (Number.isFinite(km)) mostrarResultado("km", "millas", km, kmAMillas(km));
                else alert("Valor no válido.");
                break;

            case "4":
                let mi = Number(prompt("Introduce millas:"));
                if (Number.isFinite(mi)) mostrarResultado("millas", "km", mi, millasAKm(mi));
                else alert("Valor no válido.");
                break;

            case "5":
                let eur = Number(prompt("Introduce cantidad en euros:"));
                if (Number.isFinite(eur)) mostrarResultado("€", "$", eur, eurosADolares(eur));
                else alert("Valor no válido.");
                break;

            case "6":
                alert("Saliendo del programa...");
                break;

            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    } while (opcion !== "6");
}


menuConversion();
