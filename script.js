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
var i = Math.round(Math.random() * longitudArray);
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
  document.getElementById("answer4").innerHTML = interprete_bp[i].answers[4];

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

const counter = 0
const counterDisplay = document.getElementById("counter-display")
const answer = document.querySelectorAll("li");
// Necesitamos la constante global que acceda a la opción correcta en el JSON.

// Hacer bucle que recorra el array de los li. Usar event delegation. Ejemplo de clase.
for(let i of answer) {
  // Añadir un eventListener a cada li
  i.addEventListener("click", (event) => {
    // Conseguir lo que queríamos con la función.
    console.log(event.target.innerText)
    if (event.target.innerText === correct) {
      counter++;
      counterDisplay.innerText = `Score = ${counter} points`
      document.getElementById('correct').classList.add('win')
    } else {
      counter--;
      counterDisplay.innerText = `Score = ${counter} points`
      answer.classList.add('lose')
    }
  })
}


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
//

/***************************************************************************************** */

/************************************* GAME OVER ************************************* */

//Cuando hayamos clickado 10 preguntas, que aparezca un aleRt diciendo game over.
//Crear con medios de modificación del DOM .createElement("li") --> algo en el DOM
//poniendo "recarga la página o click en juego nuevo" indicando básicamente lo mismo
//que el alert, pero para que se vea que hacemos uso también de lo que nos sugieren.

// .addEventListener --->  contador clicks --> if (Clicks == 10) { Mostrar alert }
