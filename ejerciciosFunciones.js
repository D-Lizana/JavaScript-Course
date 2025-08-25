
//  Ejercicio 1
function greet(name){
    if(!name){
        console.log('Hi there!')
    }
    else{
        console.log(`Hello, ${name}!`);
    }
}   

greet('Pepe');

// Ejercicio 2
function convertToFahrenheit(celsius){
    let result = (celsius * 9/5)+32;
    return result;
}

convertToFahrenheit(36.5);


// Ejercicio 3
function convertToCelsius(fahrenheit){
    let result = (fahrenheit -32)* 5/9;
    return result;
}

convertToCelsius(100);

// Ejercicio 4
function convertTemperature(degrees,unit){
    if(unit === 'C'){
        return `${convertToFahrenheit(degrees)}`;
    }
    else if(unit === 'F'){
        return `${convertToCelsius(degrees)}`;
    }
    else{
        console.log('Incorrect unit, select C or F')
    }
} 



// Ejercicio 5

function kmToMiles(km){
    return km/1.6
}

function milesToKm(miles){
    return miles*1.6
}


function convertLength(length,from,to){
    if(from === 'miles'){
        if(to === 'km'){
            return milesToKm(length);
        }
        else if(to === 'miles'){
            return length;
        }
    }
    else if(from === 'km'){
        if(to === 'miles'){
            return kmToMiles(length);
        }
        else if (to === 'km'){
            return length;
        }
    }
    else{
        return `Invalid unit: ${from}`;
    }
    
}