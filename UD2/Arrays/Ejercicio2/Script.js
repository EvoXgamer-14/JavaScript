function mover(pasillo, ordenes){
    let posicion;
    do{
        posicion = Math.floor(Math.random()*pasillo.length);
    }
    while (pasillo[posicion] === "🚧");
    let rechazadas = [];
    let posicionInicial = posicion;
    pasillo[posicion] = "🤖";

    document.body.innerHTML += "<p>Pasillo inicial: "+pasillo.join(",")+"</p>";
    for(let orden of ordenes){
    let nuevaPosicion = posicion;
    if(orden === "derecha")nuevaPosicion++;
    else if(orden === "izquierda")nuevaPosicion--;
    else{
        document.body.innerHTML += "<p>"+orden+": Orden desconocida</p>";
        continue;
        }
    if (nuevaPosicion < 0 || nuevaPosicion >= pasillo.length){
        document.body.innerHTML += "<p>"+orden+":Orden rechazada, el robot se sale del pasillo</p>";
        rechazadas.push(orden);
        continue;
        }
    if (pasillo[nuevaPosicion] === "🚧"){
        document.body.innerHTML += "<p>"+orden+": Orden rechazada, el robot se choca con un obstáculo</p>";
        rechazadas.push(orden);
        continue;
        }
        posicion = nuevaPosicion;
        document.body.innerHTML += "<p>"+orden+": Orden aceptada, el robot se mueve a la posición "+posicion+"</p>";
    }

    let pasilloFinal = [...pasillo];

    pasilloFinal[posicionInicial]= "_"
    pasilloFinal[posicion] = "🏁";
    document.body.innerHTML += "<p>Pasillo final: "+pasilloFinal.join(",")+"</p>";
    document.body.innerHTML += "<p>Órdenes rechazadas: "+rechazadas.join(", ")+"</p>";
}
let pasillo = ["_","_","🚧","_","_","_","_"];
let ordenes = ["derecha","derecha","izquierda","izquierda"];

mover(pasillo, ordenes);