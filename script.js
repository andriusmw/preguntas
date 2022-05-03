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

//Llamo a readtext para ver si lee el json.

function escogerPregunta() {
  console.log(readText("JSON.json"));
}

escogerPregunta();
//Se lee todo el objeto del json, ahora podemos ir llamando por .pregunta , ,answer etc etc
