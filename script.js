var randomNumber1=Math.floor(Math.random()*6)+1;
// randomNumber1=randomNumber1*6;
// randomNumber1=Math.floor()+1;
var randomdiceimage="dice"+randomNumber1+".png";
var randomimagesource="images/"+randomdiceimage;
// var ran="images/"+randomdiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage1="dice"+randomnumber2+".png";
var randomimagesource1="images/"+randomdiceimage1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource1);


if( randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 won";
}
else if( randomnumber2>randomNumber1){
       document.querySelector("h1").innerHTML="player 2 won";
}
else if(randomnumber2=randomNumber1){
             document.querySelector("h1").innerHTML="game is draw";
}

