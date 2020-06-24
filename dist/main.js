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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFyYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiTUFSQkxFX1JBRElVUyIsImJvYXJkIiwiQm9hcmQiLCJtYXJibGUiLCJNYXJibGUiLCJJbnB1dEhhbmRsZXIiLCJnYW1lIiwiR2FtZSIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lc3RhbXAiLCJkZWx0YVRpbWUiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJ0aWx0WCIsInRpbHRZIiwibWF4VGlsdFgiLCJtYXhUaWx0WSIsImFjY1giLCJhY2NZIiwiZ3Jhdml0eSIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZGVnIiwic2lnbiIsIk1hdGgiLCJkZWdBYnMiLCJhYnMiLCJyYWQiLCJkZWdUb1JhZCIsInNpbiIsIlBJIiwiY2FsY3VsYXRlQWNjIiwidXBkYXRlQWNjWSIsInVwZGF0ZUFjY1giLCJmaWxsU3R5bGUiLCJmb250IiwiZmlsbFRleHQiLCJ2ZWxYIiwidmVsWSIsImRyYXdIVUQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwidGlsdFVwIiwidGlsdERvd24iLCJ0aWx0TGVmdCIsInRpbHRSaWdodCIsInJhZGl1cyIsImltYWdlIiwicG9zWCIsInBvc1kiLCJtYXhTcGVlZCIsIm1pblNwZWVkIiwiYXJjIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFiO0FBQ0EsSUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUVBLElBQU1DLFVBQVUsR0FBRyxHQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxHQUFwQixDLENBQ0E7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLEVBQXRCO0FBRUEsSUFBSUMsS0FBSyxHQUFHLElBQUlDLHNEQUFKLENBQVVKLFVBQVYsRUFBc0JDLFdBQXRCLENBQVo7QUFDQSxJQUFJSSxNQUFNLEdBQUcsSUFBSUMsdURBQUosQ0FBV0osYUFBWCxFQUEwQkYsVUFBMUIsRUFBc0NDLFdBQXRDLENBQWI7QUFDQSxJQUFJTSxzREFBSixDQUFpQkosS0FBakI7QUFDQSxJQUFJSyxJQUFJLEdBQUcsSUFBSUMscURBQUosQ0FBU04sS0FBVCxFQUFnQkUsTUFBaEIsQ0FBWDtBQUVBLElBQUlLLFFBQVEsR0FBRyxDQUFmOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQTZCO0FBQzNCLE1BQUlDLFNBQVMsR0FBR0QsU0FBUyxHQUFHRixRQUE1QjtBQUNBQSxVQUFRLEdBQUdFLFNBQVg7QUFFQWQsS0FBRyxDQUFDZ0IsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JkLFVBQXBCLEVBQWdDQyxXQUFoQztBQUNBTyxNQUFJLENBQUNPLE1BQUwsQ0FBWUYsU0FBWjtBQUNBTCxNQUFJLENBQUNRLElBQUwsQ0FBVWxCLEdBQVY7QUFFQW1CLHVCQUFxQixDQUFDTixRQUFELENBQXJCO0FBQ0Q7O0FBRURNLHFCQUFxQixDQUFDTixRQUFELENBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaENxQlAsSztBQUNuQixpQkFBWWMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxNQUFmLENBVHlCLENBU0Y7QUFDeEI7Ozs7eUJBRUk1QixHLEVBQUs7QUFDUkEsU0FBRyxDQUFDNkIsV0FBSixHQUFrQixPQUFsQjtBQUNBN0IsU0FBRyxDQUFDOEIsU0FBSjtBQUNBOUIsU0FBRyxDQUFDK0IsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0EvQixTQUFHLENBQUNnQyxNQUFKLENBQVcsS0FBS1osS0FBaEIsRUFBdUIsQ0FBdkI7QUFDQXBCLFNBQUcsQ0FBQ2dDLE1BQUosQ0FBVyxLQUFLWixLQUFoQixFQUF1QixLQUFLQyxNQUE1QjtBQUNBckIsU0FBRyxDQUFDZ0MsTUFBSixDQUFXLENBQVgsRUFBYyxLQUFLWCxNQUFuQjtBQUNBckIsU0FBRyxDQUFDZ0MsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0FoQyxTQUFHLENBQUNpQyxNQUFKO0FBQ0QsSyxDQUVEOzs7O2lDQUNhQyxHLEVBQUs7QUFDaEIsVUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNELElBQUwsQ0FBVUQsR0FBVixDQUFYO0FBQ0EsVUFBSUcsTUFBTSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBU0osR0FBVCxDQUFiO0FBQ0EsVUFBSUssR0FBRyxHQUFHLEtBQUtDLFFBQUwsQ0FBY0gsTUFBZCxDQUFWO0FBQ0EsYUFBT0YsSUFBSSxHQUFHLEtBQUtQLE9BQVosR0FBc0JRLElBQUksQ0FBQ0ssR0FBTCxDQUFTRixHQUFULENBQTdCO0FBQ0Q7Ozs2QkFFUUwsRyxFQUFLO0FBQ1osYUFBT0EsR0FBRyxJQUFJRSxJQUFJLENBQUNNLEVBQUwsR0FBVSxHQUFkLENBQVY7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS2hCLElBQUwsR0FBWSxLQUFLaUIsWUFBTCxDQUFrQixLQUFLckIsS0FBdkIsQ0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLSyxJQUFMLEdBQVksS0FBS2dCLFlBQUwsQ0FBa0IsS0FBS3BCLEtBQXZCLENBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLQSxLQUFMLEtBQWUsQ0FBQyxDQUFELEdBQUssS0FBS0UsUUFBN0IsRUFBdUM7QUFDdkMsV0FBS0YsS0FBTDtBQUNBLFdBQUtxQixVQUFMO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUksS0FBS3JCLEtBQUwsS0FBZSxLQUFLRSxRQUF4QixFQUFrQztBQUNsQyxXQUFLRixLQUFMO0FBQ0EsV0FBS3FCLFVBQUw7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSSxLQUFLdEIsS0FBTCxLQUFlLENBQUMsQ0FBRCxHQUFLLEtBQUtFLFFBQTdCLEVBQXVDO0FBQ3ZDLFdBQUtGLEtBQUw7QUFDQSxXQUFLdUIsVUFBTDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJLEtBQUt2QixLQUFMLEtBQWUsS0FBS0UsUUFBeEIsRUFBa0M7QUFDbEMsV0FBS0YsS0FBTDtBQUNBLFdBQUt1QixVQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEVrQmxDLEk7QUFDbkIsZ0JBQVlOLEtBQVosRUFBbUJFLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtFLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzJCQUVNUSxTLEVBQVc7QUFDaEI7QUFDQSxXQUFLUixNQUFMLENBQVlVLE1BQVosQ0FBbUJGLFNBQW5CLEVBQThCLEtBQUtWLEtBQUwsQ0FBV3FCLElBQXpDLEVBQStDLEtBQUtyQixLQUFMLENBQVdzQixJQUExRDtBQUNEOzs7NEJBRU8zQixHLEVBQUs7QUFDWEEsU0FBRyxDQUFDOEMsU0FBSixHQUFnQixPQUFoQjtBQUNBOUMsU0FBRyxDQUFDK0MsSUFBSixHQUFXLFlBQVg7QUFDQS9DLFNBQUcsQ0FBQ2dELFFBQUosbUJBQXdCLEtBQUszQyxLQUFMLENBQVdpQixLQUFuQyxnQkFBOEMsS0FBS2pCLEtBQUwsQ0FBV2tCLEtBQXpELEdBQWtFLEVBQWxFLEVBQXNFLEVBQXRFO0FBQ0F2QixTQUFHLENBQUNnRCxRQUFKLDJCQUFnQyxLQUFLM0MsS0FBTCxDQUFXcUIsSUFBM0MsZ0JBQXFELEtBQUtyQixLQUFMLENBQVdzQixJQUFoRSxHQUF3RSxFQUF4RSxFQUE0RSxFQUE1RTtBQUNBM0IsU0FBRyxDQUFDZ0QsUUFBSix1QkFBNEIsS0FBS3pDLE1BQUwsQ0FBWTBDLElBQXhDLGdCQUFrRCxLQUFLMUMsTUFBTCxDQUFZMkMsSUFBOUQsR0FBc0UsRUFBdEUsRUFBMEUsRUFBMUU7QUFDRDs7O3lCQUVJbEQsRyxFQUFLO0FBQ1IsV0FBS0ssS0FBTCxDQUFXYSxJQUFYLENBQWdCbEIsR0FBaEI7QUFDQSxXQUFLTyxNQUFMLENBQVlXLElBQVosQ0FBaUJsQixHQUFqQjtBQUNBLFdBQUttRCxPQUFMLENBQWFuRCxHQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN2QmtCUyxZLEdBQ25CLHNCQUFZSixLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCUCxVQUFRLENBQUNzRCxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFBQyxLQUFLLEVBQUk7QUFDNUMsWUFBUUEsS0FBSyxDQUFDQyxPQUFkO0FBQ0UsV0FBSyxFQUFMO0FBQVM7QUFDUGpELGFBQUssQ0FBQ2tELE1BQU47QUFDQTs7QUFDRixXQUFLLEVBQUw7QUFBUztBQUNQbEQsYUFBSyxDQUFDbUQsUUFBTjtBQUNBOztBQUNGLFdBQUssRUFBTDtBQUFTO0FBQ1BuRCxhQUFLLENBQUNvRCxRQUFOO0FBQ0E7O0FBQ0YsV0FBSyxFQUFMO0FBQVM7QUFDUHBELGFBQUssQ0FBQ3FELFNBQU47QUFDQTs7QUFDRjtBQUNFO0FBZEo7QUFnQkQsR0FqQkQ7QUFzQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hCa0JsRCxNO0FBQ25CLGtCQUFZbUQsTUFBWixFQUFvQnZDLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQztBQUFBOztBQUNqQyxTQUFLdUMsS0FBTCxHQUFhOUQsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWI7QUFDQSxTQUFLNEQsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsSUFBTCxHQUFZLEdBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksR0FBWjtBQUNBLFNBQUtiLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLYSxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFDLEVBQWpCO0FBQ0EsU0FBSzVDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O3lCQUVJckIsRyxFQUFLO0FBQ1JBLFNBQUcsQ0FBQzhDLFNBQUosR0FBZ0IsTUFBaEI7QUFDQTlDLFNBQUcsQ0FBQzhCLFNBQUo7QUFDQTlCLFNBQUcsQ0FBQ2lFLEdBQUosQ0FBUSxLQUFLSixJQUFiLEVBQW1CLEtBQUtDLElBQXhCLEVBQThCLEtBQUtILE1BQW5DLEVBQTJDLENBQTNDLEVBQThDLElBQUl2QixJQUFJLENBQUNNLEVBQXZEO0FBQ0ExQyxTQUFHLENBQUNrRSxJQUFKO0FBQ0Q7OzsyQkFFTW5ELFMsRUFBV1csSSxFQUFNQyxJLEVBQU07QUFDNUIsV0FBS3NCLElBQUwsSUFBYXZCLElBQUksR0FBR1gsU0FBcEI7O0FBQ0EsVUFBSSxLQUFLa0MsSUFBTCxHQUFZLEtBQUtjLFFBQXJCLEVBQStCO0FBQzdCLGFBQUtkLElBQUwsR0FBWSxLQUFLYyxRQUFqQjtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUtkLElBQUwsR0FBWSxLQUFLZSxRQUFyQixFQUErQjtBQUNwQyxhQUFLZixJQUFMLEdBQVksS0FBS2UsUUFBakI7QUFDRDs7QUFFRCxXQUFLZCxJQUFMLElBQWF2QixJQUFJLEdBQUdaLFNBQXBCOztBQUNBLFVBQUksS0FBS21DLElBQUwsR0FBWSxLQUFLYSxRQUFyQixFQUErQjtBQUM3QixhQUFLYixJQUFMLEdBQVksS0FBS2EsUUFBakI7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLYixJQUFMLEdBQVksS0FBS2MsUUFBckIsRUFBK0I7QUFDcEMsYUFBS2QsSUFBTCxHQUFZLEtBQUtjLFFBQWpCO0FBQ0Q7O0FBRUQsV0FBS0gsSUFBTCxJQUFhLEtBQUtaLElBQUwsR0FBWWxDLFNBQXpCOztBQUNBLFVBQUksS0FBSzhDLElBQUwsR0FBWSxLQUFLRixNQUFqQixHQUEwQixDQUE5QixFQUFpQztBQUMvQixhQUFLRSxJQUFMLEdBQVksS0FBS0YsTUFBakI7QUFDQSxhQUFLVixJQUFMLEdBQVksQ0FBWjtBQUNELE9BSEQsTUFHTyxJQUFJLEtBQUtZLElBQUwsR0FBWSxLQUFLRixNQUFqQixHQUEwQixLQUFLdkMsS0FBbkMsRUFBMEM7QUFDL0MsYUFBS3lDLElBQUwsR0FBWSxLQUFLekMsS0FBTCxHQUFhLEtBQUt1QyxNQUE5QjtBQUNBLGFBQUtWLElBQUwsR0FBWSxDQUFaO0FBQ0Q7O0FBRUQsV0FBS2EsSUFBTCxJQUFhLEtBQUtaLElBQUwsR0FBWW5DLFNBQXpCOztBQUNBLFVBQUksS0FBSytDLElBQUwsR0FBWSxLQUFLSCxNQUFqQixHQUEwQixDQUE5QixFQUFpQztBQUMvQixhQUFLRyxJQUFMLEdBQVksS0FBS0gsTUFBakI7QUFDQSxhQUFLVCxJQUFMLEdBQVksQ0FBWjtBQUNELE9BSEQsTUFHTyxJQUFJLEtBQUtZLElBQUwsR0FBWSxLQUFLSCxNQUFqQixHQUEwQixLQUFLdEMsTUFBbkMsRUFBMkM7QUFDaEQsYUFBS3lDLElBQUwsR0FBWSxLQUFLekMsTUFBTCxHQUFjLEtBQUtzQyxNQUEvQjtBQUNBLGFBQUtULElBQUwsR0FBWSxDQUFaO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREgsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBJbnB1dEhhbmRsZXIgZnJvbSBcIi4vc2NyaXB0cy9pbnB1dFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vc2NyaXB0cy9ib2FyZFwiO1xuaW1wb3J0IE1hcmJsZSBmcm9tIFwiLi9zY3JpcHRzL21hcmJsZVwiO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXNjcmVlblwiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCBHQU1FX1dJRFRIID0gODAwO1xuY29uc3QgR0FNRV9IRUlHSFQgPSA2MDA7XG4vLyBjb25zdCBNQVJCTEVfU0laRSA9IDIwO1xuY29uc3QgTUFSQkxFX1JBRElVUyA9IDEwO1xuXG5sZXQgYm9hcmQgPSBuZXcgQm9hcmQoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xubGV0IG1hcmJsZSA9IG5ldyBNYXJibGUoTUFSQkxFX1JBRElVUywgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xubmV3IElucHV0SGFuZGxlcihib2FyZCk7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKGJvYXJkLCBtYXJibGUpO1xuXG5sZXQgbGFzdFRpbWUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgZ2FtZS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgZ2FtZS5kcmF3KGN0eCk7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnRpbHRYID0gMDtcbiAgICB0aGlzLnRpbHRZID0gMDtcbiAgICB0aGlzLm1heFRpbHRYID0gMzA7XG4gICAgdGhpcy5tYXhUaWx0WSA9IDMwO1xuICAgIHRoaXMuYWNjWCA9IDA7XG4gICAgdGhpcy5hY2NZID0gMDtcbiAgICB0aGlzLmdyYXZpdHkgPSAwLjAwMjU7IC8vIEFkanVzdFxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCAwKTtcbiAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKDAsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIC8vIGEgPSBnc2luzrhcbiAgY2FsY3VsYXRlQWNjKGRlZykge1xuICAgIGxldCBzaWduID0gTWF0aC5zaWduKGRlZyk7XG4gICAgbGV0IGRlZ0FicyA9IE1hdGguYWJzKGRlZyk7XG4gICAgbGV0IHJhZCA9IHRoaXMuZGVnVG9SYWQoZGVnQWJzKTtcbiAgICByZXR1cm4gc2lnbiAqIHRoaXMuZ3Jhdml0eSAqIE1hdGguc2luKHJhZCk7XG4gIH1cblxuICBkZWdUb1JhZChkZWcpIHtcbiAgICByZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xuICB9XG5cbiAgdXBkYXRlQWNjWCgpIHtcbiAgICB0aGlzLmFjY1ggPSB0aGlzLmNhbGN1bGF0ZUFjYyh0aGlzLnRpbHRYKTtcbiAgfVxuXG4gIHVwZGF0ZUFjY1koKSB7XG4gICAgdGhpcy5hY2NZID0gdGhpcy5jYWxjdWxhdGVBY2ModGhpcy50aWx0WSk7XG4gIH1cblxuICB0aWx0VXAoKSB7XG4gICAgaWYgKHRoaXMudGlsdFkgPT09IC0xICogdGhpcy5tYXhUaWx0WSkgcmV0dXJuO1xuICAgIHRoaXMudGlsdFktLTtcbiAgICB0aGlzLnVwZGF0ZUFjY1koKTtcbiAgfVxuXG4gIHRpbHREb3duKCkge1xuICAgIGlmICh0aGlzLnRpbHRZID09PSB0aGlzLm1heFRpbHRZKSByZXR1cm47XG4gICAgdGhpcy50aWx0WSsrO1xuICAgIHRoaXMudXBkYXRlQWNjWSgpO1xuICB9XG5cbiAgdGlsdExlZnQoKSB7XG4gICAgaWYgKHRoaXMudGlsdFggPT09IC0xICogdGhpcy5tYXhUaWx0WCkgcmV0dXJuO1xuICAgIHRoaXMudGlsdFgtLTtcbiAgICB0aGlzLnVwZGF0ZUFjY1goKTtcbiAgfVxuXG4gIHRpbHRSaWdodCgpIHtcbiAgICBpZiAodGhpcy50aWx0WCA9PT0gdGhpcy5tYXhUaWx0WCkgcmV0dXJuO1xuICAgIHRoaXMudGlsdFgrKztcbiAgICB0aGlzLnVwZGF0ZUFjY1goKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcihib2FyZCwgbWFyYmxlKSB7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgIHRoaXMubWFyYmxlID0gbWFyYmxlO1xuICB9XG4gIFxuICB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgLy8gdGhpcy5ib2FyZC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICB0aGlzLm1hcmJsZS51cGRhdGUoZGVsdGFUaW1lLCB0aGlzLmJvYXJkLmFjY1gsIHRoaXMuYm9hcmQuYWNjWSk7XG4gIH1cblxuICBkcmF3SFVEKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjE2cHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFRleHQoYHRpbHQ6IHg9JHt0aGlzLmJvYXJkLnRpbHRYfSB5PSR7dGhpcy5ib2FyZC50aWx0WX1gLCAyMCwgMjApO1xuICAgIGN0eC5maWxsVGV4dChgYWNjZWxlcmF0aW9uOiB4PSR7dGhpcy5ib2FyZC5hY2NYfSB5PSR7dGhpcy5ib2FyZC5hY2NZfWAsIDIwLCA1MCk7XG4gICAgY3R4LmZpbGxUZXh0KGB2ZWxvY2l0eTogeD0ke3RoaXMubWFyYmxlLnZlbFh9IHk9JHt0aGlzLm1hcmJsZS52ZWxZfWAsIDIwLCA4MCk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHRoaXMuYm9hcmQuZHJhdyhjdHgpXG4gICAgdGhpcy5tYXJibGUuZHJhdyhjdHgpO1xuICAgIHRoaXMuZHJhd0hVRChjdHgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA4NzogLy8gV1xuICAgICAgICAgIGJvYXJkLnRpbHRVcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDgzOiAvLyBTXG4gICAgICAgICAgYm9hcmQudGlsdERvd24oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2NTogLy8gQVxuICAgICAgICAgIGJvYXJkLnRpbHRMZWZ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjg6IC8vIERcbiAgICAgICAgICBib2FyZC50aWx0UmlnaHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuXG5cblxuICAgIFxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFyYmxlIHtcbiAgY29uc3RydWN0b3IocmFkaXVzLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLW1hcmJsZVwiKTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLnBvc1ggPSAzMDA7XG4gICAgdGhpcy5wb3NZID0gMzAwO1xuICAgIHRoaXMudmVsWCA9IDA7XG4gICAgdGhpcy52ZWxZID0gMDtcbiAgICB0aGlzLm1heFNwZWVkID0gMTA7XG4gICAgdGhpcy5taW5TcGVlZCA9IC0xMDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0aGlzLnBvc1gsIHRoaXMucG9zWSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhVGltZSwgYWNjWCwgYWNjWSkge1xuICAgIHRoaXMudmVsWCArPSBhY2NYICogZGVsdGFUaW1lO1xuICAgIGlmICh0aGlzLnZlbFggPiB0aGlzLm1heFNwZWVkKSB7XG4gICAgICB0aGlzLnZlbFggPSB0aGlzLm1heFNwZWVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy52ZWxYIDwgdGhpcy5taW5TcGVlZCkge1xuICAgICAgdGhpcy52ZWxYID0gdGhpcy5taW5TcGVlZDtcbiAgICB9XG5cbiAgICB0aGlzLnZlbFkgKz0gYWNjWSAqIGRlbHRhVGltZTtcbiAgICBpZiAodGhpcy52ZWxZID4gdGhpcy5tYXhTcGVlZCkge1xuICAgICAgdGhpcy52ZWxZID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmVsWSA8IHRoaXMubWluU3BlZWQpIHtcbiAgICAgIHRoaXMudmVsWSA9IHRoaXMubWluU3BlZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWCAqIGRlbHRhVGltZTtcbiAgICBpZiAodGhpcy5wb3NYIC0gdGhpcy5yYWRpdXMgPCAwKSB7XG4gICAgICB0aGlzLnBvc1ggPSB0aGlzLnJhZGl1cztcbiAgICAgIHRoaXMudmVsWCA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc1ggKyB0aGlzLnJhZGl1cyA+IHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMucG9zWCA9IHRoaXMud2lkdGggLSB0aGlzLnJhZGl1cztcbiAgICAgIHRoaXMudmVsWCA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5wb3NZICs9IHRoaXMudmVsWSAqIGRlbHRhVGltZTtcbiAgICBpZiAodGhpcy5wb3NZIC0gdGhpcy5yYWRpdXMgPCAwKSB7XG4gICAgICB0aGlzLnBvc1kgPSB0aGlzLnJhZGl1cztcbiAgICAgIHRoaXMudmVsWSA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc1kgKyB0aGlzLnJhZGl1cyA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnBvc1kgPSB0aGlzLmhlaWdodCAtIHRoaXMucmFkaXVzO1xuICAgICAgdGhpcy52ZWxZID0gMDtcbiAgICB9XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9