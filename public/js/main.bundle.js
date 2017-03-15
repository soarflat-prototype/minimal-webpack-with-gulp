/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var additionCalculator = __webpack_require__(1);
	var taxCalculator = __webpack_require__(2);

	var item1Price = 400;
	var item2Price = 600;
	var totalPrice = additionCalculator(item1Price, item2Price);
	var tax = 1.08;
	var priceIncludeTax = taxCalculator(totalPrice, tax);
	console.log(priceIncludeTax);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function additionCalculator(number1, number2) {
	  return number1 + number2;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function taxCalculator(price, tax) {
	  return Math.round(price * tax);
	}

/***/ }
/******/ ]);