////////////////////////
///////Variables////////
////////////////////////

const allSigns = document.querySelectorAll('.avatar');
const background = document.querySelector('.background');
const characterBtn = document.querySelector('#character-btn');
const characters = document.querySelector('#characters');
const userInput = document.querySelector('#input');
const form = document.querySelector('#form');
let userChoice = document.querySelector('.avatar');


allSigns.forEach(sign => sign.addEventListener('click', getSigns));

////////////////////////
////Event Listeners/////
////////////////////////

characterBtn.addEventListener('click', showCharacters);
userInput.addEventListener("keydown", pressEnter);


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
    userChoice.style.height= "80px";
    userChoice.style.width= "80px";
    userChoice.style.top = "40vh";
    userChoice.style.left = "30vh";
    console.log("I was here")
}

// This function shows all the signs
function showCharacters() {
    characters.style.display = 'block';
}

// This function takes the user input (birthdate), splits it into an array, determines their zodiac sign, and reassigns it to the user's choice.
function getZodiacSign() {
    let sign;
    // const split = userInput.value.split('/');
    const input = document.querySelector('#input').value;
    const split = input.split('/');
    const month = Number(split[0]);
    const day = Number(split[1]);
    const zodiacSigns = ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"];
  
    const cutoffDates = [20, 19, 20, 20, 20, 20, 22, 22, 22, 22, 21, 21];
  
    const index = month - 1;
    if (day < cutoffDates[index]) {
        sign = zodiacSigns[index];
    } else {
       sign = zodiacSigns[(index + 1)];
    }
    userChoice = document.getElementById(sign);
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



