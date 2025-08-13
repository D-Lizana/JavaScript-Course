
// Para variables añadir var
var nombre = "Joe";

var numero = 32;

// Un pop-up
alert(nombre);

// Un pop-up en ventana
window.alert(numero);

// console.log para meterlos en la consola en vez de la alerta. EL usuario ve las alertas pero solo el dev ve la consola
console.log(nombre);

//Similar a input en python, para guardar info en la variable
var tuNombre = prompt("¿Cómo te llamas?");

// Para saber el tipo de dato que devuelve una variable
typeof(nombre);

// Contatenación de Strings (Igual que en Java)
alert("Hola "+"mundo.");
alert("Hola "+nombre);

// Contar caracteres del String con .length
var numeroLetras = nombre.length;


// Slice de Strings para extraer partes concretas
// Selecciona la informacion entre los dos puntos seleccionados
nombre.slice(0,1);
var frase = "aasdkjaskjdfalaksdfjh";
var fraseMaxima = slice.frase(0,10);

nombre.toUpperCase();
nombre.toLowerCase();

var x = 5;
var y = 1;

x++;
x--;

x += y;


// swtich case como en java:

switch(x){
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
}
