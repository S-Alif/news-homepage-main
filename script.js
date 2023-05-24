let navbar = document.querySelector(".navbar")
let closeBtn = document.querySelector(".close-btn")
let openBtn = document.querySelector(".open-btn")

openBtn.onclick = () => {
    navbar.classList.add("open")
}
closeBtn.onclick = () => {
    navbar.classList.remove("open")
}

window.onscroll = () => {
    if(window.scrollY){
        navbar.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)"
    }
    else{
        navbar.style.boxShadow = "none"
    }
}