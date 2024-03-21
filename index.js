let tabLinks = document.getElementsByClassName("tab-links")
let tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
   for(tabLink of tabLinks){
    tabLink.classList.remove("active-link")
   }
   for(tabContent of tabContents){
    tabContent.classList.remove("active-tab")
   }

   event.currentTarget.classList.add("active-link")
   document.getElementById(tabname).classList.add("active-tab")
}


let sideMenu = document.getElementById("sidemenu")

function openmenu(){
   sideMenu.style.right = "0"
}
function closemenu(){
   sideMenu.style.right = "-200px"
}