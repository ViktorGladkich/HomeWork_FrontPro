function checkEquality() {
  let num1 = +document.querySelector(".input-1").value;
  let num2 = +document.querySelector(".input-2").value;
  let num3 = +document.querySelector(".input-3").value;
  let result = document.querySelector(".result-1");

  if (num1 === num2 && num2 === num3) {
    result.innerText = "Все поля равны!";
    result.style.color = "green";
  } else {
    result.innerText = "Не все поля равны!";
    result.style.color = "red";
  }
}

function hasZero() {
  let num1 = +document.querySelector(".input-1").value;
  let num2 = +document.querySelector(".input-2").value;
  let num3 = +document.querySelector(".input-3").value;
  let result = document.querySelector(".result-2");

  if (num1 === 0 || num2 === 0 || num3 === 0) {
    result.innerText = "Да, есть!";
    result.style.color = "green";
  } else {
    result.innerText = "Нет, нету!";
    result.style.color = "red";
  }
}

function sameOne() {
  let num1 = document.querySelector(".input-1").value;
  let num2 = document.querySelector(".input-2").value;
  let num3 = document.querySelector(".input-3").value;
  let result = document.querySelector(".result-3");

  if (num1 === num2 || num2 === num3 || num1 === num3) {
    result.innerText = "Да, есть!";
    result.style.color = "green";
  } else {
    result.innerText = "Нет, нету!";
    result.style.color = "red";
  }
}

function clearInputs() {
  document.querySelector(".input-1").value = "";
  document.querySelector(".input-2").value = "";
  document.querySelector(".input-3").value = "";

  document.querySelector(".result-1").innerText = "";
  document.querySelector(".result-2").innerText = "";
  document.querySelector(".result-3").innerText = "";
  document.querySelector(".result-4").innerText = "Все поля очищены!";
}
