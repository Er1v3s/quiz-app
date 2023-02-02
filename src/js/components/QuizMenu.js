const QuizMenu = () => {
  const menu = document.querySelector(".menu");

  return (menu.innerHTML = `
    <div class="menu__wrapper">
        <h2 class="menu__title">
            Jaka kategoria quizu cię interesuje?
        </h2>

        <button class="menu__quiz_category" id="programming">Programming</button>
        <button class="menu__quiz_category" id="database">Database</button>
        <button class="menu__quiz_category" id="computer_networks">Computer Networks</button>
    </div>
    `);
};

export default QuizMenu;
