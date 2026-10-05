let Euro; Number(prompt("Indica el precio en euro"));
let Conversion = 1.01;
let Dolar;

function pasarDolar(){
    Euro = Number(prompt("Indica el precio en euro"));

     Dolar = Euro * Conversion;
    return Dolar, Euro; 
}
console.log("Estos euros "+ Euro +" son "+Dolar+" Dollar");