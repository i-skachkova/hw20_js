// 1
const galleryList = document.querySelector(".gallery");
const photoEl = document.querySelectorAll(".photo");
let numberOfPicture = 0;
window.addEventListener("keydown", (e) =>{
    if(e.code === "ArrowRight" && numberOfPicture < photoEl.length-1){
        photoEl[numberOfPicture].classList.remove("active");
        numberOfPicture++;
        photoEl[numberOfPicture].classList.add("active");

    };
    if(e.code === "ArrowLeft" && numberOfPicture > 0){
        photoEl[numberOfPicture].classList.remove("active");
        numberOfPicture--;
        photoEl[numberOfPicture].classList.add("active");

    };
})

// 2
const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const numberInput = document.querySelector("input");
const boxesBox = document.querySelector("#boxes");
let a = 30;
let number = 0;
let result = "";
const createBoxes = function (amount){
    for(let i = 0; i < amount; i++){
        result += `<div style="width: ${a}px; height: ${a}px; background-color: rgb(${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(Math.random() * (256 - 0) + 0)})"></div>`;
        a+=10;
    }
    return result;
}
const destroyBoxes = function(){
    boxesBox.innerHTML = "";
    result = "";
    a = 30;
}
destroyBtn.addEventListener("click", () =>{
    destroyBoxes();
})
renderBtn.addEventListener("click", () =>{
    boxesBox.innerHTML = createBoxes(numberInput.value);
    numberInput.value = 0;
})