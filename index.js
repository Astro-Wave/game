const allSigns = document.querySelectorAll('.avatar');
const background = document.querySelector('.background');
const characterBtn = document.querySelector('#character-btn');
const characters = document.querySelector('#characters');
let userChoice;

allSigns.forEach(sign => sign.addEventListener('click', getSigns));

characterBtn.addEventListener('click', showCharacters);


function getSigns(e) {
    userChoice = e.target;
    allSigns.forEach(sign => sign.removeEventListener('click', getSigns));
    characterBtn.style.display = 'none';
    allSigns.forEach(sign => sign.style.display = 'none');
}

function showSigns(e) {
    userChoice.style.display = 'block';
    userChoice.style.position = 'fixed';
    userChoice.style.height= "80px";
    userChoice.style.width= "80px";
    userChoice.style.top = "40vh";
    userChoice.style.left = "30vh";
}

function showCharacters() {
    characters.style.display = 'block';
}

function getZodiacSign() {
    let sign;
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
    console.log(userChoice);
  }

