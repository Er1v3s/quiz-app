import trophy from "../../../public/assets/trophy.svg";

const ScoreBoard = (score) => {
  const gameBoard = document.querySelector(".game-board");
  const scoreBoard = document.querySelector(".score-board");

  return (
    scoreBoard.classList.remove("hide"),
    gameBoard.classList.add("hide"),
    (scoreBoard.innerHTML = `
    <h2>Congratulations!</h2>
    <img src="${trophy}" alt="trophy emoji"/>
    <h3>Your Score is <span class="score-board__score">${score}</span></h2>
    <button class="playagain-button">Play again</button>`)
  );
};

export default ScoreBoard;
