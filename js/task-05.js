const inputEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

inputEl.addEventListener("input", updateDisplay);
function inputValue(event){
    const inputValue = event.currentTarget.value;
    if (inputValue != "") {
        textEl.textContent = inputValue;
    } else {
        textEl.textContent = "Anonymous";
    }   
}


// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
