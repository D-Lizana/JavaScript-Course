

function greet(name){
    if(!name){
        console.log('Hi there!')
    }
    else{
        console.log(`Hello, ${name}!`);
    }
}   

greet('Pepe');


function convertToFahrenheit(celsius){
    let result = (celsius * 9/5)+32;
    return result;
}

convertToFahrenheit(36.5);


