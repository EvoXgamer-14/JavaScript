class Libro {
    constructor(titulo, autor, numeroPaginas) {
        if (titulo === null || titulo === undefined || titulo === "") {
            throw new Error("titulo no puede estar vacio");
        }

        if (autor === null || autor === undefined || autor === "") {
            throw new Error("autor no puede estar vacio");
        }
        if (isNaN(numeroPaginas) || numeroPaginas <= 0) {
            throw new Error("no puede tener paginas negativas");
        }
        this.autor = autor;
        this.titulo = titulo;
        this.numeroPaginas = numeroPaginas;

    }
    describir() {
        document.body.innerHTML += "<p>El titulo del libro es: " + this.titulo + "</p><p>El autor es: " + this.autor + "</p><p>El numero de páginas es: " + this.numeroPaginas;
    }

    esExtenso() {
        if (this.numeroPaginas >= 300) {
            return true;
        }
        else {
            return false;
        }
    }

}

const libro = new Libro("venos", "jajs", 300);
libro.describir();
console.log(libro.esExtenso());


