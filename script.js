//dice 1
var randonNum1 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImg1 = "dice" + randonNum1 + ".png";
var randomImgSrc1 = "images/" + randomDiceImg1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc1);

//dice 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNum2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSrc2);

//Results
var title = document.querySelector("h1");
if (randonNum1 > randomNum2) {
  title.innerText = "🏴Player 1 Wins!"
}else if (randonNum1 < randomNum2) {
  title.innerText = "Player 2 Wins🏳️!"
} else{
  title.innerText =" 🏁 Draw! 🏁"
}