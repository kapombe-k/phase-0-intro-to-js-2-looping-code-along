// Code your solutions in this file
function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards;
 };

function countDown(startNumber) {
    let currentNumber = startNumber;
    while (currentNumber) {
        console.log(currentNumber);
        currentNumber--;
    }
    console.log(currentNumber);
 };