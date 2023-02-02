import QuizMenu from "./js/components/QuizMenu";
import Quiz from "./js/Quiz.js";

const quiz = new Quiz();

const Menu = () => {
  const game_board = document.querySelector(".game-board");
  const score_board = document.querySelector(".score-board");
  const menu = document.querySelector(".menu");

  game_board.classList.add("hide");
  score_board.classList.add("hide");
  menu.classList.remove("hide");

  const categoryBtn = document.querySelectorAll(".menu__quiz_category");
  categoryBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      game_board.classList.remove("hide");
      menu.classList.add("hide");
      quiz.quizStart(e.target.id);
    });
  });
};

QuizMenu();
Menu();

export default Menu;
