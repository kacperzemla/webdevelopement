const tip = document.querySelectorAll('#percent');
const result = document.querySelectorAll('.result')[0]
const bill  = document.querySelector('#bill')
const resultTotal = document.querySelectorAll('.result')[1]
const numberOfPeople = document.querySelector('#people')
const errors = document.querySelectorAll('.error')
const reset = document.querySelector('#reset')
const customInput = document.querySelector('#custom')

customInput.addEventListener('click', function(e){
    calculate(customInput.value)
    checkErrors()
})

// bill.addEventListener('keyup', 
//     checkErrors()
// )

// numberOfPeople.addEventListener('keyup', checkErrors())


reset.addEventListener("click", function(){
    
    bill.value = '';
    numberOfPeople.value = '';
    numberOfPeople.style.border = 'initial'
    bill.style.border = 'initial'
    errors[0].style.display = 'none'
    errors[1].style.display = 'none'
    result.innerHTML = '$0.00'
    resultTotal.innerHTML = '$0.00'
    customInput.value = ''
})


tip.forEach(function(tippy){
    tippy.addEventListener("click", function(){
        calculate(parseInt(tippy.innerText.split('%')[0]))
        checkErrors()
        customInput.value = ''
    })
})

function calculate(number){
    if(numberOfPeople.value != 0 && bill.value != 0){
        result.innerHTML = '$' + ( (number/100 * bill.value ) / (numberOfPeople.value) ).toFixed(2);
        resultTotal.innerHTML = '$' + (( number/100 * bill.value ) + parseInt(bill.value)).toFixed(2);
    }
}


function checkErrors(){
    
        if(numberOfPeople.value === '0' || numberOfPeople.value === ''){
            errors[1].innerHTML = 'Can`t be zero'
            errors[1].style.display = 'initial'
            numberOfPeople.style.border = "2px solid rgb(253, 112, 112)"
        } else{
            errors[1].style.display = 'none'
            numberOfPeople.style.border = 'initial'
        }
        if(bill.value === '0' || bill.value === ''){
            errors[0].innerHTML = 'Can`t be zero'
            errors[0].style.display = 'initial'
            bill.style.border = "2px solid rgb(253, 112, 112)"
        } else {
            errors[0].style.display = 'none'
            bill.style.border = 'initial'
        }

}
