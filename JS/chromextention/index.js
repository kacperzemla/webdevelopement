let inputBtn = document.querySelector("#input-btn")
let myLeads = []
// localstorage przyjmuje tylko stringi wiec uzywamy JSON.stringify zeby  zamienic array na string, a zeby z string na array to uzmway JSON.parse
//myLeads = JSON.stringify(myLeads)

const inputEl = document.querySelector("#input-el")  //const - > const cannot be reassigned, ( const - constant ) - nie można zmieniac np. inputEl = "Hello" - this wont work

// If possible, use const , if not , use let
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


// localStorage - loklny obiekt, możemy w nim przechować dane, które tam pozostaną nawet jak odswiezymy strone 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//to przy odswiezaniu sie dzieje 
if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

//localStorage.clear()

tabBtn.addEventListener("click", function(){
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     // since only one tab should be active and in the current window at once
  //     // the return variable should only have one entry
  //     let activeTab = tabs[0];
  //     let activeTabId = activeTab.id; // or do whatever you need
  // });
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      render(myLeads)
    })
})

inputBtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = ""
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// leads - parameter // when we pass sth to function its argument , so myLeads is argument when we pass it to function render
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
      // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" // 1 metoda
      // 2 metoda
      //creating element
      const li = document.createElement("li")
      const a = document.createElement("a")



      //setting text content
      // a.href = myLeads[i]
      // a.target = '_blank'
      // a.textContent = myLeads[i]
      // li.append(a)
      // listItems += li.outerHTML // funkcja outerHTML zawiera to co jest w srodku tagow + tag
      //template strings w pochylonym cudzysłowiu -> można sobie pisać tak jak html i zmienne js w ${zmienna}
      listItems +=  
      `  <li>
          <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
          </a>
        </li>
        `
      

      //appending to parent  ( ul )
      //  ulEl.append(li)
    }
    ulEl.innerHTML = listItems;
}

// // template strings/literals practice 

// const recipient = "James"

// // Refactor the email string to use template strings
// //const email = "Hey " + recipient + "! How is it going? Cheers Per"
// const sender =  "Kacper"

// const email = `Hey 
// ${recipient}! 
// How is it going? Cheers ${sender}
// `

// console.log(email)


//truthy value = js turns it into true in if

// falsy

// false
// 0
// ""
// null -> how u as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN - not a number

// let currentViewers = null 

// currentViewers = ["Jane", "nick"]

// currentViewers = null // if we give currentViewers = [] it will be true

// if(currentViewers){
//   // do someting
//   console.log("we have viewers")
// }

// let currentViewers

// console.log(currentViewers) -> this variable is undefined 