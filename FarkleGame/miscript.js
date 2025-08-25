
document.addEventListener("DOMContentLoaded", () => {

    let botonLanzar = document.getElementById("roll");
    let imagenesDados = document.querySelectorAll(".dice");
    let botonPasar = document.getElementById("hold")
    let puntos = 0;
    let mensaje = document.querySelector(".message");
    let jugadorActual = 0;



    const fotosDados = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png"
    ];

    function lanzarDados(){
        puntos = 0;
        
        imagenesDados.forEach((dado, i) => {
            const roll = (Math.floor(Math.random()*6)+1);
            dado.src = fotosDados[roll-1];
            dado.alt = `Dado ${roll}`;

            if(roll == 1){
                puntos += 100;
            }
            if (roll == 5){
                puntos += 50;
            }
        });

        mensaje.textContent = `Jugador ${jugadorActual+1}: ${puntos} puntos.`

    }






    botonLanzar.addEventListener("click", lanzarDados);
    botonPasar.addEventListener("click", pasarTurno);

});