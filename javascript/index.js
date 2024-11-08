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

