// DESESTRUCTURACION
let numeros = [1, 2, 3]
// -----Primera forma
 // let numero1 = numero[0]
 // let numero2 = numero[1]
 // let numero3 = numero[2]
 // console.log(numero1);
 // console.log(numero2);
 // console.log(numero3);

// -----Segunda forma
let [numero1,numero2, numero3] = numeros
console.log(numero1);
console.log(numero2);
console.log(numero3);

let nombres = ['Enrique', 'Thalia', 'Grober']
let [nombre1, nombre2, nombre3] = nombres
console.log("\n",nombre1,"\n", nombre2,"\n", nombre3);

let fullstack = [
    ['HTML', 'CSS', 'JS', 'REACT'],
    ['Node', 'Express', 'MongoDB'],
]; const [FrontEnd, BackEnd] = fullstack
const frontendPlus = FrontEnd.push('angular');
console.log(frontendPlus);
console.log(FrontEnd,"\n", BackEnd);

let numeros1 = [1,2,3,4,5,6,7,8,9,10]
let [numero11, numero22, numero33,...rest] = numeros1
console.log(numero11, numero22, numero33);
console.log(rest);

let paises = [['Argentina', 'Buenos aires'], ['Bolivia', 'La paz'], ['España', 'Madrid']]
for (const [pais, ciudad] of paises){
    console.log(pais, ciudad);
}
// Objertos desestructuracion
const rectangulo = {
    ancho:20,
    altura:10,
    area:200}
let {ancho: a, altura: al, area: ar} = rectangulo
console.log(a, al, ar);

//Parametros de objeto sin desestructurar
const rectangulo1 ={
    alto:10,
    ancho:20,}
const calcularPerimetro = (rectangulo) =>{
    return 2 * (rectangulo.alto+rectangulo.ancho)}
console.log(calcularPerimetro(rectangulo1));

//Parametros de objeto con desestructurar
const rectangulo2 ={
    alto:10,
    ancho:2,}
const calcularPerimetro1 = ({alto,ancho}) =>{
    return 2 * (alto + ancho)}
console.log(calcularPerimetro1(rectangulo2));
// Pobjeto de desestrucyuracion durante la iteracion
const todolist=[{
    task:'Estudiar modulo 1',
    time:'2/03/2023',
    completed:false
},{
    task:'Estudiar modulo 2',
    time:'4/03/2023',
    completed:true
},{
    task:'Estudiar modulo 3',
    time:'6/03/2023',
    completed:false
}];
console.log(todolist);
for (const {task,time,completed} of todolist) {
    console.log(task, time, completed);
}

// OPERADOR DE PROPAGACION
let nums = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
let [n1, n2, n3,...resto ] = nums
console.log(resto);

//Operador de propagacion para copiar arreglos
const pares =[0,2,4,6,8,10]
const impares = [1,3,5,7,9]
const Numeroapares = pares
console.log(Numeroapares);
Numeroapares.push(12,14)
console.log(Numeroapares);
const todoNumero = [...pares,...impares]
console.log('todos los numeros', todoNumero);

//Operador de extencion paara copiar objetos
let user = {
    name:'john',
    age:'43',
    country:'Bolivia',
    city:'Cochabamba'}
let newUser = user
console.log(newUser);
newUser.phone=71772111
console.log(newUser, "new",user);
let copyUser={...user}
console.log('copia de usuario', copyUser);
copyUser.correo='agr@gmail.com'
console.log('Nuevo usuario', copyUser);

//Operador de propagacion con funcion de flecha
const sumatodNumero=(...args)=>{
    let suma=0
    for (const n of args) {
        suma=suma+n;
    };return suma;}
    //console.log(args);
console.log(sumatodNumero(1,2,3,4,5))