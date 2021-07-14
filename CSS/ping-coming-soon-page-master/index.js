const input = document.querySelector("input")
const form = document.querySelector("form")
const error = document.getElementById("error")
const validation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


form.addEventListener('submit', (e) => {
    if (input.value === "") {
        error.innerText = "Enter an e-mail!"
        
    } else if(!validation.test(input.value)){
        error.innerText = "This e-mail is not correct!"
    } else {
        error.innerText = ""
    }

    if (error.innerText != "") {
    input.style.border = "1px solid hsl(354, 100%, 66%)";
    input.classList.add("email_error")
    e.preventDefault()
}
})