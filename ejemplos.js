//! var vs let vs const
var nombre="maria"
console.log(nombre)

let edad=19
console.log(edad)

const genero="M"
console.log(genero)
"use strict"

let height = 180 // -> Uncaught ReferenceError: height is not defined
console.log(height)

// partes de la casa
cosina
{
    let nombre ="cosina"
    console.log()
}
baño
{

}
patio
{

}

let user = [{
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
}, {
    name: "Calvin",
    surname: "Hart",
    age: 632,
    email: "CalvinMHart@teleworm.us"
}]
console.log(user);
console.log(user[0].age);


let user2 = {name: "Calvin",surname: "Hart",age: 66,email: "CalvinMHart@teleworm.us"}
let datos = {nombre: "Armando", apellido: "Gamboa", edad:"19", email:"armandogamboaorellana@email.com"}
let user1 = {nomde: "Humberto", apellido: "Famco", edad:"19", email: "fmancia@email.com"}
console.log(user2, datos, user1);

let nomb = "Jose"
nomb[2] = "l"
console.log(nomb);



let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
console.log(dias[0]);
console.log(dias[1]);
console.log(dias[2]);
console.log(dias[3]);
console.log(dias[4]);
console.log(dias[5]);
console.log(dias[6]);


dias[0] = "martes";
console.log(dias[0]);
console.log(dias);

let animal = []
animal[0] = "perro";
animal[2] = "pez";
animal[3] = "gato";
//console.log(animal[0]);
//console.log(animal[3]);
//console.log(animal[2]);
console.log(animal);

let dias = [["lunes", "martes", "miercoles"], ["jueves", "viernes", "sabado", "domingo"]]
console.log(dias[0][2]);
console.log(dias[1][0]);

//let arr = Array(10)
//console.log(arr);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "sunday";
console.log(typeof days);
console.log(typeof day);

console.log(days instanceof Array);
console.log(day instanceof Array);

console.log(days.length);
day[7] = "pet";
console.log(days);
console.log(days[3]);

let days1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days1.indexOf("Sun"));
console.log(days1.indexOf("Sat"));

//METIDOS Indexof, lastIndexOf
let frutas = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sun", "Sat"];
console.log(frutas.indexOf("Sun"));
console.log(frutas.lastIndexOf("Sun"));

// Push
let frutas1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sun", "Sat"];
//frutas1[5] = "Rat";
frutas1.push("Men") // PUSH coloca el mensaje en la cola del array
console.log(frutas1);

// pop  = sirve para eliminar el final de nuestro arreglo
let frutas2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sun", "Sat"];
frutas2.pop()
console.log(frutas2);
//unshift   inserta el valor al inicio del arreglo
let frutas3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sun", "Sat"];
frutas3.unshift("Arr");
console.log(frutas3);
//shift
let frutas4 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sun", "Sat"];
frutas4.shift()
console.log(frutas4);
// length
let frutas5 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sun", "Sat"];
console.log(frutas5.length);
// reverse
let frutas6 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sun", "Sat"];
console.log(frutas6.reverse());
//slice  permite crear arreglos 
let namess = ["Jose", "Armando", "Juan", "Pedro", "Carlos", "thalia"];
//2
console.log("2");
let n1 = namess.slice(2);
console.log(n1);         //[ 'Juan', 'Pedro', 'Carlos', 'thalia' ]

console.log("1,4");
let n2 = namess.slice(1,4)
console.log(n2);         //[ 'Armando', 'Juan', 'Pedro' ]

console.log("0,-2");
let n3 = namess.slice(0,-2);
console.log(n3);         //[ 'Jose', 'Armando', 'Juan', 'Pedro' ]

console.log("-2");
let n4 = namess.slice(-2);
console.log(n4);         //[ 'Carlos', 'thalia' ]
//concat sirve para concatenar dos arreglos
let frutass = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sun", "Sat"];
let names1 = ["Jose", "Armando", "Juan", "Pedro", "Carlos", "thalia"];
 let frutasnames1 = frutass.concat(names1);
 console.log(frutasnames1);
 


let participantes = [["Jose", "Armando", "Juan"], ["Pedro", "Carlos", "thalia"]]
console.log(participantes[0][1], "y", participantes[1][2]);



console.log(5 > 4);

console.log(false , true );


//CONCATENACION
let mensaje = "Hi"
console.log(mensaje+" "+"Alice");


// OPEACIONES DE COMPARACION (=== , ==)
"==="
console.log(10 === 5); //false
console.log(10===10); // true
console.log("10" === 10); //false

"=="
console.log(10==10); // true
console.log("\n",10 == 5); //false
console.log("10" == 10); //false
console.log(0 == false); //true

console.log(10 !== 5); //true
console.log(10 !==10); // false
console.log("10" !== 10); //true
console.log(0 !== false); //true

console.log(10 < 5); //false
console.log("10" <= 10); //true
console.log(10 > 10); // false
console.log(0 >= false); //true

let nr = "1";
let x = (nr === 1)
let y = (nr == 1)
let z = (nr = 1)
console.log(x, y, z);
let n11 = 
console.log(n);
let  n123 = 2 * 3**3-1;
console.log(n123);
let  n12 = 3 * 4>20-15;
console.log(n12);
let str = "12";
str = +str;
console.log(str);
console.log(false || "false"); // -> 2

let n = 10;
let m = ++n;
console.log(n,m);

let test = prompt ("Hello", "World")
console.log(test);

let n8 = 2;
//n8 = n8*n8*n8;
n8 **= n8;
//n ***= n8;
console.log(n8);


!(true && false || true);