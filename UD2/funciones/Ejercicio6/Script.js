function calcularLitros(distancia, consumo) {
    return (distancia * consumo) / 100;
}

function calcularCosteTotal(distancia, consumo, precio = 1.6) {
    let litros = calcularLitros(distancia, consumo);
    return litros * precio;
}

function calcularCostePorViajero(distancia, consumo, precio = 1.6, viajeros = 1) {
    if (viajeros <= 0) {
        console.log("El número de viajeros debe ser mayor que 0.");
        return null;
    }
    let total = calcularCosteTotal(distancia, consumo, precio);
    return (total / viajeros).toFixed(2);
}

function mostrarInforme(funcionCalculo, distancia, consumo, precio, viajeros) {
    let resultado = funcionCalculo(distancia, consumo, precio, viajeros);
    if (resultado !== null) {
        console.log(`Informe del viaje:
- Distancia: ${distancia} km
- Consumo: ${consumo} L/100km
- Precio combustible: ${precio} €/L
- Viajeros: ${viajeros}
- Coste total: ${calcularCosteTotal(distancia, consumo, precio).toFixed(2)} €
- Coste por viajero: ${resultado} €`);
    }
}

mostrarInforme(calcularCostePorViajero, 490, 7, 1.8, 2);