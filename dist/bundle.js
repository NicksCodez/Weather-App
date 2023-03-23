/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/FormatData.js":
/*!***************************!*\
  !*** ./src/FormatData.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormatData; }
/* harmony export */ });
function FormatData(weatherData) {
  function getCurrentWeatherImperial() {
    var currentWeather = weatherData.current;
    return {
      city: weatherData.location.name,
      country: weatherData.location.country,
      time: new Date(weatherData.location.localtime_epoch * 1000),
      condition: currentWeather.condition,
      tempF: currentWeather.temp_f,
      feelsLikeF: currentWeather.feelslike_f,
      windKph: currentWeather.wind_kph,
      windDir: currentWeather.wind_dir,
      humidity: currentWeather.humidity,
      precipMm: currentWeather.precip_mm
    };
  }
  function getCurrentWeatherMetric() {
    var currentWeather = weatherData.current;
    return {
      city: weatherData.location.name,
      country: weatherData.location.country,
      time: new Date(weatherData.location.localtime_epoch * 1000),
      condition: currentWeather.condition,
      tempC: currentWeather.temp_c,
      feelsLikeC: currentWeather.feelslike_c,
      windKph: currentWeather.wind_kph,
      windDir: currentWeather.wind_dir,
      humidity: currentWeather.humidity,
      precipMm: currentWeather.precip_mm
    };
  }
  function getForecastImperial() {
    var forecast = [];
    weatherData.forecast.forecastday.forEach(function (forecastDay) {
      var hours = [];
      forecastDay.hour.forEach(function (h) {
        var hour = {
          time: new Date(h.time_epoch * 1000),
          tempF: h.temp_f,
          condition: h.condition,
          windMph: h.wind_mph,
          windDir: h.wind_dir,
          precipIn: h.precip_in,
          humidity: h.humidity,
          feelsLikeF: h.feelslike_f
        };
        hours.push(hour);
      });
      var astro = {
        sunrise: forecastDay.astro.sunrise,
        sunset: forecastDay.astro.sunset,
        moonrise: forecastDay.astro.moonrise,
        moonset: forecastDay.astro.moonset,
        moonPhase: forecastDay.astro.moon_phase,
        moonIllumination: forecastDay.astro.moon_illumination
      };
      var day = {
        date: new Date(forecastDay.date_epoch * 1000),
        hours: hours,
        astro: astro,
        maxTempF: forecastDay.day.maxtemp_f,
        minTempF: forecastDay.day.mintemp_f,
        avgTempF: forecastDay.day.avgtemp_f,
        maxWindMph: forecastDay.day.maxwind_mph,
        totalPrecipIn: forecastDay.day.totalprecip_in,
        avgHumidity: forecastDay.day.avghumidity,
        condition: forecastDay.day.condition
      };
      forecast.push(day);
    });
    return forecast;
  }
  function getForecastMetric() {
    var forecast = [];
    weatherData.forecast.forecastday.forEach(function (forecastDay) {
      var hours = [];
      forecastDay.hour.forEach(function (h) {
        var hour = {
          time: new Date(h.time_epoch * 1000),
          tempC: h.temp_c,
          condition: h.condition,
          windKph: h.wind_kph,
          windDir: h.wind_dir,
          precipMm: h.precip_mm,
          humidity: h.humidity,
          feelsLikeC: h.feelslike_c
        };
        hours.push(hour);
      });
      var astro = {
        sunrise: forecastDay.astro.sunrise,
        sunset: forecastDay.astro.sunset,
        moonrise: forecastDay.astro.moonrise,
        moonset: forecastDay.astro.moonset,
        moonPhase: forecastDay.astro.moon_phase,
        moonIllumination: forecastDay.astro.moon_illumination
      };
      var day = {
        date: new Date(forecastDay.date_epoch * 1000),
        hours: hours,
        astro: astro,
        maxTempC: forecastDay.day.maxtemp_c,
        minTempC: forecastDay.day.mintemp_c,
        avgTempC: forecastDay.day.avgtemp_c,
        maxWindKph: forecastDay.day.maxwind_kph,
        totalPrecipMm: forecastDay.day.totalprecip_mm,
        avgHumidity: forecastDay.day.avghumidity,
        condition: forecastDay.day.condition
      };
      forecast.push(day);
    });
    return forecast;
  }
  return {
    getCurrentWeatherImperial: getCurrentWeatherImperial,
    getCurrentWeatherMetric: getCurrentWeatherMetric,
    getForecastImperial: getForecastImperial,
    getForecastMetric: getForecastMetric
  };
}

/***/ }),

/***/ "./src/getApiData.js":
/*!***************************!*\
  !*** ./src/getApiData.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getData; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getData(_x) {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
    var data, weather;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=0813d3a5175b44529fd180407232203&q=".concat(city, "&days=3&aqi=no&alerts=no"));
        case 2:
          data = _context.sent;
          _context.next = 5;
          return data.json();
        case 5:
          weather = _context.sent;
          return _context.abrupt("return", weather);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/landscape-1844227.png */ "./src/assets/images/landscape-1844227.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-family: 'Helvetica', 'Sans-Serif';\n  margin: 0;\n  padding: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n#content {\n  /* height: 100vh; */\n  display: flex;\n  flex-direction: column;\n}\n\n#current {\n  align-self: center;\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-between;\n  gap: 7rem;\n  /* max-width: 50vw; */\n}\n\n#current-picture {\n  width: 10rem;\n}\n\n#current-weather {\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(4, max-content);\n  grid-template-rows: 1fr 3fr repeat(4, 1fr);\n  grid-template-areas:\n    'currentText currentText picture picture'\n    'temp temp picture picture'\n    'feels feels picture picture'\n    'humIcon precIcon windIcon dirIcon'\n    'hum prec wind dir'\n    'humValue precValue windValue dirValue';\n  justify-items: center;\n  align-items: center;\n  grid-row-gap: 0.75rem;\n  grid-column-gap: 1rem;\n}\n\n#current-text {\n  grid-area: currentText;\n  align-self: flex-end;\n  font-size: 1.25rem;\n}\n\n#current-temp {\n  min-width: max-content;\n  grid-area: temp;\n  font-size: 4rem;\n}\n\n#current-feels {\n  grid-area: feels;\n  align-self: flex-start;\n  font-size: 1.2rem;\n}\n\n#current-picture {\n  grid-area: picture;\n}\n\n#current-humidity-icon {\n  grid-area: humIcon;\n}\n\n#current-humidity-title {\n  grid-area: hum;\n}\n\n#current-humidity-value {\n  grid-area: humValue;\n}\n\n#current-precipitation-icon {\n  grid-area: precIcon;\n}\n\n#current-precipitation-title {\n  grid-area: prec;\n}\n\n#current-precipitation-value {\n  grid-area: precValue;\n}\n\n#current-windSpeed-icon {\n  grid-area: windIcon;\n}\n\n#current-windSpeed-title {\n  grid-area: wind;\n}\n\n#current-windSpeed-value {\n  grid-area: windValue;\n}\n\n#current-humidity-title,\n#current-precipitation-title,\n#current-windSpeed-title,\n#current-windDir-title {\n  font-size: 1.1rem;\n}\n\n#current-details {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n#current-weekday {\n  font-size: 3rem;\n}\n\n#current-date {\n  font-size: 1.5rem;\n}\n\n#current-time {\n  font-size: 1.5rem;\n}\n\n#current-location {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n#forecast {\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 5rem;\n  overflow-x: auto;\n  max-width: 80vw;\n  margin-bottom: 3rem;\n}\n\n.forecast-day {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 2fr repeat(3, 1fr);\n  grid-template-areas:\n    'date date date date'\n    'avg avg picture picture'\n    'minMax minMax forecastText forecastText'\n    'humIcon precIcon windIcon dirIcon'\n    'humValue precValue windValue dirValue';\n  align-items: center;\n  justify-items: center;\n  grid-column-gap: 0.5rem;\n  grid-row-gap: 0.25rem;\n  transition: background-color 0.5s ease-in-out, border 0.5s ease-in-out,\n    border-radius 0.5s ease-in-out;\n}\n\n.forecast-date {\n  grid-area: date;\n  align-self: flex-end;\n  font-size: 1.25rem;\n}\n\n.forecast-avg {\n  grid-area: avg;\n  font-size: 2.25rem;\n}\n\n.forecast-picture {\n  grid-area: picture;\n}\n\n.forecast-minMax {\n  grid-area: minMax;\n  align-self: flex-start;\n}\n\n.forecast-text {\n  grid-area: forecastText;\n  align-self: flex-start;\n}\n\n.forecast-humidity-icon {\n  grid-area: humIcon;\n}\n\n.forecast-humidity-value {\n  grid-area: humValue;\n}\n\n.forecast-precipitation-icon {\n  grid-area: precIcon;\n}\n\n.forecast-precipitation-value {\n  grid-area: precValue;\n}\n\n.forecast-windSpeed-icon {\n  grid-area: windIcon;\n}\n\n.forecast-windSpeed-value {\n  grid-area: windValue;\n}\n\n.forecast-windDir-icon {\n  grid-area: dirIcon;\n}\n\n.forecast-windDir-value {\n  grid-area: dirValue;\n}\n\n.forecast-humidity-value,\n.forecast-precipitation-value,\n.forecast-windSpeed-value,\n.forecast-windDir-value {\n  font-size: 0.8rem;\n}\n\n.forecast-day:hover {\n  border: 0.15rem solid black;\n  border-radius: 0.5rem;\n  background-color: aliceblue;\n  transition: background-color 0.5s ease-in-out, border 0.5s ease-in-out,\n    border-radius 0.5s ease-in-out;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sCAAsC;EACtC,SAAS;EACT,UAAU;EACV,yDAA8D;EAC9D,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6CAA6C;EAC7C,0CAA0C;EAC1C;;;;;;2CAMyC;EACzC,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;;;EAIE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,0CAA0C;EAC1C;;;;;2CAKyC;EACzC,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;EACrB;kCACgC;AAClC;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;EAIE,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,2BAA2B;EAC3B;kCACgC;EAChC,eAAe;AACjB","sourcesContent":["body {\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-family: 'Helvetica', 'Sans-Serif';\n  margin: 0;\n  padding: 0;\n  background-image: url('./assets/images/landscape-1844227.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n#content {\n  /* height: 100vh; */\n  display: flex;\n  flex-direction: column;\n}\n\n#current {\n  align-self: center;\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-between;\n  gap: 7rem;\n  /* max-width: 50vw; */\n}\n\n#current-picture {\n  width: 10rem;\n}\n\n#current-weather {\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(4, max-content);\n  grid-template-rows: 1fr 3fr repeat(4, 1fr);\n  grid-template-areas:\n    'currentText currentText picture picture'\n    'temp temp picture picture'\n    'feels feels picture picture'\n    'humIcon precIcon windIcon dirIcon'\n    'hum prec wind dir'\n    'humValue precValue windValue dirValue';\n  justify-items: center;\n  align-items: center;\n  grid-row-gap: 0.75rem;\n  grid-column-gap: 1rem;\n}\n\n#current-text {\n  grid-area: currentText;\n  align-self: flex-end;\n  font-size: 1.25rem;\n}\n\n#current-temp {\n  min-width: max-content;\n  grid-area: temp;\n  font-size: 4rem;\n}\n\n#current-feels {\n  grid-area: feels;\n  align-self: flex-start;\n  font-size: 1.2rem;\n}\n\n#current-picture {\n  grid-area: picture;\n}\n\n#current-humidity-icon {\n  grid-area: humIcon;\n}\n\n#current-humidity-title {\n  grid-area: hum;\n}\n\n#current-humidity-value {\n  grid-area: humValue;\n}\n\n#current-precipitation-icon {\n  grid-area: precIcon;\n}\n\n#current-precipitation-title {\n  grid-area: prec;\n}\n\n#current-precipitation-value {\n  grid-area: precValue;\n}\n\n#current-windSpeed-icon {\n  grid-area: windIcon;\n}\n\n#current-windSpeed-title {\n  grid-area: wind;\n}\n\n#current-windSpeed-value {\n  grid-area: windValue;\n}\n\n#current-humidity-title,\n#current-precipitation-title,\n#current-windSpeed-title,\n#current-windDir-title {\n  font-size: 1.1rem;\n}\n\n#current-details {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n#current-weekday {\n  font-size: 3rem;\n}\n\n#current-date {\n  font-size: 1.5rem;\n}\n\n#current-time {\n  font-size: 1.5rem;\n}\n\n#current-location {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n#forecast {\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 5rem;\n  overflow-x: auto;\n  max-width: 80vw;\n  margin-bottom: 3rem;\n}\n\n.forecast-day {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 2fr repeat(3, 1fr);\n  grid-template-areas:\n    'date date date date'\n    'avg avg picture picture'\n    'minMax minMax forecastText forecastText'\n    'humIcon precIcon windIcon dirIcon'\n    'humValue precValue windValue dirValue';\n  align-items: center;\n  justify-items: center;\n  grid-column-gap: 0.5rem;\n  grid-row-gap: 0.25rem;\n  transition: background-color 0.5s ease-in-out, border 0.5s ease-in-out,\n    border-radius 0.5s ease-in-out;\n}\n\n.forecast-date {\n  grid-area: date;\n  align-self: flex-end;\n  font-size: 1.25rem;\n}\n\n.forecast-avg {\n  grid-area: avg;\n  font-size: 2.25rem;\n}\n\n.forecast-picture {\n  grid-area: picture;\n}\n\n.forecast-minMax {\n  grid-area: minMax;\n  align-self: flex-start;\n}\n\n.forecast-text {\n  grid-area: forecastText;\n  align-self: flex-start;\n}\n\n.forecast-humidity-icon {\n  grid-area: humIcon;\n}\n\n.forecast-humidity-value {\n  grid-area: humValue;\n}\n\n.forecast-precipitation-icon {\n  grid-area: precIcon;\n}\n\n.forecast-precipitation-value {\n  grid-area: precValue;\n}\n\n.forecast-windSpeed-icon {\n  grid-area: windIcon;\n}\n\n.forecast-windSpeed-value {\n  grid-area: windValue;\n}\n\n.forecast-windDir-icon {\n  grid-area: dirIcon;\n}\n\n.forecast-windDir-value {\n  grid-area: dirValue;\n}\n\n.forecast-humidity-value,\n.forecast-precipitation-value,\n.forecast-windSpeed-value,\n.forecast-windDir-value {\n  font-size: 0.8rem;\n}\n\n.forecast-day:hover {\n  border: 0.15rem solid black;\n  border-radius: 0.5rem;\n  background-color: aliceblue;\n  transition: background-color 0.5s ease-in-out, border 0.5s ease-in-out,\n    border-radius 0.5s ease-in-out;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/landscape-1844227.png":
/*!*************************************************!*\
  !*** ./src/assets/images/landscape-1844227.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca4b59744c710936a917.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _getApiData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getApiData */ "./src/getApiData.js");
/* harmony import */ var _FormatData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatData */ "./src/FormatData.js");




// const data = getApiData('Bucharest').then((response) => {
// response.forecast.forecastday.forEach((day) => {
//   console.log(day);
// });
//   const formatData = FormatData(response);
//   const current = formatData.getCurrentWeatherMetric();
//   // console.log(current);
//   const forecast = formatData.getForecastMetric();
//   console.log(forecast);
// });
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ci1hcHAvLi9zcmMvRm9ybWF0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRBcGlEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1hdERhdGEod2VhdGhlckRhdGEpIHtcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJJbXBlcmlhbCgpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgdGltZTogbmV3IERhdGUod2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMCksXG4gICAgICBjb25kaXRpb246IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbixcbiAgICAgIHRlbXBGOiBjdXJyZW50V2VhdGhlci50ZW1wX2YsXG4gICAgICBmZWVsc0xpa2VGOiBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfZixcbiAgICAgIHdpbmRLcGg6IGN1cnJlbnRXZWF0aGVyLndpbmRfa3BoLFxuICAgICAgd2luZERpcjogY3VycmVudFdlYXRoZXIud2luZF9kaXIsXG4gICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXIuaHVtaWRpdHksXG4gICAgICBwcmVjaXBNbTogY3VycmVudFdlYXRoZXIucHJlY2lwX21tLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlck1ldHJpYygpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgdGltZTogbmV3IERhdGUod2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMCksXG4gICAgICBjb25kaXRpb246IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbixcbiAgICAgIHRlbXBDOiBjdXJyZW50V2VhdGhlci50ZW1wX2MsXG4gICAgICBmZWVsc0xpa2VDOiBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfYyxcbiAgICAgIHdpbmRLcGg6IGN1cnJlbnRXZWF0aGVyLndpbmRfa3BoLFxuICAgICAgd2luZERpcjogY3VycmVudFdlYXRoZXIud2luZF9kaXIsXG4gICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXIuaHVtaWRpdHksXG4gICAgICBwcmVjaXBNbTogY3VycmVudFdlYXRoZXIucHJlY2lwX21tLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGb3JlY2FzdEltcGVyaWFsKCkge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gW107XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZm9yZWNhc3REYXkpID0+IHtcbiAgICAgIGNvbnN0IGhvdXJzID0gW107XG4gICAgICBmb3JlY2FzdERheS5ob3VyLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgY29uc3QgaG91ciA9IHtcbiAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShoLnRpbWVfZXBvY2ggKiAxMDAwKSxcbiAgICAgICAgICB0ZW1wRjogaC50ZW1wX2YsXG4gICAgICAgICAgY29uZGl0aW9uOiBoLmNvbmRpdGlvbixcbiAgICAgICAgICB3aW5kTXBoOiBoLndpbmRfbXBoLFxuICAgICAgICAgIHdpbmREaXI6IGgud2luZF9kaXIsXG4gICAgICAgICAgcHJlY2lwSW46IGgucHJlY2lwX2luLFxuICAgICAgICAgIGh1bWlkaXR5OiBoLmh1bWlkaXR5LFxuICAgICAgICAgIGZlZWxzTGlrZUY6IGguZmVlbHNsaWtlX2YsXG4gICAgICAgIH07XG4gICAgICAgIGhvdXJzLnB1c2goaG91cik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYXN0cm8gPSB7XG4gICAgICAgIHN1bnJpc2U6IGZvcmVjYXN0RGF5LmFzdHJvLnN1bnJpc2UsXG4gICAgICAgIHN1bnNldDogZm9yZWNhc3REYXkuYXN0cm8uc3Vuc2V0LFxuICAgICAgICBtb29ucmlzZTogZm9yZWNhc3REYXkuYXN0cm8ubW9vbnJpc2UsXG4gICAgICAgIG1vb25zZXQ6IGZvcmVjYXN0RGF5LmFzdHJvLm1vb25zZXQsXG4gICAgICAgIG1vb25QaGFzZTogZm9yZWNhc3REYXkuYXN0cm8ubW9vbl9waGFzZSxcbiAgICAgICAgbW9vbklsbHVtaW5hdGlvbjogZm9yZWNhc3REYXkuYXN0cm8ubW9vbl9pbGx1bWluYXRpb24sXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXkgPSB7XG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGZvcmVjYXN0RGF5LmRhdGVfZXBvY2ggKiAxMDAwKSxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIGFzdHJvLFxuICAgICAgICBtYXhUZW1wRjogZm9yZWNhc3REYXkuZGF5Lm1heHRlbXBfZixcbiAgICAgICAgbWluVGVtcEY6IGZvcmVjYXN0RGF5LmRheS5taW50ZW1wX2YsXG4gICAgICAgIGF2Z1RlbXBGOiBmb3JlY2FzdERheS5kYXkuYXZndGVtcF9mLFxuICAgICAgICBtYXhXaW5kTXBoOiBmb3JlY2FzdERheS5kYXkubWF4d2luZF9tcGgsXG4gICAgICAgIHRvdGFsUHJlY2lwSW46IGZvcmVjYXN0RGF5LmRheS50b3RhbHByZWNpcF9pbixcbiAgICAgICAgYXZnSHVtaWRpdHk6IGZvcmVjYXN0RGF5LmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgY29uZGl0aW9uOiBmb3JlY2FzdERheS5kYXkuY29uZGl0aW9uLFxuICAgICAgfTtcblxuICAgICAgZm9yZWNhc3QucHVzaChkYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JlY2FzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcmVjYXN0TWV0cmljKCkge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gW107XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZm9yZWNhc3REYXkpID0+IHtcbiAgICAgIGNvbnN0IGhvdXJzID0gW107XG4gICAgICBmb3JlY2FzdERheS5ob3VyLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgY29uc3QgaG91ciA9IHtcbiAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShoLnRpbWVfZXBvY2ggKiAxMDAwKSxcbiAgICAgICAgICB0ZW1wQzogaC50ZW1wX2MsXG4gICAgICAgICAgY29uZGl0aW9uOiBoLmNvbmRpdGlvbixcbiAgICAgICAgICB3aW5kS3BoOiBoLndpbmRfa3BoLFxuICAgICAgICAgIHdpbmREaXI6IGgud2luZF9kaXIsXG4gICAgICAgICAgcHJlY2lwTW06IGgucHJlY2lwX21tLFxuICAgICAgICAgIGh1bWlkaXR5OiBoLmh1bWlkaXR5LFxuICAgICAgICAgIGZlZWxzTGlrZUM6IGguZmVlbHNsaWtlX2MsXG4gICAgICAgIH07XG4gICAgICAgIGhvdXJzLnB1c2goaG91cik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYXN0cm8gPSB7XG4gICAgICAgIHN1bnJpc2U6IGZvcmVjYXN0RGF5LmFzdHJvLnN1bnJpc2UsXG4gICAgICAgIHN1bnNldDogZm9yZWNhc3REYXkuYXN0cm8uc3Vuc2V0LFxuICAgICAgICBtb29ucmlzZTogZm9yZWNhc3REYXkuYXN0cm8ubW9vbnJpc2UsXG4gICAgICAgIG1vb25zZXQ6IGZvcmVjYXN0RGF5LmFzdHJvLm1vb25zZXQsXG4gICAgICAgIG1vb25QaGFzZTogZm9yZWNhc3REYXkuYXN0cm8ubW9vbl9waGFzZSxcbiAgICAgICAgbW9vbklsbHVtaW5hdGlvbjogZm9yZWNhc3REYXkuYXN0cm8ubW9vbl9pbGx1bWluYXRpb24sXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXkgPSB7XG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGZvcmVjYXN0RGF5LmRhdGVfZXBvY2ggKiAxMDAwKSxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIGFzdHJvLFxuICAgICAgICBtYXhUZW1wQzogZm9yZWNhc3REYXkuZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgbWluVGVtcEM6IGZvcmVjYXN0RGF5LmRheS5taW50ZW1wX2MsXG4gICAgICAgIGF2Z1RlbXBDOiBmb3JlY2FzdERheS5kYXkuYXZndGVtcF9jLFxuICAgICAgICBtYXhXaW5kS3BoOiBmb3JlY2FzdERheS5kYXkubWF4d2luZF9rcGgsXG4gICAgICAgIHRvdGFsUHJlY2lwTW06IGZvcmVjYXN0RGF5LmRheS50b3RhbHByZWNpcF9tbSxcbiAgICAgICAgYXZnSHVtaWRpdHk6IGZvcmVjYXN0RGF5LmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgY29uZGl0aW9uOiBmb3JlY2FzdERheS5kYXkuY29uZGl0aW9uLFxuICAgICAgfTtcblxuICAgICAgZm9yZWNhc3QucHVzaChkYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JlY2FzdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Q3VycmVudFdlYXRoZXJJbXBlcmlhbCxcbiAgICBnZXRDdXJyZW50V2VhdGhlck1ldHJpYyxcbiAgICBnZXRGb3JlY2FzdEltcGVyaWFsLFxuICAgIGdldEZvcmVjYXN0TWV0cmljLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wODEzZDNhNTE3NWI0NDUyOWZkMTgwNDA3MjMyMjAzJnE9JHtjaXR5fSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2BcbiAgKTtcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgLy8gY29uc29sZS5sb2cod2VhdGhlcik7XG4gIC8vIGNvbnNvbGUubG9nKHdlYXRoZXIuY3VycmVudCk7XG4gIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB3ZWF0aGVyKTtcbiAgcmV0dXJuIHdlYXRoZXI7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2xhbmRzY2FwZS0xODQ0MjI3LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYScsICdTYW5zLVNlcmlmJztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2N1cnJlbnQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogN3JlbTtcXG4gIC8qIG1heC13aWR0aDogNTB2dzsgKi9cXG59XFxuXFxuI2N1cnJlbnQtcGljdHVyZSB7XFxuICB3aWR0aDogMTByZW07XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdjdXJyZW50VGV4dCBjdXJyZW50VGV4dCBwaWN0dXJlIHBpY3R1cmUnXFxuICAgICd0ZW1wIHRlbXAgcGljdHVyZSBwaWN0dXJlJ1xcbiAgICAnZmVlbHMgZmVlbHMgcGljdHVyZSBwaWN0dXJlJ1xcbiAgICAnaHVtSWNvbiBwcmVjSWNvbiB3aW5kSWNvbiBkaXJJY29uJ1xcbiAgICAnaHVtIHByZWMgd2luZCBkaXInXFxuICAgICdodW1WYWx1ZSBwcmVjVmFsdWUgd2luZFZhbHVlIGRpclZhbHVlJztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXJvdy1nYXA6IDAuNzVyZW07XFxuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XFxufVxcblxcbiNjdXJyZW50LXRleHQge1xcbiAgZ3JpZC1hcmVhOiBjdXJyZW50VGV4dDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4jY3VycmVudC10ZW1wIHtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBncmlkLWFyZWE6IHRlbXA7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNjdXJyZW50LWZlZWxzIHtcXG4gIGdyaWQtYXJlYTogZmVlbHM7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjdXJyZW50LXBpY3R1cmUge1xcbiAgZ3JpZC1hcmVhOiBwaWN0dXJlO1xcbn1cXG5cXG4jY3VycmVudC1odW1pZGl0eS1pY29uIHtcXG4gIGdyaWQtYXJlYTogaHVtSWNvbjtcXG59XFxuXFxuI2N1cnJlbnQtaHVtaWRpdHktdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBodW07XFxufVxcblxcbiNjdXJyZW50LWh1bWlkaXR5LXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogaHVtVmFsdWU7XFxufVxcblxcbiNjdXJyZW50LXByZWNpcGl0YXRpb24taWNvbiB7XFxuICBncmlkLWFyZWE6IHByZWNJY29uO1xcbn1cXG5cXG4jY3VycmVudC1wcmVjaXBpdGF0aW9uLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogcHJlYztcXG59XFxuXFxuI2N1cnJlbnQtcHJlY2lwaXRhdGlvbi12YWx1ZSB7XFxuICBncmlkLWFyZWE6IHByZWNWYWx1ZTtcXG59XFxuXFxuI2N1cnJlbnQtd2luZFNwZWVkLWljb24ge1xcbiAgZ3JpZC1hcmVhOiB3aW5kSWNvbjtcXG59XFxuXFxuI2N1cnJlbnQtd2luZFNwZWVkLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogd2luZDtcXG59XFxuXFxuI2N1cnJlbnQtd2luZFNwZWVkLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogd2luZFZhbHVlO1xcbn1cXG5cXG4jY3VycmVudC1odW1pZGl0eS10aXRsZSxcXG4jY3VycmVudC1wcmVjaXBpdGF0aW9uLXRpdGxlLFxcbiNjdXJyZW50LXdpbmRTcGVlZC10aXRsZSxcXG4jY3VycmVudC13aW5kRGlyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4jY3VycmVudC1kZXRhaWxzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4jY3VycmVudC13ZWVrZGF5IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2N1cnJlbnQtZGF0ZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2N1cnJlbnQtdGltZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2N1cnJlbnQtbG9jYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuI2ZvcmVjYXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVyZW07XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MHZ3O1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdkYXRlIGRhdGUgZGF0ZSBkYXRlJ1xcbiAgICAnYXZnIGF2ZyBwaWN0dXJlIHBpY3R1cmUnXFxuICAgICdtaW5NYXggbWluTWF4IGZvcmVjYXN0VGV4dCBmb3JlY2FzdFRleHQnXFxuICAgICdodW1JY29uIHByZWNJY29uIHdpbmRJY29uIGRpckljb24nXFxuICAgICdodW1WYWx1ZSBwcmVjVmFsdWUgd2luZFZhbHVlIGRpclZhbHVlJztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtcm93LWdhcDogMC4yNXJlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgYm9yZGVyIDAuNXMgZWFzZS1pbi1vdXQsXFxuICAgIGJvcmRlci1yYWRpdXMgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcmVjYXN0LWRhdGUge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5mb3JlY2FzdC1hdmcge1xcbiAgZ3JpZC1hcmVhOiBhdmc7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi5mb3JlY2FzdC1waWN0dXJlIHtcXG4gIGdyaWQtYXJlYTogcGljdHVyZTtcXG59XFxuXFxuLmZvcmVjYXN0LW1pbk1heCB7XFxuICBncmlkLWFyZWE6IG1pbk1heDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mb3JlY2FzdC10ZXh0IHtcXG4gIGdyaWQtYXJlYTogZm9yZWNhc3RUZXh0O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvcmVjYXN0LWh1bWlkaXR5LWljb24ge1xcbiAgZ3JpZC1hcmVhOiBodW1JY29uO1xcbn1cXG5cXG4uZm9yZWNhc3QtaHVtaWRpdHktdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBodW1WYWx1ZTtcXG59XFxuXFxuLmZvcmVjYXN0LXByZWNpcGl0YXRpb24taWNvbiB7XFxuICBncmlkLWFyZWE6IHByZWNJY29uO1xcbn1cXG5cXG4uZm9yZWNhc3QtcHJlY2lwaXRhdGlvbi12YWx1ZSB7XFxuICBncmlkLWFyZWE6IHByZWNWYWx1ZTtcXG59XFxuXFxuLmZvcmVjYXN0LXdpbmRTcGVlZC1pY29uIHtcXG4gIGdyaWQtYXJlYTogd2luZEljb247XFxufVxcblxcbi5mb3JlY2FzdC13aW5kU3BlZWQtdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiB3aW5kVmFsdWU7XFxufVxcblxcbi5mb3JlY2FzdC13aW5kRGlyLWljb24ge1xcbiAgZ3JpZC1hcmVhOiBkaXJJY29uO1xcbn1cXG5cXG4uZm9yZWNhc3Qtd2luZERpci12YWx1ZSB7XFxuICBncmlkLWFyZWE6IGRpclZhbHVlO1xcbn1cXG5cXG4uZm9yZWNhc3QtaHVtaWRpdHktdmFsdWUsXFxuLmZvcmVjYXN0LXByZWNpcGl0YXRpb24tdmFsdWUsXFxuLmZvcmVjYXN0LXdpbmRTcGVlZC12YWx1ZSxcXG4uZm9yZWNhc3Qtd2luZERpci12YWx1ZSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRheTpob3ZlciB7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIGJvcmRlciAwLjVzIGVhc2UtaW4tb3V0LFxcbiAgICBib3JkZXItcmFkaXVzIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0NBQXNDO0VBQ3RDLFNBQVM7RUFDVCxVQUFVO0VBQ1YseURBQThEO0VBQzlELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLDBDQUEwQztFQUMxQzs7Ozs7OzJDQU15QztFQUN6QyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBOzs7O0VBSUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUM7Ozs7OzJDQUt5QztFQUN6QyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckI7a0NBQ2dDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQjtrQ0FDZ0M7RUFDaEMsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCAnU2Fucy1TZXJpZic7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9pbWFnZXMvbGFuZHNjYXBlLTE4NDQyMjcucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY3VycmVudCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA3cmVtO1xcbiAgLyogbWF4LXdpZHRoOiA1MHZ3OyAqL1xcbn1cXG5cXG4jY3VycmVudC1waWN0dXJlIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2N1cnJlbnRUZXh0IGN1cnJlbnRUZXh0IHBpY3R1cmUgcGljdHVyZSdcXG4gICAgJ3RlbXAgdGVtcCBwaWN0dXJlIHBpY3R1cmUnXFxuICAgICdmZWVscyBmZWVscyBwaWN0dXJlIHBpY3R1cmUnXFxuICAgICdodW1JY29uIHByZWNJY29uIHdpbmRJY29uIGRpckljb24nXFxuICAgICdodW0gcHJlYyB3aW5kIGRpcidcXG4gICAgJ2h1bVZhbHVlIHByZWNWYWx1ZSB3aW5kVmFsdWUgZGlyVmFsdWUnO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtcm93LWdhcDogMC43NXJlbTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG59XFxuXFxuI2N1cnJlbnQtdGV4dCB7XFxuICBncmlkLWFyZWE6IGN1cnJlbnRUZXh0O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbiNjdXJyZW50LXRlbXAge1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGdyaWQtYXJlYTogdGVtcDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuI2N1cnJlbnQtZmVlbHMge1xcbiAgZ3JpZC1hcmVhOiBmZWVscztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI2N1cnJlbnQtcGljdHVyZSB7XFxuICBncmlkLWFyZWE6IHBpY3R1cmU7XFxufVxcblxcbiNjdXJyZW50LWh1bWlkaXR5LWljb24ge1xcbiAgZ3JpZC1hcmVhOiBodW1JY29uO1xcbn1cXG5cXG4jY3VycmVudC1odW1pZGl0eS10aXRsZSB7XFxuICBncmlkLWFyZWE6IGh1bTtcXG59XFxuXFxuI2N1cnJlbnQtaHVtaWRpdHktdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBodW1WYWx1ZTtcXG59XFxuXFxuI2N1cnJlbnQtcHJlY2lwaXRhdGlvbi1pY29uIHtcXG4gIGdyaWQtYXJlYTogcHJlY0ljb247XFxufVxcblxcbiNjdXJyZW50LXByZWNpcGl0YXRpb24tdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBwcmVjO1xcbn1cXG5cXG4jY3VycmVudC1wcmVjaXBpdGF0aW9uLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogcHJlY1ZhbHVlO1xcbn1cXG5cXG4jY3VycmVudC13aW5kU3BlZWQtaWNvbiB7XFxuICBncmlkLWFyZWE6IHdpbmRJY29uO1xcbn1cXG5cXG4jY3VycmVudC13aW5kU3BlZWQtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB3aW5kO1xcbn1cXG5cXG4jY3VycmVudC13aW5kU3BlZWQtdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiB3aW5kVmFsdWU7XFxufVxcblxcbiNjdXJyZW50LWh1bWlkaXR5LXRpdGxlLFxcbiNjdXJyZW50LXByZWNpcGl0YXRpb24tdGl0bGUsXFxuI2N1cnJlbnQtd2luZFNwZWVkLXRpdGxlLFxcbiNjdXJyZW50LXdpbmREaXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbiNjdXJyZW50LWRldGFpbHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbiNjdXJyZW50LXdlZWtkYXkge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jY3VycmVudC1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3VycmVudC10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3VycmVudC1sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4jZm9yZWNhc3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwdnc7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2RhdGUgZGF0ZSBkYXRlIGRhdGUnXFxuICAgICdhdmcgYXZnIHBpY3R1cmUgcGljdHVyZSdcXG4gICAgJ21pbk1heCBtaW5NYXggZm9yZWNhc3RUZXh0IGZvcmVjYXN0VGV4dCdcXG4gICAgJ2h1bUljb24gcHJlY0ljb24gd2luZEljb24gZGlySWNvbidcXG4gICAgJ2h1bVZhbHVlIHByZWNWYWx1ZSB3aW5kVmFsdWUgZGlyVmFsdWUnO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xcbiAgZ3JpZC1yb3ctZ2FwOiAwLjI1cmVtO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBib3JkZXIgMC41cyBlYXNlLWluLW91dCxcXG4gICAgYm9yZGVyLXJhZGl1cyAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF0ZSB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWF2ZyB7XFxuICBncmlkLWFyZWE6IGF2ZztcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LXBpY3R1cmUge1xcbiAgZ3JpZC1hcmVhOiBwaWN0dXJlO1xcbn1cXG5cXG4uZm9yZWNhc3QtbWluTWF4IHtcXG4gIGdyaWQtYXJlYTogbWluTWF4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvcmVjYXN0LXRleHQge1xcbiAgZ3JpZC1hcmVhOiBmb3JlY2FzdFRleHQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9yZWNhc3QtaHVtaWRpdHktaWNvbiB7XFxuICBncmlkLWFyZWE6IGh1bUljb247XFxufVxcblxcbi5mb3JlY2FzdC1odW1pZGl0eS12YWx1ZSB7XFxuICBncmlkLWFyZWE6IGh1bVZhbHVlO1xcbn1cXG5cXG4uZm9yZWNhc3QtcHJlY2lwaXRhdGlvbi1pY29uIHtcXG4gIGdyaWQtYXJlYTogcHJlY0ljb247XFxufVxcblxcbi5mb3JlY2FzdC1wcmVjaXBpdGF0aW9uLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogcHJlY1ZhbHVlO1xcbn1cXG5cXG4uZm9yZWNhc3Qtd2luZFNwZWVkLWljb24ge1xcbiAgZ3JpZC1hcmVhOiB3aW5kSWNvbjtcXG59XFxuXFxuLmZvcmVjYXN0LXdpbmRTcGVlZC12YWx1ZSB7XFxuICBncmlkLWFyZWE6IHdpbmRWYWx1ZTtcXG59XFxuXFxuLmZvcmVjYXN0LXdpbmREaXItaWNvbiB7XFxuICBncmlkLWFyZWE6IGRpckljb247XFxufVxcblxcbi5mb3JlY2FzdC13aW5kRGlyLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogZGlyVmFsdWU7XFxufVxcblxcbi5mb3JlY2FzdC1odW1pZGl0eS12YWx1ZSxcXG4uZm9yZWNhc3QtcHJlY2lwaXRhdGlvbi12YWx1ZSxcXG4uZm9yZWNhc3Qtd2luZFNwZWVkLXZhbHVlLFxcbi5mb3JlY2FzdC13aW5kRGlyLXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5OmhvdmVyIHtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgYm9yZGVyIDAuNXMgZWFzZS1pbi1vdXQsXFxuICAgIGJvcmRlci1yYWRpdXMgMC41cyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldEFwaURhdGEgZnJvbSAnLi9nZXRBcGlEYXRhJztcbmltcG9ydCBGb3JtYXREYXRhIGZyb20gJy4vRm9ybWF0RGF0YSc7XG5cbi8vIGNvbnN0IGRhdGEgPSBnZXRBcGlEYXRhKCdCdWNoYXJlc3QnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZGF5KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGRheSk7XG4vLyB9KTtcbi8vICAgY29uc3QgZm9ybWF0RGF0YSA9IEZvcm1hdERhdGEocmVzcG9uc2UpO1xuLy8gICBjb25zdCBjdXJyZW50ID0gZm9ybWF0RGF0YS5nZXRDdXJyZW50V2VhdGhlck1ldHJpYygpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhjdXJyZW50KTtcbi8vICAgY29uc3QgZm9yZWNhc3QgPSBmb3JtYXREYXRhLmdldEZvcmVjYXN0TWV0cmljKCk7XG4vLyAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIkZvcm1hdERhdGEiLCJ3ZWF0aGVyRGF0YSIsImdldEN1cnJlbnRXZWF0aGVySW1wZXJpYWwiLCJjdXJyZW50V2VhdGhlciIsImN1cnJlbnQiLCJjaXR5IiwibG9jYXRpb24iLCJuYW1lIiwiY291bnRyeSIsInRpbWUiLCJEYXRlIiwibG9jYWx0aW1lX2Vwb2NoIiwiY29uZGl0aW9uIiwidGVtcEYiLCJ0ZW1wX2YiLCJmZWVsc0xpa2VGIiwiZmVlbHNsaWtlX2YiLCJ3aW5kS3BoIiwid2luZF9rcGgiLCJ3aW5kRGlyIiwid2luZF9kaXIiLCJodW1pZGl0eSIsInByZWNpcE1tIiwicHJlY2lwX21tIiwiZ2V0Q3VycmVudFdlYXRoZXJNZXRyaWMiLCJ0ZW1wQyIsInRlbXBfYyIsImZlZWxzTGlrZUMiLCJmZWVsc2xpa2VfYyIsImdldEZvcmVjYXN0SW1wZXJpYWwiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZm9yRWFjaCIsImZvcmVjYXN0RGF5IiwiaG91cnMiLCJob3VyIiwiaCIsInRpbWVfZXBvY2giLCJ3aW5kTXBoIiwid2luZF9tcGgiLCJwcmVjaXBJbiIsInByZWNpcF9pbiIsInB1c2giLCJhc3RybyIsInN1bnJpc2UiLCJzdW5zZXQiLCJtb29ucmlzZSIsIm1vb25zZXQiLCJtb29uUGhhc2UiLCJtb29uX3BoYXNlIiwibW9vbklsbHVtaW5hdGlvbiIsIm1vb25faWxsdW1pbmF0aW9uIiwiZGF5IiwiZGF0ZSIsImRhdGVfZXBvY2giLCJtYXhUZW1wRiIsIm1heHRlbXBfZiIsIm1pblRlbXBGIiwibWludGVtcF9mIiwiYXZnVGVtcEYiLCJhdmd0ZW1wX2YiLCJtYXhXaW5kTXBoIiwibWF4d2luZF9tcGgiLCJ0b3RhbFByZWNpcEluIiwidG90YWxwcmVjaXBfaW4iLCJhdmdIdW1pZGl0eSIsImF2Z2h1bWlkaXR5IiwiZ2V0Rm9yZWNhc3RNZXRyaWMiLCJtYXhUZW1wQyIsIm1heHRlbXBfYyIsIm1pblRlbXBDIiwibWludGVtcF9jIiwiYXZnVGVtcEMiLCJhdmd0ZW1wX2MiLCJtYXhXaW5kS3BoIiwibWF4d2luZF9rcGgiLCJ0b3RhbFByZWNpcE1tIiwidG90YWxwcmVjaXBfbW0iLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsInJldHVybiIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiY2F0Y2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImdldERhdGEiLCJfeCIsIl9nZXREYXRhIiwiX2NhbGxlZSIsImRhdGEiLCJ3ZWF0aGVyIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwiY29uY2F0IiwianNvbiIsImdldEFwaURhdGEiXSwic291cmNlUm9vdCI6IiJ9