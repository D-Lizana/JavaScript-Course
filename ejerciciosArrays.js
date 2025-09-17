//Ejercicio 1

let palabras = ['good','search','pepper','gallina'];

for(let i=0; i<palabras.length;i++){

    if(palabras[i] === 'search'){
        console.log(i);
    }
    else{
        console.log(-1);
    }

}

let palabras2 = ['good','search','pepper','search','gallina'];

for(let i=0; i<palabras2.length;i++){

    if(palabras2[i] === 'search'){
        console.log(i);
        break;
    }
    else{
        console.log(-1);
    }

}


// Ejercicio 2

function findIndex(array,palabra){

    for(let i=0; i<array.length;i++){

        if(array[i] === palabra){
            return i;
        }
        else{
            return -1;
        }
    }
}

findIndex(palabras2,'search');


// Ejercicio 3

function removeEggs(foods){

    let nuevoArray = []
    let count = 0;

    for(let i=0; i<foods.length;i++){

        if(foods[i] === 'egg'){
            if(count < 2){
                count++;
                continue;
            }
            else{
                nuevoArray.push(foods[i]);
            }
        }
        else{
            nuevoArray.push(foods[i]);
        }
    }

    return nuevoArray.reverse();
}


// Ejercicio 4

for(let i=0; i<20; i++){

    if(i%3===0){
        console.log('Fizz')
    }
    else if(i%5===0){
        console.log('Buzz')
    }
    else if(i%3===0 && i%5===0){
        console.log('FizzBuzz')
    }
    else{
        console.log(i)
    }
}








