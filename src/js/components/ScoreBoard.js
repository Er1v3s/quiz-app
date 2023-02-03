import trophy from "../../../public/assets/trophy.svg";

const ScoreBoard = (score) => {
  const gameBoard = document.querySelector(".game-board");
  const scoreBoard = document.querySelector(".score-board");

  return (
    scoreBoard.classList.remove("hide"),
    gameBoard.classList.add("hide"),
    (scoreBoard.innerHTML = `
    <h2 class="score-board__title">Congratulations!</h2>
    <img src="${trophy}" alt="trophy emoji"/>
    <h3 class="score-board__score-message">Twój wynik: <span class="score-board__score">${score}</span></h2>
    <button class="playagain-button">Zagraj ponownie!</button>`)
  );
};

export default ScoreBoard;
