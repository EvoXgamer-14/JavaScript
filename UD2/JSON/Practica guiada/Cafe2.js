const urlCafe = "https://api.sampleapis.com/coffee/hot/2";

async function obtenerCafe() {
  document.body.innerHTML = "<h1>Catálogo de cafés</h1><p>Cargando...</p>";

  try {
    const respuesta = await fetch(urlCafe);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const cafe = await respuesta.json();
    console.log("Café recibido:", cafe);
    mostrarCafe(cafe);
  } catch (error) {
    console.error("No se pudo obtener el café:", error.message);
    document.body.innerHTML = `
      <h1>Catálogo de cafés</h1>
      <p>No se pudo cargar el café: ${error.message}</p>
    `;
  } finally {
    console.log("Petición terminada");
  }
}

obtenerCafe();