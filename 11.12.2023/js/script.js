let image = document.querySelector(".gallery > img");
let count = 1;

function next() {
  count++;
  if (count > 5) {
    count = 1;
  }
  image.src = `./img/${count}.jpg`;
}

function prev() {
  count--;
  if (count < 1) {
    count = 5;
  }
  image.src = `./img/${count}.jpg`;
}

let widthAndHeight = document.querySelector(".gallery > img");
let width = 200;
let height = 200;
let increaseSize = true;

//    ---------- Задача 1 ------------

function zoom() {
  if (increaseSize) {
    width += 50;
    height += 50;
    if (width >= 500) {
      increaseSize = false;
    }
  } else {
    width -= 50;
    height -= 50;
    if (width <= 200) {
      increaseSize = true;
    }
  }
  widthAndHeight.style.width = `${width}px`;
  widthAndHeight.style.height = `${height}px`;
}

//    ---------- Задача 2 ------------

const modules = ["Frontend", "Backend", "Design"];
const frontendCours = ["HTML/CSS", "JavaScript", "React"];
const backendCours = ["Node.js", "PHP", "Express.js"];
const designCours = ["Photoshop", "Canva"];

const selectModul = document.querySelector(".modul");

for (let i = 0; i < modules.length; i++) {
  const option = document.createElement("option");
  option.value = modules[i].toLowerCase();
  option.text = modules[i];
  selectModul.add(option);
}

function updateCours() {
  const moduleSelect = document.querySelector(".modul");
  const courseSelect = document.querySelector(".cours");
  const selectModule = moduleSelect.value;

  courseSelect.innerHTML = "";

  let selectedCourses;
  if (selectModule === "frontend") {
    selectedCourses = frontendCours;
  } else if (selectModule === "backend") {
    selectedCourses = backendCours;
  } else if (selectModule === "design") {
    selectedCourses = designCours;
  } else {
    selectedCourses = [];
  }

  for (let i = 0; i < selectedCourses.length; i++) {
    addOption(courseSelect, selectedCourses[i]);
  }
}

function addOption(select, value) {
  const option = document.createElement("option");
  option.value = value.toLowerCase();
  option.text = value;
  select.add(option);
}

function calculateTotal() {
  const courseSelect = document.querySelector(".cours");
  const amountInput = document.querySelector(".amount");
  const result = document.querySelector(".result");

  const selectedCourse = courseSelect.value;
  const amount = +amountInput.value;

  let coursePrice;

  if (selectedCourse === "html/css") {
    coursePrice = 2500;
  } else if (selectedCourse === "javascript") {
    coursePrice = 5000;
  } else if (selectedCourse === "react") {
    coursePrice = 7000;
  } else if (selectedCourse === "node.js") {
    coursePrice = 6500;
  } else if (selectedCourse === "php") {
    coursePrice = 7500;
  } else if (selectedCourse === "express.js") {
    coursePrice = 9500;
  } else if (selectedCourse === "photoshop") {
    coursePrice = 2000;
  } else if (selectedCourse === "canva") {
    coursePrice = 2990;
  } else {
    result.textContent = "Выберите курс.";
    return;
  }
  const total = coursePrice * amount;
  result.textContent = `Итоговая стоимость: ${total}$`;
}

//    ---------- Задача 3 ------------

for (let i = 1; i <= 99; i++) {
  for (let j = 1; j <= 99; j++) {
    for (let k = 1; k <= 99; k++) {
      if (j * j + i * i === k * k) {
        console.log(`i=${i}, j=${j}, k=${k}`);
      }
    }
  }
}
