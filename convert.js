const speech = new SpeechSynthesisUtterance()
let textareaEl = document.getElementById("textarea")

function listenBtn(){
 speech.text = textareaEl.value 
 window.speechSynthesis.speak(speech)
}
