const num1 = Math.ceil(Math.random() * 20)
const num2 = Math.ceil(Math.random() * 20)
 const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")
const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")
let score = JSON.parse(localStorage.getItem("score"))
if(!score){
    score = 0
}
scoreEl.innerHTML = `Score: ${score}`

questionEl.innerHTML =`What is ${num1} multiply by ${num2}`
const correctAns = num1 * num2
formEl.addEventListener("submit", () =>{
  const userAns = +inputEl.value
  if(userAns === correctAns){
    score++
    updateLocalStorage()
  }
  else{
    score--
    updateLocalStorage()
  }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}