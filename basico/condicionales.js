let edad = 18;
if (edad >= 18) {
    console.log("Si puedes votar");} else {
        console.log("No puedes votar");
    }
    //  if || else if || else
    let a = -2;
    if (a > 0) {
    console.log(a + " es un numero positivo.");} else {
        console.log(a + " es un munero negativo");
    }
    // EJEMPLO DE NUMEROS MAYORES Y MENORES
    let a1 = 2; let a2 = 'e';
    if (a1 > a2) {
    console.log(a1 + " es mayor que " + a2);
} else if(a1 < a2){
    console.log(a1 + " es menor que " + a2);
    } else if (a1 == a2) {
        console.log("Son numeros son iguales");
    } else {
        console.log("No es un numero");
    }
    // EJEMPLO DEL CLIMA
    let clima = 'cuvasco'
    if (clima == 'lluvioso') {
        console.log("Necesitas un paraguas");
    } else if (clima == 'nublado') {
        console.log("Necesitas una chaqueta");
    } else if (clima == "soleado") {
        console.log("Necesitas un sombrero");
    } else {
        console.log("El clima no es valido");
    }
    // EJEMPLO DE LOS "SWITCH"
    let clima2 = 'a';
    switch (clima2) {
        case 'lluviso':
            console.log("Necesitas un paraguas");
            break;
        case 'nublado':
            console.log("Necesitas una chaqueta");
            break;
        case 'soleado':
            console.log("Necesitas un sombrero");
            break;
        default:
            console.log("El clima no es valido");
            break;
    }
    //EJEMPLO CON NUMEROS
    let numeros = 5;
    switch (numeros) {
        case 1:
            console.log("El numero es uno");
            break;
        case 2:
            console.log("El numero es dos");
            break;
        case 3:
            console.log("El numero es tres");
            break;
        default:
            console.log("El numero no es valido");
            break;
    }