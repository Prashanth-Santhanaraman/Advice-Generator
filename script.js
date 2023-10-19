const adviseId = document.querySelector("#advice-id");
const adviceText = document.querySelector("#advice-text");
const adviceButton = document.querySelector("#btn");
const url = "https://api.adviceslip.com/advice"
window.onload = getAdvice;
function getAdvice(){
    fetch(url)
    .then((res)=>res.json())
    .then((result)=>{
        adviseId.innerText=result.slip.id;
        adviceText.innerText=result.slip.advice;       
    })
}
adviceButton.addEventListener("click", function(){
    getAdvice();
});
adviceButton.addEventListener("click", getAdvice);