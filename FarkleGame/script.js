
// Cargamos los elementos del DOM para poder llamarlos
document.addEventListener("DOMContentLoaded", () => {
    const rollBtn = document.getElementById("roll");
    const diceImgs = document.querySelectorAll(".dice");
    const holdBtn = document.getElementById("hold");
    const message = document.querySelector(".message");
    const playerScores = [0, 0]; // Puntos acumulados Jugador1, Jugador2
    let currentPlayer = 0; // 0 = Jugador1, 1 = Jugador2
    let roundScore = 0; // Puntos de la tirada actual (no guardados aún)


  // Ruta base de las imágenes de los dados
    const diceImages = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png"
    ];

  // Evento: Tirar dados
    function rollDice(){
        roundScore = 0;

        diceImgs.forEach(dice => {
            const roll = (Math.floor(Math.random() * 6)+1); // Número entre 0 y 5
            dice.src = diceImages[roll-1];                // Cambia la imagen
            dice.alt = `Dado ${roll}`;

            if (roll === 1) roundScore += 100; // dado 1
            if (roll === 5) roundScore += 50;  // dado 5
    });
    
        message.textContent = `Jugador ${currentPlayer + 1} sacó ${roundScore} puntos.`;
    }


// Función: plantarse
    function holdScore() {
        playerScores[currentPlayer] += roundScore; // se suman los puntos de la tirada
        document.querySelector(`#player${currentPlayer + 1} .score`).textContent =
            playerScores[currentPlayer];

        // comprobar si gana
        if (playerScores[currentPlayer] >= 10000) {
            message.textContent = `🎉 ¡Jugador ${currentPlayer + 1} gana con ${playerScores[currentPlayer]} puntos!`;
            rollBtn.disabled = true;
            holdBtn.disabled = true;
            return;
        }

        // cambiar de jugador
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        roundScore = 0;
        message.textContent = `Turno del Jugador ${currentPlayer + 1}`;
    }


  // Eventos
    rollBtn.addEventListener("click", rollDice);
    holdBtn.addEventListener("click", holdScore);

});