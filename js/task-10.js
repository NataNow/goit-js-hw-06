const controlsDiv = document.querySelector("#controls");
const input = controlsDiv.querySelector('input[type="number"]');
const createBtn = controlsDiv.querySelector("[data-create]");
const destroyBtn = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", newBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function newBoxes() {
    const quantity = Number.parseInt(input.value);
  if (Number.isNaN(quantity)) {
    alert("Please enter number of boxes");
    return;
  } else if (quantity <= 0 || quantity > 100) {
    alert("Quantity of boxes must be from 1 to 100");
    return;
  }
  createBoxes(quantity);
}
function createBoxes(amount) {
  let markup = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${size}px; height: ${size}px; margin: 10px auto; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }
  boxesDiv.insertAdjacentHTML("afterbegin", markup);
}
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.