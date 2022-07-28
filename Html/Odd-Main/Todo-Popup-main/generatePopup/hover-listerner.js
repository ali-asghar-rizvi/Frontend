let animateCSS = document.querySelector(".inner-side");



animateCSS.addEventListener('mouseenter',() =>{
    animateCSS.classList.add("shake-horizontal")
})

animateCSS.addEventListener('mouseleave',() =>{
    animateCSS.classList.remove("shake-horizontal")
})
