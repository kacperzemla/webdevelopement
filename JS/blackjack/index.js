
let cards = []  // array  cards.push(5) - adding an variable to array ,  removing the last item in array: cards.pop()
let sum = 0
let hasBlackJack = false
let isAlive = false
// CTRL + / - > komentarz  , CTRL + / - > odkomentowanie 
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)
//let SumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")  // troche jak w jquery, nie specyfikujemy ze jest to id, moze to byc klasa, tag itd. 
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Kacper", // key: value , objects store data in-depth ( szczegółowe przechowywanie danych) composite / complex data type 
    chips: 145,
    sayHello: function() { // function of an object is a method 
        console.log("Hello!")
    }
}

player.sayHello();

let airbnb = {
    title: "Ur Castle",
    isFood: false,
    price: 12,
    rooms: ['bathroom', 'bedroom']
}

let playerName = "Kacper"
let playerChips = 145

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips // player.name  can be used as player["name"] - this is bracket notation instead of dot notation 

function startGame(){
    isAlive = true; 
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
   // let allCards = ""
    cardsEl.textContent = "Cards: "
    for(let i = 0;  i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    if ( sum < 21 ){
        message = "Do u want to draw a new card ? "
    } else if (sum === 21 ){
        message = "U won"
        hasBlackJack = true 
    } else if( sum > 21 ) {
        message = "U are out of game ! "
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if( isAlive === true && hasBlackJack === false){
        console.log("Drawin a new card from the deck! ")
        let card = getRandomCard();
        cards.push(card)
        sum += card
        renderGame();
    }
  
}


function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1; // Math.random  generates random numbers between 0 and 1 ( not including 1 ) Math.floor removes the decimals 12.999 -> 12 , 12.4 - > 12
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1 ){
        return 11
    } else {
        return randomNumber
    }
}


//function is hoisted to the top - accesible everywhere