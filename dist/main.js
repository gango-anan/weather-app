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

/***/ "./src/fetch_weather.js":
/*!******************************!*\
  !*** ./src/fetch_weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ apiDataModule)\n/* harmony export */ });\nconst apiDataModule = (() => {\r\n  const generateObject = (data) => {\r\n    return {\r\n      temperature: data.main.temp,\r\n      visibility: data.visibility,\r\n       humidity: data.main.humidity,\r\n      windSpeed: data.wind.speed,\r\n       city: data.name,\r\n       country: data.sys.country,\r\n       icon: data.weather[0].icon\r\n    };\r\n  };\r\n\r\n   const getData = async (city, utilityKey) => {\r\n    try {\r\n      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${utilityKey}`, {\r\n        mode: 'cors',\r\n      });\r\n      const data = await response.json();\r\n      return generateObject(data);\r\n    } catch (e) {\r\n      return setTimeout(console.log('invalid city'), 200);\r\n    }\r\n  };\r\n\r\n  return { getData };\r\n\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/fetch_weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_weather */ \"./src/fetch_weather.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\n\r\n\r\n\r\nconst utilityKey = _utilities__WEBPACK_IMPORTED_MODULE_1__.default.utilityKey().apiKey;\r\nconst weatherData = _fetch_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData('kampala', utilityKey);\r\n\r\n_render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderWeatherData)\n/* harmony export */ });\nconst renderWeatherData = (() => {\r\n  const weatherDetailsContainer = document.querySelector('.details');\r\n  const tempLabel = document.querySelector('.temp-label');\r\n  const activeTemp = document.querySelector('.active-temp');\r\n  const checkBox = document.getElementById('temp');\r\n  const nowDate = new Date();\r\n\r\n  const convertToC = (temp) => {\r\n    const celisius = temp - 273.15;\r\n    return Math.round(celisius);\r\n  }\r\n\r\n  const convertToF = (temp) => {\r\n    const fahrenheit = (temp*9/5) - 459.67;\r\n    return Math.round(fahrenheit);\r\n  }\r\n\r\n  const convertVisibility = (visibility) => {\r\n    return Math.round(visibility/1000);\r\n  }\r\n\r\n  const tempType = () => {\r\n    const tempType = checkBox.checked ? '°F' : '°C';\r\n    return tempType;\r\n  }\r\n\r\n  const displayDetails = (weatherData ) => {\r\n    weatherData.then(data => {\r\n      tempLabel.innerText = `${tempType()}`;\r\n      activeTemp.innerText = `${convertToC(data.temperature)}${tempType()}`;\r\n      weatherDetailsContainer.innerHTML = `\r\n      <p class=\"current-date\">${nowDate.toLocaleTimeString()} , ${nowDate.toDateString()}</p>\r\n      <h2>${data.city}, ${data.country}</h2>\r\n      <p>Feels like ${convertToC(data.temperature)}${tempType()}</p>\r\n      <p>Humidity: ${data.humidity}%</p>\r\n      <p>Wind Speed: ${data.windSpeed} m/s</p>\r\n      <p>Visibility: ${ convertVisibility(data.visibility) } km</p>`;\r\n\r\n    })\r\n  }\r\n\r\n  return { displayDetails };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/render.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ utilitiesModule)\n/* harmony export */ });\nconst utilitiesModule = (() => {\r\n  const utilityKey = () => {\r\n    const apiKeyValue = 'af42f1d1d1cde88bd430cbdaf2d5e6cd';\r\n  \r\n    return { apiKey: apiKeyValue };\r\n  };\r\n\r\n  return { utilityKey }\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/utilities.js?");

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