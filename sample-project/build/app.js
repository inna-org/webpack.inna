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

	'use strict';

	var helloElement = __webpack_require__(1);
	var numElement = __webpack_require__(2);

	// import helloElement from './hello';

	document.body.appendChild(helloElement());
	document.body.appendChild(numElement());
	document.body.appendChild('<h2>some text</h2>');

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	  var element = document.createElement('h1');
	  element.innerHTML = 'Hello big world';
	  return element;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	  var num = 0;
	  num += 5;
	  var element = document.createElement('h2');
	  element.innerHTML = 'number = ' + num;
	  return element;
	};

/***/ }
/******/ ]);