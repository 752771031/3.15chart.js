/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).PolarArea(data);
new Chart(ctx).Line(data, options);
var data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [{
		fillColor: "rgba(220,220,220,0.5)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		data: [65, 59, 90, 81, 56, 55, 40]
	}, {
		fillColor: "rgba(151,187,205,0.5)",
		strokeColor: "rgba(151,187,205,1)",
		pointColor: "rgba(151,187,205,1)",
		pointStrokeColor: "#fff",
		data: [28, 48, 40, 19, 96, 27, 100]
	}]
};

Line.defaults = {

	//Boolean - If we show the scale above the chart data			
	scaleOverlay: false,

	//Boolean - If we want to override with a hard coded scale
	scaleOverride: false,

	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps: null,
	//Number - The value jump in the hard coded scale
	scaleStepWidth: null,
	//Number - The scale starting value
	scaleStartValue: null,

	//String - Colour of the scale line	
	scaleLineColor: "rgba(0,0,0,.1)",

	//Number - Pixel width of the scale line	
	scaleLineWidth: 1,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels: false,

	//Interpolated JS string - can access value
	scaleLabel: "<%=value%>",

	//String - Scale label font declaration for the scale label
	scaleFontFamily: "'Arial'",

	//Number - Scale label font size in pixels	
	scaleFontSize: 12,

	//String - Scale label font weight style	
	scaleFontStyle: "normal",

	//String - Scale label font colour	
	scaleFontColor: "#666",

	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines: true,

	//String - Colour of the grid lines
	scaleGridLineColor: "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth: 1,

	//Boolean - Whether the line is curved between points
	bezierCurve: true,

	//Boolean - Whether to show a dot for each point
	pointDot: true,

	//Number - Radius of each point dot in pixels
	pointDotRadius: 3,

	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth: 1,

	//Boolean - Whether to show a stroke for datasets
	datasetStroke: true,

	//Number - Pixel width of dataset stroke
	datasetStrokeWidth: 2,

	//Boolean - Whether to fill the dataset with a colour
	datasetFill: true,

	//Boolean - Whether to animate the chart
	animation: true,

	//Number - Number of animation steps
	animationSteps: 60,

	//String - Animation easing effect
	animationEasing: "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete: null

};

React.render(React.createElement(HomePage, null), document.body);

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map