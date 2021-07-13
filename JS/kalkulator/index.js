let num1 = 8
let num2 = 2
document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2

function add(){
    let output = num1 + num2
    document.getElementById("sum-el").innerText = output
}

function subtract(){
    let output = num1 - num2
    document.getElementById("sum-el").innerText = output
}

function divide(){
    let output = num1 / num2
    document.getElementById("sum-el").innerText = output
}

function multiply(){
    let output = num1 * num2
    document.getElementById("sum-el").innerText = output
}