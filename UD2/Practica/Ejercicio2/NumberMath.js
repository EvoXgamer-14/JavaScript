let r = 3.5;

    if(Number.isFinite(r)){
    let a = Math.PI*r*r;
    let con3 = a.toFixed(3);
    let texto = String(a);
    let entero = parseInt(a);
    let redondeado = Math.round(a);
    let random = Math.floor(Math.random()*20)+1;
    let randmultiplicado = random*a;

    console.log("El area del circulo es: " + texto + "\n"+ 
    "El area del circulo con 3 decimales es: " + con3 + "\n"+
    "El area del circulo como numero entero es: " + entero + "\n" +
    "El area del circulo redondeada es: " + redondeado + "\n" +
    "El area del circulo multiplicada por un numero aleatorio "+ random +" es: " + randmultiplicado);

    }
    else{
        console.log("El valor de r no es un numero finito");
    }