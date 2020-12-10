window.addEventListener('load', main);

function main() {
    
}

/* 
Rätt och fel meddelande
*/

const correctAnswer = "Du är grym!";
const wrongAnswer = "Fel, försök igen!";
let difficulty = 5;

let numberOfWrong = 0
let numberOfRight = 0



/* 
Alla variabler som kan nås utanför frunktioner
*/

let numberOne = document.getElementById('nr1').innerText = newNumberOne();
let numberTwo = document.getElementById('nr2').innerText = newNumberTwo();
let mathItem = document.getElementById('mathItem');
let disableInput = document.getElementById('answer')
let correctOutput = document.getElementById('correct')
let newBtn = document.getElementById('newBtn');
let correctBtn = document.getElementById('correctBtn');
let pTag = document.querySelectorAll("p");
let h1Tag = document.querySelectorAll(".h1");
let right = document.querySelector('#right');
let wrong = document.querySelector('#wrong');
let reset = document.querySelector('#resetCount');

const test = document.getElementById('answer');
console.log(disableInput);

reset.addEventListener('click', resetCount)

function resetCount() {
    location.reload();
}

// const diffStd = document.getElementById('diff').innerText;
// console.log(Number(diffStd));

/* 
Alla funktioner
*/

let diffAdd = document.querySelector('#higherNumbers').addEventListener('click', () => {
    if (difficulty == 5) {
        difficulty = 20;
        console.log('Tal mellan 0-20')
        newNumber ()
    }
    else if (difficulty == 20) {
        difficulty = 50;
        console.log('Tal mellan 0-60')
        newNumber ()
    }
    else if (difficulty == 50) {
        difficulty = 100;
        console.log('Tal mellan 0-200')
        newNumber ()
    }
    else if (difficulty == 100) {
        difficulty = 200;
        console.log('Tal mellan 0-400')
        newNumber ()
    }   else {
        difficulty = 5;
        console.log('Tal mellan 0-10')
        newNumber()
    }
})

// Funktion för nummer 1
function newNumberOne() {
    let nr1 = getRandomNumber(difficulty);
    console.log(nr1)
    return nr1;
}

// Funktion för nummer 2
function newNumberTwo() {
    let nr2 = getRandomNumber(difficulty);
    console.log(nr2)
    return nr2
}

// Random funktion
function getRandomNumber(limit) {
    const randomValue = Math.random() * limit;

    return Math.ceil(randomValue);
}

/* 
Funktion som körs när man trycker på "nytt tal" knappen
*/

function newNumber () {
    numberOne = document.getElementById('nr1').innerText = newNumberOne();
    numberTwo = document.getElementById('nr2').innerText = newNumberTwo();
    correctBtn.style.opacity = 1;
    disableInput.readOnly = false;
    mathItem.style.background = '#FF9F1C';
    disableInput.value = '';
    newBtn.style.display = 'none';
    correctBtn.style.display = 'flex';
    correct.innerText = '';
    console.log(numberOfWrong);
    console.log(numberOfRight);
}

/* 
Funktion som körs när man trycker på "rätta" knappen
*/

function correctedNumber () {
    let answer = document.getElementById('answer').value;
    let corrected = document.getElementById('correct');
    
    let numberSum = Number(numberOne) + Number(numberTwo);
    let userSum = Number(answer);

    console.log(numberSum);

// Om det är rätt inmatat värde
if (numberSum === userSum) {
    correct.innerText = correctAnswer;

    disableInput.readOnly = true;

    newBtn.style.display = 'flex';
    correctBtn.style.display = 'none';

    addRight()

    mathItem.style.background = '#7FB069';

    disableInput.style.backgroundColor = 'rgb(255,255,255)';
    disableInput.style.color = '#011627';

// Om det är fel inmatat värde
}   else {
    corrected.innerText = wrongAnswer;
    disableInput.value = '';

    numberOfWrong += 1;
    wrong.innerText = numberOfWrong

    mathItem.style.background = 'rgb(255,0,0)';
}
}

function addRight() {    

    numberOfRight += 1;
    right.innerText = numberOfRight;
    
}


