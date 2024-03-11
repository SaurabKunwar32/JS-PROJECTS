
const favMovie="3idiot";

let guess=prompt("Guess my fav movie");

while( (guess != favMovie ) && (guess != "quit") ){
    guess = prompt("Wrong answer!! . Please try again");
}


if( guess == favMovie){
    console.log("Congrats!!");
}

else{
    console.log("You quit.");
    console.log("fav movie is 3idiot");
}