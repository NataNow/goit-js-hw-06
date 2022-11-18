const input = document.querySelector('#validation-input');
input.addEventListener("blur", checkInputValue);

function checkInputValue(event) {
 const {value, dataset, classList} = event.currentTarget
    if (value.length !== +dataset.length) {
    setInvalidClass(classList);
  } else {
    setValidClass(classList);
  }
}
function setInvalidClass(classList) {
  classList.remove("valid");
  classList.add("invalid");
}
function setValidClass(classList) {
  classList.remove("invalid");
  classList.add("valid");
}

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }