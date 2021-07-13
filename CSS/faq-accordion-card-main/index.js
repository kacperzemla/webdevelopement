let questionAnswer = document.querySelectorAll(".question__answer")
let questionContent = document.querySelectorAll(".question__content")
let question = document.querySelectorAll(".question img")
let next = questionContent.nextElementSibling
console.log(questionContent)
console.log(next)
console.log(questionContent[2].querySelector("img"))

// question.addEventListener("click", function(){
//     if(questionAnswer.style.display === "none"){
//         questionAnswer.style.display = "initial"
//         question.style.transform = "rotate(180deg)"
//         questionContent.style.fontWeight = "700"
//     }else{
//         questionAnswer.style.display = "none"
//         question.style.transform = "rotate(0deg)"
//         questionContent.style.fontWeight = "400"
//     }
// })

for(let i = 0; i < questionAnswer.length ; i++){
    let img = ""
    question[i].addEventListener("click", function(){

        next = questionContent[i].nextElementSibling;
        if(next.style.display === "none"){
            next.style.display = "initial"
            question[i].style.transform = "rotate(180deg)"
            questionContent[i].style.fontWeight = "700"
            questionContent.forEach(function(elem){
                if(elem != questionContent[i]){

                next = elem.nextElementSibling
                if(next.style.display === "initial")
                    next.style.display = "none"
                    img = elem.querySelector("img")
                    img.style.transform = "rotate(0deg)"
                    elem.style.fontWeight = "400"

                }
            })
        }
        else
        {
            next.style.display = "none"
            question[i].style.transform = "rotate(0deg)"
            questionContent[i].style.fontWeight = "400"
        }

    });

}

