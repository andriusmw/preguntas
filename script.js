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
  document.getElementById("correct").innerHTML = interprete_bp[i].correct;

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
