// let var const

let nombre='Maria' //String
let numero=true //String

let global='🌐'
{
    let local='✨'
    console.log(local);
    console.log(global);
    
}
console.log(global);


var globalV='🌐'
var globalV='🍔'
console.log(globalV);

{
    var localV='✨'
}
console.log(localV);

const globalV='🌐'
{
    const localV='✨'
    localV='🍟'
    console.log(localV);
    
}

// TIPOS DE DATOS PRIMITIVOS
'susana' // texto| cadenas |string
23423423   -2 -5 0  9.8 -7.5 // number
true, false // booleanos
null
undefined

let edad=24 //number

// TIPOS DE DATOS COMPLEJOS
// arreglos
['a','ana','cesar']
 [1,2,3,34,4,4]
let edades=[24,56,34,56]
console.log(edades);

 // objetos
{nombre:'juan', avatar:'👨'}

let usuario={nombre:'juan', edad:39}
console.log(usuario);

for (let i = 0; i < 5; i++) {
    console.log(i);
    
}
let cont=0
while (cont<5) {
    console.log(cont);
    cont ++
    
}

// funciones

function decirHola() {
    console.log('Hola a todos');
    
}
decirHola()

//callbacks
let decirHola=function () {
    console.log('hola desde una variable');
    
}

decirHola()


const sumar=(a,b)=>{
    return a+b
}
const restar=(a,b)=>{
        return a-b
}
function multiplicar(a,b) {
    return a*b
}

function calculadora(callback,num1,num2) {
    console.log(callback(num1,num2));
}
calculadora((a,b)=>a/b, 4,2)
calculadora(sumar,3,4)
calculadora(restar,5,4)
calculadora(multiplicar,5,4)

// Funciones puras

for (let i = 0; i < emojis.length; i++) {
  console.log(emojis[i]);
}
const emojis=['👨','😁','🤔']
const mostrarEmojis= emojis.map((emoji)=>emoji)
console.log(mostrarEmojis);


let bandera=true
if (true) {
    console.log('hola');
    bandera=true
    console.log(bandera);
    
} else {
    console.log('adios');
    bandera=false
    console.log(bandera);
}

let saludo= false? 'hola' :'adios'
console.log(saludo);
let bandera1= true? true:false
console.log(bandera1);

// console.log(2===2);
console.log('2'===2);
console.log('2'==2);















