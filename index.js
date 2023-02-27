////////////////////////

/////Initial State/////
///////////////////////

///////Variables////////

let moveSpeed = 3;
let gravity = 0.5;

const allSigns = document.querySelectorAll('.avatar');
const characterBtn = document.querySelector('#character-btn');
const characters = document.querySelector('#characters');
const userInput = document.querySelector('#input');
const form = document.querySelector('#form');
let userChoice = document.querySelector('.avatar');

allSigns.forEach(sign => sign.addEventListener('click', getSigns));
let userProp;
let userInputValue;


////Event Listeners/////

////////////////////////
////Event Listeners/////
////////////////////////

characterBtn.addEventListener('click', showCharacters);
userInput.addEventListener("keydown", pressEnter);

////Helper Functions////


////////////////////////
////Helper Functions////
////////////////////////


// This function determines the user's choice, remove all the other sings, buttons, and form fields
function getSigns(e) {
    userChoice = e.target;
    allSigns.forEach(sign => sign.removeEventListener('click', getSigns));
    characterBtn.style.display = 'none';
    form.style.display = 'none';
    allSigns.forEach(sign => sign.style.display = 'none');
    showSigns();
}

// This function shows the sign that user chose
function showSigns() {
    userChoice.style.display = 'block';
    userChoice.style.position = 'fixed';

    userChoice.style.height= `80px`;
    userChoice.style.width= `80px`;
    userChoice.style.top = `40vh`;
    userChoice.style.left = `30vh`;
    userProp = userChoice.getBoundingClientRect();

}

// This function shows all the signs
function showCharacters() {
    characters.style.display = 'block';
}

// This function takes the user input (birthdate), splits it into an array, determines their zodiac sign, and reassigns it to the user's choice.

function getZodiacSign() {
    const input = document.querySelector('#input').value;
    const splitBirthdate = input.split('/');
    const month = Number(splitBirthdate[0]);
    const day = Number(splitBirthdate[1]);
    const zodiacSigns = ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"];
    const cutoffDates = [20, 19, 20, 20, 20, 20, 22, 22, 22, 22, 21, 21];
    const index = month - 1;
    if (!input) {
        alert("No birthdate entered.");
        return;
    } else if (splitBirthdate.length !== 2) {
        alert("Invalid birthdate format. Please use MM/DD.");
        return;
    } else if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        alert("Invalid birthdate.");
        return;
    }
    let sign;
    if (day < cutoffDates[index]) {
        sign = zodiacSigns[index];
    } else {
        sign = zodiacSigns[(index + 1) % 12];
    }
    userChoice = document.getElementById(sign);

}



// This function is invoked when the user presses enter in the input field, determines their zodiac sign, empty the input field, invokes the showSigns function, and clicks the character button. After that it remove all the initial states of the game.

function pressEnter(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        getZodiacSign();
        userInput.value = '';
        characterBtn.click();
        allSigns.forEach(sign => sign.style.display = 'none');
        showSigns();
        characterBtn.style.display = 'none';
        form.style.display = 'none';
    }
}

  

///////////////////////
/////Mid Game State////
///////////////////////


let background = document.querySelector('.background').getBoundingClientRect();
let scoreVal = document.querySelector('.score_val');
// let message = document.querySelector('.message');
let scoreTitle = document.querySelector('.score_title');
let gameState = 'Start';
// userChoice.style.display = 'none';
// message.classList.add('messageStyle');
let pause = document.querySelector('#pause');
let isPaused = false;

document.addEventListener('keydown', moveUp);
pause.addEventListener('click', pauseGame);
document.addEventListener('keydown', pauseGameWithP);

let intervalID = setInterval(moveDown, 20);

function pauseGameWithP(e) {
    if (e.key === 'p') {
        pauseGame(e)
    }
}
function moveUp(e) {
    if (e.key === "ArrowUp") {
        e.preventDefault();
        const currentTop = parseInt(userChoice.style.top);
        userProp = userChoice.getBoundingClientRect();
        const newTop = currentTop - 8;
        if (newTop >= 0) {
            userChoice.style.top = `${newTop}vh`;
        }
        // play();
        detectCollisionTopAndBottom()
    }
}

function moveDown() {
    if (userProp) {
        userProp = userChoice.getBoundingClientRect();

        const currentBottom = parseInt(userChoice.style.top);
        const newBottom = currentBottom + 1;
        if (userProp.bottom < background.bottom) {
            userChoice.style.top = `${newBottom}vh`;
        }
        detectCollisionTopAndBottom() 
    }
} 



function detectCollisionTopAndBottom() {  
    if (userProp.top <= background.top || userProp.bottom >= background.bottom) {
        userChoice.style.display = 'none';
        clearInterval(intervalID);
        document.removeEventListener('keydown', moveUp)
        console.log('Game Over');
    }
}

function pauseGame(e) {
    if (!isPaused) {
        e.preventDefault();
        pause.innerHTML = 'Resume';
        clearInterval(intervalID);
        document.removeEventListener('keydown', moveUp);
        isPaused = true;
    } else {
        e.preventDefault();
        pause.innerHTML = 'Pause';
        document.addEventListener('keydown', moveUp);
        intervalID = setInterval(moveDown, 40);
        isPaused = false;
    }
}

function createPipe() {
    
}
  

  }

// This function is invoked when the user presses enter in the input field, determines their zodiac sign, empty the input field, invokes the showSigns function, and clicks the character button. After that it remove all the initial states of the game.

function pressEnter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        getZodiacSign();
        userInput.value = '';
        characterBtn.click();
        allSigns.forEach(sign => sign.style.display = 'none');
        showSigns();
        characterBtn.style.display = 'none';
        form.style.display = 'none';
    }
}
<<<<<<< HEAD

// Hello this is a test



=======
>>>>>>> 597fcd184e189ed19fbeb208c5d2bc0ac2af1a6d
