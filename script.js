var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var winnerMessage = document.getElementById("winnerMessage");
var form = document.getElementById("form");
var gamebutton = document.getElementById("gamebutton");



gamebutton.addEventListener("click" , () => {
    window.location.href = "game.html";
})