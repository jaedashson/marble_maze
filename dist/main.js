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
/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/board */ "./src/scripts/board.js");
/* harmony import */ var _scripts_marble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/marble */ "./src/scripts/marble.js");




var canvas = document.getElementById("game-screen");
var ctx = canvas.getContext("2d"); // Can I make these variables?

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var board = new _scripts_board__WEBPACK_IMPORTED_MODULE_2__["default"]();
var marble = new _scripts_marble__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _scripts_input__WEBPACK_IMPORTED_MODULE_1__["default"](board);
var lastTime = 0;

function gameLoop(timestamp) {
  var deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600); // Variables?

  marble.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();

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
  function Board() {
    _classCallCheck(this, Board);

    this.tiltX = 0;
    this.tiltY = 0;
  }

  _createClass(Board, [{
    key: "tiltUp",
    value: function tiltUp() {
      this.tiltY++;
    }
  }, {
    key: "tiltDown",
    value: function tiltDown() {
      this.tiltY--;
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

      case 83:
        // S
        board.tiltDown();

      case 65:
        // A
        board.tiltLeft();

      case 68:
        // D
        board.tiltRight();

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
  }

  _createClass(Marble, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, 10, 10, 16, 16);
    }
  }, {
    key: "update",
    value: function update() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJib2FyZCIsIkJvYXJkIiwibWFyYmxlIiwiTWFyYmxlIiwiSW5wdXRIYW5kbGVyIiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVzdGFtcCIsImRlbHRhVGltZSIsImNsZWFyUmVjdCIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aWx0WCIsInRpbHRZIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsInRpbHRVcCIsInRpbHREb3duIiwidGlsdExlZnQiLCJ0aWx0UmlnaHQiLCJpbWFnZSIsImRyYXdJbWFnZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWI7QUFDQSxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWLEMsQ0FFQTs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFJQyxLQUFLLEdBQUcsSUFBSUMsc0RBQUosRUFBWjtBQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyx1REFBSixFQUFiO0FBQ0EsSUFBSUMsc0RBQUosQ0FBaUJKLEtBQWpCO0FBRUEsSUFBSUssUUFBUSxHQUFHLENBQWY7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI7QUFDM0IsTUFBSUMsU0FBUyxHQUFHRCxTQUFTLEdBQUdGLFFBQTVCO0FBQ0FBLFVBQVEsR0FBR0UsU0FBWDtBQUVBWCxLQUFHLENBQUNhLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLEVBSjJCLENBSUc7O0FBQzlCUCxRQUFNLENBQUNRLElBQVAsQ0FBWWQsR0FBWjtBQUVBZSx1QkFBcUIsQ0FBQ0wsUUFBRCxDQUFyQjtBQUNEOztBQUVEQSxRQUFRLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDNUJhTCxLO0FBQ25CLG1CQUFjO0FBQUE7O0FBQ1osU0FBS1csS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7OzZCQUVRO0FBQ1AsV0FBS0EsS0FBTDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLQSxLQUFMO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtELEtBQUw7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS0EsS0FBTDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDcEJrQlIsWSxHQUNuQixzQkFBWUosS0FBWixFQUFtQjtBQUFBOztBQUNqQk4sVUFBUSxDQUFDb0IsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQUMsS0FBSyxFQUFJO0FBQzVDLFlBQVFBLEtBQUssQ0FBQ0MsT0FBZDtBQUNFLFdBQUssRUFBTDtBQUFTO0FBQ1BoQixhQUFLLENBQUNpQixNQUFOOztBQUNGLFdBQUssRUFBTDtBQUFTO0FBQ1BqQixhQUFLLENBQUNrQixRQUFOOztBQUNGLFdBQUssRUFBTDtBQUFTO0FBQ1BsQixhQUFLLENBQUNtQixRQUFOOztBQUNGLFdBQUssRUFBTDtBQUFTO0FBQ1BuQixhQUFLLENBQUNvQixTQUFOOztBQUNGO0FBQ0U7QUFWSjtBQVlELEdBYkQ7QUFjRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEJrQmpCLE07QUFDbkIsb0JBQWM7QUFBQTs7QUFDWixTQUFLa0IsS0FBTCxHQUFhM0IsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWI7QUFDRDs7Ozt5QkFFSUMsRyxFQUFLO0FBQ1JBLFNBQUcsQ0FBQzBCLFNBQUosQ0FBYyxLQUFLRCxLQUFuQixFQUEwQixFQUExQixFQUE4QixFQUE5QixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QztBQUNEOzs7NkJBRVEsQ0FFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYSCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IElucHV0SGFuZGxlciBmcm9tIFwiLi9zY3JpcHRzL2lucHV0XCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vc2NyaXB0cy9ib2FyZFwiO1xuaW1wb3J0IE1hcmJsZSBmcm9tIFwiLi9zY3JpcHRzL21hcmJsZVwiO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXNjcmVlblwiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4vLyBDYW4gSSBtYWtlIHRoZXNlIHZhcmlhYmxlcz9cbmNvbnN0IEdBTUVfV0lEVEggPSA4MDA7XG5jb25zdCBHQU1FX0hFSUdIVCA9IDYwMDtcblxubGV0IGJvYXJkID0gbmV3IEJvYXJkKCk7XG5sZXQgbWFyYmxlID0gbmV3IE1hcmJsZSgpO1xubmV3IElucHV0SGFuZGxlcihib2FyZCk7XG5cbmxldCBsYXN0VGltZSA9IDA7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKHRpbWVzdGFtcCkge1xuICBsZXQgZGVsdGFUaW1lID0gdGltZXN0YW1wIC0gbGFzdFRpbWU7XG4gIGxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCA2MDApIC8vIFZhcmlhYmxlcz9cbiAgbWFyYmxlLmRyYXcoY3R4KTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5nYW1lTG9vcCgpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aWx0WCA9IDA7XG4gICAgdGhpcy50aWx0WSA9IDA7XG4gIH1cblxuICB0aWx0VXAoKSB7XG4gICAgdGhpcy50aWx0WSsrO1xuICB9XG5cbiAgdGlsdERvd24oKSB7XG4gICAgdGhpcy50aWx0WS0tO1xuICB9XG5cbiAgdGlsdExlZnQoKSB7XG4gICAgdGhpcy50aWx0WC0tO1xuICB9XG5cbiAgdGlsdFJpZ2h0KCkge1xuICAgIHRoaXMudGlsdFgrKztcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgODc6IC8vIFdcbiAgICAgICAgICBib2FyZC50aWx0VXAoKTtcbiAgICAgICAgY2FzZSA4MzogLy8gU1xuICAgICAgICAgIGJvYXJkLnRpbHREb3duKCk7XG4gICAgICAgIGNhc2UgNjU6IC8vIEFcbiAgICAgICAgICBib2FyZC50aWx0TGVmdCgpO1xuICAgICAgICBjYXNlIDY4OiAvLyBEXG4gICAgICAgICAgYm9hcmQudGlsdFJpZ2h0KCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1tYXJibGVcIik7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMTAsIDEwLCAxNiwgMTYpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9