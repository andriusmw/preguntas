"use strict";

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}

let base_preguntas = readText("JSON.json");
let interprete_bp = JSON.parse(base_preguntas);

var longitudArray = 50;
let i = Math.round(Math.random() * longitudArray);
var correct2 = "";

function escogerPregunta() {

  document.getElementById("answer1").innerHTML = interprete_bp[i].answers[0];
  document.getElementById("answer2").innerHTML = interprete_bp[i].answers[1];
  document.getElementById("answer3").innerHTML = interprete_bp[i].answers[2];
  document.getElementById("answer4").innerHTML = interprete_bp[i].answers[3];
  let correct = interprete_bp[i].correct;
  correct2 = correct;

  interprete_bp.splice(i, 1);
  longitudArray = longitudArray - 1;
}


escogerPregunta();


let counter = 0;
const counterDisplay = document.getElementById("counter-display");
const answer = document.querySelectorAll("li");
const newGame = document.getElementById("new-game");

for (let x of answer) {

  x.addEventListener("click", (event) => {

    if (event.target.textContent === correct2) {
      counter++;
      counterDisplay.textContent = `Score: ${counter} points`;
      event.target.classList.add("win");

      window.setTimeout(() => {
        event.target.classList.remove("win");
        siguientePregunta();
      }, 500);

    } else {
      counterDisplay.textContent = `Score: ${counter} points`;
      event.target.classList.add("lose");

      window.setTimeout(() => {
        event.target.classList.remove("lose");
        siguientePregunta();
      }, 500);
    }

  });
}


function siguientePregunta() {
  var numrandom = Math.round(Math.random() * longitudArray);
  i = numrandom;

  escogerPregunta();
}


const ul = document.querySelector("ul");
let clicks = 0;


ul.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) {
    clicks = clicks + 1;
    if (clicks == 11) {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.textContent =
        `GAME OVER.
        Has acertado ${counter}/10 preguntas.
        Haz click en New Game para continuar.`;
      li.className = "gameover";
    }
  }
});


newGame.addEventListener("click", () => {
  location.reload();
});
