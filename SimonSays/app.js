
let gameSeqn = [];
let userSeqn = [];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["one1", "two2", "three3", "four4"];

document.addEventListener('keypress', function () {
  if (start == false) {
    start = true;
    levelUP();
  }
});

// ***********************************************************************************************
// this is for the mobile application to start the game
document.addEventListener('touchstart', function () {
  if (start == false) {
    start = true;
    levelUP();
  }
});

if (window.innerWidth < 885) {
  h2.innerText = "Tap the screen to start the game";
} else {
  h2.innerText = "Press any key to start the game";
}

// ***********************************************************************************************

function levelUP() {
  // we use userSeqn for storing the btns that blinks to check with gameseq for correct clicked ans.
  userSeqn = [];
  level++;
  h2.innerText = ` Level ${level}`;

  let randomIndex = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIndex];
  let randomBtn = document.querySelector(`.${randomColor}`);

  // we can trace the paths in console by consoling the randomBTn.
  // console.log(randomBtn.value); 

  gameSeqn.push(randomColor);
  // console.log(gameSeqn);
  btnFlash(randomBtn);
}

// random button flash
function btnFlash(btn) {
  btn.classList.add("flashwhite");
  setTimeout(function () {
    btn.classList.remove("flashwhite");
  }, 200);
}

// clicked button flash
function clibtnFlash(btn) {
  btn.classList.add("clickflash");
  setTimeout(function () {
    btn.classList.remove("clickflash");
  }, 200);
}

// now making function to check the answer is correct is not
function ansCheking(idx) {
  if (userSeqn[idx] == gameSeqn[idx]) {
    if (userSeqn.length == gameSeqn.length) {
      setTimeout(levelUP(), 500);
    }
  } else {

    if (window.innerWidth < 885) {
      h2.innerHTML = `Game over!! Your score was <b>${level}</b><br> Tap the screen to start again`;  
    } else {
      h2.innerHTML = `Game over!! Your score was <b>${level}</b><br> Press any key to start again`;  
    }
    document.querySelector("body").style.backgroundColor =" red";
    setTimeout( function(){
        document.querySelector("body").style.backgroundColor =" white";
    },350);
    resetTo();
  }
}


// making the function for the button pressed
function btnPressed() {
  let btn = this; // storing the clicked button
  clibtnFlash(btn); //we pass btn because we need to change the background  color of the clicked box

  let userColor = btn.getAttribute("id");
  userSeqn.push(userColor);
  ansCheking(userSeqn.length - 1);
}


// making the loop for the all buttons that are pressed

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPressed);
}


function resetTo(){
    start=false;
    gameSeqn=[];
    userSeqn=[];
    level= 0;
}
