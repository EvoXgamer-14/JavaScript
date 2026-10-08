class Catalogo {
    constructor(...libros) {
        this.libros = libros;


    }
    agregar(libro) {
        this.libros.push(libro);
        console.log(catalogo.libros);
    }


}
let libros = [];
let catalogo = new Catalogo(libros);
catalogo.agregar(libro);