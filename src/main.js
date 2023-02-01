import questions from "./js/questions.js";
class Quiz {
  constructor() {
    this.question_counter = 0;

    this.submit_button = document.querySelector(".submit-button");
    this.question = document.querySelector(".game-board__question-content");
    this.answer = [...document.querySelectorAll(".game-board__answer")];

    this.render_question();
    this.submit_button.addEventListener("click", this.nextQuestion.bind(this));

    // console.log(this.question.innerText);
    // console.log(this.answer[0].innerText);
    // console.log(this.answer[1].innerText);
    // console.log(this.answer[2].innerText);
    // console.log(this.answer[3].innerText);
    // console.log(questions[0].correct_answer);
  }

  nextQuestion(e) {
    e.preventDefault();
    this.question_counter++;
    // console.log("zostałem kliknięty");
    // console.log(this.question_counter);
    this.render_question();
  }

  render_question() {
    this.question.innerText = questions[this.question_counter].question;
    for (let i = 0; i < this.answer.length; i++) {
      this.answer[i].innerText = questions[this.question_counter].answer[i];
    }
  }
}

new Quiz();
