// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/js/components/QuizMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var QuizMenu = function QuizMenu() {
  var menu = document.querySelector(".menu");
  return menu.innerHTML = "\n    <div class=\"menu__wrapper\">\n        <h2 class=\"menu__title\">\n            Jaka kategoria quizu ci\u0119 interesuje?\n        </h2>\n\n        <button class=\"menu__quiz_category\" id=\"programming\">Programowanie</button>\n        <button class=\"menu__quiz_category\" id=\"database\">Bazy danych</button>\n        <button class=\"menu__quiz_category\" id=\"computer_networks\">Sieci komputerowe</button>\n    </div>\n    ";
};
var _default = QuizMenu;
exports.default = _default;
},{}],"../src/js/questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var questions = [{
  // PROGRAMMING

  id: 1,
  category: "programming",
  question: "W języku JavaScript metoda document.getElementById(id) ma za zadanie",
  answer: {
    0: "Pobrać dane z pola formularza i wstawić je do zmiennej id",
    1: "Sprawdzić poprawność formularza o identyfikatorze id",
    2: "Wstawić tekst o treści 'id' na stronie WWW",
    3: "Zwrócić odniesienie do pierwszego elementu HTML o podanym id"
  },
  correct_answer: 3
}, {
  id: 2,
  category: "programming",
  question: "Deklaracja w języku JavaScript: let x = 'true'; powoduje, że zmienna x jest typu",
  answer: {
    0: "Logicznego",
    1: "Tekstowego",
    2: "Wyliczeniowego",
    3: "Liczbowego"
  },
  correct_answer: 1
}, {
  id: 3,
  category: "programming",
  question: "Który z kodów szesnastkowych oznacza kolor żółty?",
  answer: {
    0: "#FFFF00",
    1: "#FF00FF",
    2: "#00FFFF",
    3: "#F0F0F0"
  },
  correct_answer: 0
}, {
  id: 4,
  category: "programming",
  question: "Który z wymienionych systemów nie jest systemem CMS?",
  answer: {
    0: "Drupal",
    1: "WordPress",
    2: "Joomla!",
    3: "Figma"
  },
  correct_answer: 3
}, {
  id: 5,
  category: "programming",
  question: "Aby zamieścić aplikację webową w internecie, należy jej pliki źródłowe skopiować na serwer za pomocą protokołu",
  answer: {
    0: "HTTP",
    1: "HTTPS",
    2: "FTP",
    3: "AJAX"
  },
  correct_answer: 2
},
// DATABASES

{
  id: 1,
  category: "database",
  question: "Co to jest baza danych?",
  answer: {
    0: "Baza danych to uporządkowany zbiór danych z pewnej dziedziny tematycznej",
    1: "Baza danych to zbiór informacji z pewnej dziedziny",
    2: "Baza danych to zbiór danych z pewnej dziedziny",
    3: "Baza danych to uporządkowany zbiór danych obejmujący całą wiedzę"
  },
  correct_answer: 0
}, {
  id: 2,
  category: "database",
  question: "Co to jest rekord?",
  answer: {
    0: "Rekord zawiera pełną informację o jednym obiekcie bazy.",
    1: "Rekord zbiór informacji na dany temat",
    2: "Rekord zawierający najmniejszą informację o jednym obiekcie bazy.",
    3: "Rekord to element bazy danych zawierający jedną informację"
  },
  correct_answer: 2
}, {
  id: 3,
  category: "database",
  question: "Co to jest kwerenda?",
  answer: {
    0: "Raport",
    1: "Makro",
    2: "Formularz",
    3: "Zapytanie"
  },
  correct_answer: 3
}, {
  id: 4,
  category: "database",
  question: "Integralność bazy danych oznacza, że",
  answer: {
    0: "Baza danych jest wiernym odbiciem swojego obszaru analizy",
    1: "Baza danych jest dobrze skonstruowana",
    2: "Baza danych jest spójna",
    3: "Baza danych nie jest wiernym odbiciem swojego obszaru analizy"
  },
  correct_answer: 0
}, {
  id: 5,
  category: "database",
  question: "Pierwszym etapem projektowania relacyjnej bazy danych to :",
  answer: {
    0: "Określenie relacji między tabelami",
    1: "Określenie celu, jakiemu ma służyć baza danych",
    2: "Określenie pól, które są potrzebne w tabelach",
    3: "Określenie tabel, które są potrzebne w bazie danych"
  },
  correct_answer: 1
},
// COMPUTER NETWORKS

{
  id: 1,
  category: "computer_networks",
  question: "Która usługa serwerowa zapewnia automatyczną konfigurację parametrów sieciowych stacji roboczych?",
  answer: {
    0: "DNS",
    1: "NAT",
    2: "DHCP",
    3: "WINS"
  },
  correct_answer: 2
}, {
  id: 2,
  category: "computer_networks",
  question: "Topologia fizyczna, w której wszystkie urządzenia końcowe są bezpośrednio podłączone do jednego punktu centralnego, np. koncentratora lub przełącznika to topologia",
  answer: {
    0: "Gwiazdy",
    1: "Magistrali",
    2: "Siatki",
    3: "Pierścienia"
  },
  correct_answer: 0
}, {
  id: 3,
  category: "computer_networks",
  question: "Które urządzenie sieciowe pozwala połączyć sieć LAN z WAN?",
  answer: {
    0: "Repeater",
    1: "Hub",
    2: "Switch",
    3: "Router"
  },
  correct_answer: 3
}, {
  id: 4,
  category: "computer_networks",
  question: "Architektura fizyczna sieci, zwana inaczej topologią fizyczną sieci komputerowych określa",
  answer: {
    0: "Przekaz informacji pomiędzy protokołami sieciowymi modelu OSI",
    1: "Standardy komunikacyjne sieci komputerowych",
    2: "Wzajemną komunikację komputerów pomiędzy sobą",
    3: "Sposób połączenia ze sobą komputerów"
  },
  correct_answer: 3
}, {
  id: 5,
  category: "computer_networks",
  question: "Sieci lokalne typu klient-serwer charakteryzują się tym, że",
  answer: {
    0: "Wszystkie komputery klienckie mają dostęp do zasobów pozostałych komputerów",
    1: "Każdy komputer w sieci jest równoprawny z pozostałymi",
    2: "Istnieje jeden wydzielony komputer udostępniający swoje zasoby w sieci",
    3: "Żaden z komputerów nie pełni roli nadrzędnej w stosunku do pozostałych"
  },
  correct_answer: 2
}];
var _default = questions;
exports.default = _default;
},{}],"assets/trophy.svg":[function(require,module,exports) {
module.exports = "/trophy.7673f262.svg";
},{}],"../src/js/components/ScoreBoard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _trophy = _interopRequireDefault(require("../../../public/assets/trophy.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ScoreBoard = function ScoreBoard(score) {
  var gameBoard = document.querySelector(".game-board");
  var scoreBoard = document.querySelector(".score-board");
  return scoreBoard.classList.remove("hide"), gameBoard.classList.add("hide"), scoreBoard.innerHTML = "\n    <h2 class=\"score-board__title\">Congratulations!</h2>\n    <img src=\"".concat(_trophy.default, "\" alt=\"trophy emoji\"/>\n    <h3 class=\"score-board__score-message\">Tw\xF3j wynik: <span class=\"score-board__score\">").concat(score, "</span></h2>\n    <button class=\"playagain-button\">Zagraj ponownie!</button>");
};
var _default = ScoreBoard;
exports.default = _default;
},{"../../../public/assets/trophy.svg":"assets/trophy.svg"}],"../src/js/Quiz.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _questions = _interopRequireDefault(require("./questions"));
var _main = _interopRequireDefault(require("../main"));
var _ScoreBoard = _interopRequireDefault(require("./components/ScoreBoard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Quiz = /*#__PURE__*/function () {
  function Quiz() {
    var _this = this;
    _classCallCheck(this, Quiz);
    this.question_counter = 0;
    this.score = 0;
    this.value;
    this.questionsCopy;
    this.submit_button = document.querySelector(".submit-button");
    this.question = document.querySelector(".game-board__question-content");
    this.answer = _toConsumableArray(document.querySelectorAll(".game-board__answer"));
    this.submit_button.addEventListener("click", function (e) {
      e.preventDefault();
      _this.checkAnswer();
    });
  }
  _createClass(Quiz, [{
    key: "quizStart",
    value: function quizStart(category) {
      this.question_counter = 0;
      this.score = 0;
      this.value = null;
      this.removeClassName();
      this.findCategory(category);
      this.renderQuestion();
    }
  }, {
    key: "quizEnd",
    value: function quizEnd(score) {
      (0, _ScoreBoard.default)(score);
      var scoreBoard = document.querySelector(".score-board");
      var gameBoard = document.querySelector(".game-board");
      var playAgainButton = document.querySelector(".playagain-button");
      playAgainButton.addEventListener("click", function (e) {
        e.preventDefault();
        scoreBoard.classList.add("hide");
        gameBoard.classList.remove("hide");
        (0, _main.default)();
      });
    }
  }, {
    key: "renderQuestion",
    value: function renderQuestion() {
      var _this2 = this;
      this.question.innerHTML = this.questionsCopy[this.question_counter].question;
      for (var i = 0; i < this.answer.length; i++) {
        this.answer[i].innerHTML = "<input type=\"radio\" name=\"answer".concat(this.question_counter, "\" id=\"").concat(i, "\" value=\"").concat(i, "\">\n        ").concat(this.answer[i].innerText = this.questionsCopy[this.question_counter].answer[i]);
      }
      this.answer = _toConsumableArray(document.querySelectorAll(".game-board__answer"));
      this.input = _toConsumableArray(document.getElementsByName("answer".concat(this.question_counter)));
      this.input.forEach(function (input) {
        input.addEventListener("click", function (e) {
          console.log(e.target.value);
          _this2.removeClassName();
          _this2.answer[e.target.value].classList.toggle("game-board__answer--active");
          _this2.value = e.target.value;
          _this2.value = parseInt(_this2.value);
        });
      });
    }
  }, {
    key: "checkAnswer",
    value: function checkAnswer() {
      if (this.value === undefined || this.value === null) {
        alert("Nie podano żadnej odpowiedzi! Jak nie wiesz to strzelaj ;)");
      } else {
        if (this.value === this.questionsCopy[this.question_counter].correct_answer) {
          this.score++;
        }
        this.question_counter >= this.questionsCopy.length - 1 ? this.quizEnd(this.score) : this.nextQuestion();
      }
    }
  }, {
    key: "nextQuestion",
    value: function nextQuestion() {
      this.question_counter++;
      this.value = null;
      this.removeClassName();
      this.renderQuestion();
    }
  }, {
    key: "findCategory",
    value: function findCategory(category) {
      this.questionsCopy = _questions.default.filter(function (element) {
        return element.category === category;
      });
    }
  }, {
    key: "removeClassName",
    value: function removeClassName() {
      this.answer.forEach(function (answer) {
        answer.classList.remove("game-board__answer--active");
      });
    }
  }]);
  return Quiz;
}();
var _default = Quiz;
exports.default = _default;
},{"./questions":"../src/js/questions.js","../main":"../src/main.js","./components/ScoreBoard":"../src/js/components/ScoreBoard.js"}],"../src/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _QuizMenu = _interopRequireDefault(require("./js/components/QuizMenu"));
var _Quiz = _interopRequireDefault(require("./js/Quiz.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var quiz = new _Quiz.default();
var Menu = function Menu() {
  var game_board = document.querySelector(".game-board");
  var score_board = document.querySelector(".score-board");
  var menu = document.querySelector(".menu");
  game_board.classList.add("hide");
  score_board.classList.add("hide");
  menu.classList.remove("hide");
  var categoryBtn = document.querySelectorAll(".menu__quiz_category");
  categoryBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      game_board.classList.remove("hide");
      menu.classList.add("hide");
      quiz.quizStart(e.target.id);
    });
  });
};
(0, _QuizMenu.default)();
Menu();
var _default = Menu;
exports.default = _default;
},{"./js/components/QuizMenu":"../src/js/components/QuizMenu.js","./js/Quiz.js":"../src/js/Quiz.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63795" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/main.js"], null)
//# sourceMappingURL=/main.da4909e4.js.map