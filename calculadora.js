let a = 10
let b = 2
let resul
function calcular(operacion, a, b) {
        
    if (operacion === 'suma') {
        resul = a + b;
    } else if (operacion === 'resta') {
        resul = a - b;
    } else if (operacion === 'multiplicacion') {
        resul = a * b;
    } else if (operacion === 'division') {
        if (b !== 0) {
        resul = a / b;
        } else {
        console.log('No se puede dividir por cero');
        return;
        }
    } else {
        console.log('Operación no válida');
        return;
    }
      
    console.log('El resul es: ' + resul);
}

calcular('suma', a, b);
calcular('resta', a, b);
calcular('multiplicacion', a, b);
calcular('division', a, b);

