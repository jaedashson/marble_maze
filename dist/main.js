/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/input */ "./src/scripts/input.js");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/board */ "./src/scripts/board.js");
/* harmony import */ var _scripts_marble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/marble */ "./src/scripts/marble.js");





var canvas = document.getElementById("game-screen");
var ctx = canvas.getContext("2d"); // Can I make these variables?

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var board = new _scripts_board__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
var marble = new _scripts_marble__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _scripts_input__WEBPACK_IMPORTED_MODULE_1__["default"](board);
var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_2__["default"](board, marble);
var lastTime = 0;

function gameLoop(timestamp) {
  var deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board = /*#__PURE__*/function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
    this.tiltX = 0;
    this.tiltY = 0;
    this.maxTiltX = 30;
    this.maxTiltY = 30;
  }

  _createClass(Board, [{
    key: "draw",
    value: function draw(ctx) {
      // ctx.fillStyle = "#edb879";
      // ctx.fillRect(0, 0, this.width, this.height);
      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(this.width, 0);
      ctx.lineTo(this.width, this.height);
      ctx.lineTo(0, this.height);
      ctx.lineTo(0, 0);
      ctx.stroke();
    }
  }, {
    key: "tiltUp",
    value: function tiltUp() {
      if (this.tiltY === -1 * this.maxTiltY) return;
      this.tiltY--;
    }
  }, {
    key: "tiltDown",
    value: function tiltDown() {
      if (this.tiltY === this.maxTiltY) return;
      this.tiltY++;
    }
  }, {
    key: "tiltLeft",
    value: function tiltLeft() {
      if (this.tiltX === -1 * this.maxTiltX) return;
      this.tiltX--;
    }
  }, {
    key: "tiltRight",
    value: function tiltRight() {
      if (this.tiltX === this.maxTiltX) return;
      this.tiltX++;
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game(board, marble) {
    _classCallCheck(this, Game);

    this.board = board;
    this.marble = marble;
  }

  _createClass(Game, [{
    key: "update",
    value: function update(deltaTime) {
      // this.board.update(deltaTime);
      this.marble.update(deltaTime, this.board.tiltX, this.board.tiltY);
    }
  }, {
    key: "drawHUD",
    value: function drawHUD(ctx) {
      ctx.font = "16px Arial";
      ctx.fillText("tilt: x=".concat(this.board.tiltX, " y=").concat(this.board.tiltY), 20, 20);
      ctx.fillText("acceleration: x=".concat(this.marble.acceleration.x, " y=").concat(this.marble.acceleration.y), 20, 50);
      ctx.fillText("speed: x=".concat(this.marble.speed.x, " y=").concat(this.marble.speed.y), 20, 80);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.board.draw(ctx);
      this.marble.draw(ctx);
      this.drawHUD(ctx);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/input.js":
/*!******************************!*\
  !*** ./src/scripts/input.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(board) {
  _classCallCheck(this, InputHandler);

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 87:
        // W
        debugger;
        board.tiltUp();
        break;

      case 83:
        // S
        debugger;
        board.tiltDown();
        break;

      case 65:
        // A
        debugger;
        board.tiltLeft();
        break;

      case 68:
        // D
        debugger;
        board.tiltRight();
        break;

      default:
        break;
    }
  });
};



/***/ }),

/***/ "./src/scripts/marble.js":
/*!*******************************!*\
  !*** ./src/scripts/marble.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Marble; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Marble = /*#__PURE__*/function () {
  function Marble() {
    _classCallCheck(this, Marble);

    this.image = document.getElementById("img-marble");
    this.position = {
      x: 300,
      y: 300
    };
    this.acceleration = {
      x: 0,
      y: 0
    };
    this.speed = {
      x: 0,
      y: 0
    };
    this.gravity = 0.01; // Adjust

    this.friction = 0.25; // Adjust
  }

  _createClass(Marble, [{
    key: "degToRad",
    value: function degToRad(deg) {
      return deg * (Math.PI / 180);
    }
  }, {
    key: "calculateAcceleration",
    value: function calculateAcceleration(deg) {
      var sign = Math.sign(deg);
      var degAbs = Math.abs(deg);
      var rad = this.degToRad(degAbs);
      return sign * this.gravity * (Math.sin(rad) - this.friction * Math.cos(rad));
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.position.x, this.position.y, 16, 16);
    } // a = g(sinθ - μcosθ)

  }, {
    key: "update",
    value: function update(deltaTime, tiltX, tiltY) {
      this.acceleration.x = this.calculateAcceleration(tiltX);
      this.acceleration.y = this.calculateAcceleration(tiltY);
      this.speed.x = this.acceleration.x * deltaTime;
      this.speed.y = this.acceleration.y * deltaTime;
      this.position.x += this.speed.x * deltaTime;
      this.position.y += this.speed.y * deltaTime;
    }
  }]);

  return Marble;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFyYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImJvYXJkIiwiQm9hcmQiLCJtYXJibGUiLCJNYXJibGUiLCJJbnB1dEhhbmRsZXIiLCJnYW1lIiwiR2FtZSIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lc3RhbXAiLCJkZWx0YVRpbWUiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJ0aWx0WCIsInRpbHRZIiwibWF4VGlsdFgiLCJtYXhUaWx0WSIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZm9udCIsImZpbGxUZXh0IiwiYWNjZWxlcmF0aW9uIiwieCIsInkiLCJzcGVlZCIsImRyYXdIVUQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwidGlsdFVwIiwidGlsdERvd24iLCJ0aWx0TGVmdCIsInRpbHRSaWdodCIsImltYWdlIiwicG9zaXRpb24iLCJncmF2aXR5IiwiZnJpY3Rpb24iLCJkZWciLCJNYXRoIiwiUEkiLCJzaWduIiwiZGVnQWJzIiwiYWJzIiwicmFkIiwiZGVnVG9SYWQiLCJzaW4iLCJjb3MiLCJkcmF3SW1hZ2UiLCJjYWxjdWxhdGVBY2Nl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QkUsQ0FBbEIsR0FBc0IsS0FBS3lCLHFCQUFMLENBQTJCckMsS0FBM0IsQ0FBdEI7QUFFQSxXQUFLYSxLQUFMLENBQVdGLENBQVgsR0FBZSxLQUFLRCxZQUFMLENBQWtCQyxDQUFsQixHQUFzQm5CLFNBQXJDO0FBQ0EsV0FBS3FCLEtBQUwsQ0FBV0QsQ0FBWCxHQUFlLEtBQUtGLFlBQUwsQ0FBa0JFLENBQWxCLEdBQXNCcEIsU0FBckM7QUFFQSxXQUFLK0IsUUFBTCxDQUFjWixDQUFkLElBQW1CLEtBQUtFLEtBQUwsQ0FBV0YsQ0FBWCxHQUFlbkIsU0FBbEM7QUFDQSxXQUFLK0IsUUFBTCxDQUFjWCxDQUFkLElBQW1CLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxHQUFlcEIsU0FBbEM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0gsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBJbnB1dEhhbmRsZXIgZnJvbSBcIi4vc2NyaXB0cy9pbnB1dFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vc2NyaXB0cy9ib2FyZFwiO1xuaW1wb3J0IE1hcmJsZSBmcm9tIFwiLi9zY3JpcHRzL21hcmJsZVwiO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXNjcmVlblwiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4vLyBDYW4gSSBtYWtlIHRoZXNlIHZhcmlhYmxlcz9cbmNvbnN0IEdBTUVfV0lEVEggPSA4MDA7XG5jb25zdCBHQU1FX0hFSUdIVCA9IDYwMDtcblxubGV0IGJvYXJkID0gbmV3IEJvYXJkKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbmxldCBtYXJibGUgPSBuZXcgTWFyYmxlKCk7XG5uZXcgSW5wdXRIYW5kbGVyKGJvYXJkKTtcbmxldCBnYW1lID0gbmV3IEdhbWUoYm9hcmQsIG1hcmJsZSk7XG5cbmxldCBsYXN0VGltZSA9IDA7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKHRpbWVzdGFtcCkge1xuICBsZXQgZGVsdGFUaW1lID0gdGltZXN0YW1wIC0gbGFzdFRpbWU7XG4gIGxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBnYW1lLnVwZGF0ZShkZWx0YVRpbWUpO1xuICBnYW1lLmRyYXcoY3R4KTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMudGlsdFggPSAwO1xuICAgIHRoaXMudGlsdFkgPSAwO1xuICAgIHRoaXMubWF4VGlsdFggPSAzMDtcbiAgICB0aGlzLm1heFRpbHRZID0gMzA7XG4gIH1cbiAgXG4gIGRyYXcoY3R4KSB7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2VkYjg3OVwiO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCAwKTtcbiAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKDAsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHRpbHRVcCgpIHtcbiAgICBpZiAodGhpcy50aWx0WSA9PT0gLTEgKiB0aGlzLm1heFRpbHRZKSByZXR1cm47XG4gICAgdGhpcy50aWx0WS0tO1xuICB9XG5cbiAgdGlsdERvd24oKSB7XG4gICAgaWYgKHRoaXMudGlsdFkgPT09IHRoaXMubWF4VGlsdFkpIHJldHVybjtcbiAgICB0aGlzLnRpbHRZKys7XG4gIH1cblxuICB0aWx0TGVmdCgpIHtcbiAgICBpZiAodGhpcy50aWx0WCA9PT0gLTEgKiB0aGlzLm1heFRpbHRYKSByZXR1cm47XG4gICAgdGhpcy50aWx0WC0tO1xuICB9XG5cbiAgdGlsdFJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnRpbHRYID09PSB0aGlzLm1heFRpbHRYKSByZXR1cm47XG4gICAgdGhpcy50aWx0WCsrO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkLCBtYXJibGUpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5tYXJibGUgPSBtYXJibGU7XG4gIH1cbiAgXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmJvYXJkLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMubWFyYmxlLnVwZGF0ZShkZWx0YVRpbWUsIHRoaXMuYm9hcmQudGlsdFgsIHRoaXMuYm9hcmQudGlsdFkpO1xuICB9XG5cbiAgZHJhd0hVRChjdHgpIHtcbiAgICBjdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsVGV4dChgdGlsdDogeD0ke3RoaXMuYm9hcmQudGlsdFh9IHk9JHt0aGlzLmJvYXJkLnRpbHRZfWAsIDIwLCAyMCk7XG5cbiAgICBjdHguZmlsbFRleHQoYGFjY2VsZXJhdGlvbjogeD0ke3RoaXMubWFyYmxlLmFjY2VsZXJhdGlvbi54fSB5PSR7dGhpcy5tYXJibGUuYWNjZWxlcmF0aW9uLnl9YCwgMjAsIDUwKTtcbiAgICBjdHguZmlsbFRleHQoYHNwZWVkOiB4PSR7dGhpcy5tYXJibGUuc3BlZWQueH0geT0ke3RoaXMubWFyYmxlLnNwZWVkLnl9YCwgMjAsIDgwKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgdGhpcy5ib2FyZC5kcmF3KGN0eClcbiAgICB0aGlzLm1hcmJsZS5kcmF3KGN0eCk7XG4gICAgdGhpcy5kcmF3SFVEKGN0eCk7XG5cbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA4NzogLy8gV1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgYm9hcmQudGlsdFVwKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODM6IC8vIFNcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIGJvYXJkLnRpbHREb3duKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjU6IC8vIEFcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIGJvYXJkLnRpbHRMZWZ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjg6IC8vIERcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIGJvYXJkLnRpbHRSaWdodCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctbWFyYmxlXCIpO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAzMDAsXG4gICAgICB5OiAzMDBcbiAgICB9O1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLmdyYXZpdHkgPSAwLjAxOyAvLyBBZGp1c3RcbiAgICB0aGlzLmZyaWN0aW9uID0gMC4yNTsgLy8gQWRqdXN0XG4gIH1cblxuICBkZWdUb1JhZChkZWcpIHtcbiAgICByZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xuICB9XG5cbiAgY2FsY3VsYXRlQWNjZWxlcmF0aW9uKGRlZykge1xuICAgIGxldCBzaWduID0gTWF0aC5zaWduKGRlZyk7XG4gICAgbGV0IGRlZ0FicyA9IE1hdGguYWJzKGRlZyk7XG4gICAgbGV0IHJhZCA9IHRoaXMuZGVnVG9SYWQoZGVnQWJzKTtcbiAgICByZXR1cm4gc2lnbiAqIHRoaXMuZ3Jhdml0eSAqIChNYXRoLnNpbihyYWQpIC0gdGhpcy5mcmljdGlvbiAqIE1hdGguY29zKHJhZCkpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxNiwgMTYpO1xuICB9XG5cbiAgLy8gYSA9IGcoc2luzrggLSDOvGNvc864KVxuICB1cGRhdGUoZGVsdGFUaW1lLCB0aWx0WCwgdGlsdFkpIHtcbiAgICB0aGlzLmFjY2VsZXJhdGlvbi54ID0gdGhpcy5jYWxjdWxhdGVBY2NlbGVyYXRpb24odGlsdFgpO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uLnkgPSB0aGlzLmNhbGN1bGF0ZUFjY2VsZXJhdGlvbih0aWx0WSk7XG5cbiAgICB0aGlzLnNwZWVkLnggPSB0aGlzLmFjY2VsZXJhdGlvbi54ICogZGVsdGFUaW1lO1xuICAgIHRoaXMuc3BlZWQueSA9IHRoaXMuYWNjZWxlcmF0aW9uLnkgKiBkZWx0YVRpbWU7XG5cbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZC54ICogZGVsdGFUaW1lO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkLnkgKiBkZWx0YVRpbWU7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9