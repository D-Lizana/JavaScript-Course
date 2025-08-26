
// Ejercicio 1

const producto1 = {
    nombre: 'pelota baloncesto',
    precio: 2095
}

const producto2 = {
    nombre: 'pelota futbol',
    precio: 2095
}

console.log(producto1)

producto1.precio += 500;

producto1['delivery-time'] = '3 days';

function comparePrice(producto1, producto2){
    if(producto1.precio > producto2.precio){
        console.log(`El producto 1 es mas caro.`)
    }
    else if(producto1.precio < producto2.precio){
        console.log(`El producto 2 es mas caro.`)
    }
    else{
        console.log('Cuestan lo mismo')
    }
}


// Ejercicio 2


function isSameProduct(producto1, producto2){
    if(producto1.precio == producto2.precio && producto1.name === producto2.name){
        return true;
    }
    else{
        return false;
    }
}

let string = 'FRASE PARA CONVERTIR';
string.toLowerCase();
console.log(string)


let palabra = 'hola';
let repetido = palabra.repeat(3);
console.log(repetido);


