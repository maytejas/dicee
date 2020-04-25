function getDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}

var player1value = getDiceValue();
document.querySelector(".img1").setAttribute("src","images/dice" + player1value + ".png");

var player2value = getDiceValue();
document.querySelector(".img2").setAttribute("src","images/dice" + player2value + ".png");

var header = document.querySelector("h1");
if (player1value > player2value) {
  header.innerHTML  = "🚩 Player 1 Wins!";
}
else if (player2value > player1value) {
  header.innerHTML  = "Player 2 Wins! 🚩";
}
else {
  header.innerHTML  = "Draw!";
}
