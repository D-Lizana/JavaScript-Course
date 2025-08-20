
// Cargamos los elementos del DOM para poder llamarlos
document.addEventListener("DOMContentLoaded", () => {
    const rollBtn = document.getElementById("roll");
    const diceImgs = document.querySelectorAll(".dice");
    const holdBtn = document.getElementById("hold");
    const message = document.querySelector(".message");
    const playerScores = [0, 0]; // Puntos acumulados Jugador1, Jugador2
    let currentPlayer = 0; // 0 = Jugador1, 1 = Jugador2
    let roundScore = 0; // Puntos de la tirada actual (no guardados aún)
    let diceValues = [0,0,0,0,0,0];  // Valores actuales de los dados
    let keptDice = [false, false, false, false, false, false]; // Dados que el jugador ya guardó


  // Ruta base de las imágenes de los dados
    const diceImages = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png"
    ];

    diceImgs.forEach((dice, i) => {
        dice.addEventListener("click", () => toggleDice(i));
    });


  // Evento: Tirar dados
    function rollDice() {
    let newRollScore = 0;

    diceImgs.forEach((dice, i) => {
        if (!keptDice[i]) {  // Solo tiramos los dados libres
            const roll = Math.floor(Math.random() * 6) + 1;
            diceValues[i] = roll;
            dice.src = diceImages[roll - 1];
            dice.alt = `Dado ${roll}`;
        }

        // Contar puntos de los dados seleccionados
        if (keptDice[i]) {
            if (diceValues[i] === 1) newRollScore += 100;
            if (diceValues[i] === 5) newRollScore += 50;
        }
    });

    roundScore = newRollScore;
    message.textContent = `Jugador ${currentPlayer + 1} tiene ${roundScore} puntos en esta tirada.`;
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

    // LIMPIAR DADOS GUARDADOS
    keptDice = keptDice.map(() => false); // reinicia el estado
    diceImgs.forEach(dice => {
        dice.classList.remove("border-4", "border-yellow-400", "rounded-xl");
    });

    message.textContent = `Turno del Jugador ${currentPlayer + 1}`;
}



    function toggleDice(index) {
        // Solo podemos guardar dados que tengan valor 1 o 5
        if (diceValues[index] !== 1 && diceValues[index] !== 5) return;

        // Alternar estado guardado
        keptDice[index] = !keptDice[index];

        // Cambiar apariencia para que se vea seleccionado
        if (keptDice[index]) {
            diceImgs[index].classList.add("border-4", "border-yellow-400", "rounded-xl");
        } else {
            diceImgs[index].classList.remove("border-4", "border-yellow-400", "rounded-xl");
        }
    }


  // Eventos
    rollBtn.addEventListener("click", rollDice);
    holdBtn.addEventListener("click", holdScore);

});