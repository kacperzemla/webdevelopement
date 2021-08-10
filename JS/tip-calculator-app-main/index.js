let tip = document.querySelectorAll('#percent');
let result = document.querySelectorAll('.result')[0]
let bill  = document.querySelector('#bill')

tip.forEach(function(tippy){
    tippy.addEventListener("click", function(){
        result.innerHTML = '$' + (parseInt(tippy.innerText.split('%')[0])/100 * bill.value ).toFixed(2)
    })
})