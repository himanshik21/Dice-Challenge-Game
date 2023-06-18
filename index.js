function rolltheDice()
{
var randomNumber1 = Math.floor(Math.random()*6) +1;  // 0 - 0.9999
var randomdiceImage = "images/dice" + randomNumber1 +".png";  //dice1.png - dice6.png (concatenation)
//image tag 1 liya hai aur image 1 tag array m 0 index pr h 
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomdiceImage);


var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomdiceImage1 = "images/dice" + randomNumber1 +".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomdiceImage1);


//changing h1 according to DOM MOdel

if(randomdiceImage > randomdiceImage1){
    document.querySelector("h1").innerHTML = " 🚩Dice 1 wins!";
}
else if(randomdiceImage1 > randomdiceImage){
    document.querySelector("h1").innerHTML = "Dice 2 wins🚩!";
}
else{
    document.querySelector("h1").innerHTML = "Match draw🥲!";
}

}



