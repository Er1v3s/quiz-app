const QuizMenu = () => {
  const menu = document.querySelector(".menu");

  return (menu.innerHTML = `
    <div>
        <h2>
            Jaka kategoria quizu cię interesuje?
        </h2>

        <button class="quiz_category" id="programming">Programming</button>
        <button class="quiz_category" id="database">Database</button>
        <button class="quiz_category" id="computer_networks">Computer Networks</button>
    </div>
    `);
};

export default QuizMenu;
