const form = document.querySelector(".container__login__form")
const nameInput = document.getElementById("name")

const lastNameInput = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")

const nameError = document.getElementById("name-err")
const lastNameError = document.getElementById("lastname-err")
console.log(lastNameError)
const emailError = document.getElementById("email-err")
const passwordError = document.getElementById("password-err")
const errrorImg = document.getElementsByTagName("img")
const validation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
let a = 0
console.log(form)
form.addEventListener('submit', (e) => {
    a = 0
    console.log(nameInput.value)
    if (nameInput.value === '' || nameInput.value === null) {
        setError(nameError, "Name cannot be empty!")
        setColor(nameInput)
        display(errrorImg[0])
        console.log(errrorImg)
    } else {
        a += 1
        setSuccess(nameError, nameInput)
        errrorImg[0].style.display = "none";

    }
    if (lastNameInput.value === '' || lastNameInput.value === null) {
        setError(lastNameError, "Last Name cannot be empty!")
        setColor(lastNameInput)
        display(errrorImg[1])

    } else {
        a += 1
        setSuccess(lastNameError, lastNameInput)
        errrorImg[1].style.display = "none";
    }
    if (email.value === '' || email.value === null) {
        setError(emailError, "Email cannot be empty!")
        setColor(email)
        display(errrorImg[2])

    } else if (!validation.test(email.value)) {
        setError(emailError, "This is not a valid email!")
        setColor(email)
        display(errrorImg[2])
    } else {
        a += 1
        setSuccess(emailError, email)
        errrorImg[2].style.display = "none";
    }

    if (password.value === '' || password.value === null) {
        setError(passwordError, "Password cannot be empty!")
        setColor(password)
        display(errrorImg[3])

    } else {
        a += 1
        setSuccess(passwordError, password)
        errrorImg[3].style.display = "none";
    }

    if (a != 4) {
        e.preventDefault()
    }

})

function setError(element, message) {
    element.innerText = message
}

function setColor(element) {
    element.style.border = "solid 2px hsl(0, 100%, 74%)";
}

function display(element) {
    element.style.display = "initial";
}

function setSuccess(paragraph, input) {
    paragraph.innerText = "";
    input.style.border = "2px solid hsla(246, 25%, 77%, 0.288)";
}