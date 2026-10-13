class Libro {
  constructor(titulo, autor, paginas) {
    if (!titulo || !autor || !Number.isInteger(paginas) || paginas <= 0) {
      throw new Error("Datos inválidos: título y autor deben tener texto, páginas debe ser entero > 0");
    }
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  describir() {
    return `${this.titulo} de ${this.autor}, ${this.paginas} páginas.`;
  }

  esExtenso() {
    return this.paginas >= 300
      ? `${this.titulo} es extenso`
      : `${this.titulo} NO es extenso`;
  }
}
