let palabra = prompt("Introduce una palabra:").toLowerCase();
let contador = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if ("aeiou".includes(letra)) {
        contador++;
    }
}

alert(`La palabra "${palabra}" contiene ${contador} vocal(es).`);
