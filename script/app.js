window.addEventListener('load', main);

function main() {
    newNumber()
    addEventListeners()
    fetchLS()
}

/**  */
let mathType = "addition"


function addEventListeners() {
    reset.addEventListener('click', resetCount)

    correctBtn.addEventListener('click', correctedNumber)
    newBtn.addEventListener('click', afterWrongUpdate)

    addition.addEventListener('click', setAddition)
    minus.addEventListener('click', setMinus)
    // multiply.addEventListener('click', changeMathType)
}

/* 
Rätt-, fel meddelande, svårighetsgrad och rätt-, fel räknare
*/

// Svar vid rättning
const correctAnswer = "Rätt!";
const wrongAnswer = "Fel, försök igen!";

// Svårighetsgrad
let difficulty = 10;

// Rätt och Fel variablerna
let numberOfWrong = 0
let numberOfRight = 0

/* 
Alla variabler som kan nås utanför frunktioner
*/

let numberOne = document.getElementById('nr1')
let numberTwo = document.getElementById('nr2')
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
let mathFunction = document.querySelector('#plus');
let header = document.querySelector('h1');

let corrected = document.getElementById('correct');

let addition = document.querySelector('.addition');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');

let bodyBackground = document.querySelector('.math-container');

/* 
Alla funktioner
*/

/** Change to addition */
function setAddition() {

    if(mathType != "addition") {
        mathType = "addition"
        header.innerText = "Addition"
        mathFunction.innerText = "+"
        newNumber()
        mathItem.style.background = '#FF9F1C';
        difficulty = 5;
    }
}

/** Change to minus */
function setMinus(){
        if(mathType != "minus") {
        mathType = "minus"
        header.innerText = "Minus"
        mathFunction.innerText = "-"
        newNumber()
        mathItem.style.background = "#79A6FA"
        difficulty = 5;
    }
}

/** Svårighetsgrad där ett värde ökar random talen */
let diffAdd = document.querySelector('#higherNumbers').addEventListener('click', () => {
    if (difficulty == 10) {
        difficulty = 20;
        newNumber ()
    }
    else if (difficulty == 20) {
        difficulty = 50;
        newNumber ()
    }
    else if (difficulty == 50) {
        difficulty = 100;
        newNumber ()
    }
    else if (difficulty == 100) {
        difficulty = 200;
        newNumber ()
    }   else {
        difficulty = 10;
        newNumber()
    }
})

// Random funktion
function getRandomNumber(limit) {
    const randomValue = Math.random() * limit;

    return Math.ceil(randomValue);
}

/** När man trycker på nästa tal, kommer denna funktionen köras 
 *  Det skapas två nya randomtal och sätts ut på hemsidan
 *  Sedan körs funktionen newStyling, som kort nollar till ursprungsläget
*/
function newNumber() {
    firstValue = getRandomNumber(difficulty);
    secondValue = getRandomNumber(firstValue);

    numberOne = document.getElementById('nr1').innerText = firstValue;
    numberTwo = document.getElementById('nr2').innerText = secondValue;
    newStyling()
}

/** Standard styling
 *  Körs i newNumber funktionen
 */
function newStyling() {
    correctBtn.style.opacity = 1;
    disableInput.readOnly = false;
    
    disableInput.value = '';
    newBtn.style.display = 'none';
    correctBtn.style.display = 'flex';
    correct.innerText = '';   
    mathItem.style.borderColor = '#FFFFFF'; 
    bodyBackground.classList.remove("wrong-background")
    bodyBackground.classList.remove("correct-background")

}

/** Rättar användarens input
 *  En if sats som kontrollerar om vilken matematisk funktion som används
 */
function correctedNumber() {
    let answer = document.getElementById('answer').value;

    if (mathType == "addition") {
        numberSum = Number(numberOne) + Number(numberTwo);
    } 
    else if (mathType == "minus") {
        numberSum = Number(numberOne) - Number(numberTwo);
    }
    else if (mathType == "multiply") {
        numberSum = Number(numberOne) * Number(numberTwo);
    }

    let userSum = Number(answer);

    if (numberSum === userSum) {
        rightResult()        

    }   else {
        wrongResult()
    }

    
}

/** Ett svar som returneras om användarens input var rätt
 *  Körs i correctedNumber funktionen
 */
function rightResult() {
    correct.innerText = correctAnswer;

    disableInput.readOnly = true;

    newBtn.style.display = 'flex';
    correctBtn.style.display = 'none';
    mathItem.style.borderColor = '#7FB069';

    if (bodyBackground.classList.contains("wrong-background")) {
        bodyBackground.classList.remove("wrong-background")
        bodyBackground.classList.add("correct-background")
    } else {
        bodyBackground.classList.add("correct-background")
    }

    addRight()

    if (mathType === "addition") {
        setAddition()
    }
    else {
        setMinus()
    }

    disableInput.style.backgroundColor = 'rgb(255,255,255)';
    disableInput.style.color = '#011627';
}

/** Ett svar som returneras om användarens input var fel
 *  Körs i correctedNumber funktionen
 */
function wrongResult() {
    corrected.innerText = wrongAnswer;
    disableInput.value = '';

    numberOfWrong += 1;      
    updateScore();
    

    bodyBackground.classList.add("wrong-background")
    mathItem.style.borderColor = '#FF0000';
}

function afterWrongUpdate() {
    if (mathType === "addition") {
        newNumber()
        setAddition()
        
    }
    else {
        newNumber()
        setMinus()
    }
}

function saveToLS() {
    localStorage.setItem("nrRight", numberOfRight)
    localStorage.setItem("nrWrong", numberOfWrong)
}

function clearLS() {
    localStorage.removeItem("nrRight");
    localStorage.removeItem("nrWrong");
}

function fetchLS() {
    let oldLSRight = JSON.parse(localStorage.getItem("nrRight"))
    let oldLSWrong = JSON.parse(localStorage.getItem("nrWrong"))
    
    if(oldLSRight == null) {
        numberOfRight = 0;
    } else {
        numberOfRight = oldLSRight
    }
    if(oldLSWrong == null) {
        numberOfWrong = 0;
    } else {
        numberOfWrong = oldLSWrong
    }   
    updateScore(); 
}

/** Funktion som ökar och lägger till antal rätt i en P tagg */
function addRight() {   
    numberOfRight += 1;
    updateScore();    
}

/** Uppdaterar poängen för rätt och fel */
function updateScore() {
    wrong.innerText = numberOfWrong;
    right.innerText = numberOfRight;
    saveToLS()    
}


/** Nollställer poängen */
function resetCount() {
    numberOfWrong = 0;
    numberOfRight = 0;
    clearLS()
    updateScore();
}