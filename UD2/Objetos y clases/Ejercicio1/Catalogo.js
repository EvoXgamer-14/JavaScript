class Catalogo {
  constructor() {
    this.libros = [];
  }

  añadir(libro) {
    if (this.libros.some(l => l.titulo === libro.titulo)) {
      console.log(`Ya existe un libro con el título "${libro.titulo}".`);
      return;
    }
    this.libros.push(libro);
    document.body.innerHTML += `<p>Libro "${libro.titulo}" añadido al catálogo.</p>`;
  }

  eliminar(titulo) {
    const index = this.libros.findIndex(l => l.titulo === titulo);
    if (index === -1) {
      console.log(`No se encontró el libro "${titulo}".`);
      return;
    }
    this.libros.splice(index, 1);
    document.body.innerHTML += `<p>Libro "${titulo}" eliminado.</p>`;
  }

  consultar(titulo) {
    const libro = this.libros.find(l => l.titulo === titulo);
    if (!libro) {
      console.log(`Libro "${titulo}" no encontrado.`);
      return null;
    }
    document.body.innerHTML += `<p>${libro.describir()}</p>`;
    return libro;
  }

  listar() {
    document.body.innerHTML += "<br><h3>Catálogo completo:</h3>";
    this.libros.forEach(l => document.body.innerHTML += `<p>${l.describir()}</p>`);
  }
}
