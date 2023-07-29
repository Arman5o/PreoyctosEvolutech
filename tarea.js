let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let b3 = 100n;
let b4 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;

console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${b3} [${typeof b3}]`);
console.log(`${b4} [${typeof b4}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);

let x = 20n + 10;
let xx = 100 / 0;
//console.log(b1, b2, ";", n1, n2, ";", );


//LABORATORIO

let contactos = [{
    Nombre: "Maxwell Wright",
    Telefono: "0191 719 6495",
    Correo: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    Nombre: "Raja Villarreal",
    Telefono: "0866 398 2895",
    Correo: "posuere.vulputate@sed.com"
    }, {
    Nombre: "Helen Richards",
    Telefono: "0800 1111",
    Correo: "libero@convallis.edu"
    }];

    console.log(contactos[0]);
    console.log(contactos[2]);





    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let numeroUsuario = 4;

    while (true) {
        const numeroUsuario = parseInt(prompt("adivina el numero (entre 1 y 100):"));
        if(numeroUsuario === numeroAleatorio) {
            console.log("Felicidades Adivinaste el numero en $(intentos) intentos.");
            break;
        }
        else if (numeroUsuario < numeroAleatorio) {
           console.log("el numero es mayor. Intenta de nuevamente");
        }
        else {
            console.log("el numero es menor. Intenta nuevamente")
        }

        intentos++;
    }









//let a = 3
//let b = 6
    function cal(a,b) {
        if (condition) {
            
        } else {
            
        }
        return
    }
    let a = 3
    let b = 6
    let resultado
    function calcular(operacion, n1, n2) {
        
      
        if (operacion === 'suma') {
          resultado = n1 + n2;
        } else if (operacion === 'resta') {
          resultado = n1 - n2;
        } else if (operacion === 'multiplicacion') {
          resultado = n1 * n2;
        } else if (operacion === 'division') {
          if (n2 !== 0) {
            resultado = n1 / n2;
          } else {
            console.log('No se puede dividir por cero');
            return;
          }
        } else {
          console.log('Operación no válida');
          return;
        }
      
        console.log('El resultado es: ' + resultado);
      }
      hola
      