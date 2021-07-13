let playerTurn1 = true
const divs = document.querySelectorAll(".cell")
console.log(divs)
let gameState = ["", "", "", "", "", "", "", "", ""]
let win = false

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



divs.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (playerTurn1 === true) {
            if (elem.innerHTML === "") {
                elem.innerHTML = "X"
                playerTurn1 = false
                gameState[parseInt(elem.id)] = "X"
            }

        } else {
            if (elem.innerHTML === "") {
                elem.innerHTML = "O"
                gameState[parseInt(elem.id)] = "O"
                playerTurn1 = true
            }

        }
        check()
        console.log(gameState)
    })

})

function check() {
    for(let i = 0; i <= 7; i++){
        const actualCondition  = winConditions[i]
        let first = gameState[actualCondition[0]]
        let second = gameState[actualCondition[1]]
        let third = gameState[actualCondition[2]]

        if(first === "" || second === "" || third === ""){
            continue;
        }
        if(first === second & second === third){
            alert(`Player ${first} has won!`)
            win = true
            break
        }
    }

    let draw = !gameState.includes("")
    if(draw && !win){
        alert("It`s a draw!")
    }
    
    // if (divs[0].innerHTML === letter && divs[1].innerHTML === letter && divs[2].innerHTML === letter) {
    //     alert(`Player ${letter} has won!`)
    // }
}