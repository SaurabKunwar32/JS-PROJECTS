const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true) {

    if(guess == "quit"){
        console.log("User quit !!");
        break;
    }


    if( guess == random){
        console.log("Congrats you are right!! Congrats the number is",random);
        break;
    }
   
    else if(guess < random){
        guess = prompt("Too small Please guess large number!!");
    }

    else if (guess > random) {
        guess = prompt("Too large Please guess small number!!");
    }
}