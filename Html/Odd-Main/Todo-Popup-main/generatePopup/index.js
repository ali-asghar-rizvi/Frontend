  
const button = document.querySelector("button");
const popWrapper = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");

button.addEventListener('click',() =>{
    popWrapper.style.display = "block";
    console.log("sdg");
})

popupClose.addEventListener('click',() =>{
    popWrapper.style.display = "none";
})


