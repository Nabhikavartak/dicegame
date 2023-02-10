var randomNumber1=Math.floor(Math.random()*6)+1;//random number between 1-6

var randomDiceImage= "dice"+randomNumber1+".png";//dice1.png-dice6.png

var randomImageSource="images/"+randomDiceImage;//iamges/dice1.png-images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//second dice

var randomNumber2=Math.floor(Math.random()*6)+1;//random number between 1-6

var randomDiceImage2= "dice"+randomNumber2+".png";//dice1.png-dice6.png

var randomImageSource2="images/"+randomDiceImage2;//iamges/dice1.png-images/dice6.png

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//***************inshort********************* */
// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomSourceImage="image/dice"+randomNumber2+".png";
// document.querySelectorAll("img")[1].setAttribute("src" ,randomImageSource2);


//if player 1 wins
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!!!💥";
}

// if player 2 wins
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!!!💥";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw 😑,try again..."
}
