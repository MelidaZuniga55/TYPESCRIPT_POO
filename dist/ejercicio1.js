"use strict";
// Clase para representar una cabecera de página web
class CabeceraPagina {
    constructor(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "centro"; // Valor por defecto
    }
    // Método para configurar cómo se alinea el título
    configurarAlineacion(alineacion) {
        this.alineacion = alineacion;
    }
    // Método que muestra todas las propiedades
    mostrarCabecera() {
        console.log("Título:", this.titulo);
        console.log("Color:", this.color);
        console.log("Fuente:", this.fuente);
        console.log("Alineación:", this.alineacion);
    }
}
// Crear objeto y usar métodos
const cabecera1 = new CabeceraPagina("Mi Página", "Negro", "Arial");
cabecera1.configurarAlineacion("derecha");
cabecera1.mostrarCabecera();
