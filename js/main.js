/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/js/main.min.js":
/*!*****************************!*\
  !*** ./dist/js/main.min.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(()=>{\"use strict\";(()=>{const e=document.querySelector(\".menu-header__burger\"),t=document.querySelector(\".menu-header__body\"),s=()=>{e.classList.remove(\"active\"),t.classList.remove(\"active\"),document.body.classList.remove(\"lock\"),document.body.dataset.actives=\"\"};document.addEventListener(\"click\",(e=>{e.target.closest(\".header\")||s(),\"burger\"!==document.body.dataset.actives&&s()})),e.addEventListener(\"click\",(s=>{e.classList.toggle(\"active\"),t.classList.toggle(\"active\"),document.body.classList.toggle(\"lock\"),t.scrollTo(0,0),e.classList.contains(\"active\")?document.body.dataset.actives=\"burger\":document.body.dataset.actives=\"\"})),window.addEventListener(\"resize\",(e=>{window.innerWidth>=768&&s()}))})(),(()=>{const e=document.querySelector(\".header-little-big\"),t=e.dataset.headerChangeDirection,s=document.querySelector(t);let o=s.offsetTop;const i=(()=>{let e=pageYOffset;return()=>{let t=pageYOffset,s=e-t;return e=t,s}})(),c=()=>{o=s.offsetTop,window.innerWidth<768?e.classList.remove(\"little-big\"):pageYOffset+e.offsetHeight>=o&&e.classList.add(\"little-big\")};c(),window.addEventListener(\"resize\",(()=>{setTimeout((()=>c),300)})),window.addEventListener(\"scroll\",(()=>{const t=i();t<0?pageYOffset+e.offsetHeight>=o&&e.classList.add(\"little-big\"):t>0&&pageYOffset+e.offsetHeight<o&&e.classList.remove(\"little-big\"),o=s.offsetTop}))})()})();\n\n//# sourceURL=webpack://gulp_train_4/./dist/js/main.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/js/main.min.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;