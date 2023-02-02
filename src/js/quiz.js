import questions from "./questions";

// Components
import ScoreBoard from "./components/ScoreBoard";

class Quiz {
  constructor() {
    this.question_counter = 0;
    this.score = 0;
    this.value;

    this.submit_button = document.querySelector(".submit-button");
    this.question = document.querySelector(".game-board__question-content");
    this.answer = [...document.querySelectorAll(".game-board__answer")];

    this.submit_button.addEventListener("click", (e) => {
      e.preventDefault();
      this.checkAnswer();
      this.question_counter >= questions.length - 1
        ? this.quizEnd(this.score)
        : this.nextQuestion();
    });
  }

  removeClassName() {
    this.answer.forEach((answer) => {
      answer.classList.remove("game-board__answer--active");
    });
  }

  checkAnswer() {
    if (this.value === questions[this.question_counter].correct_answer) {
      this.score++;
    }
  }

  nextQuestion() {
    this.question_counter++;
    this.removeClassName();
    this.renderQuestion();
  }

  quizStart() {
    this.question_counter = 0;
    this.score = 0;
    this.value = null;
    this.removeClassName();
    this.renderQuestion();
  }

  quizEnd(score) {
    ScoreBoard(score);

    const scoreBoard = document.querySelector(".score-board");
    const gameBoard = document.querySelector(".game-board");
    const playAgainButton = document.querySelector(".playagain-button");
    playAgainButton.addEventListener("click", (e) => {
      e.preventDefault();
      scoreBoard.classList.add("hide");
      gameBoard.classList.remove("hide");
      this.quizStart();
    });
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
        console.log(e.target.value);
        this.removeClassName();
        this.answer[e.target.value].classList.toggle(
          "game-board__answer--active"
        );
        this.value = e.target.value;
        this.value = parseInt(this.value);
      });
    });
  }
}

export default Quiz;