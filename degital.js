const hourEl = document.getElementById("hour")
const minutesEl = document.getElementById("minute")
const secondsEl = document.getElementById("second")
const ampmEl = document.getElementById("ampm")



function updateTime(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "Pm"
     if(h < 12){
        ampm = "Am"
     }
     h = h <10? "0" + h : h
     m = m <10? "0" + m : m
     s = s <10? "0" + s : s

    hourEl.innerHTML = h
    minutesEl.innerHTML = m
    secondsEl.innerHTML = s
    ampmEl.innerHTML = ampm
    setTimeout(() =>{
        updateTime()
    }, 1000)
}
updateTime()