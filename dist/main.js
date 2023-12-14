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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeHomePage() {\n    // make the DOM elements\n    const content = document.querySelector('#content');\n    const name = document.createElement('h1');\n    const picture = document.createElement('img');\n    const description = document.createElement('p');\n\n    // add class to each element\n    name.classList.add('food-name');\n    picture.classList.add('food-pic');\n    description.classList.add('food-des');\n\n    // set attribute for picture element\n    picture.src = '../dist/img/pizza-s.jpg';\n    picture.alt = 'some context';\n\n    // add words to element\n    name.textContent = 'Food';\n    description.textContent = 'Food description.';\n\n    // add to parent node\n    content.appendChild(name);\n    content.appendChild(picture);\n    content.appendChild(description);\n\n    return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n \n\n\n// make navbar function\nfunction makeNavBar() {\n    const nav = document.querySelector('#nav');\n    const home = document.createElement('button');\n    const menu = document.createElement('button');\n    const contact = document.createElement('button');\n\n    home.classList.add('navBtn');\n    menu.classList.add('navBtn');\n    contact.classList.add('navBtn');\n\n    home.textContent = 'Home';\n    menu.textContent = 'Menu';\n    contact.textContent = 'Contact';\n\n    nav.appendChild(home);\n    nav.appendChild(menu);\n    nav.appendChild(contact);\n\n    return nav;\n};\n\nfunction handleNavClicks() {\n    const navBtn = document.querySelectorAll('.navBtn');\n\n    navBtn.forEach((button) => {\n        button.addEventListener('click', () => {\n            loadPage(button);\n        })\n    });\n};\n\nfunction loadPage(button) {\n    if (button.textContent == 'Menu') {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n    else {\n        console.log('no module for this page yet!');\n    }\n};\n\nmakeNavBar();\nhandleNavClicks();\nconsole.log('Executed successfully.');\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeMenuPage() {\n    const content = document.querySelector('#content');\n    const title = document.createElement('h1');\n    const itemOne = document.createElement('div');\n    const itemTwo = document.createElement('div');\n    const nameOne = document.createElement('h3');\n    const nameTwo = document.createElement('h3');\n    const picOne = document.createElement('img');\n    const picTwo = document.createElement('img');\n\n    title.textContent = 'Menu';\n    itemOne.classList.add('menu-contain');\n    nameOne.textContent = 'One';\n    picOne.src = '';\n    picOne.alt = 'some text'\n\n    itemTwo.classList.add('menu-contain');\n    nameTwo.textContent = 'Two';\n    picTwo.src = '';\n    picTwo.alt = 'some text too';\n\n    itemOne.appendChild(nameOne);\n    itemOne.appendChild(picOne);\n    itemTwo.appendChild(nameTwo);\n    itemTwo.appendChild(picTwo);\n    content.appendChild(itemOne);\n    content.appendChild(itemTwo);\n    \n    return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;