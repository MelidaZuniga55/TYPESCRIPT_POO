"use strict";
// Clase abstracta
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    verificarEdad() {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        }
        else {
            console.log("Es menor de edad");
        }
    }
}
// Empleado hereda de Persona
class Empleado extends Persona {
    constructor(nombre, apellido, direccion, telefono, edad, sueldo) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }
    cargarSueldo(sueldoParam) {
        this.sueldo = sueldoParam;
    }
    imprimirSueldo() {
        console.log(`Sueldo: $${this.sueldo}`);
    }
    mostrarDatos() {
        console.log("Nombre:", this.nombre, this.apellido);
        console.log("Dirección:", this.direccion);
        console.log("Teléfono:", this.telefono);
        console.log("Edad:", this.edad);
        console.log("Sueldo:", this.sueldo);
    }
}
// Crear objeto
const empleado1 = new Empleado("Carlos", "Mendoza", "La Libertad", "77889900", 30, 850);
empleado1.mostrarDatos();
empleado1.verificarEdad();
empleado1.imprimirSueldo();
