

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



function convertToCelsius(fahrenheit){
    let result = (fahrenheit -32)* 5/9;
    return result;
}

convertToCelsius(100);


function convertTemperature(degrees,unit){
    if(unit === 'C'){
        convertToFahrenheit(degrees);
    }
    else if(unit === 'F'){
        convertToCelsius(degrees);
    }
    else{
        console.log('Incorrect unit, select C or F')
    }
} 

