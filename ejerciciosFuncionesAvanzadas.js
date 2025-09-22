
// Ejercicio 1

function add(){
    console.log(2+3)
}

function runTwice(fun){
    fun();
    fun();
}

runTwice(add);

const boton = document.querySelector('boton');

<button class="boton" onclick="
        cambiar_boton()
    ">Boton</button>

function cambiar_boton(){
    boton.innerHTML = 'Loading...';
    setTimeout(function(){
        boton.innerHTML = 'Finished!'
    }, 1000);
}

// Ejercicio 2

const boton_add = document.querySelector('add');

<button class="boton_add" onclick="
        add_to_cart()
    ">Add to cart</button>

// <p class="escribir"></p>

function add_to_cart(){
    clearTimeout();
    const escribir = document.querySelector('escribir');
    escribir.innerHTML = 'Added';

    setTimeout(function() {
        escribir.innerHTML = '';
    }, 2000);
}
