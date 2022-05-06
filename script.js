"use strict";

//Declaramos función para leer la pregunta del json

//llamamos función leer pregunta

//declaramos función para coger las respuestas  y la respuesta correcta (answer)
//Aquí iremos modificando el DOM, selecionando por let answer = document.getEelementById("answer")
//y answer.textContent = ---> json.answer

/******************** FUNCIÓN PARA LEER EL JSON *********************************/

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

/***************************************************************************** */

/***************************** FUNCIÓN ESCOGER PREGUNTA **************************************** */
//variables globales
let base_preguntas = readText("JSON.json");
let interprete_bp = JSON.parse(base_preguntas);
//leo el archivo json, lo pasero pasándoselo al interprete_bp

var longitudArray = 50;
let i = Math.round(Math.random() * longitudArray);
var correct2 = "";
//genero número aleatorio entre 0 y 50 para pasárselo al
//intérprete y que así poder llamar distintos objetos y acceder
//a distintas preguntas y respuestas.

function escogerPregunta() {
  console.log(
    (document.getElementById("questionh2").innerHTML =
      interprete_bp[i].question)
  );
  document.getElementById("answer1").innerHTML = interprete_bp[i].answers[0];
  document.getElementById("answer2").innerHTML = interprete_bp[i].answers[1];
  document.getElementById("answer3").innerHTML = interprete_bp[i].answers[2];
  document.getElementById("answer4").innerHTML = interprete_bp[i].answers[3];
  let correct = interprete_bp[i].correct;
  correct2 = correct;
  //Muestra por consola la pregunta y la escribe donde
  //tiene el id question en el documento.

  interprete_bp.splice(i, 1);
  longitudArray = longitudArray - 1;
  //Esto hace que después de mostrar la pregunta, la saque del array para que
  //al volver a llamar a escogerPregunta() no nos pueda salir aleatoriamente la misma.
  //Restamos 1 para que ahora el número aleatorio sea de 0 a 49
}

escogerPregunta();
//SE LLAMA LA FUNCIÓN.

/**************************************************************************************** */

/****************************** FUNCIÓN MARCADOR ************************************** */

//Cuando clickamos en la respuesta correcta  se le pone el fondo verde con una clase
// y sumamos +1 al div del contador.
// .addEventListener("click")
// CUANDO ES UNA RESPUESTA ERRÓNEA, LLAMA A LA FUNCIÓN SIGUIENTE PREGUNTA Y SUMA 1 AL CONTADOR
// ERRORES

let counter = 0;
const counterDisplay = document.getElementById("counter-display");
const answer = document.querySelectorAll("li");
const newGame = document.getElementById("new-game"); // Funcionalidad del botón mañana cuando tengamos funcionando lo principal.

// Hacer bucle que recorra el array de los li. Usar event delegation. Ejemplo de clase.
for (let x of answer) {
  // Añadir un eventListener a cada li
  x.addEventListener("click", (event) => {
    // Conseguir lo que queríamos con la función.
    console.log(event.target.innerText);
    console.log(correct2);
    if (event.target.innerText === correct2) {
      counter++;
      counterDisplay.innerText = `Score = ${counter} points`;
      event.target.classList.add("win");

      //intervalo
      const intervalID = setInterval(() => {
        event.target.classList.remove("win");
        siguientePregunta();
        clearInterval(intervalID);
      }, 500);
      intervalID();
    } else {
      //counter--;
      counterDisplay.innerText = `Score = ${counter} points`;
      event.target.classList.add("lose");

      //intervalo
      const intervalID = setInterval(() => {
        event.target.classList.remove("lose");
        siguientePregunta();
        clearInterval(intervalID);
      }, 500);
      intervalID();
    }
  });
}

/*  */

//creamos bucle, recorrer array answers
//for of
/*en cada vuelta addeventlistener click
/*
    if (event.target == interprete_bp[i].correct) {
        /*revisa como se pone event.target no estoy seguro
        -->aquí ya hacemos cosas, sumamos +1, cambio clase, etc

    }


*/

/************************************************************************************* */

/********************************* FUNCIÓN SIGUIENTE PREGUNTA ************************* */

//Un botón que cuando se hace click llame a esocgerPregunta()
//mirar que NO recargue la página.

function siguientePregunta() {
  var numrandom = Math.round(Math.random() * longitudArray);
  i = numrandom;

  escogerPregunta();
}

/***************************************************************************************** */

/************************************* GAME OVER ************************************* */

//Cuando hayamos clickado 10 preguntas, que aparezca un aleRt diciendo game over.
//Crear con medios de modificación del DOM .createElement("li") --> algo en el DOM
//poniendo "recarga la página o click en juego nuevo" indicando básicamente lo mismo
//que el alert, pero para que se vea que hacemos uso también de lo que nos sugieren.

// .addEventListener --->  contador clicks --> if (Clicks == 10) { Mostrar alert }

//Cuando hayamos clickado 10 preguntas, que aparezca un aleRt diciendo game over.
//Crear con medios de modificación del DOM .createElement("li") --> algo en el DOM
//poniendo "recarga la página o click en juego nuevo" indicando básicamente lo mismo
//que el alert, pero para que se vea que hacemos uso también de lo que nos sugieren.

// .addEventListener --->  contador clicks --> if (Clicks == 10) { Mostrar alert }

const ul = document.querySelector("ul");
let clicks = 0;
/*
ul.addEventListener("click", () => {
  clicks = clicks + 1;
  console.log(clicks);
  if (clicks == 11) {
    alert("GAME OVER");
  }
});*/

ul.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) {
    clicks = clicks + 1;
    if (clicks == 11) {
      alert("GAME OVER" + " Puntuación: " + counter);
      //location.reload();
      //createelement div con la puntuacion y refresh

      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerText =
        `GAME OVER, has acertado ${counter}/10 preguntas ` +
        counter +
        " haz click en new game para continuar";
      li.className += "NombreClase";
    }
  }
  console.log(clicks);
});

/**************************** JUEGO NUEVO ******************************** */

//ref linea 76
newGame.addEventListener("click", () => {
  location.reload();
});

/******************************************************************** */
