/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const API_KEY = '8BQWYXM3JXWVA9CAUUF9M9RZD'; \r\n\r\nconst defultCityName = \"london\"\r\ngetWeatherData(defultCityName)\r\n\r\n// Fetch and process the weather data\r\nasync function getWeatherData(location) {\r\n  const urlApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}`;\r\n  \r\n  try {\r\n    const response = await fetch(urlApi, {mode: \"cors\"});\r\n    const data = await response.json();\r\n    console.log('Raw data:', data);\r\n    const processedData = processWeatherData(data);\r\n    renderData(processedData);\r\n  } catch (error) {\r\n    console.error('Error fetching weather data:', error);\r\n  }\r\n}\r\n\r\nfunction processWeatherData(data) {\r\n  return {\r\n    location: data.resolvedAddress,\r\n    temperature: data.currentConditions.temp,\r\n    feelsLike: data.currentConditions.feelslike,\r\n    conditions: data.currentConditions.conditions,\r\n    time: data.currentConditions.datetime,\r\n    date: new Date().toLocaleDateString(),\r\n  };\r\n}\r\n\r\nfunction renderData(processedData) {\r\n  document.getElementById('temp').innerHTML = processedData.temperature + \"°C\";\r\n  document.getElementById('how-feels').innerHTML = \"Feels like \" + processedData.feelsLike + \"°C\";\r\n  document.getElementById('city-name').innerHTML = processedData.location;\r\n  document.getElementById('time').innerHTML = processedData.time;\r\n  document.getElementById('date').innerHTML = processedData.date;\r\n}\r\n\r\ndocument.querySelector('.search-btn').addEventListener(\"click\", () => {\r\n  const cityName = document.getElementById(\"search\").value;\r\n  console.log(\"The city name is:\", cityName);\r\n  if (cityName === \"\") return;\r\n  getWeatherData(cityName); \r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;