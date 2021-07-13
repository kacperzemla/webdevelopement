let person = {
    name: "El",
    age: "21",
    country: "Poland"
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData();

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries.shift() // usuwa na poczatku
largeCountries.unshift("China") // dodaje na poczatku , unshift - longer word so its makes the array longer , shift - shorter -  > removes, push - longer , pop - shorter 
largeCountries.pop(); // usuwa na koncu
largeCountries.push("Pakistan") // dodaje

console.log(largeCountries)

let hands = ["rock", "paper", "scissor"]

function randomSymbol(){
    let i = Math.floor(Math.random()*3)
    console.log(i)
    console.log(hands[i])
}

randomSymbol();
randomSymbol();