"use strict";
class CabeceraPagina {
    constructor(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "centro"; // Valor por defecto
    }
    // Primer método: obtener título, color y fuente
    obtenerDatos() {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    }
    // Segundo método: configurar alineación
    configurarAlineacion(alineacion) {
        this.alineacion = alineacion;
    }
    // Tercer método: imprimir todas las propiedades
    mostrarCabecera() {
        const datos = this.obtenerDatos();
        console.log("Título:", datos.titulo);
        console.log("Color:", datos.color);
        console.log("Fuente:", datos.fuente);
        console.log("Alineación:", this.alineacion);
    }
}
// Crear objeto y usar métodos
const cabecera1 = new CabeceraPagina("Mi Página", "Negro", "Arial");
cabecera1.configurarAlineacion("derecha");
cabecera1.mostrarCabecera();
