const libro1 = new Libro("El Hobbit", "J.R.R. Tolkien", 310);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 299);
const libro3 = new Libro("1984", "George Orwell", 328);

const catalogo = new Catalogo();
catalogo.añadir(libro1);
catalogo.añadir(libro2);
catalogo.añadir(libro3);

catalogo.listar();

document.body.innerHTML += `<br><p>${libro2.esExtenso()}</p>`; // false
document.body.innerHTML += `<p>${libro1.esExtenso()}</p>`; // true

catalogo.consultar("1984");
catalogo.eliminar("Cien años de soledad");
catalogo.listar();
