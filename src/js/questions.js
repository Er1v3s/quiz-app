const questions = [
  {
    // PROGRAMMING

    id: 1,
    category: "programming",
    question:
      "W języku JavaScript metoda document.getElementById(id) ma za zadanie",
    answer: {
      0: "Pobrać dane z pola formularza i wstawić je do zmiennej id",
      1: "Sprawdzić poprawność formularza o identyfikatorze id",
      2: "Wstawić tekst o treści 'id' na stronie WWW",
      3: "Zwrócić odniesienie do pierwszego elementu HTML o podanym id",
    },
    correct_answer: 3,
  },
  {
    id: 2,
    category: "programming",
    question:
      "Deklaracja w języku JavaScript: let x = 'true'; powoduje, że zmienna x jest typu",
    answer: {
      0: "Logicznego",
      1: "Tekstowego",
      2: "Wyliczeniowego",
      3: "Liczbowego",
    },
    correct_answer: 1,
  },
  {
    id: 3,
    category: "programming",
    question: "Który z kodów szesnastkowych oznacza kolor żółty?",
    answer: {
      0: "#FFFF00",
      1: "#FF00FF",
      2: "#00FFFF",
      3: "#F0F0F0",
    },
    correct_answer: 0,
  },
  {
    id: 4,
    category: "programming",
    question: "Który z wymienionych systemów nie jest systemem CMS?",
    answer: {
      0: "Drupal",
      1: "WordPress",
      2: "Joomla!",
      3: "Figma",
    },
    correct_answer: 3,
  },
  {
    id: 5,
    category: "programming",
    question:
      "Aby zamieścić aplikację webową w internecie, należy jej pliki źródłowe skopiować na serwer za pomocą protokołu",
    answer: {
      0: "HTTP",
      1: "HTTPS",
      2: "FTP",
      3: "AJAX",
    },
    correct_answer: 2,
  },

  // DATABASES

  {
    id: 1,
    category: "database",
    question: "Co to jest baza danych?",
    answer: {
      0: "Baza danych to uporządkowany zbiór danych z pewnej dziedziny tematycznej, zorganizowany w sposób umożliwiający ich wyszukiwanie według zadanych kryteriów",
      1: "Baza danych to zbiór informacji z pewnej dziedziny",
      2: "Baza danych to zbiór danych z pewnej dziedziny",
      3: "Baza danych to uporządkowany zbiór danych obejmujący całą wiedzę",
    },
    correct_answer: 0,
  },
  {
    id: 2,
    category: "database",
    question: "Co to jest rekord?",
    answer: {
      0: "Rekord zawiera pełną informację o jednym obiekcie bazy.",
      1: "Rekord zbiór informacji na dany temat",
      2: "Rekord zawierający najmniejszą informację o jednym obiekcie bazy.",
      3: "Rekord to element bazy danych zawierający jedną informację",
    },
    correct_answer: 2,
  },
  {
    id: 3,
    category: "database",
    question: "Co to jest kwerenda?",
    answer: {
      0: "Raport",
      1: "Makro",
      2: "Formularz",
      3: "Zapytanie",
    },
    correct_answer: 3,
  },
  {
    id: 4,
    category: "database",
    question: "Integralność bazy danych oznacza, że",
    answer: {
      0: "Baza danych jest wiernym odbiciem swojego obszaru analizy",
      1: "Baza danych jest dobrze skonstruowana",
      2: "Baza danych jest spójna",
      3: "Baza danych nie jest wiernym odbiciem swojego obszaru analizy",
    },
    correct_answer: 0,
  },
  {
    id: 5,
    category: "database",
    question: "Pierwszym etapem projektowania relacyjnej bazy danych to :",
    answer: {
      0: "Określenie relacji między tabelami",
      1: "Określenie celu, jakiemu ma służyć baza danych",
      2: "Określenie pól, które są potrzebne w tabelach",
      3: "Określenie tabel, które są potrzebne w bazie danych",
    },
    correct_answer: 1,
  },

  // COMPUTER NETWORKS

  {
    id: 1,
    category: "computer_networks",

    question:
      "Która usługa serwerowa zapewnia automatyczną konfigurację parametrów sieciowych stacji roboczych?",
    answer: {
      0: "DNS",
      1: "NAT",
      2: "DHCP",
      3: "WINS",
    },
    correct_answer: 2,
  },
  {
    id: 2,
    category: "computer_networks",

    question:
      "Topologia fizyczna, w której wszystkie urządzenia końcowe są bezpośrednio podłączone do jednego punktu centralnego, np. koncentratora lub przełącznika to topologia",
    answer: {
      0: "Gwiazdy",
      1: "Magistrali",
      2: "Siatki",
      3: "Pierścienia",
    },
    correct_answer: 0,
  },
  {
    id: 3,
    category: "computer_networks",

    question: "Które urządzenie sieciowe pozwala połączyć sieć LAN z WAN?",
    answer: {
      0: "Repeater",
      1: "Hub",
      2: "Switch",
      3: "Router",
    },
    correct_answer: 3,
  },
  {
    id: 4,
    category: "computer_networks",

    question:
      "Architektura fizyczna sieci, zwana inaczej topologią fizyczną sieci komputerowych określa",
    answer: {
      0: "Przekaz informacji pomiędzy protokołami sieciowymi modelu OSI",
      1: "Standardy komunikacyjne sieci komputerowych",
      2: "Wzajemną komunikację komputerów pomiędzy sobą",
      3: "Sposób połączenia ze sobą komputerów",
    },
    correct_answer: 3,
  },
  {
    id: 5,
    category: "computer_networks",

    question: "Sieci lokalne typu klient-serwer charakteryzują się tym, że",
    answer: {
      0: "Wszystkie komputery klienckie mają dostęp do zasobów pozostałych komputerów",
      1: "Każdy komputer w sieci jest równoprawny z pozostałymi",
      2: "Istnieje jeden wydzielony komputer udostępniający swoje zasoby w sieci",
      3: "Żaden z komputerów nie pełni roli nadrzędnej w stosunku do pozostałych",
    },
    correct_answer: 2,
  },
];

export default questions;
