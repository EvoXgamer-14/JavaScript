
const palabras = ["sol","montaña","río","bosque","mariposa","luz","montaña"];

function cuentaPalabra(palabra){
let contador = 0;
for (let i=0; i < palabras.length; i++){
    if (palabra === palabras[i]){
        contador++
    }
}
return contador;
}

function arrayNuevo(){
    let nuevoArray = [];
    for (let i = 0; i < palabras.length; i++){
        if (palabras[i].length>4){
            nuevoArray.push(palabras[i]);
        }
    }
return nuevoArray;

}

function Posicion(palabra){
return palabras.indexOf(palabra)


}

console.log("Veces que aparece montaña: "+cuentaPalabra("montaña"));
console.log("Palabras com mas de 4 caracteres"+arrayNuevo());
console.log("primera posición de río: "+Posicion("rio"));
console.log("Primera posicion de nube: "+Posicion("nube"));
