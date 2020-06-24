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
var GAME_HEIGHT = 600; // const MARBLE_SIZE = 20;

var MARBLE_RADIUS = 10;
var board = new _scripts_board__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
var marble = new _scripts_marble__WEBPACK_IMPORTED_MODULE_4__["default"](MARBLE_RADIUS, GAME_WIDTH, GAME_HEIGHT);
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
      ctx.fillStyle = "black";
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
  function Marble(radius, width, height) {
    _classCallCheck(this, Marble);

    this.image = document.getElementById("img-marble");
    this.radius = radius;
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
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
      ctx.fill();
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

      if (this.posX - this.radius < 0) {
        this.posX = this.radius;
        this.velX = 0;
      } else if (this.posX + this.radius > this.width) {
        this.posX = this.width - this.radius;
        this.velX = 0;
      }

      this.posY += this.velY * deltaTime;

      if (this.posY - this.radius < 0) {
        this.posY = this.radius;
        this.velY = 0;
      } else if (this.posY + this.radius > this.height) {
        this.posY = this.height - this.radius;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFyYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsIk1BUkJMRV9SQURJVVMiLCJib2FyZCIsIkJvYXJkIiwibWFyYmxlIiwiTWFyYmxlIiwiSW5wdXRIYW5kbGVyIiwiZ2FtZSIsIkdhbWUiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZXN0YW1wIiwiZGVsdGFUaW1lIiwiY2xlYXJSZWN0IiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwidGlsdFgiLCJ0aWx0WSIsIm1heFRpbHRYIiwibWF4VGlsdFkiLCJhY2NYIiwiYWNjWSIsImdyYXZpdHkiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRlZyIsInNpZ24iLCJNYXRoIiwiZGVnQWJzIiwiYWJzIiwicmFkIiwiZGVnVG9SYWQiLCJzaW4iLCJQSSIsImNhbGN1bGF0ZUFjYyIsInVwZGF0ZUFjY1kiLCJ1cGRhdGVBY2NYIiwiZmlsbFN0eWxlIiwiZm9udCIsImZpbGxUZXh0IiwidmVsWCIsInZlbFkiLCJkcmF3SFVEIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsInRpbHRVcCIsInRpbHREb3duIiwidGlsdExlZnQiLCJ0aWx0UmlnaHQiLCJyYWRpdXMiLCJpbWFnZSIsInBvc1giLCJwb3NZIiwibWF4U3BlZWQiLCJtaW5TcGVlZCIsImFyYyIsImZpbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBYjtBQUNBLElBQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFFQSxJQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsR0FBcEIsQyxDQUNBOztBQUNBLElBQU1DLGFBQWEsR0FBRyxFQUF0QjtBQUVBLElBQUlDLEtBQUssR0FBRyxJQUFJQyxzREFBSixDQUFVSixVQUFWLEVBQXNCQyxXQUF0QixDQUFaO0FBQ0Es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TCxHQUFZLENBQVo7QUFDRCxPQUhELE1BR08sSUFBSSxLQUFLWSxJQUFMLEdBQVksS0FBS0YsTUFBakIsR0FBMEIsS0FBS3ZDLEtBQW5DLEVBQTBDO0FBQy9DLGFBQUt5QyxJQUFMLEdBQVksS0FBS3pDLEtBQUwsR0FBYSxLQUFLdUMsTUFBOUI7QUFDQSxhQUFLVixJQUFMLEdBQVksQ0FBWjtBQUNEOztBQUVELFdBQUthLElBQUwsSUFBYSxLQUFLWixJQUFMLEdBQVluQyxTQUF6Qjs7QUFDQSxVQUFJLEtBQUsrQyxJQUFMLEdBQVksS0FBS0gsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsYUFBS0csSUFBTCxHQUFZLEtBQUtILE1BQWpCO0FBQ0EsYUFBS1QsSUFBTCxHQUFZLENBQVo7QUFDRCxPQUhELE1BR08sSUFBSSxLQUFLWSxJQUFMLEdBQVksS0FBS0gsTUFBakIsR0FBMEIsS0FBS3RDLE1BQW5DLEVBQTJDO0FBQ2hELGFBQUt5QyxJQUFMLEdBQVksS0FBS3pDLE1BQUwsR0FBYyxLQUFLc0MsTUFBL0I7QUFDQSxhQUFLVCxJQUFMLEdBQVksQ0FBWjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRILHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgSW5wdXRIYW5kbGVyIGZyb20gXCIuL3NjcmlwdHMvaW5wdXRcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIjtcbmltcG9ydCBNYXJibGUgZnJvbSBcIi4vc2NyaXB0cy9tYXJibGVcIjtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1zY3JlZW5cIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuLy8gY29uc3QgTUFSQkxFX1NJWkUgPSAyMDtcbmNvbnN0IE1BUkJMRV9SQURJVVMgPSAxMDtcblxubGV0IGJvYXJkID0gbmV3IEJvYXJkKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbmxldCBtYXJibGUgPSBuZXcgTWFyYmxlKE1BUkJMRV9SQURJVVMsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbm5ldyBJbnB1dEhhbmRsZXIoYm9hcmQpO1xubGV0IGdhbWUgPSBuZXcgR2FtZShib2FyZCwgbWFyYmxlKTtcblxubGV0IGxhc3RUaW1lID0gMDtcblxuZnVuY3Rpb24gZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSBsYXN0VGltZTtcbiAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIGdhbWUudXBkYXRlKGRlbHRhVGltZSk7XG4gIGdhbWUuZHJhdyhjdHgpO1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy50aWx0WCA9IDA7XG4gICAgdGhpcy50aWx0WSA9IDA7XG4gICAgdGhpcy5tYXhUaWx0WCA9IDMwO1xuICAgIHRoaXMubWF4VGlsdFkgPSAzMDtcbiAgICB0aGlzLmFjY1ggPSAwO1xuICAgIHRoaXMuYWNjWSA9IDA7XG4gICAgdGhpcy5ncmF2aXR5ID0gMC4wMDI1OyAvLyBBZGp1c3RcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgMCk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgY3R4LmxpbmVUbygwLCB0aGlzLmhlaWdodCk7XG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBhID0gZ3Npbs64XG4gIGNhbGN1bGF0ZUFjYyhkZWcpIHtcbiAgICBsZXQgc2lnbiA9IE1hdGguc2lnbihkZWcpO1xuICAgIGxldCBkZWdBYnMgPSBNYXRoLmFicyhkZWcpO1xuICAgIGxldCByYWQgPSB0aGlzLmRlZ1RvUmFkKGRlZ0Ficyk7XG4gICAgcmV0dXJuIHNpZ24gKiB0aGlzLmdyYXZpdHkgKiBNYXRoLnNpbihyYWQpO1xuICB9XG5cbiAgZGVnVG9SYWQoZGVnKSB7XG4gICAgcmV0dXJuIGRlZyAqIChNYXRoLlBJIC8gMTgwKTtcbiAgfVxuXG4gIHVwZGF0ZUFjY1goKSB7XG4gICAgdGhpcy5hY2NYID0gdGhpcy5jYWxjdWxhdGVBY2ModGhpcy50aWx0WCk7XG4gIH1cblxuICB1cGRhdGVBY2NZKCkge1xuICAgIHRoaXMuYWNjWSA9IHRoaXMuY2FsY3VsYXRlQWNjKHRoaXMudGlsdFkpO1xuICB9XG5cbiAgdGlsdFVwKCkge1xuICAgIGlmICh0aGlzLnRpbHRZID09PSAtMSAqIHRoaXMubWF4VGlsdFkpIHJldHVybjtcbiAgICB0aGlzLnRpbHRZLS07XG4gICAgdGhpcy51cGRhdGVBY2NZKCk7XG4gIH1cblxuICB0aWx0RG93bigpIHtcbiAgICBpZiAodGhpcy50aWx0WSA9PT0gdGhpcy5tYXhUaWx0WSkgcmV0dXJuO1xuICAgIHRoaXMudGlsdFkrKztcbiAgICB0aGlzLnVwZGF0ZUFjY1koKTtcbiAgfVxuXG4gIHRpbHRMZWZ0KCkge1xuICAgIGlmICh0aGlzLnRpbHRYID09PSAtMSAqIHRoaXMubWF4VGlsdFgpIHJldHVybjtcbiAgICB0aGlzLnRpbHRYLS07XG4gICAgdGhpcy51cGRhdGVBY2NYKCk7XG4gIH1cblxuICB0aWx0UmlnaHQoKSB7XG4gICAgaWYgKHRoaXMudGlsdFggPT09IHRoaXMubWF4VGlsdFgpIHJldHVybjtcbiAgICB0aGlzLnRpbHRYKys7XG4gICAgdGhpcy51cGRhdGVBY2NYKCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoYm9hcmQsIG1hcmJsZSkge1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLm1hcmJsZSA9IG1hcmJsZTtcbiAgfVxuICBcbiAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgIC8vIHRoaXMuYm9hcmQudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgdGhpcy5tYXJibGUudXBkYXRlKGRlbHRhVGltZSwgdGhpcy5ib2FyZC5hY2NYLCB0aGlzLmJvYXJkLmFjY1kpO1xuICB9XG5cbiAgZHJhd0hVRChjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxUZXh0KGB0aWx0OiB4PSR7dGhpcy5ib2FyZC50aWx0WH0geT0ke3RoaXMuYm9hcmQudGlsdFl9YCwgMjAsIDIwKTtcbiAgICBjdHguZmlsbFRleHQoYGFjY2VsZXJhdGlvbjogeD0ke3RoaXMuYm9hcmQuYWNjWH0geT0ke3RoaXMuYm9hcmQuYWNjWX1gLCAyMCwgNTApO1xuICAgIGN0eC5maWxsVGV4dChgdmVsb2NpdHk6IHg9JHt0aGlzLm1hcmJsZS52ZWxYfSB5PSR7dGhpcy5tYXJibGUudmVsWX1gLCAyMCwgODApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICB0aGlzLmJvYXJkLmRyYXcoY3R4KVxuICAgIHRoaXMubWFyYmxlLmRyYXcoY3R4KTtcbiAgICB0aGlzLmRyYXdIVUQoY3R4KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgODc6IC8vIFdcbiAgICAgICAgICBib2FyZC50aWx0VXAoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4MzogLy8gU1xuICAgICAgICAgIGJvYXJkLnRpbHREb3duKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjU6IC8vIEFcbiAgICAgICAgICBib2FyZC50aWx0TGVmdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY4OiAvLyBEXG4gICAgICAgICAgYm9hcmQudGlsdFJpZ2h0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmJsZSB7XG4gIGNvbnN0cnVjdG9yKHJhZGl1cywgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1tYXJibGVcIik7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5wb3NYID0gMzAwO1xuICAgIHRoaXMucG9zWSA9IDMwMDtcbiAgICB0aGlzLnZlbFggPSAwO1xuICAgIHRoaXMudmVsWSA9IDA7XG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgIHRoaXMubWluU3BlZWQgPSAtMTA7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NYLCB0aGlzLnBvc1ksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YVRpbWUsIGFjY1gsIGFjY1kpIHtcbiAgICB0aGlzLnZlbFggKz0gYWNjWCAqIGRlbHRhVGltZTtcbiAgICBpZiAodGhpcy52ZWxYID4gdGhpcy5tYXhTcGVlZCkge1xuICAgICAgdGhpcy52ZWxYID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmVsWCA8IHRoaXMubWluU3BlZWQpIHtcbiAgICAgIHRoaXMudmVsWCA9IHRoaXMubWluU3BlZWQ7XG4gICAgfVxuXG4gICAgdGhpcy52ZWxZICs9IGFjY1kgKiBkZWx0YVRpbWU7XG4gICAgaWYgKHRoaXMudmVsWSA+IHRoaXMubWF4U3BlZWQpIHtcbiAgICAgIHRoaXMudmVsWSA9IHRoaXMubWF4U3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZlbFkgPCB0aGlzLm1pblNwZWVkKSB7XG4gICAgICB0aGlzLnZlbFkgPSB0aGlzLm1pblNwZWVkO1xuICAgIH1cblxuICAgIHRoaXMucG9zWCArPSB0aGlzLnZlbFggKiBkZWx0YVRpbWU7XG4gICAgaWYgKHRoaXMucG9zWCAtIHRoaXMucmFkaXVzIDwgMCkge1xuICAgICAgdGhpcy5wb3NYID0gdGhpcy5yYWRpdXM7XG4gICAgICB0aGlzLnZlbFggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NYICsgdGhpcy5yYWRpdXMgPiB0aGlzLndpZHRoKSB7XG4gICAgICB0aGlzLnBvc1ggPSB0aGlzLndpZHRoIC0gdGhpcy5yYWRpdXM7XG4gICAgICB0aGlzLnZlbFggPSAwO1xuICAgIH1cblxuICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFkgKiBkZWx0YVRpbWU7XG4gICAgaWYgKHRoaXMucG9zWSAtIHRoaXMucmFkaXVzIDwgMCkge1xuICAgICAgdGhpcy5wb3NZID0gdGhpcy5yYWRpdXM7XG4gICAgICB0aGlzLnZlbFkgPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NZICsgdGhpcy5yYWRpdXMgPiB0aGlzLmhlaWdodCkge1xuICAgICAgdGhpcy5wb3NZID0gdGhpcy5oZWlnaHQgLSB0aGlzLnJhZGl1cztcbiAgICAgIHRoaXMudmVsWSA9IDA7XG4gICAgfVxuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==