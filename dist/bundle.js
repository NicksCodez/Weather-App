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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-family: 'Helvetica', 'Sans-Serif';\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  /* height: 100vh; */\n  display: flex;\n  flex-direction: column;\n}\n\n#current {\n  align-self: center;\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-between;\n  gap: 7rem;\n  /* max-width: 50vw; */\n}\n\n#current-picture {\n  width: 10rem;\n}\n\n#current-weather {\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(4, max-content);\n  grid-template-rows: 1fr 3fr repeat(4, 1fr);\n  grid-template-areas:\n    'currentText currentText picture picture'\n    'temp temp picture picture'\n    'feels feels picture picture'\n    'humIcon precIcon windIcon dirIcon'\n    'hum prec wind dir'\n    'humValue precValue windValue dirValue';\n  justify-items: center;\n  align-items: center;\n  grid-row-gap: 0.75rem;\n  grid-column-gap: 1rem;\n}\n\n#current-text {\n  grid-area: currentText;\n  align-self: flex-end;\n  font-size: 1.25rem;\n}\n\n#current-temp {\n  min-width: max-content;\n  grid-area: temp;\n  font-size: 4rem;\n}\n\n#current-feels {\n  grid-area: feels;\n  align-self: flex-start;\n  font-size: 1.2rem;\n}\n\n#current-picture {\n  grid-area: picture;\n}\n\n#current-humidity-icon {\n  grid-area: humIcon;\n}\n\n#current-humidity-title {\n  grid-area: hum;\n}\n\n#current-humidity-value {\n  grid-area: humValue;\n}\n\n#current-precipitation-icon {\n  grid-area: precIcon;\n}\n\n#current-precipitation-title {\n  grid-area: prec;\n}\n\n#current-precipitation-value {\n  grid-area: precValue;\n}\n\n#current-windSpeed-icon {\n  grid-area: windIcon;\n}\n\n#current-windSpeed-title {\n  grid-area: wind;\n}\n\n#current-windSpeed-value {\n  grid-area: windValue;\n}\n\n#current-humidity-title,\n#current-precipitation-title,\n#current-windSpeed-title,\n#current-windDir-title {\n  font-size: 1.1rem;\n}\n\n#current-details {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n#current-weekday {\n  font-size: 3rem;\n}\n\n#current-date {\n  font-size: 1.5rem;\n}\n\n#current-time {\n  font-size: 1.5rem;\n}\n\n#current-location {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n#forecast {\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 5rem;\n  overflow-x: auto;\n  max-width: 80vw;\n  margin-bottom: 3rem;\n}\n\n.forecast-day {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 2fr repeat(3, 1fr);\n  grid-template-areas:\n    'date date date date'\n    'avg avg picture picture'\n    'minMax minMax forecastText forecastText'\n    'humIcon precIcon windIcon dirIcon'\n    'humValue precValue windValue dirValue';\n  align-items: center;\n  justify-items: center;\n  grid-column-gap: 0.5rem;\n  grid-row-gap: 0.25rem;\n}\n\n.forecast-date {\n  grid-area: date;\n  align-self: flex-end;\n  font-size: 1.25rem;\n}\n\n.forecast-avg {\n  grid-area: avg;\n  font-size: 2.25rem;\n}\n\n.forecast-picture {\n  grid-area: picture;\n}\n\n.forecast-minMax {\n  grid-area: minMax;\n  align-self: flex-start;\n}\n\n.forecast-text {\n  grid-area: forecastText;\n  align-self: flex-start;\n}\n\n.forecast-humidity-icon {\n  grid-area: humIcon;\n}\n\n.forecast-humidity-value {\n  grid-area: humValue;\n}\n\n.forecast-precipitation-icon {\n  grid-area: precIcon;\n}\n\n.forecast-precipitation-value {\n  grid-area: precValue;\n}\n\n.forecast-windSpeed-icon {\n  grid-area: windIcon;\n}\n\n.forecast-windSpeed-value {\n  grid-area: windValue;\n}\n\n.forecast-windDir-icon {\n  grid-area: dirIcon;\n}\n\n.forecast-windDir-value {\n  grid-area: dirValue;\n}\n\n.forecast-humidity-value,\n.forecast-precipitation-value,\n.forecast-windSpeed-value,\n.forecast-windDir-value {\n  font-size: 0.8rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sCAAsC;EACtC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6CAA6C;EAC7C,0CAA0C;EAC1C;;;;;;2CAMyC;EACzC,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;;;EAIE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,0CAA0C;EAC1C;;;;;2CAKyC;EACzC,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;EAIE,iBAAiB;AACnB","sourcesContent":["body {\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  font-family: 'Helvetica', 'Sans-Serif';\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  /* height: 100vh; */\n  display: flex;\n  flex-direction: column;\n}\n\n#current {\n  align-self: center;\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-between;\n  gap: 7rem;\n  /* max-width: 50vw; */\n}\n\n#current-picture {\n  width: 10rem;\n}\n\n#current-weather {\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(4, max-content);\n  grid-template-rows: 1fr 3fr repeat(4, 1fr);\n  grid-template-areas:\n    'currentText currentText picture picture'\n    'temp temp picture picture'\n    'feels feels picture picture'\n    'humIcon precIcon windIcon dirIcon'\n    'hum prec wind dir'\n    'humValue precValue windValue dirValue';\n  justify-items: center;\n  align-items: center;\n  grid-row-gap: 0.75rem;\n  grid-column-gap: 1rem;\n}\n\n#current-text {\n  grid-area: currentText;\n  align-self: flex-end;\n  font-size: 1.25rem;\n}\n\n#current-temp {\n  min-width: max-content;\n  grid-area: temp;\n  font-size: 4rem;\n}\n\n#current-feels {\n  grid-area: feels;\n  align-self: flex-start;\n  font-size: 1.2rem;\n}\n\n#current-picture {\n  grid-area: picture;\n}\n\n#current-humidity-icon {\n  grid-area: humIcon;\n}\n\n#current-humidity-title {\n  grid-area: hum;\n}\n\n#current-humidity-value {\n  grid-area: humValue;\n}\n\n#current-precipitation-icon {\n  grid-area: precIcon;\n}\n\n#current-precipitation-title {\n  grid-area: prec;\n}\n\n#current-precipitation-value {\n  grid-area: precValue;\n}\n\n#current-windSpeed-icon {\n  grid-area: windIcon;\n}\n\n#current-windSpeed-title {\n  grid-area: wind;\n}\n\n#current-windSpeed-value {\n  grid-area: windValue;\n}\n\n#current-humidity-title,\n#current-precipitation-title,\n#current-windSpeed-title,\n#current-windDir-title {\n  font-size: 1.1rem;\n}\n\n#current-details {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n#current-weekday {\n  font-size: 3rem;\n}\n\n#current-date {\n  font-size: 1.5rem;\n}\n\n#current-time {\n  font-size: 1.5rem;\n}\n\n#current-location {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n#forecast {\n  align-self: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 5rem;\n  overflow-x: auto;\n  max-width: 80vw;\n  margin-bottom: 3rem;\n}\n\n.forecast-day {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 2fr repeat(3, 1fr);\n  grid-template-areas:\n    'date date date date'\n    'avg avg picture picture'\n    'minMax minMax forecastText forecastText'\n    'humIcon precIcon windIcon dirIcon'\n    'humValue precValue windValue dirValue';\n  align-items: center;\n  justify-items: center;\n  grid-column-gap: 0.5rem;\n  grid-row-gap: 0.25rem;\n}\n\n.forecast-date {\n  grid-area: date;\n  align-self: flex-end;\n  font-size: 1.25rem;\n}\n\n.forecast-avg {\n  grid-area: avg;\n  font-size: 2.25rem;\n}\n\n.forecast-picture {\n  grid-area: picture;\n}\n\n.forecast-minMax {\n  grid-area: minMax;\n  align-self: flex-start;\n}\n\n.forecast-text {\n  grid-area: forecastText;\n  align-self: flex-start;\n}\n\n.forecast-humidity-icon {\n  grid-area: humIcon;\n}\n\n.forecast-humidity-value {\n  grid-area: humValue;\n}\n\n.forecast-precipitation-icon {\n  grid-area: precIcon;\n}\n\n.forecast-precipitation-value {\n  grid-area: precValue;\n}\n\n.forecast-windSpeed-icon {\n  grid-area: windIcon;\n}\n\n.forecast-windSpeed-value {\n  grid-area: windValue;\n}\n\n.forecast-windDir-icon {\n  grid-area: dirIcon;\n}\n\n.forecast-windDir-value {\n  grid-area: dirValue;\n}\n\n.forecast-humidity-value,\n.forecast-precipitation-value,\n.forecast-windSpeed-value,\n.forecast-windDir-value {\n  font-size: 0.8rem;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLG9IQUFvSCxzQkFBc0IsR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVks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Q0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUNBOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRm9ybWF0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRBcGlEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1hdERhdGEod2VhdGhlckRhdGEpIHtcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJJbXBlcmlhbCgpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgdGltZTogbmV3IERhdGUod2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMCksXG4gICAgICBjb25kaXRpb246IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbixcbiAgICAgIHRlbXBGOiBjdXJyZW50V2VhdGhlci50ZW1wX2YsXG4gICAgICBmZWVsc0xpa2VGOiBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfZixcbiAgICAgIHdpbmRLcGg6IGN1cnJlbnRXZWF0aGVyLndpbmRfa3BoLFxuICAgICAgd2luZERpcjogY3VycmVudFdlYXRoZXIud2luZF9kaXIsXG4gICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXIuaHVtaWRpdHksXG4gICAgICBwcmVjaXBNbTogY3VycmVudFdlYXRoZXIucHJlY2lwX21tLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlck1ldHJpYygpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgdGltZTogbmV3IERhdGUod2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMCksXG4gICAgICBjb25kaXRpb246IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbixcbiAgICAgIHRlbXBDOiBjdXJyZW50V2VhdGhlci50ZW1wX2MsXG4gICAgICBmZWVsc0xpa2VDOiBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfYyxcbiAgICAgIHdpbmRLcGg6IGN1cnJlbnRXZWF0aGVyLndpbmRfa3BoLFxuICAgICAgd2luZERpcjogY3VycmVudFdlYXRoZXIud2luZF9kaXIsXG4gICAgICBodW1pZGl0eTogY3VycmVudFdlYXRoZXIuaHVtaWRpdHksXG4gICAgICBwcmVjaXBNbTogY3VycmVudFdlYXRoZXIucHJlY2lwX21tLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGb3JlY2FzdEltcGVyaWFsKCkge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gW107XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZm9yZWNhc3REYXkpID0+IHtcbiAgICAgIGNvbnN0IGhvdXJzID0gW107XG4gICAgICBmb3JlY2FzdERheS5ob3VyLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgY29uc3QgaG91ciA9IHtcbiAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShoLnRpbWVfZXBvY2ggKiAxMDAwKSxcbiAgICAgICAgICB0ZW1wRjogaC50ZW1wX2YsXG4gICAgICAgICAgY29uZGl0aW9uOiBoLmNvbmRpdGlvbixcbiAgICAgICAgICB3aW5kTXBoOiBoLndpbmRfbXBoLFxuICAgICAgICAgIHdpbmREaXI6IGgud2luZF9kaXIsXG4gICAgICAgICAgcHJlY2lwSW46IGgucHJlY2lwX2luLFxuICAgICAgICAgIGh1bWlkaXR5OiBoLmh1bWlkaXR5LFxuICAgICAgICAgIGZlZWxzTGlrZUY6IGguZmVlbHNsaWtlX2YsXG4gICAgICAgIH07XG4gICAgICAgIGhvdXJzLnB1c2goaG91cik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYXN0cm8gPSB7XG4gICAgICAgIHN1bnJpc2U6IGZvcmVjYXN0RGF5LmFzdHJvLnN1bnJpc2UsXG4gICAgICAgIHN1bnNldDogZm9yZWNhc3REYXkuYXN0cm8uc3Vuc2V0LFxuICAgICAgICBtb29ucmlzZTogZm9yZWNhc3REYXkuYXN0cm8ubW9vbnJpc2UsXG4gICAgICAgIG1vb25zZXQ6IGZvcmVjYXN0RGF5LmFzdHJvLm1vb25zZXQsXG4gICAgICAgIG1vb25QaGFzZTogZm9yZWNhc3REYXkuYXN0cm8ubW9vbl9waGFzZSxcbiAgICAgICAgbW9vbklsbHVtaW5hdGlvbjogZm9yZWNhc3REYXkuYXN0cm8ubW9vbl9pbGx1bWluYXRpb24sXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXkgPSB7XG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGZvcmVjYXN0RGF5LmRhdGVfZXBvY2ggKiAxMDAwKSxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIGFzdHJvLFxuICAgICAgICBtYXhUZW1wRjogZm9yZWNhc3REYXkuZGF5Lm1heHRlbXBfZixcbiAgICAgICAgbWluVGVtcEY6IGZvcmVjYXN0RGF5LmRheS5taW50ZW1wX2YsXG4gICAgICAgIGF2Z1RlbXBGOiBmb3JlY2FzdERheS5kYXkuYXZndGVtcF9mLFxuICAgICAgICBtYXhXaW5kTXBoOiBmb3JlY2FzdERheS5kYXkubWF4d2luZF9tcGgsXG4gICAgICAgIHRvdGFsUHJlY2lwSW46IGZvcmVjYXN0RGF5LmRheS50b3RhbHByZWNpcF9pbixcbiAgICAgICAgYXZnSHVtaWRpdHk6IGZvcmVjYXN0RGF5LmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgY29uZGl0aW9uOiBmb3JlY2FzdERheS5kYXkuY29uZGl0aW9uLFxuICAgICAgfTtcblxuICAgICAgZm9yZWNhc3QucHVzaChkYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JlY2FzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcmVjYXN0TWV0cmljKCkge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gW107XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZm9yZWNhc3REYXkpID0+IHtcbiAgICAgIGNvbnN0IGhvdXJzID0gW107XG4gICAgICBmb3JlY2FzdERheS5ob3VyLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgY29uc3QgaG91ciA9IHtcbiAgICAgICAgICB0aW1lOiBuZXcgRGF0ZShoLnRpbWVfZXBvY2ggKiAxMDAwKSxcbiAgICAgICAgICB0ZW1wQzogaC50ZW1wX2MsXG4gICAgICAgICAgY29uZGl0aW9uOiBoLmNvbmRpdGlvbixcbiAgICAgICAgICB3aW5kS3BoOiBoLndpbmRfa3BoLFxuICAgICAgICAgIHdpbmREaXI6IGgud2luZF9kaXIsXG4gICAgICAgICAgcHJlY2lwTW06IGgucHJlY2lwX21tLFxuICAgICAgICAgIGh1bWlkaXR5OiBoLmh1bWlkaXR5LFxuICAgICAgICAgIGZlZWxzTGlrZUM6IGguZmVlbHNsaWtlX2MsXG4gICAgICAgIH07XG4gICAgICAgIGhvdXJzLnB1c2goaG91cik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYXN0cm8gPSB7XG4gICAgICAgIHN1bnJpc2U6IGZvcmVjYXN0RGF5LmFzdHJvLnN1bnJpc2UsXG4gICAgICAgIHN1bnNldDogZm9yZWNhc3REYXkuYXN0cm8uc3Vuc2V0LFxuICAgICAgICBtb29ucmlzZTogZm9yZWNhc3REYXkuYXN0cm8ubW9vbnJpc2UsXG4gICAgICAgIG1vb25zZXQ6IGZvcmVjYXN0RGF5LmFzdHJvLm1vb25zZXQsXG4gICAgICAgIG1vb25QaGFzZTogZm9yZWNhc3REYXkuYXN0cm8ubW9vbl9waGFzZSxcbiAgICAgICAgbW9vbklsbHVtaW5hdGlvbjogZm9yZWNhc3REYXkuYXN0cm8ubW9vbl9pbGx1bWluYXRpb24sXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXkgPSB7XG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGZvcmVjYXN0RGF5LmRhdGVfZXBvY2ggKiAxMDAwKSxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIGFzdHJvLFxuICAgICAgICBtYXhUZW1wQzogZm9yZWNhc3REYXkuZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgbWluVGVtcEM6IGZvcmVjYXN0RGF5LmRheS5taW50ZW1wX2MsXG4gICAgICAgIGF2Z1RlbXBDOiBmb3JlY2FzdERheS5kYXkuYXZndGVtcF9jLFxuICAgICAgICBtYXhXaW5kS3BoOiBmb3JlY2FzdERheS5kYXkubWF4d2luZF9rcGgsXG4gICAgICAgIHRvdGFsUHJlY2lwTW06IGZvcmVjYXN0RGF5LmRheS50b3RhbHByZWNpcF9tbSxcbiAgICAgICAgYXZnSHVtaWRpdHk6IGZvcmVjYXN0RGF5LmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgY29uZGl0aW9uOiBmb3JlY2FzdERheS5kYXkuY29uZGl0aW9uLFxuICAgICAgfTtcblxuICAgICAgZm9yZWNhc3QucHVzaChkYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JlY2FzdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Q3VycmVudFdlYXRoZXJJbXBlcmlhbCxcbiAgICBnZXRDdXJyZW50V2VhdGhlck1ldHJpYyxcbiAgICBnZXRGb3JlY2FzdEltcGVyaWFsLFxuICAgIGdldEZvcmVjYXN0TWV0cmljLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wODEzZDNhNTE3NWI0NDUyOWZkMTgwNDA3MjMyMjAzJnE9JHtjaXR5fSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2BcbiAgKTtcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgLy8gY29uc29sZS5sb2cod2VhdGhlcik7XG4gIC8vIGNvbnNvbGUubG9nKHdlYXRoZXIuY3VycmVudCk7XG4gIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB3ZWF0aGVyKTtcbiAgcmV0dXJuIHdlYXRoZXI7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYScsICdTYW5zLVNlcmlmJztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2N1cnJlbnQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogN3JlbTtcXG4gIC8qIG1heC13aWR0aDogNTB2dzsgKi9cXG59XFxuXFxuI2N1cnJlbnQtcGljdHVyZSB7XFxuICB3aWR0aDogMTByZW07XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdjdXJyZW50VGV4dCBjdXJyZW50VGV4dCBwaWN0dXJlIHBpY3R1cmUnXFxuICAgICd0ZW1wIHRlbXAgcGljdHVyZSBwaWN0dXJlJ1xcbiAgICAnZmVlbHMgZmVlbHMgcGljdHVyZSBwaWN0dXJlJ1xcbiAgICAnaHVtSWNvbiBwcmVjSWNvbiB3aW5kSWNvbiBkaXJJY29uJ1xcbiAgICAnaHVtIHByZWMgd2luZCBkaXInXFxuICAgICdodW1WYWx1ZSBwcmVjVmFsdWUgd2luZFZhbHVlIGRpclZhbHVlJztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXJvdy1nYXA6IDAuNzVyZW07XFxuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XFxufVxcblxcbiNjdXJyZW50LXRleHQge1xcbiAgZ3JpZC1hcmVhOiBjdXJyZW50VGV4dDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4jY3VycmVudC10ZW1wIHtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBncmlkLWFyZWE6IHRlbXA7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNjdXJyZW50LWZlZWxzIHtcXG4gIGdyaWQtYXJlYTogZmVlbHM7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjdXJyZW50LXBpY3R1cmUge1xcbiAgZ3JpZC1hcmVhOiBwaWN0dXJlO1xcbn1cXG5cXG4jY3VycmVudC1odW1pZGl0eS1pY29uIHtcXG4gIGdyaWQtYXJlYTogaHVtSWNvbjtcXG59XFxuXFxuI2N1cnJlbnQtaHVtaWRpdHktdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBodW07XFxufVxcblxcbiNjdXJyZW50LWh1bWlkaXR5LXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogaHVtVmFsdWU7XFxufVxcblxcbiNjdXJyZW50LXByZWNpcGl0YXRpb24taWNvbiB7XFxuICBncmlkLWFyZWE6IHByZWNJY29uO1xcbn1cXG5cXG4jY3VycmVudC1wcmVjaXBpdGF0aW9uLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogcHJlYztcXG59XFxuXFxuI2N1cnJlbnQtcHJlY2lwaXRhdGlvbi12YWx1ZSB7XFxuICBncmlkLWFyZWE6IHByZWNWYWx1ZTtcXG59XFxuXFxuI2N1cnJlbnQtd2luZFNwZWVkLWljb24ge1xcbiAgZ3JpZC1hcmVhOiB3aW5kSWNvbjtcXG59XFxuXFxuI2N1cnJlbnQtd2luZFNwZWVkLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogd2luZDtcXG59XFxuXFxuI2N1cnJlbnQtd2luZFNwZWVkLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogd2luZFZhbHVlO1xcbn1cXG5cXG4jY3VycmVudC1odW1pZGl0eS10aXRsZSxcXG4jY3VycmVudC1wcmVjaXBpdGF0aW9uLXRpdGxlLFxcbiNjdXJyZW50LXdpbmRTcGVlZC10aXRsZSxcXG4jY3VycmVudC13aW5kRGlyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4jY3VycmVudC1kZXRhaWxzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4jY3VycmVudC13ZWVrZGF5IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2N1cnJlbnQtZGF0ZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2N1cnJlbnQtdGltZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2N1cnJlbnQtbG9jYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuI2ZvcmVjYXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVyZW07XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MHZ3O1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdkYXRlIGRhdGUgZGF0ZSBkYXRlJ1xcbiAgICAnYXZnIGF2ZyBwaWN0dXJlIHBpY3R1cmUnXFxuICAgICdtaW5NYXggbWluTWF4IGZvcmVjYXN0VGV4dCBmb3JlY2FzdFRleHQnXFxuICAgICdodW1JY29uIHByZWNJY29uIHdpbmRJY29uIGRpckljb24nXFxuICAgICdodW1WYWx1ZSBwcmVjVmFsdWUgd2luZFZhbHVlIGRpclZhbHVlJztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtcm93LWdhcDogMC4yNXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhdGUge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5mb3JlY2FzdC1hdmcge1xcbiAgZ3JpZC1hcmVhOiBhdmc7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi5mb3JlY2FzdC1waWN0dXJlIHtcXG4gIGdyaWQtYXJlYTogcGljdHVyZTtcXG59XFxuXFxuLmZvcmVjYXN0LW1pbk1heCB7XFxuICBncmlkLWFyZWE6IG1pbk1heDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mb3JlY2FzdC10ZXh0IHtcXG4gIGdyaWQtYXJlYTogZm9yZWNhc3RUZXh0O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvcmVjYXN0LWh1bWlkaXR5LWljb24ge1xcbiAgZ3JpZC1hcmVhOiBodW1JY29uO1xcbn1cXG5cXG4uZm9yZWNhc3QtaHVtaWRpdHktdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBodW1WYWx1ZTtcXG59XFxuXFxuLmZvcmVjYXN0LXByZWNpcGl0YXRpb24taWNvbiB7XFxuICBncmlkLWFyZWE6IHByZWNJY29uO1xcbn1cXG5cXG4uZm9yZWNhc3QtcHJlY2lwaXRhdGlvbi12YWx1ZSB7XFxuICBncmlkLWFyZWE6IHByZWNWYWx1ZTtcXG59XFxuXFxuLmZvcmVjYXN0LXdpbmRTcGVlZC1pY29uIHtcXG4gIGdyaWQtYXJlYTogd2luZEljb247XFxufVxcblxcbi5mb3JlY2FzdC13aW5kU3BlZWQtdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiB3aW5kVmFsdWU7XFxufVxcblxcbi5mb3JlY2FzdC13aW5kRGlyLWljb24ge1xcbiAgZ3JpZC1hcmVhOiBkaXJJY29uO1xcbn1cXG5cXG4uZm9yZWNhc3Qtd2luZERpci12YWx1ZSB7XFxuICBncmlkLWFyZWE6IGRpclZhbHVlO1xcbn1cXG5cXG4uZm9yZWNhc3QtaHVtaWRpdHktdmFsdWUsXFxuLmZvcmVjYXN0LXByZWNpcGl0YXRpb24tdmFsdWUsXFxuLmZvcmVjYXN0LXdpbmRTcGVlZC12YWx1ZSxcXG4uZm9yZWNhc3Qtd2luZERpci12YWx1ZSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQ0FBc0M7RUFDdEMsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZDQUE2QztFQUM3QywwQ0FBMEM7RUFDMUM7Ozs7OzsyQ0FNeUM7RUFDekMscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7OztFQUlFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMENBQTBDO0VBQzFDOzs7OzsyQ0FLeUM7RUFDekMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgJ1NhbnMtU2VyaWYnO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY3VycmVudCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA3cmVtO1xcbiAgLyogbWF4LXdpZHRoOiA1MHZ3OyAqL1xcbn1cXG5cXG4jY3VycmVudC1waWN0dXJlIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2N1cnJlbnRUZXh0IGN1cnJlbnRUZXh0IHBpY3R1cmUgcGljdHVyZSdcXG4gICAgJ3RlbXAgdGVtcCBwaWN0dXJlIHBpY3R1cmUnXFxuICAgICdmZWVscyBmZWVscyBwaWN0dXJlIHBpY3R1cmUnXFxuICAgICdodW1JY29uIHByZWNJY29uIHdpbmRJY29uIGRpckljb24nXFxuICAgICdodW0gcHJlYyB3aW5kIGRpcidcXG4gICAgJ2h1bVZhbHVlIHByZWNWYWx1ZSB3aW5kVmFsdWUgZGlyVmFsdWUnO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtcm93LWdhcDogMC43NXJlbTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG59XFxuXFxuI2N1cnJlbnQtdGV4dCB7XFxuICBncmlkLWFyZWE6IGN1cnJlbnRUZXh0O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbiNjdXJyZW50LXRlbXAge1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGdyaWQtYXJlYTogdGVtcDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuI2N1cnJlbnQtZmVlbHMge1xcbiAgZ3JpZC1hcmVhOiBmZWVscztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI2N1cnJlbnQtcGljdHVyZSB7XFxuICBncmlkLWFyZWE6IHBpY3R1cmU7XFxufVxcblxcbiNjdXJyZW50LWh1bWlkaXR5LWljb24ge1xcbiAgZ3JpZC1hcmVhOiBodW1JY29uO1xcbn1cXG5cXG4jY3VycmVudC1odW1pZGl0eS10aXRsZSB7XFxuICBncmlkLWFyZWE6IGh1bTtcXG59XFxuXFxuI2N1cnJlbnQtaHVtaWRpdHktdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBodW1WYWx1ZTtcXG59XFxuXFxuI2N1cnJlbnQtcHJlY2lwaXRhdGlvbi1pY29uIHtcXG4gIGdyaWQtYXJlYTogcHJlY0ljb247XFxufVxcblxcbiNjdXJyZW50LXByZWNpcGl0YXRpb24tdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBwcmVjO1xcbn1cXG5cXG4jY3VycmVudC1wcmVjaXBpdGF0aW9uLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogcHJlY1ZhbHVlO1xcbn1cXG5cXG4jY3VycmVudC13aW5kU3BlZWQtaWNvbiB7XFxuICBncmlkLWFyZWE6IHdpbmRJY29uO1xcbn1cXG5cXG4jY3VycmVudC13aW5kU3BlZWQtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB3aW5kO1xcbn1cXG5cXG4jY3VycmVudC13aW5kU3BlZWQtdmFsdWUge1xcbiAgZ3JpZC1hcmVhOiB3aW5kVmFsdWU7XFxufVxcblxcbiNjdXJyZW50LWh1bWlkaXR5LXRpdGxlLFxcbiNjdXJyZW50LXByZWNpcGl0YXRpb24tdGl0bGUsXFxuI2N1cnJlbnQtd2luZFNwZWVkLXRpdGxlLFxcbiNjdXJyZW50LXdpbmREaXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbiNjdXJyZW50LWRldGFpbHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbiNjdXJyZW50LXdlZWtkYXkge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jY3VycmVudC1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3VycmVudC10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3VycmVudC1sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4jZm9yZWNhc3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwdnc7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2RhdGUgZGF0ZSBkYXRlIGRhdGUnXFxuICAgICdhdmcgYXZnIHBpY3R1cmUgcGljdHVyZSdcXG4gICAgJ21pbk1heCBtaW5NYXggZm9yZWNhc3RUZXh0IGZvcmVjYXN0VGV4dCdcXG4gICAgJ2h1bUljb24gcHJlY0ljb24gd2luZEljb24gZGlySWNvbidcXG4gICAgJ2h1bVZhbHVlIHByZWNWYWx1ZSB3aW5kVmFsdWUgZGlyVmFsdWUnO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xcbiAgZ3JpZC1yb3ctZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF0ZSB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWF2ZyB7XFxuICBncmlkLWFyZWE6IGF2ZztcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LXBpY3R1cmUge1xcbiAgZ3JpZC1hcmVhOiBwaWN0dXJlO1xcbn1cXG5cXG4uZm9yZWNhc3QtbWluTWF4IHtcXG4gIGdyaWQtYXJlYTogbWluTWF4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvcmVjYXN0LXRleHQge1xcbiAgZ3JpZC1hcmVhOiBmb3JlY2FzdFRleHQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9yZWNhc3QtaHVtaWRpdHktaWNvbiB7XFxuICBncmlkLWFyZWE6IGh1bUljb247XFxufVxcblxcbi5mb3JlY2FzdC1odW1pZGl0eS12YWx1ZSB7XFxuICBncmlkLWFyZWE6IGh1bVZhbHVlO1xcbn1cXG5cXG4uZm9yZWNhc3QtcHJlY2lwaXRhdGlvbi1pY29uIHtcXG4gIGdyaWQtYXJlYTogcHJlY0ljb247XFxufVxcblxcbi5mb3JlY2FzdC1wcmVjaXBpdGF0aW9uLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogcHJlY1ZhbHVlO1xcbn1cXG5cXG4uZm9yZWNhc3Qtd2luZFNwZWVkLWljb24ge1xcbiAgZ3JpZC1hcmVhOiB3aW5kSWNvbjtcXG59XFxuXFxuLmZvcmVjYXN0LXdpbmRTcGVlZC12YWx1ZSB7XFxuICBncmlkLWFyZWE6IHdpbmRWYWx1ZTtcXG59XFxuXFxuLmZvcmVjYXN0LXdpbmREaXItaWNvbiB7XFxuICBncmlkLWFyZWE6IGRpckljb247XFxufVxcblxcbi5mb3JlY2FzdC13aW5kRGlyLXZhbHVlIHtcXG4gIGdyaWQtYXJlYTogZGlyVmFsdWU7XFxufVxcblxcbi5mb3JlY2FzdC1odW1pZGl0eS12YWx1ZSxcXG4uZm9yZWNhc3QtcHJlY2lwaXRhdGlvbi12YWx1ZSxcXG4uZm9yZWNhc3Qtd2luZFNwZWVkLXZhbHVlLFxcbi5mb3JlY2FzdC13aW5kRGlyLXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2V0QXBpRGF0YSBmcm9tICcuL2dldEFwaURhdGEnO1xuaW1wb3J0IEZvcm1hdERhdGEgZnJvbSAnLi9Gb3JtYXREYXRhJztcblxuLy8gY29uc3QgZGF0YSA9IGdldEFwaURhdGEoJ0J1Y2hhcmVzdCcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChkYXkpID0+IHtcbi8vICAgY29uc29sZS5sb2coZGF5KTtcbi8vIH0pO1xuLy8gICBjb25zdCBmb3JtYXREYXRhID0gRm9ybWF0RGF0YShyZXNwb25zZSk7XG4vLyAgIGNvbnN0IGN1cnJlbnQgPSBmb3JtYXREYXRhLmdldEN1cnJlbnRXZWF0aGVyTWV0cmljKCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuLy8gICBjb25zdCBmb3JlY2FzdCA9IGZvcm1hdERhdGEuZ2V0Rm9yZWNhc3RNZXRyaWMoKTtcbi8vICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xuLy8gfSk7XG4iXSwibmFtZXMiOlsiRm9ybWF0RGF0YSIsIndlYXRoZXJEYXRhIiwiZ2V0Q3VycmVudFdlYXRoZXJJbXBlcmlhbCIsImN1cnJlbnRXZWF0aGVyIiwiY3VycmVudCIsImNpdHkiLCJsb2NhdGlvbiIsIm5hbWUiLCJjb3VudHJ5IiwidGltZSIsIkRhdGUiLCJsb2NhbHRpbWVfZXBvY2giLCJjb25kaXRpb24iLCJ0ZW1wRiIsInRlbXBfZiIsImZlZWxzTGlrZUYiLCJmZWVsc2xpa2VfZiIsIndpbmRLcGgiLCJ3aW5kX2twaCIsIndpbmREaXIiLCJ3aW5kX2RpciIsImh1bWlkaXR5IiwicHJlY2lwTW0iLCJwcmVjaXBfbW0iLCJnZXRDdXJyZW50V2VhdGhlck1ldHJpYyIsInRlbXBDIiwidGVtcF9jIiwiZmVlbHNMaWtlQyIsImZlZWxzbGlrZV9jIiwiZ2V0Rm9yZWNhc3RJbXBlcmlhbCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJmb3JFYWNoIiwiZm9yZWNhc3REYXkiLCJob3VycyIsImhvdXIiLCJoIiwidGltZV9lcG9jaCIsIndpbmRNcGgiLCJ3aW5kX21waCIsInByZWNpcEluIiwicHJlY2lwX2luIiwicHVzaCIsImFzdHJvIiwic3VucmlzZSIsInN1bnNldCIsIm1vb25yaXNlIiwibW9vbnNldCIsIm1vb25QaGFzZSIsIm1vb25fcGhhc2UiLCJtb29uSWxsdW1pbmF0aW9uIiwibW9vbl9pbGx1bWluYXRpb24iLCJkYXkiLCJkYXRlIiwiZGF0ZV9lcG9jaCIsIm1heFRlbXBGIiwibWF4dGVtcF9mIiwibWluVGVtcEYiLCJtaW50ZW1wX2YiLCJhdmdUZW1wRiIsImF2Z3RlbXBfZiIsIm1heFdpbmRNcGgiLCJtYXh3aW5kX21waCIsInRvdGFsUHJlY2lwSW4iLCJ0b3RhbHByZWNpcF9pbiIsImF2Z0h1bWlkaXR5IiwiYXZnaHVtaWRpdHkiLCJnZXRGb3JlY2FzdE1ldHJpYyIsIm1heFRlbXBDIiwibWF4dGVtcF9jIiwibWluVGVtcEMiLCJtaW50ZW1wX2MiLCJhdmdUZW1wQyIsImF2Z3RlbXBfYyIsIm1heFdpbmRLcGgiLCJtYXh3aW5kX2twaCIsInRvdGFsUHJlY2lwTW0iLCJ0b3RhbHByZWNpcF9tbSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwicmV0dXJuIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZ2V0RGF0YSIsIl94IiwiX2dldERhdGEiLCJfY2FsbGVlIiwiZGF0YSIsIndlYXRoZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJqc29uIiwiZ2V0QXBpRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=