class Question {
 
/**
 * 
 * @param {string} text 
 * @param {string[]} choices 
 * @param {string[]} answer 
 * @param {string} imagenes 
 */

  constructor(text, choices, answer , imagenes) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.imagenes=imagenes;
  }

  /**
   *
   * @param {string} choice the choice selected
   * @returns {boolean} returns if the choice is correct
   */
  correctAnswer(choice) {
    if (choice === this.answer) {
      // Mostrar un mensaje de felicitación utilizando SweetAlert
      Swal.fire({
        icon: 'success',
        title: '¡Respuesta correcta!',
        text: '¡Excelente!',
      });
      // Aquí puedes añadir código para pasar a la siguiente pregunta
    } else {
      // Mostrar un mensaje de error utilizando SweetAlert
      Swal.fire({
        icon: 'error',
        title: `Respuesta incorrecta.
        La respuesta es ${this.answer}`,
        text: 'Por favor, intenta de nuevo.',
      });
      // Aquí puedes añadir código para permitir al usuario intentar de nuevo
    }
    return  choice === this.answer
   
    ;
    
  }
}

export { Question };
