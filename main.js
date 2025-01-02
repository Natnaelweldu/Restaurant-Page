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

/***/ "./src/app/aboutPage.js":
/*!******************************!*\
  !*** ./src/app/aboutPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ domRewrite)\n/* harmony export */ });\nfunction domRewrite(page) {\n    const content = document.querySelector(\".content\");\n    const about = `\n              <div class=\"about\">\n          <section class=\"story-section\">\n            <div class=\"story-grid\">\n              <img\n                src=\"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445\"\n                alt=\"Restaurant Interior\"\n                class=\"story-image\"\n              />\n              <div class=\"story-content\">\n                <h2>The Birth of Nate</h2>\n                <p>\n                  Founded in 2023, Nate emerged from a vision to create a dining\n                  experience that bridges the gap between traditional cooking\n                  methods and modern culinary innovation. Our journey began when\n                  Chef Nathan Parker, after years of working in prestigious kitchens\n                  across the globe, decided to bring his unique perspective on food\n                  to life.\n                </p>\n                <p>\n                  The restaurant's philosophy is rooted in the belief that\n                  exceptional food should be both sophisticated and approachable. We\n                  source our ingredients from local farmers and producers, ensuring\n                  that each dish tells a story of our community and season.\n                </p>\n              </div>\n            </div>\n          </section>\n          <section class=\"team-section\">\n            <div class=\"team-container\">\n              <div class=\"team-header\">\n                <h2>Meet Our Team</h2>\n                <p>\n                  The passionate individuals behind your exceptional dining\n                  experience\n                </p>\n              </div>\n              <div class=\"team-grid\">\n                <div class=\"team-member\">\n                  <img\n                    src=\"./assets/Executive-Chef-&-Founder.svg\"\n                    alt=\"Chef Nathan\"\n                  />\n                  <h3>Nathan Parker</h3>\n                  <p>Executive Chef & Founder</p>\n                </div>\n                <div class=\"team-member\">\n                  <img\n                    src=\"./assets/Head-Chef.svg\"\n                    alt=\"Chef Michael\"\n                  />\n                  <h3>Michael Chen</h3>\n                  <p>Head Chef</p>\n                </div>\n                <div class=\"team-member\">\n                  <img\n                    src=\"./assets/Restaurant-Manager.svg\"\n                    alt=\"Sarah\"\n                  />\n                  <h3>Sarah Williams</h3>\n                  <p>Restaurant Manager</p>\n                </div>\n              </div>\n            </div>\n          </section>\n          <section class=\"values-section\">\n            <h2>Our Values</h2>\n            <div class=\"values-grid\">\n              <div class=\"value-card\">\n                <h3>Quality</h3>\n                <p>\n                  We never compromise on the quality of our ingredients or\n                  preparation methods.\n                </p>\n              </div>\n              <div class=\"value-card\">\n                <h3>Innovation</h3>\n                <p>\n                  Constantly pushing boundaries while respecting culinary\n                  traditions.\n                </p>\n              </div>\n              <div class=\"value-card\">\n                <h3>Sustainability</h3>\n                <p>\n                  Committed to environmental responsibility in all our practices.\n                </p>\n              </div>\n              <div class=\"value-card\">\n                <h3>Community</h3>\n                <p>\n                  Supporting local producers and creating meaningful connections.\n                </p>\n              </div>\n            </div>\n          </section>\n        </div>\n      `;\n\n      content.innerHTML = about;\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/app/aboutPage.js?");

/***/ }),

/***/ "./src/app/contactPage.js":
/*!********************************!*\
  !*** ./src/app/contactPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ domRewrite)\n/* harmony export */ });\nfunction domRewrite(page) {\n    const content = document.querySelector(\".content\");\n    const contact = `\n        <div class=\"contact\">\n          <header class=\"contact-header\">\n            <h1>Contact Us</h1>\n              </header>\n          \n              <div class=\"contact-container\">\n            <div class=\"contact-info\">\n                <h2>Get in Touch</h2>\n                <div class=\"info-item\">\n                    <i class=\"fas fa-map-marker-alt\"></i>\n                    <div class=\"content\">\n                        <h3>Location</h3>\n                        <p>Awra Street<br>Addis Abeba, Bole</p>\n                    </div>\n                </div>\n                <div class=\"info-item\">\n                    <i class=\"fas fa-phone\"></i>\n                    <div class=\"content\">\n                        <h3>Phone</h3>\n                        <p>+251 992673723</p>\n                    </div>\n                </div>\n                <div class=\"info-item\">\n                    <i class=\"fas fa-envelope\"></i>\n                    <div class=\"content\">\n                        <h3>Email</h3>\n                        <p>info@naterestaurant.com</p>\n                    </div>\n                </div>\n            </div>\n            <form class=\"contact-form\">\n                <h2>Send us a Message</h2>\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"text\" id=\"name\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"subject\">Subject</label>\n                    <input type=\"text\" id=\"subject\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"message\">Message</label>\n                    <textarea id=\"message\" rows=\"5\" required></textarea>\n                </div>\n                <button type=\"submit\" class=\"submit-btn\">Send Message</button>\n            </form>\n              </div>\n          \n              <section class=\"hours-section\">\n            <div class=\"hours-container\">\n                <h2>Opening Hours</h2>\n                <div class=\"hours-grid\">\n                    <div class=\"hours-item\">\n                        <h3>Lunch</h3>\n                        <p>Monday - Friday<br>11:30 AM - 2:30 PM</p>\n                    </div>\n                    <div class=\"hours-item\">\n                        <h3>Dinner</h3>\n                        <p>Monday - Sunday<br>5:30 PM - 10:30 PM</p>\n                    </div>\n                    <div class=\"hours-item\">\n                        <h3>Brunch</h3>\n                        <p>Saturday - Sunday<br>10:00 AM - 3:00 PM</p>\n                    </div>\n                </div>\n            </div>\n              </section>\n        </div>\n      `;\n\n        content.innerHTML = contact;\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/app/contactPage.js?");

/***/ }),

/***/ "./src/app/homePage.js":
/*!*****************************!*\
  !*** ./src/app/homePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePageLoader)\n/* harmony export */ });\nfunction HomePageLoader() {\n    const content = document.querySelector(\".content\");\n    const home = `\n        <div class=\"home\">\n          <section class=\"hero\" id=\"home\">\n            <h1>NATE</h1>\n            <p>Experience Modern Culinary Excellence</p>\n            <a href=\"#reservations\" class=\"cta-button\">Make a Reservation</a>\n          </section>\n          <section class=\"info-section\" id=\"about\">\n            <h2>Welcome to Nate</h2>\n            <div class=\"info-grid\">\n              <div class=\"info-card\">\n                <h3>Our Story</h3>\n                <p>\n                  Founded in 2023, Nate brings a fresh perspective to modern dining,\n                  combining traditional flavors with contemporary techniques.\n                </p>\n              </div>\n              <div class=\"info-card\">\n                <h3>Cuisine</h3>\n                <p>\n                  Our menu features carefully curated dishes that celebrate local\n                  ingredients and global inspiration.\n                </p>\n              </div>\n              <div class=\"info-card\">\n                <h3>Atmosphere</h3>\n                <p>\n                  Immerse yourself in our thoughtfully designed space, where\n                  minimalism meets comfort.\n                </p>\n              </div>\n            </div>\n          </section>\n        </div>\n      `;\n      content.innerHTML = home;\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/app/homePage.js?");

/***/ }),

/***/ "./src/app/menuPage.js":
/*!*****************************!*\
  !*** ./src/app/menuPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ domRewrite)\n/* harmony export */ });\nfunction domRewrite(page) {\n    const content = document.querySelector(\".content\");\n    const menu = `\n          <div class=\"menu\">\n          <div class=\"menu-nav\">\n            <div class=\"menu-nav-links\">\n              <a href=\"#starters\">Starters</a>\n              <a href=\"#main-courses\">Main Courses</a>\n              <a href=\"#desserts\">Desserts</a>\n              <a href=\"#drinks\">Drinks</a>\n            </div>\n          </div>\n          <section class=\"menu-section\" id=\"starters\">\n            <h2>Starters</h2>\n            <div class=\"menu-grid\">\n              <div class=\"menu-item\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58\"\n                  alt=\"Truffle Burrata\"\n                />\n                <div class=\"special-tag\">Chef's Special</div>\n                <h3>Truffle Burrata</h3>\n                <p class=\"menu-item-description\">\n                  Fresh burrata cheese, black truffle shavings, aged balsamic\n                  reduction, micro greens\n                </p>\n                <div class=\"menu-item-price\">$18</div>\n                <div class=\"dietary-info\">\n                  <span class=\"dietary-icon\">🌱</span>Vegetarian\n                </div>\n              </div>\n              <div class=\"menu-item\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1656106577512-0259bf5b9fd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n                  alt=\"Tuna Tartare\"\n                />\n                <h3>Tuna Tartare</h3>\n                <p class=\"menu-item-description\">\n                  Fresh yellowfin tuna, avocado, sesame oil, wasabi aioli, wonton\n                  crisps\n                </p>\n                <div class=\"menu-item-price\">$22</div>\n                <div class=\"dietary-info\">\n                  <span class=\"dietary-icon\">🐟</span>Seafood\n                </div>\n              </div>\n            </div>\n          </section>\n          <section class=\"menu-section\" id=\"main-courses\">\n            <h2>Main Courses</h2>\n            <div class=\"menu-grid\">\n              <div class=\"menu-item\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1544025162-d76694265947\"\n                  alt=\"Ribeye Steak\"\n                />\n                <h3>Dry-Aged Ribeye</h3>\n                <p class=\"menu-item-description\">\n                  45-day dry-aged ribeye, truffle potato puree, roasted seasonal\n                  vegetables\n                </p>\n                <div class=\"menu-item-price\">$48</div>\n              </div>\n              <div class=\"menu-item\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1560717845-968823efbee1\"\n                  alt=\"Sea Bass\"\n                />\n                <h3>Pan-Seared Sea Bass</h3>\n                <p class=\"menu-item-description\">\n                  Mediterranean sea bass, saffron risotto, preserved lemon, herbs\n                </p>\n                <div class=\"menu-item-price\">$42</div>\n                <div class=\"dietary-info\">\n                  <span class=\"dietary-icon\">🐟</span>Seafood\n                </div>\n              </div>\n            </div>\n          </section>\n          <section class=\"menu-section\" id=\"desserts\">\n            <h2>Desserts</h2>\n            <div class=\"menu-grid\">\n              <div class=\"menu-item\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1551024506-0bccd828d307\"\n                  alt=\"Chocolate Soufflé\"\n                />\n                <h3>Dark Chocolate Soufflé</h3>\n                <p class=\"menu-item-description\">\n                  Valrhona chocolate, vanilla bean ice cream, raspberry coulis\n                </p>\n                <div class=\"menu-item-price\">$14</div>\n                <div class=\"dietary-info\">\n                  <span class=\"dietary-icon\">🌱</span>Vegetarian\n                </div>\n              </div>\n            </div>\n          </section>\n          <section class=\"menu-section\" id=\"drinks\">\n            <h2>Drinks</h2>\n            <div class=\"menu-grid\">\n              <div class=\"menu-item\">\n                <img\n                  src=\"https://images.unsplash.com/photo-1536935338788-846bb9981813\"\n                  alt=\"Signature Cocktail\"\n                />\n                <h3>The Nate Signature</h3>\n                <p class=\"menu-item-description\">\n                  House-infused gin, elderflower liqueur, fresh citrus, herbs\n                </p>\n                <div class=\"menu-item-price\">$16</div>\n              </div>\n            </div>\n          </section>\n        </div>\n      `;\n      content.innerHTML = menu;\n\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/app/menuPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/homePage.js */ \"./src/app/homePage.js\");\n/* harmony import */ var _app_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/aboutPage.js */ \"./src/app/aboutPage.js\");\n/* harmony import */ var _app_menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/menuPage.js */ \"./src/app/menuPage.js\");\n/* harmony import */ var _app_contactPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/contactPage.js */ \"./src/app/contactPage.js\");\n// import \"./styles/main.css\";\n\n\n\n\n\nconst home = document.querySelector(\"#home\");\nconst about = document.querySelector(\"#about\");\nconst menu = document.querySelector(\"#menu\");\nconst contact = document.querySelector(\"#contact\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_app_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nhome.addEventListener(\"click\", () => (0,_app_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nabout.addEventListener(\"click\", () => (0,_app_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\nmenu.addEventListener(\"click\", () => (0,_app_menuPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\ncontact.addEventListener(\"click\", () => (0,_app_contactPage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n\n//# sourceURL=webpack://restaurant-page-/./src/index.js?");

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