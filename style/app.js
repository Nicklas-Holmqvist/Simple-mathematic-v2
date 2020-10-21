/* 
Rätt och fel meddelande
*/

const correctAnswer = "Du är grym!";
const wrongAnswer = "Fel, försök igen!";

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

// const diffStd = document.getElementById('diff').innerText;
// console.log(Number(diffStd));

/* 
Alla funktioner
*/

// function changeDiff() {
//     document.getElementById('diffNr').value;

// }

// Funktion för nummer 1
function newNumberOne() {
    let nr1 = getRandomNumber(60);
    console.log(nr1)
    return nr1;
}

// Funktion för nummer 2
function newNumberTwo() {
    let nr2 = getRandomNumber(60);
    console.log(nr2)
    return nr2
}

// Random funktion
function getRandomNumber(limit) {
    const randomValue = Math.random() * limit;
    return Math.round(randomValue);
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
    console.log(userSum);

// Om det är rätt inmatat värde
if (numberSum === userSum) {
    correct.innerText = correctAnswer;

    disableInput.readOnly = true;

    newBtn.style.display = 'flex';
    correctBtn.style.display = 'none';

    mathItem.style.background = '#7FB069';

    disableInput.style.backgroundColor = 'rgb(255,255,255)';
    disableInput.style.color = '#011627';

// Om det är fel inmatat värde
}   else {
    corrected.innerText = wrongAnswer;
    disableInput.value = '';

    mathItem.style.background = 'rgb(255,0,0)';
}
}