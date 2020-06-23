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
  }

  _createClass(Board, [{
    key: "draw",
    value: function draw(ctx) {
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
      this.tiltY--;
    }
  }, {
    key: "tiltDown",
    value: function tiltDown() {
      this.tiltY++;
    }
  }, {
    key: "tiltLeft",
    value: function tiltLeft() {
      this.tiltX--;
    }
  }, {
    key: "tiltRight",
    value: function tiltRight() {
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
    key: "draw",
    value: function draw(ctx) {
      this.board.draw(ctx);
      this.marble.draw(ctx);
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
    this.gravity = 0.001; // Adjust

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFyYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImJvYXJkIiwiQm9hcmQiLCJtYXJibGUiLCJNYXJibGUiLCJJbnB1dEhhbmRsZXIiLCJnYW1lIiwiR2FtZSIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lc3RhbXAiLCJkZWx0YVRpbWUiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJ0aWx0WCIsInRpbHRZIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwidGlsdFVwIiwidGlsdERvd24iLCJ0aWx0TGVmdCIsInRpbHRSaWdodCIsImltYWdlIiwicG9zaXRpb24iLCJ4IiwieSIsImFjY2VsZXJhdGlvbiIsInNwZWVkIiwiZ3Jhdml0eSIsImZyaWN0aW9uIiwiZGVnIiwiTWF0aCIsIlBJIiwic2lnbiIsImRlZ0FicyIsImFicyIsInJhZCIsImRlZ1RvUmFkIiwic2luIiwiY29zIiwiZHJhd0ltYWdlIiwiY2FsY3VsYXRlQWNjZWxlcmF0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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TyxLLEVBQU9DLEssRUFBTztBQUM5QixXQUFLaUIsWUFBTCxDQUFrQkYsQ0FBbEIsR0FBc0IsS0FBS2lCLHFCQUFMLENBQTJCakMsS0FBM0IsQ0FBdEI7QUFDQSxXQUFLa0IsWUFBTCxDQUFrQkQsQ0FBbEIsR0FBc0IsS0FBS2dCLHFCQUFMLENBQTJCaEMsS0FBM0IsQ0FBdEI7QUFFQSxXQUFLa0IsS0FBTCxDQUFXSCxDQUFYLEdBQWUsS0FBS0UsWUFBTCxDQUFrQkYsQ0FBbEIsR0FBc0J2QixTQUFyQztBQUNBLFdBQUswQixLQUFMLENBQVdGLENBQVgsR0FBZSxLQUFLQyxZQUFMLENBQWtCRCxDQUFsQixHQUFzQnhCLFNBQXJDO0FBRUEsV0FBS3NCLFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixLQUFLRyxLQUFMLENBQVdILENBQVgsR0FBZXZCLFNBQWxDO0FBQ0EsV0FBS3NCLFFBQUwsQ0FBY0UsQ0FBZCxJQUFtQixLQUFLRSxLQUFMLENBQVdGLENBQVgsR0FBZXhCLFNBQWxDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNILHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgSW5wdXRIYW5kbGVyIGZyb20gXCIuL3NjcmlwdHMvaW5wdXRcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIjtcbmltcG9ydCBNYXJibGUgZnJvbSBcIi4vc2NyaXB0cy9tYXJibGVcIjtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1zY3JlZW5cIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuLy8gQ2FuIEkgbWFrZSB0aGVzZSB2YXJpYWJsZXM/XG5jb25zdCBHQU1FX1dJRFRIID0gODAwO1xuY29uc3QgR0FNRV9IRUlHSFQgPSA2MDA7XG5cbmxldCBib2FyZCA9IG5ldyBCb2FyZChHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG5sZXQgbWFyYmxlID0gbmV3IE1hcmJsZSgpO1xubmV3IElucHV0SGFuZGxlcihib2FyZCk7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKGJvYXJkLCBtYXJibGUpO1xuXG5sZXQgbGFzdFRpbWUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgZ2FtZS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgZ2FtZS5kcmF3KGN0eCk7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMudGlsdFggPSAwO1xuICAgIHRoaXMudGlsdFkgPSAwO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCAwKTtcbiAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKDAsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHRpbHRVcCgpIHtcbiAgICB0aGlzLnRpbHRZLS07XG4gIH1cblxuICB0aWx0RG93bigpIHtcbiAgICB0aGlzLnRpbHRZKys7XG4gIH1cblxuICB0aWx0TGVmdCgpIHtcbiAgICB0aGlzLnRpbHRYLS07XG4gIH1cblxuICB0aWx0UmlnaHQoKSB7XG4gICAgdGhpcy50aWx0WCsrO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkLCBtYXJibGUpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5tYXJibGUgPSBtYXJibGU7XG4gIH1cbiAgXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICAvLyB0aGlzLmJvYXJkLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgIHRoaXMubWFyYmxlLnVwZGF0ZShkZWx0YVRpbWUsIHRoaXMuYm9hcmQudGlsdFgsIHRoaXMuYm9hcmQudGlsdFkpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICB0aGlzLmJvYXJkLmRyYXcoY3R4KVxuICAgIHRoaXMubWFyYmxlLmRyYXcoY3R4KTtcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA4NzogLy8gV1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgYm9hcmQudGlsdFVwKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODM6IC8vIFNcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIGJvYXJkLnRpbHREb3duKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjU6IC8vIEFcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIGJvYXJkLnRpbHRMZWZ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjg6IC8vIERcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIGJvYXJkLnRpbHRSaWdodCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctbWFyYmxlXCIpO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAzMDAsXG4gICAgICB5OiAzMDBcbiAgICB9O1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLmdyYXZpdHkgPSAwLjAwMTsgLy8gQWRqdXN0XG4gICAgdGhpcy5mcmljdGlvbiA9IDAuMjU7IC8vIEFkanVzdFxuICB9XG5cbiAgZGVnVG9SYWQoZGVnKSB7XG4gICAgcmV0dXJuIGRlZyAqIChNYXRoLlBJIC8gMTgwKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUFjY2VsZXJhdGlvbihkZWcpIHtcbiAgICBsZXQgc2lnbiA9IE1hdGguc2lnbihkZWcpO1xuICAgIGxldCBkZWdBYnMgPSBNYXRoLmFicyhkZWcpO1xuICAgIGxldCByYWQgPSB0aGlzLmRlZ1RvUmFkKGRlZ0Ficyk7XG4gICAgcmV0dXJuIHNpZ24gKiB0aGlzLmdyYXZpdHkgKiAoTWF0aC5zaW4ocmFkKSAtIHRoaXMuZnJpY3Rpb24gKiBNYXRoLmNvcyhyYWQpKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTYsIDE2KTtcbiAgfVxuXG4gIC8vIGEgPSBnKHNpbs64IC0gzrxjb3POuClcbiAgdXBkYXRlKGRlbHRhVGltZSwgdGlsdFgsIHRpbHRZKSB7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24ueCA9IHRoaXMuY2FsY3VsYXRlQWNjZWxlcmF0aW9uKHRpbHRYKTtcbiAgICB0aGlzLmFjY2VsZXJhdGlvbi55ID0gdGhpcy5jYWxjdWxhdGVBY2NlbGVyYXRpb24odGlsdFkpO1xuXG4gICAgdGhpcy5zcGVlZC54ID0gdGhpcy5hY2NlbGVyYXRpb24ueCAqIGRlbHRhVGltZTtcbiAgICB0aGlzLnNwZWVkLnkgPSB0aGlzLmFjY2VsZXJhdGlvbi55ICogZGVsdGFUaW1lO1xuXG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQueCAqIGRlbHRhVGltZTtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZC55ICogZGVsdGFUaW1lO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==