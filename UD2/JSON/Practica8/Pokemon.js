const listadoPokemon = `https://pokeapi.co/api/v2/pokemon?limit=5`

const promesaListaPokemon = fetch(listadoPokemon)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(pokemon => {
        console.log("Objeto Pokemon ", pokemon);
        console.log("tipo Pokemon", typeof pokemon);

    })

function MostrarNombres(pokemon) {
    const nombres = pokemon.nombres
        .map(nombres => `<li>${nombres}</li>`)
        .join("");
    document.body.innerHTML += '<p>nombres</p>'


}

const urlPikachu = `https://pokeapi.co/api/v2/pokemon/pikachu`

const promesaPiKachu = fetch(urlPikachu)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(respuestaPikachu =>{
        console.log("Nombre ", respuestaPikachu.nombres)


    })
  