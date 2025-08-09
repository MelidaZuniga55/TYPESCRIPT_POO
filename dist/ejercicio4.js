"use strict";
class Cuenta {
    constructor(nombreParam, cantidadParam, tipoParam, numeroParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoParam;
        this.numeroCuenta = numeroParam;
    }
    // Método para depositar
    depositar(monto) {
        if (monto < 5) {
            console.log("El depósito debe ser mayor a $5.00");
        }
        else {
            this.cantidad += monto; // Suma el monto al saldo
            console.log(`Depósito exitoso: $${monto}. Saldo actual: $${this.cantidad}`);
        }
    }
    // Método para retirar
    retirar(valor) {
        if (this.cantidad <= 0) {
            console.log("No hay saldo disponible en la cuenta");
        }
        else if (valor < 5) {
            console.log("No se pueden retirar menos de $5.00");
        }
        else if (valor > this.cantidad) {
            console.log("Fondos insuficientes");
        }
        else {
            this.cantidad -= valor;
            console.log(`Retiro exitoso: $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }
    // Mostrar datos
    mostrarDatos() {
        console.log("Nombre:", this.nombre);
        console.log("Tipo de cuenta:", this.tipoCuenta);
        console.log("Número de cuenta:", this.numeroCuenta);
    }
}
// Crear objeto
const cuenta1 = new Cuenta("Andrea López", 100, "Ahorro", "1020304050");
cuenta1.depositar(50); // Deposita $50
cuenta1.retirar(20); // Retira $20
cuenta1.mostrarDatos();
