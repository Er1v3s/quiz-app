import questions from "./js/questions.js";
class Quiz {
  constructor() {
    this.question_counter = 0;
    this.score = 0;
    this.value;

    this.submit_button = document.querySelector(".submit-button");
    this.question = document.querySelector(".game-board__question-content");
    this.answer = [...document.querySelectorAll(".game-board__answer")];

    this.renderQuestion();
    this.submit_button.addEventListener("click", (e) => {
      e.preventDefault();
      this.nextQuestion();
    });
  }

  checkAnswer() {
    if (this.value === questions[this.question_counter].correct_answer) {
      this.score++;
    }
  }

  nextQuestion() {
    this.checkAnswer();
    this.question_counter++;
    this.renderQuestion();
  }

  renderQuestion() {
    this.question.innerHTML = questions[this.question_counter].question;
    for (let i = 0; i < this.answer.length; i++) {
      this.answer[i].innerHTML = `<input type="radio" name="answer${
        this.question_counter
      }" id="${i}" value="${i}">
        ${(this.answer[i].innerText =
          questions[this.question_counter].answer[i])}`;
    }

    this.answer = [...document.querySelectorAll(".game-board__answer")];
    this.input = [
      ...document.getElementsByName(`answer${this.question_counter}`),
    ];

    this.input.forEach((input) => {
      input.addEventListener("click", (e) => {
        this.value = e.target.value;
        this.value = parseInt(this.value);
      });
    });
  }
}

new Quiz();
