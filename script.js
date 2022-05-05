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

var i = Math.round(Math.random() * 50);
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
  document.getElementById("correct").innerHTML = interprete_bp[i].correct;

  //Muestra por consola la pregunta y la escribe donde
  //tiene el id question en el documento.
}

escogerPregunta();
//SE LLAMA LA FUNCIÓN.

/**************************************************************************************** */
