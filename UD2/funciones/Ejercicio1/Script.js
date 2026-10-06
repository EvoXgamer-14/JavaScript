function pasarDolar(conversion = 1.01){
    let Euros = prompt("Introduce la cantidad de Euros a convertir a Dólares");
    let Dolar = Euros * conversion;
    console.log(Euros + " Euros son " + Dolar + " Dólares");
}
pasarDolar();