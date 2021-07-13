let count = 0

//document.getElementById("count").innerText = 5;
// count + 1

function increment(){
    count += 1 // count = count + 1 
    document.getElementById("count").innerText = count
}

function save(){
    let entries = count + " , "
    let saved = document.getElementById("saved")
    saved.textContent += entries
    count = 0
    document.getElementById("count").innerText = count
    //alert("Saved!")
}
// let variables są block scoped tzn jeżeli są w funkcji np to wtedy poza funkcją nie mamy dostepu
// zmienne camelCase ( pierwsza litera mala , kolejne slowa od duzych)
// DOM - Document Object Model - how to use javascript to modify website, document is a type of object, model - representation , html - real , javascript - model - > representation of real html
//Model ten opisuje jak zaprezentować tekstowe dokumenty HTML (te, które piszesz sobie jako tekst w edytorze) w postaci modelu obiektowego w pamięci komputera.
let greeting = "hi"
let namemy = "Kacper"
let number = 43

let myname = "lol"
let  myGreeting = myname + number // dodawwanie string i liczby - > string

console.log(myGreeting )
console.log(count)

// cwiczenia

let firstName = "kacper"
let lastName = "zemla"

let together = firstName + lastName
console.log(together)

function hi(){
    console.log(greeting + "," + firstName + "!")
}

hi();

