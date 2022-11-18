const form = document.querySelector(".login-form");
form.addEventListener("submit", formProcessing);

function formProcessing(event) {
  
  event.preventDefault();
  const { elements } = event.currentTarget;
  const inputsNames = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name) inputsNames.push(elements[i].name);
  }
const formValues = {};
  for (const inputName of inputsNames) {
    if (elements[inputName].value === "") {
      alert("Please note that all fields in the form must be completed.");
      return;
    }
    formValues[inputName] = elements[inputName].value;
  }
 console.log(formValues);
 event.currentTarget.reset();
}

// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.