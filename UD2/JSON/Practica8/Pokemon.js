const listadoPokemon = `https://pokeapi.co/api/v2/pokemon?limit=5`

const promesaListaPokemon = fetch(listadoPokemon)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(pokemon => {
        console.log("Objeto Pokemon ", pokemon);
        console.log("tipo Pokemon", typeof pokemon);

    });

function MostrarNombres(pokemon) {
    const nombres = pokemon.name
        .map(nombres => `<li>${nombres}</li>`)
        .join("");
    document.body.innerHTML += '<p>nombres</p>';


}

const urlPikachu = `https://pokeapi.co/api/v2/pokemon/pikachu`;

const promesaPiKachu = fetch(urlPikachu)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(respuestaPikachu => {
        const nombre = respuestaPikachu.name;
        const numero = respuestaPikachu.id;
        const primerTipo = respuestaPikachu.types[0].type.name;
        const urlImage = respuestaPikachu.sprites.front_default;
        console.log("Nombre ", nombre);
        console.log("Numero:", numero);
        console.log("Tipo principal:", primerTipo);
        console.log("URL imagen:", urlImage);

        document.body.innerHTML += `<div class="tarjeta-pokemon" style="border: 1px solid #ccc; 
         padding: 16px; border-radius: 8px; width: 200px; 
         text-align: center; font-family: sans-serif;">
        <img src="${urlImage}" alt="${nombre}" style="width: 100px; height: 100px;" />
        <h2>${nombre.toUpperCase()}</h2>
        <p><strong>Número:</strong> #${numero}</p>
        <p><strong>Tipo:</strong> ${primerTipo}</p>
      </div>`;
    })
    .catch(error => console.error("Error al pedir el Pokémon:", error));

fetch(listadoPokemon)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(dataListado => {
        const urlPrimerPokemon = dataListado.results[0].url;
        return fetch(urlPrimerPokemon);
    })
    .then(respuestaDetalle => {
        return respuestaDetalle.json();
    })
    .then(respuestaPokemon => {
        const nombre = respuestaPokemon.name;
        const numero = respuestaPokemon.id;
        const primerTipo = respuestaPokemon.types[0].type.name;
        const urlImage = respuestaPokemon.sprites.front_default;

        console.log("Primer pokemon del listado");
        console.log("Nombre:", nombre);
        console.log("Numero", numero);

        document.body.innerHTML += `<div class="tarjeta-pokemon" style="border: 1px solid #ccc; 
      padding: 16px; border-radius: 8px; 
      width: 200px; text-align: center; font-family: sans-serif; 
      margin-top: 20px; background-color: #f9f9f9;">
        <img src="${urlImage}" alt="${nombre}" style="width: 100px; height: 100px;" />
        <h2>${nombre.toUpperCase()}</h2>
        <p><strong>Número:</strong> #${numero}</p>
        <p><strong>Tipo:</strong> ${primerTipo}</p>
      </div>`;
    })
    .catch(error => console.error("Error en la cadena de peticiones:", error));


function obtenerDatos(url) {
    return fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error(`Error en la peticion: ${respuesta.status}`);
            }
            return respuesta.json();
        });
}
function mostrarPokemon(pokemon) {
    const nombre = pokemon.name;
    const numero = pokemon.id;
    const primerTipo = pokemon.types[0].type.name;
    const urlImage = pokemon.sprites.front_default;

    document.body.innerHTML += `<div class="tarjeta-pokemon" style="border: 1px solid #ccc; 
    padding: 16px; border-radius: 8px; width: 200px; text-align: center; 
    font-family: sans-serif; margin-top: 20px; background-color: #fff;">
      <img src="${urlImage}" alt="${nombre}" style="width: 100px; height: 100px;" />
      <h2>${nombre.toUpperCase()}</h2>
      <p><strong>Número:</strong> #${numero}</p>
      <p><strong>Tipo:</strong> ${primerTipo}</p>
    </div>`;
}
/*
const urlNoExiste = `https://pokeapi.co`;

document.body.innerHTML += `<p id="mensaje-carga">Cargando...</p>`;

obtenerDatos(urlNoExiste)
    .then(pokemon => {
        mostrarPokemon(pokemon);
    })
    .catch(error => {
        document.body.innerHTML += `
      <p style="color: red; font-weight: bold; font-family: sans-serif; margin-top: 20px;">
        Error: No se pudo cargar el Pokémon (${error.message}).
      </p>
    `;
    })
    .finally(() => {
        const elementoCarga = document.getElementById("mensaje-carga");
        if (elementoCarga) elementoCarga.remove();
        console.log("La petición ha terminado.");
    });
*/
function esperar(ms) {
    return new Promise(resolver => setTimeout(resolver, ms));
}


document.body.innerHTML += `<p id="carga-espera">Cargando... (Espera de 5 segundos)</p>`;

esperar(5000)
    .then(() => {
        const txtCarga = document.getElementById("carga-espera");
        if (txtCarga) txtCarga.remove();

        return obtenerDatos(urlPikachu);
    })
    .then(pokemon => {
        mostrarPokemon(pokemon);
    })
    .catch(error => console.error("Error en la espera/petición:", error));

async function gestionarListadoPokemon() {
    document.body.innerHTML += `<p id="carga-async">Cargando listado con async/await...</p>`;

    try {
        const dataListado = await obtenerDatos(listadoPokemon);
        const urlPrimerPokemon = dataListado.results[0].url;
        const detallePokemon = await obtenerDatos(urlPrimerPokemon);

        mostrarPokemon(detallePokemon);

    } catch (error) {
        document.body.innerHTML += `<p style="color: darkred; font-weight: bold; 
        font-family: sans-serif;">
        Error en async/await: ${error.message}
      </p>`;
    } finally {
        const txtCargaAsync = document.getElementById("carga-async");
        if (txtCargaAsync) txtCargaAsync.remove();

        console.log("La petición async/await ha terminado.");
    }
}
gestionarListadoPokemon();
