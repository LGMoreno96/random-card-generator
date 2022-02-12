/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".top-suit").innerHTML = symbol;
  document.querySelector(".number").innerHTML = text;
  document.querySelector(".bottom-suit").innerHTML = symbol;
};

//Escoger número o letra
function generateRandomNumber() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
}

//Escoger pinta
let generateRandomSuit = () => {
  let suit = ["♥", "♦", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

//Almacenar los resultados
var text = generateRandomNumber();
var symbol = generateRandomSuit();

//Condicional para el color de las cartas rojas
if (symbol == "♦" || symbol == "♥") {
  const colorTop = document.querySelector(".top-suit").style;
  const colorNumber = document.querySelector(".number").style;
  const colorBottom = document.querySelector(".bottom-suit").style;
  colorTop.color = "red";
  colorNumber.color = "red";
  colorBottom.color = "red";
}
