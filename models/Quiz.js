// @ts-check
import { Question } from "./Question.js";

export class Quiz {
  questionIndex = 0;
  score = 0;

  /**
   *
   * @param {Question[]} questions arreglo de Question
   */

  constructor(questions) {
  
    this.questions = questions;
    questions.sort(() => Math.random() - 0.5);
  
  }

  /**
   *
   * @returns {Question} retornar la pregunta
   */

  getQuestionsIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  /**
   *
   * @param {string} answer
   */

  gues(answer) {
    console.log(answer);
    

    if (this.getQuestionsIndex().correctAnswer(answer)) {
      this.score ++;
    }
    this.questionIndex++;
  }
}
