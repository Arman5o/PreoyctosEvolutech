if(-1 > 0){
    console.log("El nnumero 6 es mayor que 0");
}
else{
    console.log("No es mayor");
}

let edad = 18;
if(edad >= 18){
    console.log("si puedes votar");
}
else{
    console.log("no puedes votar");
}

let a = 2;
if (a > 0) {
    console.log(a+ " es un numero positivo");
}
else if(a < 0){
    console.log(a + " es un numero negativo");
}
else if (a===0) {
    console.log(a+ " es un numero cero");
}
else{
    console.log(a + " no es un numero");
}

let clima = "soleado";
if (clima === "lluvioso") {
    console.log("Nesesitas un paraguas");
    if (clima === "nublado"){
        console.log("Necesitas una chaquea");
    }
}
else{
    console.log("el clima no es valido");
}

let clima1 = "soleado";
switch (clima1) {
    case "lluvioso":
        console.log("necesitas un paraguas");
        break;
    case "nublado":
        console.log("Necesitas una chaqueta");
        break;
    case "soleado":
        console.log("Necesitas un sombrero");
        break;

    default: 
        console.log("El clima no es valido");
        break;
}