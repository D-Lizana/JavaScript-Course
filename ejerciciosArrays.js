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
            console.log(i);
            break;
        }
        else{
            console.log(-1);
        }
    }
}