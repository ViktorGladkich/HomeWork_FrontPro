// alert("Ok!");

// console.log("Hello World!!!")
// document.write("Hello World!!!")
// document.write("<h1>Hello World!!!</h1>")

/* let age = 25;
console.log(age) */

/* let username;
username = "Jon";

console.log(username) */

/* let username, surname;
username = "Jon";
surname = "Done";

console.log(username, surname) */

/* let a = 5;
let b = 10;

console.log(a+b) */
/* 
let username = "Viktor";
let age = 28; */

// console.log(username, age)

// console.log(username + age)
// console.log(username + " " + age)

// document.write("<h1>Hello "+ username + " " + age +" !</h1>")

/* console.log("5" === 5) */

/* console.log("2" + 3 +4) */
let rate = 42000;
function exchange() {
  let currentValue = document.querySelector(".input-1").value;
  let result = (currentValue / rate).toFixed(2);

  document.querySelector(".result-1").innerHTML =
    currentValue + " $ = " + result + " BTC";
}

function subtract() {
  let num1 = +document.querySelector(".input-2").value;
  let num2 = +document.querySelector(".input-3").value;
  let result = num1 - num2;
  document.querySelector(
    ".result-2"
  ).innerText = `Результат: ${num1} - ${num2} = ${result}`;
}

function multiply() {
  let num1 = +document.querySelector(".input-4").value;
  let num2 = +document.querySelector(".input-5").value;
  let result = num1 * num2;
  document.querySelector(
    ".result-3"
  ).innerText = `Результат: ${num1} * ${num2} = ${result}`;
}

function divide() {
  let num1 = +document.querySelector(".input-6").value;
  let num2 = +document.querySelector(".input-7").value;
  let result = num1 / num2;
  document.querySelector(
    ".result-4"
  ).innerText = `Результат: ${num1} / ${num2} = ${result}`;
}

function getMinutes() {
  let hours = +document.querySelector(".input-8").value;
  let result = hours * 60;
  document.querySelector(
    ".result-5"
  ).innerText = `Результат: ${hours} часа = ${result} минут`;
}

function calculateAverage() {
  let num1 = +document.querySelector(".input-9").value;
  let num2 = +document.querySelector(".input-10").value;
  let num3 = +document.querySelector(".input-11").value;
  let sum = num1 + num2 + num3;
  let result = sum / 3;
  document.querySelector(
    ".result-6"
  ).innerText = `Среднее значение от: ${num1} + ${num2} + ${num3} = ${sum} / 3 = ${result}`;
}
