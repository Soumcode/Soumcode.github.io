

function diceRoll(e) {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomImgNumber1 = "dice" + randomNumber1 + ".png";
  var randomImgSource1 = "images/" + randomImgNumber1;
  var img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", randomImgSource1);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var randomImgNumber2 = "dice" + randomNumber2 + ".png";
  var randomImgSource2 = "images/" + randomImgNumber2;
  var img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", randomImgSource2);

  if (randomImgNumber1 > randomImgNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  } else if (randomImgNumber1 == randomImgNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
}
  if (performance.navigation.type == 1) {
    diceRoll();
  } else {
    console.info( "This page is not reloaded");
  }
