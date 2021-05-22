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

/***/ "./src/country-code.js":
/*!*****************************!*\
  !*** ./src/country-code.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ codeToCountry)\n/* harmony export */ });\nconst codeToCountry = (() => {\n  const countryCodes = [\n    { name: 'Afghanistan', code: 'AF' },\n    { name: 'Åland Islands', code: 'AX' },\n    { name: 'Albania', code: 'AL' },\n    { name: 'Algeria', code: 'DZ' },\n    { name: 'American Samoa', code: 'AS' },\n    { name: 'AndorrA', code: 'AD' },\n    { name: 'Angola', code: 'AO' },\n    { name: 'Anguilla', code: 'AI' },\n    { name: 'Antarctica', code: 'AQ' },\n    { name: 'Antigua and Barbuda', code: 'AG' },\n    { name: 'Argentina', code: 'AR' },\n    { name: 'Armenia', code: 'AM' },\n    { name: 'Aruba', code: 'AW' },\n    { name: 'Australia', code: 'AU' },\n    { name: 'Austria', code: 'AT' },\n    { name: 'Azerbaijan', code: 'AZ' },\n    { name: 'Bahamas', code: 'BS' },\n    { name: 'Bahrain', code: 'BH' },\n    { name: 'Bangladesh', code: 'BD' },\n    { name: 'Barbados', code: 'BB' },\n    { name: 'Belarus', code: 'BY' },\n    { name: 'Belgium', code: 'BE' },\n    { name: 'Belize', code: 'BZ' },\n    { name: 'Benin', code: 'BJ' },\n    { name: 'Bermuda', code: 'BM' },\n    { name: 'Bhutan', code: 'BT' },\n    { name: 'Bolivia', code: 'BO' },\n    { name: 'Bosnia and Herzegovina', code: 'BA' },\n    { name: 'Botswana', code: 'BW' },\n    { name: 'Bouvet Island', code: 'BV' },\n    { name: 'Brazil', code: 'BR' },\n    { name: 'British Indian Ocean Territory', code: 'IO' },\n    { name: 'Brunei Darussalam', code: 'BN' },\n    { name: 'Bulgaria', code: 'BG' },\n    { name: 'Burkina Faso', code: 'BF' },\n    { name: 'Burundi', code: 'BI' },\n    { name: 'Cambodia', code: 'KH' },\n    { name: 'Cameroon', code: 'CM' },\n    { name: 'Canada', code: 'CA' },\n    { name: 'Cape Verde', code: 'CV' },\n    { name: 'Cayman Islands', code: 'KY' },\n    { name: 'Central African Republic', code: 'CF' },\n    { name: 'Chad', code: 'TD' },\n    { name: 'Chile', code: 'CL' },\n    { name: 'China', code: 'CN' },\n    { name: 'Christmas Island', code: 'CX' },\n    { name: 'Cocos (Keeling) Islands', code: 'CC' },\n    { name: 'Colombia', code: 'CO' },\n    { name: 'Comoros', code: 'KM' },\n    { name: 'Congo', code: 'CG' },\n    { name: 'Congo, The Democratic Republic of the', code: 'CD' },\n    { name: 'Cook Islands', code: 'CK' },\n    { name: 'Costa Rica', code: 'CR' },\n    { name: 'Cote D\\'Ivoire', code: 'CI' },\n    { name: 'Croatia', code: 'HR' },\n    { name: 'Cuba', code: 'CU' },\n    { name: 'Cyprus', code: 'CY' },\n    { name: 'Czech Republic', code: 'CZ' },\n    { name: 'Denmark', code: 'DK' },\n    { name: 'Djibouti', code: 'DJ' },\n    { name: 'Dominica', code: 'DM' },\n    { name: 'Dominican Republic', code: 'DO' },\n    { name: 'Ecuador', code: 'EC' },\n    { name: 'Egypt', code: 'EG' },\n    { name: 'El Salvador', code: 'SV' },\n    { name: 'Equatorial Guinea', code: 'GQ' },\n    { name: 'Eritrea', code: 'ER' },\n    { name: 'Estonia', code: 'EE' },\n    { name: 'Ethiopia', code: 'ET' },\n    { name: 'Falkland Islands (Malvinas)', code: 'FK' },\n    { name: 'Faroe Islands', code: 'FO' },\n    { name: 'Fiji', code: 'FJ' },\n    { name: 'Finland', code: 'FI' },\n    { name: 'France', code: 'FR' },\n    { name: 'French Guiana', code: 'GF' },\n    { name: 'French Polynesia', code: 'PF' },\n    { name: 'French Southern Territories', code: 'TF' },\n    { name: 'Gabon', code: 'GA' },\n    { name: 'Gambia', code: 'GM' },\n    { name: 'Georgia', code: 'GE' },\n    { name: 'Germany', code: 'DE' },\n    { name: 'Ghana', code: 'GH' },\n    { name: 'Gibraltar', code: 'GI' },\n    { name: 'Greece', code: 'GR' },\n    { name: 'Greenland', code: 'GL' },\n    { name: 'Grenada', code: 'GD' },\n    { name: 'Guadeloupe', code: 'GP' },\n    { name: 'Guam', code: 'GU' },\n    { name: 'Guatemala', code: 'GT' },\n    { name: 'Guernsey', code: 'GG' },\n    { name: 'Guinea', code: 'GN' },\n    { name: 'Guinea-Bissau', code: 'GW' },\n    { name: 'Guyana', code: 'GY' },\n    { name: 'Haiti', code: 'HT' },\n    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },\n    { name: 'Holy See (Vatican City State)', code: 'VA' },\n    { name: 'Honduras', code: 'HN' },\n    { name: 'Hong Kong', code: 'HK' },\n    { name: 'Hungary', code: 'HU' },\n    { name: 'Iceland', code: 'IS' },\n    { name: 'India', code: 'IN' },\n    { name: 'Indonesia', code: 'ID' },\n    { name: 'Iran, Islamic Republic Of', code: 'IR' },\n    { name: 'Iraq', code: 'IQ' },\n    { name: 'Ireland', code: 'IE' },\n    { name: 'Isle of Man', code: 'IM' },\n    { name: 'Israel', code: 'IL' },\n    { name: 'Italy', code: 'IT' },\n    { name: 'Jamaica', code: 'JM' },\n    { name: 'Japan', code: 'JP' },\n    { name: 'Jersey', code: 'JE' },\n    { name: 'Jordan', code: 'JO' },\n    { name: 'Kazakhstan', code: 'KZ' },\n    { name: 'Kenya', code: 'KE' },\n    { name: 'Kiribati', code: 'KI' },\n    { name: 'Korea, Democratic People\\'S Republic of', code: 'KP' },\n    { name: 'Korea, Republic of', code: 'KR' },\n    { name: 'Kuwait', code: 'KW' },\n    { name: 'Kyrgyzstan', code: 'KG' },\n    { name: 'Lao People\\'S Democratic Republic', code: 'LA' },\n    { name: 'Latvia', code: 'LV' },\n    { name: 'Lebanon', code: 'LB' },\n    { name: 'Lesotho', code: 'LS' },\n    { name: 'Liberia', code: 'LR' },\n    { name: 'Libyan Arab Jamahiriya', code: 'LY' },\n    { name: 'Liechtenstein', code: 'LI' },\n    { name: 'Lithuania', code: 'LT' },\n    { name: 'Luxembourg', code: 'LU' },\n    { name: 'Macao', code: 'MO' },\n    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },\n    { name: 'Madagascar', code: 'MG' },\n    { name: 'Malawi', code: 'MW' },\n    { name: 'Malaysia', code: 'MY' },\n    { name: 'Maldives', code: 'MV' },\n    { name: 'Mali', code: 'ML' },\n    { name: 'Malta', code: 'MT' },\n    { name: 'Marshall Islands', code: 'MH' },\n    { name: 'Martinique', code: 'MQ' },\n    { name: 'Mauritania', code: 'MR' },\n    { name: 'Mauritius', code: 'MU' },\n    { name: 'Mayotte', code: 'YT' },\n    { name: 'Mexico', code: 'MX' },\n    { name: 'Micronesia, Federated States of', code: 'FM' },\n    { name: 'Moldova, Republic of', code: 'MD' },\n    { name: 'Monaco', code: 'MC' },\n    { name: 'Mongolia', code: 'MN' },\n    { name: 'Montserrat', code: 'MS' },\n    { name: 'Morocco', code: 'MA' },\n    { name: 'Mozambique', code: 'MZ' },\n    { name: 'Myanmar', code: 'MM' },\n    { name: 'Namibia', code: 'NA' },\n    { name: 'Nauru', code: 'NR' },\n    { name: 'Nepal', code: 'NP' },\n    { name: 'Netherlands', code: 'NL' },\n    { name: 'Netherlands Antilles', code: 'AN' },\n    { name: 'New Caledonia', code: 'NC' },\n    { name: 'New Zealand', code: 'NZ' },\n    { name: 'Nicaragua', code: 'NI' },\n    { name: 'Niger', code: 'NE' },\n    { name: 'Nigeria', code: 'NG' },\n    { name: 'Niue', code: 'NU' },\n    { name: 'Norfolk Island', code: 'NF' },\n    { name: 'Northern Mariana Islands', code: 'MP' },\n    { name: 'Norway', code: 'NO' },\n    { name: 'Oman', code: 'OM' },\n    { name: 'Pakistan', code: 'PK' },\n    { name: 'Palau', code: 'PW' },\n    { name: 'Palestinian Territory, Occupied', code: 'PS' },\n    { name: 'Panama', code: 'PA' },\n    { name: 'Papua New Guinea', code: 'PG' },\n    { name: 'Paraguay', code: 'PY' },\n    { name: 'Peru', code: 'PE' },\n    { name: 'Philippines', code: 'PH' },\n    { name: 'Pitcairn', code: 'PN' },\n    { name: 'Poland', code: 'PL' },\n    { name: 'Portugal', code: 'PT' },\n    { name: 'Puerto Rico', code: 'PR' },\n    { name: 'Qatar', code: 'QA' },\n    { name: 'Reunion', code: 'RE' },\n    { name: 'Romania', code: 'RO' },\n    { name: 'Russian Federation', code: 'RU' },\n    { name: 'Rwanda', code: 'RW' },\n    { name: 'Saint Helena', code: 'SH' },\n    { name: 'Saint Kitts and Nevis', code: 'KN' },\n    { name: 'Saint Lucia', code: 'LC' },\n    { name: 'Saint Pierre and Miquelon', code: 'PM' },\n    { name: 'Saint Vincent and the Grenadines', code: 'VC' },\n    { name: 'Samoa', code: 'WS' },\n    { name: 'San Marino', code: 'SM' },\n    { name: 'Sao Tome and Principe', code: 'ST' },\n    { name: 'Saudi Arabia', code: 'SA' },\n    { name: 'Senegal', code: 'SN' },\n    { name: 'Serbia and Montenegro', code: 'CS' },\n    { name: 'Seychelles', code: 'SC' },\n    { name: 'Sierra Leone', code: 'SL' },\n    { name: 'Singapore', code: 'SG' },\n    { name: 'Slovakia', code: 'SK' },\n    { name: 'Slovenia', code: 'SI' },\n    { name: 'Solomon Islands', code: 'SB' },\n    { name: 'Somalia', code: 'SO' },\n    { name: 'South Africa', code: 'ZA' },\n    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },\n    { name: 'Spain', code: 'ES' },\n    { name: 'Sri Lanka', code: 'LK' },\n    { name: 'Sudan', code: 'SD' },\n    { name: 'Suriname', code: 'SR' },\n    { name: 'Svalbard and Jan Mayen', code: 'SJ' },\n    { name: 'Swaziland', code: 'SZ' },\n    { name: 'Sweden', code: 'SE' },\n    { name: 'Switzerland', code: 'CH' },\n    { name: 'Syrian Arab Republic', code: 'SY' },\n    { name: 'Taiwan, Province of China', code: 'TW' },\n    { name: 'Tajikistan', code: 'TJ' },\n    { name: 'Tanzania, United Republic of', code: 'TZ' },\n    { name: 'Thailand', code: 'TH' },\n    { name: 'Timor-Leste', code: 'TL' },\n    { name: 'Togo', code: 'TG' },\n    { name: 'Tokelau', code: 'TK' },\n    { name: 'Tonga', code: 'TO' },\n    { name: 'Trinidad and Tobago', code: 'TT' },\n    { name: 'Tunisia', code: 'TN' },\n    { name: 'Turkey', code: 'TR' },\n    { name: 'Turkmenistan', code: 'TM' },\n    { name: 'Turks and Caicos Islands', code: 'TC' },\n    { name: 'Tuvalu', code: 'TV' },\n    { name: 'Uganda', code: 'UG' },\n    { name: 'Ukraine', code: 'UA' },\n    { name: 'United Arab Emirates', code: 'AE' },\n    { name: 'United Kingdom', code: 'GB' },\n    { name: 'United States', code: 'US' },\n    { name: 'United States Minor Outlying Islands', code: 'UM' },\n    { name: 'Uruguay', code: 'UY' },\n    { name: 'Uzbekistan', code: 'UZ' },\n    { name: 'Vanuatu', code: 'VU' },\n    { name: 'Venezuela', code: 'VE' },\n    { name: 'Viet Nam', code: 'VN' },\n    { name: 'Virgin Islands, British', code: 'VG' },\n    { name: 'Virgin Islands, U.S.', code: 'VI' },\n    { name: 'Wallis and Futuna', code: 'WF' },\n    { name: 'Western Sahara', code: 'EH' },\n    { name: 'Yemen', code: 'YE' },\n    { name: 'Zambia', code: 'ZM' },\n    { name: 'Zimbabwe', code: 'ZW' },\n  ];\n\n  const countryName = (code) => countryCodes.find((element) => element.code === code).name;\n\n  return { countryName };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/country-code.js?");

/***/ }),

/***/ "./src/fetch_weather.js":
/*!******************************!*\
  !*** ./src/fetch_weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ apiDataModule)\n/* harmony export */ });\nconst apiDataModule = (() => {\n  const errorContainer = document.querySelector('.city-search__error');\n  const errorPage = document.querySelector('.error-page');\n  const weatherDetails = document.querySelector('.weather-details');\n\n  const displayError = () => {\n    weatherDetails.style.display = 'none';\n    errorContainer.innerText = 'City not found.';\n    errorPage.classList.remove('hide');\n    errorPage.innerHTML = '<h1>404 ERROR</h1><h3>City not found</h3>';\n  };\n\n  const generateObject = (data) => ({\n    temperature: data.main.temp,\n    visibility: data.visibility,\n    humidity: data.main.humidity,\n    windSpeed: data.wind.speed,\n    city: data.name,\n    country: data.sys.country,\n    icon: data.weather[0].icon,\n    status: data.weather[0].main,\n  });\n\n  const getData = async (city, utilityKey) => {\n    try {\n      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${utilityKey}`, {\n        mode: 'cors',\n      });\n      const data = await response.json();\n      weatherDetails.style.display = '';\n      errorContainer.innerText = '';\n      errorPage.classList.add('hide');\n      return generateObject(data);\n    } catch (e) {\n      return setTimeout(displayError, 200);\n    }\n  };\n\n  return { getData };\n})();\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/fetch_weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_weather */ \"./src/fetch_weather.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\nconst cityForm = document.querySelector('form');\nconst cityFormInput = document.getElementById('city-search');\nconst tempToggler = document.getElementById('temp');\nconst tempTogglerLabel = document.querySelector('.temp-label');\nconst errorContainerElement = document.querySelector('.city-search__error');\nconst weatherFocus = document.querySelector('.weather-focus');\nconst utilityKey = _utilities__WEBPACK_IMPORTED_MODULE_1__.default.utilityKey().apiKey;\nlet city = 'kampala';\nlet weatherData = _fetch_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData(city, utilityKey);\n\nwindow.onload = () => {\n  _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n};\n\nconst toggleTemperature = () => {\n  if (tempToggler.checked) {\n    _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  } else {\n    _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  }\n};\n\ntempTogglerLabel.addEventListener('click', () => setTimeout(toggleTemperature, 10));\ncityForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  city = cityFormInput.value;\n  if (city === '' || city === null) {\n    errorContainerElement.innerText = \"City can't be blank, try again!\";\n    return;\n  }\n  weatherFocus.style.backgroundImage = '';\n  weatherData = _fetch_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData(city, utilityKey);\n  _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  cityFormInput.value = null;\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderWeatherData)\n/* harmony export */ });\n/* harmony import */ var _country_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-code */ \"./src/country-code.js\");\n\n\nconst renderWeatherData = (() => {\n  const weatherDetailsContainer = document.querySelector('.details');\n  const tempLabel = document.querySelector('.temp-label');\n  const activeTemp = document.querySelector('.active-temp');\n  const checkBox = document.getElementById('temp');\n  const weatherIconContainer = document.querySelector('.weather-icon');\n  const weatherFocus = document.querySelector('.weather-focus');\n  const nowDate = new Date();\n\n  const convertToC = (temp) => {\n    const celisius = temp - 273.15;\n    return Math.round(celisius);\n  };\n\n  const convertToF = (temp) => {\n    const fahrenheit = (temp * (9 / 5)) - 459.67;\n    return Math.round(fahrenheit);\n  };\n\n  const convertVisibility = (visibility) => Math.round(visibility / 1000);\n\n  const toTempType = () => {\n    const toTempType = checkBox.checked ? 'To °C' : 'To °F';\n    return toTempType;\n  };\n\n  const tempType = () => {\n    const tempType = checkBox.checked ? '°F' : '°C';\n    return tempType;\n  };\n\n  const displayedTemp = (temp) => {\n    const tempToDisplay = checkBox.checked ? convertToF(temp) : convertToC(temp);\n    return tempToDisplay;\n  };\n\n  const displayDetails = (weatherData) => {\n    weatherData.then((data) => {\n      tempLabel.innerText = `${toTempType()}`;\n      activeTemp.innerText = `${displayedTemp(data.temperature)}${tempType()}`;\n      weatherDetailsContainer.innerHTML = `\n      <p class=\"current-date\">${nowDate.toLocaleTimeString()} , ${nowDate.toDateString()}</p>\n      <h2>${data.city}, ${_country_code__WEBPACK_IMPORTED_MODULE_0__.default.countryName(data.country)}</h2>\n      <p>Feels like ${displayedTemp(data.temperature)}${tempType()}</p>\n      <p>Humidity: ${data.humidity}%</p>\n      <p>Wind Speed: ${data.windSpeed} m/s</p>\n      <p>Visibility: ${convertVisibility(data.visibility)} km</p>`;\n      weatherIconContainer.innerHTML = `<img src=\"http://openweathermap.org/img/wn/${data.icon}@2x.png\" alt=\"weather-icon\"></img>`;\n      if (data.city.toLowerCase() !== 'kampala' && data.status.toLowerCase() === 'rain') {\n        weatherFocus.style.backgroundImage = \"url('./images/rainy.gif')\";\n      } else if (data.city.toLowerCase() !== 'kampala' && data.status.toLowerCase() === 'clouds') {\n        weatherFocus.style.backgroundImage = \"url('./images/cloudy.gif')\";\n      } else if (data.city.toLowerCase() !== 'kampala' && data.status.toLowerCase() === 'clear') {\n        weatherFocus.style.backgroundImage = \"url('./images/clear.gif')\";\n      }\n    });\n  };\n\n  return { displayDetails };\n})();\n\n\n\n//# sourceURL=webpack://weather-app/./src/render.js?");

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