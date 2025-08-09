"use strict";
class Cancion {
    constructor(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = "Desconocido";
    }
    // Get y Set para autor
    getAutor() {
        return this.autor;
    }
    setAutor(autorParam) {
        this.autor = autorParam;
    }
    // Mostrar datos
    mostrarDatos() {
        console.log("Titulo:", this.titulo);
        console.log("Genero:", this.genero);
        console.log("Autor:", this.autor);
    }
}
// Crear objeto
const cancion1 = new Cancion("Viento", "Rock alternativo");
cancion1.setAutor("Caifanes");
cancion1.mostrarDatos();
