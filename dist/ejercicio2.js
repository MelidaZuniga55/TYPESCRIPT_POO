"use strict";
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0)
            throw new Error("División por cero no permitida");
        return a / b;
    }
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    factorial(n) {
        if (n < 0)
            return NaN;
        let resultado = 1;
        for (let i = 2; i <= n; i++)
            resultado *= i;
        return resultado;
    }
}
// Crear objeto y probar métodos
const calc = new Calculadora();
console.log("Suma:", calc.sumar(4, 6));
console.log("Factorial:", calc.factorial(5));
