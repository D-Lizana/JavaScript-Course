
function rollDice(){
    return Math.floor((Math.random()*6)+1);
}

window.onload = function(){
    let dado1 = rollDice();
    let dado2 = rollDice();

    document.getElementById("dado1").src = "images/dice${dado1}.png"
    document.getElementById("dado2").src = "images/dice${dado2}.png"


    let textoResultado;
    if(dado1 > dado2){
        textoResultado = "¡Jugador 1 gana!";
    }
    else if (dado1 < dado2){
        textoResultado = "¡Jugador 2 gana!";
    }
    else{
        textoResultado = "¡Empate!"
    }

    document.getElementById("resultado").textContent = textoResultado;


}

