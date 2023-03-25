//@ts-check
import { newQuestions } from "./data/question.js";
import { Quiz } from "./models/Quiz.js";
import { Llamadahtml } from "./models/Llamadahtml.js";

/**
 *
 * @param {Quiz} quiz  the main quiz object
 * @param {Llamadahtml} ui object
 */

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score,quiz.questions.length)
  } else {
    ui.showQuestion(quiz.getQuestionsIndex().text);
    ui.showImagenes(quiz.getQuestionsIndex().imagenes);
    ui.showChoices(quiz.getQuestionsIndex().choices, (currentChoice) => {
      quiz.gues(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex +1 , quiz.questions.length)
  }
};

function main() {
  const quiz = new Quiz(newQuestions);

  const ui = new Llamadahtml();
  renderPage(quiz, ui);
  
}

main();
