
// Cargamos los elementos del DOM para poder llamarlos
document.addEventListener("DOMContentLoaded", () => {
  const rollBtn = document.getElementById("roll");
  const diceImgs = document.querySelectorAll(".dice");

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
  rollBtn.addEventListener("click", () => {
    diceImgs.forEach(dice => {
      const roll = Math.floor(Math.random() * 6); // Número entre 0 y 5
      dice.src = diceImages[roll];                // Cambia la imagen
      dice.alt = `Dado ${roll+1}`;
    });
  });
});