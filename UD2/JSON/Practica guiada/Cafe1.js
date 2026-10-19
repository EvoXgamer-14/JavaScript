const urlCafe = "https://api.sampleapis.com/coffee/hot/2";
function obtenerDatos(url) {
    return fetch(url).then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        return respuesta.json();
    });
}

obtenerDatos(urlCafe)
    .then(cafe => {
        mostrarCafe(cafe);
    })
    .catch(error => {
        console.error("No se pudo obtener el café:", error.message);
    });

function mostrarCafe(cafe) {
    const ingredientes = cafe.ingredients
        .map(ingrediente => `<li>${ingrediente}</li>`)
        .join("");

    document.body.innerHTML = `
    <h1>Catálogo de cafés</h1>
    <article>
      <h2>${cafe.title}</h2>
      <img src="${cafe.image}" alt="${cafe.title}" height="300">
      <p>${cafe.description}</p>
      <h3>Ingredientes</h3>
      <ul>${ingredientes}</ul>
    </article>
  `;
}
