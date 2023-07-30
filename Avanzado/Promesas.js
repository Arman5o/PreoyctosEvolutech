console.log('primera tarea');
console.log('segunda tarea');
console.log('tercera tarea');

setTimeout(() => {
    console.log('cuarta tarea');
}, 12000);
console.log('quinta tarea');

 // Pendiente : estado inicial, no es cumplida ni rechazada
 // Cumplido :operacion de completo con exito
 // Rechazado : operacion fallo

// CONSTRUCTOR PROMESAS
const promesas = new Promise((resolve, reject)=>{
    resolve('satisfactorio')
    reject('Falla')
})
 //ejemplo aplicativo
const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'js']
        //const skills = []
        if (skills.length > 0) {
            resolve(`Habilidades; ${skills}`);
        } else {
            reject("No hay habilidades");}
    }, 3000);})
    promesa
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))

const promesa2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let skills = ['HTML', 'CSS', /*'Node'*/]
        if(skills.includes('Node')){
            resolve('Fullstack developer')
        } else{
            reject('Falta Node en las habilidades')}
    },3000) })
promesa2
.then(resultado=>console.log(resultado))
.catch(error => console.log(error))

// FETCH
let url1 = 'https://rickandmortyapi.com/api'
fetch(url1)
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.log(error))
 
let url = 'https://rickandmortyapi.com/api/character'
fetch(url)
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.log(error))

//Async await
//const cuadrado = async function (n) {
//    return n * n }
//const valor = await cuadrado(2)
//console.log(valor);

let url2 = 'https://rickandmortyapi.com/api/character'
const fetchData =async ()=>{
    try {
        const respuesta = await fetch(url2)
        const data = await respuesta.json()
        console.log(data);
    } catch (error){
        console.log(error);
    }}
fetchData()
