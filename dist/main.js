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
var ctx = canvas.getContext("2d");
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var MARBLE_SIZE = 20;
var board = new _scripts_board__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
var marble = new _scripts_marble__WEBPACK_IMPORTED_MODULE_4__["default"](MARBLE_SIZE, GAME_WIDTH, GAME_HEIGHT);
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
    this.accX = 0;
    this.accY = 0;
    this.gravity = 0.0025; // Adjust
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
    } // a = gsinθ

  }, {
    key: "calculateAcc",
    value: function calculateAcc(deg) {
      var sign = Math.sign(deg);
      var degAbs = Math.abs(deg);
      var rad = this.degToRad(degAbs);
      return sign * this.gravity * Math.sin(rad);
    }
  }, {
    key: "degToRad",
    value: function degToRad(deg) {
      return deg * (Math.PI / 180);
    }
  }, {
    key: "updateAccX",
    value: function updateAccX() {
      this.accX = this.calculateAcc(this.tiltX);
    }
  }, {
    key: "updateAccY",
    value: function updateAccY() {
      this.accY = this.calculateAcc(this.tiltY);
    }
  }, {
    key: "tiltUp",
    value: function tiltUp() {
      if (this.tiltY === -1 * this.maxTiltY) return;
      this.tiltY--;
      this.updateAccY();
    }
  }, {
    key: "tiltDown",
    value: function tiltDown() {
      if (this.tiltY === this.maxTiltY) return;
      this.tiltY++;
      this.updateAccY();
    }
  }, {
    key: "tiltLeft",
    value: function tiltLeft() {
      if (this.tiltX === -1 * this.maxTiltX) return;
      this.tiltX--;
      this.updateAccX();
    }
  }, {
    key: "tiltRight",
    value: function tiltRight() {
      if (this.tiltX === this.maxTiltX) return;
      this.tiltX++;
      this.updateAccX();
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
      this.marble.update(deltaTime, this.board.accX, this.board.accY);
    }
  }, {
    key: "drawHUD",
    value: function drawHUD(ctx) {
      ctx.font = "16px Arial";
      ctx.fillText("tilt: x=".concat(this.board.tiltX, " y=").concat(this.board.tiltY), 20, 20);
      ctx.fillText("acceleration: x=".concat(this.board.accX, " y=").concat(this.board.accY), 20, 50);
      ctx.fillText("velocity: x=".concat(this.marble.velX, " y=").concat(this.marble.velY), 20, 80);
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
        board.tiltUp();
        break;

      case 83:
        // S
        board.tiltDown();
        break;

      case 65:
        // A
        board.tiltLeft();
        break;

      case 68:
        // D
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
  function Marble(size, width, height) {
    _classCallCheck(this, Marble);

    this.image = document.getElementById("img-marble");
    this.size = size;
    this.posX = 300;
    this.posY = 300;
    this.velX = 0;
    this.velY = 0;
    this.maxSpeed = 10;
    this.minSpeed = -10;
    this.width = width;
    this.height = height;
  }

  _createClass(Marble, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.posX, this.posY, this.size, this.size);
    }
  }, {
    key: "update",
    value: function update(deltaTime, accX, accY) {
      this.velX += accX * deltaTime;

      if (this.velX > this.maxSpeed) {
        this.velX = this.maxSpeed;
      } else if (this.velX < this.minSpeed) {
        this.velX = this.minSpeed;
      }

      this.velY += accY * deltaTime;

      if (this.velY > this.maxSpeed) {
        this.velY = this.maxSpeed;
      } else if (this.velY < this.minSpeed) {
        this.velY = this.minSpeed;
      }

      this.posX += this.velX * deltaTime;

      if (this.posX < 0) {
        this.posX = 0;
        this.velX = 0;
      } else if (this.posX + this.size > this.width) {
        this.posX = this.width - this.size;
        this.velX = 0;
      }

      this.posY += this.velY * deltaTime;

      if (this.posY < 0) {
        this.posY = 0;
        this.velY = 0;
      } else if (this.posY + this.size > this.height) {
        this.posY = this.height - this.size;
        this.velY = 0;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFyYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsIk1BUkJMRV9TSVpFIiwiYm9hcmQiLCJCb2FyZCIsIm1hcmJsZSIsIk1hcmJsZSIsIklucHV0SGFuZGxlciIsImdhbWUiLCJHYW1lIiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVzdGFtcCIsImRlbHRhVGltZSIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsInRpbHRYIiwidGlsdFkiLCJtYXhUaWx0WCIsIm1heFRpbHRZIiwiYWNjWCIsImFjY1kiLCJncmF2aXR5Iiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkZWciLCJzaWduIiwiTWF0aCIsImRlZ0FicyIsImFicyIsInJhZCIsImRlZ1RvUmFkIiwic2luIiwiUEkiLCJjYWxjdWxhdGVBY2MiLCJ1cGRhdGVBY2NZIiwidXBkYXRlQWNjWCIsImZvbnQiLCJmaWxsVGV4dCIsInZlbFgiLCJ2ZWxZIiwiZHJhd0hVRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJ0aWx0VXAiLCJ0aWx0RG93biIsInRpbHRMZWZ0IiwidGlsdFJpZ2h0Iiwic2l6ZSIsImlt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V0FBS2EsSUFBTCxJQUFhLEtBQUtaLElBQUwsR0FBWWxDLFNBQXpCOztBQUNBLFVBQUksS0FBSzhDLElBQUwsR0FBWSxDQUFoQixFQUFtQjtBQUNqQixhQUFLQSxJQUFMLEdBQVksQ0FBWjtBQUNBLGFBQUtaLElBQUwsR0FBWSxDQUFaO0FBQ0QsT0FIRCxNQUdPLElBQUksS0FBS1ksSUFBTCxHQUFZLEtBQUtILElBQWpCLEdBQXdCLEtBQUtyQyxNQUFqQyxFQUF5QztBQUM5QyxhQUFLd0MsSUFBTCxHQUFZLEtBQUt4QyxNQUFMLEdBQWMsS0FBS3FDLElBQS9CO0FBQ0EsYUFBS1QsSUFBTCxHQUFZLENBQVo7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xESCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IElucHV0SGFuZGxlciBmcm9tIFwiLi9zY3JpcHRzL2lucHV0XCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9zY3JpcHRzL2JvYXJkXCI7XG5pbXBvcnQgTWFyYmxlIGZyb20gXCIuL3NjcmlwdHMvbWFyYmxlXCI7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtc2NyZWVuXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IEdBTUVfV0lEVEggPSA4MDA7XG5jb25zdCBHQU1FX0hFSUdIVCA9IDYwMDtcbmNvbnN0IE1BUkJMRV9TSVpFID0gMjA7XG5cbmxldCBib2FyZCA9IG5ldyBCb2FyZChHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG5sZXQgbWFyYmxlID0gbmV3IE1hcmJsZShNQVJCTEVfU0laRSwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xubmV3IElucHV0SGFuZGxlcihib2FyZCk7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKGJvYXJkLCBtYXJibGUpO1xuXG5sZXQgbGFzdFRpbWUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgZ2FtZS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgZ2FtZS5kcmF3KGN0eCk7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnRpbHRYID0gMDtcbiAgICB0aGlzLnRpbHRZID0gMDtcbiAgICB0aGlzLm1heFRpbHRYID0gMzA7XG4gICAgdGhpcy5tYXhUaWx0WSA9IDMwO1xuICAgIHRoaXMuYWNjWCA9IDA7XG4gICAgdGhpcy5hY2NZID0gMDtcbiAgICB0aGlzLmdyYXZpdHkgPSAwLjAwMjU7IC8vIEFkanVzdFxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCAwKTtcbiAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKDAsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIC8vIGEgPSBnc2luzrhcbiAgY2FsY3VsYXRlQWNjKGRlZykge1xuICAgIGxldCBzaWduID0gTWF0aC5zaWduKGRlZyk7XG4gICAgbGV0IGRlZ0FicyA9IE1hdGguYWJzKGRlZyk7XG4gICAgbGV0IHJhZCA9IHRoaXMuZGVnVG9SYWQoZGVnQWJzKTtcbiAgICByZXR1cm4gc2lnbiAqIHRoaXMuZ3Jhdml0eSAqIE1hdGguc2luKHJhZCk7XG4gIH1cblxuICBkZWdUb1JhZChkZWcpIHtcbiAgICByZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xuICB9XG5cbiAgdXBkYXRlQWNjWCgpIHtcbiAgICB0aGlzLmFjY1ggPSB0aGlzLmNhbGN1bGF0ZUFjYyh0aGlzLnRpbHRYKTtcbiAgfVxuXG4gIHVwZGF0ZUFjY1koKSB7XG4gICAgdGhpcy5hY2NZID0gdGhpcy5jYWxjdWxhdGVBY2ModGhpcy50aWx0WSk7XG4gIH1cblxuICB0aWx0VXAoKSB7XG4gICAgaWYgKHRoaXMudGlsdFkgPT09IC0xICogdGhpcy5tYXhUaWx0WSkgcmV0dXJuO1xuICAgIHRoaXMudGlsdFktLTtcbiAgICB0aGlzLnVwZGF0ZUFjY1koKTtcbiAgfVxuXG4gIHRpbHREb3duKCkge1xuICAgIGlmICh0aGlzLnRpbHRZID09PSB0aGlzLm1heFRpbHRZKSByZXR1cm47XG4gICAgdGhpcy50aWx0WSsrO1xuICAgIHRoaXMudXBkYXRlQWNjWSgpO1xuICB9XG5cbiAgdGlsdExlZnQoKSB7XG4gICAgaWYgKHRoaXMudGlsdFggPT09IC0xICogdGhpcy5tYXhUaWx0WCkgcmV0dXJuO1xuICAgIHRoaXMudGlsdFgtLTtcbiAgICB0aGlzLnVwZGF0ZUFjY1goKTtcbiAgfVxuXG4gIHRpbHRSaWdodCgpIHtcbiAgICBpZiAodGhpcy50aWx0WCA9PT0gdGhpcy5tYXhUaWx0WCkgcmV0dXJuO1xuICAgIHRoaXMudGlsdFgrKztcbiAgICB0aGlzLnVwZGF0ZUFjY1goKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcihib2FyZCwgbWFyYmxlKSB7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgIHRoaXMubWFyYmxlID0gbWFyYmxlO1xuICB9XG4gIFxuICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgLy8gdGhpcy5ib2FyZC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICB0aGlzLm1hcmJsZS51cGRhdGUoZGVsdGFUaW1lLCB0aGlzLmJvYXJkLmFjY1gsIHRoaXMuYm9hcmQuYWNjWSk7XG4gIH1cblxuICBkcmF3SFVEKGN0eCkge1xuICAgIGN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxUZXh0KGB0aWx0OiB4PSR7dGhpcy5ib2FyZC50aWx0WH0geT0ke3RoaXMuYm9hcmQudGlsdFl9YCwgMjAsIDIwKTtcbiAgICBjdHguZmlsbFRleHQoYGFjY2VsZXJhdGlvbjogeD0ke3RoaXMuYm9hcmQuYWNjWH0geT0ke3RoaXMuYm9hcmQuYWNjWX1gLCAyMCwgNTApO1xuICAgIGN0eC5maWxsVGV4dChgdmVsb2NpdHk6IHg9JHt0aGlzLm1hcmJsZS52ZWxYfSB5PSR7dGhpcy5tYXJibGUudmVsWX1gLCAyMCwgODApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICB0aGlzLmJvYXJkLmRyYXcoY3R4KVxuICAgIHRoaXMubWFyYmxlLmRyYXcoY3R4KTtcbiAgICB0aGlzLmRyYXdIVUQoY3R4KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgODc6IC8vIFdcbiAgICAgICAgICBib2FyZC50aWx0VXAoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4MzogLy8gU1xuICAgICAgICAgIGJvYXJkLnRpbHREb3duKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjU6IC8vIEFcbiAgICAgICAgICBib2FyZC50aWx0TGVmdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY4OiAvLyBEXG4gICAgICAgICAgYm9hcmQudGlsdFJpZ2h0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmJsZSB7XG4gIGNvbnN0cnVjdG9yKHNpemUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctbWFyYmxlXCIpO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5wb3NYID0gMzAwO1xuICAgIHRoaXMucG9zWSA9IDMwMDtcbiAgICB0aGlzLnZlbFggPSAwO1xuICAgIHRoaXMudmVsWSA9IDA7XG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgIHRoaXMubWluU3BlZWQgPSAtMTA7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMucG9zWCwgdGhpcy5wb3NZLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG4gIH1cblxuICB1cGRhdGUoZGVsdGFUaW1lLCBhY2NYLCBhY2NZKSB7XG4gICAgdGhpcy52ZWxYICs9IGFjY1ggKiBkZWx0YVRpbWU7XG4gICAgaWYgKHRoaXMudmVsWCA+IHRoaXMubWF4U3BlZWQpIHtcbiAgICAgIHRoaXMudmVsWCA9IHRoaXMubWF4U3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZlbFggPCB0aGlzLm1pblNwZWVkKSB7XG4gICAgICB0aGlzLnZlbFggPSB0aGlzLm1pblNwZWVkO1xuICAgIH1cblxuICAgIHRoaXMudmVsWSArPSBhY2NZICogZGVsdGFUaW1lO1xuICAgIGlmICh0aGlzLnZlbFkgPiB0aGlzLm1heFNwZWVkKSB7XG4gICAgICB0aGlzLnZlbFkgPSB0aGlzLm1heFNwZWVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy52ZWxZIDwgdGhpcy5taW5TcGVlZCkge1xuICAgICAgdGhpcy52ZWxZID0gdGhpcy5taW5TcGVlZDtcbiAgICB9XG5cbiAgICB0aGlzLnBvc1ggKz0gdGhpcy52ZWxYICogZGVsdGFUaW1lO1xuICAgIGlmICh0aGlzLnBvc1ggPCAwKSB7XG4gICAgICB0aGlzLnBvc1ggPSAwO1xuICAgICAgdGhpcy52ZWxYID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zWCArIHRoaXMuc2l6ZSA+IHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMucG9zWCA9IHRoaXMud2lkdGggLSB0aGlzLnNpemU7XG4gICAgICB0aGlzLnZlbFggPSAwO1xuICAgIH1cblxuICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFkgKiBkZWx0YVRpbWU7XG4gICAgaWYgKHRoaXMucG9zWSA8IDApIHtcbiAgICAgIHRoaXMucG9zWSA9IDA7XG4gICAgICB0aGlzLnZlbFkgPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NZICsgdGhpcy5zaXplID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMucG9zWSA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5zaXplO1xuICAgICAgdGhpcy52ZWxZID0gMDtcbiAgICB9XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9