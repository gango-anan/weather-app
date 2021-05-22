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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ codeToCountry)\n/* harmony export */ });\nconst codeToCountry = (() => {\r\n  const countryCodes = [ \r\n    {name: 'Afghanistan', code: 'AF'}, \r\n    {name: 'Åland Islands', code: 'AX'}, \r\n    {name: 'Albania', code: 'AL'}, \r\n    {name: 'Algeria', code: 'DZ'}, \r\n    {name: 'American Samoa', code: 'AS'}, \r\n    {name: 'AndorrA', code: 'AD'}, \r\n    {name: 'Angola', code: 'AO'}, \r\n    {name: 'Anguilla', code: 'AI'}, \r\n    {name: 'Antarctica', code: 'AQ'}, \r\n    {name: 'Antigua and Barbuda', code: 'AG'}, \r\n    {name: 'Argentina', code: 'AR'}, \r\n    {name: 'Armenia', code: 'AM'}, \r\n    {name: 'Aruba', code: 'AW'}, \r\n    {name: 'Australia', code: 'AU'}, \r\n    {name: 'Austria', code: 'AT'}, \r\n    {name: 'Azerbaijan', code: 'AZ'}, \r\n    {name: 'Bahamas', code: 'BS'}, \r\n    {name: 'Bahrain', code: 'BH'}, \r\n    {name: 'Bangladesh', code: 'BD'}, \r\n    {name: 'Barbados', code: 'BB'}, \r\n    {name: 'Belarus', code: 'BY'}, \r\n    {name: 'Belgium', code: 'BE'}, \r\n    {name: 'Belize', code: 'BZ'}, \r\n    {name: 'Benin', code: 'BJ'}, \r\n    {name: 'Bermuda', code: 'BM'}, \r\n    {name: 'Bhutan', code: 'BT'}, \r\n    {name: 'Bolivia', code: 'BO'}, \r\n    {name: 'Bosnia and Herzegovina', code: 'BA'}, \r\n    {name: 'Botswana', code: 'BW'}, \r\n    {name: 'Bouvet Island', code: 'BV'}, \r\n    {name: 'Brazil', code: 'BR'}, \r\n    {name: 'British Indian Ocean Territory', code: 'IO'}, \r\n    {name: 'Brunei Darussalam', code: 'BN'}, \r\n    {name: 'Bulgaria', code: 'BG'}, \r\n    {name: 'Burkina Faso', code: 'BF'}, \r\n    {name: 'Burundi', code: 'BI'}, \r\n    {name: 'Cambodia', code: 'KH'}, \r\n    {name: 'Cameroon', code: 'CM'}, \r\n    {name: 'Canada', code: 'CA'}, \r\n    {name: 'Cape Verde', code: 'CV'}, \r\n    {name: 'Cayman Islands', code: 'KY'}, \r\n    {name: 'Central African Republic', code: 'CF'}, \r\n    {name: 'Chad', code: 'TD'}, \r\n    {name: 'Chile', code: 'CL'}, \r\n    {name: 'China', code: 'CN'}, \r\n    {name: 'Christmas Island', code: 'CX'}, \r\n    {name: 'Cocos (Keeling) Islands', code: 'CC'}, \r\n    {name: 'Colombia', code: 'CO'}, \r\n    {name: 'Comoros', code: 'KM'}, \r\n    {name: 'Congo', code: 'CG'}, \r\n    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, \r\n    {name: 'Cook Islands', code: 'CK'}, \r\n    {name: 'Costa Rica', code: 'CR'}, \r\n    {name: 'Cote D\\'Ivoire', code: 'CI'}, \r\n    {name: 'Croatia', code: 'HR'}, \r\n    {name: 'Cuba', code: 'CU'}, \r\n    {name: 'Cyprus', code: 'CY'}, \r\n    {name: 'Czech Republic', code: 'CZ'}, \r\n    {name: 'Denmark', code: 'DK'}, \r\n    {name: 'Djibouti', code: 'DJ'}, \r\n    {name: 'Dominica', code: 'DM'}, \r\n    {name: 'Dominican Republic', code: 'DO'}, \r\n    {name: 'Ecuador', code: 'EC'}, \r\n    {name: 'Egypt', code: 'EG'}, \r\n    {name: 'El Salvador', code: 'SV'}, \r\n    {name: 'Equatorial Guinea', code: 'GQ'}, \r\n    {name: 'Eritrea', code: 'ER'}, \r\n    {name: 'Estonia', code: 'EE'}, \r\n    {name: 'Ethiopia', code: 'ET'}, \r\n    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, \r\n    {name: 'Faroe Islands', code: 'FO'}, \r\n    {name: 'Fiji', code: 'FJ'}, \r\n    {name: 'Finland', code: 'FI'}, \r\n    {name: 'France', code: 'FR'}, \r\n    {name: 'French Guiana', code: 'GF'}, \r\n    {name: 'French Polynesia', code: 'PF'}, \r\n    {name: 'French Southern Territories', code: 'TF'}, \r\n    {name: 'Gabon', code: 'GA'}, \r\n    {name: 'Gambia', code: 'GM'}, \r\n    {name: 'Georgia', code: 'GE'}, \r\n    {name: 'Germany', code: 'DE'}, \r\n    {name: 'Ghana', code: 'GH'}, \r\n    {name: 'Gibraltar', code: 'GI'}, \r\n    {name: 'Greece', code: 'GR'}, \r\n    {name: 'Greenland', code: 'GL'}, \r\n    {name: 'Grenada', code: 'GD'}, \r\n    {name: 'Guadeloupe', code: 'GP'}, \r\n    {name: 'Guam', code: 'GU'}, \r\n    {name: 'Guatemala', code: 'GT'}, \r\n    {name: 'Guernsey', code: 'GG'}, \r\n    {name: 'Guinea', code: 'GN'}, \r\n    {name: 'Guinea-Bissau', code: 'GW'}, \r\n    {name: 'Guyana', code: 'GY'}, \r\n    {name: 'Haiti', code: 'HT'}, \r\n    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, \r\n    {name: 'Holy See (Vatican City State)', code: 'VA'}, \r\n    {name: 'Honduras', code: 'HN'}, \r\n    {name: 'Hong Kong', code: 'HK'}, \r\n    {name: 'Hungary', code: 'HU'}, \r\n    {name: 'Iceland', code: 'IS'}, \r\n    {name: 'India', code: 'IN'}, \r\n    {name: 'Indonesia', code: 'ID'}, \r\n    {name: 'Iran, Islamic Republic Of', code: 'IR'}, \r\n    {name: 'Iraq', code: 'IQ'}, \r\n    {name: 'Ireland', code: 'IE'}, \r\n    {name: 'Isle of Man', code: 'IM'}, \r\n    {name: 'Israel', code: 'IL'}, \r\n    {name: 'Italy', code: 'IT'}, \r\n    {name: 'Jamaica', code: 'JM'}, \r\n    {name: 'Japan', code: 'JP'}, \r\n    {name: 'Jersey', code: 'JE'}, \r\n    {name: 'Jordan', code: 'JO'}, \r\n    {name: 'Kazakhstan', code: 'KZ'}, \r\n    {name: 'Kenya', code: 'KE'}, \r\n    {name: 'Kiribati', code: 'KI'}, \r\n    {name: 'Korea, Democratic People\\'S Republic of', code: 'KP'}, \r\n    {name: 'Korea, Republic of', code: 'KR'}, \r\n    {name: 'Kuwait', code: 'KW'}, \r\n    {name: 'Kyrgyzstan', code: 'KG'}, \r\n    {name: 'Lao People\\'S Democratic Republic', code: 'LA'}, \r\n    {name: 'Latvia', code: 'LV'}, \r\n    {name: 'Lebanon', code: 'LB'}, \r\n    {name: 'Lesotho', code: 'LS'}, \r\n    {name: 'Liberia', code: 'LR'}, \r\n    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, \r\n    {name: 'Liechtenstein', code: 'LI'}, \r\n    {name: 'Lithuania', code: 'LT'}, \r\n    {name: 'Luxembourg', code: 'LU'}, \r\n    {name: 'Macao', code: 'MO'}, \r\n    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, \r\n    {name: 'Madagascar', code: 'MG'}, \r\n    {name: 'Malawi', code: 'MW'}, \r\n    {name: 'Malaysia', code: 'MY'}, \r\n    {name: 'Maldives', code: 'MV'}, \r\n    {name: 'Mali', code: 'ML'}, \r\n    {name: 'Malta', code: 'MT'}, \r\n    {name: 'Marshall Islands', code: 'MH'}, \r\n    {name: 'Martinique', code: 'MQ'}, \r\n    {name: 'Mauritania', code: 'MR'}, \r\n    {name: 'Mauritius', code: 'MU'}, \r\n    {name: 'Mayotte', code: 'YT'}, \r\n    {name: 'Mexico', code: 'MX'}, \r\n    {name: 'Micronesia, Federated States of', code: 'FM'}, \r\n    {name: 'Moldova, Republic of', code: 'MD'}, \r\n    {name: 'Monaco', code: 'MC'}, \r\n    {name: 'Mongolia', code: 'MN'}, \r\n    {name: 'Montserrat', code: 'MS'}, \r\n    {name: 'Morocco', code: 'MA'}, \r\n    {name: 'Mozambique', code: 'MZ'}, \r\n    {name: 'Myanmar', code: 'MM'}, \r\n    {name: 'Namibia', code: 'NA'}, \r\n    {name: 'Nauru', code: 'NR'}, \r\n    {name: 'Nepal', code: 'NP'}, \r\n    {name: 'Netherlands', code: 'NL'}, \r\n    {name: 'Netherlands Antilles', code: 'AN'}, \r\n    {name: 'New Caledonia', code: 'NC'}, \r\n    {name: 'New Zealand', code: 'NZ'}, \r\n    {name: 'Nicaragua', code: 'NI'}, \r\n    {name: 'Niger', code: 'NE'}, \r\n    {name: 'Nigeria', code: 'NG'}, \r\n    {name: 'Niue', code: 'NU'}, \r\n    {name: 'Norfolk Island', code: 'NF'}, \r\n    {name: 'Northern Mariana Islands', code: 'MP'}, \r\n    {name: 'Norway', code: 'NO'}, \r\n    {name: 'Oman', code: 'OM'}, \r\n    {name: 'Pakistan', code: 'PK'}, \r\n    {name: 'Palau', code: 'PW'}, \r\n    {name: 'Palestinian Territory, Occupied', code: 'PS'}, \r\n    {name: 'Panama', code: 'PA'}, \r\n    {name: 'Papua New Guinea', code: 'PG'}, \r\n    {name: 'Paraguay', code: 'PY'}, \r\n    {name: 'Peru', code: 'PE'}, \r\n    {name: 'Philippines', code: 'PH'}, \r\n    {name: 'Pitcairn', code: 'PN'}, \r\n    {name: 'Poland', code: 'PL'}, \r\n    {name: 'Portugal', code: 'PT'}, \r\n    {name: 'Puerto Rico', code: 'PR'}, \r\n    {name: 'Qatar', code: 'QA'}, \r\n    {name: 'Reunion', code: 'RE'}, \r\n    {name: 'Romania', code: 'RO'}, \r\n    {name: 'Russian Federation', code: 'RU'}, \r\n    {name: 'Rwanda', code: 'RW'}, \r\n    {name: 'Saint Helena', code: 'SH'}, \r\n    {name: 'Saint Kitts and Nevis', code: 'KN'}, \r\n    {name: 'Saint Lucia', code: 'LC'}, \r\n    {name: 'Saint Pierre and Miquelon', code: 'PM'}, \r\n    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, \r\n    {name: 'Samoa', code: 'WS'}, \r\n    {name: 'San Marino', code: 'SM'}, \r\n    {name: 'Sao Tome and Principe', code: 'ST'}, \r\n    {name: 'Saudi Arabia', code: 'SA'}, \r\n    {name: 'Senegal', code: 'SN'}, \r\n    {name: 'Serbia and Montenegro', code: 'CS'}, \r\n    {name: 'Seychelles', code: 'SC'}, \r\n    {name: 'Sierra Leone', code: 'SL'}, \r\n    {name: 'Singapore', code: 'SG'}, \r\n    {name: 'Slovakia', code: 'SK'}, \r\n    {name: 'Slovenia', code: 'SI'}, \r\n    {name: 'Solomon Islands', code: 'SB'}, \r\n    {name: 'Somalia', code: 'SO'}, \r\n    {name: 'South Africa', code: 'ZA'}, \r\n    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, \r\n    {name: 'Spain', code: 'ES'}, \r\n    {name: 'Sri Lanka', code: 'LK'}, \r\n    {name: 'Sudan', code: 'SD'}, \r\n    {name: 'Suriname', code: 'SR'}, \r\n    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, \r\n    {name: 'Swaziland', code: 'SZ'}, \r\n    {name: 'Sweden', code: 'SE'}, \r\n    {name: 'Switzerland', code: 'CH'}, \r\n    {name: 'Syrian Arab Republic', code: 'SY'}, \r\n    {name: 'Taiwan, Province of China', code: 'TW'}, \r\n    {name: 'Tajikistan', code: 'TJ'}, \r\n    {name: 'Tanzania, United Republic of', code: 'TZ'}, \r\n    {name: 'Thailand', code: 'TH'}, \r\n    {name: 'Timor-Leste', code: 'TL'}, \r\n    {name: 'Togo', code: 'TG'}, \r\n    {name: 'Tokelau', code: 'TK'}, \r\n    {name: 'Tonga', code: 'TO'}, \r\n    {name: 'Trinidad and Tobago', code: 'TT'}, \r\n    {name: 'Tunisia', code: 'TN'}, \r\n    {name: 'Turkey', code: 'TR'}, \r\n    {name: 'Turkmenistan', code: 'TM'}, \r\n    {name: 'Turks and Caicos Islands', code: 'TC'}, \r\n    {name: 'Tuvalu', code: 'TV'}, \r\n    {name: 'Uganda', code: 'UG'}, \r\n    {name: 'Ukraine', code: 'UA'}, \r\n    {name: 'United Arab Emirates', code: 'AE'}, \r\n    {name: 'United Kingdom', code: 'GB'}, \r\n    {name: 'United States', code: 'US'}, \r\n    {name: 'United States Minor Outlying Islands', code: 'UM'}, \r\n    {name: 'Uruguay', code: 'UY'}, \r\n    {name: 'Uzbekistan', code: 'UZ'}, \r\n    {name: 'Vanuatu', code: 'VU'}, \r\n    {name: 'Venezuela', code: 'VE'}, \r\n    {name: 'Viet Nam', code: 'VN'}, \r\n    {name: 'Virgin Islands, British', code: 'VG'}, \r\n    {name: 'Virgin Islands, U.S.', code: 'VI'}, \r\n    {name: 'Wallis and Futuna', code: 'WF'}, \r\n    {name: 'Western Sahara', code: 'EH'}, \r\n    {name: 'Yemen', code: 'YE'}, \r\n    {name: 'Zambia', code: 'ZM'}, \r\n    {name: 'Zimbabwe', code: 'ZW'} \r\n  ]\r\n\r\n  const countryName = (code) => {\r\n    return countryCodes.find(element => element.code === code).name;\r\n  }\r\n\r\n  return { countryName };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/country-code.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_weather */ \"./src/fetch_weather.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\nconst cityForm = document.querySelector('form');\nconst cityFormInput = document.getElementById('city-search');\nconst tempToggler = document.getElementById('temp');\nconst tempTogglerLabel = document.querySelector('.temp-label');\nconst errorContainerElement = document.querySelector('.city-search__error');\nconst utilityKey = _utilities__WEBPACK_IMPORTED_MODULE_1__.default.utilityKey().apiKey;\nlet city = 'kampala';\nlet weatherData = _fetch_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData(city, utilityKey);\n\nwindow.onload = () => {\n  _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n}\n\nconst toggleTemperature = () => {\n  if (tempToggler.checked) {\n    _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  } else {\n    _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  }\n};\n\ntempTogglerLabel.addEventListener('click', () => setTimeout(toggleTemperature, 10));\ncityForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  city = cityFormInput.value;\n  if (city === '' || city === null) {\n    errorContainerElement.innerText = \"City can't be blank, try again!\";\n    return;\n  }\n  weatherData = _fetch_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData(city, utilityKey);\n  _render__WEBPACK_IMPORTED_MODULE_2__.default.displayDetails(weatherData);\n  cityFormInput.value = null;\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderWeatherData)\n/* harmony export */ });\n/* harmony import */ var _country_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-code */ \"./src/country-code.js\");\n\nconst renderWeatherData = (() => {\n  const weatherDetailsContainer = document.querySelector('.details');\n  const tempLabel = document.querySelector('.temp-label');\n  const activeTemp = document.querySelector('.active-temp');\n  const checkBox = document.getElementById('temp');\n  const weatherIconContainer = document.querySelector('.weather-icon');\n  const nowDate = new Date();\n\n  const convertToC = (temp) => {\n    const celisius = temp - 273.15;\n    return Math.round(celisius);\n  };\n\n  const convertToF = (temp) => {\n    const fahrenheit = (temp * (9 / 5)) - 459.67;\n    return Math.round(fahrenheit);\n  };\n\n  const convertVisibility = (visibility) => Math.round(visibility / 1000);\n\n  const tempType = () => {\n    const tempType = checkBox.checked ? '°F' : '°C';\n    return tempType;\n  };\n\n  const displayedTemp = (temp) => {\n    const tempToDisplay = checkBox.checked ? convertToF(temp) : convertToC(temp);\n    return tempToDisplay;\n  };\n\n  const displayDetails = (weatherData) => {\n    weatherData.then((data) => {\n      tempLabel.innerText = `${tempType()}`;\n      activeTemp.innerText = `${displayedTemp(data.temperature)}${tempType()}`;\n      weatherDetailsContainer.innerHTML = `\n      <p class=\"current-date\">${nowDate.toLocaleTimeString()} , ${nowDate.toDateString()}</p>\n      <h2>${data.city}, ${_country_code__WEBPACK_IMPORTED_MODULE_0__.default.countryName(data.country)}</h2>\n      <p>Feels like ${displayedTemp(data.temperature)}${tempType()}</p>\n      <p>Humidity: ${data.humidity}%</p>\n      <p>Wind Speed: ${data.windSpeed} m/s</p>\n      <p>Visibility: ${convertVisibility(data.visibility)} km</p>`;\n      weatherIconContainer.innerHTML = `<img src=\"http://openweathermap.org/img/wn/${data.icon}@2x.png\" alt=\"weather-icon\"></img>`;\n    });\n  };\n\n  return { displayDetails };\n})();\n\n\n\n//# sourceURL=webpack://weather-app/./src/render.js?");

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