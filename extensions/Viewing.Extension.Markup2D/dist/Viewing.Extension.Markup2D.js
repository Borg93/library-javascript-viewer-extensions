window["Viewing.Extension.Markup2D"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.markup {\n    top: 10px;\n    left: 10px;\n    width: 300px;\n    height: 350px;\n    resize: auto;\n}\n\n.markup .container {\n    height: calc(100% - 50px);\n    width: calc(100% - 24px);\n    padding-top: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin: 0;\n}\n\n.markup .switch-container {\n    float: left;\n    margin-right: 28px;\n}\n\n.markup .dropdown-mode-container {\n    float: left;\n    margin-top: 1px;\n    margin-bottom: 10px;\n}\n\n.markup .input {\n    height: 14px;\n    margin-left: 2px;\n    margin-top: 0px;\n    border-radius:5px;\n    vertical-align: top;\n    width: calc(100% - 88px);\n}\n\n.markup .styles {\n    width: calc(100% - 84px);\n    margin-left: 6px;\n    height: 20px;\n}\n\n.markup .btn {\n    height: 6px;\n    line-height: 0;\n    vertical-align: top;\n}\n\n.markup .btn-dropdown {\n    width: 170px;\n    height: 10px;\n}\n\n.markup .btn-span {\n    margin-right: 0px;\n    line-height: 0.3;\n    top: 1px;\n}\n\n.markup .btn-row {\n    width: 63px;\n}\n\n.markup .btn-span-list {\n    margin-right: 0px;\n    line-height: 0.3;\n    top: 1px;\n}\n.markup .btn-list {\n    margin-top: -8px;\n    float: right;\n}\n.minimized {\n    height: 34px;\n    min-height: 34px\n}\n\n.markup .v-spacer {\n    border-width: 0px;\n    margin: 2px;\n}\n\n.markup .v-spacer-large {\n    border-width: 0px;\n    margin: 10px;\n}\n\n.markup .list-group-item {\n    width: calc(100% - 20px);\n    height: 4px;\n    line-height: 0.3;\n    border-radius: 4px;\n    margin-top: 0px;\n    margin-bottom: 2px;\n    padding-right: 2px;\n    background-color: #F0F0F0;\n}\n\n.markup .view-mode .list-group-item {\n\n    cursor: pointer;\n}\n\n.markup .view-mode .list-group-item.enabled {\n\n    border: 1px solid #42C542;\n    background-color: #42C542;\n}\n\n.markup .view-mode .list-group-item.enabled:hover{\n\n    border: 1px solid #42C542;\n    background-color: #41E641;\n}\n\n.markup .view-mode .list-group-item:hover {\n\n    border: 1px solid #34AFD4;\n    background-color: #34AFD4;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Viewing.Extension.Markup2D/spectrum.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./src/Viewing.Extension.Markup2D/spectrum.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/***\nSpectrum Colorpicker v1.5.1\nhttps://github.com/bgrins/spectrum\nAuthor: Brian Grinstead\nLicense: MIT\n***/\n\n.sp-container {\n    position:absolute;\n    top:0;\n    left:0;\n    display:inline-block;\n    *display: inline;\n    *zoom: 1;\n    /* https://github.com/bgrins/spectrum/issues/40 */\n    z-index: 9999994;\n    overflow: hidden;\n}\n.sp-container.sp-flat {\n    position: relative;\n}\n\n/* Fix for * { box-sizing: border-box; } */\n.sp-container,\n.sp-container * {\n    box-sizing: content-box;\n}\n\n/* http://ansciath.tumblr.com/post/7347495869/css-aspect-ratio */\n.sp-top {\n  position:relative;\n  width: 100%;\n  display:inline-block;\n}\n.sp-top-inner {\n   position:absolute;\n   top:0;\n   left:0;\n   bottom:0;\n   right:0;\n}\n.sp-color {\n    position: absolute;\n    top:0;\n    left:0;\n    bottom:0;\n    right:20%;\n}\n.sp-hue {\n    position: absolute;\n    top:0;\n    right:0;\n    bottom:0;\n    left:84%;\n    height: 100%;\n}\n\n.sp-clear-enabled .sp-hue {\n    top:33px;\n    height: 77.5%;\n}\n\n.sp-fill {\n    padding-top: 80%;\n}\n.sp-sat, .sp-val {\n    position: absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n}\n\n.sp-alpha-enabled .sp-top {\n    margin-bottom: 18px;\n}\n.sp-alpha-enabled .sp-alpha {\n    display: block;\n}\n.sp-alpha-handle {\n    position:absolute;\n    top:-4px;\n    bottom: -4px;\n    width: 6px;\n    left: 50%;\n    cursor: pointer;\n    border: 1px solid black;\n    background: white;\n    opacity: .8;\n}\n.sp-alpha {\n    display: none;\n    position: absolute;\n    bottom: -14px;\n    right: 0;\n    left: 0;\n    height: 8px;\n}\n.sp-alpha-inner {\n    border: solid 1px #333;\n}\n\n.sp-clear {\n    display: none;\n}\n\n.sp-clear.sp-clear-display {\n    background-position: center;\n}\n\n.sp-clear-enabled .sp-clear {\n    display: block;\n    position:absolute;\n    top:0px;\n    right:0;\n    bottom:0;\n    left:84%;\n    height: 28px;\n}\n\n/* Don't allow text selection */\n.sp-container, .sp-replacer, .sp-preview, .sp-dragger, .sp-slider, .sp-alpha, .sp-clear, .sp-alpha-handle, .sp-container.sp-dragging .sp-input, .sp-container button  {\n    -webkit-user-select:none;\n    -moz-user-select: -moz-none;\n    -o-user-select:none;\n    -ms-user-select: none;\n        user-select: none;\n}\n\n.sp-container.sp-input-disabled .sp-input-container {\n    display: none;\n}\n.sp-container.sp-buttons-disabled .sp-button-container {\n    display: none;\n}\n.sp-container.sp-palette-buttons-disabled .sp-palette-button-container {\n    display: none;\n}\n.sp-palette-only .sp-picker-container {\n    display: none;\n}\n.sp-palette-disabled .sp-palette-container {\n    display: none;\n}\n\n.sp-initial-disabled .sp-initial {\n    display: none;\n}\n\n\n/* Gradients for hue, saturation and value instead of images.  Not pretty... but it works */\n.sp-sat {\n    background-image: linear-gradient(to right, #fff, rgba(204, 154, 129, 0));\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr=#FFFFFFFF, endColorstr=#00CC9A81)\";\n    filter : progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr='#FFFFFFFF', endColorstr='#00CC9A81');\n}\n.sp-val {\n    background-image: linear-gradient(to top, #000, rgba(204, 154, 129, 0));\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00CC9A81, endColorstr=#FF000000)\";\n    filter : progid:DXImageTransform.Microsoft.gradient(startColorstr='#00CC9A81', endColorstr='#FF000000');\n}\n\n.sp-hue {\n    background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n/* IE filters do not support multiple color stops.\n   Generate 6 divs, line them up, and do two color gradients for each.\n   Yes, really.\n */\n.sp-1 {\n    height:17%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0000', endColorstr='#ffff00');\n}\n.sp-2 {\n    height:16%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff00', endColorstr='#00ff00');\n}\n.sp-3 {\n    height:17%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ff00', endColorstr='#00ffff');\n}\n.sp-4 {\n    height:17%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffff', endColorstr='#0000ff');\n}\n.sp-5 {\n    height:16%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0000ff', endColorstr='#ff00ff');\n}\n.sp-6 {\n    height:17%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff00ff', endColorstr='#ff0000');\n}\n\n.sp-hidden {\n    display: none !important;\n}\n\n/* Clearfix hack */\n.sp-cf:before, .sp-cf:after { content: \"\"; display: table; }\n.sp-cf:after { clear: both; }\n.sp-cf { *zoom: 1; }\n\n/* Mobile devices, make hue slider bigger so it is easier to slide */\n@media (max-device-width: 480px) {\n    .sp-color { right: 40%; }\n    .sp-hue { left: 63%; }\n    .sp-fill { padding-top: 60%; }\n}\n.sp-dragger {\n   border-radius: 5px;\n   height: 5px;\n   width: 5px;\n   border: 1px solid #fff;\n   background: #000;\n   cursor: pointer;\n   position:absolute;\n   top:0;\n   left: 0;\n}\n.sp-slider {\n    position: absolute;\n    top:0;\n    cursor:pointer;\n    height: 3px;\n    left: -1px;\n    right: -1px;\n    border: 1px solid #000;\n    background: white;\n    opacity: .8;\n}\n\n/*\nTheme authors:\nHere are the basic themeable display options (colors, fonts, global widths).\nSee http://bgrins.github.io/spectrum/themes/ for instructions.\n*/\n\n.sp-container {\n    border-radius: 0;\n    background-color: #ECECEC;\n    border: solid 1px #f0c49B;\n    padding: 0;\n}\n.sp-container, .sp-container button, .sp-container input, .sp-color, .sp-hue, .sp-clear {\n    font: normal 12px \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Verdana, sans-serif;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.sp-top {\n    margin-bottom: 3px;\n}\n.sp-color, .sp-hue, .sp-clear {\n    border: solid 1px #666;\n}\n\n/* Input */\n.sp-input-container {\n    float:right;\n    width: 100px;\n    margin-bottom: 4px;\n}\n.sp-initial-disabled  .sp-input-container {\n    width: 100%;\n}\n.sp-input {\n   font-size: 12px !important;\n   border: 1px inset;\n   padding: 4px 5px;\n   margin: 0;\n   width: 100%;\n   background:transparent;\n   border-radius: 3px;\n   color: #222;\n}\n.sp-input:focus  {\n    border: 1px solid orange;\n}\n.sp-input.sp-validation-error {\n    border: 1px solid red;\n    background: #fdd;\n}\n.sp-picker-container , .sp-palette-container {\n    float:left;\n    position: relative;\n    padding: 10px;\n    padding-bottom: 300px;\n    margin-bottom: -290px;\n}\n.sp-picker-container {\n    width: 172px;\n    border-left: solid 1px #fff;\n}\n\n/* Palettes */\n.sp-palette-container {\n    border-right: solid 1px #ccc;\n}\n\n.sp-palette-only .sp-palette-container {\n    border: 0;\n}\n\n.sp-palette .sp-thumb-el {\n    display: block;\n    position:relative;\n    float:left;\n    width: 24px;\n    height: 15px;\n    margin: 3px;\n    cursor: pointer;\n    border:solid 2px transparent;\n}\n.sp-palette .sp-thumb-el:hover, .sp-palette .sp-thumb-el.sp-thumb-active {\n    border-color: orange;\n}\n.sp-thumb-el {\n    position:relative;\n}\n\n/* Initial */\n.sp-initial {\n    float: left;\n    border: solid 1px #333;\n}\n.sp-initial span {\n    width: 30px;\n    height: 25px;\n    border:none;\n    display:block;\n    float:left;\n    margin:0;\n}\n\n.sp-initial .sp-clear-display {\n    background-position: center;\n}\n\n/* Buttons */\n.sp-palette-button-container,\n.sp-button-container {\n    float: right;\n}\n\n/* Replacer (the little preview div that shows up instead of the <input>) */\n.sp-replacer {\n    margin:0;\n    overflow:hidden;\n    cursor:pointer;\n    padding: 4px;\n    display:inline-block;\n    *zoom: 1;\n    *display: inline;\n    border: solid 1px #91765d;\n    background: #eee;\n    color: #333;\n    vertical-align: middle;\n    height: 17px;\n    width: 56px;\n    border-radius:10px;\n}\n.sp-replacer:hover, .sp-replacer.sp-active {\n    border-color: #F0C49B;\n    color: #111;\n}\n.sp-replacer.sp-disabled {\n    cursor:default;\n    border-color: silver;\n    color: silver;\n}\n.sp-dd {\n    padding: 2px 0;\n    height: 16px;\n    line-height: 16px;\n    float:left;\n    font-size:10px;\n}\n.sp-preview {\n    position:relative;\n    width:25px;\n    height: 15px;\n    border: solid 1px #222;\n    margin-right: 5px;\n    float:left;\n    z-index: 0;\n    border-radius:8px;\n    width: 36px;\n}\n\n.sp-palette {\n    *width: 220px;\n    max-width: 220px;\n}\n.sp-palette .sp-thumb-el {\n    width:16px;\n    height: 16px;\n    margin:2px 1px;\n    border: solid 1px #d0d0d0;\n}\n\n.sp-container {\n    padding-bottom:0;\n}\n\n\n/* Buttons: http://hellohappy.org/css3-buttons/ */\n.sp-container button {\n  background-color: #eeeeee;\n  background-image: linear-gradient(to bottom, #eeeeee, #cccccc);\n  border: 1px solid #ccc;\n  border-bottom: 1px solid #bbb;\n  border-radius: 3px;\n  color: #333;\n  font-size: 14px;\n  line-height: 1;\n  padding: 5px 4px;\n  text-align: center;\n  text-shadow: 0 1px 0 #eee;\n  vertical-align: middle;\n}\n.sp-container button:hover {\n    background-color: #dddddd;\n    background-image: linear-gradient(to bottom, #dddddd, #bbbbbb);\n    border: 1px solid #bbb;\n    border-bottom: 1px solid #999;\n    cursor: pointer;\n    text-shadow: 0 1px 0 #ddd;\n}\n.sp-container button:active {\n    border: 1px solid #aaa;\n    border-bottom: 1px solid #888;\n    -ms-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n    -o-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n    box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n}\n.sp-cancel {\n    font-size: 11px;\n    color: #d93f3f !important;\n    margin:0;\n    padding:2px;\n    margin-right: 5px;\n    vertical-align: middle;\n    text-decoration:none;\n\n}\n.sp-cancel:hover {\n    color: #d93f3f !important;\n    text-decoration: underline;\n}\n\n\n.sp-palette span:hover, .sp-palette span.sp-thumb-active {\n    border-color: #000;\n}\n\n.sp-preview, .sp-alpha, .sp-thumb-el {\n    position:relative;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n}\n.sp-preview-inner, .sp-alpha-inner, .sp-thumb-inner {\n    display:block;\n    position:absolute;\n    top:0;left:0;bottom:0;right:0;\n    border-radius:8px;\n}\n\n.sp-palette .sp-thumb-inner {\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n}\n\n.sp-palette .sp-thumb-light.sp-thumb-active .sp-thumb-inner {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpiYBhsgJFMffxAXABlN5JruT4Q3wfi/0DsT64h8UD8HmpIPCWG/KemIfOJCUB+Aoacx6EGBZyHBqI+WsDCwuQ9mhxeg2A210Ntfo8klk9sOMijaURm7yc1UP2RNCMbKE9ODK1HM6iegYLkfx8pligC9lCD7KmRof0ZhjQACDAAceovrtpVBRkAAAAASUVORK5CYII=);\n}\n\n.sp-palette .sp-thumb-dark.sp-thumb-active .sp-thumb-inner {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAMdJREFUOE+tkgsNwzAMRMugEAahEAahEAZhEAqlEAZhEAohEAYh81X2dIm8fKpEspLGvudPOsUYpxE2BIJCroJmEW9qJ+MKaBFhEMNabSy9oIcIPwrB+afvAUFoK4H0tMaQ3XtlrggDhOVVMuT4E5MMG0FBbCEYzjYT7OxLEvIHQLY2zWwQ3D+9luyOQTfKDiFD3iUIfPk8VqrKjgAiSfGFPecrg6HN6m/iBcwiDAo7WiBeawa+Kwh7tZoSCGLMqwlSAzVDhoK+6vH4G0P5wdkAAAAASUVORK5CYII=);\n}\n\n.sp-clear-display {\n    background-repeat:no-repeat;\n    background-position: center;\n    background-image: url(data:image/gif;base64,R0lGODlhFAAUAPcAAAAAAJmZmZ2dnZ6enqKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq/Hx8fLy8vT09PX19ff39/j4+Pn5+fr6+vv7+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAUABQAAAihAP9FoPCvoMGDBy08+EdhQAIJCCMybCDAAYUEARBAlFiQQoMABQhKUJBxY0SPICEYHBnggEmDKAuoPMjS5cGYMxHW3IiT478JJA8M/CjTZ0GgLRekNGpwAsYABHIypcAgQMsITDtWJYBR6NSqMico9cqR6tKfY7GeBCuVwlipDNmefAtTrkSzB1RaIAoXodsABiZAEFB06gIBWC1mLVgBa0AAOw==);\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/Viewing.Extension.Markup2D/MarkupsCore.js":
/*!*******************************************************!*\
  !*** ./src/Viewing.Extension.Markup2D/MarkupsCore.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var namespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core.Utils');
  /**
   *
   * @param markupType
   * @returns {*}
   */

  namespace.getTypeString = function (markupType) {
    var core = Autodesk.Viewing.Extensions.Markups.Core;

    switch (markupType) {
      case core.MARKUP_TYPE_TEXT:
        return core.MARKUP_EXPORT_TYPE_LABEL;

      case core.MARKUP_TYPE_ARROW:
        return core.MARKUP_EXPORT_TYPE_ARROW;

      case core.MARKUP_TYPE_RECTANGLE:
        return core.MARKUP_EXPORT_TYPE_RECTANGLE;

      case core.MARKUP_TYPE_CIRCLE:
        return core.MARKUP_EXPORT_TYPE_CIRCLE;

      case core.MARKUP_TYPE_CLOUD:
        return core.MARKUP_EXPORT_TYPE_CLOUD;

      case core.MARKUP_TYPE_FREEHAND:
        return core.MARKUP_EXPORT_TYPE_FREEHAND;
    }

    return 'Unknown(' + id + ')';
  };
  /**
   * // isTouchDevice is an LMV function. Hammer is included by LMV as well
   * @returns {boolean}
   */


  namespace.isTouchDevice = function () {
    // isTouchDevice() is an LMV function.
    // Hammer (a touch detection lib) is packaged with LMV as well
    if (typeof isTouchDevice === "function" && typeof Hammer === "function") {
      return isTouchDevice();
    }

    return false;
  }; //// SVG  //////////////////////////////////////////////////////////////////////////////////////////////////////////


  namespace.createSvgElement = function (type) {
    // See https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
    var namespace = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(namespace, type);
    svg.setAttribute('pointer-events', 'inherit');
    return svg;
  };
  /**
   *
   * @param {Element} svg - an SVGElement
   * @returns {Element} svg param is returned back
   */


  namespace.setSvgParentAttributes = function (svg) {
    // See: https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course
    svg.setAttribute('version', '1.1'); // Notice that this is the SVG version, not the "MARKUP DATA VERSION"!

    svg.setAttribute('baseProfile', 'full');
    return svg;
  };
  /**
   * Helper function that injects metadata for the whole Markup document.
   * Metadata includes: version.
   * @param {Element} svg - an SVGElement
   * @param {Object} metadata - Dictionary with attributes
   */


  namespace.addSvgMetadata = function (svg, metadata) {
    var metadataNode = document.createElementNS('http://www.w3.org/2000/svg', 'metadata');
    var dataVersionNode = document.createElement('markup_document');
    metadataNode.appendChild(dataVersionNode); // NOTE: We could iterate over the properties, but we don't because these are the only ones supported

    dataVersionNode.setAttribute("data-model-version", metadata["data-model-version"]); // Version. For example: "1"

    svg.insertBefore(metadataNode, svg.firstChild);
    return metadataNode;
  };
  /**
   * Helper function that injects metadata for specific markup svg nodes.
   * @param {Element} markupNode - an SVGElement for the markup
   * @param {Object} metadata - Dictionary where all key/value pairs are added as metadata entries.
   * @returns {Element}
   */


  namespace.addMarkupMetadata = function (markupNode, metadata) {
    var metadataNode = document.createElementNS('http://www.w3.org/2000/svg', 'metadata');
    var dataVersionNode = document.createElement('markup_element');
    metadataNode.appendChild(dataVersionNode);

    for (var key in metadata) {
      if (metadata.hasOwnProperty(key)) {
        dataVersionNode.setAttribute(key, metadata[key]);
      }
    }

    markupNode.insertBefore(metadataNode, markupNode.firstChild);
    return metadataNode;
  };
  /**
   * Removes al metadata nodes from an Svg node structure.
   * Method will remove all metadata nodes from children nodes as well.
   * @param svgNode
   */


  namespace.removeAllMetadata = function (svgNode) {
    var nodes = svgNode.getElementsByTagName("metadata");

    for (var i = 0; i < nodes.length; ++i) {
      var metadataNode = nodes[i];
      metadataNode.parentNode && metadataNode.parentNode.removeChild(metadataNode);
    } // Transverse children nodes


    var svgChildren = svgNode.children || svgNode.childNodes;

    for (i = 0; i < svgChildren.length; ++i) {
      this.removeAllMetadata(svgChildren[i]);
    }
  };
  /**
   * Utility function that transfers children from an Html/Svg node into another one.
   * @param nodeFrom - The node instance from where children will be taken.
   * @param nodeInto - The node that's going to parent the transferred children.
   */


  namespace.transferChildNodes = function (nodeFrom, nodeInto) {
    var svgChildren = nodeFrom.children || nodeFrom.childNodes;
    var tmpArray = [];

    for (var i = 0; i < svgChildren.length; ++i) {
      tmpArray.push(svgChildren[i]); // Avoid appendChild
    }

    tmpArray.forEach(function (node) {
      nodeInto.appendChild(node);
    });
  };
  /**
   * Serializes an SVG node into a String.
   * @param domNode
   * @returns {string}
   */


  namespace.svgNodeToString = function (domNode) {
    var result;

    try {
      var xmlSerializer = new XMLSerializer();
      result = xmlSerializer.serializeToString(domNode);
    } catch (err) {
      result = '';
      console.warn('svgNodeToString failed to generate string representation of domNode.');
    }

    return result;
  };

  namespace.stringToSvgNode = function (stringNode) {
    var node = null;

    try {
      var domParser = new DOMParser();
      var doc = domParser.parseFromString(stringNode, "text/xml");
      node = doc.firstChild; // We should only be getting 1 child anyway.
    } catch (err) {
      node = null;
      console.warn('stringToSvgNode failed to generate an HTMLElement from its string representation.');
    }

    return node;
  };
  /**
   * Injects functions and members to a client object which will
   * receive the ability to dispatch events.
   * Mechanism is the same as in Autodesk.Viewing.Viewer.
   *
   * Note: All of the code here comes from Autodesk.Viewing.Viewer
   *
   * @param {Object} client - Object that will become an event dispatcher.
   */


  namespace.addTraitEventDispatcher = function (client) {
    // Inject member variable
    client.listeners = {}; // Inject functions

    client.addEventListener = function (type, listener) {
      if (typeof this.listeners[type] == "undefined") {
        this.listeners[type] = [];
      }

      this.listeners[type].push(listener);
    };

    client.hasEventListener = function (type, listener) {
      if (this.listeners === undefined) return false;
      var listeners = this.listeners;

      if (listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1) {
        return true;
      }

      return false;
    };

    client.removeEventListener = function (type, listener) {
      if (this.listeners[type] instanceof Array) {
        var li = this.listeners[type];

        for (var i = 0, len = li.length; i < len; i++) {
          if (li[i] === listener) {
            li.splice(i, 1);
            break;
          }
        }
      }
    };

    client.fireEvent = function (event) {
      if (typeof event == "string") {
        event = {
          type: event
        };
      }

      if (!event.target) {
        event.target = this;
      }

      if (!event.type) {
        throw new Error("event type unknown.");
      }

      if (this.listeners[event.type] instanceof Array) {
        var typeListeners = this.listeners[event.type].slice();

        for (var i = 0; i < typeListeners.length; i++) {
          typeListeners[i].call(this, event);
        }
      }
    };
  };
  /**
   * Removes the EventDispatcher trait
   *
   * @param {Object} client
   */


  namespace.removeTraitEventDispatcher = function (client) {
    try {
      delete client.listeners;
      delete client.addEventListener;
      delete client.hasEventListener;
      delete client.removeEventListener;
      delete client.fireEvent;
    } catch (e) {// nothing
    }
  }; //// Math  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Calculates the pixel position in client space coordinates of a point in world space.
   * @param {THREE.Vector3} point Point in world space coordinates.
   * @param viewer
   * @param snap Round values to closest pixel center.
   * @returns {THREE.Vector3} Point transformed and projected into client space coordinates.
   */


  namespace.worldToClient = function (point, viewer, snap) {
    var p = namespace.worldToViewport(point, viewer);
    var result = viewer.impl.viewportToClient(p.x, p.y);
    result.z = 0; // snap to the center of the

    if (snap) {
      result.x = Math.floor(result.x) + 0.5;
      result.y = Math.floor(result.y) + 0.5;
    }

    return result;
  };

  namespace.clientToWorld = function (clientX, clientY, depth, viewer) {
    var point = viewer.impl.clientToViewport(clientX, clientY);
    point.z = depth;
    point.unproject(viewer.impl.camera);
    return point;
  };
  /**
   * Calculates the world position of a point in client space coordinates.
   * @param {Object} point - { x:Number, y:Number, z:Number }
   * @param {Object} viewer - LMV instance
   * @returns {THREE.Vector3}
   */


  namespace.worldToViewport = function (point, viewer) {
    var p = new THREE.Vector3();
    p.x = point.x;
    p.y = point.y;
    p.z = point.z;
    p.project(viewer.impl.camera);
    return p;
  };

  namespace.metersToModel = function (meters, viewer) {
    var modelToMeter = viewer.model.getUnitScale();
    var meterToModel = 1 / modelToMeter;
    return meterToModel * meters;
  };

  namespace.radiansToDegrees = function (radians) {
    return radians * (180 / Math.PI);
  };

  namespace.degreesToRadians = function (degrees) {
    return degrees * (Math.PI / 180);
  };
  /**
   *
   * @param value
   * @returns {number}
   */


  namespace.sign = function (value) {
    return value >= 0 ? 1 : -1;
  }; //// LMV Viewer ////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Makes sure LMV's camera is set to Orthographic.
   * Only works with 3d models; will do nothing when a 2d model is loaded.
   * @param {Object} viewer - LMV instance
   */


  namespace.forceOrthographicCamera = function (viewer) {
    if (!viewer || !viewer.navigation || viewer.model.is2d()) return;
    var navApi = viewer.navigation;
    var camera = navApi.getCamera();

    if (camera.isPerspective) {
      navApi.toOrthographic();
    }
  }; //// LMV ui ////////////////////////////////////////////////////////////////////////////////////////////////////////


  namespace.hideLmvUi = function (viewer) {
    // Exit other tools and hide HudMessages.
    viewer.setActiveNavigationTool();
    namespace.dismissLmvHudMessage();
    namespace.hideLmvPanels(true, viewer);
    namespace.hideLmvToolsAndPanels(viewer);
  };

  namespace.restoreLmvUi = function (viewer) {
    namespace.dismissLmvHudMessage();
    namespace.hideLmvPanels(false, viewer);
    namespace.showLmvToolsAndPanels(viewer);
  };
  /**
   *
   * @param hide
   * @param viewer
   */


  namespace.hideLmvPanels = function (hide, viewer) {
    var dockingPanels = viewer.dockingPanels; // Panels may not be present when dealing with an instance of Viewer3D.js
    // (as opposed to an instance of GuiViewer3D.js)

    if (!dockingPanels) return;

    for (var i = 0; i < dockingPanels.length; ++i) {
      var panel = dockingPanels[i];
      var panelContainer = panel.container;

      if (panelContainer.classList.contains("dockingPanelVisible")) {
        panelContainer.style.display = hide ? "none" : "block"; // Call the visibility changed notification if any additional
        // stuff needs to be done (update the date i.e. PropertyPanel, etc).

        panel.visibilityChanged();
      }
    }
  };
  /**
   * Shows panels and tools in the viewer.
   * @param viewer
   */


  namespace.showLmvToolsAndPanels = function (viewer) {
    // Restore view cube.
    if (!viewer.model.is2d()) {
      viewer.displayViewCube(true, false);
    } // TODO: Find or ask for a better way to restore this buttons.
    // Hide home and info button.


    var home = document.getElementsByClassName('homeViewWrapper');
    var info = document.getElementsByClassName('infoButton');
    var anim = document.getElementsByClassName('toolbar-animationSubtoolbar');

    if (home.length > 0) {
      home[0].style.display = '';
    }

    if (info.length > 0) {
      info[0].style.display = '';
    }

    if (anim.length > 0) {
      anim[0].style.display = '';
    } // toolbar is absent when dealing with an instance of Viewer3D (instead of GuiViewer3D)


    if (viewer.toolbar) {
      var viewerContainer = viewer.toolbar.container;
      var viewerContainerChildrenCount = viewerContainer.children.length;

      for (var i = 0; i < viewerContainerChildrenCount; ++i) {
        viewerContainer.children[i].style.display = "";
      }
    }
  };
  /**
   * Hides panels and tools in the viewer.
   * @param viewer
   */


  namespace.hideLmvToolsAndPanels = function (viewer) {
    // Hide Panels and tools.
    if (viewer && viewer.model && !viewer.model.is2d()) {
      viewer.displayViewCube(false, false);
    } // TODO: Find or ask for a better way to hide this buttons.
    // Hide home and info button.


    var home = document.getElementsByClassName('homeViewWrapper');
    var info = document.getElementsByClassName('infoButton');
    var anim = document.getElementsByClassName('toolbar-animationSubtoolbar');

    if (home.length > 0) {
      home[0].style.display = 'none';
    }

    if (info.length > 0) {
      info[0].style.display = 'none';
    }

    if (anim.length > 0) {
      anim[0].style.display = 'none';
      var animator = viewer.impl.keyFrameAnimator;

      if (animator && !animator.isPaused) {
        animator.pauseCameraAnimations();
        animator.pause();
        var playButton = viewer.modelTools.getControl('toolbar-animationPlay');

        if (playButton) {
          playButton.setIcon('toolbar-animationPauseIcon');
          playButton.setToolTip('Pause');
        }
      }
    } // toolbar is absent when dealing with an instance of Viewer3D (instead of GuiViewer3D)


    if (viewer.toolbar) {
      var viewerContainer = viewer.toolbar.container;
      var viewerContainerChildrenCount = viewerContainer.children.length;

      for (var i = 0; i < viewerContainerChildrenCount; ++i) {
        viewerContainer.children[i].style.display = "none";
      }
    }
  };
  /**
   * Dismisses all LMV HudMessages
   */


  namespace.dismissLmvHudMessage = function () {
    // Using try/catch block since we are accessing the Private namespace of LMV.
    try {
      var keepDismissing = true;

      while (keepDismissing) {
        keepDismissing = Autodesk.Viewing.Private.HudMessage.dismiss();
      }
    } catch (ignore) {
      // Failing to show the message is an okay fallback scenario
      console.warn("[CO2]Failed to dismiss LMV HudMessage");
    }
  }; //// Styles ////////////////////////////////////////////////////////////////////////////////////////////////////////


  namespace.createStyle = function (attributes, viewer) {
    var style = {};

    for (var i = 0; i < attributes.length; ++i) {
      style[attributes[i]] = null;
    }

    var defaults = namespace.getStyleDefaultValues(style, viewer);

    for (var i = 0; i < attributes.length; ++i) {
      var attribute = attributes[i];
      style[attribute] = defaults[attribute].values[defaults[attribute]["default"]].value;
    }

    return style;
  };
  /**
   *
   * @param source
   * @param destination
   */


  namespace.copyStyle = function (source, destination) {
    for (var attribute in destination) {
      if (source.hasOwnProperty(attribute)) {
        destination[attribute] = source[attribute];
      }
    }
  };
  /**
   *
   * @param source
   * @returns {{}}
   */


  namespace.cloneStyle = function (source) {
    var clone = {};

    for (var attribute in source) {
      clone[attribute] = source[attribute];
    }

    return clone;
  };
  /**
   *
   * @param style
   * @param viewer
   * @returns {{}}
   */


  namespace.getStyleDefaultValues = function (style, viewer) {
    function getStrokeWidth(viewer) {
      var width = 0;
      var data = viewer.model.getData();

      if (data.is2d) {
        width = namespace.metersToModel(0.0254, viewer) * 2; // 0.0254 m == 1 inch
      } else {
        var a = viewer.impl.viewportToClient(0.00, 0.00);
        var b = viewer.impl.viewportToClient(0.01, 0.01);
        a = namespace.clientToWorld(a.x, a.y, 0, viewer);
        b = namespace.clientToWorld(b.x, b.y, 0, viewer);
        width = Math.abs(b.y - a.y);
      }

      return width;
    }

    function getWidths(smallWidth) {
      return {
        values: [{
          name: 'Thin',
          value: smallWidth
        }, {
          name: 'Normal',
          value: smallWidth * 3
        }, {
          name: 'Thick',
          value: smallWidth * 9
        }],
        "default": 1
      };
    }

    function getFontSizes(smallWidth) {
      return {
        values: [{
          name: 'Thin',
          value: smallWidth * 5
        }, {
          name: 'Normal',
          value: smallWidth * 10
        }, {
          name: 'Thick',
          value: smallWidth * 20
        }],
        "default": 1
      };
    }

    function getColors() {
      return {
        values: [{
          name: 'red',
          value: '#ff0000'
        }, {
          name: 'green',
          value: '#00ff00'
        }, {
          name: 'blue',
          value: '#0000ff'
        }, {
          name: 'white',
          value: '#ffffff'
        }, {
          name: 'black',
          value: '#000000'
        }],
        "default": 0
      };
    }

    function getOpacities(defaultTransparent) {
      return {
        values: [{
          name: '100%',
          value: 1.00
        }, {
          name: '75%',
          value: 0.75
        }, {
          name: '50%',
          value: 0.50
        }, {
          name: '25%',
          value: 0.25
        }, {
          name: '0%',
          value: 0.00
        }],
        "default": defaultTransparent ? 4 : 0
      };
    }

    function getFontFamilies() {
      // TODO: Localize?
      // TODO: Validate fonts with design
      // Source: http://www.webdesigndev.com/web-development/16-gorgeous-web-safe-fonts-to-use-with-css
      return {
        values: [{
          name: 'Arial',
          value: 'Arial'
        }, {
          name: 'Arial Black',
          value: 'Arial Black'
        }, {
          name: 'Arial Narrow',
          value: 'Arial Narrow'
        }, {
          name: 'Century Gothic',
          value: 'Century Gothic'
        }, {
          name: 'Courier New',
          value: 'Courier New'
        }, {
          name: 'Georgia',
          value: 'Georgia'
        }, {
          name: 'Impact',
          value: 'Impact'
        }, {
          name: 'Lucida Console',
          value: 'Lucida Console'
        }, {
          name: 'Tahoma',
          value: 'Tahoma'
        }, {
          name: 'Verdana',
          value: 'Verdana'
        }],
        "default": 0
      };
    }

    function getFontStyles() {
      return {
        values: [{
          name: 'Normal',
          value: false
        }, {
          name: 'Italic',
          value: true
        }],
        "default": 0
      };
    }

    function getFontWeights() {
      return {
        values: [{
          name: 'Normal',
          value: false
        }, {
          name: 'Bold',
          value: true
        }],
        "default": 0
      };
    }

    var values = namespace.cloneStyle(style);
    var smallWidth = getStrokeWidth(viewer);

    for (var attribute in values) {
      switch (attribute) {
        case 'stroke-width':
          values[attribute] = getWidths(smallWidth);
          break;

        case 'font-size':
          values[attribute] = getFontSizes(smallWidth);
          break;

        case 'font-family':
          values[attribute] = getFontFamilies();
          break;

        case 'font-style':
          values[attribute] = getFontStyles();
          break;

        case 'font-weight':
          values[attribute] = getFontWeights();
          break;

        case 'stroke-color':
        case 'fill-color':
          values[attribute] = getColors();
          break;

        case 'stroke-opacity':
          var defaultTransparent = false;
          values[attribute] = getOpacities(defaultTransparent);
          break;

        case 'fill-opacity':
          var defaultTransparent = true;
          values[attribute] = getOpacities(defaultTransparent);
          break;

        default:
          break;
      }
    }

    return values;
  };

  namespace.composeRGBAString = function (hexRGBString, opacity) {
    if (opacity <= 0) {
      return 'none';
    }

    var rgba = ['rgba(' + parseInt('0x' + hexRGBString.substr(1, 2)), ',', parseInt('0x' + hexRGBString.substr(3, 2)), ',', parseInt('0x' + hexRGBString.substr(5, 2)), ',', opacity, ')'].join('');
    return rgba;
  };
})();

(function () {
  'use strict';

  AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core');
  /**
   * @class
   * Base class for all EditActions.<br>
   * EditActions encapsulate {@link Autodesk.Viewing.Extensions.Markups.Core.Markup  Markup}
   * operations (such as creation, edition and deletion) that hook into the undo/redo system.
   *
   * The minimum set of methods to implement on an EditAction extension are:
   * - execute()
   * - undo()
   * - redo()
   *
   * A good set of classes to check their implementation are:
   * - [CreateCircle]{@link Autodesk.Viewing.Extensions.Markups.Core.CreateCircle}.
   * - [DeleteCircle]{@link Autodesk.Viewing.Extensions.Markups.Core.DeleteCircle}.
   * - [SetCircle]{@link Autodesk.Viewing.Extensions.Markups.Core.SetCircle}.
   *
   * @tutorial feature_markup
   * @constructor
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   *
   * @param {Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore} editor
   * @param {String} type - An identifier for the EditAction.
   * @param {number} targetId - The id of the markup being affected.
   */

  function EditAction(editor, type, targetId) {
    this.type = type;
    this.editor = editor;
    this.targetId = targetId;
    this.addToHistory = true;
    this.selectOnExecution = true;
  }

  Autodesk.Viewing.Extensions.Markups.Core.EditAction = EditAction;
  /**
   * Performs the action.
   */

  Autodesk.Viewing.Extensions.Markups.Core.EditAction.prototype.execute = function () {
    this.editor.actionManager.execute(this);
  };
  /**
   * @abstract
   */


  Autodesk.Viewing.Extensions.Markups.Core.EditAction.prototype.redo = function () {};
  /**
   * @abstract
   */


  Autodesk.Viewing.Extensions.Markups.Core.EditAction.prototype.undo = function () {};
  /**
   * Provides a mechanism to merge consecutive actions of the same type.
   * @param {Autodesk.Viewing.Extensions.Markups.Core.EditAction} action - Action to check if it can be merged with 'this'.
   * @returns {boolean} Returns true if merge has been applied. Parameter will be discarded.
   */


  Autodesk.Viewing.Extensions.Markups.Core.EditAction.prototype.merge = function (action) {
    return false;
  };
  /**
   * Provides a mechanism to check whether the action yields no results.
   * @returns {boolean} Returns true if no changes happen with this action.
   */


  Autodesk.Viewing.Extensions.Markups.Core.EditAction.prototype.isIdentity = function () {
    return false;
  };
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param historySize
   * @constructor
   */

  function EditActionManager(historySize) {
    this.historySize = historySize;
    this.undoStack = new Array(historySize);
    this.redoStack = new Array(historySize);
    namespaceUtils.addTraitEventDispatcher(this);
  }
  /*
   * Event types
   */


  namespace.EVENT_HISTORY_CHANGED = "EVENT_HISTORY_CHANGED";
  var proto = EditActionManager.prototype;
  /**
   *
   * @param action
   */

  proto.execute = function (action) {
    var redoStack = this.redoStack;
    var undoStack = this.undoStack;
    redoStack.splice(0, redoStack.length);
    action.redo();
    var group = this.getEditActionGroup();

    if (group.isOpen()) {
      group.addAction(action);
    } else {
      group.open();
      group.addAction(action);
      group.close();
    }

    if (undoStack.length > this.historySize) {
      undoStack.splice(0, 1);
    }

    var targetId = action.selectOnExecution ? action.targetId : -1;
    this.fireEvent({
      type: namespace.EVENT_HISTORY_CHANGED,
      data: {
        action: 'execute',
        targetId: targetId
      }
    });
  };

  proto.beginActionGroup = function () {
    var undoStack = this.undoStack;
    var undoStackCount = undoStack.length;
    var group = null;

    if (undoStackCount === 0 || undoStack[undoStackCount - 1].isClosed()) {
      group = this.getEditActionGroup();
      group.open();
    } else {
      console.warn('Markups - Undo/Redo - Action edit group already open.');
    }
  };

  proto.closeActionGroup = function () {
    var undoStack = this.undoStack;
    var undoStackCount = undoStack.length;

    if (undoStackCount === 0) {
      console.warn('Markups - Undo/Redo - There is no action edit group to close.');
      return;
    }

    var group = undoStack[undoStackCount - 1];

    if (!group.close()) {
      console.warn('Markups - Undo/Redo - Action edit group already closed.');
    }

    if (group.isEmpty()) {
      undoStack.pop();
    }
  };

  proto.cancelActionGroup = function () {
    var undoStack = this.undoStack;
    var undoStackCount = undoStack.length;

    if (undoStackCount === 0) {
      console.warn('Markups - Undo/Redo - There is no action edit group to close.');
      return;
    }

    var group = undoStack[undoStackCount - 1];

    if (!group.close()) {
      console.warn('Markups - Undo/Redo - Action edit group already closed.');
      return;
    }

    group.undo();
    undoStack.pop();
    this.fireEvent({
      type: namespace.EVENT_HISTORY_CHANGED,
      data: {
        action: 'cancel',
        targetId: -1
      }
    });
  };

  proto.undo = function () {
    var undoStack = this.undoStack;
    var redoStack = this.redoStack;

    if (undoStack.length === 0) {
      return;
    }

    var group = undoStack.pop();
    var targetId = group.undo();
    redoStack.push(group);
    this.fireEvent({
      type: namespace.EVENT_HISTORY_CHANGED,
      data: {
        action: 'undo',
        targetId: targetId
      }
    });
  };

  proto.redo = function () {
    var undoStack = this.undoStack;
    var redoStack = this.redoStack;

    if (redoStack.length === 0) {
      return;
    }

    var group = redoStack.pop();
    var targetId = group.redo();
    undoStack.push(group);
    this.fireEvent({
      type: namespace.EVENT_HISTORY_CHANGED,
      data: {
        action: 'redo',
        targetId: targetId
      }
    });
  };

  proto.clear = function () {
    this.undoStack.splice(0, this.undoStack.length);
    this.redoStack.splice(0, this.redoStack.length);
    this.fireEvent({
      type: namespace.EVENT_HISTORY_CHANGED,
      data: {
        action: 'clear',
        targetId: -1
      }
    });
  };

  proto.isUndoStackEmpty = function () {
    return this.undoStack.length === 0;
  };

  proto.isRedoStackEmpty = function () {
    return this.redoStack.length === 0;
  };
  /**
   *
   * @return action
   * @private
   */


  proto.getEditActionGroup = function () {
    var undoStack = this.undoStack;
    var undoStackCount = this.undoStack.length;
    var group = null;

    if (undoStackCount === 0 || undoStack[undoStackCount - 1].isClosed()) {
      group = new namespace.EditActionGroup();
      undoStack.push(group);
    } else {
      group = undoStack[undoStackCount - 1];
    }

    return group;
  };

  namespace.EditActionManager = EditActionManager;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * Curring object which generate a string that can be used
   * as a Dom element's 'style' value.
   *
   * @constructor
   */

  function DomElementStyle() {
    this.reset();
  }
  /*
   * Constants
   */


  var BROWSER_PREFIXES = ['-ms-', '-webkit-', '-moz-', '-o-'];
  var proto = DomElementStyle.prototype;

  proto.reset = function () {
    this.attributes = {};
    this.dirty = false;
    this.styleString = '';
    return this;
  };
  /**
   *
   * @param {String} key
   * @param {*} value
   * @param {Object} [options]
   * @param {Boolean} [options.allBrowsers] - Whether to add browser prefix to key
   * @returns {Autodesk.Viewing.Extensions.Markups.Core.Utils.DomeElemStyle}
   */


  proto.setAttribute = function (key, value, options) {
    this.attributes[key] = value;

    if (options && options.allBrowsers) {
      var that = this;
      BROWSER_PREFIXES.forEach(function (prefix) {
        that.attributes[prefix + key] = value;
      });
    }

    this.dirty = true; // Could be optimized

    return this;
  };
  /**
   * Removes one or more attributes
   * @param {String|Array} key - Key or Keys to be removed
   * @returns {Autodesk.Viewing.Extensions.Markups.Core.Utils.DomElemStyle} this
   */


  proto.removeAttribute = function (key) {
    if (!Array.isArray(key)) {
      key = [key];
    }

    var self = this;
    key.forEach(function (k) {
      if (k in self.attributes) {
        delete self.attributes[k];
        self.dirty = true;
      }
    });
    return this;
  };
  /**
   * Gets the String representation of this style object
   * @returns {string}
   */


  proto.getStyleString = function () {
    if (this.dirty) {
      this.styleString = generateStyle(this.attributes);
      this.dirty = false;
    }

    return this.styleString;
  };
  /**
   * Clones the current Object
   *
   * @returns {Autodesk.Viewing.Extensions.Markups.Core.Utils.DomElemStyle}
   */


  proto.clone = function () {
    var clone = new namespace.DomElementStyle();
    var attributes = this.attributes;

    for (var key in attributes) {
      clone.setAttribute(key, attributes[key]);
    }

    return clone;
  };
  /**
   * Generates the style value string. Non mutable function.
   *
   * @param {Object} attributes
   * @private
   */


  function generateStyle(attributes) {
    var elements = [];

    for (var key in attributes) {
      var val = attributes[key];
      elements.push(key);
      elements.push(':');
      elements.push(val);
      elements.push('; ');
    }

    return elements.join('');
  }

  namespace.DomElementStyle = DomElementStyle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * A component to handle the selection of markups.
   *
   *
   *      Sample
   *
   *      var containingDiv = document.getElementById('containingDiv3d-app-wrapper');
   *      var selectionComponent = new EditFrame(containingDiv);
   *      selectionComponent.setSelection(100, 100, 300, 150, 0);
   *
   * @param {HTMLElement} containingDiv The container where the selection layer will live.
   * @param {Object} editor
   * @constructor
   */

  function EditFrame(containingDiv, editor) {
    this.containingDiv = containingDiv;
    this.editor = editor;
    this.selectionLayer = createSelectionLayer();
    this.selection = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotation: 0,
      element: null,
      active: false,
      dragging: false,
      resizing: false,
      //a dictionary of all the drag points
      //the key for each drag point will be its cardinal/ordinal direction
      handle: {}
    };
    createSelectorBox.bind(this)();

    if (namespaceUtils.isTouchDevice()) {
      this.onHammerDragBinded = this.onHammerDrag.bind(this);
      this.hammer = new Hammer.Manager(this.selectionLayer, {
        recognizers: [[Hammer.Pan, {
          event: 'drag',
          pointers: 1
        }]],
        inputClass: Hammer.TouchInput
      });
    }

    handleSelectionBoxDragging.bind(this)();
    handleSelectionBoxResizing.bind(this)();
    handleSelectionDoubleClick.bind(this)();
    handleSelectionBoxRotating.bind(this)(); //add the selection into the container given to us

    this.containingDiv.appendChild(this.selectionLayer);
    namespaceUtils.addTraitEventDispatcher(this);
  } // Constants //


  namespace.EVENT_EDITFRAME_EDITION_START = "EVENT_EDITFRAME_EDITION_START";
  namespace.EVENT_EDITFRAME_EDITION_END = "EVENT_EDITFRAME_EDITION_END";
  var proto = EditFrame.prototype;
  /**
   * Draws a selection box with the given attributes
   *
   * @param {number} x - The x coordinate to place the selection box
   * @param {number} y - The y coordinate to place the selection box
   * @param {number} width - The width of the selection box
   * @param {number} height - The height of the selection box
   * @param {number} rotation - The amount of degrees to rotate the selection box
   */

  proto.setSelection = function (x, y, width, height, rotation) {
    updateSelectorBoxDimensions.bind(this)(width, height);
    updateSelectorBoxPosition.bind(this)(x, y, rotation);
    updateSelectionBoxState.bind(this)(true); //activate the selection box

    this.selectionLayer.style.visibility = 'visible';
  };
  /**
   * Displays the selection box based on the position, dimension, and rotation of a given markup
   *
   * @param {Autodesk.Viewing.Extensions.Markups.Core.Markup} markup - the markup that should appear as selected
   */


  proto.setMarkup = function (markup) {
    if (!markup) {
      if (this.markup) {
        this.markup = null;

        if (this.hammer) {
          this.hammer.off("dragstart dragmove dragend", this.onHammerDragBinded);
        }

        updateSelectionBoxState.bind(this)(false);
      }

      return;
    }

    if (!this.markup && this.hammer) {
      this.hammer.on("dragstart dragmove dragend", this.onHammerDragBinded);
    }

    var size = markup.getClientSize(),
        position = markup.getClientPosition(),
        width = size.x,
        height = size.y,
        rotation = markup.getRotation();
    this.markup = markup;
    this.setSelection(position.x - width / 2, position.y - height / 2, width, height, rotation);
    this.enableResizeHandles();
    this.enableRotationHandle();
  };

  proto.startDrag = function () {
    this._onRepositionMouseDown(null, this.editor.getMousePosition());
  };

  proto.isActive = function () {
    return this.isDragging() || this.isResizing() || this.isRotating();
  };

  proto.isDragging = function () {
    return this.selection.dragging;
  };

  proto.isResizing = function () {
    return this.selection.resizing;
  };

  proto.isRotating = function () {
    return this.selection.rotating;
  };

  proto.onMouseMove = function (event) {//dummy fn
  };

  proto.onMouseUp = function (event) {//dummy fn
  };

  proto.onHammerDrag = function (event) {
    function updateEditorInput(input, parent, event) {
      //TODO: Change this when refactoring input in edit frame.
      var rect = parent.getBoundingClientRect();
      input.mousePosition.x = event.pageX - rect.left;
      input.mousePosition.y = event.pageY - rect.top;
    } //console.log('EditFrame drag ' + event.type);


    convertEventHammerToMouse(event);

    switch (event.type) {
      case 'dragstart':
        updateEditorInput(this.editor.input, this.editor.svg, event); // Check whether to translate, rotate or resize

        if (isRotatePoint(event.target)) {
          // Rotate
          this._onRotationMouseDown(event);
        } else if (isDragPoint(event.target)) {
          // Resize
          this._onResizeMouseDown(event);
        } else {
          this.startDrag();
        }

        event.preventDefault();
        break;

      case 'dragmove':
        updateEditorInput(this.editor.input, this.editor.svg, event);
        this.onMouseMove(event);
        event.preventDefault();
        break;

      case 'dragend':
        updateEditorInput(this.editor.input, this.editor.svg, event);
        this.onMouseUp(event);
        event.preventDefault();
        break;
    }
  };

  proto.enableResizeHandles = function () {
    var markup = this.markup;
    var handle;

    if (markup.isHeightConstrained() || markup.isWidthConstrained()) {
      //hide all the handles
      for (var direction in this.selection.handle) {
        handle = this.selection.handle[direction];
        if (handle) handle.style.display = 'none';
      } //show only the resize points that are allowed


      if (markup.isHeightConstrained()) {
        this.selection.handle['w'].style.display = 'block';
        this.selection.handle['e'].style.display = 'block';
      }

      if (markup.isWidthConstrained()) {
        this.selection.handle['n'].style.display = 'block';
        this.selection.handle['s'].style.display = 'block';
      }
    } else {
      //no constraints, show all resize handles
      for (var direction in this.selection.handle) {
        handle = this.selection.handle[direction];
        if (handle) handle.style.display = 'block';
      }
    }
  };

  proto.enableRotationHandle = function () {
    var markup = this.markup;
    var handle = this.selection.rotationHandle;
    var display = markup.isRotationConstrained() ? 'none' : 'block';
    handle.style.display = display;
  };

  function convertEventHammerToMouse(event) {
    // Convert Hammer touch-event X,Y into mouse-event X,Y.
    event.pageX = event.pointers[0].clientX;
    event.pageY = event.pointers[0].clientY;
  }
  /**
   * Creates an element spanning the full height and width of its parent.
   * It serves as our surface to draw the selection box.
   *
   * @return {HTMLElement}
   */


  function createSelectionLayer() {
    var selectionLayer = document.createElement('div');
    selectionLayer.style.position = 'absolute';
    selectionLayer.style.top = 0;
    selectionLayer.style.bottom = 0;
    selectionLayer.style.left = 0;
    selectionLayer.style.right = 0; //don't let the selection box be visible outside the selection layer

    selectionLayer.style.overflow = 'hidden';
    selectionLayer.style.visibility = 'hidden';
    togglePointerEvents(selectionLayer, false);
    return selectionLayer;
  }
  /**
   * Creates a single drag point with the corresponding styles
   *
   * @param {number} diameter - The size of the drag point
   * @param {string} position - The cardinal(n, s, w, e) or ordinal(nw, nw, sw, se) direction of the point
   * @return {HTMLElement}
   */


  function createDragPoint(diameter, position) {
    var pointBorderWidth = 2;
    var point = document.createElement('div');
    point.style.position = 'absolute';
    point.style.backgroundColor = 'rgba(151, 151, 151, 1)';
    point.style.border = pointBorderWidth + 'px solid rgb(95, 98, 100)';
    point.style.height = diameter + 'px';
    point.style.width = diameter + 'px';
    point.style.borderRadius = diameter / 2 + pointBorderWidth + 'px';
    point.style.boxSizing = 'border-box';
    setResizeCursor(point, position);
    point.className = 'selector-drag-point sdp-handle-' + position;
    point.setAttribute('data-sdp-handle', position);
    var placementOffset = -1 * ((diameter + pointBorderWidth) / 2); //set the position of the drag points based on the position

    switch (position) {
      case 'n':
        //wrap the point inside a wrapper so we can center it
        //using margin: 0 auto
        var wrapper = document.createElement('div');
        wrapper.style.position = 'absolute';
        wrapper.style.width = '100%';
        wrapper.style.height = diameter + 'px';
        wrapper.style.top = placementOffset + 'px';
        point.style.margin = '0 auto';
        point.style.position = '';
        wrapper.appendChild(point);
        point = wrapper;
        break;

      case 's':
        var wrapper = document.createElement('div');
        wrapper.style.position = 'absolute';
        wrapper.style.width = '100%';
        wrapper.style.height = diameter + 'px';
        wrapper.style.bottom = placementOffset + 'px';
        point.style.margin = '0 auto';
        point.style.position = '';
        wrapper.appendChild(point);
        point = wrapper;
        break;

      case 'w':
        point.style.left = placementOffset + 'px';
        point.style.top = '50%';
        point.style.transform = 'translate3d(0, -50%, 0)';
        break;

      case 'e':
        point.style.right = placementOffset + 'px';
        point.style.top = '50%';
        point.style.transform = 'translate3d(0, -50%, 0)';
        break;

      case 'nw':
        point.style.top = placementOffset + 'px';
        point.style.left = placementOffset + 'px';
        break;

      case 'ne':
        point.style.top = placementOffset + 'px';
        point.style.right = placementOffset + 'px';
        break;

      case 'sw':
        point.style.bottom = placementOffset + 'px';
        point.style.left = placementOffset + 'px';
        break;

      case 'se':
        point.style.bottom = placementOffset + 'px';
        point.style.right = placementOffset + 'px';
        break;
    }

    return point;
  }

  function createRotatePoint(diameter) {
    var pointBorderWidth = 2;
    var point = document.createElement('div');
    point.style.position = 'absolute';
    point.style.backgroundColor = 'aqua';
    point.style.border = pointBorderWidth + 'px solid rgb(95, 98, 100)';
    point.style.height = diameter + 'px';
    point.style.width = diameter + 'px';
    point.style.borderRadius = diameter / 2 + pointBorderWidth + 'px';
    point.style.boxSizing = 'border-box';
    point.classList.add('selector-rotate-point');
    point.style.left = '50%';
    point.style.transform = 'translate3d(-50%, 0px, 0px)';
    point.style.top = '-25px';
    return point;
  }

  function setResizeCursor(element, direction) {
    var cursor;

    switch (direction) {
      case 'n':
      case 's':
        cursor = 'ns-resize';
        break;

      case 'w':
      case 'e':
        cursor = 'ew-resize';
        break;

      case 'ne':
      case 'sw':
        cursor = 'nesw-resize';
        break;

      case 'nw':
      case 'se':
        cursor = 'nwse-resize';
        break;
    }

    element.style.cursor = cursor;
  }
  /**
   * Creates the 8 drag points of the selection box.
   *
   * @this EditFrame
   */


  function createDragPoints(selector) {
    var pointDiameter = 12;
    ['n', 's', 'w', 'e', 'nw', 'ne', 'sw', 'se'].forEach(function (direction) {
      //store the drag point and put it in the DOM
      this.selection.handle[direction] = createDragPoint(pointDiameter, direction);
      selector.appendChild(this.selection.handle[direction]);
    }.bind(this));
  }
  /**
   * Determines if an element is a drag point
   *
   * @return {boolean}
   */


  function isDragPoint(element) {
    return matchesSelectorAux(element, '.selector-drag-point');
  }
  /**
   * Determines if an element is a rotate point
   *
   * @return {boolean}
   */


  function isRotatePoint(element) {
    return matchesSelectorAux(element, '.selector-rotate-point');
  }
  /**
   * Creates the element that will be used as the selection box. It also
   * takes care of adding the drag handles
   *
   * @return {HTMLElement} - the selection box
   * @this EditFrame
   */


  function createSelectorBox() {
    var borderWidth = 1;
    var borderColor = 'rgb(0, 0, 255)';
    var selectorBox = document.createElement('div');
    selectorBox.style.position = 'absolute';
    selectorBox.style.border = borderWidth + 'px solid ' + borderColor;
    selectorBox.style.zIndex = 1;
    selectorBox.style.cursor = 'move';
    selectorBox.style.boxSizing = 'border-box';
    togglePointerEvents(selectorBox, true);
    selectorBox.classList.add('selector-box');
    createDragPoints.bind(this)(selectorBox);
    this.selection.rotationHandle = createRotatePoint(12);
    selectorBox.appendChild(this.selection.rotationHandle); //store the selector box

    this.selection.element = selectorBox; //add the selection box to the selection layer

    this.selectionLayer.appendChild(this.selection.element); //we are just creating the box, start it out hidden

    updateSelectionBoxState.bind(this)(false);
    return selectorBox;
  }
  /**
   * Utility to create the CSS translate3d value from a given 2d point
   *
   * @param {number} x - coordinate
   * @param {number} y - coordinate
   * @return {string}
   */


  function toTranslate3d(x, y) {
    return 'translate3d(' + x + 'px,' + y + 'px,0)';
  }
  /**
   * Updates the display state of the selection box
   *
   * @param {boolean} active - The new state of the the selection box
   * @this EditFrame
   */


  function updateSelectionBoxState(active) {
    this.selection.active = active;
    this.selection.element.style.display = active ? 'block' : 'none';
  }
  /**
   * Updates the position and rotation of the selection box.
   *
   * @param {number} x - The x coordinate to place the selection box
   * @param {number} y - The y coordinate to place the selection box
   * @param {number} rotation - The amount of degrees to rotate the selection box
   * @this EditFrame
   */


  function updateSelectorBoxPosition(x, y, rotation) {
    this.selection.x = x;
    this.selection.y = y;
    this.selection.rotation = rotation;
    var size = this.markup.getClientSize(); //TODO: consider DomElementStyle

    this.selection.element.style.msTransform = toTranslate3d(x, y) + ' rotate(' + rotation + 'rad)';
    this.selection.element.style.msTransformOrigin = size.x / 2 + 'px ' + size.y / 2 + 'px';
    this.selection.element.style.webkitTransform = toTranslate3d(x, y) + ' rotate(' + rotation + 'rad)';
    this.selection.element.style.webkitTransformOrigin = size.x / 2 + 'px ' + size.y / 2 + 'px';
    this.selection.element.style.transform = toTranslate3d(x, y) + ' rotate(' + rotation + 'rad)';
    this.selection.element.style.transformOrigin = size.x / 2 + 'px ' + size.y / 2 + 'px';
  }
  /**
   * Updates the dimensions of the selection box (width and height).
   *
   * @param {number} width - The new width of the selection box
   * @param {number} height - The new height of the selection box
   * @this EditFrame
   */


  function updateSelectorBoxDimensions(width, height) {
    this.selection.width = width;
    this.selection.height = height;
    this.selection.element.style.width = width + 'px';
    this.selection.element.style.height = height + 'px';
  }
  /**
   * Attaches all the necessary listeners to handle a drag action.
   *
   * @this EditFrame
   */


  function handleSelectionBoxDragging() {
    this.selection.element.addEventListener('mousedown', this._onRepositionMouseDown.bind(this));
  }

  proto._onRepositionMouseDown = function (event, cursor) {
    //a synthetic start means that the event was triggered manually and not as a
    //result of a mousedown on the edit frame
    var syntheticStart = !(event instanceof MouseEvent); //during a real mousedown, ignore events originating from a resizing handle

    if (!syntheticStart && (isDragPoint(event.target) || isRotatePoint(event.target))) return;
    this.editor.beginActionGroup();
    this.selection.dragging = true; //get the cursor position

    cursor = syntheticStart ? cursor : this.editor.getMousePosition(); //store the initial cursor and axis constrains

    this.initialCursor = cursor;
    this.initialPosition = this.markup.getClientPosition();
    this.areAxisConstrained = false;
    this.axisConstrains = new THREE.Vector2(1, 1); //update the function that will handle the mousemove and mouseup events

    this.onMouseMove = this._onRepositionMouseMove.bind(this);
    this.onMouseUp = this._onRepositionMouseUp.bind(this); //if alt down I drop a clone.

    if (event && event.altKey) {
      var editor = this.editor;
      var cloneMarkup = new namespace.CloneMarkup(editor, editor.getId(), this.markup, this.markup.position);
      cloneMarkup.execute();
    }

    this.fireEvent({
      type: namespace.EVENT_EDITFRAME_EDITION_START
    }); // Moving around
  };

  proto._onRepositionMouseMove = function (event) {
    //ignore mousemove events if the dragging state hasn't been activated
    if (!this.selection.dragging) return; //get the position of the cursor relative to selection layer

    var cursor = this.editor.getMousePosition(); //constrain axis if shift key is down.

    var constrainAxis = this.editor.input.constrainAxis;

    if (this.areAxisConstrained !== constrainAxis) {
      this.areAxisConstrained = constrainAxis;
      this.axisConstrains = constrainAxis ? new THREE.Vector2(0, 0) : new THREE.Vector2(1, 1);
      this.initialPosition.x += cursor.x - this.initialCursor.x;
      this.initialPosition.y += cursor.y - this.initialCursor.y;
      this.initialCursor.x = cursor.x;
      this.initialCursor.y = cursor.y;
    } //determine how many pixel we have to shift the
    //selection box to keep the cursor on the drag point


    var movement = {
      x: cursor.x - this.initialCursor.x,
      y: cursor.y - this.initialCursor.y
    };
    var deadZone = 15;

    if (this.axisConstrains.x === 0 && this.axisConstrains.y === 0) {
      if (Math.abs(movement.x) > deadZone) {
        this.axisConstrains.x = 1;
        movement.x += movement.x < 0 ? deadZone : -deadZone;
      } else if (Math.abs(movement.y) > deadZone) {
        this.axisConstrains.y = 1;
        movement.y += movement.y < 0 ? deadZone : -deadZone;
      }
    }

    var x = this.initialPosition.x + movement.x * this.axisConstrains.x;
    var y = this.initialPosition.y + movement.y * this.axisConstrains.y;
    updateSelectorBoxPosition.bind(this)(x, y, this.selection.rotation); //tell the markup to start transforming
    //the markup expects an (x, y) coordinate that
    //uses an origin at the center, adjust our x, y because
    //our origin starts at the top left

    var position = this.editor.positionFromClientToMarkups(x, y);
    var setPosition = new namespace.SetPosition(this.editor, this.markup, position);
    setPosition.execute();
  };

  proto._onRepositionMouseUp = function () {
    this.last = null; //this should never be called after the mouse up because we are no longer repositioning

    this.onMouseMove = function () {
      /*do nothing*/
    };

    this.onMouseUp = function () {
      /*do nothing*/
    };

    if (!this.selection.dragging) {
      return;
    }

    this.editor.closeActionGroup();
    this.selection.dragging = false;
    this.fireEvent({
      type: namespace.EVENT_EDITFRAME_EDITION_END
    }); // Moving around
  };

  proto._onResizeMouseDown = function (event) {
    var target = event.target; //is the target where the mousedown occurred a drag point

    if (!isDragPoint(target)) {
      return;
    }

    this.selection.resizing = true; //keep a reference to the point where the drag started

    this.selection.handle.resizing = target; //figure out which direction this point should resize

    var direction = this.selection.handle.resizing.getAttribute('data-sdp-handle'); //set the cursor position for the entire layer

    this.containingDiv.style.cursor = direction + '-resize';
    var cursor = this.editor.getMousePosition();
    var position = this.markup.getClientPosition();
    var size = this.markup.getClientSize(); //store the center

    this.initial = {
      x: position.x,
      y: position.y,
      width: size.x,
      height: size.y,
      mouseX: cursor.x,
      mouseY: cursor.y
    };
    this.onMouseMove = this._onResizeMouseMove.bind(this);
    this.onMouseUp = this._onResizeMouseUp.bind(this); //notify the markup that dragging has started

    this.editor.beginActionGroup();
    this.fireEvent({
      type: namespace.EVENT_EDITFRAME_EDITION_START
    }); // Resizing
  };

  proto._onResizeMouseMove = function (event) {
    if (!this.selection.resizing) return;
    var cursor = this.editor.getMousePosition();
    var initial = this.initial;
    var movement = {
      x: cursor.x - initial.mouseX,
      y: cursor.y - initial.mouseY
    };
    var vector = new THREE.Vector3(movement.x, movement.y, 0);
    var undoRotation = new THREE.Matrix4().makeRotationZ(-this.selection.rotation);
    movement = vector.applyMatrix4(undoRotation);
    var x = initial.x,
        y = initial.y,
        width = initial.width,
        height = initial.height;
    var localSpaceDelta = new THREE.Vector3(); //get the direction of the arrow being dragged

    var direction = this.selection.handle.resizing.getAttribute('data-sdp-handle'); // TODO: Make a mechanism to configure and use this feature from Markups Core.
    // If shift is pressed, figure aspect ratio is maintained.

    if (this.editor.input.keepAspectRatio && ['nw', 'ne', 'sw', 'se'].indexOf(direction) !== -1) {
      var delta = new THREE.Vector3(movement.x, movement.y, 0);

      switch (direction) {
        case 'nw':
          movement.set(-initial.width, -initial.height, 0);
          break;

        case 'ne':
          movement.set(initial.width, -initial.height, 0);
          break;

        case 'sw':
          movement.set(initial.width, -initial.height, 0);
          break;

        case 'se':
          movement.set(initial.width, initial.height, 0);
          break;
      }

      movement.normalize();
      movement = delta.projectOnVector(movement);
    }

    var translations = {
      n: function n() {
        height -= movement.y;
        localSpaceDelta.y = movement.y;
      },
      s: function s() {
        height += movement.y;
        localSpaceDelta.y = movement.y;
      },
      w: function w() {
        width -= movement.x;
        localSpaceDelta.x = movement.x;
      },
      e: function e() {
        width += movement.x;
        localSpaceDelta.x = movement.x;
      },
      nw: function nw() {
        this.n();
        this.w();
      },
      ne: function ne() {
        this.n();
        this.e();
      },
      sw: function sw() {
        this.s();
        this.w();
      },
      se: function se() {
        this.s();
        this.e();
      }
    };
    translations[direction]();
    var redoRotation = new THREE.Matrix4().makeRotationZ(this.selection.rotation);
    var actualDelta = localSpaceDelta.applyMatrix4(redoRotation);
    var newPos = this.editor.positionFromClientToMarkups(x + actualDelta.x * 0.5, y + actualDelta.y * 0.5);
    var newSize = this.editor.sizeFromClientToMarkups(width, height);
    var setSize = new namespace.SetSize(this.editor, this.markup, newPos, newSize.x, newSize.y);
    setSize.execute();
  };

  proto._onResizeMouseUp = function (event) {
    this.selection.resizing = false;
    this.selection.handle.resizing = null;
    this.containingDiv.style.cursor = '';
    this.editor.closeActionGroup();
    this.fireEvent({
      type: namespace.EVENT_EDITFRAME_EDITION_END
    }); // Resizing
    //this should never be called after the mouse up because we are no longer resizing

    this.onMouseMove = function () {
      /*do nothing*/
    };

    this.onMouseUp = function () {
      /*do nothing*/
    };
  };
  /**
   * Attaches all the necessary listeners to handle a resizing action.
   *
   * @this EditFrame
   */


  function handleSelectionBoxResizing() {
    this.selectionLayer.addEventListener('mousedown', this._onResizeMouseDown.bind(this));
  }

  function handleSelectionBoxRotating() {
    this.selection.element.addEventListener('mousedown', this._onRotationMouseDown.bind(this));
  }

  var initialRotation;
  var initialHandlePosition;

  proto._onRotationMouseDown = function (event) {
    //ignore anything not coming from the rotation point
    if (!isRotatePoint(event.target)) return;
    this.editor.beginActionGroup();
    this.selection.rotating = true; //store the initial cursor

    initialHandlePosition = this.editor.getMousePosition();
    initialRotation = this.selection.rotation || 0; //update the function that will handle the mousemove and mouseup events

    this.onMouseMove = this._onRotationMouseMove.bind(this);
    this.onMouseUp = this._onRotationMouseUp.bind(this);
    this.fireEvent({
      type: namespace.EVENT_EDITFRAME_EDITION_START
    }); // Rotating
  };

  proto._onRotationMouseMove = function (event) {
    //ignore mousemove events if the dragging state hasn't been activated
    if (!this.selection.rotating) return;
    var cursor = this.editor.getMousePosition();
    var position = this.markup.getClientPosition();
    var r = getAngleBetweenPoints(position, cursor);
    var r2 = getAngleBetweenPoints(position, initialHandlePosition);
    var rotation = r - r2 + initialRotation; // TODO: Make a mechanism to configure and use this feature from Markups Core.

    if (this.editor.input.snapRotations) {
      var snap = namespaceUtils.degreesToRadians(22.5);
      rotation = Math.ceil(rotation / snap) * snap;
    } //pass rotation as degrees


    updateSelectorBoxPosition.bind(this)(this.selection.x, this.selection.y, rotation); //convert to radians

    var setRotation = new namespace.SetRotation(this.editor, this.markup, rotation);
    setRotation.execute();
  };

  proto._onRotationMouseUp = function (event) {
    this.selection.rotating = false;
    initialRotation = null;
    initialHandlePosition = null;
    this.editor.closeActionGroup();
    this.fireEvent({
      type: namespace.EVENT_EDITFRAME_EDITION_END
    }); // Rotating
  };
  /**
   * Attaches double click listener and pass events to markup, markups such as text use it to enter text edit
   * mode.
   *
   * @this EditFrame
   */


  function handleSelectionDoubleClick() {
    var doubleClick = function (event) {
      this.selection.dragging = false;
      var editMode = this.editor.editMode;
      editMode && editMode.onDoubleClick(this.markup);
    }.bind(this);

    var selectorBoxWrapper = this.selectionLayer;
    selectorBoxWrapper.addEventListener('dblclick', doubleClick);
  }

  function togglePointerEvents(element, state) {
    element.style.pointerEvents = state ? 'auto' : 'none';
  }

  function getAngleBetweenPoints(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  }

  function matchesSelectorAux(domElem, selector) {
    if (domElem.matches) return domElem.matches(selector); //Un-prefixed

    if (domElem.msMatchesSelector) return domElem.msMatchesSelector(selector); //IE

    if (domElem.mozMatchesSelector) return domElem.mozMatchesSelector(selector); //Firefox (Gecko)

    if (domElem.webkitMatchesSelector) return domElem.webkitMatchesSelector(selector); // Opera, Safari, Chrome

    return false;
  }

  namespace.EditFrame = EditFrame;
})();

Autodesk.Viewing.Extensions.Markups.Core.Utils.Localization = {
  MARKUP_TEXT_DEFAULT_TEXT: 'Write something...'
};

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * @class
   * Base class for all Markups.<br>
   * A Markup is a class that is capable of rendering itself as an Svg node.<br>
   * It can also render itself into a canvas-2d context.
   * Component within {@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore MarkupsCore} extension.
   *
   * Any class extending Markup should contain at least the following methods:
   * - getEditMode()
   * - set()
   * - updateStyle()
   * - setParent()
   * - setRotation()
   * - setSize()
   * - setPosition()
   * - renderToCanvas()
   * - setMetadata()
   *
   * A good reference is the rectangle markup implementation available in
   * [MarkupRectangle.js]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupRectangle}.
   *
   * @tutorial feature_markup
   * @constructor
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   *
   * @param {number} id - Identifier, populated with return value of {@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#getId getId()}.
   * @param {Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore} editor - Markups extension
   * @param {Array} styleAttributes - Attributes for customization. Related to {@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#setStyle setStyle()}.
   * @constructor
   */

  function Markup(id, editor, styleAttributes) {
    this.id = id;
    this.type = 0;
    this.editor = editor;
    this.viewer = editor.viewer;
    this.position = {
      x: 0,
      y: 0
    };
    this.size = {
      x: 0,
      y: 0
    };
    this.rotation = 0;
    this.style = namespaceUtils.createStyle(styleAttributes, this.viewer);
    this.highlightColor = '#FAFF3C';
    this.constraintWidth = false;
    this.constraintHeight = false;
    this.constraintRotation = false;
    this.highlighted = false;
    this.selected = false;
    namespaceUtils.addTraitEventDispatcher(this);
  }
  /*
   * Constants
   */


  namespace.MARKUP_TYPE_ARROW = 1;
  namespace.MARKUP_TYPE_TEXT = 2;
  namespace.MARKUP_TYPE_RECTANGLE = 3;
  namespace.MARKUP_TYPE_CIRCLE = 4;
  namespace.MARKUP_TYPE_CLOUD = 5;
  namespace.MARKUP_TYPE_FREEHAND = 6;
  namespace.MARKUP_EXPORT_TYPE_LABEL = 'Label';
  namespace.MARKUP_EXPORT_TYPE_ARROW = 'Arrow';
  namespace.MARKUP_EXPORT_TYPE_RECTANGLE = 'Rectangle';
  namespace.MARKUP_EXPORT_TYPE_CIRCLE = 'Circle';
  namespace.MARKUP_EXPORT_TYPE_CLOUD = 'Cloud';
  namespace.MARKUP_EXPORT_TYPE_FREEHAND = 'Freehand';
  /*
   * Event types
   */

  namespace.EVENT_EDITMODE_CHANGED = "EVENT_EDITMODE_CHANGED";
  namespace.EVENT_MARKUP_SELECTED = "EVENT_MARKUP_SELECTED";
  namespace.EVENT_MARKUP_DRAGGING = "EVENT_MARKUP_DRAGGING";
  namespace.EVENT_MARKUP_ENTER_EDITION = "EVENT_MARKUP_ENTER_EDITION";
  namespace.EVENT_MARKUP_CANCEL_EDITION = "EVENT_MARKUP_CANCEL_EDITION";
  namespace.EVENT_MARKUP_DELETE_EDITION = "EVENT_MARKUP_DELETE_EDITION";
  var proto = Markup.prototype;
  namespace.Markup = Markup;

  proto.destroy = function () {};
  /**
   * Clones (deep-copy) the markup. Used internally by the copy/cut/paste mechanism in
   * {@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore MarkupsCore}.
   *
   * @returns {Autodesk.Viewing.Extensions.Markups.Core.Markup} clone of the current markup
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.clone = function () {
    var clone = Object.create(this.__proto__);
    var overrides = this.getCloneOverrides();

    for (var name in this) {
      if (!this.hasOwnProperty(name)) {
        continue;
      }

      var member = this[name]; // Is there an override for this member?

      if (overrides.hasOwnProperty(name)) {
        clone[name] = overrides[name];
        continue;
      } // Member has a clone function?


      if (member['clone'] instanceof Function) {
        clone[name] = member.clone();
        continue;
      } // Is it a function?


      if (member instanceof Function) {
        clone[name] = member.bind(clone);
        continue;
      } // Is it an html node?


      if (member.nodeType) {
        clone[name] = member.cloneNode(true);
        continue;
      } // Just a plain object?


      if (member instanceof Object) {
        clone[name] = JSON.parse(JSON.stringify(member));
        continue;
      } // Ok, it seems it's just a primitive type.


      clone[name] = member;
    }

    clone.bindDomEvents();
    return clone;
  };
  /**
   * Used internally by
   * {@link Autodesk.Viewing.Extensions.Markups.Core.Markup#clone clone()},
   * provides a mechanism to avoid cloning specific attributes.<br>
   * Developers only need to override this method when creating new Markup types.
   * When overriding, first call the super() implementation and then include additional attribute/value pairs to it.
   * @returns {Object} containing attributes that need not to be cloned.
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.getCloneOverrides = function () {
    return {
      viewer: this.viewer,
      editor: this.editor,
      hammer: null,
      listeners: {}
    };
  };
  /**
   * Used internally to select a markup.<br>
   * Fires event Autodesk.Viewing.Extensions.Markups.Core.EVENT_MARKUP_SELECTED.
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.select = function () {
    if (this.selected) {
      return;
    }

    this.selected = true;
    this.highlighted = false;
    this.updateStyle();
    this.fireEvent({
      type: namespace.EVENT_MARKUP_SELECTED,
      markup: this
    });
  };
  /**
   * Used internally to signal that the current markup has been unselected.<br>
   * No event is fired.
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.unselect = function () {
    this.selected = false;
  };

  proto.highlight = function (highlight) {
    if (this.interactionsDisabled) {
      return;
    }

    this.highlighted = highlight;
    this.updateStyle();
  };
  /**
   * Returns a copy of the markup's style.
   * @returns {Object}
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.getStyle = function () {
    return namespaceUtils.cloneStyle(this.style);
  };
  /**
   * Used internally to set the style object. Triggers a re-render of the markup (Svg)
   * @param {Object} style - Dictionary with key/value pairs
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.setStyle = function (style) {
    namespaceUtils.copyStyle(style, this.style);
    this.updateStyle();
  };
  /**
   * Used internally and implemented by specific Markup types to render themselves as Svg.
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.updateStyle = function () {};
  /**
   * Used internally to notify the markup that it is no longer being dragged (moved).<br>
   * Fires event Autodesk.Viewing.Extensions.Markups.Core.EVENT_MARKUP_DRAGGING.
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.finishDragging = function () {
    this.fireEvent({
      type: namespace.EVENT_MARKUP_DRAGGING,
      markup: this,
      dragging: false
    });
  };
  /**
   * Used internally to notify the markup that it is now being edited.<br>
   * Fires event Autodesk.Viewing.Extensions.Markups.Core.EVENT_MARKUP_ENTER_EDITION.
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.edit = function () {
    this.fireEvent({
      type: namespace.EVENT_MARKUP_ENTER_EDITION,
      markup: this
    });
  };
  /**
   * Used internally to signal that it is no longer being edited.<br>
   * Fires event Autodesk.Viewing.Extensions.Markups.Core.EVENT_MARKUP_CANCEL_EDITION.
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.cancel = function () {
    this.fireEvent({
      type: namespace.EVENT_MARKUP_CANCEL_EDITION,
      markup: this
    });
  };
  /**
   * Used internally to signal that the markup is being deleted.<br>
   * Fires event Autodesk.Viewing.Extensions.Markups.Core.EVENT_MARKUP_DELETE_EDITION.
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.deleteMarkup = function () {
    this.fireEvent({
      type: namespace.EVENT_MARKUP_DELETE_EDITION,
      markup: this
    });
  };

  proto.setParent = function (parent) {};

  proto.setPosition = function (x, y) {};
  /**
   * Used internally to get the {@link Autodesk.Viewing.Extensions.Markups.Core.EditMode EditMode}
   * associated with the current Markup.<br>
   * Implemented by classes extending this one.
   * @returns {Autodesk.Viewing.Extensions.Markups.Core.EditMode}
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.getEditMode = function () {
    console.warn('EditMode of markup type' + namespaceUtils.getTypeString(this.type) + ' not defined.');
    return null;
  };
  /**
   * Used internally to get the markup's position in browser pixel space.<br>
   * Notice that (0,0) is top left.<br>
   * See also
   * [getClientSize()]{@link Autodesk.Viewing.Extensions.Markups.Core.Markup#getClientSize}.
   * @returns {*}
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.getClientPosition = function () {
    var position = this.position;
    return this.editor.positionFromMarkupsToClient(position.x, position.y);
  };
  /**
   * Used internally to get the markup's bounding rect in browser pixel space.<br>
   * See also
   * [getClientPosition()]{@link Autodesk.Viewing.Extensions.Markups.Core.Markup#getClientPosition}.
   * @returns {*}
   */


  Autodesk.Viewing.Extensions.Markups.Core.Markup.prototype.getClientSize = function () {
    var size = this.size;
    return this.editor.sizeFromMarkupsToClient(size.x, size.y);
  };

  proto.setRotation = function (angle) {};

  proto.getRotation = function () {
    return this.rotation;
  };

  proto.setSize = function (position, size) {};

  proto.isWidthConstrained = function () {
    return this.constraintWidth;
  };

  proto.isHeightConstrained = function () {
    return this.constraintHeight;
  };

  proto.isRotationConstrained = function () {
    return this.constraintRotation;
  };
  /**
   * Used to disable highlight on annotations while a new annotation is being created.
   * @param {Boolean} disable - Whether (mouse) interactions are enable.
   */


  proto.disableInteractions = function (disable) {
    this.interactionsDisabled = disable;
  };
  /**
   *
   * @param width
   */


  proto.setStrokeWidth = function (width) {};

  proto.constrainsToBounds = function (bounds) {};

  proto.onMouseDown = function (event) {
    this.select();
    this.editor.editFrame.startDrag();
  };
  /**
   * Implemented by extending classes.<br>
   * Gets called automatically when
   * [generateData()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#generateData}
   * @returns {null|Element} - Either null (default) or the metadata Svg node
   */


  proto.setMetadata = function () {
    return null; // No metadata is injected by default.
  };

  proto.bindTouchEvents = function (domElement) {
    this.hammer = new Hammer.Manager(domElement, {
      recognizers: [[Hammer.Tap, {
        event: 'singletap',
        pointers: 1,
        threshold: 2
      }]],
      inputClass: Hammer.TouchInput
    });

    this.onSingleTapBinded = function (event) {
      this.onMouseDown(event);
    }.bind(this);

    this.hammer.on("singletap", this.onSingleTapBinded);
  };
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param id
   * @param editor
   * @constructor
   */

  function MarkupArrow(id, editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity'];
    namespace.Markup.call(this, id, editor, styleAttributes);
    this.type = namespace.MARKUP_TYPE_ARROW;
    this.constraintHeight = true; // Create head and tail.

    this.head = new THREE.Vector3();
    this.tail = new THREE.Vector3();
    this.size.y = this.style['stroke-width'] * 2;
    this.createSVG();
    this.bindDomEvents();
  }

  MarkupArrow.prototype = Object.create(namespace.Markup.prototype);
  MarkupArrow.prototype.constructor = MarkupArrow;
  var proto = MarkupArrow.prototype;

  proto.getEditMode = function () {
    return new namespace.EditModeArrow(this.editor);
  };
  /**
   * Creates the DOM elements user will see and interact with.
   */


  proto.createSVG = function () {
    this.shape = namespaceUtils.createSvgElement('polygon');
  };

  proto.bindDomEvents = function () {
    if (namespaceUtils.isTouchDevice()) {
      this.bindTouchEvents(this.shape);
    }

    this.shape.addEventListener("mousedown", this.onMouseDown.bind(this), true);
    this.shape.addEventListener("mouseout", function () {
      this.highlight(false);
    }.bind(this));
    this.shape.addEventListener("mouseover", function () {
      this.highlight(true);
    }.bind(this));
  };
  /**
   * Sets top-left and bottom-right values in client space coordinates (2d).
   * Notice that for the arrow, the top left is the "tail" of the arrow and
   * the bottom right is the "head" of it.
   *
   * @param {Number} xO - tail
   * @param {Number} yO - tail
   * @param {Number} xF - head
   * @param {Number} yF - head
   */


  proto.set = function (xO, yO, xF, yF) {
    var vO = new THREE.Vector2(xO, yO);
    var vF = new THREE.Vector2(xF, yF);
    var vDir = vF.clone().sub(vO).normalize();
    this.size.x = vO.distanceTo(vF); // TODO: Clamp min length

    this.rotation = Math.acos(vDir.dot(new THREE.Vector2(1, 0)));
    this.rotation = yF > yO ? Math.PI * 2 - this.rotation : this.rotation;
    this.head.set(xO, yO, 0);
    this.tail.set(xF, yF, 0);
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Changes the rotation of the markup to the given angle.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetRotation edit action
   *
   * @param {Number} angle
   */


  proto.setRotation = function (angle) {
    this.rotation = angle;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Changes the position and size of the markup.
   * This gets called by the namespace.SetSize edit action
   * @param {{x: Number, y: Number}} position - arrow's center
   * @param {Number} width - Arrow's length
   * @param {Number} height - We ignore this one because we use the arrow's stroke width instead
   */


  proto.setSize = function (position, width, height) {
    var xF = Math.cos(this.rotation);
    var yF = Math.sin(this.rotation);
    var vFDir = new THREE.Vector2(xF, yF); // already normalized

    vFDir.multiplyScalar(width * 0.5);
    var vCenter = new THREE.Vector2(position.x, position.y);
    var vO = vCenter.clone().add(vFDir);
    var vF = vCenter.clone().sub(vFDir);
    this.head.set(vF.x, vF.y, 0);
    this.tail.set(vO.x, vO.y, 0);
    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = width;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Given the 3d positions for top-left and bottom-right, it recalculates
   * all the 2d values in client space.
   */


  proto.updateTransformMatrix = function () {
    var head = this.head;
    var tail = this.tail;
    var mid_x = this.size.x * 0.5;
    var mid_y = this.style['stroke-width'];
    var pos_x = (head.x + tail.x) * 0.5;
    var pos_y = (head.y + tail.y) * 0.5; // Used by updateStyle()

    this.transformSvg = ['translate(', pos_x, ',', pos_y, ') ', 'rotate(', namespaceUtils.radiansToDegrees(-this.rotation), ') ', 'translate(', -mid_x, ',', -mid_y, ') '].join(''); // Update values used by EditFrame and Undo/Redo system //

    this.position.x = tail.x + (head.x - tail.x) * 0.5;
    this.position.y = tail.y + (head.y - tail.y) * 0.5;
  };

  proto.updateStyle = function () {
    // Update size and transform,
    this.size.y = this.style['stroke-width'] * 2;
    this.updateTransformMatrix(); // Update style.

    var strokeColor = this.highlighted ? this.highlightColor : this.style['stroke-color'];
    var polygonPoints = this.getPolygonPoints(); // Transform points into SVG compliant format
    // Meaning: 'x1,y1 x2,y2 ... x8,y8 x9,y9'

    var mappedPoints = polygonPoints.map(function (point) {
      return point[0] + ',' + point[1];
    });
    var polygonStr = mappedPoints.join(' '); // Leave a space between points

    this.shape.setAttribute('points', polygonStr);
    this.shape.setAttribute("transform", this.transformSvg);
    this.shape.setAttribute('fill', strokeColor);
    this.shape.setAttribute('opacity', this.style['stroke-opacity']);
  };
  /**
   * Generates a list of points that compose the arrow's visuals
   * @return {Array} Where each element is an array with 2 values: [x, y]
   * @private
   */


  proto.getPolygonPoints = function () {
    // To build the arrow we need 7 points in total
    // The 'default' arrow built here has the following characteristics:
    //
    // 1. It is built horizontally facing right
    // 2. It's bounding rectangle has length: this.size.x
    // 3. It's bounding rectangle has height: 2 * this.strokeWidth
    // 4. The arrow tail's thickness is: this.strokeWidth
    // 5. The arrow head's length is: 2/3 of (point 3)
    // 6. The arrow head's thickness is: (point 3)
    // 7. The arrow generated is centered in its local (0,0), meaning that
    //    two points are placed with negative x values, and all other have
    //    positive x values:
    //
    //                             (3)
    //                              |  \
    //             (1)-------------(2)   \
    //              |         (0)        (4)
    //             (7)-------------(6)   /
    //                              |  /
    //                             (5)
    //
    var strokeWidth = this.style['stroke-width'];
    var half_len = this.size.x * 0.5;
    var thickness = strokeWidth;
    var half_thickness = strokeWidth * 0.5;
    var head_len = half_len - 1.2 * thickness; // Left side points

    var p1 = [-half_len, -half_thickness];
    var p7 = [-half_len, half_thickness]; // The tip

    var p4 = [half_len, 0]; // Right side points (from top to bottom)

    var p3 = [head_len, -thickness];
    var p2 = [head_len, -half_thickness];
    var p6 = [head_len, half_thickness];
    var p5 = [head_len, thickness];
    var points = [p1, p2, p3, p4, p5, p6, p7]; // TODO: The created arrow should have its (0,0) on the top left
    // TODO: This was an oversight, and for now we fix it by offsetting before returning.

    points.forEach(function (point) {
      point[0] += half_len;
      point[1] += thickness;
    });
    return points;
  };
  /**
   * Specifies the parent layer which will contain the markup.
   * @param {HTMLElement} parent
   */


  proto.setParent = function (parent) {
    var div = this.shape;
    div.parentNode && div.parentNode.removeChild(div);
    parent && parent.appendChild(div);
  };
  /**
   * Used by the EditFrame to move the markup in Client Space coordinates
   * @param {Number} x - New X location for the markup. Notice that markups are centered on this value.
   * @param {Number} y - New Y location for the markup. Notice that markups are centered on this value.
   */


  proto.setPosition = function (x, y) {
    var head = this.head;
    var tail = this.tail;
    var dx = head.x - tail.x;
    var dy = head.y - tail.y;
    var xo = x - dx * 0.5;
    var yo = y - dy * 0.5;
    head.x = xo;
    head.y = yo;
    tail.x = xo + dx;
    tail.y = yo + dy;
    this.updateTransformMatrix();
    this.updateStyle();
  };

  proto.created = function () {};

  proto.destroy = function () {
    this.unselect();
    this.setParent(null);
  };
  /**
   *
   * @param bounds
   */


  proto.constrainsToBounds = function (bounds) {};

  proto.setMetadata = function () {
    var metadata = namespaceUtils.cloneStyle(this.style);
    metadata.type = "arrow";
    metadata.head = [this.head.x, this.head.y].join(" ");
    metadata.tail = [this.tail.x, this.tail.y].join(" ");
    metadata.rotation = String(this.rotation);
    return namespaceUtils.addMarkupMetadata(this.shape, metadata);
  };

  proto.renderToCanvas = function (ctx) {
    var strokeWidth = this.style['stroke-width'];
    var strokeColor = this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    var head = this.head;
    var tail = this.tail;
    var mid_x = this.size.x * 0.5;
    var mid_y = strokeWidth;
    var pos_x = (head.x + tail.x) * 0.5;
    var pos_y = (head.y + tail.y) * 0.5;
    var clientMid = this.editor.positionFromMarkupsToClient(mid_x, mid_y);
    var clientPos = this.editor.positionFromMarkupsToClient(pos_x, pos_y);
    var m1 = new THREE.Matrix4().makeTranslation(-clientMid.x, -clientMid.y, 0);
    var m2 = new THREE.Matrix4().makeRotationZ(this.rotation);
    var m3 = new THREE.Matrix4().makeTranslation(clientPos.x, clientPos.y, 0);
    var transform = m3.multiply(m2).multiply(m1);
    var points = this.getPolygonPoints();
    ctx.fillStyle = namespaceUtils.composeRGBAString(strokeColor, strokeOpacity);
    ctx.beginPath();
    var that = this;
    points.forEach(function (point) {
      var x = point[0],
          y = point[1];
      var client = that.editor.positionFromMarkupsToClient(x, y);
      client = client.applyMatrix4(transform);
      ctx.lineTo(client.x, client.y);
    });
    ctx.fill();
  };

  namespace.MarkupArrow = MarkupArrow;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param id
   * @param editor
   * @constructor
   */

  function MarkupCircle(id, editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity', 'fill-color', 'fill-opacity'];
    namespace.Markup.call(this, id, editor, styleAttributes);
    this.type = namespace.MARKUP_TYPE_CIRCLE;
    this.createSVG();
    this.bindDomEvents();
  }

  MarkupCircle.prototype = Object.create(namespace.Markup.prototype);
  MarkupCircle.prototype.constructor = MarkupCircle;
  var proto = MarkupCircle.prototype;

  proto.getEditMode = function () {
    return new namespace.EditModeCircle(this.editor);
  };

  proto.createSVG = function () {
    this.shape = namespaceUtils.createSvgElement('ellipse');
  };

  proto.bindDomEvents = function () {
    if (namespaceUtils.isTouchDevice()) {
      this.bindTouchEvents(this.shape);
    }

    this.shape.addEventListener("mousedown", this.onMouseDown.bind(this), true);
    this.shape.addEventListener("mouseout", function () {
      this.highlight(false);
    }.bind(this));
    this.shape.addEventListener("mouseover", function () {
      this.highlight(true);
    }.bind(this));
  };
  /**
   * Sets top-left and bottom-right values in client space coordinates (2d).
   * @param {Object} position
   * @param {Object} size
   */


  proto.set = function (position, size) {
    this.rotation = 0; // Reset angle //

    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = size.x;
    this.size.y = size.y;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Given the 3d positions for top-left and bottom-right, it recalculates
   * all the 2d values in client space.
   */


  proto.updateTransformMatrix = function () {
    var strokeWidth = this.style['stroke-width'];
    var originX = Math.max(this.size.x - strokeWidth, 0) * 0.5;
    var originY = Math.max(this.size.y - strokeWidth, 0) * 0.5;
    this.transformSvg = ['translate(', this.position.x, ',', this.position.y, ') ', 'rotate(', namespaceUtils.radiansToDegrees(-this.rotation), ') ', 'translate(', -originX, ',', -originY, ') '].join('');
  };
  /**
   * Applies data values into DOM element style/attribute(s)
   *
   */


  proto.updateStyle = function () {
    this.updateTransformMatrix();
    var strokeWidth = this.style['stroke-width'];
    var strokeColor = this.highlighted ? this.highlightColor : this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    var fillColor = this.style['fill-color'];
    var fillOpacity = this.style['fill-opacity'];
    var rad_x = Math.max(this.size.x - strokeWidth, 0) * 0.5;
    var rad_y = Math.max(this.size.y - strokeWidth, 0) * 0.5;
    this.shape.setAttribute("transform", this.transformSvg);
    this.shape.setAttribute("stroke-width", strokeWidth);
    this.shape.setAttribute("stroke", namespaceUtils.composeRGBAString(strokeColor, strokeOpacity));
    this.shape.setAttribute('fill', namespaceUtils.composeRGBAString(fillColor, fillOpacity));
    this.shape.setAttribute('cx', rad_x);
    this.shape.setAttribute('cy', rad_y);
    this.shape.setAttribute('rx', rad_x);
    this.shape.setAttribute('ry', rad_y);
  };
  /**
   * Specifies the parent layer which will contain the markup.
   * @param {HTMLElement} parent
   */


  proto.setParent = function (parent) {
    var div = this.shape;
    div.parentNode && div.parentNode.removeChild(div);
    parent && parent.appendChild(div);
  };
  /**
   * Changes the rotation of the markup to the given angle.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetRotation edit action
   *
   * @param {Number} angle
   */


  proto.setRotation = function (angle) {
    this.rotation = angle;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Changes the position and size of the markup.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetSize edit action
   * @param {{x: Number, y: Number}} position
   * @param {Number} width
   * @param {Number} height
   */


  proto.setSize = function (position, width, height) {
    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = width;
    this.size.y = height;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Used by the EditFrame to move the markup in Client Space coordinates
   * @param {Number} x - New X location for the markup. Notice that markups are centered on this value.
   * @param {Number} y - New Y location for the markup. Notice that markups are centered on this value.
   */


  proto.setPosition = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Signals that the markup has been created
   */


  proto.created = function () {// Nothing //
  };

  proto.destroy = function () {
    this.unselect();
    this.setParent(null);
  };

  proto.setMetadata = function () {
    var metadata = namespaceUtils.cloneStyle(this.style);
    metadata.type = "ellipse";
    metadata.position = [this.position.x, this.position.y].join(" ");
    metadata.size = [this.size.x, this.size.y].join(" ");
    metadata.rotation = String(this.rotation);
    return namespaceUtils.addMarkupMetadata(this.shape, metadata);
  };
  /**
   *
   * @param ctx
   */


  proto.renderToCanvas = function (ctx) {
    // ellipse method is not supported by all browsers, took this implementation from
    // Stack Overflow: http://goo.gl/64esnm
    function ellipse(ctx, cx, cy, w, h) {
      ctx.beginPath();
      var lx = cx - w / 2,
          rx = cx + w / 2,
          ty = cy - h / 2,
          by = cy + h / 2;
      var magic = 0.551784;
      var xmagic = magic * w / 2;
      var ymagic = magic * h / 2;
      ctx.moveTo(cx, ty);
      ctx.bezierCurveTo(cx + xmagic, ty, rx, cy - ymagic, rx, cy);
      ctx.bezierCurveTo(rx, cy + ymagic, cx + xmagic, by, cx, by);
      ctx.bezierCurveTo(cx - xmagic, by, lx, cy + ymagic, lx, cy);
      ctx.bezierCurveTo(lx, cy - ymagic, cx - xmagic, ty, cx, ty);
      ctx.stroke();
    }

    var strokeWidth = this.style['stroke-width'];
    var strokeColor = this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    var fillColor = this.style['fill-color'];
    var fillOpacity = this.style['fill-opacity'];
    var width = this.size.x - strokeWidth;
    var height = this.size.y - strokeWidth;
    var size = this.editor.sizeFromMarkupsToClient(width, height);
    var center = this.editor.positionFromMarkupsToClient(this.position.x, this.position.y);
    ctx.strokeStyle = namespaceUtils.composeRGBAString(strokeColor, strokeOpacity);
    ctx.fillStyle = namespaceUtils.composeRGBAString(fillColor, fillOpacity);
    ctx.lineWidth = this.editor.sizeFromMarkupsToClient(strokeWidth, 0).x;
    ctx.translate(center.x, center.y);
    ctx.rotate(this.rotation);
    ctx.beginPath();
    ellipse(ctx, 0, 0, size.x, size.y);
    fillOpacity !== 0 && ctx.fill();
    ctx.stroke();
  };

  namespace.MarkupCircle = MarkupCircle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param id
   * @param editor
   * @constructor
   */

  function MarkupCloud(id, editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity', 'fill-color', 'fill-opacity'];
    namespace.Markup.call(this, id, editor, styleAttributes);
    this.type = namespace.MARKUP_TYPE_CLOUD;
    this.lineJoint = 'round';
    this.createSVG();
    this.bindDomEvents();
  }

  MarkupCloud.prototype = Object.create(namespace.Markup.prototype);
  MarkupCloud.prototype.constructor = MarkupCloud;
  var proto = MarkupCloud.prototype;

  proto.getEditMode = function () {
    return new namespace.EditModeCloud(this.editor);
  };

  proto.createSVG = function () {
    this.shape = namespaceUtils.createSvgElement('path');
  };

  proto.bindDomEvents = function () {
    if (namespaceUtils.isTouchDevice()) {
      this.bindTouchEvents(this.shape);
    }

    this.shape.addEventListener("mousedown", this.onMouseDown.bind(this), true);
    this.shape.addEventListener("mouseout", function () {
      this.highlight(false);
    }.bind(this));
    this.shape.addEventListener("mouseover", function () {
      this.highlight(true);
    }.bind(this));
  };
  /**
   * Sets position and size in markup space coordinates.
   * @param {Object} position
   * @param {Object} size
   */


  proto.set = function (position, size) {
    this.rotation = 0; // Reset angle //

    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = size.x;
    this.size.y = size.y;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Given the 3d positions for top-left and bottom-right, it recalculates
   * all the 2d values in client space.
   */


  proto.updateTransformMatrix = function () {
    var originX = this.size.x * 0.5;
    var originY = this.size.y * 0.5;
    this.transformSvg = ['translate(', this.position.x, ',', this.position.y, ') ', 'rotate(', namespaceUtils.radiansToDegrees(-this.rotation), ') ', 'translate(', -originX, ',', -originY, ') '].join('');
  };
  /**
   * Applies data values into DOM element style/attribute(s)
   *
   */


  proto.updateStyle = function () {
    this.updateTransformMatrix();
    var strokeWidth = this.style['stroke-width'];
    var strokeColor = this.highlighted ? this.highlightColor : this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    var fillColor = this.style['fill-color'];
    var fillOpacity = this.style['fill-opacity'];
    this.shape.setAttribute("transform", this.transformSvg);
    this.shape.setAttribute("stroke-width", strokeWidth);
    this.shape.setAttribute("stroke", namespaceUtils.composeRGBAString(strokeColor, strokeOpacity));
    this.shape.setAttribute('fill', namespaceUtils.composeRGBAString(fillColor, fillOpacity));
    this.shape.setAttribute('stroke-linejoin', this.lineJoint);
    var pathMovements = this.getPathMovements();
    var mappedMovements = pathMovements.map(function (moves, index) {
      if (index === 0) {
        //start
        //moves = [x, y]
        return ['M'].concat(moves.join(',')).join(' '); //M x,y
      } else {
        //curve
        //moves = [[x, y], [x, y], [x, y]]
        var bezier = moves.map(function (move) {
          return move.join(','); // "x,y"
        }); // ["x,y", "x,y", "x,y"]

        return ['C'].concat(bezier).join(' '); // "C x,y x,y x,y"
      }
    });
    mappedMovements.push('Z');
    this.shape.setAttribute('d', mappedMovements.join(' '));
  };
  /**
   * Helper function that creates intermediate points given the
   * current position and size.
   * @returns {Array}
   */


  proto.getPathMovements = function () {
    var strokeWidth = this.style['stroke-width'];
    var vWidth = this.size.x === 0 ? 1 : this.size.x;
    var vHeight = this.size.y === 0 ? 1 : this.size.y;
    var arcWidth = strokeWidth * 4; // MarkupCloud coord space value

    var arcHeight = strokeWidth * 3; // MarkupCloud coord space value

    var offsetFromVertex = arcHeight + strokeWidth / 2;
    var cloudWidth = vWidth - offsetFromVertex * 2; //remove 2x to account for the left and right offsets

    var cloudHeight = vHeight - offsetFromVertex * 2; //remove 2x to account for the top and bottom offsets
    //determine how many arcs to draw horizontally

    var numOfHorizontalArcs = cloudWidth / arcWidth; //and vertically

    var numOfVerticalArcs = cloudHeight / arcWidth; //the # of arcs may be a decimal. In that case, draw a smaller arc to complete/fill the given width/height

    var partialHorizontalArc = numOfHorizontalArcs % 1; //get the decimal portion only

    var partialVerticalArc = numOfVerticalArcs % 1; ////get the decimal portion only
    //drop the decimal

    numOfHorizontalArcs = parseInt(numOfHorizontalArcs, 10);
    numOfVerticalArcs = parseInt(numOfVerticalArcs, 10);
    var currentX = offsetFromVertex,
        currentY = offsetFromVertex;

    function bezierCurve(width, height, side) {
      //left control point offset
      var lcpOffset = width * 0.25; //right control point offset

      var rcpOffset = width * 0.75;

      switch (side) {
        case "top":
          return [[currentX + lcpOffset, currentY - height], //control point 1
          [currentX + rcpOffset, currentY - height], //control point 2
          [currentX += width, currentY] //end point
          ];

        case "right":
          return [[currentX + height, currentY + lcpOffset], [currentX + height, currentY + rcpOffset], [currentX, currentY += width]];

        case "bottom":
          return [[currentX - lcpOffset, currentY + height], [currentX - rcpOffset, currentY + height], [currentX -= width, currentY]];

        case "left":
          return [[currentX - height, currentY - lcpOffset], [currentX - height, currentY - rcpOffset], [currentX, currentY -= width]];
      }
    } //create a movements array with the first movement


    var movements = [[currentX, currentY] //M
    ]; //create the bezier curve for each side

    ['top', 'right', 'bottom', 'left'].forEach(function (side) {
      var horizontal = isHorizontal(side);
      var numOfArcs = horizontal ? numOfHorizontalArcs : numOfVerticalArcs;
      var partialArc = horizontal ? partialHorizontalArc : partialVerticalArc;

      for (var i = 0; i < numOfArcs; i++) {
        movements.push(bezierCurve(arcWidth, arcHeight, side));
      }

      if (partialArc !== 0) movements.push(bezierCurve(partialArc * arcWidth, arcHeight, side));
    });
    return movements;
  };
  /**
   * Specifies the parent layer which will contain the markup.
   * @param {HTMLElement} parent
   */


  proto.setParent = function (parent) {
    var div = this.shape;
    div.parentNode && div.parentNode.removeChild(div);
    parent && parent.appendChild(div);
  };
  /**
   * Changes the rotation of the markup to the given angle.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetRotation edit action
   *
   * @param {Number} angle
   */


  proto.setRotation = function (angle) {
    this.rotation = angle;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Changes the position and size of the markup.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetSize edit action
   * @param {{x: Number, y: Number}} position
   * @param {Number} width
   * @param {Number} height
   */


  proto.setSize = function (position, width, height) {
    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = width;
    this.size.y = height;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Used by the EditFrame to move the markup in Client Space coordinates
   * @param {Number} x - New X location for the markup. Notice that markups are centered on this value.
   * @param {Number} y - New Y location for the markup. Notice that markups are centered on this value.
   */


  proto.setPosition = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Signals that the markup has been created
   */


  proto.created = function () {};

  proto.destroy = function () {
    this.unselect();
    this.setParent(null);
  };
  /**
   *
   * @param bounds
   */


  proto.constrainsToBounds = function (bounds) {};

  function isHorizontal(side) {
    return side === 'top' || side === 'bottom';
  }

  proto.setMetadata = function () {
    var metadata = namespaceUtils.cloneStyle(this.style);
    metadata.type = "cloud";
    metadata.position = [this.position.x, this.position.y].join(" ");
    metadata.size = [this.size.x, this.size.y].join(" ");
    metadata.rotation = String(this.rotation);
    return namespaceUtils.addMarkupMetadata(this.shape, metadata);
  };
  /**
   * Renders the Markup onto an HTML-5 canvas surface.
   * @param {Object} ctx - Canvas rendering context
   */


  proto.renderToCanvas = function (ctx) {
    var m1 = new THREE.Matrix4().makeTranslation(-this.size.x * 0.5, -this.size.y * 0.5, 0);
    var m2 = new THREE.Matrix4().makeRotationZ(-this.rotation);
    var m3 = new THREE.Matrix4().makeTranslation(this.position.x, this.position.y, 0);
    var transform = m3.multiply(m2).multiply(m1);
    var strokeColor = this.highlighted ? this.highlightColor : this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    var fillColor = this.style['fill-color'];
    var fillOpacity = this.style['fill-opacity'];
    ctx.strokeStyle = namespaceUtils.composeRGBAString(strokeColor, strokeOpacity);
    ctx.fillStyle = namespaceUtils.composeRGBAString(fillColor, fillOpacity);
    ctx.lineJoin = this.lineJoint;
    ctx.lineWidth = this.editor.sizeFromMarkupsToClient(this.style['stroke-width'], 0).x;
    ctx.beginPath();
    var vector3 = new THREE.Vector3();
    var mappingFn = this.editor.positionFromMarkupsToClient.bind(this.editor);
    var pathMovements = this.getPathMovements();
    pathMovements.forEach(function (moves, index) {
      if (index === 0) {
        //start or svg M
        //moves = [x, y]
        vector3.x = moves[0];
        vector3.y = moves[1];
        vector3.z = 0;
        vector3 = vector3.applyMatrix4(transform);
        var pos = mappingFn(vector3.x, vector3.y);
        ctx.moveTo(pos.x, pos.y);
      } else {
        //curve or svg C
        //moves = [[x, y], [x, y], [x, y]]
        vector3.x = moves[0][0];
        vector3.y = moves[0][1];
        vector3.z = 0;
        vector3 = vector3.applyMatrix4(transform);
        var cp1 = mappingFn(vector3.x, vector3.y);
        vector3.x = moves[1][0];
        vector3.y = moves[1][1];
        vector3.z = 0;
        vector3 = vector3.applyMatrix4(transform);
        var cp2 = mappingFn(vector3.x, vector3.y);
        vector3.x = moves[2][0];
        vector3.y = moves[2][1];
        vector3.z = 0;
        vector3 = vector3.applyMatrix4(transform);
        var end = mappingFn(vector3.x, vector3.y);
        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
      }
    });
    ctx.closePath();
    fillOpacity !== 0 && ctx.fill();
    ctx.stroke();
  };

  namespace.MarkupCloud = MarkupCloud;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param id
   * @param editor
   * @constructor
   */

  function MarkupFreehand(id, editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity'];
    namespace.Markup.call(this, id, editor, styleAttributes);
    this.type = namespace.MARKUP_TYPE_FREEHAND; // Position represents top-left (instead of center as in most other markups).

    this.iniSize = {
      x: 1,
      y: 1
    };
    this.createSVG();
    this.bindDomEvents();
  }

  MarkupFreehand.prototype = Object.create(namespace.Markup.prototype);
  MarkupFreehand.prototype.constructor = MarkupFreehand;
  var proto = MarkupFreehand.prototype;

  proto.getEditMode = function () {
    return new namespace.EditModeFreehand(this.editor);
  };

  proto.createSVG = function () {
    this.shape = namespaceUtils.createSvgElement('path');
  };

  proto.bindDomEvents = function () {
    if (namespaceUtils.isTouchDevice()) {
      this.bindTouchEvents(this.shape);
    }

    this.shape.addEventListener("mousedown", this.onMouseDown.bind(this), true);
    this.shape.addEventListener("mouseout", function () {
      this.highlight(false);
    }.bind(this));
    this.shape.addEventListener("mouseover", function () {
      this.highlight(true);
    }.bind(this));
  };
  /**
   * Sets top-left and bottom-right values in client space coordinates (2d).
   *
   * @param position
   * @param size
   * @param locations
   */


  proto.set = function (position, size, locations) {
    this.rotation = 0; // Reset angle //

    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = size.x;
    this.size.y = size.y;
    this.locations = locations.concat();
    this.iniSize.x = size.x === 0 ? 1 : size.x;
    this.iniSize.y = size.y === 0 ? 1 : size.y;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Given the 3d positions for top-left and bottom-right, it recalculates
   * all the 2d values in client space.
   */


  proto.updateTransformMatrix = function () {
    var scaleX = this.size.x / this.iniSize.x;
    var scaleY = this.size.y / this.iniSize.y;
    this.transformSvg = ['translate(', this.position.x, ',', this.position.y, ') ', 'rotate(', namespaceUtils.radiansToDegrees(-this.rotation), ') ', 'scale(', scaleX, ',', scaleY, ') '].join('');
  };
  /**
   * Applies data values into DOM element style/attribute(s)
   *
   */


  proto.updateStyle = function () {
    this.updateTransformMatrix();
    var strokeWidth = this.style['stroke-width'];
    var strokeColor = this.highlighted ? this.highlightColor : this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    this.shape.setAttribute("transform", this.transformSvg);
    this.shape.setAttribute("stroke-width", strokeWidth);
    this.shape.setAttribute("stroke", namespaceUtils.composeRGBAString(strokeColor, strokeOpacity));
    this.shape.setAttribute('fill', 'none');
    this.shape.setAttribute('opacity', namespaceUtils.composeRGBAString(strokeColor, strokeOpacity));
    var pathData = this.locations.map(function (point, i) {
      if (i === 0) {
        return ['M'].concat([point.x, point.y]).join(' ');
      } else {
        return ['L'].concat([point.x, point.y]).join(' ');
      }
    }).join(' ');
    this.shape.setAttribute('d', pathData);
  };
  /**
   * Specifies the parent layer which will contain the markup.
   * @param {HTMLElement} parent
   */


  proto.setParent = function (parent) {
    var div = this.shape;
    div.parentNode && div.parentNode.removeChild(div);
    parent && parent.appendChild(div);
  };
  /**
   * Changes the rotation of the markup to the given angle.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetRotation edit action
   *
   * @param {Number} angle
   */


  proto.setRotation = function (angle) {
    this.rotation = angle;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Changes the position and size of the markup.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetSize edit action
   * @param {{x: Number, y: Number}} position
   * @param {Number} width
   * @param {Number} height
   */


  proto.setSize = function (position, width, height) {
    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = width;
    this.size.y = height;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Used by the EditFrame to move the markup in Client Space coordinates
   * @param {Number} x - New X location for the markup. Notice that markups are centered on this value.
   * @param {Number} y - New Y location for the markup. Notice that markups are centered on this value.
   */


  proto.setPosition = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Signals that the markup has been created
   */


  proto.created = function () {// Nothing //
  };

  proto.destroy = function () {
    this.unselect();
    this.setParent(null);
  };
  /**
   *
   * @param bounds
   */


  proto.constrainsToBounds = function (bounds) {};

  proto.setMetadata = function () {
    var metadata = namespaceUtils.cloneStyle(this.style);
    metadata.type = "freehand";
    metadata.position = [this.position.x, this.position.y].join(" ");
    metadata.size = [this.size.x, this.size.y].join(" ");
    metadata.rotation = String(this.rotation);
    metadata.locations = this.locations.map(function (point) {
      return [point.x, point.y].join(" ");
    }).join(" ");
    return namespaceUtils.addMarkupMetadata(this.shape, metadata);
  };

  proto.renderToCanvas = function (ctx) {
    var strokeWidth = this.style['stroke-width'];
    var strokeColor = this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    var scaleX = this.size.x / this.iniSize.x;
    var scaleY = this.size.y / this.iniSize.y;
    var m0 = new THREE.Matrix4().makeScale(scaleX, scaleY, 1);
    var m1 = new THREE.Matrix4().makeRotationZ(-this.rotation);
    var m2 = new THREE.Matrix4().makeTranslation(this.position.x, this.position.y, 0);
    var transform = m2.multiply(m1).multiply(m0);
    ctx.strokeStyle = namespaceUtils.composeRGBAString(strokeColor, strokeOpacity);
    ctx.lineWidth = this.editor.sizeFromMarkupsToClient(strokeWidth, 0).x;
    ctx.beginPath();
    var that = this;
    var vector3 = new THREE.Vector3();
    this.locations.forEach(function (point, i) {
      vector3.x = point.x;
      vector3.y = point.y;
      vector3.z = 0;
      vector3 = vector3.applyMatrix4(transform);
      point = that.editor.positionFromMarkupsToClient(vector3.x, vector3.y);

      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();
  };

  namespace.MarkupFreehand = MarkupFreehand;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * @class
   * Implements a Rectangle [Markup]{@link Autodesk.Viewing.Extensions.Markups.Core.Markup}.
   * Included in documentation as an example of how to create
   * a specific markup type. Developers are encourage to look into this class's source code and copy
   * as much code as they need. Find link to source code below.
   *
   * @tutorial feature_markup
   * @constructor
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   * @extends Autodesk.Viewing.Extensions.Markups.Core.Markup
   *
   * @param {number} id
   * @param {Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore} editor
   * @constructor
   */

  function MarkupRectangle(id, editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity', 'fill-color', 'fill-opacity'];
    namespace.Markup.call(this, id, editor, styleAttributes);
    this.type = namespace.MARKUP_TYPE_RECTANGLE;
    this.createSVG();
    this.bindDomEvents();
  }

  MarkupRectangle.prototype = Object.create(namespace.Markup.prototype);
  MarkupRectangle.prototype.constructor = MarkupRectangle;
  var proto = MarkupRectangle.prototype;

  proto.getEditMode = function () {
    return new namespace.EditModeRectangle(this.editor);
  };

  proto.createSVG = function () {
    this.shape = namespaceUtils.createSvgElement('rect');
  };

  proto.bindDomEvents = function () {
    if (namespaceUtils.isTouchDevice()) {
      this.bindTouchEvents(this.shape);
    }

    this.shape.addEventListener("mousedown", this.onMouseDown.bind(this), true);
    this.shape.addEventListener("mouseout", function () {
      this.highlight(false);
    }.bind(this));
    this.shape.addEventListener("mouseover", function () {
      this.highlight(true);
    }.bind(this));
  };
  /**
   * Sets position and size in markup space coordinates
   * @param {Object} position
   * @param {Object} size
   */


  proto.set = function (position, size) {
    this.rotation = 0; // Reset angle //

    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = size.x;
    this.size.y = size.y;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Given the 3d positions for top-left and bottom-right, it recalculates
   * all the 2d values in client space.
   */


  proto.updateTransformMatrix = function () {
    var strokeWidth = this.style['stroke-width'];
    var originX = Math.max(this.size.x - strokeWidth, 0) * 0.5;
    var originY = Math.max(this.size.y - strokeWidth, 0) * 0.5;
    this.transformSvg = ['translate(', this.position.x, ',', this.position.y, ') ', 'rotate(', namespaceUtils.radiansToDegrees(-this.rotation), ') ', 'translate(', -originX, ',', -originY, ') '].join('');
  };
  /**
   * Applies data values into DOM element style/attribute(s)
   *
   */


  proto.updateStyle = function () {
    this.updateTransformMatrix();
    var strokeWidth = this.style['stroke-width'];
    var strokeColor = this.highlighted ? this.highlightColor : this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    var fillColor = this.style['fill-color'];
    var fillOpacity = this.style['fill-opacity'];
    this.shape.setAttribute("transform", this.transformSvg);
    this.shape.setAttribute("stroke-width", strokeWidth);
    this.shape.setAttribute("stroke", namespaceUtils.composeRGBAString(strokeColor, strokeOpacity));
    this.shape.setAttribute('fill', namespaceUtils.composeRGBAString(fillColor, fillOpacity));
    this.shape.setAttribute('width', Math.max(this.size.x - strokeWidth, 0));
    this.shape.setAttribute('height', Math.max(this.size.y - strokeWidth, 0));
  };
  /**
   * Specifies the parent layer which will contain the markup.
   * @param {HTMLElement} parent
   */


  proto.setParent = function (parent) {
    var div = this.shape;
    div.parentNode && div.parentNode.removeChild(div);
    parent && parent.appendChild(div);
  };
  /**
   * Changes the rotation of the markup to the given angle.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetRotation edit action
   *
   * @param {Number} angle
   */


  proto.setRotation = function (angle) {
    this.rotation = angle;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Changes the position and size of the markup.
   * This gets called by the Autodesk.Viewing.Extensions.Markups.Core.SetSize edit action
   * @param {{x: Number, y: Number}} position
   * @param {Number} width
   * @param {Number} height
   */


  proto.setSize = function (position, width, height) {
    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = width;
    this.size.y = height;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Used by the EditFrame to move the markup in Client Space coordinates
   * @param {Number} x - New X location for the markup. Notice that markups are centered on this value.
   * @param {Number} y - New Y location for the markup. Notice that markups are centered on this value.
   */


  proto.setPosition = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.updateTransformMatrix();
    this.updateStyle();
  };
  /**
   * Signals that the markup has been created
   */


  proto.created = function () {};

  proto.destroy = function () {
    this.unselect();
    this.setParent(null);
  };
  /**
   *
   * @param bounds
   */


  proto.constrainsToBounds = function (bounds) {};

  proto.setMetadata = function () {
    var metadata = namespaceUtils.cloneStyle(this.style);
    metadata.type = "rectangle";
    metadata.position = [this.position.x, this.position.y].join(" ");
    metadata.size = [this.size.x, this.size.y].join(" ");
    metadata.rotation = String(this.rotation);
    return namespaceUtils.addMarkupMetadata(this.shape, metadata);
  };

  proto.renderToCanvas = function (ctx) {
    var strokeWidth = this.style['stroke-width'];
    var strokeColor = this.highlighted ? this.highlightColor : this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity'];
    var fillColor = this.style['fill-color'];
    var fillOpacity = this.style['fill-opacity'];
    var width = this.size.x - strokeWidth;
    var height = this.size.y - strokeWidth;
    var size = this.editor.sizeFromMarkupsToClient(width, height);
    var clientWidth = size.x;
    var clientHeight = size.y;
    var clientCenter = this.editor.positionFromMarkupsToClient(this.position.x, this.position.y);
    ctx.strokeStyle = namespaceUtils.composeRGBAString(strokeColor, strokeOpacity);
    ctx.fillStyle = namespaceUtils.composeRGBAString(fillColor, fillOpacity);
    ctx.lineWidth = this.editor.sizeFromMarkupsToClient(strokeWidth, 0).x;
    ctx.translate(clientCenter.x, clientCenter.y);
    ctx.rotate(this.getRotation());
    fillOpacity !== 0 && ctx.fillRect(clientWidth / -2, clientHeight / -2, clientWidth, clientHeight);
    ctx.strokeRect(clientWidth / -2, clientHeight / -2, clientWidth, clientHeight);
  };

  namespace.MarkupRectangle = MarkupRectangle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * Arrow Markup.
   * @constructor
   */

  function MarkupText(id, editor, size) {
    var styleAttributes = ['font-size', 'stroke-color', 'stroke-opacity', 'fill-color', 'fill-opacity', 'font-family', 'font-style', 'font-weight'];
    namespace.Markup.call(this, id, editor, styleAttributes);
    this.constraintRotation = true;
    this.type = namespace.MARKUP_TYPE_TEXT;
    this.size.x = size.x;
    this.size.y = size.y;
    this.currentText = "";
    this.currentTextLines = [""];
    this.textDirty = true; // Note: We could have this property be a style property.
    // However, there is no need for this property to be exposed to the user for alteration
    // This value is a percentage of the font size used to offset vertically 2 text lines
    // of the same paragraph.
    // Notice that this value is used by EditorTextInput.js

    this.lineHeight = 130;
    this.createSvg();
    this.bindDomEvents();
  }

  MarkupText.prototype = Object.create(namespace.Markup.prototype);
  MarkupText.prototype.constructor = MarkupText;
  var proto = MarkupText.prototype;

  proto.getEditMode = function () {
    return new namespace.EditModeText(this.editor);
  };

  proto.createSvg = function () {
    // Used to clip rendering of text.
    // We are particularly interested in vertical clipping
    this.clipPath = namespaceUtils.createSvgElement('clipPath');
    this.clipPathId = 'CO2_Markup_clip_' + this.id;
    this.clipPath.setAttribute('id', this.clipPathId);
    this.clipPath.removeAttribute('pointer-events'); // The actual clipping shape

    this.clipRect = namespaceUtils.createSvgElement('rect');
    this.clipRect.removeAttribute('pointer-events');
    this.clipPath.appendChild(this.clipRect); // Add to clipPath

    this.shape = namespaceUtils.createSvgElement('text');
    this.shapeBg = namespaceUtils.createSvgElement('rect');
  };

  proto.bindDomEvents = function () {
    if (namespaceUtils.isTouchDevice()) {
      this.bindTouchEvents(this.shape);
    }

    this.shape.addEventListener("mousedown", this.onMouseDown.bind(this), true);
    this.shape.addEventListener("mouseout", function () {
      this.highlight(false);
    }.bind(this));
    this.shape.addEventListener("mouseover", function () {
      this.highlight(true);
    }.bind(this));
  };
  /**
   *
   * @param {String} position
   * @param {String} size
   * @param {String} textString
   * @param {Array} textLines
   */


  proto.set = function (position, size, textString, textLines) {
    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = size.x;
    this.size.y = size.y;
    this.updateTransformMatrix();
    this.updateStyle();
    this.setText(textString, textLines);
  };

  proto.updateTransformMatrix = function () {
    var ox = this.size.x * 0.5;
    var oy = this.size.y * 0.5;
    var pos_x = this.position.x - ox;
    var pos_y = this.position.y - oy;
    this.transformSvg = ['translate(', pos_x, ',', pos_y, ') ', 'scale(', 1, ',', -1, ') '].join('');
  };

  proto.setPosition = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.updateTransformMatrix();
    this.updateStyle();
  };

  proto.setSize = function (position, width, height) {
    var recalcLines = this.size.x !== width;
    this.position.x = position.x;
    this.position.y = position.y;
    this.size.x = width;
    this.size.y = height;

    if (recalcLines) {
      var newLines = this.calcTextLines();

      if (!this.linesAreEqual(newLines)) {
        this.currentTextLines = newLines;
        this.textDirty = true;
        this.forceRedraw();
      }
    }

    this.updateTransformMatrix();
    this.updateStyle();
  };

  proto.calcTextLines = function () {
    // TODO: This is ugly as hell. We need a better approach to this.
    return this.editor.editMode.textInputHelper.getTextValuesForMarkup(this).lines;
  };

  proto.setStyle = function (style) {
    namespaceUtils.copyStyle(style, this.style);
    this.updateStyle(true); // For Text Markup we always force a re-render of text
  };
  /**
   *
   * @param {Array} lines - Array of strings
   * @private
   */


  proto.linesAreEqual = function (lines) {
    var curr = this.currentTextLines;
    if (lines.length !== curr.length) return false;
    var len = curr.length;

    for (var i = 0; i < len; ++i) {
      if (lines[i] !== curr[i]) return false;
    }

    return true;
  };
  /**
   * Specifies the parent layer which will contain the markup.
   * @param {HTMLElement} parent
   */


  proto.setParent = function (parent) {
    // NOTE: Do not add clipPath into a <def> node.
    // Reason: It doesn't work in Chrome (Firefox did work).
    var currentParent = this.clipPath.parentNode;
    currentParent && currentParent.removeChild(this.clipPath);
    parent && parent.appendChild(this.clipPath);
    currentParent = this.shapeBg.parentNode;
    currentParent && currentParent.removeChild(this.shapeBg);
    parent && parent.appendChild(this.shapeBg);
    currentParent = this.shape.parentNode;
    currentParent && currentParent.removeChild(this.shape);
    parent && parent.appendChild(this.shape);
  };
  /**
   *
   * @param {String} text
   */


  proto.setText = function (text) {
    this.currentText = text;
    this.currentTextLines = this.calcTextLines();
    this.textDirty = true;
    this.updateStyle();
  };
  /**
   * Returns the raw string value
   * @returns {String}
   */


  proto.getText = function () {
    return this.currentText;
  };
  /**
   * Returns a shallow copy of the text lines used for rendering SVG text
   * @returns {Array.<String>}
   */


  proto.getTextLines = function () {
    return this.currentTextLines.concat();
  };
  /**
   * Applies data values into DOM element style/attribute(s)
   *
   * @param {Boolean} [forceDirty] - Whether we want to re-render the text
   */


  proto.updateStyle = function (forceDirty) {
    this.updateTransformMatrix();
    var fontSize = this.style['font-size'];
    var strokeColor = this.highlighted ? this.highlightColor : this.style['stroke-color'];
    var strokeOpacity = this.style['stroke-opacity']; // See standard: http://www.w3.org/TR/SVG/fonts.html

    this.shape.setAttribute("font-family", this.style['font-family']);
    this.shape.setAttribute("font-size", fontSize);
    this.shape.setAttribute('font-weight', this.style['font-weight'] ? 'bold' : '');
    this.shape.setAttribute("font-style", this.style['font-style'] ? 'italic' : '');
    this.shape.setAttribute("fill", namespaceUtils.composeRGBAString(strokeColor, strokeOpacity)); // SVG text (as opposed to DIV text) is rendered "on top" of the indicated Y position.
    // Thus, we need to offset it down a bit, and for that we need to take care into account
    // the text bounding box's height (and maybe its y coordinate).

    var bbox = this.shape.getBBox(); // Assumes font style is already in place.

    var verticalTransform = ['translate(0, ', -this.size.y + fontSize, ')'].join('');
    this.shape.setAttribute("transform", this.transformSvg + verticalTransform);
    this.shape.setAttribute('clip-path', 'url(#' + this.clipPathId + ')'); // Must be called AFTER shape's styles are in place.

    if (this.textDirty || forceDirty) {
      if (forceDirty) {
        this.currentTextLines = this.calcTextLines();
      }

      this.rebuildTextSvg();
      this.textDirty = false;
    } // Update clipping rect


    this.clipRect.setAttribute('x', "0");
    this.clipRect.setAttribute('y', bbox.y); // Negative number

    this.clipRect.setAttribute('width', this.size.x);
    this.clipRect.setAttribute('height', this.size.y); // Update visible background rectangle

    var fillColor = this.style['fill-color'];
    var fillOpacity = this.style['fill-opacity'];
    verticalTransform = ['translate(0, ', -this.size.y, ')'].join('');
    this.shapeBg.setAttribute("transform", this.transformSvg + verticalTransform);
    this.shapeBg.setAttribute('width', this.size.x);
    this.shapeBg.setAttribute('height', this.size.y);
    this.shapeBg.setAttribute("stroke-width", '0');
    this.shapeBg.setAttribute('fill', namespaceUtils.composeRGBAString(fillColor, fillOpacity));
  };
  /**
   * Re-creates SVG tags that render SVG text.
   * Each line is placed around tspan tags which are vertically offset to each other.
   */


  proto.rebuildTextSvg = function () {
    // Begin by removing all children (if any).
    while (this.shape.childNodes.length > 0) {
      this.shape.removeChild(this.shape.childNodes[0]);
    } // For each line, create a tspan, add as child and offset it vertically.


    var dx = 0;
    var dy = 0;
    var yOffset = this.getLineHeight();
    this.currentTextLines.forEach(function (line) {
      var tspan = namespaceUtils.createSvgElement('tspan');
      tspan.setAttribute('x', dx);
      tspan.setAttribute('y', dy);
      tspan.textContent = line;
      this.shape.appendChild(tspan);
      dy += yOffset;
    }.bind(this));
  };

  proto.setMetadata = function () {
    var metadata = namespaceUtils.cloneStyle(this.style);
    metadata.type = "label";
    metadata.position = [this.position.x, this.position.y].join(" ");
    metadata.size = [this.size.x, this.size.y].join(" ");
    metadata.text = String(this.currentText);
    return namespaceUtils.addMarkupMetadata(this.shape, metadata);
  };
  /**
   * Helper method that returns the font size in client space coords.
   * @returns {Number}
   */


  proto.getClientFontSize = function () {
    return this.editor.sizeFromMarkupsToClient(0, this.style['font-size']).y;
  };

  proto.getLineHeight = function () {
    return this.style['font-size'] * (this.lineHeight * 0.01);
  };

  proto.forceRedraw = function () {
    // In chrome the text is not rendered until its style changes after creation.
    // With this hack the text is drawn correctly.
    window.requestAnimationFrame(function () {
      this.highlighted = !this.highlighted;
      this.updateStyle();
      this.highlighted = !this.highlighted;
      this.updateStyle();
    }.bind(this));
  };
  /**
   * Renders the lines of text to the canvas.
   * This method does not attempt to figure out how to wrap text. Instead, it expects
   * a set of lines that are already adjusted to fit in the given space.
   * All this does it renders them in the correct vertical position
   *
   * @param {CanvasRenderingContext2D} ctx - the canvas context to draw on
   * @param {String[]} lines - the lines of text to render already adjusted to wrap properly
   * @param {Number} lineHeight - the height of each line
   * @param {Number} maxHeight - maximum height the text will render to
   */


  function renderLinesOfText(ctx, lines, lineHeight, maxHeight) {
    var y = 0; //only the vertical position changes

    lines.forEach(function (line) {
      //check if we're over the max height allowed
      //if so, just end
      if (y + lineHeight > maxHeight) {
        return;
      }

      ctx.fillText(line, 0, y);
      y += lineHeight;
    });
  }

  proto.renderToCanvas = function (ctx) {
    var fontFamily = this.style['font-family'];
    var fontStyle = this.style['font-style'] ? "italic" : "";
    var fontWeight = this.style['font-weight'] ? "bold" : "";
    var strokeColor = this.style['stroke-color'];
    var fontOpacity = this.style['stroke-opacity'];
    var fontSize = this.getClientFontSize();
    var lineHeight = fontSize * (this.lineHeight * 0.01); //var rotation = this.getRotation(); TODO: Revisit rotation when it becomes available

    var center = this.editor.positionFromMarkupsToClient(this.position.x, this.position.y);
    var clientSize = this.editor.sizeFromMarkupsToClient(this.size.x, this.size.y); // Background rect

    ctx.save();
    {
      var fillColor = this.style['fill-color'];
      var fillOpacity = this.style['fill-opacity'];
      ctx.fillStyle = namespaceUtils.composeRGBAString(fillColor, fillOpacity);
      ctx.translate(center.x, center.y); //ctx.rotate(rotation);

      fillOpacity !== 0 && ctx.fillRect(clientSize.x * -0.5, clientSize.y * -0.5, clientSize.x, clientSize.y);
    }
    ctx.restore(); // Text

    ctx.fillStyle = strokeColor;
    ctx.strokeStyle = strokeColor;
    ctx.textBaseline = 'top';
    ctx.translate(center.x - clientSize.x * 0.5, center.y - clientSize.y * 0.5); //ctx.rotate(rotation);

    ctx.font = fontStyle + " " + fontWeight + " " + fontSize + "px " + fontFamily;
    ctx.globalAlpha = fontOpacity;
    renderLinesOfText(ctx, this.currentTextLines, lineHeight, clientSize.y);
  };

  namespace.MarkupText = MarkupText;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;

  function MarkupTool() {
    Autodesk.Viewing.ToolInterface.call(this);
    this.names = ["markups.core"];
    this.panTool = null;
    this.allowNav = false;
    this.coreExt = null;
    this.hotkeysEnabled = true;
    var _ctrlDown = false;
    var _shiftDown = false; // Non-ToolInterface methods //

    this.allowNavigation = function (allow) {
      this.allowNav = allow;
    };

    this.setCoreExtension = function (coreExt) {
      this.coreExt = coreExt;
    };

    this.setHotkeysEnabled = function (enabled) {
      this.hotkeysEnabled = enabled;
    }; // ToolInterface methods //


    this.activate = function (name, viewerApi) {
      this.panTool = viewerApi.toolController.getTool("pan");

      if (this.panTool) {
        this.panTool.activate("pan"); // TODO: What if we want "zoom" here?
      }
    };

    this.deactivate = function (name) {
      if (this.panTool) {
        this.panTool.deactivate("pan");
      }

      this.panTool = null;
    };

    this.handleKeyDown = function (event, keyCode) {
      if (!this.hotkeysEnabled) {
        return true; // Consume event
      } // Don't propagate key handling down to tool //


      switch (keyCode) {
        case Autodesk.Viewing.KeyCode.CONTROL:
          _ctrlDown = true;
          break;

        case Autodesk.Viewing.KeyCode.SHIFT:
          _shiftDown = true;
          break;

        case Autodesk.Viewing.KeyCode.x:
          _ctrlDown && !this.allowNav && this.coreExt.cut();
          break;

        case Autodesk.Viewing.KeyCode.c:
          _ctrlDown && !this.allowNav && this.coreExt.copy();
          break;

        case Autodesk.Viewing.KeyCode.v:
          _ctrlDown && !this.allowNav && this.coreExt.paste();
          break;

        case Autodesk.Viewing.KeyCode.d:
          if (_ctrlDown && !this.allowNav) {
            // Duplicate
            this.coreExt.copy();
            this.coreExt.paste();
          }

          break;

        case Autodesk.Viewing.KeyCode.z:
          if (_ctrlDown && !_shiftDown && !this.allowNav) {
            this.coreExt.undo();
          } else if (_ctrlDown && _shiftDown && !this.allowNav) {
            this.coreExt.redo(); // Also support Ctrl+Y
          }

          break;

        case Autodesk.Viewing.KeyCode.y:
          _ctrlDown && !this.allowNav && this.coreExt.redo();
          break;
        // Also support ctrl+shift+z

        case Autodesk.Viewing.KeyCode.ESCAPE:
          this.coreExt.selectMarkup(null);
          break;

        default:
          break;
      }

      return true; // Consume event
    };

    this.handleKeyUp = function (event, keyCode) {
      if (!this.hotkeysEnabled) {
        return true; // Consume event
      } // Don't propagate key handling down to tool


      switch (keyCode) {
        case Autodesk.Viewing.KeyCode.CONTROL:
          _ctrlDown = false;
          break;

        case Autodesk.Viewing.KeyCode.SHIFT:
          _shiftDown = false;
          break;

        default:
          break;
      }

      return true; // Consume event ONLY
    };

    this.update = function () {
      if (this.allowNav && this.panTool && this.panTool.update) {
        return this.panTool.update();
      }

      return false;
    };

    this.handleSingleClick = function (event, button) {
      if (this.allowNav && this.panTool && this.panTool.handleSingleClick) {
        return this.panTool.handleSingleClick(event, button);
      }

      return true; // Consume event
    };

    this.handleDoubleClick = function (event, button) {
      if (this.allowNav && this.panTool && this.panTool.handleDoubleClick) {
        return this.panTool.handleDoubleClick(event, button);
      }

      return true; // Consume event
    };

    this.handleSingleTap = function (event) {
      if (this.allowNav && this.panTool && this.panTool.handleSingleTap) {
        return this.panTool.handleSingleTap(event);
      }

      return true; // Consume event
    };

    this.handleDoubleTap = function (event) {
      if (this.allowNav && this.panTool && this.panTool.handleDoubleTap) {
        return this.panTool.handleDoubleTap(event);
      }

      return true; // Consume event
    };

    this.handleWheelInput = function (delta) {
      if (this.allowNav && this.panTool && this.panTool.handleWheelInput) {
        return this.panTool.handleWheelInput(delta);
      }

      return true; // Consume event
    };

    this.handleButtonDown = function (event, button) {
      if (this.allowNav && this.panTool && this.panTool.handleButtonDown) {
        return this.panTool.handleButtonDown(event, button);
      }

      return true; // Consume event
    };

    this.handleButtonUp = function (event, button) {
      if (this.allowNav && this.panTool && this.panTool.handleButtonUp) {
        return this.panTool.handleButtonUp(event, button);
      }

      return true; // Consume event
    };

    this.handleMouseMove = function (event) {
      if (this.allowNav && this.panTool && this.panTool.handleMouseMove) {
        return this.panTool.handleMouseMove(event);
      }

      return true; // Consume event
    };

    this.handleGesture = function (event) {
      if (this.allowNav && this.panTool && this.panTool.handleGesture) {
        return this.panTool.handleGesture(event);
      }

      return true; // Consume event
    };

    this.handleBlur = function (event) {
      if (this.allowNav && this.panTool && this.panTool.handleBlur) {
        return this.panTool.handleBlur(event);
      }

      return true; // Consume event
    };
  }

  namespace.MarkupTool = MarkupTool;
})();

(function () {
  'use strict';

  var namespace = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core');
  var namespaceUtils = AutodeskNamespace('Autodesk.Viewing.Extensions.Markups.Core.Utils');
  /**
   * @class
   * Extension used to overlay 2d markups over 2d and 3d models.
   *
   * @tutorial feature_markup
   * @param {Autodesk.Viewing.Viewer3D} viewer - Viewer instance used to operate on.
   * @param {Object} options - Same Dictionary object passed into [Viewer3D]{@link Autodesk.Viewing.Viewer3D}'s constructor.
   * @param {Boolean} [options.markupBypassOrthoCam] - Whether orthographic camera is forced onto 3d models when calling
   * [show()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#show}.
   * @param {Boolean} [options.markupDisableHotkeys] - Disables hotkeys for copy, cut, paste, duplicate, undo, redo and deselect.
   * @param {Autodesk.Viewing.ToolInterface} [options.markupToolClass] - Class override for input handling.
   * Use it to override/extend default hotkeys and/or mouse/gesture input.
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   * @constructor
   */

  function MarkupsCore(viewer, options) {
    Autodesk.Viewing.Extension.call(this, viewer, options);
    this.options = this.options || {};
    this.markups = [];
    this.styles = {};
    this.duringViewMode = false;
    this.duringEditMode = false; // Add action manager.

    this.actionManager = new namespace.EditActionManager(50); // history of 50 actions.

    this.actionManager.addEventListener(namespace.EVENT_HISTORY_CHANGED, this.onEditActionHistoryChanged.bind(this));
    this.nextId = 0; // Used to identify markups by id during an edit session.
    // Clipboard.

    this.clipboard = new namespace.Clipboard(this); // Default Input handler.

    this.input = new namespace.InputHandler(); // Extension will dispatch events.

    namespaceUtils.addTraitEventDispatcher(this); // Handled events.

    this.onCameraChangeBinded = this.onCameraChange.bind(this);

    this.onViewerResizeBinded = function (event) {
      // This is ugly, but we need to do this twice
      var self = this; // First usage is to avoid a blinking scenario

      self.onViewerResize(event);
      requestAnimationFrame(function () {
        // Second one is to actually make it work on some resize scenarios.
        // Check the unlikely scenario that we are no longer in view mode.
        if (self.duringViewMode) {
          self.onViewerResize(event);
        }
      });
    }.bind(this);

    this.onMarkupDraggingBinded = this.onMarkupDragging.bind(this);
    this.onMarkupSelectedBinded = this.onMarkupSelected.bind(this);
    this.onMarkupEnterEditionBinded = this.onMarkupEnterEdition.bind(this);
    this.onMarkupCancelEditionBinded = this.onMarkupCancelEdition.bind(this);
    this.onMarkupDeleteEditionBinded = this.onMarkupDeleteEdition.bind(this);
  }

  MarkupsCore.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
  MarkupsCore.prototype.constructor = MarkupsCore;
  namespace.MarkupsCore = MarkupsCore;
  /*
   * Event types
   */

  namespace.EVENT_ENTER_EDIT_MODE = "EVENT_MARKUP_CORE_ENTER_EDIT_MODE";
  namespace.EVENT_LEAVE_EDIT_MODE = "EVENT_MARKUP_CORE_LEAVE_EDIT_MODE";
  namespace.EVENT_SELECTION_CHANGED = "EVENT_MARKUP_SELECTION_CHANGED";
  var proto = MarkupsCore.prototype;

  proto.load = function () {
    // Add layer where annotations will actually live
    var svg = this.svg = namespaceUtils.createSvgElement('svg');
    namespaceUtils.setSvgParentAttributes(svg); // NOTE: Required since LMV renders Y coordinates upwards,
    // while browser's Y coordinates goes downwards.

    var svgStyle = new namespaceUtils.DomElementStyle();
    svgStyle.setAttribute('position', 'absolute');
    svgStyle.setAttribute('left', '0');
    svgStyle.setAttribute('top', '0');
    svgStyle.setAttribute('transform', 'scale(1,-1)', {
      allBrowsers: true
    });
    svgStyle.setAttribute('transformOrigin', '0, 0', {
      allBrowsers: true
    });
    svgStyle.setAttribute('cursor', 'default');
    svg.setAttribute('style', svgStyle.getStyleString());
    this.bounds = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    this.input.attachTo(this); //Instantiate edit frame.

    this.editFrame = new namespace.EditFrame(this.viewer.container, this);
    this.editFrame.addEventListener(namespace.EVENT_EDITFRAME_EDITION_START, function () {
      this.disableMarkupInteractions(true);
    }.bind(this));
    this.editFrame.addEventListener(namespace.EVENT_EDITFRAME_EDITION_END, function () {
      this.disableMarkupInteractions(false);
    }.bind(this)); // Register tool

    var toolClass = this.options.markupToolClass || namespace.MarkupTool;
    this.markupTool = new toolClass();
    this.markupTool.setCoreExtension(this);
    this.markupTool.setHotkeysEnabled(!this.options.markupDisableHotkeys);
    this.viewer.toolController.registerTool(this.markupTool);
    return true;
  };

  proto.unload = function () {
    this.hide();
    this.input.detachFrom(this);

    if (this.markupTool) {
      this.viewer.toolController.deregisterTool(this.markupTool);
      this.markupTool = null;
    }

    var svg = this.svg;

    if (svg && this.onMouseDownBinded) {
      svg.removeEventListener("mousedown", this.onMouseDownBinded);
      this.onMouseDownBinded = null;
    }

    if (svg.parentNode) {
      svg.parentNode.removeChild(svg);
    }

    this.editModeSvgLayerNode = null;
    this.svg = null;
    return true;
  };

  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.toggleEditMode = function () {
    if (this.duringEditMode) {
      this.leaveEditMode();
    } else {
      this.enterEditMode();
    }
  };
  /**
   * Enables click/touch interactions over Viewer canvas to create/draw markups.<br>
   * Exit editMode by calling [leaveEditMode()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#leaveEditMode}.<br>
   * See also:
   * [show()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#show}
   * @returns {boolean} Returns true if editMode is active
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.enterEditMode = function () {
    // Return if already in edit mode.
    if (this.duringEditMode) {
      return true;
    } // If not currently shown, then show


    if (!this.duringViewMode) {
      if (!this.show()) {
        return false; // Failed to enter view mode.
      }
    }

    if (!this.editModeSvgLayerNode) {
      this.editModeSvgLayerNode = namespaceUtils.createSvgElement('g');
    }

    this.svg.insertBefore(this.editModeSvgLayerNode, this.svg.firstChild);
    this.input.enterEditMode();
    this.viewer.setActiveNavigationTool(this.markupTool.getName());
    this.allowNavigation(false);
    this.changeEditMode(new namespace.EditModeArrow(this));
    this.actionManager.clear();
    this.styles = {}; // Clear EditMode styles.

    this.duringEditMode = true;
    return true;
  };
  /**
   * Exits from editMode.<br>
   * See also [enterEditMode()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#enterEditMode}
   * @returns {boolean} returns true if edit mode has been deactivated
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.leaveEditMode = function () {
    var NOT_IN_EDIT_MODE = true;
    var WE_ARE_STILL_IN_EDIT_MODE = false;

    if (!this.duringEditMode || !this.duringViewMode) {
      return NOT_IN_EDIT_MODE;
    }

    var viewer = this.viewer;

    if (!viewer) {
      return WE_ARE_STILL_IN_EDIT_MODE; // something is very wrong...
    }

    this.svg.removeChild(this.editModeSvgLayerNode);
    this.input.leaveEditMode();
    this.editFrame.setMarkup(null);
    viewer.setActiveNavigationTool(this.markupTool.getName());
    this.allowNavigation(true);
    this.editMode.destroy();
    this.editMode = null;
    this.duringEditMode = false;
    return NOT_IN_EDIT_MODE;
  };

  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.toggle = function () {
    if (this.duringViewMode) {
      this.hide();
    } else {
      this.show();
    }
  };
  /**
   * Enables loading of previously saved markups.<br>
   * Exit editMode by calling [hide()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#hide}.<br>
   * See also:
   * [enterEditMode()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#enterEditMode}
   * @returns {boolean} Whether it successfully entered view mode or not.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.show = function () {
    var viewer = this.viewer;

    if (!viewer || !viewer.model) {
      return false;
    } // Return if already showing or in edit-mode.
    // Notice that edit mode requires that we are currently show()-ing.


    if (this.duringViewMode || this.duringEditMode) {
      return true;
    }

    viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChangeBinded);
    viewer.addEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onViewerResizeBinded); // Add parent svg of all markups.

    viewer.container.appendChild(this.svg);
    this.input.enterViewMode();
    namespaceUtils.hideLmvUi(viewer); // TODO: Nasty hack, currently there is no API to disable mouse highlighting in 3d models.
    // TODO: We nuke rollover function in viewer, for now, public api will be added soon.

    this.onViewerRolloverObject = viewer.impl.rolloverObject;

    viewer.impl.rolloverObject = function () {};

    if (!this.options.markupBypassOrthoCam) {
      namespaceUtils.forceOrthographicCamera(viewer);
    }

    this.cachedNavigationTool = this.viewer.getActiveNavigationTool();
    viewer.setActiveNavigationTool(this.markupTool.getName());
    this.allowNavigation(true);
    var camera = viewer.impl.camera;
    this.onViewerResize({
      width: camera.clientWidth,
      height: camera.clientHeight
    });
    this.clear(); // See function loadMarkups() for when the actual SVG gets added onstage //

    this.svgLayersMap = {};
    this.duringViewMode = true;
    return true;
  };
  /**
   * Removes any markup currently overlaid on the viewer. It will also exit EditMode if it is active.<br>
   * See also:
   * [show()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#show}
   * @returns {boolean} Whether it successfully left view mode or not.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.hide = function () {
    var RESULT_HIDE_OK = true;
    var RESULT_HIDE_FAIL = false;
    var viewer = this.viewer;

    if (!viewer || !this.duringViewMode) {
      return RESULT_HIDE_OK;
    }

    if (this.duringEditMode) {
      if (!this.leaveEditMode()) {
        return RESULT_HIDE_FAIL;
      }
    }

    viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChangeBinded);
    viewer.removeEventListener(Autodesk.Viewing.VIEWER_RESIZE_EVENT, this.onViewerResizeBinded);
    var svg = this.svg;
    svg.parentNode && svg.parentNode.removeChild(svg); // Remove all Markups and metadata (if any)

    this.unloadMarkupsAllLayers();
    namespaceUtils.removeAllMetadata(svg);
    this.input.leaveViewMode();
    namespaceUtils.restoreLmvUi(viewer);
    this.viewer.impl.rolloverObject = this.onViewerRolloverObject;
    this.viewer.setActiveNavigationTool(this.cachedNavigationTool);
    this.cachedNavigationTool = null;
    this.duringViewMode = false;
    return RESULT_HIDE_OK;
  };
  /**
   * Removes all markups from screen.<br>
   * Markups should have been added while in
   * [Edit Mode]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#enterEditMode}.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.clear = function () {
    var markups = this.markups;

    while (markups.length > 0) {
      var markup = markups[0];
      this.removeMarkup(markup);
      markup.destroy();
    } // At this point no other markups should be available.


    var svg = this.editModeSvgLayerNode;

    if (svg && svg.childNodes.length > 0) {
      while (svg.childNodes.length) {
        svg.removeChild(svg.childNodes[0]);
      }
    }
  };
  /**
   * Returns an SVG string with the markups created so far.<br>
   * Markups should have been added while in
   * [Edit Mode]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#enterEditMode}.
   * @returns {string}
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.generateData = function () {
    // Sanity check, remove any lingering metadata nodes
    namespaceUtils.removeAllMetadata(this.svg);
    var tmpNode = namespaceUtils.createSvgElement("svg");
    namespaceUtils.transferChildNodes(this.svg, tmpNode); // Transfer includes this.editModeSvgLayerNode

    namespaceUtils.transferChildNodes(this.editModeSvgLayerNode, this.svg);
    var metadataObject = {
      "data-model-version": "1"
    };
    var metadataNode = namespaceUtils.addSvgMetadata(this.svg, metadataObject);
    var metadataNodes = [metadataNode]; // Notify each markup to inject metadata

    this.markups.forEach(function (markup) {
      var addedNode = markup.setMetadata();

      if (addedNode) {
        metadataNodes.push(addedNode);
      }
    }); // Generate the data!

    var data = namespaceUtils.svgNodeToString(this.svg); // Remove metadataObject before returning

    metadataNodes.forEach(function (metadataNode) {
      metadataNode.parentNode.removeChild(metadataNode);
    });
    namespaceUtils.transferChildNodes(this.svg, this.editModeSvgLayerNode);
    namespaceUtils.transferChildNodes(tmpNode, this.svg);
    tmpNode = null; // get rid of it.

    return data;
  };
  /**
   * Renders markups currently present on the canvas to be rendered into a &lt;canvas&gt; 2d context.<br>
   * Internally, it will use each EditMode's renderToCanvas() api.<br>
   * The intended use-case is to generate an image.
   * @param {CanvasRenderingContext2D} context
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.renderToCanvas = function (context) {
    this.markups.forEach(function (markup) {
      context.save();
      markup.renderToCanvas(context);
      context.restore();
    });
  };
  /**
   * Changes the active drawing tool.<br>
   * Use this method to change from, for example: the Arrow drawing tool into the Rectangle drawing tool.<br>
   * Applicable only while in [Edit Mode]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#enterEditMode}.<br>
   * Fires EVENT_EDITMODE_CHANGED
   * @param editMode
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.changeEditMode = function (editMode) {
    var oldEditMode = this.editMode;
    oldEditMode && oldEditMode.destroy();
    editMode.addEventListener(namespace.EVENT_EDITMODE_CREATION_BEGIN, function () {
      this.disableMarkupInteractions(true);
    }.bind(this));
    editMode.addEventListener(namespace.EVENT_EDITMODE_CREATION_END, function () {
      this.disableMarkupInteractions(false);
    }.bind(this));
    editMode.addEventListener(namespace.EVENT_MARKUP_DESELECT, function (event) {
      this.fireEvent(event);
    }.bind(this));
    this.editMode = editMode;
    this.styles[editMode.type] = namespaceUtils.cloneStyle(editMode.getStyle());
    this.fireEvent({
      type: namespace.EVENT_EDITMODE_CHANGED,
      target: editMode
    });
  };
  /**
   * While in [Edit Mode]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#enterEditMode},
   * it switches the click/tap/swipe behavior to allow camera zoom and panning operations.
   *
   * @param {Boolean} allow - Whether camera navigation interactions are active or not.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.allowNavigation = function (allow) {
    var editMode = this.editMode;
    this.navigating = allow;

    if (allow) {
      this.svg.setAttribute("pointer-events", "none");
      editMode && this.selectMarkup(null);
    } else {
      this.svg.setAttribute("pointer-events", "painted");
    }

    this.markupTool.allowNavigation(allow);
    editMode && editMode.notifyAllowNavigation(allow);
  };
  /**
   * Sets mouse/tap interactions with all Markups present while in
   * [Edit Mode]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#enterEditMode}.
   * @param {Boolean} disable - Whether markups will interact with mouse/tap actions.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.disableMarkupInteractions = function (disable) {
    this.markups.forEach(function (markup) {
      markup.disableInteractions(disable);
    });
  }; //// Input /////////////////////////////////////////////////////////////////////////////////////////////////////////


  proto.changeInputHandler = function (inputHandler) {
    this.input.detachFrom(this);
    inputHandler.attachTo(this);
    this.input = inputHandler;

    if (this.duringEditMode) {
      inputHandler.enterEditMode();
    }

    if (this.duringViewMode) {
      inputHandler.enterViewMode();
    }
  }; //// Copy and Paste System /////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Standard copy operation. Applies to any selected Markup. It has effect only when a markup is selected.<br>
   * See also
   * [cut()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#cut} and
   * [paste()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#paste}.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.copy = function () {
    this.clipboard.copy();
  };
  /**
   * Standard cut operation. Applies to any selected Markup, which gets removed from screen at call time.<br>
   * See also
   * [copy()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#copy} and
   * [paste()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#paste}.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.cut = function () {
    this.clipboard.cut();
  };
  /**
   * Standard paste operation. Will paste add to stage any previously copied or cut markup.
   * Can be called repeatedly after after a single copy or cut operation.<br>
   * See also
   * [copy()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#copy} and
   * [cut()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#cut}.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.paste = function () {
    this.clipboard.paste();
  }; //// Undo and Redo System //////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Will undo the previous operation.<br>
   * The Undo/Redo stacks will track any change done through an EditAction.<br>
   * See also
   * [redo()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#redo},
   * [isUndoStackEmpty()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#isUndoStackEmpty}.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.undo = function () {
    this.actionManager.undo();
  };
  /**
   * Will redo and previously undo operation.<br>
   * See also
   * [undo()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#undo},
   * [isRedoStackEmpty()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#isRedoStackEmpty}.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.redo = function () {
    this.actionManager.redo();
  };
  /**
   * Returns true when [undo()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#undo}
   * will produce no changes.
   * @return {Boolean}
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.isUndoStackEmpty = function () {
    return this.actionManager.isUndoStackEmpty();
  };
  /**
   * Returns true when [redo()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#redo}
   * will produce no changes.
   * @return {Boolean}
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.isRedoStackEmpty = function () {
    return this.actionManager.isRedoStackEmpty();
  };

  proto.beginActionGroup = function () {
    this.actionManager.beginActionGroup();
  };

  proto.closeActionGroup = function () {
    this.actionManager.closeActionGroup();
  };

  proto.cancelActionGroup = function () {
    this.actionManager.cancelActionGroup();
  };
  /**
   * Helper function for generating unique markup ids.
   * @returns {number}
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.getId = function () {
    return ++this.nextId;
  };
  /**
   * @param event
   * @private
   */


  proto.onEditActionHistoryChanged = function (event) {
    var data = event.data;
    var editMode = this.editMode;
    var keepSelection = editMode && editMode.selectedMarkup && editMode.selectedMarkup.id === data.targetId;

    if (data.action !== 'undo' && data.targetId !== -1 || data.action === 'undo' && keepSelection) {
      // Markup can be null when deleting, that's ok, we unselect in that case.
      var markup = this.getMarkup(data.targetId);
      this.selectMarkup(markup);
    }

    this.fireEvent(event);
  };
  /**
   * Returns a markup with the specified id. Returns null when not found.<br>
   * See also:
   * [getSelection()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#getSelection}.
   * @param {String} id Markup identifier.
   * @returns {Autodesk.Viewing.Extensions.Markups.Core.Markup}
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.getMarkup = function (id) {
    var markups = this.markups;
    var markupsCount = markups.length;

    for (var i = 0; i < markupsCount; ++i) {
      if (markups[i].id == id) {
        return markups[i];
      }
    }

    return null;
  };
  /**
   * Selects a markup.  A selected markup gets an overlayed UI that allows transformations such
   * as resizing, rotations and translation.<br>
   * Allows sending null to remove selection from the currently selected markup.
   * See also:
   * [getMarkup()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#getMarkup}.
   * @param {Autodesk.Viewing.Extensions.Markups.Core.Markup|null} markup Markup instance to select, or null.
   */


  proto.selectMarkup = function (markup) {
    if (markup) {
      if (this.editMode.type === markup.type) {
        this.editMode.setSelection(markup);
      } else {
        var editMode = markup.getEditMode();
        editMode.setSelection(null);
        this.changeEditMode(editMode);
        this.setStyle(markup.getStyle());
        this.editMode.setSelection(markup);
      }
    } else {
      this.editMode.setSelection(null);
    }
  };
  /**
   * Returns the currently selected Markup.  A selected markup has custom UI overlayed that allows for
   * resizing, rotation and translation.<br>
   * See also:
   * [selectMarkup()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#selectMarkup}.
   * @returns {Autodesk.Viewing.Extensions.Markups.Core.Markup|null}
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.getSelection = function () {
    return this.editMode.getSelection();
  };
  /**
   * Deletes a markup from the scene. Applies only while in
   * [Edit Mode]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#enterEditMode}.
   * @param {Autodesk.Viewing.Extensions.Markups.Core.Markup} markup
   * @param {Boolean} [dontAddToHistory] Whether delete action can be [undone]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#undo}.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.deleteMarkup = function (markup, dontAddToHistory) {
    var editMode = markup.getEditMode();
    editMode.deleteMarkup(markup, dontAddToHistory);
  };

  proto.addMarkup = function (markup) {
    markup.setParent(this.editModeSvgLayerNode);
    markup.addEventListener(namespace.EVENT_MARKUP_SELECTED, this.onMarkupSelectedBinded);
    markup.addEventListener(namespace.EVENT_MARKUP_DRAGGING, this.onMarkupDraggingBinded);
    markup.addEventListener(namespace.EVENT_MARKUP_ENTER_EDITION, this.onMarkupEnterEditionBinded);
    markup.addEventListener(namespace.EVENT_MARKUP_CANCEL_EDITION, this.onMarkupCancelEditionBinded);
    markup.addEventListener(namespace.EVENT_MARKUP_DELETE_EDITION, this.onMarkupDeleteEditionBinded);
    this.markups.push(markup);
  };
  /**
   *
   * @param markup
   * @private
   */


  proto.removeMarkup = function (markup) {
    markup.setParent(null);
    markup.removeEventListener(namespace.EVENT_MARKUP_SELECTED, this.onMarkupSelectedBinded);
    markup.removeEventListener(namespace.EVENT_MARKUP_DRAGGING, this.onMarkupDraggingBinded);
    markup.removeEventListener(namespace.EVENT_MARKUP_ENTER_EDITION, this.onMarkupEnterEditionBinded);
    markup.removeEventListener(namespace.EVENT_MARKUP_CANCEL_EDITION, this.onMarkupCancelEditionBinded);
    markup.removeEventListener(namespace.EVENT_MARKUP_DELETE_EDITION, this.onMarkupDeleteEditionBinded);
    var markups = this.markups;
    var markupsIndex = markups.indexOf(markup);

    if (markupsIndex !== -1) {
      markups.splice(markupsIndex, 1);
    }

    var editMode = this.editMode;

    if (editMode) {
      var selectedMarkup = editMode.getSelection();

      if (selectedMarkup === markup) {
        this.selectMarkup(null);
      }
    }
  }; //// Markups style /////////////////////////////////////////////////////////////////////////////////////////////////


  proto.setStyle = function (style) {
    var styles = this.styles;
    var editMode = this.editMode;
    namespaceUtils.copyStyle(style, styles[editMode.type]);
    editMode.setStyle(styles[editMode.type]);
  };

  proto.getStyle = function () {
    return namespaceUtils.cloneStyle(this.styles[this.editMode.type]);
  }; //// Markups depth order ///////////////////////////////////////////////////////////////////////////////////////////

  /**
   *
   * @param markup
   */


  proto.bringToFront = function (markup) {
    this.sendMarkupTo(markup, this.markups.length - 1);
  };
  /**
   *
   * @param markup
   */


  proto.sendToBack = function (markup) {
    this.sendMarkupTo(markup, 0);
  };
  /**
   *
   * @param markup
   */


  proto.bringForward = function (markup) {
    var markupIndex = this.markups.indexOf(markup);
    this.sendMarkupTo(markup, markupIndex + 1);
  };
  /**
   *
   * @param markup
   */


  proto.bringBackward = function (markup) {
    var markupIndex = this.markups.indexOf(markup);
    this.sendMarkupTo(markup, markupIndex - 1);
  };
  /**
   *
   * @param markup
   * @param index
   * @private
   */


  proto.sendMarkupTo = function (markup, index) {
    var markups = this.markups;
    var markupIndex = markups.indexOf(markup);

    if (markupIndex !== -1 || index < 0 || index >= markups.length) {
      return;
    }

    markups.splice(markupIndex, 1);
    index = markupIndex > index ? index - 1 : index;
    markups.splice(index, 0, markup); // TODO: Add markup in right position not always at the end.

    markup.setParent(null);
    markup.setParent(this.editModeSvgLayerNode);
  }; //// Serialization and Restoration of Markups  /////////////////////////////////////////////////////////////////////

  /**
   * Overlays Markup data (SVG string) onto viewer's canvas. A layerId is required to group markups and reference
   * them in operations such as
   * [hideMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#hideMarkups}.<br>
   *
   * See also:
   * [unloadMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#unloadMarkups},
   * [hideMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#hideMarkups}.
   *
   * @param {String} markupString - svg string with markups. See also [generateData()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#generateData}.
   * @param {String} layerId - Identifier for the layer where the markup should be loaded to. Example "Layer1".
   * @return {Boolean} Whether the markup string was able to be loaded successfully
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.loadMarkups = function (markupString, layerId) {
    if (!this.duringViewMode) {
      return false;
    }

    if (!layerId) {
      console.warn("loadMarkups failed; missing 2nd argument 'layerId'");
      return false;
    } // Can it be parsed into SVG?


    var parent = namespaceUtils.stringToSvgNode(markupString);

    if (!parent) {
      return false;
    } // Remove all metadata nodes


    namespaceUtils.removeAllMetadata(parent); // Create svg node for layer (if not present)

    var svgLayerNode = this.svgLayersMap[layerId];

    if (!svgLayerNode) {
      svgLayerNode = namespaceUtils.createSvgElement('g');
      this.svg.appendChild(svgLayerNode);
      this.svgLayersMap[layerId] = svgLayerNode;
    }

    var children = parent.childNodes;

    while (children.length) {
      svgLayerNode.appendChild(children[0]);
    }

    return true;
  };
  /**
   * Removes Markups from DOM, which is good to free up some memory.<br>
   *
   * See also:
   * [loadMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#loadMarkups},
   * [unloadMarkupsAllLayers()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#unloadMarkupsAllLayers}.
   *
   * @param {String} layerId - Id of the layer containing all markups to unload (from DOM).
   * @return {Boolean} Whether the operation succeeded or not.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.unloadMarkups = function (layerId) {
    if (!layerId) {
      console.warn("unloadMarkups failed; No layerId provided.");
      return false;
    }

    var svgLayerNode = this.svgLayersMap[layerId];

    if (!svgLayerNode) {
      // TODO: Do we need to log anything here?
      return false;
    }

    this.svg.removeChild(svgLayerNode);
    delete this.svgLayersMap[layerId];
    return true;
  };
  /**
   * Unload all markups loaded so far. Great for freeing up memory.
   *
   * See also:
   * [loadMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#loadMarkups},
   * [unloadMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#unloadMarkups}.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.unloadMarkupsAllLayers = function () {
    for (var layerId in this.svgLayersMap) {
      if (this.svgLayersMap.hasOwnProperty(layerId)) {
        this.svg.removeChild(this.svgLayersMap[layerId]);
      }
    }

    this.svgLayersMap = {};
  };
  /**
   * Hides all markups from a specified layer. Note that markups will be hidden and not unloaded,
   * thus memory will still be consumed to keep them around. However, no additional parsing is required
   * to make them visible again through method
   * [showMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#showMarkups}.
   *
   * See also:
   * [showMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#showMarkups},
   * [unloadMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#unloadMarkups},
   * [loadMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#loadMarkups}.
   *
   * @param {String} layerId - Id of the layer containing all markups to unload (from DOM).
   * @return {Boolean} Whether the operation succeeded or not.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.hideMarkups = function (layerId) {
    if (!layerId) {
      console.warn("hideMarkups failed; No layerId provided.");
      return false;
    }

    var svgLayerNode = this.svgLayersMap[layerId];

    if (!svgLayerNode) {
      // TODO: Do we need to log anything here?
      return false;
    }

    svgLayerNode.setAttribute("visibility", "hidden");
  };
  /**
   * Sets a layer containing markups visible again.  Markups can be set non-visible by calling
   * [hideMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#hideMarkups}.
   *
   * See also:
   * [hideMarkups()]{@link Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore#hideMarkups}.
   *
   * @param {String} layerId - Id of the layer containing all markups to unload (from DOM).
   * @return {Boolean} Whether the operation succeeded or not.
   */


  Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore.prototype.showMarkups = function (layerId) {
    if (!layerId) {
      console.warn("showMarkups failed; No layerId provided.");
      return false;
    }

    var svgLayerNode = this.svgLayersMap[layerId];

    if (!svgLayerNode) {
      // TODO: Do we need to log anything here?
      return false;
    }

    svgLayerNode.setAttribute("visibility", "visible");
  }; //// Client Space <-> Markup Space /////////////////////////////////////////////////////////////////////////////////


  proto.positionFromClientToMarkups = function (x, y) {
    return this.clientToMarkups(x, y);
  };

  proto.positionFromMarkupsToClient = function (x, y) {
    return this.markupsToClient(x, y);
  };

  proto.sizeFromClientToMarkups = function (w, h) {
    var a = this.clientToMarkups(0, 0);
    var b = this.clientToMarkups(w, h);
    return {
      x: Math.abs(b.x - a.x),
      y: Math.abs(b.y - a.y)
    };
  };

  proto.sizeFromMarkupsToClient = function (w, h) {
    var a = this.markupsToClient(0, 0);
    var b = this.markupsToClient(w, h);
    return {
      x: Math.abs(b.x - a.x),
      y: Math.abs(b.y - a.y)
    };
  };

  proto.markupsToClient = function (x, y) {
    var point = new THREE.Vector3(x, y, 0);
    var camera = this.viewer.impl.camera;
    point.applyMatrix4(camera.matrixWorld);
    point.sub(camera.position);
    point = namespaceUtils.worldToClient(point, this.viewer, false);
    return point;
  };

  proto.clientToMarkups = function (x, y) {
    var point = namespaceUtils.clientToWorld(x, y, 0, this.viewer);
    var camera = this.viewer.impl.camera;
    point.add(camera.position).applyMatrix4(camera.matrixWorldInverse);
    point.z = 0;
    return point;
  };

  proto.getSvgViewBox = function (clientWidth, clientHeight) {
    // Get pan offset.
    var lt = this.clientToMarkups(0, 0);
    var rb = this.clientToMarkups(clientWidth, clientHeight);
    var l = Math.min(lt.x, rb.x);
    var t = Math.min(lt.y, rb.y);
    var r = Math.max(lt.x, rb.x);
    var b = Math.max(lt.y, rb.y);
    return [l, t, r - l, b - t].join(' ');
  };

  proto.getBounds = function () {
    return this.bounds;
  };

  proto.getMousePosition = function () {
    return this.input.getMousePosition();
  }; //// Handled Events ////////////////////////////////////////////////////////////////////////////////////////////////


  proto.onCameraChange = function (event) {
    // Update annotations' parent transform.
    var viewBox = this.getSvgViewBox(this.bounds.width, this.bounds.height); // HACK, for some reason the 2nd frame returns an empty canvas.
    // The reason why this happens is that the code above calls into the viewer
    // and a division by zero occurs due to LMV canvas having zero width and height
    // When we detect this case, avoid setting the viewBox value and rely on one
    // previously set.

    if (viewBox === "NaN NaN NaN NaN") {
      return;
    }

    this.svg.setAttribute('viewBox', viewBox); // Edit frame has to be updated, re-setting the selected markup does the job.

    var editMode = this.editMode;

    if (editMode) {
      var selectedMarkup = editMode.getSelection();
      this.editFrame.setMarkup(selectedMarkup);
    }
  };

  proto.onViewerResize = function (event) {
    this.bounds.x = 0;
    this.bounds.y = 0;
    this.bounds.width = event.width;
    this.bounds.height = event.height;
    this.svg.setAttribute('width', this.bounds.width);
    this.svg.setAttribute('height', this.bounds.height);
    this.onCameraChange();
  };
  /**
   * Handler to mouse move events, used to create markups.
   * @private
   */


  proto.onMouseMove = function () {
    if (this.navigating) {
      return;
    } // Propagate event to edit frame.


    if (this.editFrame.isActive()) {
      this.editFrame.onMouseMove();
      return;
    }

    this.editMode && this.editMode.onMouseMove();
  };
  /**
   * Handler to mouse down events, used to start creation markups.
   * @private
   */


  proto.onMouseDown = function (event) {
    if (this.navigating) {
      return;
    }

    namespaceUtils.dismissLmvHudMessage();
    var bounds = this.getBounds();
    var mousePosition = this.getMousePosition();

    if (mousePosition.x >= bounds.x && mousePosition.x <= bounds.x + bounds.width && mousePosition.y >= bounds.y && mousePosition.y <= bounds.y + bounds.height) {
      this.editMode.onMouseDown();
    } // TODO: There is a better way to do this, implement when undo/redo group.


    if (!this.editMode.creating && event.target === this.svg) {
      this.selectMarkup(null);
    }

    this.ignoreNextMouseUp = false;
  };

  proto.onMouseUp = function () {
    if (this.navigating) {
      return;
    }

    if (this.editFrame.isActive()) {
      this.editFrame.onMouseUp();
      return;
    }

    if (!this.ignoreNextMouseUp) {
      this.editMode.onMouseUp();
    }
  };
  /**
   *
   * @param event
   */


  proto.onMarkupSelected = function (event) {
    this.selectMarkup(event.markup);
    this.fireEvent(event);
  }; // TODO: Check if these events are still relevant.


  proto.onMarkupDragging = function (event) {
    if (event.dragging) {
      this.editMode.startDragging();
    } else {
      this.editMode.finishDragging();
    }
  };

  proto.onMarkupEnterEdition = function (event) {};

  proto.onMarkupCancelEdition = function (event) {
    this.editMode.unselect();
  };

  proto.onMarkupDeleteEdition = function (event) {
    this.removeMarkup(event.markup);
    this.editMode.deleteMarkup();
  };

  Autodesk.Viewing.theExtensionManager.registerExtension('Autodesk.Viewing.MarkupsCore', MarkupsCore);
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param id
   * @param markup
   * @param position
   * @constructor
   */

  function CloneMarkup(editor, id, markup, position) {
    namespace.EditAction.call(this, editor, 'CLONE-MARKUP', id);
    this.clone = markup.clone();
    this.clone.id = id;
    this.position = {
      x: position.x,
      y: position.y
    };
  }

  CloneMarkup.prototype = Object.create(namespace.EditAction.prototype);
  CloneMarkup.prototype.constructor = CloneMarkup;
  var proto = CloneMarkup.prototype;

  proto.redo = function () {
    var editor = this.editor;
    var clone = this.clone;
    var position = this.position;

    if (editor.getMarkup(this.targetId)) {
      return;
    }

    var markup = clone.clone();
    markup.setPosition(position.x, position.y);
    editor.addMarkup(markup);
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && this.editor.removeMarkup(markup);
  };

  namespace.CloneMarkup = CloneMarkup;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * @constructor
   */

  function CreateArrow(editor, id, head, tail, style) {
    namespace.EditAction.call(this, editor, 'CREATE-ARROW', id);
    this.selectOnExecution = false;
    this.tail = tail;
    this.head = head;
    this.style = namespaceUtils.cloneStyle(style);
  }

  CreateArrow.prototype = Object.create(namespace.EditAction.prototype);
  CreateArrow.prototype.constructor = CreateArrow;
  var proto = CreateArrow.prototype;

  proto.redo = function () {
    var editor = this.editor;
    var arrow = new namespace.MarkupArrow(this.targetId, editor);
    editor.addMarkup(arrow);
    arrow.set(this.head.x, this.head.y, this.tail.x, this.tail.y);
    arrow.setStyle(this.style);
    arrow.created();
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && this.editor.removeMarkup(markup);
  };

  namespace.CreateArrow = CreateArrow;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * @class
   * Implements an [EditAction]{@link Autodesk.Viewing.Extensions.Markups.Core.EditAction}
   * for creating a Circle [Markup]{@link Autodesk.Viewing.Extensions.Markups.Core.Markup}.
   * Included in documentation as an example of how to create
   * a specific EditAction that deals with Markup creation.
   * Developers are encourage to look into this class's source code and copy
   * as much code as they need. Find link to source code below.
   *
   * @tutorial feature_markup
   * @constructor
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   * @extends Autodesk.Viewing.Extensions.Markups.Core.EditAction
   *
   * @param editor
   * @param id
   * @param position
   * @param size
   * @param rotation
   * @param style
   */

  function CreateCircle(editor, id, position, size, rotation, style) {
    namespace.EditAction.call(this, editor, 'CREATE-CIRCLE', id);
    this.selectOnExecution = false;
    this.position = {
      x: position.x,
      y: position.y
    };
    this.size = {
      x: size.x,
      y: size.y
    };
    this.rotation = rotation;
    this.style = namespaceUtils.cloneStyle(style);
  }

  CreateCircle.prototype = Object.create(namespace.EditAction.prototype);
  CreateCircle.prototype.constructor = CreateCircle;
  var proto = CreateCircle.prototype;

  proto.redo = function () {
    var editor = this.editor;
    var circle = new namespace.MarkupCircle(this.targetId, editor);
    editor.addMarkup(circle);
    circle.set(this.position, this.size);
    circle.setRotation(this.rotation);
    circle.setStyle(this.style);
    circle.created();
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && this.editor.removeMarkup(markup);
  };

  namespace.CreateCircle = CreateCircle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param editor
   * @param id
   * @param position
   * @param size
   * @param rotation
   * @param style
   * @constructor
   */

  function CreateCloud(editor, id, position, size, rotation, style) {
    namespace.EditAction.call(this, editor, 'CREATE-CLOUD', id);
    this.selectOnExecution = false;
    this.position = {
      x: position.x,
      y: position.y
    };
    this.size = {
      x: size.x,
      y: size.y
    };
    this.rotation = rotation;
    this.style = namespaceUtils.cloneStyle(style);
  }

  CreateCloud.prototype = Object.create(namespace.EditAction.prototype);
  CreateCloud.prototype.constructor = CreateCloud;
  var proto = CreateCloud.prototype;

  proto.redo = function () {
    var editor = this.editor;
    var cloud = new namespace.MarkupCloud(this.targetId, editor);
    editor.addMarkup(cloud);
    cloud.set(this.position, this.size);
    cloud.setRotation(this.rotation);
    cloud.setStyle(this.style);
    cloud.created();
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && this.editor.removeMarkup(markup);
  };

  namespace.CreateCloud = CreateCloud;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param editor
   * @param id
   * @param position
   * @param size
   * @param rotation
   * @param locations
   * @param style
   * @constructor
   */

  function CreateFreehand(editor, id, position, size, rotation, locations, style) {
    namespace.EditAction.call(this, editor, 'CREATE-FREEHAND', id);
    this.selectOnExecution = false;
    this.position = position;
    this.size = size;
    this.rotation = rotation;
    this.movements = locations.concat();
    this.style = namespaceUtils.cloneStyle(style);
  }

  CreateFreehand.prototype = Object.create(namespace.EditAction.prototype);
  CreateFreehand.prototype.constructor = CreateFreehand;
  var proto = CreateFreehand.prototype;

  proto.redo = function () {
    var editor = this.editor;
    var freehand = new namespace.MarkupFreehand(this.targetId, editor);
    editor.addMarkup(freehand);
    freehand.set(this.position, this.size, this.movements);
    freehand.setRotation(this.rotation);
    freehand.setStyle(this.style);
    freehand.created();
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && this.editor.removeMarkup(markup);
  };

  namespace.CreateFreehand = CreateFreehand;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param editor
   * @param id
   * @param position
   * @param size
   * @param rotation
   * @param style
   * @constructor
   */

  function CreateRectangle(editor, id, position, size, rotation, style) {
    namespace.EditAction.call(this, editor, 'CREATE-RECTANGLE', id);
    this.selectOnExecution = false;
    this.position = {
      x: position.x,
      y: position.y
    };
    this.size = {
      x: size.x,
      y: size.y
    };
    this.rotation = rotation;
    this.style = namespaceUtils.cloneStyle(style);
  }

  CreateRectangle.prototype = Object.create(namespace.EditAction.prototype);
  CreateRectangle.prototype.constructor = CreateRectangle;
  var proto = CreateRectangle.prototype;

  proto.redo = function () {
    var editor = this.editor;
    var rectangle = new namespace.MarkupRectangle(this.targetId, editor);
    editor.addMarkup(rectangle);
    rectangle.set(this.position, this.size);
    rectangle.setRotation(this.rotation);
    rectangle.setStyle(this.style);
    rectangle.created();
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && this.editor.removeMarkup(markup);
  };

  namespace.CreateRectangle = CreateRectangle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param editor
   * @param id
   * @param position
   * @param size
   * @param text
   * @param style
   * @constructor
   */

  function CreateText(editor, id, position, size, text, style) {
    namespace.EditAction.call(this, editor, 'CREATE-TEXT', id);
    this.text = text;
    this.position = {
      x: position.x,
      y: position.y
    };
    this.size = {
      x: size.x,
      y: size.y
    };
    this.style = namespaceUtils.cloneStyle(style);
  }

  CreateText.prototype = Object.create(namespace.EditAction.prototype);
  CreateText.prototype.constructor = CreateText;
  var proto = CreateText.prototype;

  proto.redo = function () {
    var editor = this.editor;
    var position = this.position;
    var size = this.size;
    var text = new namespace.MarkupText(this.targetId, editor, size);
    editor.addMarkup(text);
    text.setSize(position, size.x, size.y);
    text.setText(this.text);
    text.setStyle(this.style);
    text.forceRedraw();
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);

    if (markup) {
      this.editor.removeMarkup(markup);
      markup.destroy();
    }
  };

  namespace.CreateText = CreateText;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param arrow
   * @constructor
   */

  function DeleteArrow(editor, arrow) {
    namespace.EditAction.call(this, editor, 'DELETE-ARROW', arrow.id);
    this.createArrow = new namespace.CreateArrow(editor, arrow.id, arrow.head, arrow.tail, arrow.getStyle());
  }

  DeleteArrow.prototype = Object.create(namespace.EditAction.prototype);
  DeleteArrow.prototype.constructor = DeleteArrow;
  var proto = DeleteArrow.prototype;

  proto.redo = function () {
    this.createArrow.undo();
  };

  proto.undo = function () {
    this.createArrow.redo();
  };

  namespace.DeleteArrow = DeleteArrow;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   * @class
   * Implements an [EditAction]{@link Autodesk.Viewing.Extensions.Markups.Core.EditAction}
   * for deleting a Circle [Markup]{@link Autodesk.Viewing.Extensions.Markups.Core.Markup}.
   * Included in documentation as an example of how to create
   * a specific EditAction that deals with Markup deletion.
   * Developers are encourage to look into this class's source code and copy
   * as much code as they need. Find link to source code below.
   *
   * @tutorial feature_markup
   * @constructor
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   * @extends Autodesk.Viewing.Extensions.Markups.Core.EditAction
   *
   * @param editor
   * @param circle
   */

  function DeleteCircle(editor, circle) {
    namespace.EditAction.call(this, editor, 'DELETE-CIRCLE', circle.id);
    this.createCircle = new namespace.CreateCircle(editor, circle.id, circle.position, circle.size, circle.rotation, circle.getStyle());
  }

  DeleteCircle.prototype = Object.create(namespace.EditAction.prototype);
  DeleteCircle.prototype.constructor = DeleteCircle;
  var proto = DeleteCircle.prototype;

  proto.redo = function () {
    this.createCircle.undo();
  };

  proto.undo = function () {
    this.createCircle.redo();
  };

  namespace.DeleteCircle = DeleteCircle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param cloud
   * @constructor
   */

  function DeleteCloud(editor, cloud) {
    namespace.EditAction.call(this, editor, 'DELETE-CLOUD', cloud.id);
    this.createCloud = new namespace.CreateCloud(editor, cloud.id, cloud.position, cloud.size, cloud.rotation, cloud.getStyle());
  }

  DeleteCloud.prototype = Object.create(namespace.EditAction.prototype);
  DeleteCloud.prototype.constructor = DeleteCloud;
  var proto = DeleteCloud.prototype;

  proto.redo = function () {
    this.createCloud.undo();
  };

  proto.undo = function () {
    this.createCloud.redo();
  };

  namespace.DeleteCloud = DeleteCloud;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param freehand
   * @constructor
   */

  function DeleteFreehand(editor, freehand) {
    namespace.EditAction.call(this, editor, 'DELETE-FREEHAND', freehand.id);
    this.createFreehand = new namespace.CreateFreehand(editor, freehand.id, freehand.position, freehand.size, freehand.rotation, freehand.locations, freehand.getStyle());
  }

  DeleteFreehand.prototype = Object.create(namespace.EditAction.prototype);
  DeleteFreehand.prototype.constructor = DeleteFreehand;
  var proto = DeleteFreehand.prototype;

  proto.redo = function () {
    this.createFreehand.undo();
  };

  proto.undo = function () {
    this.createFreehand.redo();
  };

  namespace.DeleteFreehand = DeleteFreehand;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param rectangle
   * @constructor
   */

  var DeleteRectangle = function DeleteRectangle(editor, rectangle) {
    namespace.EditAction.call(this, editor, 'DELETE-RECTANGLE', rectangle.id);
    this.createRectangle = new namespace.CreateRectangle(editor, rectangle.id, rectangle.position, rectangle.size, rectangle.rotation, rectangle.getStyle());
  };

  DeleteRectangle.prototype = Object.create(namespace.EditAction.prototype);
  DeleteRectangle.prototype.constructor = DeleteRectangle;
  var proto = DeleteRectangle.prototype;

  proto.redo = function () {
    this.createRectangle.undo();
  };

  proto.undo = function () {
    this.createRectangle.redo();
  };

  namespace.DeleteRectangle = DeleteRectangle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param text
   * @constructor
   */

  function DeleteText(editor, text) {
    namespace.EditAction.call(this, editor, 'DELETE-TEXT', text.id);
    var position = {
      x: text.position.x,
      y: text.position.y
    };
    var size = {
      x: text.size.x,
      y: text.size.y
    };
    this.createText = new namespace.CreateText(editor, text.id, position, size, text.getText(), text.getStyle());
  }

  DeleteText.prototype = Object.create(namespace.EditAction.prototype);
  DeleteText.prototype.constructor = DeleteText;
  var proto = DeleteText.prototype;

  proto.redo = function () {
    this.createText.undo();
  };

  proto.undo = function () {
    this.createText.redo();
  };

  namespace.DeleteText = DeleteText;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   * This class will group actions edit actions that should be executed as a whole.
   * When a group is open actions can be added to it, similar actions will be merged into one during this process.
   * This class is not intended to be used by users, it's a helper class of EditActionManager.
   * @constructor
   */

  function EditActionGroup() {
    this.actions = [];
    this.closed = true;
  }

  var proto = EditActionGroup.prototype;
  /**
   *
   * @returns {boolean}
   */

  proto.open = function () {
    if (!this.closed) {
      return false;
    }

    this.closed = false;
    return true;
  };
  /**
   *
   * @returns {boolean}
   */


  proto.close = function () {
    if (this.closed) {
      return false;
    }

    this.closed = true;
    return true;
  };
  /**
   *
   * @returns {number} targetId
   */


  proto.undo = function () {
    var actions = this.actions;
    var actionsMaxIndex = actions.length - 1;
    var targetId = -1;

    for (var i = actionsMaxIndex; i >= 0; --i) {
      var action = actions[i];
      action.undo();

      if (action.targetId !== -1) {
        targetId = action.targetId;
      }
    }

    return targetId;
  };
  /**
   *
   * @returns {number} targetId
   */


  proto.redo = function () {
    var actions = this.actions;
    var actionsCount = actions.length;
    var targetId = -1;

    for (var i = 0; i < actionsCount; ++i) {
      var action = actions[i];
      action.redo();

      if (action.targetId !== -1) {
        targetId = action.targetId;
      }
    }

    return targetId;
  };
  /**
   *
   * @returns {boolean}
   */


  proto.isOpen = function () {
    return !this.closed;
  };
  /**
   *
   * @returns {boolean}
   */


  proto.isClosed = function () {
    return this.closed;
  };
  /**
   *
   * @returns {boolean}
   */


  proto.isEmpty = function () {
    return this.actions.length === 0;
  };
  /**
   *
   * @param {EditAction} action
   */


  proto.addAction = function (action) {
    if (this.closed) {
      return false;
    }

    this.actions.push(action);
    this.compact();
    return true;
  };
  /**
   * @private
   */


  proto.compact = function () {
    var actions = this.actions;
    var actionsCount = actions.length;

    for (var i = 0; i < actionsCount; ++i) {
      // If an action does nothing, remove it.
      var actionA = actions[i];

      if (actionA.isIdentity()) {
        actions.splice(i, 1);
        --actionsCount;
        --i;
        continue;
      } // If an action can be merged, merge it.


      for (var j = i + 1; j < actionsCount; ++j) {
        var actionB = actions[j];

        if (actionA.type === actionB.type && actionA.merge(actionB)) {
          actions.splice(j, 1);
          --actionsCount;
          --i;
          break;
        }
      }
    }
  };

  namespace.EditActionGroup = EditActionGroup;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param arrow
   * @param head
   * @param tail
   * @constructor
   */

  function SetArrow(editor, arrow, head, tail) {
    namespace.EditAction.call(this, editor, 'SET-ARROW', arrow.id);
    this.newHead = {
      x: head.x,
      y: head.y
    };
    this.newTail = {
      x: tail.x,
      y: tail.y
    };
    this.oldHead = {
      x: arrow.head.x,
      y: arrow.head.y
    };
    this.oldTail = {
      x: arrow.tail.x,
      y: arrow.tail.y
    };
  }

  SetArrow.prototype = Object.create(namespace.EditAction.prototype);
  SetArrow.prototype.constructor = SetArrow;
  var proto = SetArrow.prototype;

  proto.redo = function () {
    this.applyState(this.targetId, this.newHead, this.newTail);
  };

  proto.undo = function () {
    this.applyState(this.targetId, this.oldHead, this.oldTail);
  };

  proto.merge = function (action) {
    if (this.targetId === action.targetId && this.type === action.type) {
      this.newHead = action.newHead;
      this.newTail = action.newTail;
      return true;
    }

    return false;
  };
  /**
   *
   * @private
   */


  proto.applyState = function (targetId, head, tail) {
    var arrow = this.editor.getMarkup(targetId);

    if (!arrow) {
      return;
    } // Different stroke widths make positions differ at sub-pixel level.


    var epsilon = 0.0001;

    if (Math.abs(arrow.head.x - head.x) >= epsilon || Math.abs(arrow.head.y - head.y) >= epsilon || Math.abs(arrow.tail.x - tail.x) >= epsilon || Math.abs(arrow.tail.y - tail.y) >= epsilon) {
      arrow.set(head.x, head.y, tail.x, tail.y);
    }
  };
  /**
   * @returns {boolean}
   */


  proto.isIdentity = function () {
    return this.newHead.x === this.oldHead.x && this.newHead.y === this.oldHead.y && this.newTail.x === this.oldTail.x && this.newTail.y === this.oldTail.y;
  };

  namespace.SetArrow = SetArrow;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   * @class
   * Implements an [EditAction]{@link Autodesk.Viewing.Extensions.Markups.Core.EditAction}
   * for editing properties of a Circle [Markup]{@link Autodesk.Viewing.Extensions.Markups.Core.Markup}.
   * Included in documentation as an example of how to create
   * a specific EditAction that deals with Markup edition.
   * Developers are encourage to look into this class's source code and copy
   * as much code as they need. Find link to source code below.
   *
   * @tutorial feature_markup
   * @constructor
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   * @extends Autodesk.Viewing.Extensions.Markups.Core.EditAction
   *
   * @param editor
   * @param circle
   * @param position
   * @param size
   */

  function SetCircle(editor, circle, position, size) {
    namespace.EditAction.call(this, editor, 'SET-CIRCLE', circle.id);
    this.newPosition = {
      x: position.x,
      y: position.y
    };
    this.newSize = {
      x: size.x,
      y: size.y
    };
    this.oldPosition = {
      x: circle.position.x,
      y: circle.position.y
    };
    this.oldSize = {
      x: circle.size.x,
      y: circle.size.y
    };
  }

  SetCircle.prototype = Object.create(namespace.EditAction.prototype);
  SetCircle.prototype.constructor = SetCircle;
  var proto = SetCircle.prototype;

  proto.redo = function () {
    this.applyState(this.targetId, this.newPosition, this.newSize);
  };

  proto.undo = function () {
    this.applyState(this.targetId, this.oldPosition, this.oldSize);
  };

  proto.merge = function (action) {
    if (this.targetId === action.targetId && this.type === action.type) {
      this.newPosition = action.newPosition;
      this.newSize = action.newSize;
      return true;
    }

    return false;
  };
  /**
   *
   * @private
   */


  proto.applyState = function (targetId, position, size) {
    var circle = this.editor.getMarkup(targetId);

    if (!circle) {
      return;
    } // Different stroke widths make positions differ at sub-pixel level.


    var epsilon = 0.0001;

    if (Math.abs(circle.position.x - position.x) > epsilon || Math.abs(circle.size.y - size.y) > epsilon || Math.abs(circle.position.y - position.y) > epsilon || Math.abs(circle.size.y - size.y) > epsilon) {
      circle.set(position, size);
    }
  };
  /**
   * @returns {boolean}
   */


  proto.isIdentity = function () {
    return this.newPosition.x === this.oldPosition.x && this.newPosition.y === this.oldPosition.y && this.newSize.x === this.oldSize.x && this.newSize.y === this.oldSize.y;
  };

  namespace.SetCircle = SetCircle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param cloud
   * @param position
   * @param size
   * @constructor
   */

  function SetCloud(editor, cloud, position, size) {
    namespace.EditAction.call(this, editor, 'SET-CLOUD', cloud.id);
    this.newPosition = {
      x: position.x,
      y: position.y
    };
    this.newSize = {
      x: size.x,
      y: size.y
    };
    this.oldPosition = {
      x: cloud.position.x,
      y: cloud.position.y
    };
    this.oldSize = {
      x: cloud.size.x,
      y: cloud.size.y
    };
  }

  SetCloud.prototype = Object.create(namespace.EditAction.prototype);
  SetCloud.prototype.constructor = SetCloud;
  var proto = SetCloud.prototype;

  proto.redo = function () {
    this.applyState(this.targetId, this.newPosition, this.newSize, this.newStrokeWidth, this.newColor);
  };

  proto.undo = function () {
    this.applyState(this.targetId, this.oldPosition, this.oldSize, this.oldStrokeWidth, this.oldColor);
  };

  proto.merge = function (action) {
    if (this.targetId === action.targetId && this.type === action.type) {
      this.newPosition = action.newPosition;
      this.newSize = action.newSize;
      return true;
    }

    return false;
  };
  /**
   *
   * @private
   */


  proto.applyState = function (targetId, position, size) {
    var cloud = this.editor.getMarkup(targetId);

    if (!cloud) {
      return;
    } // Different stroke widths make positions differ at sub-pixel level.


    var epsilon = 0.0001;

    if (Math.abs(cloud.position.x - position.x) > epsilon || Math.abs(cloud.size.y - size.y) > epsilon || Math.abs(cloud.position.y - position.y) > epsilon || Math.abs(cloud.size.y - size.y) > epsilon) {
      cloud.set(position, size);
    }
  };
  /**
   * @returns {boolean}
   */


  proto.isIdentity = function () {
    return this.newPosition.x === this.oldPosition.x && this.newPosition.y === this.oldPosition.y && this.newSize.x === this.oldSize.x && this.newSize.y === this.oldSize.y;
  };

  namespace.SetCloud = SetCloud;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param freehand
   * @param position
   * @param size
   * @param locations
   * @constructor
   */

  function SetFreehand(editor, freehand, position, size, locations) {
    namespace.EditAction.call(this, editor, 'SET-FREEHAND', freehand.id);
    this.position = position;
    this.size = size;
    this.locations = locations.concat(); // No need to save old data
  }

  SetFreehand.prototype = Object.create(namespace.EditAction.prototype);
  SetFreehand.prototype.constructor = SetFreehand;
  var proto = SetFreehand.prototype;

  proto.redo = function () {
    var freehand = this.editor.getMarkup(this.targetId);

    if (!freehand) {
      return;
    }

    freehand.set(this.position, this.size, this.locations);
  };

  proto.undo = function () {// No need for undo.
  };

  proto.merge = function (action) {
    if (this.targetId === action.targetId && this.type === action.type) {
      this.locations = action.locations.concat();
      this.position = action.position;
      this.size = action.size;
      return true;
    }

    return false;
  };
  /**
   * @returns {boolean}
   */


  proto.isIdentity = function () {
    return false; // No need to optimize, always false.
  };

  namespace.SetFreehand = SetFreehand;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;

  function SetPosition(editor, markup, position) {
    namespace.EditAction.call(this, editor, 'SET-POSITION', markup.id);
    this.newPosition = {
      x: position.x,
      y: position.y
    };
    this.oldPosition = {
      x: markup.position.x,
      y: markup.position.y
    };
  }

  SetPosition.prototype = Object.create(namespace.EditAction.prototype);
  SetPosition.prototype.constructor = SetPosition;
  var proto = SetPosition.prototype;

  proto.redo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && markup.setPosition(this.newPosition.x, this.newPosition.y);
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && markup.setPosition(this.oldPosition.x, this.oldPosition.y);
  };
  /**
   *
   * @param action
   * @returns {boolean}
   */


  proto.merge = function (action) {
    if (this.targetId === action.targetId && this.type === action.type) {
      this.newPosition = action.newPosition;
      return true;
    }

    return false;
  };
  /**
   * @returns {boolean}
   */


  proto.isIdentity = function () {
    var newPosition = this.newPosition;
    var oldPosition = this.oldPosition;
    return newPosition.x === oldPosition.x && newPosition.y === oldPosition.y;
  };

  namespace.SetPosition = SetPosition;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param rectangle
   * @param position
   * @param size
   * @constructor
   */

  function SetRectangle(editor, rectangle, position, size) {
    namespace.EditAction.call(this, editor, 'SET-RECTANGLE', rectangle.id);
    this.newPosition = {
      x: position.x,
      y: position.y
    };
    this.newSize = {
      x: size.x,
      y: size.y
    };
    this.oldPosition = {
      x: rectangle.position.x,
      y: rectangle.position.y
    };
    this.oldSize = {
      x: rectangle.size.x,
      y: rectangle.size.y
    };
  }

  SetRectangle.prototype = Object.create(namespace.EditAction.prototype);
  SetRectangle.prototype.constructor = SetRectangle;
  var proto = SetRectangle.prototype;

  proto.redo = function () {
    this.applyState(this.targetId, this.newPosition, this.newSize);
  };

  proto.undo = function () {
    this.applyState(this.targetId, this.oldPosition, this.oldSize);
  };

  proto.merge = function (action) {
    if (this.targetId === action.targetId && this.type === action.type) {
      this.newPosition = action.newPosition;
      this.newSize = action.newSize;
      return true;
    }

    return false;
  };
  /**
   *
   * @private
   */


  proto.applyState = function (targetId, position, size) {
    var rectangle = this.editor.getMarkup(targetId);

    if (!rectangle) {
      return;
    } // Different stroke widths make positions differ at sub-pixel level.


    var epsilon = 0.0001;

    if (Math.abs(rectangle.position.x - position.x) > epsilon || Math.abs(rectangle.size.y - size.y) > epsilon || Math.abs(rectangle.position.y - position.y) > epsilon || Math.abs(rectangle.size.y - size.y) > epsilon) {
      rectangle.set(position, size);
    }
  };
  /**
   * @returns {boolean}
   */


  proto.isIdentity = function () {
    return this.newPosition.x === this.oldPosition.x && this.newPosition.y === this.oldPosition.y && this.newSize.x === this.oldSize.x && this.newSize.y === this.oldSize.y;
  };

  namespace.SetRectangle = SetRectangle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param markup
   * @param angle
   * @constructor
   */

  function SetRotation(editor, markup, angle) {
    namespace.EditAction.call(this, editor, 'SET-ROTATION', markup.id);
    var curAngle = markup.getRotation();
    this.newRotation = {
      angle: angle
    };
    this.oldRotation = {
      angle: curAngle
    };
  }

  SetRotation.prototype = Object.create(namespace.EditAction.prototype);
  SetRotation.prototype.constructor = SetRotation;
  var proto = SetRotation.prototype;

  proto.redo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && markup.setRotation(this.newRotation.angle);
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && markup.setRotation(this.oldRotation.angle);
  };
  /**
   *
   * @param action
   * @returns {boolean}
   */


  proto.merge = function (action) {
    if (this.targetId === action.targetId && this.type === action.type) {
      this.newRotation = action.newRotation;
      return true;
    }

    return false;
  };
  /**
   * @returns {boolean}
   */


  proto.isIdentity = function () {
    return this.newRotation.angle === this.oldRotation.angle;
  };

  namespace.SetRotation = SetRotation;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param markup
   * @param position
   * @param width
   * @param height
   * @constructor
   */

  function SetSize(editor, markup, position, width, height) {
    namespace.EditAction.call(this, editor, 'SET-SIZE', markup.id);
    this.newPosition = {
      x: position.x,
      y: position.y
    };
    this.oldPosition = {
      x: markup.position.x,
      y: markup.position.y
    };
    this.newWidth = width;
    this.oldWidth = markup.size.x;
    this.newHeight = height;
    this.oldHeight = markup.size.y;
  }

  SetSize.prototype = Object.create(namespace.EditAction.prototype);
  SetSize.prototype.constructor = SetSize;
  var proto = SetSize.prototype;

  proto.redo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && markup.setSize(this.newPosition, this.newWidth, this.newHeight);
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && markup.setSize(this.oldPosition, this.oldWidth, this.oldHeight);
  };

  proto.merge = function (action) {
    if (this.targetId === action.targetId && this.type === action.type) {
      this.newPosition = action.newPosition;
      this.newWidth = action.newWidth;
      this.newHeight = action.newHeight;
      return true;
    }

    return false;
  };
  /**
   * @returns {boolean}
   */


  proto.isIdentity = function () {
    var identity = this.newPosition.x === this.oldPosition.x && this.newPosition.y === this.oldPosition.y && this.newWidth === this.oldWidth && this.newHeight === this.oldHeight;
    return identity;
  };

  namespace.SetSize = SetSize;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param editor
   * @param markup
   * @param style
   * @constructor
   */

  function SetStyle(editor, markup, style) {
    namespace.EditAction.call(this, editor, 'SET-STYLE', markup.id);
    this.newStyle = namespaceUtils.cloneStyle(style);
    this.oldStyle = markup.getStyle();
  }

  SetStyle.prototype = Object.create(namespace.EditAction.prototype);
  SetStyle.prototype.constructor = SetStyle;
  var proto = SetStyle.prototype;

  proto.redo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && markup.setStyle(this.newStyle);
  };

  proto.undo = function () {
    var markup = this.editor.getMarkup(this.targetId);
    markup && markup.setStyle(this.oldStyle);
  };

  namespace.SetStyle = SetStyle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @param markup
   * @param position
   * @param size
   * @param text
   * @constructor
   */

  function SetText(editor, markup, position, size, text) {
    namespace.EditAction.call(this, editor, 'SET-TEXT', markup.id);
    this.newPosition = {
      x: position.x,
      y: position.y
    };
    this.oldPosition = {
      x: markup.position.x,
      y: markup.position.y
    };
    this.newSize = {
      x: size.x,
      y: size.y
    };
    this.oldSize = {
      x: markup.size.x,
      y: markup.size.y
    };
    this.newText = text;
    this.oldText = markup.getText();
  }

  SetText.prototype = Object.create(namespace.EditAction.prototype);
  SetText.prototype.constructor = SetText;
  var proto = SetText.prototype;

  proto.redo = function () {
    var text = this.editor.getMarkup(this.targetId);
    text && text.set(this.newPosition, this.newSize, this.newText);
  };

  proto.undo = function () {
    var text = this.editor.getMarkup(this.targetId);
    text && text.set(this.oldPosition, this.oldSize, this.oldText);
  };

  namespace.SetText = SetText;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   *
   * @param editor
   * @constructor
   */

  function Clipboard(editor) {
    this.editor = editor;
    this.content = null;
    this.pastePosition = {
      x: 0,
      y: 0
    };
    namespaceUtils.addTraitEventDispatcher(this);
  }

  var proto = Clipboard.prototype;

  proto.copy = function () {
    var selectedMarkup = this.editor.getSelection();

    if (!selectedMarkup) {
      return;
    }

    this.content = selectedMarkup.clone();
    this.pastePosition.x = selectedMarkup.position.x;
    this.pastePosition.y = selectedMarkup.position.y;
  };

  proto.cut = function () {
    var selectedMarkup = this.editor.getSelection();

    if (!selectedMarkup) {
      return;
    }

    this.copy();
    this.editor.deleteMarkup(selectedMarkup);
  };

  proto.paste = function () {
    var content = this.content;

    if (!content) {
      return;
    }

    var editor = this.editor;
    var position = this.pastePosition;
    var delta = editor.sizeFromClientToMarkups(20, 20);
    position.x += delta.x;
    position.y -= delta.y;
    var cloneMarkup = new namespace.CloneMarkup(editor, editor.getId(), content, position);
    cloneMarkup.execute();
  };

  namespace.Clipboard = Clipboard;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;

  function InputHandler() {
    this.editor = null;
    this.mousePosition = {
      x: 0,
      y: 0
    };
    this.makeSameXY = false; // TODO: FIND a better way to name and communicate these.

    this.snapRotations = false;
    this.keepAspectRatio = false;
    this.constrainAxis = false;
    this.onHammerDragBinded = this.onHammerDrag.bind(this);
    this.onSingleTapBinded = this.onSingleTap.bind(this);
    this.onMouseMoveBinded = this.onMouseMove.bind(this);
    this.onMouseUpBinded = this.onMouseUp.bind(this);
    this.onMouseDownBinded = this.onMouseDown.bind(this);
  }

  var proto = InputHandler.prototype;

  proto.attachTo = function (editor) {
    this.editor && this.detachFrom(this.editor);
    this.editor = editor;

    if (namespaceUtils.isTouchDevice()) {
      this.hammer = new Hammer.Manager(editor.svg, {
        recognizers: [[Hammer.Pan, {
          event: 'drag',
          pointers: 1
        }], [Hammer.Tap, {
          event: 'singletap',
          pointers: 1,
          threshold: 2
        }]],
        inputClass: Hammer.TouchInput
      });
    }
  };

  proto.detachFrom = function (editor) {
    this.hammer && this.hammer.destroy();
    document.removeEventListener('mousemove', this.onMouseMoveBinded, true);
    document.removeEventListener('mouseup', this.onMouseUpBinded, true);
    this.editor && this.editor.svg.removeEventListener("mousedown", this.onMouseDownBinded);
    this.editor = editor;
  };

  proto.enterEditMode = function () {
    if (this.hammer) {
      this.hammer.on("dragstart dragmove dragend", this.onHammerDragBinded);
      this.hammer.on("singletap", this.onSingleTapBinded);
    }

    document.addEventListener('mousemove', this.onMouseMoveBinded, true);
    document.addEventListener('mouseup', this.onMouseUpBinded, true);
    this.editor.svg.addEventListener("mousedown", this.onMouseDownBinded);
  };

  proto.leaveEditMode = function () {
    if (this.hammer) {
      this.hammer.off("dragstart dragmove dragend", this.onHammerDragBinded);
      this.hammer.off("singletap", this.onSingleTapBinded);
    }

    document.removeEventListener("mousemove", this.onMouseMoveBinded, true);
    document.removeEventListener("mouseup", this.onMouseUpBinded, true);
    this.editor.svg.removeEventListener("mousedown", this.onMouseDownBinded);
  };

  proto.enterViewMode = function () {};

  proto.leaveViewMode = function () {};

  proto.getMousePosition = function () {
    return {
      x: this.mousePosition.x,
      y: this.mousePosition.y
    };
  };

  proto.onMouseMove = function (event) {
    processMouseEvent(this, event);
    this.editor.onMouseMove();
    event.preventDefault();
  };

  proto.onMouseDown = function (event) {
    processMouseEvent(this, event);
    this.editor.onMouseDown(event); // TODO: There should be no need to send event here.

    event.preventDefault();
  };

  proto.onMouseUp = function (event) {
    processMouseEvent(this, event);
    this.editor.onMouseUp();
    event.preventDefault();
  };

  proto.onHammerDrag = function (event) {
    convertEventHammerToMouse(event);

    switch (event.type) {
      case 'dragstart':
        this.onMouseDown(event);
        break;

      case 'dragmove':
        this.onMouseMove(event);
        break;

      case 'dragend':
        this.onMouseUp(event);
        break;
    }
  };

  proto.onSingleTap = function (event) {
    convertEventHammerToMouse(event);
    this.onMouseDown(event);
    this.onMouseUp(event);
  };

  function processMouseEvent(input, event) {
    var rect = input.editor.svg.getBoundingClientRect();
    input.makeSameXY = event.shiftKey;
    input.snapRotations = event.shiftKey;
    input.keepAspectRatio = event.shiftKey;
    input.constrainAxis = event.shiftKey;
    input.mousePosition.x = event.clientX - rect.left;
    input.mousePosition.y = event.clientY - rect.top;
  }

  function convertEventHammerToMouse(event) {
    // Convert Hammer touch-event X,Y into mouse-event X,Y.
    event.shiftKey = false;
    event.clientX = event.pointers[0].clientX;
    event.clientY = event.pointers[0].clientY;
  }

  namespace.InputHandler = InputHandler;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * @class
   * Base class for all EditModes.<br>
   * An EditMode is responsible for handling user input to create and edit a
   * [Markup]{@link Autodesk.Viewing.Extensions.Markups.Core.Markup}.
   *
   * Any class extending Markup should contain at least the following methods:
   * - deleteMarkup()
   * - onMouseDown()
   * - onMouseMove()
   *
   * A good reference is the Circle EditMode implementation available in
   * [EditModeCircle.js]{@link Autodesk.Viewing.Extensions.Markups.Core.EditModeCircle}.
   *
   * @tutorial feature_markup
   * @constructor
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   *
   * @param {Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore} editor - Markups extension.
   * @param {String} type - An identifier for the EditMode type. Not to be confused by the Markup's id.
   * @param {Array} styleAttributes - Attributes for customization.
   * @constructor
   */

  function EditMode(editor, type, styleAttributes) {
    this.editor = editor;
    this.viewer = editor.viewer;
    this.type = type;
    this.selectedMarkup = null;
    this.dragging = false;
    this.draggingAnnotationIniPosition = null;
    this.draggingMouseIniPosition = new THREE.Vector2();
    this.initialX = 0;
    this.initialY = 0;
    this.minSize = 9; // In pixels

    this.creating = false;
    this.size = {
      x: 0,
      y: 0
    };
    this.style = namespaceUtils.createStyle(styleAttributes, this.viewer);
    namespaceUtils.addTraitEventDispatcher(this);
  } // Event types //


  namespace.EVENT_EDITMODE_CREATION_BEGIN = "EVENT_EDITMODE_CREATION_BEGIN";
  namespace.EVENT_EDITMODE_CREATION_END = "EVENT_EDITMODE_CREATION_END";
  namespace.EVENT_MARKUP_DESELECT = "EVENT_MARKUP_DESELECT";
  var proto = EditMode.prototype;

  proto.destroy = function () {
    this.unselect();
    namespaceUtils.removeTraitEventDispatcher(this);
  };

  proto.unselect = function () {
    var fireEv = false;
    var selectedMarkup = this.selectedMarkup;

    if (selectedMarkup) {
      selectedMarkup.unselect();
      this.selectedMarkup = null;
      fireEv = true;
    }

    this.editor.editFrame.setMarkup(null);

    if (fireEv) {
      this.fireEvent({
        type: namespace.EVENT_MARKUP_DESELECT
      });
    }
  };

  proto.createBegin = function () {
    if (!this.creating) {
      this.creating = true;
      this.fireEvent({
        type: namespace.EVENT_EDITMODE_CREATION_BEGIN
      });
    }
  };

  proto.createEnd = function () {
    if (this.creating) {
      this.creating = false;
      this.fireEvent({
        type: namespace.EVENT_EDITMODE_CREATION_END
      });
    }
  };
  /**
   *
   * @param style
   */


  proto.setStyle = function (style) {
    this.style = style;
    var selectedMarkup = this.selectedMarkup;

    if (!selectedMarkup) {
      return;
    }

    var setStyle = new namespace.SetStyle(this.editor, selectedMarkup, style);
    setStyle.execute();
  };

  proto.getStyle = function () {
    return this.style;
  };

  proto.setSelection = function (markup) {
    if (this.selectedMarkup !== markup) {
      this.unselect();
      markup && markup.select();
    }

    this.selectedMarkup = markup;
    var editor = this.editor;
    markup && editor.bringToFront(markup);

    if (!this.creating) {
      editor.editFrame.setMarkup(markup);
    }
  };

  proto.getSelection = function () {
    return this.selectedMarkup;
  };
  /**
   *
   * @param [markup] If provided deletes markup (has to have same type that the edit mode), otherwise deletes selected one.
   * @param [cantUndo] If true to not add deletion to undo history.
   * @returns {boolean}
   */


  proto.deleteMarkup = function (markup, cantUndo) {
    return false;
  };
  /**
   * Used by classes extending EditMode to validate the minimum size (in screen coordinates) of the markup.
   * See minSize attribute
   * @return {Boolean} Whether current size is valid for creating the markup
   * @private
   */


  proto.isMinSizeValid = function () {
    if (this.minSize === 0) return true;
    var tmp = this.editor.sizeFromMarkupsToClient(this.size.x, this.size.y);
    return tmp.x * tmp.x + tmp.y * tmp.y >= this.minSize * this.minSize;
  };
  /**
   * @private
   */


  proto.startDragging = function () {
    var selectedMarkup = this.selectedMarkup;
    var mousePosition = this.editor.getMousePosition();

    if (selectedMarkup) {
      this.dragging = true;
      this.draggingAnnotationIniPosition = selectedMarkup.getClientPosition();
      this.draggingMouseIniPosition.set(mousePosition.x, mousePosition.y);
    }
  };
  /**
   * @private
   */


  proto.finishDragging = function () {
    var dragging = this.dragging;
    var selectedMarkup = this.selectedMarkup;
    this.dragging = false;

    if (selectedMarkup && dragging) {
      selectedMarkup.finishDragging();
    }
  };
  /**
   *
   * @returns {{x: number, y: number}}
   */


  proto.getFinalMouseDraggingPosition = function () {
    var editor = this.editor;
    var bounds = editor.getBounds();
    var mousePosition = editor.getMousePosition();
    var initialX = this.initialX;
    var initialY = this.initialY;
    var finalX = Math.min(Math.max(bounds.x, mousePosition.x), bounds.x + bounds.width);
    var finalY = Math.min(Math.max(bounds.y, mousePosition.y), bounds.y + bounds.height);

    if (finalX == initialX && finalY == initialY) {
      finalX++;
      finalY++;
    } // Make equal x/y when shift is down


    if (editor.input.makeSameXY) {
      var dx = Math.abs(finalX - initialX);
      var dy = Math.abs(finalY - initialY);
      var maxDelta = Math.max(dx, dy); // These calculations have the opportunity to go beyond 'bounds'.

      finalX = initialX + maxDelta * namespaceUtils.sign(finalX - initialX);
      finalY = initialY + maxDelta * namespaceUtils.sign(finalY - initialY);
    }

    return {
      x: finalX,
      y: finalY
    };
  };

  proto.notifyAllowNavigation = function (allows) {};

  proto.onMouseDown = function () {};
  /**
   * Handler to mouse up events, used to start annotations creation.
   * It will cancel the creation of a markup if its minSize conditions are not met.
   *
   * @param {MouseEvent} event Mouse event.
   * @private
   */


  proto.onMouseUp = function (event) {
    if (this.selectedMarkup && this.creating && !this.isMinSizeValid()) {
      this.createEnd();
      this.editor.cancelActionGroup();
      this.selectedMarkup = null;
      return; // Yup, just return
    }

    this.finishDragging();
    var selectedMarkup = this.selectedMarkup;

    if (selectedMarkup && this.creating) {
      selectedMarkup.created();
      this.createEnd(); // Opened on mouse down.

      this.editor.closeActionGroup();
      this.unselect();
    }
  };

  proto.onMouseMove = function (event) {};

  proto.onDoubleClick = function (markup) {};

  proto.cancelMarkupCreation = function () {
    this.createEnd();
    this.editor.cancelActionGroup();
    this.selectedMarkup = null; // No need to call unselect
  };
  /**
   *
   * @returns {{x: *, y: *}}
   */


  proto.getDraggingPosition = function () {
    var mousePosition = this.editor.getMousePosition();
    var dx = mousePosition.x - this.draggingMouseIniPosition.x;
    var dy = mousePosition.y - this.draggingMouseIniPosition.y;
    return {
      x: this.draggingAnnotationIniPosition.x + dx,
      y: this.draggingAnnotationIniPosition.y + dy
    };
  };
  /**
   *
   * @param x
   * @param y
   * @param bounds
   * @returns {boolean}
   * @orivate
   */


  proto.isInsideBounds = function (x, y, bounds) {
    return x >= bounds.x && x <= bounds.x + bounds.width && y >= bounds.y && y <= bounds.y + bounds.height;
  };

  namespace.EditMode = EditMode;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @constructor
   */

  function EditModeArrow(editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity'];
    namespace.EditMode.call(this, editor, namespace.MARKUP_TYPE_ARROW, styleAttributes);
  }

  EditModeArrow.prototype = Object.create(namespace.EditMode.prototype);
  EditModeArrow.prototype.constructor = EditModeArrow;
  var proto = EditModeArrow.prototype;

  proto.deleteMarkup = function (markup, cantUndo) {
    markup = markup || this.selectedMarkup;

    if (markup && markup.type == this.type) {
      var deleteArrow = new namespace.DeleteArrow(this.editor, markup);
      deleteArrow.addToHistory = !cantUndo;
      deleteArrow.execute();
      return true;
    }

    return false;
  };
  /**
   * Handler to mouse down events, used to start markups creation.
   * @private
   */


  proto.onMouseDown = function () {
    namespace.EditMode.prototype.onMouseDown.call(this);

    if (this.selectedMarkup) {
      return;
    }

    var mousePosition = this.editor.getMousePosition();
    this.initialX = mousePosition.x;
    this.initialY = mousePosition.y; // Calculate head and tail.

    var width = 1; // TODO: When an Arrow too short is created, it should actually be ignored.

    var head = {
      x: this.initialX,
      y: this.initialY
    };
    var tail = {
      x: Math.round(head.x + Math.cos(Math.PI * 0.25) * width),
      y: Math.round(head.y + Math.sin(-Math.PI * 0.25) * width)
    }; // Constrain head and tail inside working area.

    var constrain = function (head, tail, width, bounds) {
      if (this.isInsideBounds(tail.x, tail.y, bounds)) {
        return;
      }

      tail.y = Math.round(head.y + Math.sin(Math.PI * 0.25) * width);

      if (this.isInsideBounds(tail.x, tail.y, bounds)) {
        return;
      }

      tail.x = Math.round(head.y + Math.cos(-Math.PI * 0.25) * width);

      if (this.isInsideBounds(tail.x, tail.y, bounds)) {
        return;
      }

      tail.y = Math.round(head.y + Math.sin(-Math.PI * 0.25) * width);
    }.bind(this);

    var editor = this.editor;
    constrain(head, tail, width, editor.getBounds()); // Create arrow.

    editor.beginActionGroup();
    head = editor.positionFromClientToMarkups(head.x, head.y);
    tail = editor.positionFromClientToMarkups(tail.x, tail.y);
    this.size = {
      x: tail.x - head.x,
      y: tail.y - head.y
    };
    var arrowId = editor.getId();
    var create = new namespace.CreateArrow(editor, arrowId, head, tail, this.style);
    create.execute();
    this.selectedMarkup = editor.getMarkup(arrowId);
    this.createBegin();
  };
  /**
   * Handler to mouse move events, used to create markups.
   * @param {MouseEvent} event Mouse event.
   * @private
   */


  proto.onMouseMove = function (event) {
    namespace.EditMode.prototype.onMouseMove.call(this, event);
    var selectedMarkup = this.selectedMarkup;

    if (!selectedMarkup || !this.creating) {
      return;
    }

    var editor = this.editor;

    var _final = this.getFinalMouseDraggingPosition();

    var head = editor.positionFromClientToMarkups(this.initialX, this.initialY);
    var tail = editor.positionFromClientToMarkups(_final.x, _final.y);
    this.size = {
      x: tail.x - head.x,
      y: tail.y - head.y
    };
    var setArrow = new namespace.SetArrow(editor, selectedMarkup, head, tail);
    setArrow.execute();
  };

  namespace.EditModeArrow = EditModeArrow;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   * @class
   * Implements a Circle [EditMode]{@link Autodesk.Viewing.Extensions.Markups.Core.EditMode}.
   * Included in documentation as an example of how to create
   * an EditMode for a specific markup type. Developers are encourage to look into this class's source code and copy
   * as much code as they need. Find link to source code below.
   *
   * @tutorial feature_markup
   * @constructor
   * @memberof Autodesk.Viewing.Extensions.Markups.Core
   * @extends Autodesk.Viewing.Extensions.Markups.Core.EditMode
   *
   * @param {Autodesk.Viewing.Extensions.Markups.Core.MarkupsCore} editor
   */

  function EditModeCircle(editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity', 'fill-color', 'fill-opacity'];
    namespace.EditMode.call(this, editor, namespace.MARKUP_TYPE_CIRCLE, styleAttributes);
  }

  EditModeCircle.prototype = Object.create(namespace.EditMode.prototype);
  EditModeCircle.prototype.constructor = EditModeCircle;
  var proto = EditModeCircle.prototype;

  proto.deleteMarkup = function (markup, cantUndo) {
    markup = markup || this.selectedMarkup;

    if (markup && markup.type == this.type) {
      var deleteCircle = new namespace.DeleteCircle(this.editor, markup);
      deleteCircle.addToHistory = !cantUndo;
      deleteCircle.execute();
      return true;
    }

    return false;
  };
  /**
   * Handler to mouse move events, used to create markups.
   * @param {MouseEvent} event Mouse event.
   * @private
   */


  proto.onMouseMove = function (event) {
    namespace.EditMode.prototype.onMouseMove.call(this, event);
    var selectedMarkup = this.selectedMarkup;

    if (!selectedMarkup || !this.creating) {
      return;
    }

    var editor = this.editor;
    var initialX = this.initialX;
    var initialY = this.initialY;

    var _final2 = this.getFinalMouseDraggingPosition();

    var position = editor.clientToMarkups((initialX + _final2.x) / 2, (initialY + _final2.y) / 2);
    var size = this.size = editor.sizeFromClientToMarkups(_final2.x - initialX, _final2.y - initialY);
    var setCircle = new namespace.SetCircle(editor, selectedMarkup, position, size);
    setCircle.execute();
  };
  /**
   * Handler to mouse down events, used to start markups creation.
   * @private
   */


  proto.onMouseDown = function () {
    namespace.EditMode.prototype.onMouseDown.call(this);

    if (this.selectedMarkup) {
      return;
    }

    var editor = this.editor;
    var mousePosition = editor.getMousePosition();
    this.initialX = mousePosition.x;
    this.initialY = mousePosition.y; // Calculate center and size.

    var position = editor.clientToMarkups(this.initialX, this.initialY);
    var size = this.size = editor.sizeFromClientToMarkups(1, 1); // Create circle.

    editor.beginActionGroup();
    var markupId = editor.getId();
    var create = new namespace.CreateCircle(editor, markupId, position, size, 0, this.style);
    create.execute();
    this.selectedMarkup = editor.getMarkup(markupId);
    this.createBegin();
  };

  namespace.EditModeCircle = EditModeCircle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @constructor
   */

  function EditModeCloud(editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity', 'fill-color', 'fill-opacity'];
    namespace.EditMode.call(this, editor, namespace.MARKUP_TYPE_CLOUD, styleAttributes);
  }

  EditModeCloud.prototype = Object.create(namespace.EditMode.prototype);
  EditModeCloud.prototype.constructor = EditModeCloud;
  var proto = EditModeCloud.prototype;

  proto.deleteMarkup = function (markup, cantUndo) {
    markup = markup || this.selectedMarkup;

    if (markup && markup.type == this.type) {
      var deleteCloud = new namespace.DeleteCloud(this.editor, markup);
      deleteCloud.addToHistory = !cantUndo;
      deleteCloud.execute();
      return true;
    }

    return false;
  };
  /**
   * Handler to mouse move events, used to create markups.
   * @param {MouseEvent} event Mouse event.
   * @private
   */


  proto.onMouseMove = function (event) {
    namespace.EditMode.prototype.onMouseMove.call(this, event);
    var selectedMarkup = this.selectedMarkup;

    if (!selectedMarkup || !this.creating) {
      return;
    }

    var editor = this.editor;
    var initialX = this.initialX;
    var initialY = this.initialY;

    var _final3 = this.getFinalMouseDraggingPosition();

    var position = editor.clientToMarkups((initialX + _final3.x) / 2, (initialY + _final3.y) / 2);
    var size = this.size = editor.sizeFromClientToMarkups(_final3.x - initialX, _final3.y - initialY);
    var setCloud = new namespace.SetCloud(editor, selectedMarkup, position, size);
    setCloud.execute();
  };
  /**
   * Handler to mouse down events, used to start markups creation.
   * @private
   */


  proto.onMouseDown = function () {
    namespace.EditMode.prototype.onMouseDown.call(this);

    if (this.selectedMarkup) {
      return;
    }

    var editor = this.editor;
    var mousePosition = editor.getMousePosition();
    this.initialX = mousePosition.x;
    this.initialY = mousePosition.y; // Calculate center and size.

    var position = editor.clientToMarkups(this.initialX, this.initialY);
    var size = this.size = editor.sizeFromClientToMarkups(1, 1); // Create Cloud.

    editor.beginActionGroup();
    var markupId = editor.getId();
    var create = new namespace.CreateCloud(editor, markupId, position, size, 0, this.style);
    create.execute();
    this.selectedMarkup = editor.getMarkup(markupId);
    this.createBegin();
  };

  namespace.EditModeCloud = EditModeCloud;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @constructor
   */

  function EditModeFreehand(editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity'];
    namespace.EditMode.call(this, editor, namespace.MARKUP_TYPE_FREEHAND, styleAttributes);
    this.style['stroke-opacity'] = 0.75;
  }

  EditModeFreehand.prototype = Object.create(namespace.EditMode.prototype);
  EditModeFreehand.prototype.constructor = EditModeFreehand;
  var proto = EditModeFreehand.prototype;

  proto.deleteMarkup = function (markup, cantUndo) {
    markup = markup || this.selectedMarkup;

    if (markup && markup.type == this.type) {
      var deleteFreehand = new namespace.DeleteFreehand(this.editor, markup);
      deleteFreehand.addToHistory = !cantUndo;
      deleteFreehand.execute();
      return true;
    }

    return false;
  };
  /**
   * Handler to mouse move events, used to create markups.
   * @param {MouseEvent} event Mouse event.
   * @private
   */


  proto.onMouseMove = function (event) {
    namespace.EditMode.prototype.onMouseMove.call(this, event);
    var selectedMarkup = this.selectedMarkup;

    if (!selectedMarkup || !this.creating) {
      return;
    }

    var editor = this.editor;
    var mousePosition = editor.getMousePosition();
    var movements = this.movements;
    var location = editor.clientToMarkups(mousePosition.x, mousePosition.y);
    movements.push(location); // determine the position of the top-left and bottom-right points

    var minFn = function minFn(collection, key) {
      var targets = collection.map(function (item) {
        return item[key];
      });
      return Math.min.apply(null, targets);
    };

    var maxFn = function maxFn(collection, key) {
      var targets = collection.map(function (item) {
        return item[key];
      });
      return Math.max.apply(null, targets);
    };

    var l = minFn(movements, 'x');
    var t = minFn(movements, 'y');
    var r = maxFn(movements, 'x');
    var b = maxFn(movements, 'y');
    var width = r - l; // Already in markup coords space

    var height = b - t; // Already in markup coords space

    var position = {
      x: l + width * 0.5,
      y: t + height * 0.5
    };
    var size = this.size = {
      x: width,
      y: height
    }; // Adjust points to relate from the shape's center

    var locations = movements.map(function (point) {
      return {
        x: point.x - position.x,
        y: point.y - position.y
      };
    });
    var setFreehand = new namespace.SetFreehand(editor, selectedMarkup, position, size, locations);
    setFreehand.execute();
  };
  /**
   * Handler to mouse down events, used to start markups creation.
   * @private
   */


  proto.onMouseDown = function () {
    namespace.EditMode.prototype.onMouseDown.call(this);

    if (this.selectedMarkup) {
      return;
    }

    var editor = this.editor;
    var mousePosition = editor.getMousePosition();
    this.initialX = mousePosition.x;
    this.initialY = mousePosition.y; //set the starting point

    var position = editor.clientToMarkups(this.initialX, this.initialY);
    this.movements = [position];
    var size = this.size = editor.sizeFromClientToMarkups(1, 1); // Create arrow.

    editor.beginActionGroup();
    var markupId = editor.getId();
    var create = new namespace.CreateFreehand(editor, markupId, position, size, 0, [{
      x: 0,
      y: 0
    }], this.style);
    create.execute();
    this.selectedMarkup = editor.getMarkup(markupId);
    this.createBegin();
  };

  namespace.EditModeFreehand = EditModeFreehand;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @constructor
   */

  function EditModeRectangle(editor) {
    var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity', 'fill-color', 'fill-opacity'];
    namespace.EditMode.call(this, editor, namespace.MARKUP_TYPE_RECTANGLE, styleAttributes);
  }

  EditModeRectangle.prototype = Object.create(namespace.EditMode.prototype);
  EditModeRectangle.prototype.constructor = EditModeRectangle;
  var proto = EditModeRectangle.prototype;

  proto.deleteMarkup = function (markup, cantUndo) {
    markup = markup || this.selectedMarkup;

    if (markup && markup.type == this.type) {
      var deleteRectangle = new namespace.DeleteRectangle(this.editor, markup);
      deleteRectangle.addToHistory = !cantUndo;
      deleteRectangle.execute();
      return true;
    }

    return false;
  };
  /**
   * Sets multiple text properties at once
   * @param {Object} style
   */


  proto.setStyle = function (style) {
    namespace.EditMode.prototype.setStyle.call(this, style);
    var rectangle = this.selectedMarkup;

    if (!rectangle) {
      return;
    } // TODO: Change to use SetStyle //


    var setRectangle = new namespace.SetRectangle(this.editor, rectangle, rectangle.position, rectangle.size);
    setRectangle.execute();
  };
  /**
   * Handler to mouse move events, used to create markups.
   * @param {MouseEvent} event Mouse event.
   * @private
   */


  proto.onMouseMove = function (event) {
    namespace.EditMode.prototype.onMouseMove.call(this, event);
    var selectedMarkup = this.selectedMarkup;

    if (!selectedMarkup || !this.creating) {
      return;
    }

    var editor = this.editor;
    var initialX = this.initialX;
    var initialY = this.initialY;

    var _final4 = this.getFinalMouseDraggingPosition();

    var position = editor.clientToMarkups((initialX + _final4.x) / 2, (initialY + _final4.y) / 2);
    var size = this.size = editor.sizeFromClientToMarkups(_final4.x - initialX, _final4.y - initialY);
    var setRectangle = new namespace.SetRectangle(editor, selectedMarkup, position, size);
    setRectangle.execute();
  };
  /**
   * Handler to mouse down events, used to start markups creation.
   * @private
   */


  proto.onMouseDown = function () {
    namespace.EditMode.prototype.onMouseDown.call(this);

    if (this.selectedMarkup) {
      return;
    }

    var editor = this.editor;
    var mousePosition = editor.getMousePosition();
    this.initialX = mousePosition.x;
    this.initialY = mousePosition.y; // Calculate center and size.

    var position = editor.clientToMarkups(this.initialX, this.initialY);
    var size = this.size = editor.sizeFromClientToMarkups(1, 1); // Create rectangle.

    editor.beginActionGroup();
    var markupId = editor.getId();
    var create = new namespace.CreateRectangle(editor, markupId, position, size, 0, this.style);
    create.execute();
    this.selectedMarkup = editor.getMarkup(markupId);
    this.createBegin();
  };

  namespace.EditModeRectangle = EditModeRectangle;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  /**
   *
   * @param editor
   * @constructor
   */

  function EditModeText(editor) {
    var styleAttributes = ['font-size', 'stroke-color', 'stroke-opacity', 'fill-color', 'fill-opacity', 'font-family', 'font-style', 'font-weight'];
    namespace.EditMode.call(this, editor, namespace.MARKUP_TYPE_TEXT, styleAttributes);
    this.style['fill-color'] = '#ffffff';
    var helper = new namespace.EditorTextInput(this.viewer.container, this.editor);
    helper.addEventListener(helper.EVENT_TEXT_CHANGE, this.onHelperTextChange.bind(this), false);
    this.textInputHelper = helper;
    this.onHistoryChangeBinded = this.onHistoryChange.bind(this);
    this.minSize = 0; // No need to size it initially
  }

  EditModeText.prototype = Object.create(namespace.EditMode.prototype);
  EditModeText.prototype.constructor = EditModeText;
  var proto = EditModeText.prototype;

  proto.deleteMarkup = function (markup, cantUndo) {
    markup = markup || this.selectedMarkup;

    if (markup && markup.type == this.type) {
      var deleteText = new namespace.DeleteText(this.editor, markup);
      deleteText.addToHistory = !cantUndo;
      deleteText.execute();
      return true;
    }

    return false;
  };
  /**
   * Handler to mouse down events, used to start markups creation.
   */


  proto.onMouseDown = function () {
    if (this.textInputHelper.isActive()) {
      this.textInputHelper.acceptAndExit();
      return;
    }

    if (this.selectedMarkup) {
      return;
    }

    var editor = this.editor;
    var mousePosition = editor.getMousePosition();
    var clientFontSize = editor.sizeFromMarkupsToClient(0, this.style['font-size']).y;
    var initialWidth = clientFontSize * 15; // Find better way to initialize size.

    var initialHeight = clientFontSize * 3; // Center position.

    var size = this.size = editor.sizeFromClientToMarkups(initialWidth, initialHeight);
    var position = editor.positionFromClientToMarkups(mousePosition.x + initialWidth * 0.5, mousePosition.y + initialHeight * 0.5);
    editor.beginActionGroup(); // Given the initial width and font size, we assume that the text fits in one line.

    var createText = new namespace.CreateText(editor, editor.getId(), position, size, '', this.style);
    createText.execute();
    this.createBegin();
    this.createEnd();
    this.selectedMarkup = editor.getMarkup(createText.targetId);
    this.textInputHelper.setActive(this.selectedMarkup, true);
    this.editor.actionManager.addEventListener(namespace.EVENT_HISTORY_CHANGED, this.onHistoryChangeBinded);
  };

  proto.onDoubleClick = function (markup) {
    if (markup === this.selectedMarkup) {
      this.editor.selectMarkup(null);
      this.textInputHelper.setActive(markup, false);
    }
  };

  proto.onHelperTextChange = function (event) {
    var dataBag = event.data;
    var textMarkup = dataBag.markup;
    var textStyle = dataBag.style;
    this.editor.actionManager.removeEventListener(namespace.EVENT_HISTORY_CHANGED, this.onHistoryChangeBinded); // Deal with edge case first: Creating a Label without text

    if (dataBag.newText === '') {
      // If the text field is being created for the first time,
      // we need only to cancel the action group in progress
      if (dataBag.firstEdit) {
        this.editor.cancelActionGroup();
        this.editor.selectMarkup(null);
        return;
      } // Else, we must perform a Delete action
      else {
          var deleteText = new namespace.DeleteText(this.editor, textMarkup);
          deleteText.execute();
          this.editor.selectMarkup(null);
          return;
        }
    } // When the text is created for the first time, an action group
    // is already created and it includes the CreateText action.
    // Thus, no need to begin another action group.


    if (!dataBag.firstEdit) {
      this.editor.beginActionGroup();
    } // Size change action //


    var position = this.editor.positionFromClientToMarkups(dataBag.newPos.x, dataBag.newPos.y);
    var size = this.editor.sizeFromClientToMarkups(dataBag.width, dataBag.height);
    var setSize = new namespace.SetSize(this.editor, textMarkup, position, size.x, size.y);
    setSize.execute(); // Text change action //

    var setText = new namespace.SetText(this.editor, textMarkup, textMarkup.position, textMarkup.size, dataBag.newText);
    setText.execute();
    var setStyle = new namespace.SetStyle(this.editor, textMarkup, textStyle);
    setStyle.execute(); // However, we do need to close the action group at this point. For both cases.

    this.editor.closeActionGroup();
    this.editor.selectMarkup(null); // There seems to be some rendering issues when coming out of the text-edit mode

    textMarkup.forceRedraw();
  };
  /**
   *
   * @param style
   */


  proto.setStyle = function (style) {
    if (this.textInputHelper.isActive()) {
      this.textInputHelper.setStyle(style);
    } else {
      namespace.EditMode.prototype.setStyle.call(this, style); // After changing styles, the text gets screwed up. Fix by re-rendering it.

      var selectedMarkup = this.selectedMarkup;

      if (selectedMarkup) {
        selectedMarkup.forceRedraw();
      }
    }
  };
  /**
   * We want to make sure that the Input Helper gets removed from the screen
   * whenever the user attempts to perform an undo or redo action.
   * @param {Event} event
   * @private
   */


  proto.onHistoryChange = function (event) {
    if (this.textInputHelper.isActive()) {
      this.editor.actionManager.removeEventListener(namespace.EVENT_HISTORY_CHANGED, this.onHistoryChangeBinded);
      this.textInputHelper.setInactive();
    }
  };

  proto.notifyAllowNavigation = function (allows) {
    if (allows && this.textInputHelper.isActive()) {
      this.textInputHelper.acceptAndExit();
    }
  };

  proto.destroy = function () {
    if (this.textInputHelper) {
      if (this.textInputHelper.isActive()) {
        this.textInputHelper.acceptAndExit();
      }

      this.textInputHelper.destroy();
      this.textInputHelper = null;
    }

    namespace.EditMode.prototype.destroy.call(this);
  };

  namespace.EditModeText = EditModeText;
})();

(function () {
  'use strict';

  var namespace = Autodesk.Viewing.Extensions.Markups.Core;
  var namespaceUtils = Autodesk.Viewing.Extensions.Markups.Core.Utils;
  /**
   * Auxiliary class that handles all input for the Label Markup (MarkupText.js)
   * It instantiates a TEXTAREA where the user can input text. When user input is
   * disabled, the textarea gets hidden and further rendering is delegated to
   * MarkupText.js
   *
   * @param {HTMLElement} parentDiv
   * @param {Object} editor - Core Extension
   * @constructor
   */

  function EditorTextInput(parentDiv, editor) {
    this.parentDiv = parentDiv;
    this.editor = editor; // Constants

    this.EVENT_TEXT_CHANGE = 'EVENT_CO2_TEXT_CHANGE'; // The actual TextArea input

    this.textArea = document.createElement('textarea');
    this.textArea.setAttribute('maxlength', '260'); // TODO: Make constant? Change value?

    this.textArea.setAttribute('placeholder', namespaceUtils.Localization.MARKUP_TEXT_DEFAULT_TEXT);
    this.onKeyHandlerBinded = this.onKeyHandler.bind(this);
    this.textArea.addEventListener('keydown', this.onKeyHandlerBinded);
    this.styleTextArea = new namespaceUtils.DomElementStyle(); // TODO: Move this to EditMode.

    this.styleTextArea.setAttribute('position', 'absolute').setAttribute('overflow-y', 'hidden'); // Helper div to measure text width

    this.measureDiv = document.createElement('div'); // Become an event dispatcher

    namespaceUtils.addTraitEventDispatcher(this);
    this.onResizeBinded = this.onWindowResize.bind(this);
  }

  var proto = EditorTextInput.prototype;

  proto.destroy = function () {
    this.textArea.removeEventListener('keydown', this.onKeyHandlerBinded);
    this.setInactive();
  };
  /**
   * Initializes itself given an Label Markup (textMarkup)
   * @param {Object} textMarkup
   * @param {Boolean} firstEdit - Whether the markup is being edited for the first time.
   */


  proto.setActive = function (textMarkup, firstEdit) {
    if (this.textMarkup === textMarkup) {
      return;
    }

    this.setInactive();
    this.parentDiv.appendChild(this.textArea);
    this.textMarkup = textMarkup;
    this.firstEdit = firstEdit || false;
    this.initFromMarkup(); // Component breaks when resizing. Thus, we force close it

    window.addEventListener('resize', this.onResizeBinded); // Focus on next frame

    var txtArea = this.textArea;
    window.requestAnimationFrame(function () {
      txtArea.focus();
    });
  };
  /**
   * Closes the editor text input and goes back into normal markup edition mode.
   */


  proto.setInactive = function () {
    window.removeEventListener('resize', this.onResizeBinded);

    if (this.textMarkup) {
      this.textMarkup = null;
      this.parentDiv.removeChild(this.textArea);
    }

    this.style = null;
  };

  proto.isActive = function () {
    return !!this.textMarkup;
  };
  /**
   * Applies Markup styles to TextArea used for editing.
   * It also saves a copy of the style object.
   * @private
   */


  proto.initFromMarkup = function () {
    var markup = this.textMarkup;
    var position = markup.getClientPosition(),
        size = markup.getClientSize();
    var left = position.x - size.x * 0.5;
    var top = position.y - size.y * 0.5;
    var lineHeightPercentage = markup.lineHeight + "%";
    this.styleTextArea.setAttribute('line-height', lineHeightPercentage);
    this.setPosAndSize(left, top, size.x, size.y);
    this.setStyle(markup.getStyle());
    this.textArea.value = markup.getText();
  };

  proto.setPosAndSize = function (left, top, width, height) {
    // We also check here that it doesn't overflow out of the canvas
    if (left + width >= this.editor.viewer.container.clientWidth) {
      left = this.editor.viewer.container.clientWidth - (width + 10);
    }

    if (top + height >= this.editor.viewer.container.clientHeight) {
      top = this.editor.viewer.container.clientHeight - (height + 10);
    }

    this.styleTextArea // Size and position
    .setAttribute('left', left + 'px').setAttribute('top', top + 'px').setAttribute('width', width + 'px').setAttribute('height', height + 'px');
  };

  proto.setStyle = function (style) {
    if (this.style) {
      // An already present style means that the user
      // has changed the style using the UI buttons.
      // We need to account for the user having changed the
      // width/height of the TextArea. Since there is no event
      // we can detect for it, we do it here.
      var temp = {};
      this.injectSizeValues(temp);
      this.setPosAndSize(temp.newPos.x - temp.width * 0.5, temp.newPos.y - temp.height * 0.5, temp.width, temp.height);
    }

    var fontHeight = this.editor.sizeFromMarkupsToClient(0, style['font-size']).y;
    var textAreaStyle = this.styleTextArea // Visuals
    .setAttribute('color', style['stroke-color']).setAttribute('font-family', style['font-family']).setAttribute('font-size', fontHeight + 'px').setAttribute('font-weight', style['font-weight'] ? 'bold' : '').setAttribute('font-style', style['font-style'] ? 'italic' : '').getStyleString();
    this.textArea.setAttribute('style', textAreaStyle);
    this.style = namespaceUtils.cloneStyle(style);
  };
  /**
   * Helper function that, for a given markup with some text in it
   * returns an Array of lines in it.
   * @param {Object} markup
   * @returns {{text, lines}|{text: String, lines: Array.<String>}}
   */


  proto.getTextValuesForMarkup = function (markup) {
    this.setActive(markup, false);
    var textValues = this.getTextValues();
    this.setInactive();
    return textValues;
  };
  /**
   * Returns the current text as one string and an array of lines
   * of how the text is being rendered (1 string per line)
   * @returns {{text: String, lines: Array.<String>}}
   */


  proto.getTextValues = function () {
    var newText = this.textArea.value;

    if (newText === namespaceUtils.Localization.MARKUP_TEXT_DEFAULT_TEXT) {
      newText = '';
    }

    return {
      text: newText,
      lines: this.generateLines()
    };
  };
  /**
   * Function called by UI
   */


  proto.acceptAndExit = function () {
    // If placeholder text, then remove.
    var textValues = this.getTextValues();
    var dataBag = {
      markup: this.textMarkup,
      style: this.style,
      firstEdit: this.firstEdit,
      newText: textValues.text,
      newLines: textValues.lines
    };
    this.injectSizeValues(dataBag);
    this.fireEvent({
      type: this.EVENT_TEXT_CHANGE,
      data: dataBag
    });
    this.setInactive(); // Do this last //
  };
  /**
   * Injects position, width and height of the textarea rect
   * @param {Object} dataBag
   * @private
   */


  proto.injectSizeValues = function (dataBag) {
    // Explicit usage of parseFloat to remove the 'px' suffix.
    var width = parseFloat(this.textArea.style.width);
    var height = parseFloat(this.textArea.style.height);
    var ox = parseFloat(this.textArea.style.left);
    var oy = parseFloat(this.textArea.style.top);
    dataBag.width = width;
    dataBag.height = height;
    dataBag.newPos = {
      x: ox + width * 0.5,
      y: oy + height * 0.5
    };
  };
  /**
   * Handler for when the window gets resized
   * @param {Object} event - Window resize event
   * @private
   */


  proto.onWindowResize = function (event) {
    window.requestAnimationFrame(function () {
      var str = this.textArea.value;
      this.style = null; // TODO: Revisit this code because style changes are lost by doing this.

      this.initFromMarkup();
      this.textArea.value = str;
    }.bind(this));
  };

  proto.onKeyHandler = function (event) {
    var keyCode = event.keyCode;
    var shiftDown = event.shiftKey; // We only allow RETURN when used along with SHIFT

    if (!shiftDown && keyCode === 13) {
      // Return
      event.preventDefault();
      this.acceptAndExit();
    }
  };
  /**
   * Grabs the text content of the textarea and returns
   * an Array of lines.  Wrapped lines are returned as 2 lines.
   */


  proto.generateLines = function () {
    // First, get lines separated by line breaks:
    var textContent = this.textArea.value;
    var linesBreaks = textContent.split(/\r*\n/);
    var styleMeasureStr = this.styleTextArea.clone().removeAttribute(['top', 'left', 'width', 'height', 'overflow-y']).setAttribute('position', 'absolute').setAttribute('white-space', 'nowrap').setAttribute('float', 'left').setAttribute('visibility', 'hidden').getStyleString();
    this.measureDiv.setAttribute('style', styleMeasureStr);
    this.parentDiv.appendChild(this.measureDiv);
    var maxLineLength = parseFloat(this.textArea.style.width); // Now check whether the lines are wrapped.
    // If so, subdivide into other lines.

    var linesOutput = [];

    for (var i = 0, len = linesBreaks.length; i < len; ++i) {
      var line = trimRight(linesBreaks[i]);
      this.splitLine(line, maxLineLength, linesOutput);
    }

    this.parentDiv.removeChild(this.measureDiv);
    return linesOutput;
  };
  /**
   * Given a String that represents one line of text that is
   * longer than the max length a line is allowed, this method
   * cuts text into several ones that are no longer than the max
   * length.
   *
   * @param {String} text
   * @param {Number} maxLength
   * @param {Array} output
   * @private
   */


  proto.splitLine = function (text, maxLength, output) {
    // End condition
    if (text === '') {
      return;
    }

    var remaining = '';
    var done = false;

    while (!done) {
      this.measureDiv.innerHTML = text;
      var lineLen = this.measureDiv.clientWidth;

      if (lineLen <= maxLength) {
        output.push(text);
        this.splitLine(trimLeft(remaining), maxLength, output);
        done = true;
      } else {
        // Need to try with a shorter word!
        var parts = this.getShorterLine(text);

        if (parts.length === 1) {
          // text is only one word that is way too long.
          this.splitWord(text, remaining, maxLength, output);
          done = true;
        } else {
          text = parts[0];
          remaining = parts[1] + remaining;
        }
      }
    }
  };
  /**
   * Given a line of text such as "hi there programmer", it returns
   * an array with 2 parts: ["hi there", " programmer"].
   *
   * It accounts for special cases with multi-spaces, such as for
   * "hi there  two-spaces" returns ["hi there", "  two-spaces"]
   *
   * When there is only one word, it returns the whole word:
   * "JustOneWord" returns ["JustOneWord"] (an array of 1 element)
   *
   * @param {String} line
   * @returns {Array}
   */


  proto.getShorterLine = function (line) {
    // TODO: Account for TABs
    // Will probably never do unless a bug is reported.
    var iLastSpace = line.lastIndexOf(' ');

    if (iLastSpace === -1) {
      return [line]; // This is a single word
    } // Else
    // Iterate back removing additional spaces (multi spaces)


    while (line.charAt(iLastSpace - 1) === ' ') {
      iLastSpace--;
    }

    var trailingWord = line.substr(iLastSpace); // Contains the spaces

    var shorterLine = line.substr(0, iLastSpace);
    return [shorterLine, trailingWord];
  };
  /**
   * Given a single word, splits it into multiple lines that fits in maxWidth
   * @param {String} word
   * @param {String} remaining
   * @param {Number} maxLength
   * @param {Array} output
   */


  proto.splitWord = function (word, remaining, maxLength, output) {
    var lenSoFar = 1;
    var fits = true;

    while (fits) {
      var part = word.substr(0, lenSoFar);
      this.measureDiv.innerHTML = part;
      var lineLen = this.measureDiv.clientWidth;

      if (lineLen > maxLength) {
        if (lenSoFar === 1) {
          // we can't split 1 character any longer.
          output.push(part);
          this.splitWord(word.substr(1), remaining, maxLength, output);
          return;
        } // It was fine until one less char //


        var okayWord = word.substr(0, lenSoFar - 1);
        output.push(okayWord);
        var extraWord = word.substr(lenSoFar - 1);
        this.splitLine(extraWord + remaining, maxLength, output);
        return;
      } // Try one more character


      lenSoFar++; // Check if we are done with all characters

      if (lenSoFar > word.length) {
        // Okay it fits
        output.push(word);
        return;
      }
    }
  };

  function trimRight(text) {
    if (text.length === 0) {
      return "";
    }

    var lastNonSpace = text.length - 1;

    for (var i = lastNonSpace; i >= 0; --i) {
      if (text.charAt(i) !== ' ') {
        lastNonSpace = i;
        break;
      }
    }

    return text.substr(0, lastNonSpace + 1);
  }

  function trimLeft(text) {
    if (text.length === 0) {
      return "";
    }

    var firstNonSpace = 0;

    for (var i = 0; i < text.length; ++i) {
      if (text.charAt(i) !== ' ') {
        firstNonSpace = i;
        break;
      }
    }

    return text.substr(firstNonSpace);
  }

  namespace.EditorTextInput = EditorTextInput;
})();

/***/ }),

/***/ "./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.Panel.js":
/*!****************************************************************************!*\
  !*** ./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.Panel.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Markup2DPanel; });
/* harmony import */ var SwitchButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! SwitchButton */ "./src/components/SwitchButton/index.js");
 /////////////////////////////////////////////////////////////////
// MarkupPanel
//
/////////////////////////////////////////////////////////////////

function Markup2DPanel(viewer, panelId, btnElement) {
  /////////////////////////////////////////////////////////////////
  // Base class constructor
  //
  /////////////////////////////////////////////////////////////////
  Autodesk.Viewing.UI.DockingPanel.call(this, viewer.container, panelId, 'Markup 2D', {
    shadow: true
  }); /////////////////////////////////////////////////////////////////
  // "Private" members
  //
  /////////////////////////////////////////////////////////////////

  var _thisPanel = this;

  var _viewMode = true;
  var _controlIds = [];
  var _layerItems = {};
  var MarkupsCore = null;
  var _isVisible = false;
  var _isMinimized = false;
  var _markupsExtension = null; /////////////////////////////////////////////////////////////
  // Custom html
  //
  /////////////////////////////////////////////////////////////

  function generateHtml(id) {
    var html = "\n\n      <div class=\"container\">\n\n        <div class=\"switch-container\" id=\"".concat(id, "-switch-container\"\n             data-placement=\"bottom\"\n             data-toggle=\"tooltip\"\n             title=\"Switch between Edit/View Mode\">\n        </div>\n\n        <div id=\"").concat(id, "-dropdown-mode-container\"\n             class=\"dropdown-mode-container\">\n        </div>\n\n        <hr class=\"v-spacer\">\n\n        <div style=\"clear: left;\">\n\n          <input type=\"text\" id=\"").concat(id, "-spectrum\"/>\n\n          <input id=\"").concat(id, "-style\" type=\"text\"\n              class=\"input styles\"\n              value='\"stroke-width\":0.1, \"stroke-opacity\":1'\n              data-placement=\"bottom\"\n              data-toggle=\"tooltip\"\n              title=\"Set svg style properties\">\n\n        </div>\n\n        <hr class=\"v-spacer-large\">\n\n        <div style=\"clear: left;\">\n\n          <button class=\"btn btn-info btn-row\"\n                  id=\"").concat(id, "-btn-undo\"\n                  data-placement=\"bottom\"\n                  data-toggle=\"tooltip\"\n                  title=\"Undo last markup action\"\n                  disabled>\n           <span class=\"fa fa-undo btn-span\">\n           </span>\n              Undo\n          </button>\n\n          <button class=\"btn btn-info btn-row\"\n                  id=\"").concat(id, "-btn-redo\"\n                  data-placement=\"bottom\"\n                  data-toggle=\"tooltip\"\n                  title=\"Redo last markup action\"\n                  disabled>\n           <span class=\"fa fa-repeat btn-span\">\n           </span>\n              Redo\n          </button>\n\n          <button class=\"btn btn-info btn-row\"\n                  id=\"").concat(id, "-btn-clear-all\"\n                  data-placement=\"bottom\"\n                  data-toggle=\"tooltip\"\n                  title=\"Clear All current markups\"\n                  disabled>\n           <span class=\"glyphicon glyphicon-trash btn-span\">\n           </span>\n              Clear\n          </button>\n        </div>\n\n        <hr class=\"v-spacer-large\">\n\n        <div class=\"layer-container\">\n\n          <button class=\"btn btn-info\"\n                  id=\"").concat(id, "-btn-save\"\n                  data-placement=\"bottom\"\n                  data-toggle=\"tooltip\"\n                  title=\"Save current markups as layer\"\n                  disabled>\n            <span class=\"glyphicon glyphicon-floppy-open btn-span\"\n                  aria-hidden=\"true\">\n            </span>\n            Save\n          </button>\n\n          <input id=\"").concat(id, "-layer-name\" type=\"text\"\n            class=\"input\"\n            placeholder=\" Layer Name ...\">\n\n          <hr class=\"v-spacer-large\">\n\n          <div class=\"layer-list\" id=\"").concat(id, "-layer-list\">\n\n          </div>\n\n        </div>\n\n      </div>");
    return html;
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function initialize() {
    _thisPanel.content = document.createElement('div');
    $(_thisPanel.container).addClass('markup');
    $(_thisPanel.container).append(generateHtml(panelId)); //$('[data-toggle="tooltip"]').tooltip();

    var modes = [{
      label: 'Arrow',
      handler: function handler() {
        setEditMode('arrow');
      }
    }, {
      label: 'Circle',
      handler: function handler() {
        setEditMode('circle');
      }
    }, {
      label: 'Cloud',
      handler: function handler() {
        setEditMode('cloud');
      }
    }, {
      label: 'Free Hand',
      handler: function handler() {
        setEditMode('freehand');
      }
    }, {
      label: 'Rectangle',
      handler: function handler() {
        setEditMode('rectangle');
      }
    }, {
      label: 'Text',
      handler: function handler() {
        setEditMode('text');
      }
    }];
    var dropdown = createDropdownMenu("#".concat(panelId, "-dropdown-mode-container"), 'Markup Mode', modes);
    $("#".concat(panelId, "-spectrum")).spectrum({
      color: '#FF0000',
      change: function change(color) {
        var clr = color.toHexString();
      }
    });
    _controlIds = ["#".concat(dropdown.buttonId), "#".concat(panelId, "-btn-undo"), "#".concat(panelId, "-btn-redo"), "#".concat(panelId, "-btn-clear-all"), "#".concat(panelId, "-btn-save")];
    _thisPanel.switchMode = new SwitchButton__WEBPACK_IMPORTED_MODULE_0__["default"]("#".concat(panelId, "-switch-container"), false);

    _thisPanel.switchMode.on('checked', function (checked) {
      checked ? enterEditMode() : enterViewMode();
    });

    $("#".concat(panelId, "-btn-undo")).click(onUndo);
    $("#".concat(panelId, "-btn-redo")).click(onRedo);
    $("#".concat(panelId, "-btn-clear-all")).click(onClearMarkups);
    $("#".concat(panelId, "-btn-save")).click(onSaveLayer);
    $("#".concat(panelId, "-style")).focusout(setMarkupStyle);
  } ///////////////////////////////////////////////////////////////////////////
  // Creates dropdown menu from input
  //
  ///////////////////////////////////////////////////////////////////////////


  function createDropdownMenu(parent, title, menuItems, selectedItemIdx) {
    var buttonId = guid();
    var labelId = guid();
    var menuId = guid();
    var listId = guid();
    var html = "\n        <div id=\"".concat(menuId, "\" class=\"dropdown chart-dropdown\">\n          <button id=\"").concat(buttonId, "\"\n                  class=\"btn btn-default btn-dropdown dropdown-toggle\"\n                  type=\"button\"\n                  data-toggle=\"dropdown\"\n                  disabled>\n          <label id=\"").concat(labelId, "\"\n                 style=\"font: normal 14px Times New Roman; margin-top:-4px;\">\n            ").concat(title, "\n          </label>\n          <span class=\"caret btn-span\"></span>\n          </button>\n          <ul id=\"").concat(listId, "\" class=\"dropdown-menu scrollable-menu\">\n          </ul>\n        </div>\n      ");
    $(parent).append(html);
    $('#' + labelId).text(title + ': ' + menuItems[selectedItemIdx || 0].label);
    menuItems.forEach(function (menuItem) {
      var itemId = guid();
      var itemHtml = "\n          <li id=\"".concat(itemId, "\">\n            <a href=\"\">").concat(menuItem.label, "</a>\n          </li>");
      $('#' + listId).append(itemHtml);
      $('#' + itemId).click(function (event) {
        event.preventDefault();
        menuItem.handler();
        $('#' + labelId).text(title + ': ' + menuItem.label);
      });
    });
    return {
      menuId: menuId,
      buttonId: buttonId
    };
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function enterEditMode() {
    _viewMode = false;

    _markupsExtension.hide();

    _markupsExtension.enterEditMode();

    _controlIds.forEach(function (id) {
      $(id).prop('disabled', false);
    });

    $("#".concat(panelId, "-layer-list")).removeClass('view-mode');
    setMarkupStyle();
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function enterViewMode() {
    _viewMode = true;

    _markupsExtension.leaveEditMode();

    _markupsExtension.show();

    _controlIds.forEach(function (id) {
      $(id).prop('disabled', true);
    });

    $("#".concat(panelId, "-layer-list")).addClass('view-mode');
    loadMarkups();
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function onUndo() {
    _markupsExtension.undo();
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function onRedo() {
    _markupsExtension.redo();
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function onClearMarkups() {
    _markupsExtension.clear();
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function onSaveLayer() {
    var $input = $("#".concat(panelId, "-layer-name"));
    var name = $input.val();
    $input.val('');
    name = name.length ? name : new Date().toString('d/M/yyyy H:mm:ss').split('GMT')[0];
    var item = {
      name: name,
      id: guid(),
      enabled: false,
      markupData: _markupsExtension.generateData()
    };
    _layerItems[item.id] = item;
    addLayerItem(item);
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function addLayerItem(item) {
    var itemHtml = "\n\n        <div id=\"".concat(item.id, "\"\n             class=\"list-group-item ").concat(item.enabled ? 'enabled' : '', "\">\n\n            ").concat(item.name, "\n\n            <button id=\"").concat(item.id, "-delete-btn\"\n                    class=\"btn btn-danger btn-list\">\n              <span class=\"glyphicon glyphicon-remove-sign btn-span-list\">\n              </span>\n            </button>\n        </div>\n      ");
    $("#".concat(panelId, "-layer-list")).append(itemHtml);
    var $item = $("#".concat(item.id));
    $item.click(function () {
      if (_viewMode) {
        $item.toggleClass('enabled');

        if ($item.hasClass('enabled')) {
          _markupsExtension.loadMarkups(item.markupData, item.id); //_markupsExtension.showMarkups(item.id);

        } else {
          _markupsExtension.unloadMarkups(item.id); //_markupsExtension.hideMarkups(item.id);

        }
      }
    });
    $("#".concat(item.id, "-delete-btn")).click(function () {
      _markupsExtension.unloadMarkups(item.id);

      delete _layerItems[item.id];
      $item.remove();
    });
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function loadMarkups() {
    $('.markup .list-group-item').each(function () {
      var $item = $(this);

      if ($item.hasClass('enabled')) {
        var item = _layerItems[this.id];

        _markupsExtension.loadMarkups(item.markupData, item.id);
      }
    });
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function setEditMode(mode) {
    switch (mode) {
      case 'arrow':
        var mode = new MarkupsCore.EditModeArrow(_markupsExtension);

        _markupsExtension.changeEditMode(mode);

        break;

      case 'circle':
        var mode = new MarkupsCore.EditModeCircle(_markupsExtension);

        _markupsExtension.changeEditMode(mode);

        break;

      case 'cloud':
        var mode = new MarkupsCore.EditModeCloud(_markupsExtension);

        _markupsExtension.changeEditMode(mode);

        break;

      case 'freehand':
        var mode = new MarkupsCore.EditModeFreehand(_markupsExtension);

        _markupsExtension.changeEditMode(mode);

        break;

      case 'rectangle':
        var mode = new MarkupsCore.EditModeRectangle(_markupsExtension);

        _markupsExtension.changeEditMode(mode);

        break;

      case 'text':
        var mode = new MarkupsCore.EditModeText(_markupsExtension);

        _markupsExtension.changeEditMode(mode);

        break;
    }
  } /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  function setMarkupStyle() {
    if (!_viewMode) {
      try {
        var styleStr = '{' + $("#".concat(panelId, "-style")).val() + '}';
        var style = JSON.parse(styleStr);
        var styleAttributes = ['stroke-width', 'stroke-color', 'stroke-opacity'];
        var nsu = Autodesk.Viewing.Extensions.Markups.Core.Utils;
        var styleObject = nsu.createStyle(styleAttributes, viewer);
        console.log(JSON.stringify(styleObject));
        console.log(style);

        _markupsExtension.setStyle(style);
      } catch (ex) {
        console.log(ex);
      }
    }
  } /////////////////////////////////////////////////////////////
  // unload extension
  //
  /////////////////////////////////////////////////////////////


  _thisPanel.unload = function () {
    _thisPanel.setVisible(false);

    deactivateMarkups();
  }; /////////////////////////////////////////////////////////////
  // setVisible override
  //
  /////////////////////////////////////////////////////////////


  _thisPanel.setVisible = function (show) {
    _isVisible = show;
    Autodesk.Viewing.UI.DockingPanel.prototype.setVisible.call(this, show);

    if (show) {
      btnElement.classList.add('active');
      viewer.loadExtension("Autodesk.Viewing.MarkupsCore");
      _markupsExtension = viewer.getExtension("Autodesk.Viewing.MarkupsCore");
      MarkupsCore = Autodesk.Viewing.Extensions.Markups.Core;
      enterViewMode();
    } else {
      btnElement.classList.remove('active');
      viewer.unloadExtension("Autodesk.Viewing.MarkupsCore");
      _markupsExtension = null;
    }
  }; /////////////////////////////////////////////////////////////
  // Toggles panel visibility
  //
  /////////////////////////////////////////////////////////////


  _thisPanel.toggleVisibility = function () {
    _thisPanel.setVisible(!_isVisible);
  }; /////////////////////////////////////////////////////////////
  // initialize override
  //
  /////////////////////////////////////////////////////////////


  _thisPanel.initialize = function () {
    this.title = this.createTitleBar(this.titleLabel || this.container.id);
    this.closer = this.createCloseButton();
    this.container.appendChild(this.title);
    this.title.appendChild(this.closer);
    this.container.appendChild(this.content);
    this.initializeMoveHandlers(this.title);
    this.initializeCloseHandler(this.closer);
  }; /////////////////////////////////////////////////////////////
  // onTitleDoubleClick override
  //
  /////////////////////////////////////////////////////////////


  _thisPanel.onTitleDoubleClick = function (event) {
    _isMinimized = !_isMinimized;

    if (_isMinimized) {
      $(_thisPanel.container).addClass('minimized');
    } else {
      $(_thisPanel.container).removeClass('minimized');
    }
  }; // Initializes the panel


  initialize();
} /////////////////////////////////////////////////////////////
// Set up JS inheritance
//
/////////////////////////////////////////////////////////////

Markup2DPanel.prototype = Object.create(Autodesk.Viewing.UI.DockingPanel.prototype);
Markup2DPanel.prototype.constructor = Markup2DPanel; ///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////

function guid() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxx';
  var d = new Date().getTime();
  var guid = format.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return guid;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.css":
/*!***********************************************************************!*\
  !*** ./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??ref--6-2!./Viewing.Extension.Markup2D.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.js":
/*!**********************************************************************!*\
  !*** ./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Viewing_Extension_Markup2D_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Viewing.Extension.Markup2D.Panel */ "./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.Panel.js");
/* harmony import */ var Viewer_ExtensionBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Viewer.ExtensionBase */ "./src/components/Viewer.ExtensionBase/index.js");
/* harmony import */ var Viewer_Toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Viewer.Toolkit */ "./src/components/Viewer.Toolkit/index.js");
/* harmony import */ var _Viewing_Extension_Markup2D_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Viewing.Extension.Markup2D.css */ "./src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.css");
/* harmony import */ var _Viewing_Extension_Markup2D_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Viewing_Extension_Markup2D_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MarkupsCore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MarkupsCore.js */ "./src/Viewing.Extension.Markup2D/MarkupsCore.js");
/* harmony import */ var _MarkupsCore_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MarkupsCore_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _spectrum_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spectrum.css */ "./src/Viewing.Extension.Markup2D/spectrum.css");
/* harmony import */ var _spectrum_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_spectrum_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _spectrum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spectrum */ "./src/Viewing.Extension.Markup2D/spectrum.js");





/////////////////////////////////////////////////////////////////////
// Autodesk.ADN.Viewing.Extension.Markup
// by Philippe Leefsma, Feb 2016
//
/////////////////////////////////////////////////////////////////////








var Markup2DExtension =
/*#__PURE__*/
function (_ExtensionBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Markup2DExtension, _ExtensionBase);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function Markup2DExtension(viewer, options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Markup2DExtension);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Markup2DExtension).call(this, viewer, options));
  } /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Markup2DExtension, [{
    key: "load",
    /////////////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////////////
    value: function load() {
      if (LMV_VIEWER_VERSION.slice(0, 1) <= 6) this.onToolbarCreated();
      console.log('Viewing.Extension.Markup2D loaded');
      return true;
    }
  }, {
    key: "onToolbarCreated",
    value: function onToolbarCreated() {
      var _this = this;

      this._control = Viewer_Toolkit__WEBPACK_IMPORTED_MODULE_7__["default"].createButton('toolbar-markup2D', 'glyphicon glyphicon-edit', 'Markup 2D Panel', function () {
        _this._panel.toggleVisibility();
      });
      this._panel = new _Viewing_Extension_Markup2D_Panel__WEBPACK_IMPORTED_MODULE_5__["default"](this._viewer, 'markup2d', this._control.container);
      this.parentControl = this._options.parentControl;

      if (!this.parentControl) {
        var viewerToolbar = this._viewer.getToolbar(true);

        this.parentControl = new Autodesk.Viewing.UI.ControlGroup('markup');
        viewerToolbar.addControl(this.parentControl);
      }

      this.parentControl.addControl(this._control);

      this._panel.setVisible(this._options.showPanel);
    } /////////////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "unload",
    value: function unload() {
      this.parentControl.removeControl(this._control);
      console.log('Viewing.Extension.Markup2D unloaded');
    }
  }], [{
    key: "ExtensionId",
    get: function get() {
      return 'Viewing.Extension.Markup2D';
    }
  }]);

  return Markup2DExtension;
}(Viewer_ExtensionBase__WEBPACK_IMPORTED_MODULE_6__["default"]);

Autodesk.Viewing.theExtensionManager.registerExtension(Markup2DExtension.ExtensionId, Markup2DExtension);

/***/ }),

/***/ "./src/Viewing.Extension.Markup2D/spectrum.css":
/*!*****************************************************!*\
  !*** ./src/Viewing.Extension.Markup2D/spectrum.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??ref--6-2!./spectrum.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Viewing.Extension.Markup2D/spectrum.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/Viewing.Extension.Markup2D/spectrum.js":
/*!****************************************************!*\
  !*** ./src/Viewing.Extension.Markup2D/spectrum.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


// Spectrum Colorpicker v1.5.1
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT
(function (window, $, undefined) {
  "use strict";

  var defaultOpts = {
    // Callbacks
    beforeShow: noop,
    move: noop,
    change: noop,
    show: noop,
    hide: noop,
    // Options
    color: false,
    flat: false,
    showInput: false,
    allowEmpty: false,
    showButtons: true,
    clickoutFiresChange: false,
    showInitial: false,
    showPalette: false,
    showPaletteOnly: false,
    hideAfterPaletteSelect: false,
    togglePaletteOnly: false,
    showSelectionPalette: true,
    localStorageKey: false,
    appendTo: "body",
    maxSelectionSize: 7,
    cancelText: "cancel",
    chooseText: "choose",
    togglePaletteMoreText: "more",
    togglePaletteLessText: "less",
    clearText: "Clear Color Selection",
    noColorSelectedText: "No Color Selected",
    preferredFormat: false,
    className: "",
    // Deprecated - use containerClassName and replacerClassName instead.
    containerClassName: "",
    replacerClassName: "",
    showAlpha: false,
    theme: "sp-light",
    palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
    selectionPalette: [],
    disabled: false
  },
      spectrums = [],
      IE = !!/msie/i.exec(window.navigator.userAgent),
      rgbaSupport = function () {
    function contains(str, substr) {
      return !!~('' + str).indexOf(substr);
    }

    var elem = document.createElement('div');
    var style = elem.style;
    style.cssText = 'background-color:rgba(0,0,0,.5)';
    return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
  }(),
      inputTypeColorSupport = function () {
    var colorInput = $("<input type='color' value='!' />")[0];
    return colorInput.type === "color" && colorInput.value !== "!";
  }(),
      replaceInput = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(''),
      markup = function () {
    // IE does not support gradients with multiple stops, so we need to simulate
    //  that for the rainbow slider with 8 divs that each have a single gradient
    var gradientFix = "";

    if (IE) {
      for (var i = 1; i <= 6; i++) {
        gradientFix += "<div class='sp-" + i + "'></div>";
      }
    }

    return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "<div class='sp-palette-button-container sp-cf'>", "<button type='button' class='sp-palette-toggle'></button>", "</div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", gradientFix, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button type='button' class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("");
  }();

  function paletteTemplate(p, color, className, opts) {
    var html = [];

    for (var i = 0; i < p.length; i++) {
      var current = p[i];

      if (current) {
        var tiny = tinycolor(current);
        var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
        c += tinycolor.equals(color, current) ? " sp-thumb-active" : "";
        var formattedString = tiny.toString(opts.preferredFormat || "rgb");
        var swatchStyle = rgbaSupport ? "background-color:" + tiny.toRgbString() : "filter:" + tiny.toFilter();
        html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
      } else {
        var cls = 'sp-clear-display';
        html.push($('<div />').append($('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>').attr('title', opts.noColorSelectedText)).html());
      }
    }

    return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
  }

  function hideAll() {
    for (var i = 0; i < spectrums.length; i++) {
      if (spectrums[i]) {
        spectrums[i].hide();
      }
    }
  }

  function instanceOptions(o, callbackContext) {
    var opts = $.extend({}, defaultOpts, o);
    opts.callbacks = {
      'move': bind(opts.move, callbackContext),
      'change': bind(opts.change, callbackContext),
      'show': bind(opts.show, callbackContext),
      'hide': bind(opts.hide, callbackContext),
      'beforeShow': bind(opts.beforeShow, callbackContext)
    };
    return opts;
  }

  function spectrum(element, o) {
    var opts = instanceOptions(o, element),
        flat = opts.flat,
        showSelectionPalette = opts.showSelectionPalette,
        localStorageKey = opts.localStorageKey,
        theme = opts.theme,
        callbacks = opts.callbacks,
        resize = throttle(reflow, 10),
        visible = false,
        dragWidth = 0,
        dragHeight = 0,
        dragHelperHeight = 0,
        slideHeight = 0,
        slideWidth = 0,
        alphaWidth = 0,
        alphaSlideHelperWidth = 0,
        slideHelperHeight = 0,
        currentHue = 0,
        currentSaturation = 0,
        currentValue = 0,
        currentAlpha = 1,
        palette = [],
        paletteArray = [],
        paletteLookup = {},
        selectionPalette = opts.selectionPalette.slice(0),
        maxSelectionSize = opts.maxSelectionSize,
        draggingClass = "sp-dragging",
        shiftMovementDirection = null;
    var doc = element.ownerDocument,
        body = doc.body,
        boundElement = $(element),
        disabled = false,
        container = $(markup, doc).addClass(theme),
        pickerContainer = container.find(".sp-picker-container"),
        dragger = container.find(".sp-color"),
        dragHelper = container.find(".sp-dragger"),
        slider = container.find(".sp-hue"),
        slideHelper = container.find(".sp-slider"),
        alphaSliderInner = container.find(".sp-alpha-inner"),
        alphaSlider = container.find(".sp-alpha"),
        alphaSlideHelper = container.find(".sp-alpha-handle"),
        textInput = container.find(".sp-input"),
        paletteContainer = container.find(".sp-palette"),
        initialColorContainer = container.find(".sp-initial"),
        cancelButton = container.find(".sp-cancel"),
        clearButton = container.find(".sp-clear"),
        chooseButton = container.find(".sp-choose"),
        toggleButton = container.find(".sp-palette-toggle"),
        isInput = boundElement.is("input"),
        isInputTypeColor = isInput && inputTypeColorSupport && boundElement.attr("type") === "color",
        shouldReplace = isInput && !flat,
        replacer = shouldReplace ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
        offsetElement = shouldReplace ? replacer : boundElement,
        previewElement = replacer.find(".sp-preview-inner"),
        initialColor = opts.color || isInput && boundElement.val(),
        colorOnShow = false,
        preferredFormat = opts.preferredFormat,
        currentPreferredFormat = preferredFormat,
        clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
        isEmpty = !initialColor,
        allowEmpty = opts.allowEmpty && !isInputTypeColor;

    function applyOptions() {
      if (opts.showPaletteOnly) {
        opts.showPalette = true;
      }

      toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);

      if (opts.palette) {
        palette = opts.palette.slice(0);
        paletteArray = $.isArray(palette[0]) ? palette : [palette];
        paletteLookup = {};

        for (var i = 0; i < paletteArray.length; i++) {
          for (var j = 0; j < paletteArray[i].length; j++) {
            var rgb = tinycolor(paletteArray[i][j]).toRgbString();
            paletteLookup[rgb] = true;
          }
        }
      }

      container.toggleClass("sp-flat", flat);
      container.toggleClass("sp-input-disabled", !opts.showInput);
      container.toggleClass("sp-alpha-enabled", opts.showAlpha);
      container.toggleClass("sp-clear-enabled", allowEmpty);
      container.toggleClass("sp-buttons-disabled", !opts.showButtons);
      container.toggleClass("sp-palette-buttons-disabled", !opts.togglePaletteOnly);
      container.toggleClass("sp-palette-disabled", !opts.showPalette);
      container.toggleClass("sp-palette-only", opts.showPaletteOnly);
      container.toggleClass("sp-initial-disabled", !opts.showInitial);
      container.addClass(opts.className).addClass(opts.containerClassName);
      reflow();
    }

    function initialize() {
      if (IE) {
        container.find("*:not(input)").attr("unselectable", "on");
      }

      applyOptions();

      if (shouldReplace) {
        boundElement.after(replacer).hide();
      }

      if (!allowEmpty) {
        clearButton.hide();
      }

      if (flat) {
        boundElement.after(container).hide();
      } else {
        var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);

        if (appendTo.length !== 1) {
          appendTo = $("body");
        }

        appendTo.append(container);
      }

      updateSelectionPaletteFromStorage();
      offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
        if (!disabled) {
          toggle();
        }

        e.stopPropagation();

        if (!$(e.target).is("input")) {
          e.preventDefault();
        }
      });

      if (boundElement.is(":disabled") || opts.disabled === true) {
        disable();
      } // Prevent clicks from bubbling up to document.  This would cause it to be hidden.


      container.click(stopPropagation); // Handle user typed input

      textInput.change(setFromTextInput);
      textInput.bind("paste", function () {
        setTimeout(setFromTextInput, 1);
      });
      textInput.keydown(function (e) {
        if (e.keyCode == 13) {
          setFromTextInput();
        }
      });
      cancelButton.text(opts.cancelText);
      cancelButton.bind("click.spectrum", function (e) {
        e.stopPropagation();
        e.preventDefault();
        revert();
        hide();
      });
      clearButton.attr("title", opts.clearText);
      clearButton.bind("click.spectrum", function (e) {
        e.stopPropagation();
        e.preventDefault();
        isEmpty = true;
        move();

        if (flat) {
          //for the flat style, this is a change event
          updateOriginalInput(true);
        }
      });
      chooseButton.text(opts.chooseText);
      chooseButton.bind("click.spectrum", function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (isValid()) {
          updateOriginalInput(true);
          hide();
        }
      });
      toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
      toggleButton.bind("click.spectrum", function (e) {
        e.stopPropagation();
        e.preventDefault();
        opts.showPaletteOnly = !opts.showPaletteOnly; // To make sure the Picker area is drawn on the right, next to the
        // Palette area (and not below the palette), first move the Palette
        // to the left to make space for the picker, plus 5px extra.
        // The 'applyOptions' function puts the whole container back into place
        // and takes care of the button-text and the sp-palette-only CSS class.

        if (!opts.showPaletteOnly && !flat) {
          container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
        }

        applyOptions();
      });
      draggable(alphaSlider, function (dragX, dragY, e) {
        currentAlpha = dragX / alphaWidth;
        isEmpty = false;

        if (e.shiftKey) {
          currentAlpha = Math.round(currentAlpha * 10) / 10;
        }

        move();
      }, dragStart, dragStop);
      draggable(slider, function (dragX, dragY) {
        currentHue = parseFloat(dragY / slideHeight);
        isEmpty = false;

        if (!opts.showAlpha) {
          currentAlpha = 1;
        }

        move();
      }, dragStart, dragStop);
      draggable(dragger, function (dragX, dragY, e) {
        // shift+drag should snap the movement to either the x or y axis.
        if (!e.shiftKey) {
          shiftMovementDirection = null;
        } else if (!shiftMovementDirection) {
          var oldDragX = currentSaturation * dragWidth;
          var oldDragY = dragHeight - currentValue * dragHeight;
          var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);
          shiftMovementDirection = furtherFromX ? "x" : "y";
        }

        var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
        var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

        if (setSaturation) {
          currentSaturation = parseFloat(dragX / dragWidth);
        }

        if (setValue) {
          currentValue = parseFloat((dragHeight - dragY) / dragHeight);
        }

        isEmpty = false;

        if (!opts.showAlpha) {
          currentAlpha = 1;
        }

        move();
      }, dragStart, dragStop);

      if (!!initialColor) {
        _set(initialColor); // In case color was black - update the preview UI and set the format
        // since the set function will not run (default color is black).


        updateUI();
        currentPreferredFormat = preferredFormat || tinycolor(initialColor).format;
        addColorToSelectionPalette(initialColor);
      } else {
        updateUI();
      }

      if (flat) {
        show();
      }

      function paletteElementClick(e) {
        if (e.data && e.data.ignore) {
          _set($(e.target).closest(".sp-thumb-el").data("color"));

          move();
        } else {
          _set($(e.target).closest(".sp-thumb-el").data("color"));

          move();
          updateOriginalInput(true);

          if (opts.hideAfterPaletteSelect) {
            hide();
          }
        }

        return false;
      }

      var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
      paletteContainer.delegate(".sp-thumb-el", paletteEvent, paletteElementClick);
      initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, {
        ignore: true
      }, paletteElementClick);
    }

    function updateSelectionPaletteFromStorage() {
      if (localStorageKey && window.localStorage) {
        // Migrate old palettes over to new format.  May want to remove this eventually.
        try {
          var oldPalette = window.localStorage[localStorageKey].split(",#");

          if (oldPalette.length > 1) {
            delete window.localStorage[localStorageKey];
            $.each(oldPalette, function (i, c) {
              addColorToSelectionPalette(c);
            });
          }
        } catch (e) {}

        try {
          selectionPalette = window.localStorage[localStorageKey].split(";");
        } catch (e) {}
      }
    }

    function addColorToSelectionPalette(color) {
      if (showSelectionPalette) {
        var rgb = tinycolor(color).toRgbString();

        if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
          selectionPalette.push(rgb);

          while (selectionPalette.length > maxSelectionSize) {
            selectionPalette.shift();
          }
        }

        if (localStorageKey && window.localStorage) {
          try {
            window.localStorage[localStorageKey] = selectionPalette.join(";");
          } catch (e) {}
        }
      }
    }

    function getUniqueSelectionPalette() {
      var unique = [];

      if (opts.showPalette) {
        for (var i = 0; i < selectionPalette.length; i++) {
          var rgb = tinycolor(selectionPalette[i]).toRgbString();

          if (!paletteLookup[rgb]) {
            unique.push(selectionPalette[i]);
          }
        }
      }

      return unique.reverse().slice(0, opts.maxSelectionSize);
    }

    function drawPalette() {
      var currentColor = get();
      var html = $.map(paletteArray, function (palette, i) {
        return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts);
      });
      updateSelectionPaletteFromStorage();

      if (selectionPalette) {
        html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts));
      }

      paletteContainer.html(html.join(""));
    }

    function drawInitial() {
      if (opts.showInitial) {
        var initial = colorOnShow;
        var current = get();
        initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts));
      }
    }

    function dragStart() {
      if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
        reflow();
      }

      container.addClass(draggingClass);
      shiftMovementDirection = null;
      boundElement.trigger('dragstart.spectrum', [get()]);
    }

    function dragStop() {
      container.removeClass(draggingClass);
      boundElement.trigger('dragstop.spectrum', [get()]);
    }

    function setFromTextInput() {
      var value = textInput.val();

      if ((value === null || value === "") && allowEmpty) {
        _set(null);

        updateOriginalInput(true);
      } else {
        var tiny = tinycolor(value);

        if (tiny.isValid()) {
          _set(tiny);

          updateOriginalInput(true);
        } else {
          textInput.addClass("sp-validation-error");
        }
      }
    }

    function toggle() {
      if (visible) {
        hide();
      } else {
        show();
      }
    }

    function show() {
      var event = $.Event('beforeShow.spectrum');

      if (visible) {
        reflow();
        return;
      }

      boundElement.trigger(event, [get()]);

      if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
        return;
      }

      hideAll();
      visible = true;
      $(doc).bind("click.spectrum", clickout);
      $(window).bind("resize.spectrum", resize);
      replacer.addClass("sp-active");
      container.removeClass("sp-hidden");
      reflow();
      updateUI();
      colorOnShow = get();
      drawInitial();
      callbacks.show(colorOnShow);
      boundElement.trigger('show.spectrum', [colorOnShow]);
    }

    function clickout(e) {
      // Return on right click.
      if (e && e.type == "click" && e.button == 2) {
        return;
      }

      if (clickoutFiresChange) {
        updateOriginalInput(true);
      } else {
        revert();
      }

      hide();
    }

    function hide() {
      // Return if hiding is unnecessary
      if (!visible || flat) {
        return;
      }

      visible = false;
      $(doc).unbind("click.spectrum", clickout);
      $(window).unbind("resize.spectrum", resize);
      replacer.removeClass("sp-active");
      container.addClass("sp-hidden");
      callbacks.hide(get());
      boundElement.trigger('hide.spectrum', [get()]);
    }

    function revert() {
      _set(colorOnShow, true);
    }

    function _set(color, ignoreFormatChange) {
      if (tinycolor.equals(color, get())) {
        // Update UI just in case a validation error needs
        // to be cleared.
        updateUI();
        return;
      }

      var newColor, newHsv;

      if (!color && allowEmpty) {
        isEmpty = true;
      } else {
        isEmpty = false;
        newColor = tinycolor(color);
        newHsv = newColor.toHsv();
        currentHue = newHsv.h % 360 / 360;
        currentSaturation = newHsv.s;
        currentValue = newHsv.v;
        currentAlpha = newHsv.a;
      }

      updateUI();

      if (newColor && newColor.isValid() && !ignoreFormatChange) {
        currentPreferredFormat = preferredFormat || newColor.getFormat();
      }
    }

    function get(opts) {
      opts = opts || {};

      if (allowEmpty && isEmpty) {
        return null;
      }

      return tinycolor.fromRatio({
        h: currentHue,
        s: currentSaturation,
        v: currentValue,
        a: Math.round(currentAlpha * 100) / 100
      }, {
        format: opts.format || currentPreferredFormat
      });
    }

    function isValid() {
      return !textInput.hasClass("sp-validation-error");
    }

    function move() {
      updateUI();
      callbacks.move(get());
      boundElement.trigger('move.spectrum', [get()]);
    }

    function updateUI() {
      textInput.removeClass("sp-validation-error");
      updateHelperLocations(); // Update dragger background color (gradients take care of saturation and value).

      var flatColor = tinycolor.fromRatio({
        h: currentHue,
        s: 1,
        v: 1
      });
      dragger.css("background-color", flatColor.toHexString()); // Get a format that alpha will be included in (hex and names ignore alpha)

      var format = currentPreferredFormat;

      if (currentAlpha < 1 && !(currentAlpha === 0 && format === "name")) {
        if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
          format = "rgb";
        }
      }

      var realColor = get({
        format: format
      }),
          displayColor = ''; //reset background info for preview element

      previewElement.removeClass("sp-clear-display");
      previewElement.css('background-color', 'transparent');

      if (!realColor && allowEmpty) {
        // Update the replaced elements background with icon indicating no color selection
        previewElement.addClass("sp-clear-display");
      } else {
        var realHex = realColor.toHexString(),
            realRgb = realColor.toRgbString(); // Update the replaced elements background color (with actual selected color)

        if (rgbaSupport || realColor.alpha === 1) {
          previewElement.css("background-color", realRgb);
        } else {
          previewElement.css("background-color", "transparent");
          previewElement.css("filter", realColor.toFilter());
        }

        if (opts.showAlpha) {
          var rgb = realColor.toRgb();
          rgb.a = 0;
          var realAlpha = tinycolor(rgb).toRgbString();
          var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

          if (IE) {
            alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({
              gradientType: 1
            }, realHex));
          } else {
            alphaSliderInner.css("background", "-webkit-" + gradient);
            alphaSliderInner.css("background", "-moz-" + gradient);
            alphaSliderInner.css("background", "-ms-" + gradient); // Use current syntax gradient on unprefixed property.

            alphaSliderInner.css("background", "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
          }
        }

        displayColor = realColor.toString(format);
      } // Update the text entry input as it changes happen


      if (opts.showInput) {
        textInput.val(displayColor);
      }

      if (opts.showPalette) {
        drawPalette();
      }

      drawInitial();
    }

    function updateHelperLocations() {
      var s = currentSaturation;
      var v = currentValue;

      if (allowEmpty && isEmpty) {
        //if selected color is empty, hide the helpers
        alphaSlideHelper.hide();
        slideHelper.hide();
        dragHelper.hide();
      } else {
        //make sure helpers are visible
        alphaSlideHelper.show();
        slideHelper.show();
        dragHelper.show(); // Where to show the little circle in that displays your current selected color

        var dragX = s * dragWidth;
        var dragY = dragHeight - v * dragHeight;
        dragX = Math.max(-dragHelperHeight, Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight));
        dragY = Math.max(-dragHelperHeight, Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight));
        dragHelper.css({
          "top": dragY + "px",
          "left": dragX + "px"
        });
        var alphaX = currentAlpha * alphaWidth;
        alphaSlideHelper.css({
          "left": alphaX - alphaSlideHelperWidth / 2 + "px"
        }); // Where to show the bar that displays your current selected hue

        var slideY = currentHue * slideHeight;
        slideHelper.css({
          "top": slideY - slideHelperHeight + "px"
        });
      }
    }

    function updateOriginalInput(fireCallback) {
      var color = get(),
          displayColor = '',
          hasChanged = !tinycolor.equals(color, colorOnShow);

      if (color) {
        displayColor = color.toString(currentPreferredFormat); // Update the selection palette with the current color

        addColorToSelectionPalette(color);
      }

      if (isInput) {
        boundElement.val(displayColor);
      }

      if (fireCallback && hasChanged) {
        callbacks.change(color);
        boundElement.trigger('change', [color]);
      }
    }

    function reflow() {
      dragWidth = dragger.width();
      dragHeight = dragger.height();
      dragHelperHeight = dragHelper.height();
      slideWidth = slider.width();
      slideHeight = slider.height();
      slideHelperHeight = slideHelper.height();
      alphaWidth = alphaSlider.width();
      alphaSlideHelperWidth = alphaSlideHelper.width();

      if (!flat) {
        container.css("position", "absolute");
        container.offset(getOffset(container, offsetElement));
      }

      updateHelperLocations();

      if (opts.showPalette) {
        drawPalette();
      }

      boundElement.trigger('reflow.spectrum');
    }

    function destroy() {
      boundElement.show();
      offsetElement.unbind("click.spectrum touchstart.spectrum");
      container.remove();
      replacer.remove();
      spectrums[spect.id] = null;
    }

    function option(optionName, optionValue) {
      if (optionName === undefined) {
        return $.extend({}, opts);
      }

      if (optionValue === undefined) {
        return opts[optionName];
      }

      opts[optionName] = optionValue;
      applyOptions();
    }

    function enable() {
      disabled = false;
      boundElement.attr("disabled", false);
      offsetElement.removeClass("sp-disabled");
    }

    function disable() {
      hide();
      disabled = true;
      boundElement.attr("disabled", true);
      offsetElement.addClass("sp-disabled");
    }

    initialize();
    var spect = {
      show: show,
      hide: hide,
      toggle: toggle,
      reflow: reflow,
      option: option,
      enable: enable,
      disable: disable,
      set: function set(c) {
        _set(c);

        updateOriginalInput();
      },
      get: get,
      destroy: destroy,
      container: container
    };
    spect.id = spectrums.push(spect) - 1;
    return spect;
  }
  /**
  * checkOffset - get the offset below/above and left/right element depending on screen position
  * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
  */


  function getOffset(picker, input) {
    var extraY = 0;
    var dpWidth = picker.outerWidth();
    var dpHeight = picker.outerHeight();
    var inputHeight = input.outerHeight();
    var doc = picker[0].ownerDocument;
    var docElem = doc.documentElement;
    var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
    var viewHeight = docElem.clientHeight + $(doc).scrollTop();
    var offset = input.offset();
    offset.top += inputHeight;
    offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
    offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight - extraY) : extraY);
    return offset;
  }
  /**
  * noop - do nothing
  */


  function noop() {}
  /**
  * stopPropagation - makes the code only doing this a little easier to read in line
  */


  function stopPropagation(e) {
    e.stopPropagation();
  }
  /**
  * Create a function bound to a given object
  * Thanks to underscore.js
  */


  function bind(func, obj) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 2);
    return function () {
      return func.apply(obj, args.concat(slice.call(arguments)));
    };
  }
  /**
  * Lightweight drag helper.  Handles containment within the element, so that
  * when dragging, the x is within [0,element.width] and y is within [0,element.height]
  */


  function draggable(element, onmove, onstart, onstop) {
    onmove = onmove || function () {};

    onstart = onstart || function () {};

    onstop = onstop || function () {};

    var doc = document;
    var dragging = false;
    var offset = {};
    var maxHeight = 0;
    var maxWidth = 0;
    var hasTouch = 'ontouchstart' in window;
    var duringDragEvents = {};
    duringDragEvents["selectstart"] = prevent;
    duringDragEvents["dragstart"] = prevent;
    duringDragEvents["touchmove mousemove"] = move;
    duringDragEvents["touchend mouseup"] = stop;

    function prevent(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }

      if (e.preventDefault) {
        e.preventDefault();
      }

      e.returnValue = false;
    }

    function move(e) {
      if (dragging) {
        // Mouseup happened outside of window
        if (IE && doc.documentMode < 9 && !e.button) {
          return stop();
        }

        var touches = e.originalEvent.touches;
        var pageX = touches ? touches[0].pageX : e.pageX;
        var pageY = touches ? touches[0].pageY : e.pageY;
        var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
        var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

        if (hasTouch) {
          // Stop scrolling in iOS
          prevent(e);
        }

        onmove.apply(element, [dragX, dragY, e]);
      }
    }

    function start(e) {
      var rightclick = e.which ? e.which == 3 : e.button == 2;

      if (!rightclick && !dragging) {
        if (onstart.apply(element, arguments) !== false) {
          dragging = true;
          maxHeight = $(element).height();
          maxWidth = $(element).width();
          offset = $(element).offset();
          $(doc).bind(duringDragEvents);
          $(doc.body).addClass("sp-dragging");

          if (!hasTouch) {
            move(e);
          }

          prevent(e);
        }
      }
    }

    function stop() {
      if (dragging) {
        $(doc).unbind(duringDragEvents);
        $(doc.body).removeClass("sp-dragging");
        onstop.apply(element, arguments);
      }

      dragging = false;
    }

    $(element).bind("touchstart mousedown", start);
  }

  function throttle(func, wait, debounce) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var throttler = function throttler() {
        timeout = null;
        func.apply(context, args);
      };

      if (debounce) clearTimeout(timeout);
      if (debounce || !timeout) timeout = setTimeout(throttler, wait);
    };
  }
  /**
  * Define a jQuery plugin
  */


  var dataID = "spectrum.id";

  $.fn.spectrum = function (opts, extra) {
    if (typeof opts == "string") {
      var returnValue = this;
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var spect = spectrums[$(this).data(dataID)];

        if (spect) {
          var method = spect[opts];

          if (!method) {
            throw new Error("Spectrum: no such method: '" + opts + "'");
          }

          if (opts == "get") {
            returnValue = spect.get();
          } else if (opts == "container") {
            returnValue = spect.container;
          } else if (opts == "option") {
            returnValue = spect.option.apply(spect, args);
          } else if (opts == "destroy") {
            spect.destroy();
            $(this).removeData(dataID);
          } else {
            method.apply(spect, args);
          }
        }
      });
      return returnValue;
    } // Initializing a new instance of spectrum


    return this.spectrum("destroy").each(function () {
      var options = $.extend({}, opts, $(this).data());
      var spect = spectrum(this, options);
      $(this).data(dataID, spect.id);
    });
  };

  $.fn.spectrum.load = true;
  $.fn.spectrum.loadOpts = {};
  $.fn.spectrum.draggable = draggable;
  $.fn.spectrum.defaults = defaultOpts;
  $.spectrum = {};
  $.spectrum.localization = {};
  $.spectrum.palettes = {};

  $.fn.spectrum.processNativeColorInputs = function () {
    if (!inputTypeColorSupport) {
      $("input[type=color]").spectrum({
        preferredFormat: "hex6"
      });
    }
  }; // TinyColor v1.0.0
  // https://github.com/bgrins/TinyColor
  // Brian Grinstead, MIT License


  (function () {
    var trimLeft = /^[\s,#]+/,
        trimRight = /\s+$/,
        tinyCounter = 0,
        math = Math,
        mathRound = math.round,
        mathMin = math.min,
        mathMax = math.max,
        mathRandom = math.random;

    var tinycolor = function tinycolor(color, opts) {
      color = color ? color : '';
      opts = opts || {}; // If input is already a tinycolor, return itself

      if (color instanceof tinycolor) {
        return color;
      } // If we are called as a function, call using new instead


      if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
      }

      var rgb = inputToRGB(color);
      this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType; // Don't let the range of [0,255] come back in [0,1].
      // Potentially lose a little bit of precision here, but will fix issues where
      // .5 gets interpreted as half of the total, instead of half of 1
      // If it was supposed to be 128, this was already taken care of by `inputToRgb`

      if (this._r < 1) {
        this._r = mathRound(this._r);
      }

      if (this._g < 1) {
        this._g = mathRound(this._g);
      }

      if (this._b < 1) {
        this._b = mathRound(this._b);
      }

      this._ok = rgb.ok;
      this._tc_id = tinyCounter++;
    };

    tinycolor.prototype = {
      isDark: function isDark() {
        return this.getBrightness() < 128;
      },
      isLight: function isLight() {
        return !this.isDark();
      },
      isValid: function isValid() {
        return this._ok;
      },
      getFormat: function getFormat() {
        return this._format;
      },
      getAlpha: function getAlpha() {
        return this._a;
      },
      getBrightness: function getBrightness() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
      },
      setAlpha: function setAlpha(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100 * this._a) / 100;
        return this;
      },
      toHsv: function toHsv() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return {
          h: hsv.h * 360,
          s: hsv.s,
          v: hsv.v,
          a: this._a
        };
      },
      toHsvString: function toHsvString() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360),
            s = mathRound(hsv.s * 100),
            v = mathRound(hsv.v * 100);
        return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
      },
      toHsl: function toHsl() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return {
          h: hsl.h * 360,
          s: hsl.s,
          l: hsl.l,
          a: this._a
        };
      },
      toHslString: function toHslString() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360),
            s = mathRound(hsl.s * 100),
            l = mathRound(hsl.l * 100);
        return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
      },
      toHex: function toHex(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function toHexString(allow3Char) {
        return '#' + this.toHex(allow3Char);
      },
      toHex8: function toHex8() {
        return rgbaToHex(this._r, this._g, this._b, this._a);
      },
      toHex8String: function toHex8String() {
        return '#' + this.toHex8();
      },
      toRgb: function toRgb() {
        return {
          r: mathRound(this._r),
          g: mathRound(this._g),
          b: mathRound(this._b),
          a: this._a
        };
      },
      toRgbString: function toRgbString() {
        return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function toPercentageRgb() {
        return {
          r: mathRound(bound01(this._r, 255) * 100) + "%",
          g: mathRound(bound01(this._g, 255) * 100) + "%",
          b: mathRound(bound01(this._b, 255) * 100) + "%",
          a: this._a
        };
      },
      toPercentageRgbString: function toPercentageRgbString() {
        return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function toName() {
        if (this._a === 0) {
          return "transparent";
        }

        if (this._a < 1) {
          return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function toFilter(secondColor) {
        var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
          var s = tinycolor(secondColor);
          secondHex8String = s.toHex8String();
        }

        return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
      },
      toString: function toString(format) {
        var formatSet = !!format;
        format = format || this._format;
        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

        if (needsAlphaFormat) {
          // Special case for "transparent", all other non-alpha formats
          // will return rgba when there is transparency.
          if (format === "name" && this._a === 0) {
            return this.toName();
          }

          return this.toRgbString();
        }

        if (format === "rgb") {
          formattedString = this.toRgbString();
        }

        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }

        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }

        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }

        if (format === "hex8") {
          formattedString = this.toHex8String();
        }

        if (format === "name") {
          formattedString = this.toName();
        }

        if (format === "hsl") {
          formattedString = this.toHslString();
        }

        if (format === "hsv") {
          formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
      },
      _applyModification: function _applyModification(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
      },
      lighten: function lighten() {
        return this._applyModification(_lighten, arguments);
      },
      brighten: function brighten() {
        return this._applyModification(_brighten, arguments);
      },
      darken: function darken() {
        return this._applyModification(_darken, arguments);
      },
      desaturate: function desaturate() {
        return this._applyModification(_desaturate, arguments);
      },
      saturate: function saturate() {
        return this._applyModification(_saturate, arguments);
      },
      greyscale: function greyscale() {
        return this._applyModification(_greyscale, arguments);
      },
      spin: function spin() {
        return this._applyModification(_spin, arguments);
      },
      _applyCombination: function _applyCombination(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function analogous() {
        return this._applyCombination(_analogous, arguments);
      },
      complement: function complement() {
        return this._applyCombination(_complement, arguments);
      },
      monochromatic: function monochromatic() {
        return this._applyCombination(_monochromatic, arguments);
      },
      splitcomplement: function splitcomplement() {
        return this._applyCombination(_splitcomplement, arguments);
      },
      triad: function triad() {
        return this._applyCombination(_triad, arguments);
      },
      tetrad: function tetrad() {
        return this._applyCombination(_tetrad, arguments);
      }
    }; // If input is an object, force 1 into "1.0" to handle ratios properly
    // String input requires "1.0" as input, so 1 will be treated as 1

    tinycolor.fromRatio = function (color, opts) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(color) == "object") {
        var newColor = {};

        for (var i in color) {
          if (color.hasOwnProperty(i)) {
            if (i === "a") {
              newColor[i] = color[i];
            } else {
              newColor[i] = convertToPercentage(color[i]);
            }
          }
        }

        color = newColor;
      }

      return tinycolor(color, opts);
    }; // Given a string or object, convert that input to RGB
    // Possible string inputs:
    //
    //     "red"
    //     "#f00" or "f00"
    //     "#ff0000" or "ff0000"
    //     "#ff000000" or "ff000000"
    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
    //


    function inputToRGB(color) {
      var rgb = {
        r: 0,
        g: 0,
        b: 0
      };
      var a = 1;
      var ok = false;
      var format = false;

      if (typeof color == "string") {
        color = stringInputToObject(color);
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(color) == "object") {
        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok = true;
          format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
          color.s = convertToPercentage(color.s);
          color.v = convertToPercentage(color.v);
          rgb = hsvToRgb(color.h, color.s, color.v);
          ok = true;
          format = "hsv";
        } else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
          color.s = convertToPercentage(color.s);
          color.l = convertToPercentage(color.l);
          rgb = hslToRgb(color.h, color.s, color.l);
          ok = true;
          format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
          a = color.a;
        }
      }

      a = boundAlpha(a);
      return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
      };
    } // Conversion Functions
    // --------------------
    // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
    // `rgbToRgb`
    // Handle bounds / percentage checking to conform to CSS color spec
    // <http://www.w3.org/TR/css3-color/>
    // *Assumes:* r, g, b in [0, 255] or [0, 1]
    // *Returns:* { r, g, b } in [0, 255]


    function rgbToRgb(r, g, b) {
      return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
      };
    } // `rgbToHsl`
    // Converts an RGB color value to HSL.
    // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
    // *Returns:* { h, s, l } in [0,1]


    function rgbToHsl(r, g, b) {
      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = mathMax(r, g, b),
          min = mathMin(r, g, b);
      var h,
          s,
          l = (max + min) / 2;

      if (max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
            break;
        }

        h /= 6;
      }

      return {
        h: h,
        s: s,
        l: l
      };
    } // `hslToRgb`
    // Converts an HSL color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]


    function hslToRgb(h, s, l) {
      var r, g, b;
      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);

      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }

      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return {
        r: r * 255,
        g: g * 255,
        b: b * 255
      };
    } // `rgbToHsv`
    // Converts an RGB color value to HSV
    // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
    // *Returns:* { h, s, v } in [0,1]


    function rgbToHsv(r, g, b) {
      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = mathMax(r, g, b),
          min = mathMin(r, g, b);
      var h,
          s,
          v = max;
      var d = max - min;
      s = max === 0 ? 0 : d / max;

      if (max == min) {
        h = 0; // achromatic
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
            break;
        }

        h /= 6;
      }

      return {
        h: h,
        s: s,
        v: v
      };
    } // `hsvToRgb`
    // Converts an HSV color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]


    function hsvToRgb(h, s, v) {
      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);
      var i = math.floor(h),
          f = h - i,
          p = v * (1 - s),
          q = v * (1 - f * s),
          t = v * (1 - (1 - f) * s),
          mod = i % 6,
          r = [v, q, p, p, t, v][mod],
          g = [t, v, v, q, p, p][mod],
          b = [p, p, t, v, v, q][mod];
      return {
        r: r * 255,
        g: g * 255,
        b: b * 255
      };
    } // `rgbToHex`
    // Converts an RGB color to hex
    // Assumes r, g, and b are contained in the set [0, 255]
    // Returns a 3 or 6 character hex


    function rgbToHex(r, g, b, allow3Char) {
      var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))]; // Return a 3 character hex if possible

      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }

      return hex.join("");
    } // `rgbaToHex`
    // Converts an RGBA color plus alpha transparency to hex
    // Assumes r, g, b and a are contained in the set [0, 255]
    // Returns an 8 character hex


    function rgbaToHex(r, g, b, a) {
      var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
      return hex.join("");
    } // `equals`
    // Can be called with any tinycolor input


    tinycolor.equals = function (color1, color2) {
      if (!color1 || !color2) {
        return false;
      }

      return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };

    tinycolor.random = function () {
      return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
      });
    }; // Modification Functions
    // ----------------------
    // Thanks to less.js for some of the basics here
    // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


    function _desaturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
    }

    function _saturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
    }

    function _greyscale(color) {
      return tinycolor(color).desaturate(100);
    }

    function _lighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
    }

    function _brighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var rgb = tinycolor(color).toRgb();
      rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
      rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
      rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
      return tinycolor(rgb);
    }

    function _darken(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
    } // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
    // Values outside of this range will be wrapped into this range.


    function _spin(color, amount) {
      var hsl = tinycolor(color).toHsl();
      var hue = (mathRound(hsl.h) + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor(hsl);
    } // Combination Functions
    // ---------------------
    // Thanks to jQuery xColor for some of the ideas behind these
    // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>


    function _complement(color) {
      var hsl = tinycolor(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor(hsl);
    }

    function _triad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [tinycolor(color), tinycolor({
        h: (h + 120) % 360,
        s: hsl.s,
        l: hsl.l
      }), tinycolor({
        h: (h + 240) % 360,
        s: hsl.s,
        l: hsl.l
      })];
    }

    function _tetrad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [tinycolor(color), tinycolor({
        h: (h + 90) % 360,
        s: hsl.s,
        l: hsl.l
      }), tinycolor({
        h: (h + 180) % 360,
        s: hsl.s,
        l: hsl.l
      }), tinycolor({
        h: (h + 270) % 360,
        s: hsl.s,
        l: hsl.l
      })];
    }

    function _splitcomplement(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [tinycolor(color), tinycolor({
        h: (h + 72) % 360,
        s: hsl.s,
        l: hsl.l
      }), tinycolor({
        h: (h + 216) % 360,
        s: hsl.s,
        l: hsl.l
      })];
    }

    function _analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;
      var hsl = tinycolor(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor(color)];

      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
      }

      return ret;
    }

    function _monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor(color).toHsv();
      var h = hsv.h,
          s = hsv.s,
          v = hsv.v;
      var ret = [];
      var modification = 1 / results;

      while (results--) {
        ret.push(tinycolor({
          h: h,
          s: s,
          v: v
        }));
        v = (v + modification) % 1;
      }

      return ret;
    } // Utility Functions
    // ---------------------


    tinycolor.mix = function (color1, color2, amount) {
      amount = amount === 0 ? 0 : amount || 50;
      var rgb1 = tinycolor(color1).toRgb();
      var rgb2 = tinycolor(color2).toRgb();
      var p = amount / 100;
      var w = p * 2 - 1;
      var a = rgb2.a - rgb1.a;
      var w1;

      if (w * a == -1) {
        w1 = w;
      } else {
        w1 = (w + a) / (1 + w * a);
      }

      w1 = (w1 + 1) / 2;
      var w2 = 1 - w1;
      var rgba = {
        r: rgb2.r * w1 + rgb1.r * w2,
        g: rgb2.g * w1 + rgb1.g * w2,
        b: rgb2.b * w1 + rgb1.b * w2,
        a: rgb2.a * p + rgb1.a * (1 - p)
      };
      return tinycolor(rgba);
    }; // Readability Functions
    // ---------------------
    // <http://www.w3.org/TR/AERT#color-contrast>
    // `readability`
    // Analyze the 2 colors and returns an object with the following properties:
    //    `brightness`: difference in brightness between the two colors
    //    `color`: difference in color/hue between the two colors


    tinycolor.readability = function (color1, color2) {
      var c1 = tinycolor(color1);
      var c2 = tinycolor(color2);
      var rgb1 = c1.toRgb();
      var rgb2 = c2.toRgb();
      var brightnessA = c1.getBrightness();
      var brightnessB = c2.getBrightness();
      var colorDiff = Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) + Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) + Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b);
      return {
        brightness: Math.abs(brightnessA - brightnessB),
        color: colorDiff
      };
    }; // `readable`
    // http://www.w3.org/TR/AERT#color-contrast
    // Ensure that foreground and background color combinations provide sufficient contrast.
    // *Example*
    //    tinycolor.isReadable("#000", "#111") => false


    tinycolor.isReadable = function (color1, color2) {
      var readability = tinycolor.readability(color1, color2);
      return readability.brightness > 125 && readability.color > 500;
    }; // `mostReadable`
    // Given a base color and a list of possible foreground or background
    // colors for that base, returns the most readable color.
    // *Example*
    //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"


    tinycolor.mostReadable = function (baseColor, colorList) {
      var bestColor = null;
      var bestScore = 0;
      var bestIsReadable = false;

      for (var i = 0; i < colorList.length; i++) {
        // We normalize both around the "acceptable" breaking point,
        // but rank brightness constrast higher than hue.
        var readability = tinycolor.readability(baseColor, colorList[i]);
        var readable = readability.brightness > 125 && readability.color > 500;
        var score = 3 * (readability.brightness / 125) + readability.color / 500;

        if (readable && !bestIsReadable || readable && bestIsReadable && score > bestScore || !readable && !bestIsReadable && score > bestScore) {
          bestIsReadable = readable;
          bestScore = score;
          bestColor = tinycolor(colorList[i]);
        }
      }

      return bestColor;
    }; // Big List of Colors
    // ------------------
    // <http://www.w3.org/TR/css3-color/#svg-color>


    var names = tinycolor.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    }; // Make it easy to access colors via `hexNames[hex]`

    var hexNames = tinycolor.hexNames = flip(names); // Utilities
    // ---------
    // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`

    function flip(o) {
      var flipped = {};

      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          flipped[o[i]] = i;
        }
      }

      return flipped;
    } // Return a valid alpha value [0,1] with all invalid values being set to 1


    function boundAlpha(a) {
      a = parseFloat(a);

      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }

      return a;
    } // Take input from [0, n] and return it as [0, 1]


    function bound01(n, max) {
      if (isOnePointZero(n)) {
        n = "100%";
      }

      var processPercent = isPercentage(n);
      n = mathMin(max, mathMax(0, parseFloat(n))); // Automatically convert percentage into number

      if (processPercent) {
        n = parseInt(n * max, 10) / 100;
      } // Handle floating point rounding errors


      if (math.abs(n - max) < 0.000001) {
        return 1;
      } // Convert into [0, 1] range if it isn't already


      return n % max / parseFloat(max);
    } // Force a number between 0 and 1


    function clamp01(val) {
      return mathMin(1, mathMax(0, val));
    } // Parse a base-16 hex value into a base-10 integer


    function parseIntFromHex(val) {
      return parseInt(val, 16);
    } // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
    // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>


    function isOnePointZero(n) {
      return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
    } // Check to see if string passed in is a percentage


    function isPercentage(n) {
      return typeof n === "string" && n.indexOf('%') != -1;
    } // Force a hex value to have 2 characters


    function pad2(c) {
      return c.length == 1 ? '0' + c : '' + c;
    } // Replace a decimal with it's percentage value


    function convertToPercentage(n) {
      if (n <= 1) {
        n = n * 100 + "%";
      }

      return n;
    } // Converts a decimal to a hex value


    function convertDecimalToHex(d) {
      return Math.round(parseFloat(d) * 255).toString(16);
    } // Converts a hex value to a decimal


    function convertHexToDecimal(h) {
      return parseIntFromHex(h) / 255;
    }

    var matchers = function () {
      // <http://www.w3.org/TR/css3-values/#integers>
      var CSS_INTEGER = "[-\\+]?\\d+%?"; // <http://www.w3.org/TR/css3-values/#number-value>

      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?"; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")"; // Actual matching.
      // Parentheses and commas are optional, but not required.
      // Whitespace can take the place of commas or opening paren

      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      return {
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }(); // `stringInputToObject`
    // Permissive string parsing.  Take in a number of formats, and output an object
    // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`


    function stringInputToObject(color) {
      color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
      var named = false;

      if (names[color]) {
        color = names[color];
        named = true;
      } else if (color == 'transparent') {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
      } // Try to match string input using regular expressions.
      // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
      // Just return an object and let the conversion functions handle that.
      // This way the result will be the same whether the tinycolor is initialized with string or object.


      var match;

      if (match = matchers.rgb.exec(color)) {
        return {
          r: match[1],
          g: match[2],
          b: match[3]
        };
      }

      if (match = matchers.rgba.exec(color)) {
        return {
          r: match[1],
          g: match[2],
          b: match[3],
          a: match[4]
        };
      }

      if (match = matchers.hsl.exec(color)) {
        return {
          h: match[1],
          s: match[2],
          l: match[3]
        };
      }

      if (match = matchers.hsla.exec(color)) {
        return {
          h: match[1],
          s: match[2],
          l: match[3],
          a: match[4]
        };
      }

      if (match = matchers.hsv.exec(color)) {
        return {
          h: match[1],
          s: match[2],
          v: match[3]
        };
      }

      if (match = matchers.hex8.exec(color)) {
        return {
          a: convertHexToDecimal(match[1]),
          r: parseIntFromHex(match[2]),
          g: parseIntFromHex(match[3]),
          b: parseIntFromHex(match[4]),
          format: named ? "name" : "hex8"
        };
      }

      if (match = matchers.hex6.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          format: named ? "name" : "hex"
        };
      }

      if (match = matchers.hex3.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + '' + match[1]),
          g: parseIntFromHex(match[2] + '' + match[2]),
          b: parseIntFromHex(match[3] + '' + match[3]),
          format: named ? "name" : "hex"
        };
      }

      return false;
    }

    window.tinycolor = tinycolor;
  })();

  $(function () {
    if ($.fn.spectrum.load) {
      $.fn.spectrum.processNativeColorInputs();
    }
  });
})(window, jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/EventsEmitter/EventsEmitter.js":
/*!*******************************************************!*\
  !*** ./src/components/EventsEmitter/EventsEmitter.js ***!
  \*******************************************************/
/*! exports provided: default, EventsEmitterComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsEmitterComposer", function() { return EventsEmitterComposer; });
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






var EventsEmitter =
/*#__PURE__*/
function () {
  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  function EventsEmitter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, EventsEmitter);

    this._events = {};
  } ///////////////////////////////////////////////////////////////////
  // Supports multiple events space-separated
  //
  ///////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(EventsEmitter, [{
    key: "on",
    value: function on(events, fct) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this._events[event] = _this._events[event] || [];

        _this._events[event].push(fct);
      });
      return this;
    } ///////////////////////////////////////////////////////////////////
    // Supports multiple events space-separated
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: "off",
    value: function off(events, fct) {
      var _this2 = this;

      if (events == undefined) {
        this._events = {};
        return;
      }

      events.split(' ').forEach(function (event) {
        if (event in _this2._events === false) return;

        if (fct) {
          _this2._events[event].splice(_this2._events[event].indexOf(fct), 1);
        } else {
          _this2._events[event] = [];
        }
      });
      return this;
    } ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: "emit",
    value: function emit(event
    /* , args... */
    ) {
      if (this._events[event] === undefined) return;

      var tmpArray = this._events[event].slice();

      for (var i = 0; i < tmpArray.length; ++i) {
        var result = tmpArray[i].apply(this, Array.prototype.slice.call(arguments, 1));
        if (result !== undefined) return result;
      }

      return undefined;
    } ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: "guid",
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxxxx';
      var d = new Date().getTime();
      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });
      return guid;
    }
  }]);

  return EventsEmitter;
}(); ///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////



var EventsEmitterComposer = function EventsEmitterComposer(BaseClass) {
  return (
    /*#__PURE__*/
    function (_BaseClass) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(_class, _BaseClass);

      ///////////////////////////////////////////////////////////////////
      //
      //
      ///////////////////////////////////////////////////////////////////
      function _class(arg1, arg2, arg3, arg4, arg5) {
        var _this3;

        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, _class);

        _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(_class).call(this, arg1, arg2, arg3, arg4, arg5));
        _this3._events = {};
        return _this3;
      } ///////////////////////////////////////////////////////////////////
      // Supports multiple events space-separated
      //
      ///////////////////////////////////////////////////////////////////


      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(_class, [{
        key: "on",
        value: function on(events, fct) {
          var _this4 = this;

          events.split(' ').forEach(function (event) {
            _this4._events[event] = _this4._events[event] || [];

            _this4._events[event].push(fct);
          });
          return this;
        } ///////////////////////////////////////////////////////////////////
        // Supports multiple events space-separated
        //
        ///////////////////////////////////////////////////////////////////

      }, {
        key: "off",
        value: function off(events, fct) {
          var _this5 = this;

          if (events == undefined) {
            this._events = {};
            return;
          }

          events.split(' ').forEach(function (event) {
            if (event in _this5._events === false) return;

            if (fct) {
              _this5._events[event].splice(_this5._events[event].indexOf(fct), 1);
            } else {
              _this5._events[event] = [];
            }
          });
          return this;
        } ///////////////////////////////////////////////////////////////////
        //
        //
        ///////////////////////////////////////////////////////////////////

      }, {
        key: "emit",
        value: function emit(event
        /* , args... */
        ) {
          if (this._events[event] === undefined) return;

          var tmpArray = this._events[event].slice();

          for (var i = 0; i < tmpArray.length; ++i) {
            var result = tmpArray[i].apply(this, Array.prototype.slice.call(arguments, 1));
            if (result !== undefined) return result;
          }

          return undefined;
        } ///////////////////////////////////////////////////////////////////
        //
        //
        ///////////////////////////////////////////////////////////////////

      }, {
        key: "guid",
        value: function guid() {
          var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxxxx';
          var d = new Date().getTime();
          var guid = format.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
          });
          return guid;
        }
      }]);

      return _class;
    }(BaseClass)
  );
};

/***/ }),

/***/ "./src/components/EventsEmitter/index.js":
/*!***********************************************!*\
  !*** ./src/components/EventsEmitter/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventsEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventsEmitter */ "./src/components/EventsEmitter/EventsEmitter.js");


_EventsEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].Composer = _EventsEmitter__WEBPACK_IMPORTED_MODULE_0__["EventsEmitterComposer"];
/* harmony default export */ __webpack_exports__["default"] = (_EventsEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/SwitchButton/SwitchButton.js":
/*!*****************************************************!*\
  !*** ./src/components/SwitchButton/SwitchButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchButton; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var EventsEmitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! EventsEmitter */ "./src/components/EventsEmitter/index.js");






/////////////////////////////////////////////////////////////
// switch button
//
/////////////////////////////////////////////////////////////


var SwitchButton =
/*#__PURE__*/
function (_EventsEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SwitchButton, _EventsEmitter);

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  function SwitchButton(container) {
    var _this2;

    var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SwitchButton);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SwitchButton).call(this));

    var _this = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this2);

    var labelId = guid();
    _this2._inputId = guid();
    var html = "\n        <p class=\"onoffswitch\">\n          <input id=\"".concat(_this2._inputId, "\" type=\"checkbox\" name=\"onoffswitch\"\n            class=\"onoffswitch-checkbox\" ").concat(checked ? "checked" : "", ">\n          <label id=\"").concat(labelId, "\" class=\"onoffswitch-label\">\n            <span class=\"onoffswitch-inner\"></span>\n            <span class=\"onoffswitch-switch\"></span>\n          </label>\n        </p>\n      ");
    $(container).append(html);
    $('#' + labelId).click(function (e) {
      var $input = $('#' + _this2._inputId)[0];
      $input.checked = !$input.checked;

      _this.emit('checked', $input.checked);
    });
    return _this2;
  } ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SwitchButton, [{
    key: "checked",
    value: function checked() {
      return $('#' + this._inputId)[0].checked;
    } ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: "setChecked",
    value: function setChecked(checked) {
      $('#' + this._inputId).prop('checked', checked);
      this.emit('checked', checked);
    }
  }]);

  return SwitchButton;
}(EventsEmitter__WEBPACK_IMPORTED_MODULE_6__["default"]);



function guid() {
  var d = new Date().getTime();
  var guid = 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return guid;
} //https://proto.io/freebies/onoff/


var css = "\n\n  .onoffswitch {\n    position: relative; width: 50px;\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\n  }\n  .onoffswitch-checkbox {\n    display: none;\n  }\n  .onoffswitch-label {\n    display: block; overflow: hidden; cursor: pointer;\n    border: 2px solid #999999; border-radius: 8px;\n  }\n  .onoffswitch-inner {\n    display: block; width: 200%; margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n  }\n  .onoffswitch-inner:before, .onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 15px;\n    padding: 0;\n    line-height: 15px;\n    font-size: 10px;\n    color: white;\n    font-family: Trebuchet, Arial, sans-serif;\n    font-weight: bold;\n    box-sizing: border-box;\n  }\n  .onoffswitch-inner:before {\n    content: \"ON\";\n    background-color: #0E8200;\n    color: #FFFFFF;\n  }\n  .onoffswitch-inner:after {\n    content: \"OFF\";\n    padding-right: 10px;\n    background-color: #d9534f;\n    color: #FFFFFF;\n    text-align: right;\n  }\n  .onoffswitch-switch {\n    display: block;\n    width: 12px;\n    margin: 2px;\n    background: #FFFFFF;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 31px;\n    border: 2px solid #999999;\n    border-radius: 8px;\n    transition: all 0.3s ease-in 0s;\n  }\n  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n  }\n  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n    right: -1px;\n  }\n";
$('<style type="text/css">' + css + '</style>').appendTo('head');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/SwitchButton/index.js":
/*!**********************************************!*\
  !*** ./src/components/SwitchButton/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchButton */ "./src/components/SwitchButton/SwitchButton.js");

/* harmony default export */ __webpack_exports__["default"] = (_SwitchButton__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Viewer.ExtensionBase/Viewer.ExtensionBase.js":
/*!*********************************************************************!*\
  !*** ./src/components/Viewer.ExtensionBase/Viewer.ExtensionBase.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtensionBase; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var EventsEmitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! EventsEmitter */ "./src/components/EventsEmitter/index.js");





///////////////////////////////////////////////////////////////////////////////
//
//
//
///////////////////////////////////////////////////////////////////////////////


var ExtensionBase =
/*#__PURE__*/
function (_EventsEmitter$Compos) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ExtensionBase, _EventsEmitter$Compos);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function ExtensionBase(viewer) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ExtensionBase);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ExtensionBase).call(this, viewer, options));
    _this._viewer = viewer;
    _this._options = options;
    _this._events = {};
    return _this;
  } /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ExtensionBase, [{
    key: "load",
    /////////////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////////////
    value: function load() {
      return true;
    } /////////////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "unload",
    value: function unload() {
      return true;
    }
  }], [{
    key: "guid",
    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxx';
      var d = new Date().getTime();
      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });
      return guid;
    }
  }, {
    key: "ExtensionId",
    get: function get() {
      return 'Viewing.Extension.Base';
    }
  }]);

  return ExtensionBase;
}(EventsEmitter__WEBPACK_IMPORTED_MODULE_5__["default"].Composer(Autodesk.Viewing.Extension));



/***/ }),

/***/ "./src/components/Viewer.ExtensionBase/index.js":
/*!******************************************************!*\
  !*** ./src/components/Viewer.ExtensionBase/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Viewer_ExtensionBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Viewer.ExtensionBase */ "./src/components/Viewer.ExtensionBase/Viewer.ExtensionBase.js");

/* harmony default export */ __webpack_exports__["default"] = (_Viewer_ExtensionBase__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Viewer.Toolkit/Viewer.Toolkit.js":
/*!*********************************************************!*\
  !*** ./src/components/Viewer.Toolkit/Viewer.Toolkit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewerToolkit; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);







var ViewerToolkit =
/*#__PURE__*/
function () {
  function ViewerToolkit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, ViewerToolkit);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ViewerToolkit, null, [{
    key: "guid",
    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxxxx';
      var d = new Date().getTime();
      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });
      return guid;
    } /////////////////////////////////////////////
    //mobile detection
    //
    /////////////////////////////////////////////

  }, {
    key: "getDefaultViewablePath",
    //////////////////////////////////////////////////////////////////////////
    // Return default viewable path: first 3d or 2d item
    //
    //////////////////////////////////////////////////////////////////////////
    value: function getDefaultViewablePath(doc) {
      var roles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['3d', '2d'];
      var rootItem = doc.getRootItem();

      var roleArray = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(roles);

      var items = [];
      roleArray.forEach(function (role) {
        items = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(items), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem, {
          type: 'geometry',
          role: role
        }, true)));
      });
      return items.length ? doc.getViewablePath(items[0]) : null;
    } /////////////////////////////////////////////////////////////////
    // Toolbar button
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "createButton",
    value: function createButton(id, className, tooltip, handler) {
      var button = new Autodesk.Viewing.UI.Button(id);
      button.icon.style.fontSize = '24px';
      button.icon.className = className;
      button.setToolTip(tooltip);
      button.onClick = handler;
      return button;
    } /////////////////////////////////////////////////////////////////
    // Control group
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "createControlGroup",
    value: function createControlGroup(viewer, ctrlGroupName) {
      var viewerToolbar = viewer.getToolbar(true);

      if (viewerToolbar) {
        var ctrlGroup = new Autodesk.Viewing.UI.ControlGroup(ctrlGroupName);
        viewerToolbar.addControl(ctrlGroup);
        return ctrlGroup;
      }
    } /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getLeafNodes",
    value: function getLeafNodes(model, dbIds) {
      return new Promise(function (resolve, reject) {
        try {
          var instanceTree = model.getData().instanceTree;
          dbIds = dbIds || instanceTree.getRootId();
          var dbIdArray = Array.isArray(dbIds) ? dbIds : [dbIds];
          var leafIds = [];

          var getLeafNodesRec = function getLeafNodesRec(id) {
            var childCount = 0;
            instanceTree.enumNodeChildren(id, function (childId) {
              getLeafNodesRec(childId);
              ++childCount;
            });

            if (childCount == 0) {
              leafIds.push(id);
            }
          };

          for (var i = 0; i < dbIdArray.length; ++i) {
            getLeafNodesRec(dbIdArray[i]);
          }

          return resolve(leafIds);
        } catch (ex) {
          return reject(ex);
        }
      });
    } /////////////////////////////////////////////////////////////////
    // get node fragIds
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getFragIds",
    value: function getFragIds(model, dbIds) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(resolve, reject) {
          var i, _ret;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  return _context2.delegateYield(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                    var dbIdArray, instanceTree, leafIds, fragIds;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            dbIdArray = Array.isArray(dbIds) ? dbIds : [dbIds];
                            instanceTree = model.getData().instanceTree;
                            _context.next = 4;
                            return ViewerToolkit.getLeafNodes(model, dbIdArray);

                          case 4:
                            leafIds = _context.sent;
                            fragIds = [];

                            for (i = 0; i < leafIds.length; ++i) {
                              instanceTree.enumNodeFragments(leafIds[i], function (fragId) {
                                fragIds.push(fragId);
                              });
                            }

                            return _context.abrupt("return", {
                              v: resolve(fragIds)
                            });

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })(), "t0", 2);

                case 2:
                  _ret = _context2.t0;

                  if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret) === "object")) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt("return", _ret.v);

                case 5:
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t1 = _context2["catch"](0);
                  return _context2.abrupt("return", reject(_context2.t1));

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 7]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    } /////////////////////////////////////////////////////////////////
    // Node bounding box
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getWorldBoundingBox",
    value: function getWorldBoundingBox(model, dbId) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(resolve, reject) {
          var fragIds, fragList, fragbBox, nodebBox;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return ViewerToolkit.getFragIds(model, dbId);

                case 3:
                  fragIds = _context3.sent;

                  if (fragIds.length) {
                    _context3.next = 6;
                    break;
                  }

                  return _context3.abrupt("return", reject('No geometry, invalid dbId?'));

                case 6:
                  fragList = model.getFragmentList();
                  fragbBox = new THREE.Box3();
                  nodebBox = new THREE.Box3();
                  fragIds.forEach(function (fragId) {
                    fragList.getWorldBounds(fragId, fragbBox);
                    nodebBox.union(fragbBox);
                  });
                  return _context3.abrupt("return", resolve(nodebBox));

                case 13:
                  _context3.prev = 13;
                  _context3.t0 = _context3["catch"](0);
                  return _context3.abrupt("return", reject(_context3.t0));

                case 16:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[0, 13]]);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    } /////////////////////////////////////////////////////////////////
    // Gets properties from component
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getProperties",
    value: function getProperties(model, dbId) {
      var requestedProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return new Promise(function (resolve, reject) {
        try {
          if (requestedProps) {
            var propTasks = requestedProps.map(function (displayName) {
              return ViewerToolkit.getProperty(model, dbId, displayName, 'Not Available');
            });
            Promise.all(propTasks).then(function (properties) {
              resolve(properties);
            });
          } else {
            model.getProperties(dbId, function (result) {
              if (result.properties) {
                return resolve(result.properties);
              }

              return reject('No Properties');
            });
          }
        } catch (ex) {
          console.log(ex);
          return reject(ex);
        }
      });
    } /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getProperty",
    value: function getProperty(model, dbId, displayName, defaultValue) {
      return new Promise(function (resolve, reject) {
        try {
          model.getProperties(dbId, function (result) {
            if (result.properties) {
              result.properties.forEach(function (prop) {
                if (typeof displayName === 'function') {
                  if (displayName(prop.displayName)) {
                    resolve(prop);
                  }
                } else if (displayName === prop.displayName) {
                  resolve(prop);
                }
              });

              if (defaultValue) {
                return resolve({
                  displayValue: defaultValue,
                  displayName: displayName
                });
              }

              reject(new Error('Not Found'));
            } else {
              reject(new Error('Error getting properties'));
            }
          });
        } catch (ex) {
          return reject(ex);
        }
      });
    } /////////////////////////////////////////////////////////////////
    // Gets all existing properties from component  dbIds
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getPropertyList",
    value: function getPropertyList(model, dbIds) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(resolve, reject) {
          var propertyTasks, propertyResults, properties;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  propertyTasks = dbIds.map(function (dbId) {
                    return ViewerToolkit.getProperties(model, dbId);
                  });
                  _context4.next = 4;
                  return Promise.all(propertyTasks);

                case 4:
                  propertyResults = _context4.sent;
                  properties = [];
                  propertyResults.forEach(function (propertyResult) {
                    propertyResult.forEach(function (prop) {
                      if (properties.indexOf(prop.displayName) < 0) {
                        properties.push(prop.displayName);
                      }
                    });
                  });
                  return _context4.abrupt("return", resolve(properties.sort()));

                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4["catch"](0);
                  return _context4.abrupt("return", reject(_context4.t0));

                case 13:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[0, 10]]);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    } /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getBulkPropertiesAsync",
    value: function getBulkPropertiesAsync(model, dbIds, propFilter) {
      return new Promise(function (resolve, reject) {
        model.getBulkProperties(dbIds, propFilter, function (result) {
          resolve(result);
        }, function (error) {
          reject(error);
        });
      });
    } /////////////////////////////////////////////////////////////////
    // Maps components by property
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "mapComponentsByProp",
    value: function mapComponentsByProp(model, propName, components, defaultProp) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(resolve, reject) {
          var results, propertyResults, componentsMap;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return ViewerToolkit.getBulkPropertiesAsync(model, components, [propName]);

                case 3:
                  results = _context5.sent;
                  propertyResults = results.map(function (result) {
                    return Object.assign({}, result.properties[0], {
                      dbId: result.dbId
                    });
                  });
                  componentsMap = {};
                  propertyResults.forEach(function (result) {
                    var value = result.displayValue;

                    if (typeof value == 'string') {
                      value = value.split(':')[0];
                    }

                    if (!componentsMap[value]) {
                      componentsMap[value] = [];
                    }

                    componentsMap[value].push(result.dbId);
                  });
                  return _context5.abrupt("return", resolve(componentsMap));

                case 10:
                  _context5.prev = 10;
                  _context5.t0 = _context5["catch"](0);
                  return _context5.abrupt("return", reject(_context5.t0));

                case 13:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[0, 10]]);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    } /////////////////////////////////////////////////////////////
    // Runs recursively the argument task on each node
    // of the data tree
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: "runTaskOnDataTree",
    value: function runTaskOnDataTree(root, taskFunc) {
      var tasks = [];

      var runTaskOnDataTreeRec = function runTaskOnDataTreeRec(node) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (node.children) {
          node.children.forEach(function (childNode) {
            runTaskOnDataTreeRec(childNode, node);
          });
        }

        var task = taskFunc(node, parent);
        tasks.push(task);
      };

      runTaskOnDataTreeRec(root);
      return Promise.all(tasks);
    } /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "drawBox",
    value: function drawBox(viewer, min, max) {
      var material = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var _material = material;

      if (!_material) {
        _material = new THREE.LineBasicMaterial({
          color: 0xffff00,
          linewidth: 2
        });
        viewer.impl.matman().addMaterial('ADN-Material-Line', _material, true);
      }

      function drawLines(coordsArray, mat) {
        var lines = [];

        for (var i = 0; i < coordsArray.length; i += 2) {
          var start = coordsArray[i];
          var end = coordsArray[i + 1];
          var geometry = new THREE.Geometry();
          geometry.vertices.push(new THREE.Vector3(start.x, start.y, start.z));
          geometry.vertices.push(new THREE.Vector3(end.x, end.y, end.z));
          geometry.computeLineDistances();
          var line = new THREE.Line(geometry, mat);
          viewer.impl.scene.add(line);
          lines.push(line);
        }

        return lines;
      }

      var lines = drawLines([{
        x: min.x,
        y: min.y,
        z: min.z
      }, {
        x: max.x,
        y: min.y,
        z: min.z
      }, {
        x: max.x,
        y: min.y,
        z: min.z
      }, {
        x: max.x,
        y: min.y,
        z: max.z
      }, {
        x: max.x,
        y: min.y,
        z: max.z
      }, {
        x: min.x,
        y: min.y,
        z: max.z
      }, {
        x: min.x,
        y: min.y,
        z: max.z
      }, {
        x: min.x,
        y: min.y,
        z: min.z
      }, {
        x: min.x,
        y: max.y,
        z: max.z
      }, {
        x: max.x,
        y: max.y,
        z: max.z
      }, {
        x: max.x,
        y: max.y,
        z: max.z
      }, {
        x: max.x,
        y: max.y,
        z: min.z
      }, {
        x: max.x,
        y: max.y,
        z: min.z
      }, {
        x: min.x,
        y: max.y,
        z: min.z
      }, {
        x: min.x,
        y: max.y,
        z: min.z
      }, {
        x: min.x,
        y: max.y,
        z: max.z
      }, {
        x: min.x,
        y: min.y,
        z: min.z
      }, {
        x: min.x,
        y: max.y,
        z: min.z
      }, {
        x: max.x,
        y: min.y,
        z: min.z
      }, {
        x: max.x,
        y: max.y,
        z: min.z
      }, {
        x: max.x,
        y: min.y,
        z: max.z
      }, {
        x: max.x,
        y: max.y,
        z: max.z
      }, {
        x: min.x,
        y: min.y,
        z: max.z
      }, {
        x: min.x,
        y: max.y,
        z: max.z
      }], _material);
      viewer.impl.sceneUpdated(true);
      return lines;
    } /////////////////////////////////////////////////////////////////
    // Set component material
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "setMaterial",
    value: function () {
      var _setMaterial = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(model, dbId, material) {
        var fragIds, fragList;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return ViewerToolkit.getFragIds(model, dbId);

              case 2:
                fragIds = _context6.sent;
                fragList = model.getFragmentList();
                fragIds.forEach(function (fragId) {
                  fragList.setMaterial(fragId, material);
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function setMaterial(_x9, _x10, _x11) {
        return _setMaterial.apply(this, arguments);
      }

      return setMaterial;
    }() /////////////////////////////////////////////////////////////////
    // Recursively builds the model tree
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "buildModelTree",
    value: function buildModelTree(model) {
      var createNodeFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      //builds model tree recursively
      function _buildModelTreeRec(node) {
        instanceTree.enumNodeChildren(node.dbId, function (childId) {
          var childNode = null;

          if (createNodeFunc) {
            childNode = createNodeFunc(childId);
          } else {
            node.children = node.children || [];
            childNode = {
              dbId: childId,
              name: instanceTree.getNodeName(childId)
            };
            node.children.push(childNode);
          }

          _buildModelTreeRec(childNode);
        });
      } //get model instance tree and root component


      var instanceTree = model.getData().instanceTree;
      var rootId = instanceTree.getRootId();
      var rootNode = {
        dbId: rootId,
        name: instanceTree.getNodeName(rootId)
      };

      _buildModelTreeRec(rootNode);

      return rootNode;
    } /////////////////////////////////////////////////////////////////
    // Recursively execute task on model tree
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "executeTaskOnModelTree",
    value: function executeTaskOnModelTree(model, task) {
      var taskResults = [];

      function _executeTaskOnModelTreeRec(dbId) {
        instanceTree.enumNodeChildren(dbId, function (childId) {
          taskResults.push(task(model, childId));

          _executeTaskOnModelTreeRec(childId);
        });
      } //get model instance tree and root component


      var instanceTree = model.getData().instanceTree;
      var rootId = instanceTree.getRootId();

      _executeTaskOnModelTreeRec(rootId);

      return taskResults;
    } /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "isolateFull",
    value: function isolateFull(viewer) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var dbIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(resolve, reject) {
          var targetIds, targetLeafIds, leafIds, leafTasks;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  model = model || viewer.model;
                  viewer.isolate(dbIds);
                  targetIds = Array.isArray(dbIds) ? dbIds : [dbIds];
                  _context7.next = 6;
                  return ViewerToolkit.getLeafNodes(model, targetIds);

                case 6:
                  targetLeafIds = _context7.sent;
                  _context7.next = 9;
                  return ViewerToolkit.getLeafNodes(model);

                case 9:
                  leafIds = _context7.sent;
                  leafTasks = leafIds.map(function (dbId) {
                    return new Promise(function (resolveLeaf) {
                      var show = !targetLeafIds.length || targetLeafIds.indexOf(dbId) > -1;
                      viewer.impl.visibilityManager.setNodeOff(dbId, !show);
                      resolveLeaf();
                    });
                  });
                  return _context7.abrupt("return", Promise.all(leafTasks));

                case 14:
                  _context7.prev = 14;
                  _context7.t0 = _context7["catch"](0);
                  return _context7.abrupt("return", reject(_context7.t0));

                case 17:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, null, [[0, 14]]);
        }));

        return function (_x12, _x13) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "mobile",
    get: function get() {
      return {
        getUserAgent: function getUserAgent() {
          return navigator.userAgent;
        },
        isAndroid: function isAndroid() {
          return this.getUserAgent().match(/Android/i);
        },
        isBlackBerry: function isBlackBerry() {
          return this.getUserAgent().match(/BlackBerry/i);
        },
        isIOS: function isIOS() {
          return this.getUserAgent().match(/iPhone|iPad|iPod/i);
        },
        isOpera: function isOpera() {
          return this.getUserAgent().match(/Opera Mini/i);
        },
        isWindows: function isWindows() {
          return this.isWindowsDesktop() || this.isWindowsMobile();
        },
        isWindowsMobile: function isWindowsMobile() {
          return this.getUserAgent().match(/IEMobile/i);
        },
        isWindowsDesktop: function isWindowsDesktop() {
          return this.getUserAgent().match(/WPDesktop/i);
        },
        isAny: function isAny() {
          return this.isAndroid() || this.isBlackBerry() || this.isIOS() || this.isWindowsMobile();
        }
      };
    }
  }]);

  return ViewerToolkit;
}();



/***/ }),

/***/ "./src/components/Viewer.Toolkit/index.js":
/*!************************************************!*\
  !*** ./src/components/Viewer.Toolkit/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Viewer_Toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Viewer.Toolkit */ "./src/components/Viewer.Toolkit/Viewer.Toolkit.js");

/* harmony default export */ __webpack_exports__["default"] = (_Viewer_Toolkit__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

/******/ });