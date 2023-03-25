export class Llamadahtml {
  constructor() {}

  /**
   *
   * @param {string} text pregunta
   */

  showQuestion(text) {
    const preguntaTitulo = document.getElementById("question");
    preguntaTitulo.innerText = text;
  }

  /**
   *
   * @param {string} imagenes
   */

  showImagenes(imagenes) {
    const imagenTitulo = document.getElementById("imagenes1");
    imagenTitulo.innerText = "";
    const mostrar = document.createElement("img");
    mostrar.src = imagenes;
    mostrar.className = "imagenes";
    imagenTitulo.append(mostrar);
  }

  /**
   *
   * @param {string[]} choices arreglo opciones de las pregunta
   */

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    choices.sort(function () {
      return Math.random() - 0.5;
    }); // esto es para hacer la pregunta aleotorias
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", function () {
        
        return callback(choices[i]);
      });
      choicesContainer.append(button);
    }
  }

  /**
   *
   * @param {number} score total de puntos
   */

  showScores(score,total) {
    const quizEndHtml = `

  <div class="container mt-4" id="contenedor">
     <div class="card-body" id="card2" style="margin-top: 10px;
     width:100%;
     height: 70vh;
     display: flex;
     justify-content: center;
     align-items: center;" >
         <div class="encabezado" id="quiz" style=" width:100% ;text-align: center;">
            <h2>ACA TE MUESTRO TU RESULTADO</h2>
            <h2>TU RESULTADO ES : ${score}  </h2>
            <h2>ACERTASTES DE LAS PREGUNTAS UN : ${score/total*100} %  </h2>
         </div>
     </div>

</div>

`;

    const elment = document.getElementById("quiz");
    elment.innerHTML = quizEndHtml;
  }

  /**
   *
   * @param {number} currentIndex currente index
   * @param {number} total total number
   */

  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Estas en la pregunta ${currentIndex} de ${total} preguntas`;
  }
}
