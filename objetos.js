
// Los objetos se crean directamente como una variable,

let Animal = {
    especie: "Perro",
    nombre: "Bronn",
    gordito: true,
    sitiosDormir: ["Cama", "Sofá", "Banco"]
}

// Accedemos a la información llamando al objeto y directamente al atributo
console.log(Animal.especie)

// Para crear un constructor lo hacemos como si fuera una funcion a la que metemos parametros para los atributos
function Animal(especie,nombre,gordito,sitiosDormir){
    this.especie = especie;
    this.nombre = nombre;
    this.gordito = gordito;
    this.sitiosDormir = sitiosDormir
}

// Para crear una instancia del objeto

let Animal1 = new Animal("Gato", "Lusis", true, ["Sofá"]);


// metodos en js:

function Animal(especie,nombre,gordito,sitiosDormir){
    this.especie = especie;
    this.nombre = nombre;
    this.gordito = gordito;
    this.sitiosDormir = sitiosDormir;
    // Se añade el metodo directamente como una funcion
    this.caminar = function(distancia){
        console.log("Camina "+distancia+" kilometros");
    }
}