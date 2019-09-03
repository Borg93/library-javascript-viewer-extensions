window["Viewing.Extension.Transform"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Viewing.Extension.Transform/Viewing.Extension.Transform.js");
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

/***/ "./src/Viewing.Extension.Transform/TransformGizmos.js":
/*!************************************************************!*\
  !*** ./src/Viewing.Extension.Transform/TransformGizmos.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function init_TransformGizmos() {
  'use strict';

  var GizmoMaterial = function GizmoMaterial(parameters) {
    THREE.MeshBasicMaterial.call(this);
    this.depthTest = false;
    this.depthWrite = false;
    this.side = THREE.FrontSide;
    this.transparent = true;
    this.setValues(parameters);
    this.oldColor = this.color.clone();
    this.oldOpacity = this.opacity;

    this.highlight = function (highlighted) {
      if (highlighted) {
        this.color.setRGB(1, 230 / 255, 3 / 255);
        this.opacity = 1;
      } else {
        this.color.copy(this.oldColor);
        this.opacity = this.oldOpacity;
      }
    };
  };

  GizmoMaterial.prototype = Object.create(THREE.MeshBasicMaterial.prototype);

  var GizmoLineMaterial = function GizmoLineMaterial(parameters) {
    THREE.LineBasicMaterial.call(this);
    this.depthTest = false;
    this.depthWrite = false;
    this.transparent = true;
    this.linewidth = 3;
    this.setValues(parameters);
    this.oldColor = this.color.clone();
    this.oldOpacity = this.opacity;

    this.highlight = function (highlighted) {
      if (highlighted) {
        this.color.setRGB(1, 230 / 255, 3 / 255);
        this.opacity = 1;
      } else {
        this.color.copy(this.oldColor);
        this.opacity = this.oldOpacity;
      }
    };
  };

  GizmoLineMaterial.prototype = Object.create(THREE.LineBasicMaterial.prototype); // polyfill

  if (THREE.PolyhedronGeometry === undefined) {
    THREE.PolyhedronGeometry = function (vertices, indices, radius, detail) {
      THREE.Geometry.call(this);
      this.type = 'PolyhedronGeometry';
      this.parameters = {
        vertices: vertices,
        indices: indices,
        radius: radius,
        detail: detail
      };
      radius = radius || 1;
      detail = detail || 0;
      var that = this;

      for (var i = 0, l = vertices.length; i < l; i += 3) {
        prepare(new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]));
      }

      var midpoints = [],
          p = this.vertices;
      var faces = [];

      for (var i = 0, j = 0, l = indices.length; i < l; i += 3, j++) {
        var v1 = p[indices[i]];
        var v2 = p[indices[i + 1]];
        var v3 = p[indices[i + 2]];
        faces[j] = new THREE.Face3(v1.index, v2.index, v3.index, [v1.clone(), v2.clone(), v3.clone()]);
      }

      var centroid = new THREE.Vector3();

      for (var i = 0, l = faces.length; i < l; i++) {
        subdivide(faces[i], detail);
      } // Handle case when face straddles the seam


      for (var i = 0, l = this.faceVertexUvs[0].length; i < l; i++) {
        var uvs = this.faceVertexUvs[0][i];
        var x0 = uvs[0].x;
        var x1 = uvs[1].x;
        var x2 = uvs[2].x;
        var max = Math.max(x0, Math.max(x1, x2));
        var min = Math.min(x0, Math.min(x1, x2));

        if (max > 0.9 && min < 0.1) {
          // 0.9 is somewhat arbitrary
          if (x0 < 0.2) uvs[0].x += 1;
          if (x1 < 0.2) uvs[1].x += 1;
          if (x2 < 0.2) uvs[2].x += 1;
        }
      } // Apply radius


      for (var i = 0, l = this.vertices.length; i < l; i++) {
        this.vertices[i].multiplyScalar(radius);
      } // Merge vertices


      this.mergeVertices();
      this.computeFaceNormals();
      this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), radius); // Project vector onto sphere's surface

      function prepare(vector) {
        var vertex = vector.normalize().clone();
        vertex.index = that.vertices.push(vertex) - 1; // Texture coords are equivalent to map coords, calculate angle and convert to fraction of a circle.

        var u = azimuth(vector) / 2 / Math.PI + 0.5;
        var v = inclination(vector) / Math.PI + 0.5;
        vertex.uv = new THREE.Vector2(u, 1 - v);
        return vertex;
      } // Approximate a curved face with recursively sub-divided triangles.


      function make(v1, v2, v3) {
        var face = new THREE.Face3(v1.index, v2.index, v3.index, [v1.clone(), v2.clone(), v3.clone()]);
        that.faces.push(face);
        centroid.copy(v1).add(v2).add(v3).divideScalar(3);
        var azi = azimuth(centroid);
        that.faceVertexUvs[0].push([correctUV(v1.uv, v1, azi), correctUV(v2.uv, v2, azi), correctUV(v3.uv, v3, azi)]);
      } // Analytically subdivide a face to the required detail level.


      function subdivide(face, detail) {
        var cols = Math.pow(2, detail);
        var cells = Math.pow(4, detail);
        var a = prepare(that.vertices[face.a]);
        var b = prepare(that.vertices[face.b]);
        var c = prepare(that.vertices[face.c]);
        var v = []; // Construct all of the vertices for this subdivision.

        for (var i = 0; i <= cols; i++) {
          v[i] = [];
          var aj = prepare(a.clone().lerp(c, i / cols));
          var bj = prepare(b.clone().lerp(c, i / cols));
          var rows = cols - i;

          for (var j = 0; j <= rows; j++) {
            if (j == 0 && i == cols) {
              v[i][j] = aj;
            } else {
              v[i][j] = prepare(aj.clone().lerp(bj, j / rows));
            }
          }
        } // Construct all of the faces.


        for (var i = 0; i < cols; i++) {
          for (var j = 0; j < 2 * (cols - i) - 1; j++) {
            var k = Math.floor(j / 2);

            if (j % 2 == 0) {
              make(v[i][k + 1], v[i + 1][k], v[i][k]);
            } else {
              make(v[i][k + 1], v[i + 1][k + 1], v[i + 1][k]);
            }
          }
        }
      } // Angle around the Y axis, counter-clockwise when looking from above.


      function azimuth(vector) {
        return Math.atan2(vector.z, -vector.x);
      } // Angle above the XZ plane.


      function inclination(vector) {
        return Math.atan2(-vector.y, Math.sqrt(vector.x * vector.x + vector.z * vector.z));
      } // Texture fixing helper. Spheres have some odd behaviours.


      function correctUV(uv, vector, azimuth) {
        if (azimuth < 0 && uv.x === 1) uv = new THREE.Vector2(uv.x - 1, uv.y);
        if (vector.x === 0 && vector.z === 0) uv = new THREE.Vector2(azimuth / 2 / Math.PI + 0.5, uv.y);
        return uv.clone();
      }
    };

    THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
  } // polyfill


  if (THREE.OctahedronGeometry === undefined) {
    THREE.OctahedronGeometry = function (radius, detail) {
      this.parameters = {
        radius: radius,
        detail: detail
      };
      var vertices = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1];
      var indices = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
      THREE.PolyhedronGeometry.call(this, vertices, indices, radius, detail);
      this.type = 'OctahedronGeometry';
      this.parameters = {
        radius: radius,
        detail: detail
      };
    };

    THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
  } // polyfill


  if (THREE.TorusGeometry === undefined) {
    THREE.TorusGeometry = function (radius, tube, radialSegments, tubularSegments, arc) {
      THREE.Geometry.call(this);
      this.type = 'TorusGeometry';
      this.parameters = {
        radius: radius,
        tube: tube,
        radialSegments: radialSegments,
        tubularSegments: tubularSegments,
        arc: arc
      };
      radius = radius || 100;
      tube = tube || 40;
      radialSegments = radialSegments || 8;
      tubularSegments = tubularSegments || 6;
      arc = arc || Math.PI * 2;
      var center = new THREE.Vector3(),
          uvs = [],
          normals = [];

      for (var j = 0; j <= radialSegments; j++) {
        for (var i = 0; i <= tubularSegments; i++) {
          var u = i / tubularSegments * arc;
          var v = j / radialSegments * Math.PI * 2;
          center.x = radius * Math.cos(u);
          center.y = radius * Math.sin(u);
          var vertex = new THREE.Vector3();
          vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
          vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
          vertex.z = tube * Math.sin(v);
          this.vertices.push(vertex);
          uvs.push(new THREE.Vector2(i / tubularSegments, j / radialSegments));
          normals.push(vertex.clone().sub(center).normalize());
        }
      }

      for (var j = 1; j <= radialSegments; j++) {
        for (var i = 1; i <= tubularSegments; i++) {
          var a = (tubularSegments + 1) * j + i - 1;
          var b = (tubularSegments + 1) * (j - 1) + i - 1;
          var c = (tubularSegments + 1) * (j - 1) + i;
          var d = (tubularSegments + 1) * j + i;
          var face = new THREE.Face3(a, b, d, [normals[a].clone(), normals[b].clone(), normals[d].clone()]);
          this.faces.push(face);
          this.faceVertexUvs[0].push([uvs[a].clone(), uvs[b].clone(), uvs[d].clone()]);
          face = new THREE.Face3(b, c, d, [normals[b].clone(), normals[c].clone(), normals[d].clone()]);
          this.faces.push(face);
          this.faceVertexUvs[0].push([uvs[b].clone(), uvs[c].clone(), uvs[d].clone()]);
        }
      }

      this.computeFaceNormals();
    };

    THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
  }

  var createCircleGeometry = function createCircleGeometry(radius, facing, arc) {
    var geometry = new THREE.Geometry();
    arc = arc ? arc : 1;

    for (var i = 0; i <= 64 * arc; ++i) {
      if (facing == 'x') geometry.vertices.push(new THREE.Vector3(0, Math.cos(i / 32 * Math.PI), Math.sin(i / 32 * Math.PI)).multiplyScalar(radius));
      if (facing == 'y') geometry.vertices.push(new THREE.Vector3(Math.cos(i / 32 * Math.PI), 0, Math.sin(i / 32 * Math.PI)).multiplyScalar(radius));
      if (facing == 'z') geometry.vertices.push(new THREE.Vector3(Math.sin(i / 32 * Math.PI), Math.cos(i / 32 * Math.PI), 0).multiplyScalar(radius));
    }

    return geometry;
  };

  var createArrowGeometry = function createArrowGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded) {
    var arrowGeometry = new THREE.Geometry();
    var mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded));
    mesh.position.y = 0.5;
    mesh.updateMatrix();
    arrowGeometry.merge(mesh.geometry, mesh.matrix);
    return arrowGeometry;
  };

  var createLineGeometry = function createLineGeometry(axis) {
    var lineGeometry = new THREE.Geometry();
    if (axis === 'X') lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0));else if (axis === 'Y') lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));else if (axis === 'Z') lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1));
    return lineGeometry;
  };

  THREE.TransformGizmo = function () {
    var scope = this;
    var showPickers = false; //debug

    var showActivePlane = false; //debug

    this.init = function () {
      THREE.Object3D.call(this);
      this.handles = new THREE.Object3D();
      this.pickers = new THREE.Object3D();
      this.planes = new THREE.Object3D();
      this.highlights = new THREE.Object3D();
      this.hemiPicker = new THREE.Object3D();
      this.subPickers = new THREE.Object3D();
      this.add(this.handles);
      this.add(this.pickers);
      this.add(this.planes);
      this.add(this.highlights);
      this.add(this.hemiPicker);
      this.add(this.subPickers); //// PLANES

      var planeGeometry = new THREE.PlaneBufferGeometry(50, 50, 2, 2);
      var planeMaterial = new THREE.MeshBasicMaterial({
        wireframe: true
      });
      planeMaterial.side = THREE.DoubleSide;
      var planes = {
        "XY": new THREE.Mesh(planeGeometry, planeMaterial),
        "YZ": new THREE.Mesh(planeGeometry, planeMaterial),
        "XZ": new THREE.Mesh(planeGeometry, planeMaterial),
        "XYZE": new THREE.Mesh(planeGeometry, planeMaterial)
      };
      this.activePlane = planes["XYZE"];
      planes["YZ"].rotation.set(0, Math.PI / 2, 0);
      planes["XZ"].rotation.set(-Math.PI / 2, 0, 0);

      for (var i in planes) {
        planes[i].name = i;
        this.planes.add(planes[i]);
        this.planes[i] = planes[i];
        planes[i].visible = false;
      }

      this.setupGizmos();
      this.activeMode = ""; // reset Transformations

      this.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.updateMatrix();
          var tempGeometry = new THREE.Geometry();

          if (child.geometry instanceof THREE.BufferGeometry) {
            child.geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          }

          tempGeometry.merge(child.geometry, child.matrix);
          child.geometry = tempGeometry;
          child.position.set(0, 0, 0);
          child.rotation.set(0, 0, 0);
          child.scale.set(1, 1, 1);
        }
      });
    };

    this.hide = function () {
      this.traverse(function (child) {
        child.visible = false;
      });
    };

    this.show = function () {
      this.traverse(function (child) {
        child.visible = true;
        if (child.parent == scope.pickers || child.parent == scope.hemiPicker) child.visible = showPickers;
        if (child.parent == scope.planes) child.visible = false;
      });
      this.activePlane.visible = showActivePlane;
    };

    this.highlight = function (axis) {
      this.traverse(function (child) {
        if (child.material && child.material.highlight) {
          if (child.name == axis) {
            child.material.highlight(true);
          } else {
            child.material.highlight(false);
          }
        }
      });
    };

    this.setupGizmos = function () {
      var addGizmos = function addGizmos(gizmoMap, parent) {
        for (var name in gizmoMap) {
          for (var i = gizmoMap[name].length; i--;) {
            var object = gizmoMap[name][i][0];
            var position = gizmoMap[name][i][1];
            var rotation = gizmoMap[name][i][2];
            var visble = gizmoMap[name][i][3];
            object.name = name;
            if (position) object.position.set(position[0], position[1], position[2]);
            if (rotation) object.rotation.set(rotation[0], rotation[1], rotation[2]);
            if (visble) object.visble = visble;
            parent.add(object);
          }
        }
      };

      this.setHandlePickerGizmos();
      addGizmos(this.handleGizmos, this.handles);
      addGizmos(this.pickerGizmos, this.pickers);
      addGizmos(this.highlightGizmos, this.highlights);
      addGizmos(this.hemiPickerGizmos, this.hemiPicker);
      addGizmos(this.subPickerGizmos, this.subPickers);
      this.hide();
      this.show();
    };
  };

  THREE.TransformGizmo.prototype = Object.create(THREE.Object3D.prototype);

  THREE.TransformGizmo.prototype.update = function (rotation, eye) {
    var vec1 = new THREE.Vector3(0, 0, 0);
    var vec2 = new THREE.Vector3(0, 1, 0);
    var lookAtMatrix = new THREE.Matrix4();
    this.traverse(function (child) {
      if (child.name) {
        if (child.name.search("E") != -1) {
          child.quaternion.setFromRotationMatrix(lookAtMatrix.lookAt(eye, vec1, vec2));
        } else if (child.name.search("X") != -1 || child.name.search("Y") != -1 || child.name.search("Z") != -1) {
          child.quaternion.setFromEuler(rotation);
        }
      }
    });
  };

  THREE.TransformGizmoTranslate = function () {
    THREE.TransformGizmo.call(this);

    this.setHandlePickerGizmos = function () {
      var arrowGeometry = createArrowGeometry(0, 0.05, 0.2, 12, 1, false);
      var lineXGeometry = createLineGeometry('X');
      var lineYGeometry = createLineGeometry('Y');
      var lineZGeometry = createLineGeometry('Z');
      this.handleGizmos = {
        X: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({
          color: 0xf12c2c
        })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(lineXGeometry, new GizmoLineMaterial({
          color: 0xf12c2c
        }))]],
        Y: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({
          color: 0x0bb80b
        })), [0, 0.5, 0]], [new THREE.Line(lineYGeometry, new GizmoLineMaterial({
          color: 0x0bb80b
        }))]],
        Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({
          color: 0x2c2cf1
        })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(lineZGeometry, new GizmoLineMaterial({
          color: 0x2c2cf1
        }))]],
        XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), new GizmoMaterial({
          color: 0xffffff,
          opacity: 0.25
        })), [0, 0, 0], [0, 0, 0]]],
        XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({
          color: 0xffff00,
          opacity: 0.25
        })), [0.15, 0.15, 0]]],
        YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({
          color: 0x00ffff,
          opacity: 0.25
        })), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]],
        XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({
          color: 0xff00ff,
          opacity: 0.25
        })), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]]
      };
      this.pickerGizmos = {
        X: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({
          color: 0xff0000,
          opacity: 0.25
        })), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
        Y: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({
          color: 0x00ff00,
          opacity: 0.25
        })), [0, 0.6, 0]]],
        Z: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({
          color: 0x0000ff,
          opacity: 0.25
        })), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
        XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), new GizmoMaterial({
          color: 0xffffff,
          opacity: 0.25
        }))]],
        XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({
          color: 0xffff00,
          opacity: 0.25
        })), [0.2, 0.2, 0]]],
        YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({
          color: 0x00ffff,
          opacity: 0.25
        })), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],
        XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), new GizmoMaterial({
          color: 0xff00ff,
          opacity: 0.25
        })), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]]
      };
      this.hemiPickerGizmos = {
        XYZ: [[new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new GizmoMaterial({
          color: 0x0000ff
        })), [0.5, 0.5, 0.5], null, false]]
      };
    };

    this.setActivePlane = function (axis, eye) {
      var tempMatrix = new THREE.Matrix4();
      eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

      if (axis == "X") {
        this.activePlane = this.planes["XY"];
        if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
      }

      if (axis == "Y") {
        this.activePlane = this.planes["XY"];
        if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
      }

      if (axis == "Z") {
        this.activePlane = this.planes["XZ"];
        if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
      }

      if (axis == "XYZ") this.activePlane = this.planes["XYZE"];
      if (axis == "XY") this.activePlane = this.planes["XY"];
      if (axis == "YZ") this.activePlane = this.planes["YZ"];
      if (axis == "XZ") this.activePlane = this.planes["XZ"];
      this.hide();
      this.show();
    };

    this.init();
  };

  THREE.TransformGizmoTranslate.prototype = Object.create(THREE.TransformGizmo.prototype);

  THREE.TransformGizmoRotate = function () {
    THREE.TransformGizmo.call(this);

    this.setHandlePickerGizmos = function () {
      this.handleGizmos = {
        RX: [[new THREE.Line(createCircleGeometry(1, 'x', 0.5), new GizmoLineMaterial({
          color: 0xff0000
        }))]],
        RY: [[new THREE.Line(createCircleGeometry(1, 'y', 0.5), new GizmoLineMaterial({
          color: 0x00ff00
        }))]],
        RZ: [[new THREE.Line(createCircleGeometry(1, 'z', 0.5), new GizmoLineMaterial({
          color: 0x0000ff
        }))]],
        RE: [[new THREE.Line(createCircleGeometry(1.25, 'z', 1), new GizmoLineMaterial({
          color: 0x00ffff
        }))]],
        RXYZE: [[new THREE.Line(createCircleGeometry(1, 'z', 1), new GizmoLineMaterial({
          color: 0xff00ff
        }))]]
      };
      this.pickerGizmos = {
        RX: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({
          color: 0xff0000,
          opacity: 0.25
        })), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
        RY: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({
          color: 0x00ff00,
          opacity: 0.25
        })), [0, 0, 0], [Math.PI / 2, 0, 0]]],
        RZ: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI), new GizmoMaterial({
          color: 0x0000ff,
          opacity: 0.25
        })), [0, 0, 0], [0, 0, -Math.PI / 2]]],
        RE: [[new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.12, 2, 24), new GizmoMaterial({
          color: 0x00ffff,
          opacity: 0.25
        }))]],
        RXYZE: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 2, 24), new GizmoMaterial({
          color: 0xff00ff,
          opacity: 0.25
        }))]]
      };
    };

    this.setActivePlane = function (axis) {
      if (axis == "RE") this.activePlane = this.planes["XYZE"];
      if (axis == "RX") this.activePlane = this.planes["YZ"];
      if (axis == "RY") this.activePlane = this.planes["XZ"];
      if (axis == "RZ") this.activePlane = this.planes["XY"];
      this.hide();
      this.show();
    };

    this.update = function (rotation, eye2) {
      THREE.TransformGizmo.prototype.update.apply(this, arguments);
      var tempMatrix = new THREE.Matrix4();
      var worldRotation = new THREE.Euler(0, 0, 1);
      var tempQuaternion = new THREE.Quaternion();
      var unitX = new THREE.Vector3(1, 0, 0);
      var unitY = new THREE.Vector3(0, 1, 0);
      var unitZ = new THREE.Vector3(0, 0, 1);
      var quaternionX = new THREE.Quaternion();
      var quaternionY = new THREE.Quaternion();
      var quaternionZ = new THREE.Quaternion();
      var eye = eye2.clone();
      worldRotation.copy(this.planes["XY"].rotation);
      tempQuaternion.setFromEuler(worldRotation);
      tempMatrix.makeRotationFromQuaternion(tempQuaternion).getInverse(tempMatrix);
      eye.applyMatrix4(tempMatrix);
      this.traverse(function (child) {
        tempQuaternion.setFromEuler(worldRotation);

        if (child.name == "RX") {
          quaternionX.setFromAxisAngle(unitX, Math.atan2(-eye.y, eye.z));
          tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
          child.quaternion.copy(tempQuaternion);
        }

        if (child.name == "RY") {
          quaternionY.setFromAxisAngle(unitY, Math.atan2(eye.x, eye.z));
          tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
          child.quaternion.copy(tempQuaternion);
        }

        if (child.name == "RZ") {
          quaternionZ.setFromAxisAngle(unitZ, Math.atan2(eye.y, eye.x));
          tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
          child.quaternion.copy(tempQuaternion);
        }
      });
    };

    this.init();
  };

  THREE.TransformGizmoRotate.prototype = Object.create(THREE.TransformGizmo.prototype);

  THREE.TransformGizmoTranslateRotate = function () {
    THREE.TransformGizmo.call(this);
    var scope = this;

    this.setHandlePickerGizmos = function () {
      var arrowGeometry = createArrowGeometry(0, 0.05, 0.2, 12, 1, false);
      var lineGeometry = new THREE.Geometry();
      lineGeometry.vertices.push(new THREE.Vector3(0, 0, -0.1), new THREE.Vector3(0, 0, 0.1), new THREE.Vector3(-0.1, 0, 0), new THREE.Vector3(0.1, 0, 0));
      var theta = 0.15;
      this.handleGizmos = {
        Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({
          color: 0xffffff
        })), [0, 0, 0.25], [Math.PI / 2, 0, 0]], [new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.6, 4, 1, false), new GizmoMaterial({
          color: 0xffffff
        })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],
        RX: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.015, 12, 60, theta * 2 * Math.PI), new GizmoMaterial({
          color: 0xff0000
        })), [0, 0, 0], [theta * Math.PI, -Math.PI / 2, 0]], [new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.015, 60, 1, false), new GizmoMaterial({
          color: 0xff0000
        })), [0, 0, 1], [Math.PI / 2, 0, 0]]],
        RY: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.015, 12, 60, theta * 2 * Math.PI), new GizmoMaterial({
          color: 0x0000ff
        })), [0, 0, 0], [Math.PI / 2, 0, (0.5 - theta) * Math.PI]], [new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.01, 60, 1, false), new GizmoMaterial({
          color: 0x0000ff
        })), [0, 0, 1]]]
      };
      this.pickerGizmos = {
        Z: [[new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.65, 4, 1, false), new GizmoMaterial({
          color: 0x0000ff,
          opacity: 0.25
        })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],
        RX: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, theta * 2 * Math.PI), new GizmoMaterial({
          color: 0xff0000,
          opacity: 0.25
        })), [0, 0, 0], [theta * Math.PI, -Math.PI / 2, 0]]],
        RY: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.12, 4, 12, theta * 2 * Math.PI), new GizmoMaterial({
          color: 0x0000ff,
          opacity: 0.25
        })), [0, 0, 0], [Math.PI / 2, 0, (0.5 - theta) * Math.PI]]]
      };
      this.subPickerGizmos = {
        Z: [[new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.65, 4, 1, false), new GizmoMaterial({
          color: 0x0000ff,
          opacity: 0.25
        })), [0, 0, 0.5], [Math.PI / 2, 0, 0]]]
      };
      this.highlightGizmos = {
        Z: [],
        RX: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.02, 12, 60, 2 * Math.PI), new GizmoMaterial({
          color: 0xff0000,
          opacity: 1
        })), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2], false]],
        RY: [[new THREE.Mesh(new THREE.TorusGeometry(1, 0.02, 12, 60, 2 * Math.PI), new GizmoMaterial({
          color: 0x0000ff,
          opacity: 1
        })), [0, 0, 0], [Math.PI / 2, 0, 0], false]]
      };
      this.hemiPickerGizmos = {
        XYZ: [[new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 8, 0, Math.PI), new GizmoMaterial({
          color: 0x0000ff
        })), null, null, false]]
      };
    };

    this.setActivePlane = function (axis, eye) {
      if (this.activeMode == "translate") {
        var tempMatrix = new THREE.Matrix4();
        eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

        if (axis == "X") {
          this.activePlane = this.planes["XY"];
          if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
        }

        if (axis == "Y") {
          this.activePlane = this.planes["XY"];
          if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
        }

        if (axis == "Z") {
          this.activePlane = this.planes["XZ"];
          if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
        }
      } else if (this.activeMode == "rotate") {
        if (axis == "RX") this.activePlane = this.planes["YZ"];
        if (axis == "RY") this.activePlane = this.planes["XZ"];
        if (axis == "RZ") this.activePlane = this.planes["XY"];
      }

      this.hide();
      this.show();
    };

    this.update = function (rotation, eye2) {
      if (this.activeMode == "translate") {
        THREE.TransformGizmo.prototype.update.apply(this, arguments);
      } else if (this.activeMode == "rotate") {
        THREE.TransformGizmo.prototype.update.apply(this, arguments);
        var tempMatrix = new THREE.Matrix4();
        var worldRotation = new THREE.Euler(0, 0, 1);
        var tempQuaternion = new THREE.Quaternion();
        var unitX = new THREE.Vector3(1, 0, 0);
        var unitY = new THREE.Vector3(0, 1, 0);
        var unitZ = new THREE.Vector3(0, 0, 1);
        var quaternionX = new THREE.Quaternion();
        var quaternionY = new THREE.Quaternion();
        var quaternionZ = new THREE.Quaternion();
        var eye = eye2.clone();
        worldRotation.copy(this.planes["XY"].rotation);
        tempQuaternion.setFromEuler(worldRotation);
        tempMatrix.makeRotationFromQuaternion(tempQuaternion).getInverse(tempMatrix);
        eye.applyMatrix4(tempMatrix);
        this.traverse(function (child) {
          tempQuaternion.setFromEuler(worldRotation);

          if (child.name == "RX") {
            quaternionX.setFromAxisAngle(unitX, Math.atan2(-eye.y, eye.z));
            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
            child.quaternion.copy(tempQuaternion);
          }

          if (child.name == "RY") {
            quaternionY.setFromAxisAngle(unitY, Math.atan2(eye.x, eye.z));
            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
            child.quaternion.copy(tempQuaternion);
          }

          if (child.name == "RZ") {
            quaternionZ.setFromAxisAngle(unitZ, Math.atan2(eye.y, eye.x));
            tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
            child.quaternion.copy(tempQuaternion);
          }
        });
      }
    };

    this.show = function () {
      this.traverse(function (child) {
        if (scope.parent == null || scope.parent.useAllPickers || child.parent != scope.handles) child.visible = true;
        if (child.material) child.material.opacity = child.material.oldOpacity;
        if (child.parent == scope.pickers || child.parent == scope.hemiPicker || child.parent == scope.subPickers) child.visible = false;
        if (child.parent == scope.planes || child.parent == scope.highlights) child.visible = false;
      });
      this.activePlane.visible = false;
    };

    this.highlight = function (axis) {
      this.traverse(function (child) {
        if (child.material && child.material.highlight) {
          if (child.name == axis) {
            if (child.parent == scope.highlights || child.parent == scope.handles) child.visible = true;
            child.material.highlight(true);
          } else {
            child.material.highlight(false);
            child.material.opacity = 0.1;
          }
        }
      });
    };

    this.init();
  };

  THREE.TransformGizmoTranslateRotate.prototype = Object.create(THREE.TransformGizmo.prototype);

  THREE.TransformGizmoScale = function () {
    THREE.TransformGizmo.call(this);

    this.setHandlePickerGizmos = function () {
      var arrowGeometry = createArrowGeometry(0.125, 0.125, 0.125);
      var lineXGeometry = createLineGeometry('X');
      var lineYGeometry = createLineGeometry('Y');
      var lineZGeometry = createLineGeometry('Z');
      this.handleGizmos = {
        X: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({
          color: 0xff0000
        })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(lineXGeometry, new GizmoLineMaterial({
          color: 0xff0000
        }))]],
        Y: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({
          color: 0x00ff00
        })), [0, 0.5, 0]], [new THREE.Line(lineYGeometry, new GizmoLineMaterial({
          color: 0x00ff00
        }))]],
        Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({
          color: 0x0000ff
        })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(lineZGeometry, new GizmoLineMaterial({
          color: 0x0000ff
        }))]],
        XYZ: [[new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.125, 0.125), new GizmoMaterial({
          color: 0xffffff,
          opacity: 0.25
        }))]]
      };
      this.pickerGizmos = {
        X: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({
          color: 0xff0000,
          opacity: 0.25
        })), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
        Y: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({
          color: 0x00ff00,
          opacity: 0.25
        })), [0, 0.6, 0]]],
        Z: [[new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, false), new GizmoMaterial({
          color: 0x0000ff,
          opacity: 0.25
        })), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
        XYZ: [[new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), new GizmoMaterial({
          color: 0xffffff,
          opacity: 0.25
        }))]]
      };
    };

    this.setActivePlane = function (axis, eye) {
      var tempMatrix = new THREE.Matrix4();
      eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

      if (axis == "X") {
        this.activePlane = this.planes["XY"];
        if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
      }

      if (axis == "Y") {
        this.activePlane = this.planes["XY"];
        if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
      }

      if (axis == "Z") {
        this.activePlane = this.planes["XZ"];
        if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
      }

      if (axis == "XYZ") this.activePlane = this.planes["XYZE"];
      this.hide();
      this.show();
    };

    this.init();
  };

  THREE.TransformGizmoScale.prototype = Object.create(THREE.TransformGizmo.prototype);

  THREE.TransformControls = function (camera, domElement, mode) {
    // TODO: Make non-uniform scale and rotate play nice in hierarchies
    // TODO: ADD RXYZ contol
    THREE.Object3D.call(this);
    domElement = domElement !== undefined ? domElement : document;
    this.gizmo = {};

    switch (mode) {
      case "translate":
        this.gizmo[mode] = new THREE.TransformGizmoTranslate();
        break;

      case "rotate":
        this.gizmo[mode] = new THREE.TransformGizmoRotate();
        break;

      case "transrotate":
        this.gizmo[mode] = new THREE.TransformGizmoTranslateRotate();
        break;

      case "scale":
        this.gizmo[mode] = new THREE.TransformGizmoScale();
        break;
    }

    this.add(this.gizmo[mode]);
    this.gizmo[mode].hide();
    this.object = undefined;
    this.snap = null;
    this.snapDelta = 0;
    this.space = "world";
    this.size = 1;
    this.axis = null;
    this.useAllPickers = true;
    this.unitX = new THREE.Vector3(1, 0, 0);
    this.unitY = new THREE.Vector3(0, 1, 0);
    this.unitZ = new THREE.Vector3(0, 0, 1);
    this.normal = new THREE.Vector3(0, 0, 1);

    if (mode === "transrotate") {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1));
      var material = new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: 2,
        depthTest: false
      });
      this.startLine = new THREE.Line(geometry, material);
      var geometry = new THREE.Geometry();
      var material = new THREE.LineBasicMaterial({
        color: 0xffe603,
        linewidth: 2,
        depthTest: false
      });
      geometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1));
      this.endLine = new THREE.Line(geometry, material);
      var geometry = new THREE.Geometry();
      var material = new THREE.LineDashedMaterial({
        color: 0x000000,
        linewidth: 1,
        depthTest: false
      });
      geometry.vertices.push(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 1, 0));
      this.centerLine = new THREE.Line(geometry, material);
      var map = THREE.ImageUtils.loadTexture(Autodesk.Viewing.Private.getResourceUrl("res/textures/centerMarker_X.png"));
      map.magFilter = map.minFilter = THREE.NearestFilter;
      var geometry = new THREE.CircleGeometry(0.1, 32);
      var material = new THREE.MeshBasicMaterial({
        opacity: 1,
        side: THREE.DoubleSide,
        transparent: true,
        map: map
      });
      this.centerMark = new THREE.Mesh(geometry, material);
      this.centerMark.rotation.set(Math.PI / 2, 0, 0);
      this.ticks = {};
      var map = THREE.ImageUtils.loadTexture(Autodesk.Viewing.Private.getResourceUrl("res/textures/cardinalPoint.png"));
      map.magFilter = map.minFilter = THREE.NearestFilter;
      var material = new THREE.MeshBasicMaterial({
        depthTest: false,
        opacity: 1,
        transparent: true,
        side: THREE.DoubleSide,
        map: map
      });
      var w = 0.12,
          h = 0.25,
          d = 1.15;
      this.ticks["RX"] = new THREE.Object3D();
      var geometry = new THREE.PlaneBufferGeometry(w, h);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, -d - h / 2);
      mesh.rotation.set(Math.PI / 2, Math.PI / 2, 0);
      this.ticks["RX"].add(mesh);
      mesh = mesh.clone();
      mesh.position.set(0, d + h / 2, 0);
      mesh.rotation.set(0, Math.PI / 2, 0);
      this.ticks["RX"].add(mesh);
      mesh = mesh.clone();
      mesh.position.set(0, 0, d + h / 2);
      mesh.rotation.set(0, Math.PI / 2, Math.PI / 2);
      this.ticks["RX"].add(mesh);
      mesh = mesh.clone();
      mesh.position.set(0, -d - h / 2, 0);
      mesh.rotation.set(0, Math.PI / 2, 0);
      this.ticks["RX"].add(mesh);
      this.ticks["RY"] = new THREE.Object3D();
      mesh = mesh.clone();
      mesh.position.set(0, 0, -d - h / 2);
      mesh.rotation.set(Math.PI / 2, 0, 0);
      this.ticks["RY"].add(mesh);
      mesh = mesh.clone();
      mesh.position.set(-d - h / 2, 0, 0);
      mesh.rotation.set(Math.PI / 2, 0, Math.PI / 2);
      this.ticks["RY"].add(mesh);
      mesh = mesh.clone();
      mesh.position.set(0, 0, d + h / 2);
      mesh.rotation.set(Math.PI / 2, 0, 0);
      this.ticks["RY"].add(mesh);
      mesh = mesh.clone();
      mesh.position.set(d + h / 2, 0, 0);
      mesh.rotation.set(Math.PI / 2, 0, Math.PI / 2);
      this.ticks["RY"].add(mesh);
    }

    var scope = this;
    var _dragging = false;
    var _mode = mode;
    var _plane = "XY";
    var changeEvent = {
      type: "change"
    };
    var mouseDownEvent = {
      type: "mouseDown"
    };
    var mouseUpEvent = {
      type: "mouseUp",
      mode: _mode
    };
    var objectChangeEvent = {
      type: "objectChange"
    };
    var ray = new THREE.Raycaster();
    var pointerVector = new THREE.Vector3();
    var pointerDir = new THREE.Vector3();
    var point = new THREE.Vector3();
    var offset = new THREE.Vector3();
    var rotation = new THREE.Vector3();
    var offsetRotation = new THREE.Vector3();
    var scale = 1;
    var lookAtMatrix = new THREE.Matrix4();
    var eye = new THREE.Vector3();
    var tempMatrix = new THREE.Matrix4();
    var tempVector = new THREE.Vector3();
    var tempQuaternion = new THREE.Quaternion();
    var projX = new THREE.Vector3();
    var projY = new THREE.Vector3();
    var projZ = new THREE.Vector3();
    var quaternionXYZ = new THREE.Quaternion();
    var quaternionX = new THREE.Quaternion();
    var quaternionY = new THREE.Quaternion();
    var quaternionZ = new THREE.Quaternion();
    var quaternionE = new THREE.Quaternion();
    var oldPosition = new THREE.Vector3();
    var oldScale = new THREE.Vector3();
    var oldRotationMatrix = new THREE.Matrix4();
    var parentRotationMatrix = new THREE.Matrix4();
    var parentScale = new THREE.Vector3();
    var worldPosition = new THREE.Vector3();
    var worldRotation = new THREE.Euler();
    var worldRotationMatrix = new THREE.Matrix4();
    var camPosition = new THREE.Vector3();
    var camRotation = new THREE.Euler();

    this.attach = function (object) {
      scope.object = object;

      this.gizmo[_mode].show();

      scope.update();
      scope.updateUnitVectors();
    };

    this.detach = function (object) {
      scope.object = undefined;
      this.axis = null;

      this.gizmo[_mode].hide();
    };

    this.setMode = function (mode) {
      _mode = mode ? mode : _mode;
      if (_mode == "scale") scope.space = "local";

      this.gizmo[_mode].show();

      this.update();
      scope.dispatchEvent(changeEvent);
    };

    this.getPicker = function () {
      return scope.gizmo[_mode].hemiPicker.children;
    };

    this.setPosition = function (position) {
      this.object.position.copy(position);
      this.update();
    };

    this.setNormal = function (normal) {
      tempQuaternion.setFromUnitVectors(this.normal, normal);
      this.unitX.applyQuaternion(tempQuaternion);
      this.unitY.applyQuaternion(tempQuaternion);
      this.unitZ.applyQuaternion(tempQuaternion);
      this.normal.copy(normal);

      if (this.object) {
        this.object.quaternion.multiply(tempQuaternion);
      }

      this.update();
    };

    this.setSnap = function (snap, delta) {
      scope.snap = snap;
      scope.snapDelta = delta;
    };

    this.setSize = function (size) {
      scope.size = size;
      this.update();
      scope.dispatchEvent(changeEvent);
    };

    this.setSpace = function (space) {
      scope.space = space;
      this.update();
      scope.dispatchEvent(changeEvent);
    };

    this.update = function (highlight) {
      if (scope.object === undefined) return;
      scope.object.updateMatrixWorld();
      worldPosition.setFromMatrixPosition(scope.object.matrixWorld);
      worldRotation.setFromRotationMatrix(tempMatrix.extractRotation(scope.object.matrixWorld));
      camera.updateMatrixWorld();
      camPosition.setFromMatrixPosition(camera.matrixWorld); //camRotation.setFromRotationMatrix( tempMatrix.extractRotation( camera.matrixWorld ) );

      this.position.copy(worldPosition);
      this.quaternion.setFromEuler(worldRotation);
      this.normal.set(0, 0, 1);
      this.normal.applyEuler(worldRotation); // keep same screen height (100px)

      var dist = worldPosition.distanceTo(camPosition);
      var height = camera.isPerspective ? 2 * Math.tan(camera.fov * Math.PI / 360) * dist : dist;
      var rect = domElement.getBoundingClientRect();
      scale = 100 * height / rect.height;
      this.scale.set(scale, scale, scale); //eye.copy( camPosition ).sub( worldPosition ).normalize();
      //if ( scope.space == "local" )
      //    this.gizmo[_mode].update( worldRotation, eye );
      //else if ( scope.space == "world" )
      //    this.gizmo[_mode].update( new THREE.Euler(), eye );

      if (highlight) this.gizmo[_mode].highlight(scope.axis);
    };

    this.updateUnitVectors = function () {
      this.unitX.set(1, 0, 0);
      this.unitY.set(0, 1, 0);
      this.unitZ.set(0, 0, 1);
      this.unitX.applyEuler(worldRotation);
      this.unitY.applyEuler(worldRotation);
      this.unitZ.applyEuler(worldRotation);
    };

    this.showRotationGizmos = function (set) {
      var handles = this.gizmo[_mode].handles.children;

      for (var i = 0; i < handles.length; i++) {
        var child = handles[i];
        child.visible = true;
        if (child.name.search("R") !== -1) child.visible = set;
      }

      this.useAllPickers = set;
    };

    this.highlight = function () {
      this.gizmo[_mode].highlight(this.axis || "Z");
    };

    this.onPointerHover = function (event) {
      if (scope.object === undefined || _dragging === true) return false;
      var pointer = event.pointers ? event.pointers[0] : event;
      var intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);
      var axis = null;
      var mode = "";

      if (intersect) {
        axis = intersect.object.name;
        mode = axis.search("R") != -1 ? "rotate" : "translate";
      }

      if (scope.axis !== axis) {
        scope.axis = axis;
        scope.gizmo[_mode].activeMode = mode;
        scope.update(true);
        scope.dispatchEvent(changeEvent);
      }

      if (scope.axis === null) {
        scope.gizmo[_mode].show();
      }

      return intersect ? true : false;
    };

    this.onPointerDown = function (event) {
      if (scope.object === undefined || _dragging === true) return false;
      var pointer = event.pointers ? event.pointers[0] : event;

      if (event.pointerType === 'touch') {
        var intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);
        var axis = null;
        var mode = "";

        if (intersect) {
          axis = intersect.object.name;
          mode = axis.search("R") != -1 ? "rotate" : "translate";
        }

        if (scope.axis !== axis) {
          scope.axis = axis;
          scope.gizmo[_mode].activeMode = mode;
        }
      }

      var intersect = null;

      if (pointer.button === 0 || pointer.button === undefined) {
        intersect = intersectObjects(pointer, scope.useAllPickers ? scope.gizmo[_mode].pickers.children : scope.gizmo[_mode].subPickers.children);

        if (intersect) {
          scope.dispatchEvent(mouseDownEvent);
          scope.axis = intersect.object.name;
          scope.update();
          eye.copy(camera.position).sub(worldPosition).normalize();

          scope.gizmo[_mode].setActivePlane(scope.axis, eye);

          var planeIntersect = intersectObjects(pointer, [scope.gizmo[_mode].activePlane]);
          if (planeIntersect) offset.copy(planeIntersect.point);
          oldPosition.copy(scope.object.position);
          oldScale.copy(scope.object.scale);
          oldRotationMatrix.extractRotation(scope.object.matrix);
          worldRotationMatrix.extractRotation(scope.object.matrixWorld);

          if (scope.object.parent) {
            parentRotationMatrix.extractRotation(scope.object.parent.matrixWorld);
            parentScale.setFromMatrixScale(tempMatrix.getInverse(scope.object.parent.matrixWorld));
          } else {
            parentRotationMatrix.extractRotation(scope.object.matrixWorld);
            parentScale.setFromMatrixScale(tempMatrix.getInverse(scope.object.matrixWorld));
          } // show rotation start line and ticks


          if (_mode === "transrotate" && scope.gizmo[_mode].activeMode === "rotate") {
            scope.startLine.geometry.vertices[0].set(0, 0, 0).applyMatrix4(scope.matrixWorld);
            scope.startLine.geometry.vertices[1].set(0, 0, 1).applyMatrix4(scope.matrixWorld);
            scope.startLine.geometry.verticesNeedUpdate = true;
            scope.parent.add(scope.startLine);
            var pos = scope.object.geometry.getAttribute('position');
            var pt1 = new THREE.Vector3().fromAttribute(pos, 0).applyMatrix4(scope.object.matrixWorld);
            var pt2 = new THREE.Vector3().fromAttribute(pos, 1).applyMatrix4(scope.object.matrixWorld);
            var pt3 = new THREE.Vector3().fromAttribute(pos, 2).applyMatrix4(scope.object.matrixWorld);
            var pt4 = new THREE.Vector3().fromAttribute(pos, 3).applyMatrix4(scope.object.matrixWorld);

            if (scope.axis === "RX") {
              pt1.lerp(pt3, 0.5);
              pt2.lerp(pt4, 0.5);
              var dist = pt1.distanceTo(pt2);
              scope.centerLine.material.dashSize = dist / 15;
              scope.centerLine.material.gapSize = dist / 30;
              scope.centerLine.geometry.vertices[0].copy(pt1);
              scope.centerLine.geometry.vertices[1].copy(pt2);
            } else {
              pt1.lerp(pt2, 0.5);
              pt3.lerp(pt4, 0.5);
              var dist = pt1.distanceTo(pt3);
              scope.centerLine.material.dashSize = dist / 15;
              scope.centerLine.material.gapSize = dist / 30;
              scope.centerLine.geometry.vertices[0].copy(pt1);
              scope.centerLine.geometry.vertices[1].copy(pt3);
            }

            scope.centerLine.geometry.computeLineDistances();
            scope.centerLine.geometry.verticesNeedUpdate = true;
            scope.parent.add(scope.centerLine);
            scope.ticks[scope.axis].position.copy(scope.position);
            scope.ticks[scope.axis].quaternion.copy(scope.quaternion);
            scope.ticks[scope.axis].scale.copy(scope.scale);
            scope.parent.add(scope.ticks[scope.axis]);
          }
        }
      }

      _dragging = true;
      return intersect ? true : false;
    };

    this.onPointerMove = function (event) {
      if (scope.object === undefined || scope.axis === null || _dragging === false) return false;
      var pointer = event.pointers ? event.pointers[0] : event;
      var planeIntersect = intersectObjects(pointer, [scope.gizmo[_mode].activePlane]);
      if (planeIntersect) point.copy(planeIntersect.point);
      var mode = scope.gizmo[_mode].activeMode;

      if (mode == "translate") {
        point.sub(offset);
        point.multiply(parentScale);

        if (scope.space == "local") {
          point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));
          projX.copy(this.unitX);
          projY.copy(this.unitY);
          projZ.copy(this.unitZ);
          tempVector.set(0, 0, 0);

          if (scope.axis.search("X") != -1) {
            projX.multiplyScalar(point.dot(this.unitX));
            tempVector.add(projX);
          }

          if (scope.axis.search("Y") != -1) {
            projY.multiplyScalar(point.dot(this.unitY));
            tempVector.add(projY);
          }

          if (scope.axis.search("Z") != -1) {
            projZ.multiplyScalar(point.dot(this.unitZ));
            tempVector.add(projZ);
          }

          point.copy(tempVector);
          point.applyMatrix4(oldRotationMatrix);
          scope.object.position.copy(oldPosition);
          scope.object.position.add(point);
        }

        if (scope.space == "world" || scope.axis.search("XYZ") != -1) {
          projX.copy(this.unitX);
          projY.copy(this.unitY);
          projZ.copy(this.unitZ);
          tempVector.set(0, 0, 0);

          if (scope.axis.search("X") != -1) {
            projX.multiplyScalar(point.dot(this.unitX));
            tempVector.add(projX);
          }

          if (scope.axis.search("Y") != -1) {
            projY.multiplyScalar(point.dot(this.unitY));
            tempVector.add(projY);
          }

          if (scope.axis.search("Z") != -1) {
            projZ.multiplyScalar(point.dot(this.unitZ));
            tempVector.add(projZ);
          }

          point.copy(tempVector);
          point.applyMatrix4(tempMatrix.getInverse(parentRotationMatrix));
          scope.object.position.copy(oldPosition);
          scope.object.position.add(point);
        }
      } else if (mode == "scale") {
        point.sub(offset);
        point.multiply(parentScale);

        if (scope.space == "local") {
          if (scope.axis == "XYZ") {
            scale = 1 + point.y / 50;
            scope.object.scale.x = oldScale.x * scale;
            scope.object.scale.y = oldScale.y * scale;
            scope.object.scale.z = oldScale.z * scale;
          } else {
            point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));
            if (scope.axis == "X") scope.object.scale.x = oldScale.x * (1 + point.x / 50);
            if (scope.axis == "Y") scope.object.scale.y = oldScale.y * (1 + point.y / 50);
            if (scope.axis == "Z") scope.object.scale.z = oldScale.z * (1 + point.z / 50);
          }
        }
      } else if (mode == "rotate") {
        point.sub(worldPosition);
        point.multiply(parentScale);
        tempVector.copy(offset).sub(worldPosition);
        tempVector.multiply(parentScale);

        if (scope.axis == "RE") {
          point.applyMatrix4(tempMatrix.getInverse(lookAtMatrix));
          tempVector.applyMatrix4(tempMatrix.getInverse(lookAtMatrix));
          rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
          offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));
          tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));
          var rotz = rotation.z - offsetRotation.z;

          if (scope.snap !== null) {
            var rotsnap = Math.round(rotz / scope.snap) * scope.snap;

            if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
              rotz = rotsnap;
            }
          }

          quaternionE.setFromAxisAngle(eye, rotz);
          quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);
          tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionE);
          tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);
          scope.object.quaternion.copy(tempQuaternion);
        } else if (scope.axis == "RXYZE") {
          var tempAxis = point.clone().cross(tempVector).normalize(); // rotation axis

          tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));
          var rot = -point.clone().angleTo(tempVector);

          if (scope.snap !== null) {
            var rotsnap = Math.round(rot / scope.snap) * scope.snap;

            if (Math.abs(rotsnap - rot) < scope.snapDelta) {
              rot = rotsnap;
            }
          }

          quaternionX.setFromAxisAngle(tempAxis, rot);
          quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);
          tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
          tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);
          scope.object.quaternion.copy(tempQuaternion);
        } else if (scope.space == "local") {
          point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));
          tempVector.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));
          var projx = point.dot(this.unitX),
              projy = point.dot(this.unitY),
              projz = point.dot(this.unitZ);
          var tempx = tempVector.dot(this.unitX),
              tempy = tempVector.dot(this.unitY),
              tempz = tempVector.dot(this.unitZ);
          rotation.set(Math.atan2(projz, projy), Math.atan2(projx, projz), Math.atan2(projy, projx));
          offsetRotation.set(Math.atan2(tempz, tempy), Math.atan2(tempx, tempz), Math.atan2(tempy, tempx));
          var rotx = rotation.x - offsetRotation.x;
          var roty = rotation.y - offsetRotation.y;
          var rotz = rotation.z - offsetRotation.z;

          if (scope.snap !== null) {
            if (scope.axis.search("X") != -1) {
              var rotsnap = Math.round(rotx / scope.snap) * scope.snap;

              if (Math.abs(rotsnap - rotx) < scope.snapDelta) {
                rotx = rotsnap;
              }
            }

            if (scope.axis.search("Y") != -1) {
              var rotsnap = Math.round(roty / scope.snap) * scope.snap;

              if (Math.abs(rotsnap - roty) < scope.snapDelta) {
                roty = rotsnap;
              }
            }

            if (scope.axis.search("Z") != -1) {
              var rotsnap = Math.round(rotz / scope.snap) * scope.snap;

              if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
                rotz = rotsnap;
              }
            }
          }

          quaternionX.setFromAxisAngle(this.unitX, rotx);
          quaternionY.setFromAxisAngle(this.unitY, roty);
          quaternionZ.setFromAxisAngle(this.unitZ, rotz);
          quaternionXYZ.setFromRotationMatrix(oldRotationMatrix);
          if (scope.axis == "RX") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionX);
          if (scope.axis == "RY") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionY);
          if (scope.axis == "RZ") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionZ);
          scope.object.quaternion.copy(quaternionXYZ);
        } else if (scope.space == "world") {
          var projx = point.dot(this.unitX),
              projy = point.dot(this.unitY),
              projz = point.dot(this.unitZ);
          var tempx = tempVector.dot(this.unitX),
              tempy = tempVector.dot(this.unitY),
              tempz = tempVector.dot(this.unitZ);
          rotation.set(Math.atan2(projz, projy), Math.atan2(projx, projz), Math.atan2(projy, projx));
          offsetRotation.set(Math.atan2(tempz, tempy), Math.atan2(tempx, tempz), Math.atan2(tempy, tempx));
          tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));
          var rotx = rotation.x - offsetRotation.x;
          var roty = rotation.y - offsetRotation.y;
          var rotz = rotation.z - offsetRotation.z;

          if (scope.snap !== null) {
            if (scope.axis.search("X") != -1) {
              var rotsnap = Math.round(rotx / scope.snap) * scope.snap;

              if (Math.abs(rotsnap - rotx) < scope.snapDelta) {
                rotx = rotsnap;
              }
            }

            if (scope.axis.search("Y") != -1) {
              var rotsnap = Math.round(roty / scope.snap) * scope.snap;

              if (Math.abs(rotsnap - roty) < scope.snapDelta) {
                roty = rotsnap;
              }
            }

            if (scope.axis.search("Z") != -1) {
              var rotsnap = Math.round(rotz / scope.snap) * scope.snap;

              if (Math.abs(rotsnap - rotz) < scope.snapDelta) {
                rotz = rotsnap;
              }
            }
          }

          quaternionX.setFromAxisAngle(this.unitX, rotx);
          quaternionY.setFromAxisAngle(this.unitY, roty);
          quaternionZ.setFromAxisAngle(this.unitZ, rotz);
          quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);
          if (scope.axis == "RX") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
          if (scope.axis == "RY") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
          if (scope.axis == "RZ") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
          tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);
          scope.object.quaternion.copy(tempQuaternion);
        } // show rotation end line


        if (_mode === "transrotate") {
          scope.add(scope.endLine);
          scope.add(scope.centerMark);
        }
      } // update matrix


      scope.object.matrixAutoUpdate = true;
      scope.update(true);
      scope.dispatchEvent(changeEvent);
      scope.dispatchEvent(objectChangeEvent);
      return planeIntersect ? true : false;
    };

    this.onPointerUp = function (event) {
      if (_dragging && scope.axis !== null) {
        mouseUpEvent.mode = _mode;
        scope.dispatchEvent(mouseUpEvent);
      }

      _dragging = false;

      this.gizmo[_mode].show();

      this.updateUnitVectors(); // remove rotation start/end lines

      if (_mode === "transrotate" && this.gizmo[_mode].activeMode === "rotate") {
        this.remove(this.endLine);
        this.remove(this.centerMark);
        this.parent.remove(this.centerLine);
        this.parent.remove(this.startLine);
        this.parent.remove(this.ticks[this.axis]);
      }

      return false;
    };

    function intersectObjects(pointer, objects) {
      var rect = domElement.getBoundingClientRect();
      var x = (pointer.clientX - rect.left) / rect.width * 2 - 1;
      var y = -((pointer.clientY - rect.top) / rect.height) * 2 + 1;

      if (camera.isPerspective) {
        pointerVector.set(x, y, 0.5);
        pointerVector.unproject(camera);
        ray.set(camera.position, pointerVector.sub(camera.position).normalize());
      } else {
        pointerVector.set(x, y, -1);
        pointerVector.unproject(camera);
        pointerDir.set(0, 0, -1);
        ray.set(pointerVector, pointerDir.transformDirection(camera.matrixWorld));
      }

      var intersections = ray.intersectObjects(objects, true);
      return intersections[0] ? intersections[0] : false;
    }
  };

  THREE.TransformControls.prototype = Object.create(THREE.Object3D.prototype);
})();

/***/ }),

/***/ "./src/Viewing.Extension.Transform/Viewing.Extension.Transform.js":
/*!************************************************************************!*\
  !*** ./src/Viewing.Extension.Transform/Viewing.Extension.Transform.js ***!
  \************************************************************************/
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
/* harmony import */ var _Viewing_Tool_Translate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Viewing.Tool.Translate */ "./src/Viewing.Extension.Transform/Viewing.Tool.Translate.js");
/* harmony import */ var _Viewing_Tool_Rotate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Viewing.Tool.Rotate */ "./src/Viewing.Extension.Transform/Viewing.Tool.Rotate.js");
/* harmony import */ var Viewer_ExtensionBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Viewer.ExtensionBase */ "./src/components/Viewer.ExtensionBase/index.js");
/* harmony import */ var Viewer_Toolkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Viewer.Toolkit */ "./src/components/Viewer.Toolkit/index.js");





/////////////////////////////////////////////////////////////////////
// Viewing.Extension.CSSTVExtension
// by Philippe Leefsma, April 2016
//
/////////////////////////////////////////////////////////////////////





var TransformExtension =
/*#__PURE__*/
function (_ExtensionBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TransformExtension, _ExtensionBase);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function TransformExtension(viewer) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TransformExtension);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TransformExtension).call(this, viewer, options));
    _this.translateTool = new _Viewing_Tool_Translate__WEBPACK_IMPORTED_MODULE_5__["default"](viewer);

    _this._viewer.toolController.registerTool(_this.translateTool);

    _this.rotateTool = new _Viewing_Tool_Rotate__WEBPACK_IMPORTED_MODULE_6__["default"](viewer);

    _this._viewer.toolController.registerTool(_this.rotateTool);

    return _this;
  } /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TransformExtension, [{
    key: "load",
    /////////////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////////////
    value: function load() {
      var _this2 = this;

      this._txControl = Viewer_Toolkit__WEBPACK_IMPORTED_MODULE_8__["default"].createButton('toolbar-translate', 'fa fa-arrows-alt', 'Translate Tool', function () {
        var txTool = _this2.translateTool.getName();

        var rxTool = _this2.rotateTool.getName();

        if (_this2.translateTool.active) {
          _this2._viewer.toolController.deactivateTool(txTool);

          _this2._txControl.container.classList.remove('active');

          _this2._comboCtrl.container.classList.remove('active');
        } else {
          _this2._viewer.toolController.activateTool(txTool);

          _this2._txControl.container.classList.add('active');

          _this2._viewer.toolController.deactivateTool(rxTool);

          _this2._rxControl.container.classList.remove('active');

          _this2._comboCtrl.container.classList.add('active');
        }
      });
      this._rxControl = Viewer_Toolkit__WEBPACK_IMPORTED_MODULE_8__["default"].createButton('toolbar-rotate', 'fa fa-refresh', 'Rotate Tool', function () {
        var txTool = _this2.translateTool.getName();

        var rxTool = _this2.rotateTool.getName();

        if (_this2.rotateTool.active) {
          _this2._viewer.toolController.deactivateTool(rxTool);

          _this2._rxControl.container.classList.remove('active');

          _this2._comboCtrl.container.classList.remove('active');
        } else {
          _this2._viewer.toolController.activateTool(rxTool);

          _this2._rxControl.container.classList.add('active');

          _this2._viewer.toolController.deactivateTool(txTool);

          _this2._txControl.container.classList.remove('active');

          _this2._comboCtrl.container.classList.add('active');
        }
      });
      this.parentControl = this._options.parentControl;

      if (!this.parentControl) {
        var viewerToolbar = this._viewer.getToolbar(true);

        this.parentControl = new Autodesk.Viewing.UI.ControlGroup('transform');
        viewerToolbar.addControl(this.parentControl);
      }

      this._comboCtrl = new Autodesk.Viewing.UI.ComboButton('transform-combo');

      this._comboCtrl.setToolTip('Transform Tools');

      this._comboCtrl.icon.style.fontSize = '24px';
      this._comboCtrl.icon.style.transform = 'rotateY(180Deg)';
      this._comboCtrl.icon.className = 'glyphicon glyphicon-wrench';

      this._comboCtrl.addControl(this._txControl);

      this._comboCtrl.addControl(this._rxControl);

      var openCombo = this._comboCtrl.onClick;

      this._comboCtrl.onClick = function (e) {
        if (_this2._comboCtrl.container.classList.contains('active')) {
          _this2._txControl.container.classList.remove('active');

          _this2._rxControl.container.classList.remove('active');

          _this2._comboCtrl.container.classList.remove('active');

          var txTool = _this2.translateTool.getName();

          var rxTool = _this2.rotateTool.getName();

          _this2._viewer.toolController.deactivateTool(txTool);

          _this2._viewer.toolController.deactivateTool(rxTool);
        } else {
          openCombo();
        }
      };

      this.parentControl.addControl(this._comboCtrl);
      console.log('Viewing.Extension.Transform loaded');
      return true;
    } /////////////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "unload",
    value: function unload() {
      this.parentControl.removeControl(this._comboCtrl);

      this._viewer.toolController.deactivateTool(this.translateTool.getName());

      this._viewer.toolController.deactivateTool(this.rotateTool.getName());

      console.log('Viewing.Extension.Transform unloaded');
    }
  }], [{
    key: "ExtensionId",
    get: function get() {
      return 'Viewing.Extension.Transform';
    }
  }]);

  return TransformExtension;
}(Viewer_ExtensionBase__WEBPACK_IMPORTED_MODULE_7__["default"]);

Autodesk.Viewing.theExtensionManager.registerExtension(TransformExtension.ExtensionId, TransformExtension); //function createRadioButton() {
//
//  var viewerToolbar = _viewer.getToolbar(true);
//
//  var modelTools = viewerToolbar.getControl(
//    Autodesk.Viewing.TOOLBAR.MODELTOOLSID);
//
//  var radio = new Autodesk.Viewing.UI.RadioButtonGroup(
//    "Autodesk.ADN.Viewing.Extension.Toolbar.Radio");
//
//  radio.addClass('toolbar-vertical-group');
//
//  var radioBtn1 = createButton(
//    'Autodesk.ADN.Viewing.Extension.Toolbar.RadioBtn1',
//    'url(img/adsk/adsk-24x24-32.png)',
//    'Radio button1',
//    function(e) {
//      alert("I'm a radio button!");
//    });
//
//  var radioBtn2 = createButton(
//    'Autodesk.ADN.Viewing.Extension.Toolbar.RadioBtn2',
//    'url(img/adsk/adsk-24x24-32.png)',
//    'Radio button2',
//    function(e) {
//      alert("I'm another radio button!");
//    });
//
//  radio.addControl(radioBtn1);
//  radio.addControl(radioBtn2);
//
//  modelTools.addControl(radio);
//}

/***/ }),

/***/ "./src/Viewing.Extension.Transform/Viewing.Tool.Rotate.js":
/*!****************************************************************!*\
  !*** ./src/Viewing.Extension.Transform/Viewing.Tool.Rotate.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RotateTool; });
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








var RotateTool =
/*#__PURE__*/
function (_EventsEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RotateTool, _EventsEmitter);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function RotateTool(viewer) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RotateTool);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RotateTool).call(this));
    _this.keys = {};
    _this.active = false;
    _this.viewer = viewer;
    _this.fullTransform = false;

    _this.viewer.toolController.registerTool(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    _this.onAggregateSelectionChangedHandler = function (e) {
      _this.onAggregateSelectionChanged(e);
    };

    return _this;
  } /////////////////////////////////////////////////////////////////
  // Enable tool
  //
  /////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RotateTool, [{
    key: "enable",
    value: function enable(_enable) {
      var name = this.getName();

      if (_enable) {
        this.viewer.toolController.activateTool(name);
      } else {
        this.viewer.toolController.deactivateTool(name);
      }
    } /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getNames",
    value: function getNames() {
      return ['Viewing.Rotate.Tool'];
    } /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getName",
    value: function getName() {
      return 'Viewing.Rotate.Tool';
    } ///////////////////////////////////////////////////////////////////
    // activate tool
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: "activate",
    value: function activate() {
      if (!this.active) {
        this.active = true;
        this.viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChangedHandler);
      }
    } ///////////////////////////////////////////////////////////////////////////
    // deactivate tool
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "deactivate",
    value: function deactivate() {
      if (this.active) {
        this.active = false;

        if (this.rotateControl) {
          this.rotateControl.remove();
          this.rotateControl = null;
        }

        this.viewer.removeEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChangedHandler);
      }
    } ///////////////////////////////////////////////////////////////////////////
    // Component Selection Handler 
    // (use Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT instead of 
    //  Autodesk.Viewing.SELECTION_CHANGED_EVENT - deprecated )
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "onAggregateSelectionChanged",
    value: function onAggregateSelectionChanged(event) {
      if (this.rotateControl && this.rotateControl.engaged) {
        this.rotateControl.engaged = false;
        this.viewer.select(this.selection.dbIdArray);
        return;
      }

      if (event.selections && event.selections.length) {
        var selection = event.selections[0];
        this.selection = selection;
        this.emit('transform.modelSelected', this.selection);

        if (this.fullTransform) {
          this.selection.fragIdsArray = [];
          var fragCount = selection.model.getFragmentList().fragments.fragId2dbId.length;

          for (var fragId = 0; fragId < fragCount; ++fragId) {
            this.selection.fragIdsArray.push(fragId);
          }

          this.selection.dbIdArray = [];
          var instanceTree = selection.model.getData().instanceTree;
          var rootId = instanceTree.getRootId();
          this.selection.dbIdArray.push(rootId);
        }

        this.drawControl();
        this.viewer.fitToView(this.selection.dbIdArray);
      } else {
        this.clearSelection();
      }
    } ///////////////////////////////////////////////////////////////////////////
    // Selection cleared
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.selection = null;

      if (this.rotateControl) {
        this.rotateControl.remove();
        this.rotateControl = null;
        this.viewer.impl.sceneUpdated(true);
      }
    } ///////////////////////////////////////////////////////////////////////////
    // Draw rotate control
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "drawControl",
    value: function drawControl() {
      var _this2 = this;

      var bBox = this.geWorldBoundingBox(this.selection.fragIdsArray, this.selection.model.getFragmentList());
      this.center = new THREE.Vector3((bBox.min.x + bBox.max.x) / 2, (bBox.min.y + bBox.max.y) / 2, (bBox.min.z + bBox.max.z) / 2);
      var size = Math.max(bBox.max.x - bBox.min.x, bBox.max.y - bBox.min.y, bBox.max.z - bBox.min.z) * 0.8;

      if (this.rotateControl) {
        this.rotateControl.remove();
      }

      this.rotateControl = new RotateControl(this.viewer, this.center, size);
      this.rotateControl.on('transform.rotate', function (data) {
        _this2.rotateFragments(_this2.selection.model, _this2.selection.fragIdsArray, data.axis, data.angle, _this2.center);

        _this2.viewer.impl.sceneUpdated(true);
      });
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleButtonDown",
    value: function handleButtonDown(event, button) {
      if (this.rotateControl) {
        if (this.rotateControl.onPointerDown(event)) {
          return true;
        }
      }

      if (button === 0 && this.keys.Control) {
        this.isDragging = true;
        this.mousePos = {
          x: event.clientX,
          y: event.clientY
        };
        return true;
      }

      return false;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleButtonUp",
    value: function handleButtonUp(event, button) {
      if (this.rotateControl) {
        this.rotateControl.onPointerUp(event);
      }

      if (button === 0) {
        this.isDragging = false;
      }

      return false;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (this.rotateControl) {
        this.rotateControl.onPointerHover(event);
      }

      if (this.isDragging) {
        if (this.selection) {
          var offset = {
            x: this.mousePos.x - event.clientX,
            y: event.clientY - this.mousePos.y
          };
          this.mousePos = {
            x: event.clientX,
            y: event.clientY
          };
          var angle = Math.sqrt(offset.x * offset.x + offset.y * offset.y);
          var sidewaysDirection = new THREE.Vector3();
          var moveDirection = new THREE.Vector3();
          var eyeDirection = new THREE.Vector3();
          var upDirection = new THREE.Vector3();
          var camera = this.viewer.getCamera();
          var axis = new THREE.Vector3();
          var eye = new THREE.Vector3();
          eye.copy(camera.position).sub(camera.target);
          eyeDirection.copy(eye).normalize();
          upDirection.copy(camera.up).normalize();
          sidewaysDirection.crossVectors(upDirection, eyeDirection).normalize();
          upDirection.setLength(offset.y);
          sidewaysDirection.setLength(offset.x);
          moveDirection.copy(upDirection.add(sidewaysDirection));
          axis.crossVectors(moveDirection, eye).normalize();
          this.rotateFragments(this.selection.model, this.selection.fragIdsArray, axis, angle * Math.PI / 180, this.center);
          this.viewer.impl.sceneUpdated(true);
        }

        return true;
      }

      return false;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event, keyCode) {
      this.keys[event.key] = true;
      return false;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event, keyCode) {
      this.keys[event.key] = false;
      return false;
    } ///////////////////////////////////////////////////////////////////////////
    // Rotate selected fragments
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "rotateFragments",
    value: function rotateFragments(model, fragIdsArray, axis, angle, center) {
      var _this3 = this;

      var quaternion = new THREE.Quaternion();
      quaternion.setFromAxisAngle(axis, angle);
      fragIdsArray.forEach(function (fragId, idx) {
        var fragProxy = _this3.viewer.impl.getFragmentProxy(model, fragId);

        fragProxy.getAnimTransform();
        var position = new THREE.Vector3(fragProxy.position.x - center.x, fragProxy.position.y - center.y, fragProxy.position.z - center.z);
        position.applyQuaternion(quaternion);
        position.add(center);
        fragProxy.position = position;
        fragProxy.quaternion.multiplyQuaternions(quaternion, fragProxy.quaternion);

        if (idx === 0) {
          var euler = new THREE.Euler();
          euler.setFromQuaternion(fragProxy.quaternion, 0);

          _this3.emit('transform.rotate', {
            rotation: euler,
            model: model
          });
        }

        fragProxy.updateAnimTransform();
      });
    } ///////////////////////////////////////////////////////////////////////////
    // returns bounding box as it appears in the viewer
    // (transformations could be applied)
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "geWorldBoundingBox",
    value: function geWorldBoundingBox(fragIds, fragList) {
      var fragbBox = new THREE.Box3();
      var nodebBox = new THREE.Box3();
      fragIds.forEach(function (fragId) {
        fragList.getWorldBounds(fragId, fragbBox);
        nodebBox.union(fragbBox);
      });
      return nodebBox;
    }
  }]);

  return RotateTool;
}(EventsEmitter__WEBPACK_IMPORTED_MODULE_6__["default"]); ///////////////////////////////////////////////////////////////////////////////
// RotateControl Class
//
///////////////////////////////////////////////////////////////////////////////




var RotateControl =
/*#__PURE__*/
function (_EventsEmitter2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RotateControl, _EventsEmitter2);

  function RotateControl(viewer, center, size) {
    var _this4;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RotateControl);

    _this4 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RotateControl).call(this));
    _this4.engaged = false;
    _this4.overlayScene = 'rotateControlScene';
    _this4.domElement = viewer.impl.canvas;
    _this4.camera = viewer.impl.camera;
    _this4.viewer = viewer;
    _this4.center = center;
    _this4.size = size;
    _this4.gizmos = [];

    _this4.viewer.impl.createOverlayScene(_this4.overlayScene);

    _this4.createAxis(center, new THREE.Vector3(1, 0, 0), size * 0.85, 0xFF0000);

    _this4.createAxis(center, new THREE.Vector3(0, 1, 0), size * 0.85, 0x00FF00);

    _this4.createAxis(center, new THREE.Vector3(0, 0, 1), size * 0.85, 0x0000FF); // World UP = Y


    if (_this4.camera.worldup.y) {
      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(0, Math.PI / 2, 0), size * 0.0045, size * 0.8, 0xFF0000, Math.PI, new THREE.Vector3(1, 0, 0)));

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(Math.PI / 2, 0, 0), size * 0.0045, size * 0.8, 0x00FF00, 2 * Math.PI, new THREE.Vector3(0, 1, 0)));

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(0, 0, 0), size * 0.0045, size * 0.8, 0x0000FF, Math.PI, new THREE.Vector3(0, 0, 1)));
    } else {
      // World UP = Z
      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(Math.PI / 2, Math.PI / 2, 0), size * 0.0045, size * 0.8, 0xFF0000, Math.PI, new THREE.Vector3(1, 0, 0)));

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(Math.PI / 2, 0, 0), size * 0.0045, size * 0.8, 0x00FF00, Math.PI, new THREE.Vector3(0, 1, 0)));

      _this4.gizmos.push(_this4.createGizmo(center, new THREE.Euler(0, 0, 0), size * 0.0045, size * 0.8, 0x0000FF, 2 * Math.PI, new THREE.Vector3(0, 0, 1)));
    }

    _this4.picker = _this4.createSphere(size * 0.02);
    var material = new THREE.LineBasicMaterial({
      color: 0xFFFF00,
      linewidth: 1,
      depthTest: false,
      depthWrite: false,
      transparent: true
    });
    _this4.angleLine = _this4.createLine(_this4.center, _this4.center, material);
    viewer.impl.sceneUpdated(true);
    return _this4;
  } ///////////////////////////////////////////////////////////////////////////
  // Draw a line
  //
  ///////////////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RotateControl, [{
    key: "createLine",
    value: function createLine(start, end, material) {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(start.x, start.y, start.z));
      geometry.vertices.push(new THREE.Vector3(end.x, end.y, end.z));
      var line = new THREE.Line(geometry, material);
      this.viewer.impl.addOverlay(this.overlayScene, line);
      return line;
    } ///////////////////////////////////////////////////////////////////////////
    // Draw a cone
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "createCone",
    value: function createCone(start, dir, length, material) {
      dir.normalize();
      var end = {
        x: start.x + dir.x * length,
        y: start.y + dir.y * length,
        z: start.z + dir.z * length
      };
      var orientation = new THREE.Matrix4();
      orientation.lookAt(start, end, new THREE.Object3D().up);
      var matrix = new THREE.Matrix4();
      matrix.set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
      orientation.multiply(matrix);
      var geometry = new THREE.CylinderGeometry(0, length * 0.2, length, 128, 1);
      var cone = new THREE.Mesh(geometry, material);
      cone.applyMatrix(orientation);
      cone.position.x = start.x + dir.x * length / 2;
      cone.position.y = start.y + dir.y * length / 2;
      cone.position.z = start.z + dir.z * length / 2;
      this.viewer.impl.addOverlay(this.overlayScene, cone);
      return cone;
    } ///////////////////////////////////////////////////////////////////////////
    // Draw one axis
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "createAxis",
    value: function createAxis(start, dir, size, color) {
      var end = {
        x: start.x + dir.x * size,
        y: start.y + dir.y * size,
        z: start.z + dir.z * size
      };
      var material = new THREE.LineBasicMaterial({
        color: color,
        linewidth: 3,
        depthTest: false,
        depthWrite: false,
        transparent: true
      });
      this.createLine(start, end, material);
      this.createCone(end, dir, size * 0.1, material);
    } ///////////////////////////////////////////////////////////////////////////
    // Draw a rotate gizmo
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "createGizmo",
    value: function createGizmo(center, euler, size, radius, color, range, axis) {
      var material = new GizmoMaterial({
        color: color
      });
      var subMaterial = new GizmoMaterial({
        color: color
      });
      var torusGizmo = new THREE.Mesh(new THREE.TorusGeometry(radius, size, 64, 64, range), material);
      var subTorus = new THREE.Mesh(new THREE.TorusGeometry(radius, size, 64, 64, 2 * Math.PI), subMaterial);
      subTorus.material.highlight(true);
      var transform = new THREE.Matrix4();
      var q = new THREE.Quaternion();
      q.setFromEuler(euler);
      var s = new THREE.Vector3(1, 1, 1);
      transform.compose(center, q, s);
      torusGizmo.applyMatrix(transform);
      subTorus.applyMatrix(transform);
      var plane = this.createBox(this.size * 100, this.size * 100, 0.01);
      plane.applyMatrix(transform);
      subTorus.visible = false;
      this.viewer.impl.addOverlay(this.overlayScene, torusGizmo);
      this.viewer.impl.addOverlay(this.overlayScene, subTorus);
      torusGizmo.subGizmo = subTorus;
      torusGizmo.plane = plane;
      torusGizmo.axis = axis;
      return torusGizmo;
    } ///////////////////////////////////////////////////////////////////////////
    // Draw a box
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "createBox",
    value: function createBox(w, h, d) {
      var material = new GizmoMaterial({
        color: 0x000000
      });
      var geometry = new THREE.BoxGeometry(w, h, d);
      var box = new THREE.Mesh(geometry, material);
      box.visible = false;
      this.viewer.impl.addOverlay(this.overlayScene, box);
      return box;
    } ///////////////////////////////////////////////////////////////////////////
    // Draw a sphere
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "createSphere",
    value: function createSphere(radius) {
      var material = new GizmoMaterial({
        color: 0xFFFF00
      });
      var geometry = new THREE.SphereGeometry(radius, 32, 32);
      var sphere = new THREE.Mesh(geometry, material);
      sphere.visible = false;
      this.viewer.impl.addOverlay(this.overlayScene, sphere);
      return sphere;
    } ///////////////////////////////////////////////////////////////////////////
    // Creates Raycatser object from the pointer
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "pointerToRaycaster",
    value: function pointerToRaycaster(pointer) {
      var pointerVector = new THREE.Vector3();
      var pointerDir = new THREE.Vector3();
      var ray = new THREE.Raycaster();
      var rect = this.domElement.getBoundingClientRect();
      var x = (pointer.clientX - rect.left) / rect.width * 2 - 1;
      var y = -((pointer.clientY - rect.top) / rect.height) * 2 + 1;

      if (this.camera.isPerspective) {
        pointerVector.set(x, y, 0.5);
        pointerVector.unproject(this.camera);
        ray.set(this.camera.position, pointerVector.sub(this.camera.position).normalize());
      } else {
        pointerVector.set(x, y, -1);
        pointerVector.unproject(this.camera);
        pointerDir.set(0, 0, -1);
        ray.set(pointerVector, pointerDir.transformDirection(this.camera.matrixWorld));
      }

      return ray;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "onPointerDown",
    value: function onPointerDown(event) {
      var pointer = event.pointers ? event.pointers[0] : event;

      if (pointer.button === 0) {
        var ray = this.pointerToRaycaster(pointer);
        var intersectResults = ray.intersectObjects(this.gizmos, true);

        if (intersectResults.length) {
          this.gizmos.forEach(function (gizmo) {
            gizmo.visible = false;
          });
          this.selectedGizmo = intersectResults[0].object;
          this.selectedGizmo.subGizmo.visible = true;
          this.picker.position.copy(intersectResults[0].point);
          this.angleLine.geometry.vertices[1].copy(intersectResults[0].point);
          this.lastDir = intersectResults[0].point.sub(this.center).normalize();
          this.angleLine.geometry.verticesNeedUpdate = true;
          this.angleLine.visible = true;
          this.picker.visible = true;
        } else {
          this.picker.visible = false;
        }

        this.engaged = this.picker.visible;
        this.viewer.impl.sceneUpdated(true);
      }

      return this.picker.visible;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "onPointerHover",
    value: function onPointerHover(event) {
      var pointer = event.pointers ? event.pointers[0] : event;

      if (this.engaged) {
        var ray = this.pointerToRaycaster(pointer);
        var intersectResults = ray.intersectObjects([this.selectedGizmo.plane], true);

        if (intersectResults.length) {
          var intersectPoint = intersectResults[0].point;
          var dir = intersectPoint.sub(this.center).normalize();
          var cross = new THREE.Vector3();
          cross.crossVectors(this.lastDir, dir);
          var sign = Math.sign(cross.dot(this.selectedGizmo.axis));
          this.emit('transform.rotate', {
            angle: sign * dir.angleTo(this.lastDir),
            axis: this.selectedGizmo.axis
          });
          this.lastDir = dir;
          var pickerPoint = new THREE.Vector3(this.center.x + dir.x * this.size * 0.8, this.center.y + dir.y * this.size * 0.8, this.center.z + dir.z * this.size * 0.8);
          this.picker.position.copy(pickerPoint);
          this.angleLine.geometry.vertices[1].copy(pickerPoint);
        }

        this.angleLine.visible = true;
        this.angleLine.geometry.verticesNeedUpdate = true;
      } else {
        this.angleLine.visible = false;
        var ray = this.pointerToRaycaster(pointer);
        var intersectResults = ray.intersectObjects(this.gizmos, true);

        if (intersectResults.length) {
          this.picker.position.set(intersectResults[0].point.x, intersectResults[0].point.y, intersectResults[0].point.z);
          this.picker.visible = true;
        } else {
          this.picker.visible = false;
        }
      }

      this.viewer.impl.sceneUpdated(true);
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "onPointerUp",
    value: function onPointerUp(event) {
      var _this5 = this;

      this.angleLine.visible = false;
      this.picker.visible = false;
      this.gizmos.forEach(function (gizmo) {
        gizmo.visible = true;
        gizmo.subGizmo.visible = false;
      });
      this.viewer.impl.sceneUpdated(true);
      setTimeout(function () {
        _this5.engaged = false;
      }, 100);
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "normalize",
    value: function normalize(screenPoint) {
      var viewport = this.viewer.navigation.getScreenViewport();
      var n = {
        x: (screenPoint.x - viewport.left) / viewport.width,
        y: (screenPoint.y - viewport.top) / viewport.height
      };
      return n;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "projectOntoPlane",
    value: function projectOntoPlane(worldPoint, normal) {
      var dist = normal.dot(worldPoint);
      return new THREE.Vector3(worldPoint.x - dist * normal.x, worldPoint.y - dist * normal.y, worldPoint.z - dist * normal.z);
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "remove",
    value: function remove() {
      this.viewer.impl.removeOverlayScene(this.overlayScene);
    }
  }]);

  return RotateControl;
}(EventsEmitter__WEBPACK_IMPORTED_MODULE_6__["default"]); ///////////////////////////////////////////////////////////////////////////////
// Highlightable Gizmo Material
//
///////////////////////////////////////////////////////////////////////////////


var GizmoMaterial =
/*#__PURE__*/
function (_THREE$MeshBasicMater) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(GizmoMaterial, _THREE$MeshBasicMater);

  function GizmoMaterial(parameters) {
    var _this6;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GizmoMaterial);

    _this6 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(GizmoMaterial).call(this));

    _this6.setValues(parameters);

    _this6.colorInit = _this6.color.clone();
    _this6.opacityInit = _this6.opacity;
    _this6.side = THREE.FrontSide;
    _this6.depthWrite = false;
    _this6.transparent = true;
    _this6.depthTest = false;
    return _this6;
  } ///////////////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GizmoMaterial, [{
    key: "highlight",
    value: function highlight(highlighted) {
      if (highlighted) {
        this.color.setRGB(1, 230 / 255, 3 / 255);
        this.opacity = 1;
      } else {
        this.color.copy(this.colorInit);
        this.opacity = this.opacityInit;
      }
    }
  }]);

  return GizmoMaterial;
}(THREE.MeshBasicMaterial);

/***/ }),

/***/ "./src/Viewing.Extension.Transform/Viewing.Tool.Translate.js":
/*!*******************************************************************!*\
  !*** ./src/Viewing.Extension.Transform/Viewing.Tool.Translate.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransformTool; });
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
/* harmony import */ var _TransformGizmos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransformGizmos */ "./src/Viewing.Extension.Transform/TransformGizmos.js");
/* harmony import */ var _TransformGizmos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TransformGizmos__WEBPACK_IMPORTED_MODULE_7__);









var TransformTool =
/*#__PURE__*/
function (_EventsEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TransformTool, _EventsEmitter);

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  function TransformTool(viewer) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TransformTool);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TransformTool).call(this));
    _this.active = false;
    _this._viewer = viewer;
    _this._hitPoint = null;
    _this._isDragging = false;
    _this.fullTransform = false;
    _this._transformMesh = null;
    _this._transformControlTx = null;
    _this._selectedFragProxyMap = {};
    _this.onTxChange = _this.onTxChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onAggregateSelectionChanged = _this.onAggregateSelectionChanged.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onCameraChanged = _this.onCameraChanged.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  } /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TransformTool, [{
    key: "getNames",
    value: function getNames() {
      return ["Viewing.Transform.Tool"];
    } /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "getName",
    value: function getName() {
      return "Viewing.Transform.Tool";
    } ///////////////////////////////////////////////////////////////////////////
    // Creates a dummy mesh to attach control to
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "createTransformMesh",
    value: function createTransformMesh() {
      var material = new THREE.MeshPhongMaterial({
        color: 0xff0000
      });

      this._viewer.impl.matman().addMaterial('transform-tool-material', material, true);

      var sphere = new THREE.Mesh(new THREE.SphereGeometry(0.0001, 5), material);
      sphere.position.set(0, 0, 0);
      return sphere;
    } ///////////////////////////////////////////////////////////////////////////
    // on translation change
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "onTxChange",
    value: function onTxChange() {
      if (this._isDragging && this._transformControlTx.visible) {
        var translation = new THREE.Vector3(this._transformMesh.position.x - this._selection.model.offset.x, this._transformMesh.position.y - this._selection.model.offset.y, this._transformMesh.position.z - this._selection.model.offset.z);

        for (var fragId in this._selectedFragProxyMap) {
          var fragProxy = this._selectedFragProxyMap[fragId];
          var position = new THREE.Vector3(this._transformMesh.position.x - fragProxy.offset.x, this._transformMesh.position.y - fragProxy.offset.y, this._transformMesh.position.z - fragProxy.offset.z);
          fragProxy.position = position;
          fragProxy.updateAnimTransform();
        }

        this.emit('transform.translate', {
          model: this._selection.model,
          translation: translation
        });
      }

      this._viewer.impl.sceneUpdated(true);
    } ///////////////////////////////////////////////////////////////////////////
    // on camera changed
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "onCameraChanged",
    value: function onCameraChanged() {
      if (this._transformControlTx) {
        this._transformControlTx.update();
      }
    } ///////////////////////////////////////////////////////////////////////////
    // item selected callback
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "onAggregateSelectionChanged",
    value: function onAggregateSelectionChanged(event) {
      if (event.selections && event.selections.length) {
        this._selection = event.selections[0];

        if (this.fullTransform) {
          this._selection.fragIdsArray = [];

          var fragCount = this._selection.model.getFragmentList().fragments.fragId2dbId.length;

          for (var fragId = 0; fragId < fragCount; ++fragId) {
            this._selection.fragIdsArray.push(fragId);
          }

          this._selection.dbIdArray = [];

          var instanceTree = this._selection.model.getData().instanceTree;

          var rootId = instanceTree.getRootId();

          this._selection.dbIdArray.push(rootId);
        }

        this.emit('transform.modelSelected', this._selection);
        this.initializeSelection(this._hitPoint);
      } else {
        this.clearSelection();
      }
    }
  }, {
    key: "initializeSelection",
    value: function initializeSelection(hitPoint) {
      var _this2 = this;

      this._selectedFragProxyMap = {};
      var modelTransform = this._selection.model.transform || {
        translation: {
          x: 0,
          y: 0,
          z: 0
        }
      };
      this._selection.model.offset = {
        x: hitPoint.x - modelTransform.translation.x,
        y: hitPoint.y - modelTransform.translation.y,
        z: hitPoint.z - modelTransform.translation.z
      };
      this._transformControlTx.visible = true;

      this._transformControlTx.setPosition(hitPoint);

      this._transformControlTx.addEventListener('change', this.onTxChange);

      this._viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

      this._selection.fragIdsArray.forEach(function (fragId) {
        var fragProxy = _this2._viewer.impl.getFragmentProxy(_this2._selection.model, fragId);

        fragProxy.getAnimTransform();
        fragProxy.offset = {
          x: hitPoint.x - fragProxy.position.x,
          y: hitPoint.y - fragProxy.position.y,
          z: hitPoint.z - fragProxy.position.z
        };
        _this2._selectedFragProxyMap[fragId] = fragProxy;
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.active) {
        this._selection = null;
        this._selectedFragProxyMap = {};
        this._transformControlTx.visible = false;

        this._transformControlTx.removeEventListener('change', this.onTxChange);

        this._viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

        this._viewer.impl.sceneUpdated(true);
      }
    } ///////////////////////////////////////////////////////////////////////////
    // normalize screen coordinates
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "normalize",
    value: function normalize(screenPoint) {
      var viewport = this._viewer.navigation.getScreenViewport();

      var n = {
        x: (screenPoint.x - viewport.left) / viewport.width,
        y: (screenPoint.y - viewport.top) / viewport.height
      };
      return n;
    } ///////////////////////////////////////////////////////////////////////////
    // get 3d hit point on mesh
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "getHitPoint",
    value: function getHitPoint(event) {
      var screenPoint = {
        x: event.clientX,
        y: event.clientY
      };
      var n = this.normalize(screenPoint);

      var hitPoint = this._viewer.utilities.getHitPoint(n.x, n.y);

      return hitPoint;
    } ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: "activate",
    value: function activate() {
      if (!this.active) {
        this.active = true;

        this._viewer.select([]);

        var bbox = this._viewer.model.getBoundingBox();

        this._viewer.impl.createOverlayScene('TransformToolOverlay');

        this._transformControlTx = new THREE.TransformControls(this._viewer.impl.camera, this._viewer.impl.canvas, "translate");

        this._transformControlTx.setSize(bbox.getBoundingSphere().radius * 5);

        this._transformControlTx.visible = false;

        this._viewer.impl.addOverlay('TransformToolOverlay', this._transformControlTx);

        this._transformMesh = this.createTransformMesh();

        this._transformControlTx.attach(this._transformMesh);

        this._viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChanged);
      }
    } ///////////////////////////////////////////////////////////////////////////
    // deactivate tool
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "deactivate",
    value: function deactivate() {
      if (this.active) {
        this.active = false;

        this._viewer.impl.removeOverlay('TransformToolOverlay', this._transformControlTx);

        this._transformControlTx.removeEventListener('change', this.onTxChange);

        this._viewer.impl.removeOverlayScene('TransformToolOverlay');

        this._viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onCameraChanged);

        this._viewer.removeEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, this.onAggregateSelectionChanged);
      }
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleButtonDown",
    value: function handleButtonDown(event, button) {
      this._hitPoint = this.getHitPoint(event);
      this._isDragging = true;
      if (this._transformControlTx.onPointerDown(event)) return true;
      return false;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleButtonUp",
    value: function handleButtonUp(event, button) {
      this._isDragging = false;
      if (this._transformControlTx.onPointerUp(event)) return true;
      return false;
    } ///////////////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (this._isDragging) {
        if (this._transformControlTx.onPointerMove(event)) {
          return true;
        }

        return false;
      }

      if (this._transformControlTx.onPointerHover(event)) return true;
      return false;
    }
  }]);

  return TransformTool;
}(EventsEmitter__WEBPACK_IMPORTED_MODULE_6__["default"]);



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