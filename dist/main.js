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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ apiDataModule)\n/* harmony export */ });\nconst apiDataModule = (() => {\n  const errorContainer = document.querySelector('.city-search__error');\n  const errorPage = document.querySelector('.error-page');\n  const weatherDetails = document.querySelector('.weather-details');\n\n  const displayError = () => {\n    weatherDetails.style.display = 'none';\n    errorContainer.innerText = 'City not found.';\n    errorPage.classList.remove('hide');\n    errorPage.innerHTML = '<h1>404 ERROR</h1><h3>City not found</h3>';\n  };\n\n  const generateObject = (data) => ({\n    temperature: data.main.temp,\n    visibility: data.visibility,\n    humidity: data.main.humidity,\n    windSpeed: data.wind.speed,\n    city: data.name,\n    country: data.sys.country,\n    icon: data.weather[0].icon,\n  });\n\n  const getData = async (city, utilityKey) => {\n    try {\n      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${utilityKey}`, {\n        mode: 'cors',\n      });\n      const data = await response.json();\n      weatherDetails.style.display = '';\n      errorContainer.innerText = '';\n      errorPage.classList.add('hide');\n      return generateObject(data);\n    } catch (e) {\n      return setTimeout(displayError, 200);\n    }\n  };\n\n  return { getData };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/fetch_weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_weather */ \"./src/fetch_weather.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\nconst cityForm = document.querySelector('form');\nconst cityFormInput = document.getElementById('city-search');\nconst tempToggler = document.getElementById('temp');\nconst tempTogglerLabel = document.querySelector('.temp-label');\nconst errorContainerElement = document.querySelector('.city-search__error');\nconst utilityKey = _utilities__WEBPACK_IMPORTED_MODULE_1__.default.utilityKey().apiKey;\nlet city = 'kampala';\nlet weatherData = _fetch_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData(city, utilityKey);\n\nconst toggleTemperature = () => {\n  if (tempToggler.checked) {\n    _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  } else {\n    _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  }\n};\n\ntempTogglerLabel.addEventListener('click', () => setTimeout(toggleTemperature, 10));\ncityForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  city = cityFormInput.value;\n  if (city === '' || city === null) {\n    errorContainerElement.innerText = \"City can't be blank, try again!\";\n    return;\n  }\n  weatherData = _fetch_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData(city, utilityKey);\n  _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  cityFormInput.value = null;\n});\n_render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderWeatherData)\n/* harmony export */ });\nconst renderWeatherData = (() => {\n  const weatherDetailsContainer = document.querySelector('.details');\n  const tempLabel = document.querySelector('.temp-label');\n  const activeTemp = document.querySelector('.active-temp');\n  const checkBox = document.getElementById('temp');\n  const weatherIconContainer = document.querySelector('.weather-icon');\n  const nowDate = new Date();\n\n  const convertToC = (temp) => {\n    const celisius = temp - 273.15;\n    return Math.round(celisius);\n  };\n\n  const convertToF = (temp) => {\n    const fahrenheit = (temp * (9 / 5)) - 459.67;\n    return Math.round(fahrenheit);\n  };\n\n  const convertVisibility = (visibility) => Math.round(visibility / 1000);\n\n  const tempType = () => {\n    const tempType = checkBox.checked ? '°F' : '°C';\n    return tempType;\n  };\n\n  const displayedTemp = (temp) => {\n    const tempToDisplay = checkBox.checked ? convertToF(temp) : convertToC(temp);\n    return tempToDisplay;\n  };\n\n  const displayDetails = (weatherData) => {\n    weatherData.then((data) => {\n      tempLabel.innerText = `${tempType()}`;\n      activeTemp.innerText = `${displayedTemp(data.temperature)}${tempType()}`;\n      weatherDetailsContainer.innerHTML = `\n      <p class=\"current-date\">${nowDate.toLocaleTimeString()} , ${nowDate.toDateString()}</p>\n      <h2>${data.city}, ${data.country}</h2>\n      <p>Feels like ${displayedTemp(data.temperature)}${tempType()}</p>\n      <p>Humidity: ${data.humidity}%</p>\n      <p>Wind Speed: ${data.windSpeed} m/s</p>\n      <p>Visibility: ${convertVisibility(data.visibility)} km</p>`;\n      weatherIconContainer.innerHTML = `<img src=\"http://openweathermap.org/img/wn/${data.icon}@2x.png\" alt=\"weather-icon\"></img>`;\n    });\n  };\n\n  return { displayDetails };\n})();\n\n\n\n//# sourceURL=webpack://weather-app/./src/render.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ utilitiesModule)\n/* harmony export */ });\nconst utilitiesModule = (() => {\n  const utilityKey = () => {\n    const apiKeyValue = 'af42f1d1d1cde88bd430cbdaf2d5e6cd';\n\n    return { apiKey: apiKeyValue };\n  };\n\n  return { utilityKey };\n})();\n\n\n\n//# sourceURL=webpack://weather-app/./src/utilities.js?");

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