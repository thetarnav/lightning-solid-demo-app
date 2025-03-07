;
(function () {
  var _excluded = ["defaultTone"],
    _excluded2 = ["defaultTone"],
    _excluded3 = ["defaultTone"],
    _excluded4 = ["surfaceDefaultTone"],
    _excluded5 = ["defaultTone"],
    _excluded6 = ["defaultTone"],
    _excluded7 = ["defaultTone"],
    _excluded8 = ["defaultTone"],
    _excluded9 = ["defaultTone"],
    _excluded10 = ["defaultTone"],
    _excluded11 = ["defaultTone"],
    _excluded12 = ["defaultTone"],
    _excluded13 = ["defaultTone"],
    _excluded14 = ["defaultTone"],
    _excluded15 = ["defaultTone"],
    _excluded16 = ["defaultTone"];
  function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
  function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n3 = 0, F = function F() {}; return { s: F, n: function n() { return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        var _resolvedGlobal$docum;
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "html,\nbody,\n* {\n  padding: 0;\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n  overflow: hidden;\n}\nvideo {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  outline: none;\n}\n.center-element {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports({
          B: Block,
          D: Dynamic,
          F: For,
          G: Button,
          H: TileRow,
          I: Index,
          K: convertItemsToTiles,
          L: LazyUp,
          N: getImageUrl,
          P: Poster,
          S: Show,
          a: createResource,
          b: createComputed,
          c: createSignal,
          d: batch,
          e: createSelector,
          f: createEffect,
          g: onMount,
          i: createMemo,
          j: onCleanup,
          k: createRoot,
          o: on,
          u: untrack,
          v: assertTruthy,
          w: hexColor,
          y: combineStyles,
          z: children
        });
        false && function polyfill() {
          var relList = document.createElement("link").relList;
          if (relList && relList.supports && relList.supports("modulepreload")) {
            return;
          }
          var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var link = _step.value;
              processPreload(link);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          new MutationObserver(mutations => {
            var _iterator2 = _createForOfIteratorHelper(mutations),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var mutation = _step2.value;
                if (mutation.type !== "childList") {
                  continue;
                }
                var _iterator3 = _createForOfIteratorHelper(mutation.addedNodes),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var node = _step3.value;
                    if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }).observe(document, {
            childList: true,
            subtree: true
          });
          function getFetchOpts(link) {
            var fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";else fetchOpts.credentials = "same-origin";
            return fetchOpts;
          }
          function processPreload(link) {
            if (link.ep) return;
            link.ep = true;
            var fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
          }
        }();
        var scriptRel = 'modulepreload';
        var assetsURL = function assetsURL(dep) {
          return "/lightning-solid-demo-app/" + dep;
        };
        var seen = {};
        var __vitePreload = function preload(baseModule, deps, importerUrl) {
          var promise = Promise.resolve();
          if (false && deps && deps.length > 0) {
            document.getElementsByTagName("link");
            var cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
            var cspNonce = (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.getAttribute("nonce"));
            promise = Promise.allSettled(deps.map(dep => {
              dep = assetsURL(dep);
              if (dep in seen) return;
              seen[dep] = true;
              var isCss = dep.endsWith(".css");
              var cssSelector = isCss ? '[rel="stylesheet"]' : "";
              if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
                return;
              }
              var link = document.createElement("link");
              link.rel = isCss ? "stylesheet" : scriptRel;
              if (!isCss) {
                link.as = "script";
              }
              link.crossOrigin = "";
              link.href = dep;
              if (cspNonce) {
                link.setAttribute("nonce", cspNonce);
              }
              document.head.appendChild(link);
              if (isCss) {
                return new Promise((res, rej) => {
                  link.addEventListener("load", res);
                  link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
                });
              }
            }));
          }
          function handlePreloadError(err) {
            var e = new Event("vite:preloadError", {
              cancelable: true
            });
            e.payload = err;
            window.dispatchEvent(e);
            if (!e.defaultPrevented) {
              throw err;
            }
          }
          return promise.then(res => {
            var _iterator4 = _createForOfIteratorHelper(res || []),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;
                if (item.status !== "rejected") continue;
                handlePreloadError(item.reason);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            return baseModule().catch(handlePreloadError);
          });
        };
        ({
          "BASE_URL": "/lightning-solid-demo-app/",
          "DEV": false,
          "LEGACY": true,
          "MODE": "production",
          "PROD": true,
          "SSR": false
        });
        function createWebGLContext(canvas) {
          var forceWebGL2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var contextSpy = arguments.length > 2 ? arguments[2] : undefined;
          var config = {
            alpha: true,
            antialias: false,
            depth: false,
            stencil: true,
            desynchronized: false,
            // Disabled because it prevents Visual Regression Tests from working
            // failIfMajorPerformanceCaveat: true,
            powerPreference: "high-performance",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false
          };
          var gl =
          // TODO: Remove this assertion once this issue is fixed in TypeScript
          // https://github.com/microsoft/TypeScript/issues/53614
          canvas.getContext(forceWebGL2 ? "webgl2" : "webgl", config) || canvas.getContext("experimental-webgl", config);
          if (!gl) {
            throw new Error("Unable to create WebGL context");
          }
          if (contextSpy) {
            return new Proxy(gl, {
              get(target, prop) {
                var value = target[prop];
                if (typeof value === "function") {
                  contextSpy.increment(String(prop));
                  return value.bind(target);
                }
                return value;
              }
            });
          }
          return gl;
        }
        function assertTruthy(condition, message) {
          return;
        }
        function mergeColorProgress(rgba1, rgba2, p) {
          var r1 = Math.trunc(rgba1 >>> 24);
          var g1 = Math.trunc(rgba1 >>> 16 & 255);
          var b1 = Math.trunc(rgba1 >>> 8 & 255);
          var a1 = Math.trunc(rgba1 & 255);
          var r2 = Math.trunc(rgba2 >>> 24);
          var g2 = Math.trunc(rgba2 >>> 16 & 255);
          var b2 = Math.trunc(rgba2 >>> 8 & 255);
          var a2 = Math.trunc(rgba2 & 255);
          var r = Math.round(r2 * p + r1 * (1 - p));
          var g = Math.round(g2 * p + g1 * (1 - p));
          var b = Math.round(b2 * p + b1 * (1 - p));
          var a = Math.round(a2 * p + a1 * (1 - p));
          return (r << 24 | g << 16 | b << 8 | a) >>> 0;
        }
        function mergeColorAlpha(rgba, alpha) {
          var r = rgba >>> 24;
          var g = rgba >>> 16 & 255;
          var b = rgba >>> 8 & 255;
          var a = Math.trunc((rgba & 255) * alpha);
          return (r << 24 | g << 16 | b << 8 | a) >>> 0;
        }
        var premultiplyRGB = true;
        function setPremultiplyMode(mode) {
          premultiplyRGB = mode === "webgl";
        }
        function mergeColorAlphaPremultiplied(rgba, alpha) {
          var flipEndianess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var newAlpha = (rgba & 255) / 255 * alpha;
          var rgbAlpha = premultiplyRGB ? newAlpha : 1;
          var r = Math.trunc((rgba >>> 24) * rgbAlpha);
          var g = Math.trunc((rgba >>> 16 & 255) * rgbAlpha);
          var b = Math.trunc((rgba >>> 8 & 255) * rgbAlpha);
          var a = Math.trunc(newAlpha * 255);
          if (flipEndianess) {
            return (a << 24 | b << 16 | g << 8 | r) >>> 0;
          }
          return (r << 24 | g << 16 | b << 8 | a) >>> 0;
        }
        function isProductionEnvironment() {
          return true;
        }
        var nextId = 1;
        function getNewId() {
          return nextId++;
        }
        function deepClone(obj) {
          if (_typeof(obj) !== "object") {
            return obj;
          }
          if (Array.isArray(obj)) {
            return obj.map(item => deepClone(item));
          }
          var copy = {};
          for (var _key2 in obj) {
            copy[_key2] = deepClone(obj[_key2]);
          }
          return copy;
        }
        class EventEmitter {
          constructor() {
            _defineProperty(this, "eventListeners", {});
          }
          on(event, listener) {
            var listeners = this.eventListeners[event];
            if (!listeners) {
              listeners = [];
            }
            listeners.push(listener);
            this.eventListeners[event] = listeners;
          }
          off(event, listener) {
            var listeners = this.eventListeners[event];
            if (!listeners) {
              return;
            }
            if (!listener) {
              delete this.eventListeners[event];
              return;
            }
            var index = listeners.indexOf(listener);
            if (index >= 0) {
              listeners.splice(index, 1);
            }
          }
          once(event, listener) {
            var onceListener = (target, data) => {
              this.off(event, onceListener);
              listener(target, data);
            };
            this.on(event, onceListener);
          }
          emit(event, data) {
            var listeners = this.eventListeners[event];
            if (!listeners) {
              return;
            }
            [...listeners].forEach(listener => {
              listener(this, data);
            });
          }
          removeAllListeners() {
            this.eventListeners = {};
          }
        }
        var TextureType = /* @__PURE__ */(TextureType2 => {
          TextureType2[TextureType2["generic"] = 0] = "generic";
          TextureType2[TextureType2["color"] = 1] = "color";
          TextureType2[TextureType2["image"] = 2] = "image";
          TextureType2[TextureType2["noise"] = 3] = "noise";
          TextureType2[TextureType2["renderToTexture"] = 4] = "renderToTexture";
          TextureType2[TextureType2["subTexture"] = 5] = "subTexture";
          return TextureType2;
        })(TextureType || {});
        class Texture extends EventEmitter {
          constructor(txManager) {
            super();
            /**
             * The dimensions of the texture
             *
             * @remarks
             * Until the texture data is loaded for the first time the value will be
             * `null`.
             */
            _defineProperty(this, "dimensions", null);
            _defineProperty(this, "error", null);
            // aggregate state
            _defineProperty(this, "state", "initial");
            _defineProperty(this, "renderableOwners", /* @__PURE__ */new Set());
            _defineProperty(this, "renderable", false);
            _defineProperty(this, "type", 0 /* generic */);
            _defineProperty(this, "preventCleanup", false);
            _defineProperty(this, "ctxTexture", void 0);
            _defineProperty(this, "textureData", null);
            this.txManager = txManager;
          }
          /**
           * Add/remove an owner to/from the Texture based on its renderability.
           *
           * @remarks
           * Any object can own a texture, be it a CoreNode or even the state object
           * from a Text Renderer.
           *
           * When the reference to the texture that an owner object holds is replaced
           * or cleared it must call this with `renderable=false` to release the owner
           * association.
           *
           * @param owner
           * @param renderable
           */
          setRenderableOwner(owner, renderable) {
            var oldSize = this.renderableOwners.size;
            if (renderable === true) {
              if (this.renderableOwners.has(owner) === false) {
                this.renderableOwners.add(owner);
              }
              var newSize = this.renderableOwners.size;
              if (newSize > oldSize && newSize === 1) {
                var _this$onChangeIsRende;
                this.renderable = true;
                (_this$onChangeIsRende = this.onChangeIsRenderable) === null || _this$onChangeIsRende === void 0 || _this$onChangeIsRende.call(this, true);
                this.load();
              }
            } else {
              this.renderableOwners.delete(owner);
              var _newSize = this.renderableOwners.size;
              if (_newSize < oldSize && _newSize === 0) {
                var _this$onChangeIsRende2;
                this.renderable = false;
                (_this$onChangeIsRende2 = this.onChangeIsRenderable) === null || _this$onChangeIsRende2 === void 0 || _this$onChangeIsRende2.call(this, false);
                this.txManager.orphanTexture(this);
              }
            }
          }
          load() {
            this.txManager.loadTexture(this);
          }
          /**
           * Load the core context texture for this Texture.
           * The ctxTexture is created by the renderer and lives on the GPU.
           *
           * @returns
           */
          loadCtxTexture() {
            if (this.ctxTexture === undefined) {
              this.ctxTexture = this.txManager.renderer.createCtxTexture(this);
            }
            return this.ctxTexture;
          }
          /**
           * Free the core context texture for this Texture.
           *
           * @remarks
           * The ctxTexture is created by the renderer and lives on the GPU.
           */
          free() {
            var _this$ctxTexture;
            (_this$ctxTexture = this.ctxTexture) === null || _this$ctxTexture === void 0 || _this$ctxTexture.free();
          }
          /**
           * Free the source texture data for this Texture.
           *
           * @remarks
           * The texture data is the source data that is used to populate the CoreContextTexture.
           * e.g. ImageData that is downloaded from a URL.
           */
          freeTextureData() {
            this.textureData = null;
          }
          setState(state, errorOrDimensions) {
            if (this.state === state) {
              return;
            }
            var payload = null;
            if (state === "loaded") {
              this.dimensions = errorOrDimensions;
              payload = this.dimensions;
            } else if (state === "failed") {
              this.error = errorOrDimensions;
              payload = this.error;
            }
            this.state = state;
            this.emit(state, payload);
          }
          /**
           * Get the texture data for this texture.
           *
           * @remarks
           * This method is called by the CoreContextTexture when the texture is loaded.
           * The texture data is then used to populate the CoreContextTexture.
           *
           * @returns
           * The texture data for this texture.
           */
          getTextureData() {
            var _this = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(_this.textureData === null)) {
                      _context.next = 4;
                      break;
                    }
                    _context.next = 3;
                    return _this.getTextureSource();
                  case 3:
                    _this.textureData = _context.sent;
                  case 4:
                    return _context.abrupt("return", _this.textureData);
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          }
          /**
           * Make a cache key for this texture.
           *
           * @remarks
           * Each concrete `Texture` subclass must implement this method to provide an
           * appropriate cache key for the texture type including the texture's
           * properties that uniquely identify a copy of the texture. If the texture
           * type does not support caching, then this method should return `false`.
           *
           * @param props
           * @returns
           * A cache key for this texture or `false` if the texture type does not
           * support caching.
           */
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          static makeCacheKey(props) {
            return false;
          }
          /**
           * Resolve the default values for the texture's properties.
           *
           * @remarks
           * Each concrete `Texture` subclass must implement this method to provide
           * default values for the texture's optional properties.
           *
           * @param props
           * @returns
           * The default values for the texture's properties.
           */
          static resolveDefaults(props) {
            return {};
          }
        }
        var PROTOCOL_REGEX = /^(data|ftps?|https?):/;
        var getNormalizedRgbaComponents = rgba => {
          var r = rgba >>> 24;
          var g = rgba >>> 16 & 255;
          var b = rgba >>> 8 & 255;
          var a = rgba & 255;
          return [r / 255, g / 255, b / 255, a / 255];
        };
        function getNormalizedAlphaComponent(rgba) {
          return (rgba & 255) / 255;
        }
        function getRgbaString(color) {
          var r = Math.floor(color[0] * 255);
          var g = Math.floor(color[1] * 255);
          var b = Math.floor(color[2] * 255);
          var a = Math.floor(color[3] * 255);
          return `rgba(${r},${g},${b},${a.toFixed(4)})`;
        }
        function createBound(x1, y1, x2, y2, out) {
          if (out) {
            out.x1 = x1;
            out.y1 = y1;
            out.x2 = x2;
            out.y2 = y2;
            return out;
          }
          return {
            x1,
            y1,
            x2,
            y2
          };
        }
        function boundsOverlap(a, b) {
          return a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
        }
        function convertBoundToRect(bound, out) {
          {
            out.x = bound.x1;
            out.y = bound.y1;
            out.width = bound.x2 - bound.x1;
            out.height = bound.y2 - bound.y1;
            return out;
          }
        }
        function intersectRect(a, b, out) {
          var x = Math.max(a.x, b.x);
          var y = Math.max(a.y, b.y);
          var width = Math.min(a.x + a.width, b.x + b.width) - x;
          var height = Math.min(a.y + a.height, b.y + b.height) - y;
          if (width > 0 && height > 0) {
            if (out) {
              out.x = x;
              out.y = y;
              out.width = width;
              out.height = height;
              return out;
            }
            return {
              x,
              y,
              width,
              height
            };
          }
          if (out) {
            out.x = 0;
            out.y = 0;
            out.width = 0;
            out.height = 0;
            return out;
          }
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
        function copyRect(a, out) {
          if (out) {
            out.x = a.x;
            out.y = a.y;
            out.width = a.width;
            out.height = a.height;
            return out;
          }
          return {
            x: a.x,
            y: a.y,
            width: a.width,
            height: a.height
          };
        }
        function compareRect(a, b) {
          if (a === b) {
            return true;
          }
          if (a === null || b === null) {
            return false;
          }
          return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
        }
        function boundInsideBound(bound1, bound2) {
          return bound1.x1 <= bound2.x2 && bound1.y1 <= bound2.y2 && bound1.x2 >= bound2.x1 && bound1.y2 >= bound2.y1;
        }
        function boundLargeThanBound(bound1, bound2) {
          return bound1.x1 < bound2.x1 && bound1.x2 > bound2.x2 && bound1.y1 < bound2.y1 && bound1.y2 > bound2.y2;
        }
        function isBoundPositive(bound) {
          return bound.x1 < bound.x2 && bound.y1 < bound.y2;
        }
        function createPreloadBounds(strictBound, boundsMargin) {
          return createBound(strictBound.x1 - boundsMargin[3], strictBound.y1 - boundsMargin[0], strictBound.x2 + boundsMargin[1], strictBound.y2 + boundsMargin[2]);
        }
        function convertUrlToAbsolute(url) {
          if (self.location.protocol === "file:" && !PROTOCOL_REGEX.test(url)) {
            var path = self.location.pathname.split("/");
            path.pop();
            var _basePath = path.join("/");
            var baseUrl = self.location.protocol + "//" + _basePath;
            if (url.charAt(0) === ".") {
              url = url.slice(1);
            }
            if (url.charAt(0) === "/") {
              url = url.slice(1);
            }
            return baseUrl + "/" + url;
          }
          var absoluteUrl = new URL(url, self.location.href);
          return absoluteUrl.href;
        }
        function isBase64Image(src) {
          return src.startsWith("data:") === true;
        }
        class Matrix3d {
          /**
           * Creates a new 3x3 matrix.
           *
           * @param entries Row-major 3x3 matrix
           */
          constructor() {
            _defineProperty(this, "ta", void 0);
            _defineProperty(this, "tb", void 0);
            _defineProperty(this, "tx", void 0);
            _defineProperty(this, "tc", void 0);
            _defineProperty(this, "td", void 0);
            _defineProperty(this, "ty", void 0);
            _defineProperty(this, "_floatArr", null);
            /**
             * Potential Mutation Flag
             *
             * @remarks
             * This flag is set to true whenever the matrix is potentially modified.
             * We don't waste CPU trying to identify if each operation actually modifies
             * the matrix. Instead, we set this flag to true whenever we think the matrix
             * is modified. This signals that the `floatArr` should to be updated.
             */
            _defineProperty(this, "mutation", void 0);
            this.ta = 0;
            this.tb = 0;
            this.tx = 0;
            this.tc = 0;
            this.td = 0;
            this.ty = 0;
            this.mutation = true;
          }
          /**
           * Returns a temporary matrix that can be used for calculations.
           *
           * @remarks
           * This is useful for avoiding allocations in tight loops.
           *
           * The matrix is not guaranteed to be the same between calls.
           *
           * @returns
           */
          static get temp() {
            return tempMatrix;
          }
          static multiply(a, b, out) {
            var e0 = a.ta * b.ta + a.tb * b.tc;
            var e1 = a.ta * b.tb + a.tb * b.td;
            var e2 = a.ta * b.tx + a.tb * b.ty + a.tx;
            var e3 = a.tc * b.ta + a.td * b.tc;
            var e4 = a.tc * b.tb + a.td * b.td;
            var e5 = a.tc * b.tx + a.td * b.ty + a.ty;
            if (!out) {
              out = new Matrix3d();
            }
            out.ta = e0;
            out.tb = e1;
            out.tx = e2;
            out.tc = e3;
            out.td = e4;
            out.ty = e5;
            out.mutation = true;
            return out;
          }
          static identity(out) {
            if (!out) {
              out = new Matrix3d();
            }
            out.ta = 1;
            out.tb = 0;
            out.tx = 0;
            out.tc = 0;
            out.td = 1;
            out.ty = 0;
            out.mutation = true;
            return out;
          }
          static translate(x, y, out) {
            if (!out) {
              out = new Matrix3d();
            }
            out.ta = 1;
            out.tb = 0;
            out.tx = x;
            out.tc = 0;
            out.td = 1;
            out.ty = y;
            out.mutation = true;
            return out;
          }
          static scale(sx, sy, out) {
            if (!out) {
              out = new Matrix3d();
            }
            out.ta = sx;
            out.tb = 0;
            out.tx = 0;
            out.tc = 0;
            out.td = sy;
            out.ty = 0;
            out.mutation = true;
            return out;
          }
          static rotate(angle, out) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            if (!out) {
              out = new Matrix3d();
            }
            out.ta = cos;
            out.tb = -sin;
            out.tx = 0;
            out.tc = sin;
            out.td = cos;
            out.ty = 0;
            out.mutation = true;
            return out;
          }
          static copy(src, dst) {
            if (!dst) {
              dst = new Matrix3d();
            }
            dst.ta = src.ta;
            dst.tc = src.tc;
            dst.tb = src.tb;
            dst.td = src.td;
            dst.tx = src.tx;
            dst.ty = src.ty;
            dst.mutation = true;
            return dst;
          }
          translate(x, y) {
            this.tx = this.ta * x + this.tb * y + this.tx;
            this.ty = this.tc * x + this.td * y + this.ty;
            this.mutation = true;
            return this;
          }
          scale(sx, sy) {
            this.ta = this.ta * sx;
            this.tb = this.tb * sy;
            this.tc = this.tc * sx;
            this.td = this.td * sy;
            this.mutation = true;
            return this;
          }
          rotate(angle) {
            if (angle === 0 || !(angle % Math.PI * 2)) {
              return this;
            }
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var e0 = this.ta * cos + this.tb * sin;
            var e1 = this.tb * cos - this.ta * sin;
            var e3 = this.tc * cos + this.td * sin;
            var e4 = this.td * cos - this.tc * sin;
            this.ta = e0;
            this.tb = e1;
            this.tc = e3;
            this.td = e4;
            this.mutation = true;
            return this;
          }
          multiply(other) {
            return Matrix3d.multiply(this, other, this);
          }
          /**
           * Returns the matrix as a Float32Array in column-major order.
           *
           * @remarks
           * This method is optimized to avoid unnecessary allocations. The same array
           * is returned every time this method is called, and is updated in place.
           *
           * WARNING: Use the array only for passing directly to a WebGL shader uniform
           * during a frame render. Do not modify or hold onto the array for longer than
           * a frame.
           */
          getFloatArr() {
            if (!this._floatArr) {
              this._floatArr = new Float32Array(9);
            }
            if (this.mutation) {
              this._floatArr[0] = this.ta;
              this._floatArr[1] = this.tc;
              this._floatArr[2] = 0;
              this._floatArr[3] = this.tb;
              this._floatArr[4] = this.td;
              this._floatArr[5] = 0;
              this._floatArr[6] = this.tx;
              this._floatArr[7] = this.ty;
              this._floatArr[8] = 1;
              this.mutation = false;
            }
            return this._floatArr;
          }
        }
        var tempMatrix = new Matrix3d();
        var rx1 = 0;
        var rx2 = 2;
        var rx3 = 4;
        var rx4 = 6;
        var ry1 = 1;
        var ry2 = 3;
        var ry3 = 5;
        var ry4 = 7;
        class RenderCoords {
          constructor(entries) {
            _defineProperty(this, "data", void 0);
            this.data = new Float32Array(8);
            if (entries) {
              this.data[rx1] = entries[rx1];
              this.data[rx2] = entries[rx2];
              this.data[rx3] = entries[rx3];
              this.data[rx4] = entries[rx4];
              this.data[ry1] = entries[ry1];
              this.data[ry2] = entries[ry2];
              this.data[ry3] = entries[ry3];
              this.data[ry4] = entries[ry4];
            }
          }
          static translate(x1, y1, x2, y2, x3, y3, x4, y4, out) {
            if (!out) {
              out = new RenderCoords();
            }
            out.data[rx1] = x1;
            out.data[rx2] = x2;
            out.data[rx3] = x3;
            out.data[rx4] = x4;
            out.data[ry1] = y1;
            out.data[ry2] = y2;
            out.data[ry3] = y3;
            out.data[ry4] = y4;
            return out;
          }
          get x1() {
            return this.data[rx1];
          }
          get x2() {
            return this.data[rx2];
          }
          get x3() {
            return this.data[rx3];
          }
          get x4() {
            return this.data[rx4];
          }
          get y1() {
            return this.data[ry1];
          }
          get y2() {
            return this.data[ry2];
          }
          get y3() {
            return this.data[ry3];
          }
          get y4() {
            return this.data[ry4];
          }
        }
        var getTimingBezier = (a, b, c, d) => {
          var xc = 3 * a;
          var xb = 3 * (c - a) - xc;
          var xa = 1 - xc - xb;
          var yc = 3 * b;
          var yb = 3 * (d - b) - yc;
          var ya = 1 - yc - yb;
          return function (time) {
            if (time >= 1) {
              return 1;
            }
            if (time <= 0) {
              return 0;
            }
            var t = 0.5,
              cbx,
              cbxd,
              dx;
            for (var it = 0; it < 20; it++) {
              cbx = t * (t * (t * xa + xb) + xc);
              dx = time - cbx;
              if (dx > -1e-8 && dx < 1e-8) {
                return t * (t * (t * ya + yb) + yc);
              }
              cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
              if (cbxd > 1e-10 && cbxd < 1e-10) {
                break;
              }
              t += dx / cbxd;
            }
            var minT = 0;
            var maxT = 1;
            for (var _it = 0; _it < 20; _it++) {
              t = 0.5 * (minT + maxT);
              cbx = t * (t * (t * xa + xb) + xc);
              dx = time - cbx;
              if (dx > -1e-8 && dx < 1e-8) {
                return t * (t * (t * ya + yb) + yc);
              }
              if (dx < 0) {
                maxT = t;
              } else {
                minT = t;
              }
            }
          };
        };
        var timingMapping = {};
        var timingLookup = {
          ease: [0.25, 0.1, 0.25, 1],
          "ease-in": [0.42, 0, 1, 1],
          "ease-out": [0, 0, 0.58, 1],
          "ease-in-out": [0.42, 0, 0.58, 1],
          "ease-in-sine": [0.12, 0, 0.39, 0],
          "ease-out-sine": [0.12, 0, 0.39, 0],
          "ease-in-out-sine": [0.37, 0, 0.63, 1],
          "ease-in-cubic": [0.32, 0, 0.67, 0],
          "ease-out-cubic": [0.33, 1, 0.68, 1],
          "ease-in-out-cubic": [0.65, 0, 0.35, 1],
          "ease-in-circ": [0.55, 0, 1, 0.45],
          "ease-out-circ": [0, 0.55, 0.45, 1],
          "ease-in-out-circ": [0.85, 0, 0.15, 1],
          "ease-in-back": [0.36, 0, 0.66, -0.56],
          "ease-out-back": [0.34, 1.56, 0.64, 1],
          "ease-in-out-back": [0.68, -0.6, 0.32, 1.6]
        };
        var defaultTiming = t => t;
        var parseCubicBezier = str => {
          var regex = /-?\d*\.?\d+/g;
          var match = str.match(regex);
          if (match) {
            var _match = _slicedToArray(match, 4),
              num1 = _match[0],
              num2 = _match[1],
              num3 = _match[2],
              num4 = _match[3];
            var a = parseFloat(num1 || "0.42");
            var b = parseFloat(num2 || "0");
            var c = parseFloat(num3 || "1");
            var d = parseFloat(num4 || "1");
            var timing = getTimingBezier(a, b, c, d);
            timingMapping[str] = timing;
            return timing;
          }
          console.warn("Unknown cubic-bezier timing: " + str);
          return defaultTiming;
        };
        var getTimingFunction = str => {
          if (str === "linear") {
            return defaultTiming;
          }
          if (timingMapping[str] !== undefined) {
            return timingMapping[str] || defaultTiming;
          }
          if (str === "step-start") {
            return () => {
              return 1;
            };
          }
          if (str === "step-end") {
            return time => {
              return time === 1 ? 1 : 0;
            };
          }
          var lookup = timingLookup[str];
          if (lookup !== undefined) {
            var _lookup = _slicedToArray(lookup, 4),
              a = _lookup[0],
              b = _lookup[1],
              c = _lookup[2],
              d = _lookup[3];
            var timing = getTimingBezier(a, b, c, d);
            timingMapping[str] = timing;
            return timing;
          }
          if (str.startsWith("cubic-bezier")) {
            return parseCubicBezier(str);
          }
          console.warn("Unknown timing function: " + str);
          return defaultTiming;
        };
        function bytesToMb$1(bytes) {
          return (bytes / 1024 / 1024).toFixed(2);
        }
        class CoreAnimation extends EventEmitter {
          constructor(node, props, settings) {
            var _settings$delay, _settings$duration, _settings$loop, _settings$repeat, _settings$repeatDelay, _settings$stopMethod;
            super();
            _defineProperty(this, "settings", void 0);
            _defineProperty(this, "progress", 0);
            _defineProperty(this, "delayFor", 0);
            _defineProperty(this, "delay", 0);
            _defineProperty(this, "timingFunction", void 0);
            _defineProperty(this, "propValuesMap", {});
            this.node = node;
            this.props = props;
            for (var _key3 in props) {
              if (_key3 !== "shaderProps") {
                if (this.propValuesMap["props"] === undefined) {
                  this.propValuesMap["props"] = {};
                }
                this.propValuesMap["props"][_key3] = {
                  start: node[_key3] || 0,
                  target: props[_key3]
                };
              } else if (_key3 === "shaderProps" && node.shader !== null) {
                this.propValuesMap["shaderProps"] = {};
                for (var key2 in props.shaderProps) {
                  var start = node.shader.props[key2];
                  if (Array.isArray(start) === true) {
                    start = start[0];
                  }
                  this.propValuesMap["shaderProps"][key2] = {
                    start,
                    target: props.shaderProps[key2]
                  };
                }
              }
            }
            var easing = settings.easing || "linear";
            var delay = (_settings$delay = settings.delay) !== null && _settings$delay !== void 0 ? _settings$delay : 0;
            this.settings = {
              duration: (_settings$duration = settings.duration) !== null && _settings$duration !== void 0 ? _settings$duration : 0,
              delay,
              easing,
              loop: (_settings$loop = settings.loop) !== null && _settings$loop !== void 0 ? _settings$loop : false,
              repeat: (_settings$repeat = settings.repeat) !== null && _settings$repeat !== void 0 ? _settings$repeat : 0,
              repeatDelay: (_settings$repeatDelay = settings.repeatDelay) !== null && _settings$repeatDelay !== void 0 ? _settings$repeatDelay : 0,
              stopMethod: (_settings$stopMethod = settings.stopMethod) !== null && _settings$stopMethod !== void 0 ? _settings$stopMethod : false
            };
            this.timingFunction = getTimingFunction(easing);
            this.delayFor = delay;
            this.delay = delay;
          }
          reset() {
            this.progress = 0;
            this.delayFor = this.settings.delay || 0;
            this.update(0);
          }
          restoreValues(target, valueMap) {
            var entries = Object.entries(valueMap);
            var eLength = entries.length;
            for (var i = 0; i < eLength; i++) {
              var _entries$i = _slicedToArray(entries[i], 2),
                _key4 = _entries$i[0],
                value = _entries$i[1];
              target[_key4] = value.start;
            }
          }
          restore() {
            this.reset();
            if (this.propValuesMap["props"] !== undefined) {
              this.restoreValues(this.node, this.propValuesMap["props"]);
            }
            if (this.propValuesMap["shaderProps"] !== undefined) {
              this.restoreValues(this.node.shader.props, this.propValuesMap["shaderProps"]);
            }
          }
          reverseValues(valueMap) {
            var entries = Object.entries(valueMap);
            var eLength = entries.length;
            for (var i = 0; i < eLength; i++) {
              var _entries$i2 = _slicedToArray(entries[i], 2),
                _key5 = _entries$i2[0],
                value = _entries$i2[1];
              valueMap[_key5] = {
                start: value.target,
                target: value.start
              };
            }
          }
          reverse() {
            this.progress = 0;
            if (this.propValuesMap["props"] !== undefined) {
              this.reverseValues(this.propValuesMap["props"]);
            }
            if (this.propValuesMap["shaderProps"] !== undefined) {
              this.reverseValues(this.propValuesMap["shaderProps"]);
            }
            if (!this.settings.loop) {
              this.settings.stopMethod = false;
            }
          }
          applyEasing(p, s, e) {
            return (this.timingFunction(p) || p) * (e - s) + s;
          }
          updateValue(propName, propValue, startValue, easing) {
            if (this.progress === 1) {
              return propValue;
            }
            if (this.progress === 0) {
              return startValue;
            }
            var endValue = propValue;
            if (propName.indexOf("color") !== -1) {
              if (startValue === endValue) {
                return startValue;
              }
              if (easing) {
                var easingProgressValue = this.timingFunction(this.progress) || this.progress;
                return mergeColorProgress(startValue, endValue, easingProgressValue);
              }
              return mergeColorProgress(startValue, endValue, this.progress);
            }
            if (easing) {
              return this.applyEasing(this.progress, startValue, endValue);
            }
            return startValue + (endValue - startValue) * this.progress;
          }
          updateValues(target, valueMap, easing) {
            var entries = Object.entries(valueMap);
            var eLength = entries.length;
            for (var i = 0; i < eLength; i++) {
              var _entries$i3 = _slicedToArray(entries[i], 2),
                _key6 = _entries$i3[0],
                value = _entries$i3[1];
              target[_key6] = this.updateValue(_key6, value.target, value.start, easing);
            }
          }
          update(dt) {
            var _this$settings = this.settings,
              duration = _this$settings.duration,
              loop = _this$settings.loop,
              easing = _this$settings.easing,
              stopMethod = _this$settings.stopMethod;
            var delayFor = this.delayFor;
            if (duration === 0 && delayFor === 0) {
              this.emit("finished", {});
              return;
            }
            if (this.delayFor > 0) {
              this.delayFor -= dt;
              if (this.delayFor >= 0) {
                return;
              } else {
                dt = -this.delayFor;
                this.delayFor = 0;
              }
            }
            if (duration === 0) {
              this.emit("finished", {});
              return;
            }
            if (this.progress === 0) {
              this.emit("animating", {});
            }
            this.progress += dt / duration;
            if (this.progress > 1) {
              this.progress = loop ? 0 : 1;
              this.delayFor = this.delay;
              if (stopMethod) {
                this.emit("finished", {});
                return;
              }
            }
            if (this.propValuesMap["props"] !== undefined) {
              this.updateValues(this.node, this.propValuesMap["props"], easing);
            }
            if (this.propValuesMap["shaderProps"] !== undefined) {
              this.updateValues(this.node.shader.props, this.propValuesMap["shaderProps"], easing);
            }
            if (this.progress < 1) {
              this.emit("tick", {
                progress: this.progress
              });
            }
            if (this.progress === 1) {
              this.emit("finished", {});
            }
          }
        }
        class CoreAnimationController extends EventEmitter {
          constructor(manager, animation) {
            super();
            _defineProperty(this, "stoppedPromise", void 0);
            /**
             * If this is null, then the animation is in a finished / stopped state.
             */
            _defineProperty(this, "stoppedResolve", null);
            _defineProperty(this, "state", void 0);
            this.manager = manager;
            this.animation = animation;
            this.state = "stopped";
            this.stoppedPromise = Promise.resolve();
            this.onAnimating = this.onAnimating.bind(this);
            this.onFinished = this.onFinished.bind(this);
            this.onTick = this.onTick.bind(this);
          }
          start() {
            if (this.state !== "running" && this.state !== "scheduled") {
              this.makeStoppedPromise();
              this.registerAnimation();
              this.state = "scheduled";
            }
            return this;
          }
          stop() {
            this.unregisterAnimation();
            if (this.stoppedResolve !== null) {
              this.stoppedResolve();
              this.stoppedResolve = null;
              this.emit("stopped", this);
            }
            this.animation.reset();
            this.state = "stopped";
            return this;
          }
          pause() {
            this.unregisterAnimation();
            this.state = "paused";
            return this;
          }
          restore() {
            this.stoppedResolve = null;
            this.animation.restore();
            return this;
          }
          waitUntilStopped() {
            return this.stoppedPromise;
          }
          registerAnimation() {
            this.animation.once("finished", this.onFinished);
            this.animation.on("animating", this.onAnimating);
            this.animation.on("tick", this.onTick);
            this.manager.registerAnimation(this.animation);
          }
          unregisterAnimation() {
            this.manager.unregisterAnimation(this.animation);
            this.animation.off("finished", this.onFinished);
            this.animation.off("animating", this.onAnimating);
            this.animation.off("tick", this.onTick);
          }
          makeStoppedPromise() {
            if (this.stoppedResolve === null) {
              this.stoppedPromise = new Promise(resolve => {
                this.stoppedResolve = resolve;
              });
            }
          }
          onFinished() {
            assertTruthy(this.stoppedResolve);
            var _this$animation$setti = this.animation.settings,
              loop = _this$animation$setti.loop,
              stopMethod = _this$animation$setti.stopMethod;
            if (stopMethod === "reverse") {
              this.animation.once("finished", this.onFinished);
              this.animation.reverse();
              return;
            }
            if (loop) {
              return;
            }
            this.unregisterAnimation();
            this.stoppedResolve();
            this.stoppedResolve = null;
            this.emit("stopped", this);
            this.state = "stopped";
          }
          onAnimating() {
            this.state = "running";
            this.emit("animating", this);
          }
          onTick(_animation, data) {
            this.emit("tick", data);
          }
        }
        var CoreNodeRenderState = /* @__PURE__ */(CoreNodeRenderState2 => {
          CoreNodeRenderState2[CoreNodeRenderState2["Init"] = 0] = "Init";
          CoreNodeRenderState2[CoreNodeRenderState2["OutOfBounds"] = 2] = "OutOfBounds";
          CoreNodeRenderState2[CoreNodeRenderState2["InBounds"] = 4] = "InBounds";
          CoreNodeRenderState2[CoreNodeRenderState2["InViewport"] = 8] = "InViewport";
          return CoreNodeRenderState2;
        })(CoreNodeRenderState || {});
        var CoreNodeRenderStateMap = /* @__PURE__ */new Map();
        CoreNodeRenderStateMap.set(0 /* Init */, "init");
        CoreNodeRenderStateMap.set(2 /* OutOfBounds */, "outOfBounds");
        CoreNodeRenderStateMap.set(4 /* InBounds */, "inBounds");
        CoreNodeRenderStateMap.set(8 /* InViewport */, "inViewport");
        var UpdateType = /* @__PURE__ */(UpdateType2 => {
          UpdateType2[UpdateType2["Children"] = 1] = "Children";
          UpdateType2[UpdateType2["ScaleRotate"] = 2] = "ScaleRotate";
          UpdateType2[UpdateType2["Local"] = 4] = "Local";
          UpdateType2[UpdateType2["Global"] = 8] = "Global";
          UpdateType2[UpdateType2["Clipping"] = 16] = "Clipping";
          UpdateType2[UpdateType2["CalculatedZIndex"] = 32] = "CalculatedZIndex";
          UpdateType2[UpdateType2["ZIndexSortedChildren"] = 64] = "ZIndexSortedChildren";
          UpdateType2[UpdateType2["PremultipliedColors"] = 128] = "PremultipliedColors";
          UpdateType2[UpdateType2["WorldAlpha"] = 256] = "WorldAlpha";
          UpdateType2[UpdateType2["RenderState"] = 512] = "RenderState";
          UpdateType2[UpdateType2["IsRenderable"] = 1024] = "IsRenderable";
          UpdateType2[UpdateType2["RenderTexture"] = 2048] = "RenderTexture";
          UpdateType2[UpdateType2["ParentRenderTexture"] = 4096] = "ParentRenderTexture";
          UpdateType2[UpdateType2["RenderBounds"] = 8192] = "RenderBounds";
          UpdateType2[UpdateType2["None"] = 0] = "None";
          UpdateType2[UpdateType2["All"] = 14335] = "All";
          UpdateType2[UpdateType2["RecalcUniforms"] = 16384] = "RecalcUniforms";
          return UpdateType2;
        })(UpdateType || {});
        class CoreNode extends EventEmitter {
          constructor(stage, props) {
            super();
            _defineProperty(this, "children", []);
            _defineProperty(this, "_id", getNewId());
            _defineProperty(this, "props", void 0);
            _defineProperty(this, "updateType", 14335 /* All */);
            _defineProperty(this, "childUpdateType", 0 /* None */);
            _defineProperty(this, "globalTransform", void 0);
            _defineProperty(this, "scaleRotateTransform", void 0);
            _defineProperty(this, "localTransform", void 0);
            _defineProperty(this, "sceneGlobalTransform", void 0);
            _defineProperty(this, "renderCoords", void 0);
            _defineProperty(this, "sceneRenderCoords", void 0);
            _defineProperty(this, "renderBound", void 0);
            _defineProperty(this, "strictBound", void 0);
            _defineProperty(this, "preloadBound", void 0);
            _defineProperty(this, "clippingRect", {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              valid: false
            });
            _defineProperty(this, "isRenderable", false);
            _defineProperty(this, "renderState", 0 /* Init */);
            _defineProperty(this, "worldAlpha", 1);
            _defineProperty(this, "premultipliedColorTl", 0);
            _defineProperty(this, "premultipliedColorTr", 0);
            _defineProperty(this, "premultipliedColorBl", 0);
            _defineProperty(this, "premultipliedColorBr", 0);
            _defineProperty(this, "calcZIndex", 0);
            _defineProperty(this, "hasRTTupdates", false);
            _defineProperty(this, "parentHasRenderTexture", false);
            _defineProperty(this, "rttParent", null);
            _defineProperty(this, "onTextureLoaded", (_, dimensions) => {
              var _this$props$textureOp;
              this.autosizeNode(dimensions);
              this.setUpdateType(1024 /* IsRenderable */);
              this.stage.requestRender();
              if (this.parentHasRenderTexture) {
                this.notifyParentRTTOfUpdate();
              }
              if (dimensions.width > 1 && dimensions.height > 1) {
                this.emit("loaded", {
                  type: "texture",
                  dimensions
                });
              }
              if (((_this$props$textureOp = this.props.textureOptions) === null || _this$props$textureOp === void 0 || (_this$props$textureOp = _this$props$textureOp.resizeMode) === null || _this$props$textureOp === void 0 ? void 0 : _this$props$textureOp.type) === "contain") {
                this.setUpdateType(4 /* Local */);
              }
            });
            _defineProperty(this, "onTextureFailed", (_, error) => {
              this.setUpdateType(1024 /* IsRenderable */);
              if (this.parentHasRenderTexture) {
                this.notifyParentRTTOfUpdate();
              }
              this.emit("failed", {
                type: "texture",
                error
              });
            });
            _defineProperty(this, "onTextureFreed", () => {
              this.setUpdateType(1024 /* IsRenderable */);
              if (this.parentHasRenderTexture) {
                this.notifyParentRTTOfUpdate();
              }
              this.emit("freed", {
                type: "texture"
              });
            });
            this.stage = stage;
            this.props = Object.assign({}, props, {
              parent: null,
              texture: null,
              shader: null,
              src: null,
              rtt: false
            });
            this.parent = props.parent;
            this.texture = props.texture;
            this.shader = props.shader;
            this.src = props.src;
            this.rtt = props.rtt;
            if (props.boundsMargin) {
              this.boundsMargin = Array.isArray(props.boundsMargin) ? props.boundsMargin : [props.boundsMargin, props.boundsMargin, props.boundsMargin, props.boundsMargin];
            }
            this.setUpdateType(2 /* ScaleRotate */ | 4 /* Local */ | 8192 /* RenderBounds */ | 512 /* RenderState */);
            if (this.stage.defaultTexture && this.stage.defaultTexture.state !== "loaded") {
              this.stage.defaultTexture.once("loaded", () => {
                this.setUpdateType(1024 /* IsRenderable */);
              });
            }
          }
          //#region Textures
          loadTexture() {
            var texture = this.props.texture;
            queueMicrotask(() => {
              var _this$props$textureOp2, _this$props$textureOp3;
              if (this.textureOptions.preload === true) {
                this.stage.txManager.loadTexture(texture);
              }
              texture.preventCleanup = (_this$props$textureOp2 = (_this$props$textureOp3 = this.props.textureOptions) === null || _this$props$textureOp3 === void 0 ? void 0 : _this$props$textureOp3.preventCleanup) !== null && _this$props$textureOp2 !== void 0 ? _this$props$textureOp2 : false;
              texture.on("loaded", this.onTextureLoaded);
              texture.on("failed", this.onTextureFailed);
              texture.on("freed", this.onTextureFreed);
              if (this.parentHasRenderTexture) {
                this.notifyParentRTTOfUpdate();
                return;
              }
              if (texture.state === "loaded") {
                assertTruthy(texture.dimensions);
                this.onTextureLoaded(texture, texture.dimensions);
              } else if (texture.state === "failed") {
                assertTruthy(texture.error);
                this.onTextureFailed(texture, texture.error);
              } else if (texture.state === "freed") {
                this.onTextureFreed(texture);
              }
            });
          }
          unloadTexture() {
            if (this.texture !== null) {
              this.texture.off("loaded", this.onTextureLoaded);
              this.texture.off("failed", this.onTextureFailed);
              this.texture.off("freed", this.onTextureFreed);
              this.texture.setRenderableOwner(this, false);
            }
          }
          autosizeNode(dimensions) {
            if (this.autosize) {
              this.width = dimensions.width;
              this.height = dimensions.height;
            }
          }
          //#endregion Textures
          /**
           * Change types types is used to determine the scope of the changes being applied
           *
           * @remarks
           * See {@link UpdateType} for more information on each type
           *
           * @param type
           */
          setUpdateType(type) {
            this.updateType |= type;
            var parent = this.props.parent;
            if (!parent) return;
            if ((parent.updateType & 1 /* Children */) === 0) {
              parent.setUpdateType(1 /* Children */);
            }
          }
          sortChildren() {
            this.children.sort((a, b) => a.calcZIndex - b.calcZIndex);
          }
          updateScaleRotateTransform() {
            var _this$props = this.props,
              rotation = _this$props.rotation,
              scaleX = _this$props.scaleX,
              scaleY = _this$props.scaleY;
            if (rotation === 0 && scaleX === 1 && scaleY === 1) {
              this.scaleRotateTransform = undefined;
              return;
            }
            this.scaleRotateTransform = Matrix3d.rotate(rotation, this.scaleRotateTransform).scale(scaleX, scaleY);
          }
          updateLocalTransform() {
            var _this$props$textureOp4;
            var _this$props2 = this.props,
              x = _this$props2.x,
              y = _this$props2.y,
              width = _this$props2.width,
              height = _this$props2.height;
            var mountTranslateX = this.props.mountX * width;
            var mountTranslateY = this.props.mountY * height;
            if (this.scaleRotateTransform) {
              var pivotTranslateX = this.props.pivotX * width;
              var pivotTranslateY = this.props.pivotY * height;
              this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(this.scaleRotateTransform).translate(-pivotTranslateX, -pivotTranslateY);
            } else {
              this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
            }
            var texture = this.props.texture;
            if (texture && texture.dimensions && ((_this$props$textureOp4 = this.props.textureOptions) === null || _this$props$textureOp4 === void 0 || (_this$props$textureOp4 = _this$props$textureOp4.resizeMode) === null || _this$props$textureOp4 === void 0 ? void 0 : _this$props$textureOp4.type) === "contain") {
              var resizeModeScaleX = 1;
              var resizeModeScaleY = 1;
              var extraX = 0;
              var extraY = 0;
              var _texture$dimensions = texture.dimensions,
                tw = _texture$dimensions.width,
                th = _texture$dimensions.height;
              var txAspectRatio = tw / th;
              var nodeAspectRatio = width / height;
              if (txAspectRatio > nodeAspectRatio) {
                var scaleX = width / tw;
                var scaledTxHeight = th * scaleX;
                extraY = (height - scaledTxHeight) / 2;
                resizeModeScaleY = scaledTxHeight / height;
              } else {
                var scaleY = height / th;
                var scaledTxWidth = tw * scaleY;
                extraX = (width - scaledTxWidth) / 2;
                resizeModeScaleX = scaledTxWidth / width;
              }
              this.localTransform.translate(extraX, extraY).scale(resizeModeScaleX, resizeModeScaleY);
            }
            this.setUpdateType(8 /* Global */);
          }
          /**
           * @todo: test for correct calculation flag
           * @param delta
           */
          update(delta, parentClippingRect) {
            var _this$shader;
            if (this.updateType & 2 /* ScaleRotate */) {
              this.updateScaleRotateTransform();
              this.setUpdateType(4 /* Local */);
            }
            if (this.updateType & 4 /* Local */) {
              this.updateLocalTransform();
              this.setUpdateType(8 /* Global */);
            }
            var parent = this.props.parent;
            var renderState = null;
            if (this.updateType & 2048 /* RenderTexture */ && this.rtt) {
              this.hasRTTupdates = true;
            }
            if (this.updateType & 8 /* Global */) {
              assertTruthy(this.localTransform);
              if (this.parentHasRenderTexture === true && (parent === null || parent === void 0 ? void 0 : parent.rtt) === true) {
                this.globalTransform = Matrix3d.identity();
                this.sceneGlobalTransform = Matrix3d.copy((parent === null || parent === void 0 ? void 0 : parent.globalTransform) || Matrix3d.identity()).multiply(this.localTransform);
              } else if (this.parentHasRenderTexture === true && (parent === null || parent === void 0 ? void 0 : parent.rtt) === false) {
                this.sceneGlobalTransform = Matrix3d.copy((parent === null || parent === void 0 ? void 0 : parent.sceneGlobalTransform) || this.localTransform).multiply(this.localTransform);
                this.globalTransform = Matrix3d.copy((parent === null || parent === void 0 ? void 0 : parent.globalTransform) || this.localTransform, this.globalTransform);
              } else {
                this.globalTransform = Matrix3d.copy((parent === null || parent === void 0 ? void 0 : parent.globalTransform) || this.localTransform, this.globalTransform);
              }
              if (parent !== null) {
                this.globalTransform.multiply(this.localTransform);
              }
              this.calculateRenderCoords();
              this.updateBoundingRect();
              this.setUpdateType(512 /* RenderState */ | 1 /* Children */ | 16384 /* RecalcUniforms */);
              this.childUpdateType |= 8 /* Global */;
              if (this.clipping === true) {
                this.setUpdateType(16 /* Clipping */ | 8192 /* RenderBounds */);
                this.childUpdateType |= 8192 /* RenderBounds */;
              }
            }
            if (this.updateType & 8192 /* RenderBounds */) {
              this.createRenderBounds();
              this.setUpdateType(512 /* RenderState */);
              this.setUpdateType(1 /* Children */);
              this.childUpdateType |= 8192 /* RenderBounds */;
            }
            if (this.updateType & 512 /* RenderState */) {
              renderState = this.checkRenderBounds();
              this.setUpdateType(1024 /* IsRenderable */);
              if (renderState !== 2 /* OutOfBounds */) {
                this.updateRenderState(renderState);
              }
            }
            if (this.updateType & 256 /* WorldAlpha */) {
              if (parent) {
                this.worldAlpha = parent.worldAlpha * this.props.alpha;
              } else {
                this.worldAlpha = this.props.alpha;
              }
              this.setUpdateType(1 /* Children */ | 128 /* PremultipliedColors */ | 1024 /* IsRenderable */);
              this.childUpdateType |= 256 /* WorldAlpha */;
            }
            if (this.updateType & 1024 /* IsRenderable */) {
              this.updateIsRenderable();
            }
            if (this.updateType & 16 /* Clipping */) {
              this.calculateClippingRect(parentClippingRect);
              this.setUpdateType(1 /* Children */);
              this.childUpdateType |= 16 /* Clipping */;
              this.childUpdateType |= 8192 /* RenderBounds */;
            }
            if (this.updateType & 128 /* PremultipliedColors */) {
              this.premultipliedColorTl = mergeColorAlphaPremultiplied(this.props.colorTl, this.worldAlpha, true);
              if (this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl) {
                this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl;
              } else {
                this.premultipliedColorTr = mergeColorAlphaPremultiplied(this.props.colorTr, this.worldAlpha, true);
                this.premultipliedColorBl = mergeColorAlphaPremultiplied(this.props.colorBl, this.worldAlpha, true);
                this.premultipliedColorBr = mergeColorAlphaPremultiplied(this.props.colorBr, this.worldAlpha, true);
              }
            }
            if (parent !== null && this.updateType & 32 /* CalculatedZIndex */) {
              this.calculateZIndex();
              parent.setUpdateType(64 /* ZIndexSortedChildren */);
            }
            if (this.props.strictBounds === true && this.renderState === 2 /* OutOfBounds */) {
              this.updateType &= -8193 /* RenderBounds */;
              return;
            }
            if (((_this$shader = this.shader) === null || _this$shader === void 0 ? void 0 : _this$shader.update) !== undefined && (this.updateType & 4 /* Local */ || this.updateType & 16384 /* RecalcUniforms */)) {
              this.shader.update();
            }
            if (this.updateType & 1 /* Children */ && this.children.length > 0) {
              for (var i = 0, length = this.children.length; i < length; i++) {
                var child = this.children[i];
                child.setUpdateType(this.childUpdateType);
                if (child.updateType === 0) {
                  continue;
                }
                var childClippingRect = this.clippingRect;
                if (this.rtt === true) {
                  childClippingRect = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    valid: false
                  };
                }
                child.update(delta, childClippingRect);
              }
            }
            if (this.parentHasRenderTexture && this.updateType > 0) {
              this.notifyParentRTTOfUpdate();
            }
            if (this.updateType & 64 /* ZIndexSortedChildren */) {
              this.sortChildren();
            }
            if (renderState === 2 /* OutOfBounds */) {
              this.updateRenderState(renderState);
              this.updateIsRenderable();
              if (this.rtt === true && renderState === 2 /* OutOfBounds */) {
                this.notifyChildrenRTTOfUpdate(renderState);
              }
            }
            this.updateType = 0;
            this.childUpdateType = 0;
          }
          findParentRTTNode() {
            var rttNode = this.parent;
            while (rttNode && !rttNode.rtt) {
              rttNode = rttNode.parent;
            }
            return rttNode;
          }
          getRTTParentRenderState() {
            var rttNode = this.rttParent || this.findParentRTTNode();
            if (!rttNode) {
              return null;
            }
            return rttNode.renderState;
          }
          notifyChildrenRTTOfUpdate(renderState) {
            var _iterator5 = _createForOfIteratorHelper(this.children),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var child = _step5.value;
                child.updateRenderState(renderState);
                child.updateIsRenderable();
                child.notifyChildrenRTTOfUpdate(renderState);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          notifyParentRTTOfUpdate() {
            if (this.parent === null) {
              return;
            }
            var rttNode = this.rttParent || this.findParentRTTNode();
            if (!rttNode) {
              return;
            }
            rttNode.hasRTTupdates = true;
            rttNode.setUpdateType(2048 /* RenderTexture */);
            if (rttNode.parentHasRenderTexture === true) {
              rttNode.notifyParentRTTOfUpdate();
            }
          }
          checkRenderBounds() {
            assertTruthy(this.renderBound);
            assertTruthy(this.strictBound);
            assertTruthy(this.preloadBound);
            if (boundInsideBound(this.renderBound, this.strictBound)) {
              return 8 /* InViewport */;
            }
            if (boundInsideBound(this.renderBound, this.preloadBound)) {
              return 4 /* InBounds */;
            }
            if (boundLargeThanBound(this.renderBound, this.strictBound)) {
              return 8 /* InViewport */;
            }
            if (this.parent !== null && (this.props.width === 0 || this.props.height === 0)) {
              return this.parent.renderState;
            }
            return 2 /* OutOfBounds */;
          }
          updateBoundingRect() {
            var transform = this.sceneGlobalTransform || this.globalTransform;
            var renderCoords = this.sceneRenderCoords || this.renderCoords;
            var tb = transform.tb,
              tc = transform.tc;
            var x1 = renderCoords.x1,
              y1 = renderCoords.y1,
              x3 = renderCoords.x3,
              y3 = renderCoords.y3;
            if (tb === 0 || tc === 0) {
              this.renderBound = createBound(x1, y1, x3, y3, this.renderBound);
            } else {
              var x2 = renderCoords.x2,
                x4 = renderCoords.x4,
                y2 = renderCoords.y2,
                y4 = renderCoords.y4;
              this.renderBound = createBound(Math.min(x1, x2, x3, x4), Math.min(y1, y2, y3, y4), Math.max(x1, x2, x3, x4), Math.max(y1, y2, y3, y4), this.renderBound);
            }
          }
          createRenderBounds() {
            assertTruthy(this.stage);
            if (this.parent !== null && this.parent.strictBound !== undefined) {
              var parentBound = this.parent.strictBound;
              this.strictBound = createBound(parentBound.x1, parentBound.y1, parentBound.x2, parentBound.y2);
              this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin);
            } else {
              this.strictBound = this.stage.strictBound;
              this.preloadBound = this.stage.preloadBound;
            }
            if (this.props.clipping === false) {
              return;
            }
            if (this.renderBound === undefined) {
              return;
            }
            if (boundInsideBound(this.renderBound, this.strictBound) === false) {
              return;
            }
            var _this$props3 = this.props,
              x = _this$props3.x,
              y = _this$props3.y,
              width = _this$props3.width,
              height = _this$props3.height;
            var _ref = this.sceneGlobalTransform || this.globalTransform || {},
              tx = _ref.tx,
              ty = _ref.ty;
            var _x = tx !== null && tx !== void 0 ? tx : x;
            var _y = ty !== null && ty !== void 0 ? ty : y;
            this.strictBound = createBound(_x, _y, _x + width, _y + height, this.strictBound);
            this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin);
          }
          updateRenderState(renderState) {
            if (renderState === this.renderState) {
              return;
            }
            var previous = this.renderState;
            this.renderState = renderState;
            var event = CoreNodeRenderStateMap.get(renderState);
            this.emit(event, {
              previous,
              current: renderState
            });
          }
          /**
           * Updates the `isRenderable` property based on various conditions.
           */
          updateIsRenderable() {
            var newIsRenderable = false;
            var needsTextureOwnership = false;
            if (this.checkBasicRenderability() === false) {
              this.updateTextureOwnership(false);
              this.setRenderable(false);
              return;
            }
            if (this.texture !== null) {
              needsTextureOwnership = true;
              newIsRenderable = this.texture.state === "loaded";
            } else if ((this.hasShader() || this.hasColorProperties() === true) && this.hasDimensions() === true) {
              if (this.stage.defaultTexture && this.stage.defaultTexture.state === "loaded") {
                newIsRenderable = true;
              }
            }
            this.updateTextureOwnership(needsTextureOwnership);
            this.setRenderable(newIsRenderable);
          }
          /**
           * Checks if the node is renderable based on world alpha, dimensions and out of bounds status.
           */
          checkBasicRenderability() {
            if (this.worldAlpha === 0 || this.isOutOfBounds() === true) {
              return false;
            } else {
              return true;
            }
          }
          /**
           * Sets the renderable state and triggers changes if necessary.
           * @param isRenderable - The new renderable state
           */
          setRenderable(isRenderable) {
            this.isRenderable = isRenderable;
          }
          /**
           * Changes the renderable state of the node.
           */
          updateTextureOwnership(isRenderable) {
            var _this$texture;
            (_this$texture = this.texture) === null || _this$texture === void 0 || _this$texture.setRenderableOwner(this, isRenderable);
          }
          /**
           * Checks if the node is out of the viewport bounds.
           */
          isOutOfBounds() {
            return this.renderState <= 2 /* OutOfBounds */;
          }
          /**
           * Checks if the node has dimensions (width/height)
           */
          hasDimensions() {
            return this.props.width !== 0 && this.props.height !== 0;
          }
          /**
           * Checks if the node has any color properties set.
           */
          hasColorProperties() {
            return this.props.color !== 0 || this.props.colorTop !== 0 || this.props.colorBottom !== 0 || this.props.colorLeft !== 0 || this.props.colorRight !== 0 || this.props.colorTl !== 0 || this.props.colorTr !== 0 || this.props.colorBl !== 0 || this.props.colorBr !== 0;
          }
          hasShader() {
            return this.props.shader !== null;
          }
          calculateRenderCoords() {
            var width = this.width,
              height = this.height;
            var _this$globalTransform = this.globalTransform,
              tx = _this$globalTransform.tx,
              ty = _this$globalTransform.ty,
              ta = _this$globalTransform.ta,
              tb = _this$globalTransform.tb,
              tc = _this$globalTransform.tc,
              td = _this$globalTransform.td;
            if (tb === 0 && tc === 0) {
              var minX = tx;
              var maxX = tx + width * ta;
              var minY = ty;
              var maxY = ty + height * td;
              this.renderCoords = RenderCoords.translate(
              //top-left
              minX, minY,
              //top-right
              maxX, minY,
              //bottom-right
              maxX, maxY,
              //bottom-left
              minX, maxY, this.renderCoords);
            } else {
              this.renderCoords = RenderCoords.translate(
              //top-left
              tx, ty,
              //top-right
              tx + width * ta, ty + width * tc,
              //bottom-right
              tx + width * ta + height * tb, ty + width * tc + height * td,
              //bottom-left
              tx + height * tb, ty + height * td, this.renderCoords);
            }
            if (this.sceneGlobalTransform === undefined) {
              return;
            }
            var _this$sceneGlobalTran = this.sceneGlobalTransform,
              stx = _this$sceneGlobalTran.tx,
              sty = _this$sceneGlobalTran.ty,
              sta = _this$sceneGlobalTran.ta,
              stb = _this$sceneGlobalTran.tb,
              stc = _this$sceneGlobalTran.tc,
              std = _this$sceneGlobalTran.td;
            if (stb === 0 && stc === 0) {
              var _minX = stx;
              var _maxX = stx + width * sta;
              var _minY = sty;
              var _maxY = sty + height * std;
              this.sceneRenderCoords = RenderCoords.translate(
              //top-left
              _minX, _minY,
              //top-right
              _maxX, _minY,
              //bottom-right
              _maxX, _maxY,
              //bottom-left
              _minX, _maxY, this.sceneRenderCoords);
            } else {
              this.sceneRenderCoords = RenderCoords.translate(
              //top-left
              stx, sty,
              //top-right
              stx + width * sta, sty + width * stc,
              //bottom-right
              stx + width * sta + height * stb, sty + width * stc + height * std,
              //bottom-left
              stx + height * stb, sty + height * std, this.sceneRenderCoords);
            }
          }
          /**
           * This function calculates the clipping rectangle for a node.
           *
           * The function then checks if the node is rotated. If the node requires clipping and is not rotated, a new clipping rectangle is created based on the node's global transform and dimensions.
           * If a parent clipping rectangle exists, it is intersected with the node's clipping rectangle (if it exists), or replaces the node's clipping rectangle.
           *
           * Finally, the node's parentClippingRect and clippingRect properties are updated.
           */
          calculateClippingRect(parentClippingRect) {
            assertTruthy(this.globalTransform);
            var clippingRect = this.clippingRect,
              props = this.props,
              gt = this.globalTransform;
            var clipping = props.clipping;
            var isRotated = gt.tb !== 0 || gt.tc !== 0;
            if (clipping === true && isRotated === false) {
              clippingRect.x = gt.tx;
              clippingRect.y = gt.ty;
              clippingRect.width = this.width * gt.ta;
              clippingRect.height = this.height * gt.td;
              clippingRect.valid = true;
            } else {
              clippingRect.valid = false;
            }
            if (parentClippingRect.valid === true && clippingRect.valid === true) {
              intersectRect(parentClippingRect, clippingRect, clippingRect);
            } else if (parentClippingRect.valid === true) {
              copyRect(parentClippingRect, clippingRect);
              clippingRect.valid = true;
            }
          }
          calculateZIndex() {
            var _props$parent, _props$parent2;
            var props = this.props;
            var z = props.zIndex || 0;
            var p = ((_props$parent = props.parent) === null || _props$parent === void 0 ? void 0 : _props$parent.zIndex) || 0;
            var zIndex = z;
            if ((_props$parent2 = props.parent) !== null && _props$parent2 !== void 0 && _props$parent2.zIndexLocked) {
              zIndex = z < p ? z : p;
            }
            this.calcZIndex = zIndex;
          }
          /**
           * Destroy the node and cleanup all resources
           */
          destroy() {
            this.unloadTexture();
            this.clippingRect.valid = false;
            this.isRenderable = false;
            this.renderCoords = undefined;
            this.renderBound = undefined;
            this.strictBound = undefined;
            this.preloadBound = undefined;
            this.globalTransform = undefined;
            this.scaleRotateTransform = undefined;
            this.localTransform = undefined;
            this.props.texture = null;
            this.props.shader = this.stage.defShaderNode;
            while (this.children.length > 0) {
              var _this$children$;
              (_this$children$ = this.children[0]) === null || _this$children$ === void 0 || _this$children$.destroy();
            }
            this.parent = null;
            if (this.rtt) {
              this.stage.renderer.removeRTTNode(this);
            }
            this.removeAllListeners();
          }
          renderQuads(renderer) {
            if (this.parentHasRenderTexture) {
              if (!renderer.renderToTextureActive) {
                return;
              }
              if (this.parentRenderTexture !== renderer.activeRttNode) {
                return;
              }
            }
            assertTruthy(this.globalTransform);
            assertTruthy(this.renderCoords);
            renderer.addQuad({
              width: this.props.width,
              height: this.props.height,
              colorTl: this.premultipliedColorTl,
              colorTr: this.premultipliedColorTr,
              colorBl: this.premultipliedColorBl,
              colorBr: this.premultipliedColorBr,
              // if we do not have a texture, use the default texture
              // this assumes any renderable node is either a distinct texture or a ColorTexture
              texture: this.texture || this.stage.defaultTexture,
              textureOptions: this.textureOptions,
              zIndex: this.zIndex,
              shader: this.props.shader,
              alpha: this.worldAlpha,
              clippingRect: this.clippingRect,
              tx: this.globalTransform.tx,
              ty: this.globalTransform.ty,
              ta: this.globalTransform.ta,
              tb: this.globalTransform.tb,
              tc: this.globalTransform.tc,
              td: this.globalTransform.td,
              renderCoords: this.renderCoords,
              rtt: this.rtt,
              parentHasRenderTexture: this.parentHasRenderTexture,
              framebufferDimensions: this.framebufferDimensions
            });
          }
          //#region Properties
          get id() {
            return this._id;
          }
          get data() {
            return this.props.data;
          }
          set data(d) {
            this.props.data = d;
          }
          get x() {
            return this.props.x;
          }
          set x(value) {
            if (this.props.x !== value) {
              this.props.x = value;
              this.setUpdateType(4 /* Local */);
            }
          }
          get absX() {
            var _this$props$parent, _this$props$parent2;
            return this.props.x + -this.props.width * this.props.mountX + (((_this$props$parent = this.props.parent) === null || _this$props$parent === void 0 ? void 0 : _this$props$parent.absX) || ((_this$props$parent2 = this.props.parent) === null || _this$props$parent2 === void 0 || (_this$props$parent2 = _this$props$parent2.globalTransform) === null || _this$props$parent2 === void 0 ? void 0 : _this$props$parent2.tx) || 0);
          }
          get absY() {
            var _this$props$parent$ab, _this$props$parent3;
            return this.props.y + -this.props.height * this.props.mountY + ((_this$props$parent$ab = (_this$props$parent3 = this.props.parent) === null || _this$props$parent3 === void 0 ? void 0 : _this$props$parent3.absY) !== null && _this$props$parent$ab !== void 0 ? _this$props$parent$ab : 0);
          }
          get y() {
            return this.props.y;
          }
          set y(value) {
            if (this.props.y !== value) {
              this.props.y = value;
              this.setUpdateType(4 /* Local */);
            }
          }
          get width() {
            return this.props.width;
          }
          set width(value) {
            if (this.props.width !== value) {
              this.props.width = value;
              this.setUpdateType(4 /* Local */);
              if (this.props.rtt) {
                this.texture = this.stage.txManager.createTexture("RenderTexture", {
                  width: this.width,
                  height: this.height
                });
                this.setUpdateType(2048 /* RenderTexture */);
              }
            }
          }
          get height() {
            return this.props.height;
          }
          set height(value) {
            if (this.props.height !== value) {
              this.props.height = value;
              this.setUpdateType(4 /* Local */);
              if (this.props.rtt) {
                this.texture = this.stage.txManager.createTexture("RenderTexture", {
                  width: this.width,
                  height: this.height
                });
                this.setUpdateType(2048 /* RenderTexture */);
              }
            }
          }
          get scale() {
            return this.scaleX;
          }
          set scale(value) {
            this.scaleX = value;
            this.scaleY = value;
          }
          get scaleX() {
            return this.props.scaleX;
          }
          set scaleX(value) {
            if (this.props.scaleX !== value) {
              this.props.scaleX = value;
              this.setUpdateType(2 /* ScaleRotate */);
            }
          }
          get scaleY() {
            return this.props.scaleY;
          }
          set scaleY(value) {
            if (this.props.scaleY !== value) {
              this.props.scaleY = value;
              this.setUpdateType(2 /* ScaleRotate */);
            }
          }
          get mount() {
            return this.props.mount;
          }
          set mount(value) {
            if (this.props.mountX !== value || this.props.mountY !== value) {
              this.props.mountX = value;
              this.props.mountY = value;
              this.props.mount = value;
              this.setUpdateType(4 /* Local */);
            }
          }
          get mountX() {
            return this.props.mountX;
          }
          set mountX(value) {
            if (this.props.mountX !== value) {
              this.props.mountX = value;
              this.setUpdateType(4 /* Local */);
            }
          }
          get mountY() {
            return this.props.mountY;
          }
          set mountY(value) {
            if (this.props.mountY !== value) {
              this.props.mountY = value;
              this.setUpdateType(4 /* Local */);
            }
          }
          get pivot() {
            return this.props.pivot;
          }
          set pivot(value) {
            if (this.props.pivotX !== value || this.props.pivotY !== value) {
              this.props.pivotX = value;
              this.props.pivotY = value;
              this.props.pivot = value;
              this.setUpdateType(4 /* Local */);
            }
          }
          get pivotX() {
            return this.props.pivotX;
          }
          set pivotX(value) {
            if (this.props.pivotX !== value) {
              this.props.pivotX = value;
              this.setUpdateType(4 /* Local */);
            }
          }
          get pivotY() {
            return this.props.pivotY;
          }
          set pivotY(value) {
            if (this.props.pivotY !== value) {
              this.props.pivotY = value;
              this.setUpdateType(4 /* Local */);
            }
          }
          get rotation() {
            return this.props.rotation;
          }
          set rotation(value) {
            if (this.props.rotation !== value) {
              this.props.rotation = value;
              this.setUpdateType(2 /* ScaleRotate */);
            }
          }
          get alpha() {
            return this.props.alpha;
          }
          set alpha(value) {
            this.props.alpha = value;
            this.setUpdateType(128 /* PremultipliedColors */ | 256 /* WorldAlpha */ | 1 /* Children */ | 1024 /* IsRenderable */);
            this.childUpdateType |= 256 /* WorldAlpha */;
          }
          get autosize() {
            return this.props.autosize;
          }
          set autosize(value) {
            this.props.autosize = value;
          }
          get boundsMargin() {
            var _ref2, _this$props$boundsMar, _this$parent;
            return (_ref2 = (_this$props$boundsMar = this.props.boundsMargin) !== null && _this$props$boundsMar !== void 0 ? _this$props$boundsMar : (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.boundsMargin) !== null && _ref2 !== void 0 ? _ref2 : this.stage.boundsMargin;
          }
          set boundsMargin(value) {
            if (value === this.props.boundsMargin) {
              return;
            }
            if (value === null) {
              this.props.boundsMargin = value;
            } else {
              var bm = Array.isArray(value) ? value : [value, value, value, value];
              this.props.boundsMargin = bm;
            }
            this.setUpdateType(8192 /* RenderBounds */);
          }
          get clipping() {
            return this.props.clipping;
          }
          set clipping(value) {
            this.props.clipping = value;
            this.setUpdateType(16 /* Clipping */ | 8192 /* RenderBounds */ | 1 /* Children */);
            this.childUpdateType |= 8 /* Global */ | 16 /* Clipping */;
          }
          get color() {
            return this.props.color;
          }
          set color(value) {
            this.colorTop = value;
            this.colorBottom = value;
            this.colorLeft = value;
            this.colorRight = value;
            this.props.color = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          get colorTop() {
            return this.props.colorTop;
          }
          set colorTop(value) {
            if (this.props.colorTl !== value || this.props.colorTr !== value) {
              this.colorTl = value;
              this.colorTr = value;
            }
            this.props.colorTop = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          get colorBottom() {
            return this.props.colorBottom;
          }
          set colorBottom(value) {
            if (this.props.colorBl !== value || this.props.colorBr !== value) {
              this.colorBl = value;
              this.colorBr = value;
            }
            this.props.colorBottom = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          get colorLeft() {
            return this.props.colorLeft;
          }
          set colorLeft(value) {
            if (this.props.colorTl !== value || this.props.colorBl !== value) {
              this.colorTl = value;
              this.colorBl = value;
            }
            this.props.colorLeft = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          get colorRight() {
            return this.props.colorRight;
          }
          set colorRight(value) {
            if (this.props.colorTr !== value || this.props.colorBr !== value) {
              this.colorTr = value;
              this.colorBr = value;
            }
            this.props.colorRight = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          get colorTl() {
            return this.props.colorTl;
          }
          set colorTl(value) {
            this.props.colorTl = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          get colorTr() {
            return this.props.colorTr;
          }
          set colorTr(value) {
            this.props.colorTr = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          get colorBl() {
            return this.props.colorBl;
          }
          set colorBl(value) {
            this.props.colorBl = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          get colorBr() {
            return this.props.colorBr;
          }
          set colorBr(value) {
            this.props.colorBr = value;
            this.setUpdateType(128 /* PremultipliedColors */);
          }
          // we're only interested in parent zIndex to test
          // if we should use node zIndex is higher then parent zIndex
          get zIndexLocked() {
            return this.props.zIndexLocked || 0;
          }
          set zIndexLocked(value) {
            this.props.zIndexLocked = value;
            this.setUpdateType(32 /* CalculatedZIndex */ | 1 /* Children */);
            for (var i = 0, length = this.children.length; i < length; i++) {
              this.children[i].setUpdateType(32 /* CalculatedZIndex */);
            }
          }
          get zIndex() {
            return this.props.zIndex;
          }
          set zIndex(value) {
            this.props.zIndex = value;
            this.setUpdateType(32 /* CalculatedZIndex */ | 1 /* Children */);
            for (var i = 0, length = this.children.length; i < length; i++) {
              this.children[i].setUpdateType(32 /* CalculatedZIndex */);
            }
          }
          get parent() {
            return this.props.parent;
          }
          set parent(newParent) {
            var oldParent = this.props.parent;
            if (oldParent === newParent) {
              return;
            }
            this.props.parent = newParent;
            if (oldParent) {
              var index = oldParent.children.indexOf(this);
              oldParent.children.splice(index, 1);
              oldParent.setUpdateType(1 /* Children */ | 64 /* ZIndexSortedChildren */);
            }
            if (newParent) {
              newParent.children.push(this);
              this.setUpdateType(14335 /* All */);
              newParent.setUpdateType(1 /* Children */ | 64 /* ZIndexSortedChildren */);
              if (newParent.rtt || newParent.parentHasRenderTexture) {
                this.applyRTTInheritance(newParent);
              }
            }
            this.updateScaleRotateTransform();
            this.setUpdateType(8192 /* RenderBounds */ | 1 /* Children */);
          }
          get preventCleanup() {
            return this.props.textureOptions.preventCleanup || false;
          }
          set preventCleanup(value) {
            this.props.textureOptions.preventCleanup = value;
          }
          get rtt() {
            return this.props.rtt;
          }
          set rtt(value) {
            if (this.props.rtt === value) {
              return;
            }
            this.props.rtt = value;
            if (value === true) {
              this.initRenderTexture();
              this.markChildrenWithRTT();
            } else {
              this.cleanupRenderTexture();
            }
            this.setUpdateType(2048 /* RenderTexture */);
            if (this.parentHasRenderTexture === true) {
              this.notifyParentRTTOfUpdate();
            }
          }
          initRenderTexture() {
            this.texture = this.stage.txManager.createTexture("RenderTexture", {
              width: this.width,
              height: this.height
            });
            this.stage.renderer.renderToTexture(this);
          }
          cleanupRenderTexture() {
            this.unloadTexture();
            this.clearRTTInheritance();
            this.hasRTTupdates = false;
            this.texture = null;
          }
          markChildrenWithRTT() {
            var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var parent = node || this;
            var _iterator6 = _createForOfIteratorHelper(parent.children),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var child = _step6.value;
                child.setUpdateType(14335 /* All */);
                child.parentHasRenderTexture = true;
                child.markChildrenWithRTT();
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
          // Apply RTT inheritance when a node has an RTT-enabled parent
          applyRTTInheritance(parent) {
            if (parent.rtt) {
              parent.setUpdateType(2048 /* RenderTexture */);
            }
            this.markChildrenWithRTT(parent);
          }
          // Clear RTT inheritance when detaching from an RTT chain
          clearRTTInheritance() {
            if (this.rtt) {
              return;
            }
            var _iterator7 = _createForOfIteratorHelper(this.children),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var child = _step7.value;
                child.parentHasRenderTexture = false;
                child.rttParent = null;
                child.setUpdateType(14335 /* All */);
                child.clearRTTInheritance();
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
          get shader() {
            return this.props.shader;
          }
          set shader(shader) {
            if (this.props.shader === shader) {
              return;
            }
            if (shader === null) {
              this.props.shader = this.stage.defShaderNode;
              this.setUpdateType(1024 /* IsRenderable */);
              return;
            }
            shader.attachNode(this);
            this.props.shader = shader;
            this.setUpdateType(1024 /* IsRenderable */);
          }
          get src() {
            return this.props.src;
          }
          set src(imageUrl) {
            if (this.props.src === imageUrl) {
              return;
            }
            this.props.src = imageUrl;
            if (!imageUrl) {
              this.texture = null;
              return;
            }
            this.texture = this.stage.txManager.createTexture("ImageTexture", {
              src: imageUrl,
              width: this.props.width,
              height: this.props.height,
              type: this.props.imageType,
              sx: this.props.srcX,
              sy: this.props.srcY,
              sw: this.props.srcWidth,
              sh: this.props.srcHeight
            });
          }
          set imageType(type) {
            if (this.props.imageType === type) {
              return;
            }
            this.props.imageType = type;
          }
          get imageType() {
            return this.props.imageType || null;
          }
          get srcHeight() {
            return this.props.srcHeight;
          }
          set srcHeight(value) {
            this.props.srcHeight = value;
          }
          get srcWidth() {
            return this.props.srcWidth;
          }
          set srcWidth(value) {
            this.props.srcWidth = value;
          }
          get srcX() {
            return this.props.srcX;
          }
          set srcX(value) {
            this.props.srcX = value;
          }
          get srcY() {
            return this.props.srcY;
          }
          set srcY(value) {
            this.props.srcY = value;
          }
          /**
           * Returns the framebuffer dimensions of the node.
           * If the node has a render texture, the dimensions are the same as the node's dimensions.
           * If the node does not have a render texture, the dimensions are inherited from the parent.
           * If the node parent has a render texture and the node is a render texture, the nodes dimensions are used.
           */
          get framebufferDimensions() {
            if (this.parentHasRenderTexture && !this.rtt && this.parent) {
              return this.parent.framebufferDimensions;
            }
            return {
              width: this.width,
              height: this.height
            };
          }
          /**
           * Returns the parent render texture node if it exists.
           */
          get parentRenderTexture() {
            var parent = this.parent;
            while (parent) {
              if (parent.rtt) {
                return parent;
              }
              parent = parent.parent;
            }
            return null;
          }
          get texture() {
            return this.props.texture;
          }
          set texture(value) {
            if (this.props.texture === value) {
              return;
            }
            var oldTexture = this.props.texture;
            if (oldTexture) {
              oldTexture.setRenderableOwner(this, false);
              this.unloadTexture();
            }
            this.props.texture = value;
            if (value !== null) {
              value.setRenderableOwner(this, this.isRenderable);
              this.loadTexture();
            }
            this.setUpdateType(1024 /* IsRenderable */);
          }
          set textureOptions(value) {
            this.props.textureOptions = value;
          }
          get textureOptions() {
            return this.props.textureOptions;
          }
          get strictBounds() {
            return this.props.strictBounds;
          }
          set strictBounds(v) {
            if (v === this.props.strictBounds) {
              return;
            }
            this.props.strictBounds = v;
            this.setUpdateType(8192 /* RenderBounds */ | 1 /* Children */);
            this.childUpdateType |= 8192 /* RenderBounds */ | 1 /* Children */;
          }
          animate(props, settings) {
            var animation = new CoreAnimation(this, props, settings);
            var controller = new CoreAnimationController(this.stage.animationManager, animation);
            return controller;
          }
          flush() {}
          //#endregion Properties
        }
        var startLoop = stage => {
          var isIdle = false;
          var runLoop = () => {
            stage.updateFrameTime();
            stage.updateAnimations();
            if (!stage.hasSceneUpdates()) {
              stage.calculateFps();
              setTimeout(runLoop, 16.666666666666668);
              if (!isIdle) {
                stage.shManager.cleanup();
                stage.eventBus.emit("idle");
                isIdle = true;
              }
              if (stage.txMemManager.checkCleanup() === true) {
                stage.txMemManager.cleanup(false);
              }
              stage.flushFrameEvents();
              return;
            }
            isIdle = false;
            stage.drawFrame();
            stage.flushFrameEvents();
            requestAnimationFrame(runLoop);
          };
          requestAnimationFrame(runLoop);
        };
        var getTimeStamp = () => {
          return performance ? performance.now() : Date.now();
        };
        class AnimationManager {
          constructor() {
            _defineProperty(this, "activeAnimations", /* @__PURE__ */new Set());
          }
          registerAnimation(animation) {
            this.activeAnimations.add(animation);
          }
          unregisterAnimation(animation) {
            this.activeAnimations.delete(animation);
          }
          update(dt) {
            this.activeAnimations.forEach(animation => {
              animation.update(dt);
            });
          }
        }
        function createImageWorker() {
          function hasAlphaChannel(mimeType) {
            return mimeType.indexOf("image/png") !== -1;
          }
          function getImage(src, premultiplyAlpha, x, y, width, height, options) {
            return new Promise(function (resolve, reject) {
              var supportsOptionsCreateImageBitmap = options.supportsOptionsCreateImageBitmap;
              var supportsFullCreateImageBitmap = options.supportsFullCreateImageBitmap;
              var xhr = new XMLHttpRequest();
              xhr.open("GET", src, true);
              xhr.responseType = "blob";
              xhr.onload = function () {
                if (xhr.status !== 200 && xhr.status !== 0) {
                  return reject(new Error("Failed to load image: " + xhr.statusText));
                }
                var blob = xhr.response;
                var withAlphaChannel = premultiplyAlpha !== undefined ? premultiplyAlpha : hasAlphaChannel(blob.type);
                if (supportsFullCreateImageBitmap === true && width !== null && height !== null) {
                  createImageBitmap(blob, x || 0, y || 0, width, height, {
                    premultiplyAlpha: withAlphaChannel ? "premultiply" : "none",
                    colorSpaceConversion: "none",
                    imageOrientation: "none"
                  }).then(function (data) {
                    resolve({
                      data,
                      premultiplyAlpha
                    });
                  }).catch(function (error) {
                    reject(error);
                  });
                  return;
                } else if (supportsOptionsCreateImageBitmap === false && supportsOptionsCreateImageBitmap === false) {
                  createImageBitmap(blob).then(function (data) {
                    resolve({
                      data,
                      premultiplyAlpha
                    });
                  }).catch(function (error) {
                    reject(error);
                  });
                } else {
                  createImageBitmap(blob, {
                    premultiplyAlpha: withAlphaChannel ? "premultiply" : "none",
                    colorSpaceConversion: "none",
                    imageOrientation: "none"
                  }).then(function (data) {
                    resolve({
                      data,
                      premultiplyAlpha
                    });
                  }).catch(function (error) {
                    reject(error);
                  });
                }
              };
              xhr.onerror = function () {
                reject(new Error("Network error occurred while trying to fetch the image."));
              };
              xhr.send();
            });
          }
          self.onmessage = event => {
            var src = event.data.src;
            var id = event.data.id;
            var premultiplyAlpha = event.data.premultiplyAlpha;
            var x = event.data.sx;
            var y = event.data.sy;
            var width = event.data.sw;
            var height = event.data.sh;
            var supportsOptionsCreateImageBitmap = false;
            var supportsFullCreateImageBitmap = false;
            getImage(src, premultiplyAlpha, x, y, width, height, {
              supportsOptionsCreateImageBitmap,
              supportsFullCreateImageBitmap
            }).then(function (data) {
              self.postMessage({
                id,
                src,
                data
              });
            }).catch(function (error) {
              self.postMessage({
                id,
                src,
                error: error.message
              });
            });
          };
        }
        class ImageWorkerManager {
          constructor(numImageWorkers, createImageBitmapSupport) {
            _defineProperty(this, "imageWorkersEnabled", true);
            _defineProperty(this, "messageManager", {});
            _defineProperty(this, "workers", []);
            _defineProperty(this, "workerIndex", 0);
            _defineProperty(this, "nextId", 0);
            this.workers = this.createWorkers(numImageWorkers, createImageBitmapSupport);
            this.workers.forEach(worker => {
              worker.onmessage = this.handleMessage.bind(this);
            });
          }
          handleMessage(event) {
            var _event$data = event.data,
              id = _event$data.id,
              data = _event$data.data,
              error = _event$data.error;
            var msg = this.messageManager[id];
            if (msg) {
              var _msg = _slicedToArray(msg, 2),
                resolve = _msg[0],
                reject = _msg[1];
              delete this.messageManager[id];
              if (error) {
                reject(new Error(error));
              } else {
                resolve(data);
              }
            }
          }
          createWorkers() {
            var numWorkers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var createImageBitmapSupport = arguments.length > 1 ? arguments[1] : undefined;
            var workerCode = `(${createImageWorker.toString()})()`;
            if (createImageBitmapSupport.options === true) {
              workerCode = workerCode.replace("var supportsOptionsCreateImageBitmap = false;", "var supportsOptionsCreateImageBitmap = true;");
            }
            if (createImageBitmapSupport.full === true) {
              workerCode = workerCode.replace("var supportsOptionsCreateImageBitmap = false;", "var supportsOptionsCreateImageBitmap = true;");
              workerCode = workerCode.replace("var supportsFullCreateImageBitmap = false;", "var supportsFullCreateImageBitmap = true;");
            }
            workerCode = workerCode.replace('"use strict";', "");
            var blob = new Blob([workerCode], {
              type: "application/javascript"
            });
            var blobURL = (self.URL ? URL : webkitURL).createObjectURL(blob);
            var workers = [];
            for (var i = 0; i < numWorkers; i++) {
              workers.push(new Worker(blobURL));
            }
            return workers;
          }
          getNextWorker() {
            var worker = this.workers[this.workerIndex];
            this.workerIndex = (this.workerIndex + 1) % this.workers.length;
            return worker;
          }
          getImage(src, premultiplyAlpha, sx, sy, sw, sh) {
            return new Promise((resolve, reject) => {
              try {
                if (this.workers) {
                  var id = this.nextId++;
                  this.messageManager[id] = [resolve, reject];
                  var nextWorker = this.getNextWorker();
                  if (nextWorker) {
                    nextWorker.postMessage({
                      id,
                      src,
                      premultiplyAlpha,
                      sx,
                      sy,
                      sw,
                      sh
                    });
                  }
                }
              } catch (error) {
                reject(error);
              }
            });
          }
        }
        class ColorTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "type", TextureType.color);
            _defineProperty(this, "props", void 0);
            this.props = ColorTexture.resolveDefaults(props || {});
          }
          get color() {
            return this.props.color;
          }
          set color(color) {
            this.props.color = color;
          }
          getTextureSource() {
            var _this2 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var pixelData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    pixelData = new Uint8Array(4);
                    if (_this2.color === 4294967295) {
                      pixelData[0] = 255;
                      pixelData[1] = 255;
                      pixelData[2] = 255;
                      pixelData[3] = 255;
                    } else {
                      pixelData[0] = _this2.color >> 16 & 255;
                      pixelData[1] = _this2.color >> 8 & 255;
                      pixelData[2] = _this2.color & 255;
                      pixelData[3] = _this2.color >>> 24 & 255;
                    }
                    _this2.setState("fetched", {
                      width: 1,
                      height: 1
                    });
                    return _context2.abrupt("return", {
                      data: pixelData,
                      premultiplyAlpha: true
                    });
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }))();
          }
          static makeCacheKey(props) {
            var resolvedProps = ColorTexture.resolveDefaults(props);
            return `ColorTexture,${resolvedProps.color}`;
          }
          static resolveDefaults(props) {
            return {
              color: props.color || 4294967295
            };
          }
        }
        _defineProperty(ColorTexture, "z$__type__Props", void 0);
        function isCompressedTextureContainer(url) {
          return /\.(ktx|pvr)$/.test(url);
        }
        var loadCompressedTexture = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
            var response, arrayBuffer;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return fetch(url);
                case 2:
                  response = _context3.sent;
                  _context3.next = 5;
                  return response.arrayBuffer();
                case 5:
                  arrayBuffer = _context3.sent;
                  if (!(url.indexOf(".ktx") !== -1)) {
                    _context3.next = 8;
                    break;
                  }
                  return _context3.abrupt("return", loadKTXData(arrayBuffer));
                case 8:
                  return _context3.abrupt("return", loadPVRData(arrayBuffer));
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function loadCompressedTexture(_x2) {
            return _ref3.apply(this, arguments);
          };
        }();
        var loadKTXData = /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(buffer) {
            var view, littleEndian, mipmaps, data, offset, i, imageSize;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  view = new DataView(buffer);
                  littleEndian = view.getUint32(12) === 16909060 ? true : false;
                  mipmaps = [];
                  data = {
                    glInternalFormat: view.getUint32(28, littleEndian),
                    pixelWidth: view.getUint32(36, littleEndian),
                    pixelHeight: view.getUint32(40, littleEndian),
                    numberOfMipmapLevels: view.getUint32(56, littleEndian),
                    bytesOfKeyValueData: view.getUint32(60, littleEndian)
                  };
                  offset = 64;
                  offset += data.bytesOfKeyValueData;
                  for (i = 0; i < data.numberOfMipmapLevels; i++) {
                    imageSize = view.getUint32(offset);
                    offset += 4;
                    mipmaps.push(view.buffer.slice(offset, imageSize));
                    offset += imageSize;
                  }
                  return _context4.abrupt("return", {
                    data: {
                      glInternalFormat: data.glInternalFormat,
                      mipmaps,
                      width: data.pixelWidth || 0,
                      height: data.pixelHeight || 0,
                      type: "ktx"
                    },
                    premultiplyAlpha: false
                  });
                case 8:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return function loadKTXData(_x3) {
            return _ref4.apply(this, arguments);
          };
        }();
        var loadPVRData = /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(buffer) {
            var pvrHeaderLength, pvrFormatEtc1, pvrWidth, pvrHeight, pvrMipmapCount, pvrMetadata, arrayBuffer, header, dataOffset, pvrtcData, mipmaps, data, offset, width, height, i, level, view;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  pvrHeaderLength = 13;
                  pvrFormatEtc1 = 36196;
                  pvrWidth = 7;
                  pvrHeight = 6;
                  pvrMipmapCount = 11;
                  pvrMetadata = 12;
                  arrayBuffer = buffer;
                  header = new Int32Array(arrayBuffer, 0, pvrHeaderLength);
                  dataOffset = header[pvrMetadata] + 52;
                  pvrtcData = new Uint8Array(arrayBuffer, dataOffset);
                  mipmaps = [];
                  data = {
                    pixelWidth: header[pvrWidth],
                    pixelHeight: header[pvrHeight],
                    numberOfMipmapLevels: header[pvrMipmapCount] || 0
                  };
                  offset = 0;
                  width = data.pixelWidth || 0;
                  height = data.pixelHeight || 0;
                  for (i = 0; i < data.numberOfMipmapLevels; i++) {
                    level = (width + 3 >> 2) * (height + 3 >> 2) * 8;
                    view = new Uint8Array(arrayBuffer, pvrtcData.byteOffset + offset, level);
                    mipmaps.push(view);
                    offset += level;
                    width = width >> 1;
                    height = height >> 1;
                  }
                  return _context5.abrupt("return", {
                    data: {
                      glInternalFormat: pvrFormatEtc1,
                      mipmaps,
                      width: data.pixelWidth || 0,
                      height: data.pixelHeight || 0,
                      type: "pvr"
                    },
                    premultiplyAlpha: false
                  });
                case 17:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          return function loadPVRData(_x4) {
            return _ref5.apply(this, arguments);
          };
        }();
        function isSvgImage(url) {
          return /\.(svg)(\?.*)?$/.test(url);
        }
        var loadSvg = (url, width, height, sx, sy, sw, sh) => {
          return new Promise((resolve, reject) => {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            ctx.imageSmoothingEnabled = true;
            var img = new Image();
            img.onload = () => {
              var x = sx !== null && sx !== void 0 ? sx : 0;
              var y = sy !== null && sy !== void 0 ? sy : 0;
              var w = width || img.width;
              var h = height || img.height;
              canvas.width = w;
              canvas.height = h;
              ctx.drawImage(img, 0, 0, w, h);
              resolve({
                data: ctx.getImageData(x, y, sw !== null && sw !== void 0 ? sw : w, sh !== null && sh !== void 0 ? sh : h),
                premultiplyAlpha: false
              });
            };
            img.onerror = err => {
              reject(err);
            };
            img.src = url;
          });
        };
        function fetchJson(url) {
          var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = responseType;
            xhr.onreadystatechange = function () {
              if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status === 0 || xhr.status === 200) {
                  resolve(xhr.response);
                } else {
                  reject(xhr.statusText);
                }
              }
            };
            xhr.open("GET", url, true);
            xhr.send(null);
          });
        }
        class ImageTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            _defineProperty(this, "type", TextureType.image);
            this.props = ImageTexture.resolveDefaults(props);
          }
          hasAlphaChannel(mimeType) {
            return mimeType.indexOf("image/png") !== -1;
          }
          loadImageFallback(src, hasAlpha) {
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var img;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    img = new Image();
                    if (isBase64Image(src) === false) {
                      img.crossOrigin = "anonymous";
                    }
                    return _context6.abrupt("return", new Promise(resolve => {
                      img.onload = () => {
                        resolve({
                          data: img,
                          premultiplyAlpha: hasAlpha
                        });
                      };
                      img.onerror = () => {
                        console.warn("Image loading failed, returning fallback object.");
                        resolve({
                          data: img,
                          premultiplyAlpha: hasAlpha
                        });
                      };
                      img.src = src;
                    }));
                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }))();
          }
          createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh) {
            var _this3 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var hasAlphaChannel, imageBitmapSupported, bitmap2, bitmap;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    hasAlphaChannel = premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : blob.type.includes("image/png");
                    imageBitmapSupported = _this3.txManager.imageBitmapSupported;
                    if (!(imageBitmapSupported.full === true && sw !== null && sh !== null)) {
                      _context7.next = 9;
                      break;
                    }
                    _context7.next = 5;
                    return createImageBitmap(blob, sx || 0, sy || 0, sw, sh, {
                      premultiplyAlpha: hasAlphaChannel ? "premultiply" : "none",
                      colorSpaceConversion: "none",
                      imageOrientation: "none"
                    });
                  case 5:
                    bitmap2 = _context7.sent;
                    return _context7.abrupt("return", {
                      data: bitmap2,
                      premultiplyAlpha: hasAlphaChannel
                    });
                  case 9:
                    if (!(imageBitmapSupported.basic === true)) {
                      _context7.next = 15;
                      break;
                    }
                    _context7.next = 12;
                    return createImageBitmap(blob);
                  case 12:
                    _context7.t0 = _context7.sent;
                    _context7.t1 = hasAlphaChannel;
                    return _context7.abrupt("return", {
                      data: _context7.t0,
                      premultiplyAlpha: _context7.t1
                    });
                  case 15:
                    _context7.next = 17;
                    return createImageBitmap(blob, {
                      premultiplyAlpha: hasAlphaChannel ? "premultiply" : "none",
                      colorSpaceConversion: "none",
                      imageOrientation: "none"
                    });
                  case 17:
                    bitmap = _context7.sent;
                    return _context7.abrupt("return", {
                      data: bitmap,
                      premultiplyAlpha: hasAlphaChannel
                    });
                  case 19:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }))();
          }
          loadImage(src) {
            var _this4 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this4$props, premultiplyAlpha, sx, sy, sw, sh, blob;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _this4$props = _this4.props, premultiplyAlpha = _this4$props.premultiplyAlpha, sx = _this4$props.sx, sy = _this4$props.sy, sw = _this4$props.sw, sh = _this4$props.sh;
                    if (!(_this4.txManager.hasCreateImageBitmap === true)) {
                      _context8.next = 8;
                      break;
                    }
                    if (!(isBase64Image(src) === false && _this4.txManager.hasWorker === true && _this4.txManager.imageWorkerManager !== null)) {
                      _context8.next = 4;
                      break;
                    }
                    return _context8.abrupt("return", _this4.txManager.imageWorkerManager.getImage(src, premultiplyAlpha, sx, sy, sw, sh));
                  case 4:
                    _context8.next = 6;
                    return fetchJson(src, "blob").then(response => response);
                  case 6:
                    blob = _context8.sent;
                    return _context8.abrupt("return", _this4.createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh));
                  case 8:
                    return _context8.abrupt("return", _this4.loadImageFallback(src, premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : true));
                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }))();
          }
          getTextureSource() {
            var _this5 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this5$props$premulti;
              var resp, width, height, _this5$props$width, _this5$props$height, _resp$data$width, _resp$data, _resp$data$height, _resp$data2;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return _this5.determineImageTypeAndLoadImage();
                  case 3:
                    resp = _context9.sent;
                    _context9.next = 10;
                    break;
                  case 6:
                    _context9.prev = 6;
                    _context9.t0 = _context9["catch"](0);
                    _this5.setState("failed", _context9.t0);
                    return _context9.abrupt("return", {
                      data: null
                    });
                  case 10:
                    if (!(resp.data === null)) {
                      _context9.next = 13;
                      break;
                    }
                    _this5.setState("failed", Error("ImageTexture: No image data"));
                    return _context9.abrupt("return", {
                      data: null
                    });
                  case 13:
                    if (resp.data instanceof Uint8Array) {
                      width = (_this5$props$width = _this5.props.width) !== null && _this5$props$width !== void 0 ? _this5$props$width : 0;
                      height = (_this5$props$height = _this5.props.height) !== null && _this5$props$height !== void 0 ? _this5$props$height : 0;
                    } else {
                      width = (_resp$data$width = (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.width) !== null && _resp$data$width !== void 0 ? _resp$data$width : _this5.props.width || 0;
                      height = (_resp$data$height = (_resp$data2 = resp.data) === null || _resp$data2 === void 0 ? void 0 : _resp$data2.height) !== null && _resp$data$height !== void 0 ? _resp$data$height : _this5.props.height || 0;
                    }
                    _this5.setState("fetched", {
                      width,
                      height
                    });
                    return _context9.abrupt("return", {
                      data: resp.data,
                      premultiplyAlpha: (_this5$props$premulti = _this5.props.premultiplyAlpha) !== null && _this5$props$premulti !== void 0 ? _this5$props$premulti : true
                    });
                  case 16:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, null, [[0, 6]]);
            }))();
          }
          determineImageTypeAndLoadImage() {
            var _this$props4 = this.props,
              src = _this$props4.src,
              premultiplyAlpha = _this$props4.premultiplyAlpha,
              type = _this$props4.type;
            if (src === null) {
              return {
                data: null
              };
            }
            if (typeof src !== "string") {
              if (src instanceof ImageData) {
                return {
                  data: src,
                  premultiplyAlpha
                };
              }
              return {
                data: src(),
                premultiplyAlpha
              };
            }
            var absoluteSrc = convertUrlToAbsolute(src);
            if (type === "regular") {
              return this.loadImage(absoluteSrc);
            }
            if (type === "svg") {
              return loadSvg(absoluteSrc, this.props.width, this.props.height, this.props.sx, this.props.sy, this.props.sw, this.props.sh);
            }
            if (isSvgImage(src) === true) {
              return loadSvg(absoluteSrc, this.props.width, this.props.height, this.props.sx, this.props.sy, this.props.sw, this.props.sh);
            }
            if (type === "compressed") {
              return loadCompressedTexture(absoluteSrc);
            }
            if (isCompressedTextureContainer(src) === true) {
              return loadCompressedTexture(absoluteSrc);
            }
            return this.loadImage(absoluteSrc);
          }
          /**
           * Generates a cache key for the ImageTexture based on the provided props.
           * @param props - The props used to generate the cache key.
           * @returns The cache key as a string, or `false` if the key cannot be generated.
           */
          static makeCacheKey(props) {
            var _resolvedProps$premul;
            var resolvedProps = ImageTexture.resolveDefaults(props);
            var key = resolvedProps.key || resolvedProps.src;
            if (typeof key !== "string") {
              return false;
            }
            var dimensionProps = "";
            if (resolvedProps.sh !== null && resolvedProps.sw !== null) {
              var _resolvedProps$sx, _resolvedProps$sy;
              dimensionProps += ",";
              dimensionProps += (_resolvedProps$sx = resolvedProps.sx) !== null && _resolvedProps$sx !== void 0 ? _resolvedProps$sx : "";
              dimensionProps += (_resolvedProps$sy = resolvedProps.sy) !== null && _resolvedProps$sy !== void 0 ? _resolvedProps$sy : "";
              dimensionProps += resolvedProps.sw || "";
              dimensionProps += resolvedProps.sh || "";
            }
            return `ImageTexture,${key},${(_resolvedProps$premul = resolvedProps.premultiplyAlpha) !== null && _resolvedProps$premul !== void 0 ? _resolvedProps$premul : "true"}${dimensionProps}`;
          }
          static resolveDefaults(props) {
            var _props$src, _props$premultiplyAlp, _props$key, _props$type, _props$width, _props$height, _props$sx, _props$sy, _props$sw, _props$sh;
            return {
              src: (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : "",
              premultiplyAlpha: (_props$premultiplyAlp = props.premultiplyAlpha) !== null && _props$premultiplyAlp !== void 0 ? _props$premultiplyAlp : true,
              // null,
              key: (_props$key = props.key) !== null && _props$key !== void 0 ? _props$key : null,
              type: (_props$type = props.type) !== null && _props$type !== void 0 ? _props$type : null,
              width: (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : null,
              height: (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : null,
              sx: (_props$sx = props.sx) !== null && _props$sx !== void 0 ? _props$sx : null,
              sy: (_props$sy = props.sy) !== null && _props$sy !== void 0 ? _props$sy : null,
              sw: (_props$sw = props.sw) !== null && _props$sw !== void 0 ? _props$sw : null,
              sh: (_props$sh = props.sh) !== null && _props$sh !== void 0 ? _props$sh : null
            };
          }
        }
        _defineProperty(ImageTexture, "z$__type__Props", void 0);
        class NoiseTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            _defineProperty(this, "type", TextureType.noise);
            this.props = NoiseTexture.resolveDefaults(props);
          }
          getTextureSource() {
            var _this6 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this6$props, width, height, size, pixelData8, i, v;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _this6$props = _this6.props, width = _this6$props.width, height = _this6$props.height;
                    size = width * height * 4;
                    pixelData8 = new Uint8ClampedArray(size);
                    for (i = 0; i < size; i += 4) {
                      v = Math.floor(Math.random() * 256);
                      pixelData8[i] = v;
                      pixelData8[i + 1] = v;
                      pixelData8[i + 2] = v;
                      pixelData8[i + 3] = 255;
                    }
                    _this6.setState("fetched");
                    return _context10.abrupt("return", {
                      data: new ImageData(pixelData8, width, height)
                    });
                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10);
            }))();
          }
          static makeCacheKey(props) {
            if (props.cacheId === undefined) {
              return false;
            }
            var resolvedProps = NoiseTexture.resolveDefaults(props);
            return `NoiseTexture,${resolvedProps.width},${resolvedProps.height},${resolvedProps.cacheId}`;
          }
          static resolveDefaults(props) {
            var _props$width2, _props$height2, _props$cacheId;
            return {
              width: (_props$width2 = props.width) !== null && _props$width2 !== void 0 ? _props$width2 : 128,
              height: (_props$height2 = props.height) !== null && _props$height2 !== void 0 ? _props$height2 : 128,
              cacheId: (_props$cacheId = props.cacheId) !== null && _props$cacheId !== void 0 ? _props$cacheId : 0
            };
          }
        }
        _defineProperty(NoiseTexture, "z$__type__Props", void 0);
        class SubTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            _defineProperty(this, "parentTexture", void 0);
            _defineProperty(this, "type", TextureType.subTexture);
            _defineProperty(this, "onParentTxLoaded", () => {
              this.forwardParentTxState("loaded", {
                width: this.props.width,
                height: this.props.height
              });
            });
            _defineProperty(this, "onParentTxFailed", (target, error) => {
              this.forwardParentTxState("failed", error);
            });
            _defineProperty(this, "onParentTxFetched", () => {
              this.forwardParentTxState("fetched", {
                width: this.props.width,
                height: this.props.height
              });
            });
            _defineProperty(this, "onParentTxFetching", () => {
              this.forwardParentTxState("fetching");
            });
            _defineProperty(this, "onParentTxLoading", () => {
              this.forwardParentTxState("loading");
            });
            _defineProperty(this, "onParentTxFreed", () => {
              this.forwardParentTxState("freed");
            });
            this.props = SubTexture.resolveDefaults(props || {});
            assertTruthy(this.props.texture);
            assertTruthy(this.props.texture instanceof ImageTexture);
            this.parentTexture = txManager.resolveParentTexture(this.props.texture);
            if (this.renderableOwners.size > 0) {
              this.parentTexture.setRenderableOwner(this, true);
            }
            queueMicrotask(() => {
              var parentTx = this.parentTexture;
              if (parentTx.state === "loaded") {
                this.onParentTxLoaded(parentTx, parentTx.dimensions);
              } else if (parentTx.state === "fetching") {
                this.onParentTxFetching();
              } else if (parentTx.state === "fetched") {
                this.onParentTxFetched();
              } else if (parentTx.state === "loading") {
                this.onParentTxLoading();
              } else if (parentTx.state === "failed") {
                this.onParentTxFailed(parentTx, parentTx.error);
              } else if (parentTx.state === "freed") {
                this.onParentTxFreed();
              }
              parentTx.on("fetched", this.onParentTxFetched);
              parentTx.on("loading", this.onParentTxLoading);
              parentTx.on("fetching", this.onParentTxFetching);
              parentTx.on("loaded", this.onParentTxLoaded);
              parentTx.on("failed", this.onParentTxFailed);
              parentTx.on("freed", this.onParentTxFreed);
            });
          }
          forwardParentTxState(state, errorOrDimensions) {
            this.setState(state, errorOrDimensions);
          }
          onChangeIsRenderable(isRenderable) {
            this.parentTexture.setRenderableOwner(this, isRenderable);
          }
          getTextureSource() {
            var _this7 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    return _context11.abrupt("return", new Promise((resolve, reject) => {
                      _this7.setState("fetched");
                      resolve({
                        data: _this7.props
                      });
                    }));
                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }))();
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          static makeCacheKey(props) {
            return false;
          }
          static resolveDefaults(props) {
            return {
              texture: props.texture,
              x: props.x || 0,
              y: props.y || 0,
              width: props.width || 0,
              height: props.height || 0
            };
          }
        }
        _defineProperty(SubTexture, "z$__type__Props", void 0);
        class RenderTexture extends Texture {
          constructor(txManager, props) {
            super(txManager);
            _defineProperty(this, "props", void 0);
            _defineProperty(this, "type", TextureType.renderToTexture);
            this.props = RenderTexture.resolveDefaults(props || {});
          }
          get width() {
            return this.props.width;
          }
          set width(value) {
            this.props.width = value;
          }
          get height() {
            return this.props.height;
          }
          set height(value) {
            this.props.height = value;
          }
          getTextureSource() {
            var _this8 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    _this8.setState("fetched");
                    return _context12.abrupt("return", {
                      data: null,
                      premultiplyAlpha: null
                    });
                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12);
            }))();
          }
          static resolveDefaults(props) {
            return {
              width: props.width || 256,
              height: props.height || 256
            };
          }
        }
        _defineProperty(RenderTexture, "z$__type__Props", void 0);
        function validateCreateImageBitmap() {
          return _validateCreateImageBitmap.apply(this, arguments);
        }
        function _validateCreateImageBitmap() {
          _validateCreateImageBitmap = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
            var _bitmap$close;
            var pngBinaryData, support, blob, bitmap, _bitmapWithOptions$cl, options, bitmapWithOptions, _bitmapWithFullOption, bitmapWithFullOptions;
            return _regeneratorRuntime().wrap(function _callee21$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
                case 0:
                  pngBinaryData = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10,
                  // PNG signature
                  0, 0, 0, 13,
                  // IHDR chunk length
                  73, 72, 68, 82,
                  // "IHDR" chunk type
                  0, 0, 0, 1,
                  // Width: 1
                  0, 0, 0, 1,
                  // Height: 1
                  1,
                  // Bit depth: 1
                  3,
                  // Color type: Indexed
                  0,
                  // Compression method: Deflate
                  0,
                  // Filter method: None
                  0,
                  // Interlace method: None
                  37, 219, 86, 202,
                  // CRC for IHDR
                  0, 0, 0, 3,
                  // PLTE chunk length
                  80, 76, 84, 69,
                  // "PLTE" chunk type
                  0, 0, 0,
                  // Palette entry: Black
                  167, 122, 61, 218,
                  // CRC for PLTE
                  0, 0, 0, 1,
                  // tRNS chunk length
                  116, 82, 78, 83,
                  // "tRNS" chunk type
                  0,
                  // Transparency for black: Fully transparent
                  64, 230, 216, 102,
                  // CRC for tRNS
                  0, 0, 0, 10,
                  // IDAT chunk length
                  73, 68, 65, 84,
                  // "IDAT" chunk type
                  8, 215,
                  // Deflate header
                  99, 96, 0, 0, 0, 2, 0, 1,
                  // Zlib-compressed data
                  226, 33, 188, 51,
                  // CRC for IDAT
                  0, 0, 0, 0,
                  // IEND chunk length
                  73, 69, 78, 68,
                  // "IEND" chunk type
                  174, 66, 96, 130
                  // CRC for IEND
                  ]);
                  support = {
                    basic: false,
                    options: false,
                    full: false
                  };
                  blob = new Blob([pngBinaryData], {
                    type: "image/png"
                  });
                  _context21.next = 5;
                  return createImageBitmap(blob);
                case 5:
                  bitmap = _context21.sent;
                  (_bitmap$close = bitmap.close) === null || _bitmap$close === void 0 || _bitmap$close.call(bitmap);
                  support.basic = true;
                  _context21.prev = 8;
                  options = {
                    premultiplyAlpha: "none"
                  };
                  _context21.next = 12;
                  return createImageBitmap(blob, options);
                case 12:
                  bitmapWithOptions = _context21.sent;
                  (_bitmapWithOptions$cl = bitmapWithOptions.close) === null || _bitmapWithOptions$cl === void 0 || _bitmapWithOptions$cl.call(bitmapWithOptions);
                  support.options = true;
                  _context21.next = 19;
                  break;
                case 17:
                  _context21.prev = 17;
                  _context21.t0 = _context21["catch"](8);
                case 19:
                  _context21.prev = 19;
                  _context21.next = 22;
                  return createImageBitmap(blob, 0, 0, 1, 1, {
                    premultiplyAlpha: "none"
                  });
                case 22:
                  bitmapWithFullOptions = _context21.sent;
                  (_bitmapWithFullOption = bitmapWithFullOptions.close) === null || _bitmapWithFullOption === void 0 || _bitmapWithFullOption.call(bitmapWithFullOptions);
                  support.full = true;
                  _context21.next = 29;
                  break;
                case 27:
                  _context21.prev = 27;
                  _context21.t1 = _context21["catch"](19);
                case 29:
                  return _context21.abrupt("return", support);
                case 30:
                case "end":
                  return _context21.stop();
              }
            }, _callee21, null, [[8, 17], [19, 27]]);
          }));
          return _validateCreateImageBitmap.apply(this, arguments);
        }
        class CoreTextureManager extends EventEmitter {
          constructor(stage, settings) {
            super();
            /**
             * Map of textures by cache key
             */
            _defineProperty(this, "keyCache", /* @__PURE__ */new Map());
            /**
             * Map of cache keys by texture
             */
            _defineProperty(this, "inverseKeyCache", /* @__PURE__ */new WeakMap());
            /**
             * Map of texture constructors by their type name
             */
            _defineProperty(this, "txConstructors", {});
            _defineProperty(this, "downloadTextureSourceQueue", []);
            _defineProperty(this, "priorityQueue", []);
            _defineProperty(this, "uploadTextureQueue", []);
            _defineProperty(this, "initialized", false);
            _defineProperty(this, "stage", void 0);
            _defineProperty(this, "numImageWorkers", void 0);
            _defineProperty(this, "imageWorkerManager", null);
            _defineProperty(this, "hasCreateImageBitmap", !!self.createImageBitmap);
            _defineProperty(this, "imageBitmapSupported", {
              basic: false,
              options: false,
              full: false
            });
            _defineProperty(this, "hasWorker", !!self.Worker);
            /**
             * Renderer that this texture manager is associated with
             *
             * @remarks
             * This MUST be set before the texture manager is used. Otherwise errors
             * will occur when using the texture manager.
             */
            _defineProperty(this, "renderer", void 0);
            /**
             * The current frame time in milliseconds
             *
             * @remarks
             * This is used to populate the `lastRenderableChangeTime` property of
             * {@link Texture} instances when their renderable state changes.
             *
             * Set by stage via `updateFrameTime` method.
             */
            _defineProperty(this, "frameTime", 0);
            var numImageWorkers = settings.numImageWorkers,
              createImageBitmapSupport = settings.createImageBitmapSupport;
            this.stage = stage;
            this.numImageWorkers = numImageWorkers;
            if (createImageBitmapSupport === "auto") {
              validateCreateImageBitmap().then(result => {
                this.initialize(result);
              }).catch(e => {
                console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
                this.initialized = true;
                this.emit("initialized");
              });
            } else {
              this.initialize({
                basic: createImageBitmapSupport === "basic",
                options: createImageBitmapSupport === "options",
                full: createImageBitmapSupport === "full"
              });
            }
            this.registerTextureType("ImageTexture", ImageTexture);
            this.registerTextureType("ColorTexture", ColorTexture);
            this.registerTextureType("NoiseTexture", NoiseTexture);
            this.registerTextureType("SubTexture", SubTexture);
            this.registerTextureType("RenderTexture", RenderTexture);
          }
          registerTextureType(textureType, textureClass) {
            this.txConstructors[textureType] = textureClass;
          }
          initialize(support) {
            this.hasCreateImageBitmap = support.basic || support.options || support.full;
            this.imageBitmapSupported = support;
            if (!this.hasCreateImageBitmap) {
              console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
            }
            if (this.hasCreateImageBitmap && this.hasWorker && this.numImageWorkers > 0) {
              this.imageWorkerManager = new ImageWorkerManager(this.numImageWorkers, support);
            } else {
              console.warn("[Lightning] Imageworker is 0 or not supported on this browser. Image loading will be slower.");
            }
            this.initialized = true;
            this.emit("initialized");
          }
          /**
           * Enqueue a texture for downloading its source image.
           */
          enqueueDownloadTextureSource(texture) {
            if (!this.downloadTextureSourceQueue.includes(texture)) {
              this.downloadTextureSourceQueue.push(texture);
            }
          }
          /**
           * Enqueue a texture for uploading to the GPU.
           *
           * @param texture - The texture to upload
           */
          enqueueUploadTexture(texture) {
            if (this.uploadTextureQueue.includes(texture) === false) {
              this.uploadTextureQueue.push(texture);
            }
          }
          /**
           * Create a texture
           *
           * @param textureType - The type of texture to create
           * @param props - The properties to use for the texture
           */
          createTexture(textureType, props) {
            var texture;
            var TextureClass = this.txConstructors[textureType];
            if (!TextureClass) {
              throw new Error(`Texture type "${textureType}" is not registered`);
            }
            var cacheKey = TextureClass.makeCacheKey(props);
            if (cacheKey && this.keyCache.has(cacheKey)) {
              texture = this.keyCache.get(cacheKey);
            } else {
              texture = new TextureClass(this, props);
              if (cacheKey) {
                this.initTextureToCache(texture, cacheKey);
              }
            }
            return texture;
          }
          orphanTexture(texture) {
            this.removeTextureFromQueue(texture);
            if (texture.type === TextureType.subTexture) {
              return;
            }
            this.stage.txMemManager.addToOrphanedTextures(texture);
          }
          /**
           * Override loadTexture to use the batched approach.
           *
           * @param texture - The texture to load
           * @param immediate - Whether to prioritize the texture for immediate loading
           */
          loadTexture(texture, priority) {
            this.stage.txMemManager.removeFromOrphanedTextures(texture);
            if (texture.type === TextureType.subTexture) {
              return;
            }
            if (texture.ctxTexture !== undefined && texture.ctxTexture.state === "loaded") {
              texture.setState("loaded");
              return;
            }
            if (this.downloadTextureSourceQueue.includes(texture) === true || this.uploadTextureQueue.includes(texture) === true) {
              return;
            }
            if (texture.ctxTexture !== undefined && texture.ctxTexture.state === "loading") {
              if (texture.textureData !== null) {
                this.enqueueUploadTexture(texture);
              }
              texture.free();
            }
            if (this.initialized === false) {
              this.priorityQueue.push(texture);
              return;
            }
            if ((texture.type === TextureType.color || texture.type === TextureType.renderToTexture) && texture.state !== "initial") {
              texture.setState("fetched");
              this.enqueueUploadTexture(texture);
              return;
            }
            texture.setState("loading");
            if (priority === true) {
              texture.getTextureData().then(() => {
                this.uploadTexture(texture);
              }).catch(err => {
                console.error(err);
              });
            }
            this.enqueueDownloadTextureSource(texture);
          }
          /**
           * Upload a texture to the GPU
           *
           * @param texture Texture to upload
           */
          uploadTexture(texture) {
            if (this.stage.txMemManager.doNotExceedCriticalThreshold === true && this.stage.txMemManager.criticalCleanupRequested === true) {
              this.enqueueUploadTexture(texture);
              return;
            }
            var coreContext = texture.loadCtxTexture();
            if (coreContext !== null && coreContext.state === "loaded") {
              texture.setState("loaded");
              return;
            }
            coreContext.load();
          }
          /**
           * Check if a texture is being processed
           */
          isProcessingTexture(texture) {
            return this.downloadTextureSourceQueue.includes(texture) === true || this.uploadTextureQueue.includes(texture) === true;
          }
          /**
           * Process a limited number of downloads and uploads.
           *
           * @param maxItems - The maximum number of items to process
           */
          processSome(maxProcessingTime) {
            var _this9 = this;
            if (this.initialized === false) {
              return;
            }
            var startTime = getTimeStamp();
            var _loop = function _loop() {
              var texture = _this9.priorityQueue.pop();
              texture.getTextureData().then(() => {
                _this9.uploadTexture(texture);
              });
            };
            while (this.priorityQueue.length > 0 && getTimeStamp() - startTime < maxProcessingTime) {
              _loop();
            }
            while (this.uploadTextureQueue.length > 0 && getTimeStamp() - startTime < maxProcessingTime) {
              this.uploadTexture(this.uploadTextureQueue.pop());
            }
            var _loop2 = function _loop2() {
              var texture = _this9.downloadTextureSourceQueue.shift();
              texture.getTextureData().then(() => {
                if (texture.state === "fetched") {
                  _this9.enqueueUploadTexture(texture);
                }
              });
            };
            while (this.downloadTextureSourceQueue.length > 0 && getTimeStamp() - startTime < maxProcessingTime) {
              _loop2();
            }
          }
          hasUpdates() {
            return this.downloadTextureSourceQueue.length > 0 || this.uploadTextureQueue.length > 0;
          }
          /**
           * Initialize a texture to the cache
           *
           * @param texture Texture to cache
           * @param cacheKey Cache key for the texture
           */
          initTextureToCache(texture, cacheKey) {
            var keyCache = this.keyCache,
              inverseKeyCache = this.inverseKeyCache;
            keyCache.set(cacheKey, texture);
            inverseKeyCache.set(texture, cacheKey);
          }
          /**
           * Get a texture from the cache
           *
           * @param cacheKey
           */
          getTextureFromCache(cacheKey) {
            return this.keyCache.get(cacheKey);
          }
          /**
           * Remove a texture from the cache
           *
           * @remarks
           * Called by Texture Cleanup when a texture is freed.
           *
           * @param texture
           */
          removeTextureFromCache(texture) {
            var inverseKeyCache = this.inverseKeyCache,
              keyCache = this.keyCache;
            var cacheKey = inverseKeyCache.get(texture);
            if (cacheKey) {
              keyCache.delete(cacheKey);
            }
          }
          /**
           * Remove texture from the queue's
           *
           * @param texture - The texture to remove
           */
          removeTextureFromQueue(texture) {
            var downloadIndex = this.downloadTextureSourceQueue.indexOf(texture);
            if (downloadIndex !== -1) {
              this.downloadTextureSourceQueue.splice(downloadIndex, 1);
            }
            var uploadIndex = this.uploadTextureQueue.indexOf(texture);
            if (uploadIndex !== -1) {
              this.uploadTextureQueue.splice(uploadIndex, 1);
            }
          }
          /**
           * Resolve a parent texture from the cache or fallback to the provided texture.
           *
           * @param texture - The provided texture to resolve.
           * @returns The cached or provided texture.
           */
          resolveParentTexture(texture) {
            if (!(texture !== null && texture !== void 0 && texture.props)) {
              return texture;
            }
            var cacheKey = ImageTexture.makeCacheKey(texture.props);
            var cachedTexture = cacheKey ? this.getTextureFromCache(cacheKey) : undefined;
            return cachedTexture !== null && cachedTexture !== void 0 ? cachedTexture : texture;
          }
        }
        var weightConversions = {
          normal: 400,
          bold: 700,
          bolder: 900,
          lighter: 100
        };
        var fontWeightToNumber = weight => {
          if (typeof weight === "number") {
            return weight;
          }
          return weightConversions[weight] || 400;
        };
        function resolveFontToUse(familyMapsByPriority, family, weightIn, style, stretch) {
          var weight = fontWeightToNumber(weightIn);
          var _iterator8 = _createForOfIteratorHelper(familyMapsByPriority),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var fontFamiles = _step8.value;
              var fontFaces = fontFamiles[family];
              if (!fontFaces) {
                continue;
              }
              if (fontFaces.size === 1) {
                console.warn(`TrFontManager: Only one font face found for family: '${family}' - will be used for all weights and styles`);
                return fontFaces.values().next().value;
              }
              var weightMap = /* @__PURE__ */new Map();
              var _iterator9 = _createForOfIteratorHelper(fontFaces),
                _step9;
              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var fontFace = _step9.value;
                  var fontFamilyWeight = fontWeightToNumber(fontFace.descriptors.weight);
                  if (fontFamilyWeight === weight && fontFace.descriptors.style === style && fontFace.descriptors.stretch === stretch) {
                    return fontFace;
                  }
                  weightMap.set(fontFamilyWeight, fontFace);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
              var msg = `TrFontManager: No exact match: '${family} Weight: ${weight} Style: ${style} Stretch: ${stretch}'`;
              console.error(msg);
              if (weight === 400 && weightMap.has(500)) {
                return weightMap.get(500);
              }
              if (weight === 500 && weightMap.has(400)) {
                return weightMap.get(400);
              }
              if (weight < 400) {
                while (weight > 0) {
                  if (weightMap.has(weight)) {
                    return weightMap.get(weight);
                  }
                  weight -= 100;
                }
                weight = 600;
              }
              while (weight < 1e3) {
                if (weightMap.has(weight)) {
                  return weightMap.get(weight);
                }
                weight += 100;
              }
              weight = 500;
              while (weight > 0) {
                if (weightMap.has(weight)) {
                  return weightMap.get(weight);
                }
                weight -= 100;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          return;
        }
        class TrFontManager {
          constructor(textRenderers) {
            _defineProperty(this, "fontCache", /* @__PURE__ */new Map());
            this.textRenderers = textRenderers;
          }
          addFontFace(font) {
            for (var trId in this.textRenderers) {
              var tr = this.textRenderers[trId];
              if (tr && tr.isFontFaceSupported(font)) {
                tr.addFontFace(font);
              }
            }
          }
          /**
           * Utility method to resolve a single font face from a list of prioritized family maps based on
           * a set of font properties.
           *
           * @remarks
           * These are to be used by a text renderer to resolve a font face if needed.
           *
           * @param familyMapsByPriority
           * @param props
           * @returns
           */
          resolveFontFace(familyMapsByPriority, props, rendererType) {
            var fontFamily = props.fontFamily,
              fontWeight = props.fontWeight,
              fontStyle = props.fontStyle,
              fontStretch = props.fontStretch;
            var fontCacheString = `${rendererType}_${fontFamily}_${fontStyle}_${fontWeight}_${fontStretch}`;
            if (this.fontCache.has(fontCacheString) === true) {
              return this.fontCache.get(fontCacheString);
            }
            var resolvedFont = resolveFontToUse(familyMapsByPriority, fontFamily, fontWeight, fontStyle, fontStretch);
            if (resolvedFont !== undefined) {
              this.fontCache.set(fontCacheString, resolvedFont);
            }
            return resolvedFont;
          }
        }
        function isAdvancedShaderProp(obj) {
          return obj !== null && _typeof(obj) === "object" && obj.default !== undefined;
        }
        function resolveShaderProps(props, propsConfig) {
          for (var _key7 in propsConfig) {
            if (!isAdvancedShaderProp(propsConfig[_key7]) && props[_key7] === undefined) {
              props[_key7] = propsConfig[_key7];
              continue;
            }
            var pConfig = propsConfig[_key7];
            var hasValue = props[_key7] !== undefined;
            if (pConfig.resolve !== undefined) {
              props[_key7] = pConfig.resolve(props[_key7], props);
              continue;
            }
            if (hasValue && pConfig.set !== undefined) {
              pConfig.set(props[_key7], props);
              continue;
            }
            if (hasValue) {
              continue;
            }
            if (props[_key7] === undefined && pConfig.get === undefined) {
              props[_key7] = deepClone(pConfig.default);
              continue;
            }
            props[_key7] = pConfig.get(props);
          }
        }
        class CoreShaderNode {
          constructor(shaderKey, type, stage, props) {
            _defineProperty(this, "stage", void 0);
            _defineProperty(this, "shaderType", void 0);
            _defineProperty(this, "propsConfig", void 0);
            _defineProperty(this, "resolvedProps", undefined);
            _defineProperty(this, "definedProps", undefined);
            _defineProperty(this, "node", null);
            _defineProperty(this, "update", undefined);
            this.shaderKey = shaderKey;
            this.stage = stage;
            this.shaderType = type;
            if (props !== undefined) {
              this.resolvedProps = props;
              this.defineProps(props);
            }
          }
          defineProps(props) {
            var _this10 = this;
            var definedProps = {};
            var _loop3 = function _loop3(_key8) {
              var propConfig = _this10.shaderType.props[_key8];
              var isAdvancedProp = isAdvancedShaderProp(propConfig);
              Object.defineProperty(definedProps, _key8, {
                get: () => {
                  return _this10.resolvedProps[_key8];
                },
                set: value => {
                  if (isAdvancedProp === true && propConfig.resolve !== undefined) {
                    _this10.resolvedProps[_key8] = propConfig.resolve(value, _this10.resolvedProps);
                  } else if (isAdvancedProp === true && propConfig.set !== undefined) {
                    propConfig.set(value, _this10.resolvedProps);
                  } else {
                    _this10.resolvedProps[_key8] = value;
                  }
                  if (_this10.update !== undefined && _this10.node !== null) {
                    _this10.node.setUpdateType(UpdateType.RecalcUniforms);
                  } else {
                    _this10.stage.requestRender();
                  }
                }
              });
            };
            for (var _key8 in props) {
              _loop3(_key8);
            }
            this.definedProps = definedProps;
          }
          attachNode(node) {
            this.node = node;
          }
          getResolvedProps() {
            return this.resolvedProps;
          }
          get props() {
            return this.definedProps;
          }
          set props(props) {
            if (props === undefined) {
              return;
            }
            for (var _key9 in props) {
              this.props[_key9] = props[_key9];
            }
          }
        }
        class CoreShaderManager {
          constructor(stage) {
            _defineProperty(this, "shTypes", {});
            _defineProperty(this, "shCache", /* @__PURE__ */new Map());
            /**
             * valuesCache is used to store calculations that can be shared between shader nodes.
             */
            _defineProperty(this, "valuesCache", /* @__PURE__ */new Map());
            _defineProperty(this, "valuesCacheUsage", /* @__PURE__ */new Map());
            _defineProperty(this, "attachedShader", null);
            this.stage = stage;
          }
          registerShaderType(name, shType) {
            if (this.shTypes[name] !== undefined) {
              console.warn(`ShaderType already exists with the name: ${name}. Breaking off registration.`);
              return;
            }
            if (this.stage.renderer.supportsShaderType(shType) === false) {
              console.warn(`The renderer being used does not support this shader type. Breaking off registration.`);
              return;
            }
            this.shTypes[name] = deepClone(shType);
          }
          /**
           * Loads a shader (if not already loaded) and returns a controller for it.
           *
           * @param shType
           * @param props
           * @returns
           */
          createShader(name, props) {
            var shType = this.shTypes[name];
            if (shType === undefined) {
              console.warn(`ShaderType not found falling back on renderer default shader`);
              return this.stage.defShaderNode;
            }
            var shaderKey = name;
            if (shType.props !== undefined) {
              props = props || {};
              resolveShaderProps(props, shType.props);
              if (shType.getCacheMarkers !== undefined) {
                shaderKey += `-${shType.getCacheMarkers(props)}`;
              }
            }
            if (this.stage.renderer.mode === "canvas") {
              return this.stage.renderer.createShaderNode(shaderKey, shType, props);
            }
            var shProgram = this.shCache.get(shaderKey);
            if (shProgram === undefined) {
              shProgram = this.stage.renderer.createShaderProgram(shType, props);
              this.shCache.set(shaderKey, shProgram);
            }
            return this.stage.renderer.createShaderNode(shaderKey, shType, props, shProgram);
          }
          mutateShaderValueUsage(key, mutation) {
            var usage = this.valuesCacheUsage.get(key) || 0;
            this.valuesCacheUsage.set(key, usage + mutation);
          }
          getShaderValues(key) {
            var values = this.valuesCache.get(key);
            if (values === undefined) {
              return undefined;
            }
            this.mutateShaderValueUsage(key, 1);
            return values;
          }
          setShaderValues(key, values) {
            this.valuesCache.set(key, values);
            this.mutateShaderValueUsage(key, 1);
          }
          cleanup() {
            var values = [...this.valuesCacheUsage.entries()].sort((entryA, entryB) => {
              if (entryA[1] < entryB[1]) {
                return -1;
              } else if (entryA[1] > entryB[1]) {
                return 1;
              }
              return 0;
            });
            for (var i = 0; i < values.length; i++) {
              if (values[i][1] > 0) {
                break;
              }
              this.valuesCacheUsage.delete(values[i][0]);
              this.valuesCache.delete(values[i][0]);
            }
          }
          useShader(shader) {
            if (this.attachedShader === shader) {
              return;
            }
            if (this.attachedShader && this.attachedShader.detach) {
              this.attachedShader.detach();
            }
            if (shader.attach) {
              shader.attach();
            }
            this.attachedShader = shader;
          }
        }
        var trPropSetterDefaults = {
          x: (state, value) => {
            state.props.x = value;
          },
          y: (state, value) => {
            state.props.y = value;
          },
          width: (state, value) => {
            state.props.width = value;
          },
          height: (state, value) => {
            state.props.height = value;
          },
          color: (state, value) => {
            state.props.color = value;
          },
          zIndex: (state, value) => {
            state.props.zIndex = value;
          },
          fontFamily: (state, value) => {
            state.props.fontFamily = value;
          },
          fontWeight: (state, value) => {
            state.props.fontWeight = value;
          },
          fontStyle: (state, value) => {
            state.props.fontStyle = value;
          },
          fontStretch: (state, value) => {
            state.props.fontStretch = value;
          },
          fontSize: (state, value) => {
            state.props.fontSize = value;
          },
          text: (state, value) => {
            state.props.text = value;
          },
          textAlign: (state, value) => {
            state.props.textAlign = value;
          },
          contain: (state, value) => {
            state.props.contain = value;
          },
          offsetY: (state, value) => {
            state.props.offsetY = value;
          },
          scrollable: (state, value) => {
            state.props.scrollable = value;
          },
          scrollY: (state, value) => {
            state.props.scrollY = value;
          },
          letterSpacing: (state, value) => {
            state.props.letterSpacing = value;
          },
          lineHeight: (state, value) => {
            state.props.lineHeight = value;
          },
          maxLines: (state, value) => {
            state.props.maxLines = value;
          },
          textBaseline: (state, value) => {
            state.props.textBaseline = value;
          },
          verticalAlign: (state, value) => {
            state.props.verticalAlign = value;
          },
          overflowSuffix: (state, value) => {
            state.props.overflowSuffix = value;
          },
          debug: (state, value) => {
            state.props.debug = value;
          }
        };
        class TextRenderer {
          constructor(stage) {
            _defineProperty(this, "set", void 0);
            this.stage = stage;
            var propSetters = _objectSpread(_objectSpread({}, trPropSetterDefaults), this.getPropertySetters());
            var propSet = {};
            Object.keys(propSetters).forEach(key => {
              Object.defineProperty(propSet, key, {
                value: (state, _value) => {
                  if (state.props[key] !== _value) {
                    propSetters[key](state, _value);
                    this.stage.requestRender();
                  }
                },
                writable: false,
                // Prevents property from being changed
                configurable: false
                // Prevents property from being deleted
              });
            });
            this.set = propSet;
          }
          setStatus(state, status, error) {
            if (state.status === status) {
              return;
            }
            state.status = status;
            state.emitter.emit(status, error);
          }
          /**
           * Allows the CoreTextNode to communicate changes to the isRenderable state of
           * the itself.
           *
           * @param state
           * @param renderable
           */
          setIsRenderable(state, renderable) {
            state.isRenderable = renderable;
          }
          /**
           * Destroy/Clean up the state object
           *
           * @remarks
           * Opposite of createState(). Frees any event listeners / resources held by
           * the state that may not reliably get garbage collected.
           *
           * @param state
           */
          destroyState(state) {
            this.setStatus(state, "destroyed");
            state.emitter.removeAllListeners();
          }
          /**
           * Schedule a state update via queueMicrotask
           *
           * @remarks
           * This method is used to schedule a state update via queueMicrotask. This
           * method should be called whenever a state update is needed, and it will
           * ensure that the state is only updated once per microtask.
           * @param state
           * @returns
           */
          scheduleUpdateState(state) {
            if (state.updateScheduled) {
              return;
            }
            state.updateScheduled = true;
            queueMicrotask(() => {
              if (state.status === "destroyed") {
                return;
              }
              state.updateScheduled = false;
              this.updateState(state);
            });
          }
        }
        class ContextSpy {
          constructor() {
            _defineProperty(this, "data", {});
          }
          reset() {
            this.data = {};
          }
          increment(name) {
            if (!this.data[name]) {
              this.data[name] = 0;
            }
            this.data[name]++;
          }
          getData() {
            return _objectSpread({}, this.data);
          }
        }
        class TextureMemoryManager {
          constructor(stage, settings) {
            _defineProperty(this, "memUsed", 0);
            _defineProperty(this, "loadedTextures", /* @__PURE__ */new Map());
            _defineProperty(this, "orphanedTextures", []);
            _defineProperty(this, "criticalThreshold", void 0);
            _defineProperty(this, "targetThreshold", void 0);
            _defineProperty(this, "cleanupInterval", void 0);
            _defineProperty(this, "debugLogging", void 0);
            _defineProperty(this, "lastCleanupTime", 0);
            _defineProperty(this, "baselineMemoryAllocation", void 0);
            _defineProperty(this, "criticalCleanupRequested", false);
            _defineProperty(this, "doNotExceedCriticalThreshold", void 0);
            /**
             * The current frame time in milliseconds
             *
             * @remarks
             * This is used to determine when to perform Idle Texture Cleanups.
             *
             * Set by stage via `updateFrameTime` method.
             */
            _defineProperty(this, "frameTime", 0);
            this.stage = stage;
            var criticalThreshold = settings.criticalThreshold,
              doNotExceedCriticalThreshold = settings.doNotExceedCriticalThreshold;
            this.doNotExceedCriticalThreshold = doNotExceedCriticalThreshold || false;
            this.criticalThreshold = Math.round(criticalThreshold);
            var targetFraction = Math.max(0, Math.min(1, settings.targetThresholdLevel));
            this.cleanupInterval = settings.cleanupInterval;
            this.debugLogging = settings.debugLogging;
            this.baselineMemoryAllocation = Math.round(settings.baselineMemoryAllocation);
            this.targetThreshold = Math.max(Math.round(criticalThreshold * targetFraction), this.baselineMemoryAllocation);
            this.memUsed = Math.round(settings.baselineMemoryAllocation);
            if (settings.debugLogging) {
              var lastMemUse = 0;
              setInterval(() => {
                if (lastMemUse !== this.memUsed) {
                  lastMemUse = this.memUsed;
                  console.log(`[TextureMemoryManager] Memory used: ${bytesToMb$1(this.memUsed)} mb / ${bytesToMb$1(this.criticalThreshold)} mb (${(this.memUsed / this.criticalThreshold * 100).toFixed(1)}%)`);
                }
              }, 1e3);
            }
            if (criticalThreshold === 0) {
              this.setTextureMemUse = () => {};
            }
          }
          /**
           * Add a texture to the orphaned textures list
           *
           * @param texture - The texture to add to the orphaned textures list
           */
          addToOrphanedTextures(texture) {
            if (this.orphanedTextures.includes(texture)) {
              this.removeFromOrphanedTextures(texture);
            }
            if (texture.preventCleanup === false) {
              this.orphanedTextures.push(texture);
            }
          }
          /**
           * Remove a texture from the orphaned textures list
           *
           * @param texture - The texture to remove from the orphaned textures list
           */
          removeFromOrphanedTextures(texture) {
            var index = this.orphanedTextures.indexOf(texture);
            if (index !== -1) {
              this.orphanedTextures.splice(index, 1);
            }
          }
          /**
           * Set the memory usage of a texture
           *
           * @param texture - The texture to set memory usage for
           * @param byteSize - The size of the texture in bytes
           */
          setTextureMemUse(texture, byteSize) {
            if (this.loadedTextures.has(texture)) {
              this.memUsed -= this.loadedTextures.get(texture);
            }
            if (byteSize === 0) {
              this.loadedTextures.delete(texture);
              return;
            } else {
              this.memUsed += byteSize;
              this.loadedTextures.set(texture, byteSize);
            }
            if (this.memUsed > this.criticalThreshold) {
              this.criticalCleanupRequested = true;
            }
          }
          checkCleanup() {
            return this.criticalCleanupRequested || this.memUsed > this.targetThreshold && this.frameTime - this.lastCleanupTime >= this.cleanupInterval;
          }
          checkCriticalCleanup() {
            return this.memUsed > this.criticalThreshold;
          }
          cleanupQuick(critical) {
            var memTarget = this.targetThreshold;
            var txManager = this.stage.txManager;
            var timestamp = getTimeStamp();
            while (this.memUsed >= memTarget && this.orphanedTextures.length > 0 && (critical || getTimeStamp() - timestamp < 10)) {
              var texture = this.orphanedTextures.shift();
              if (texture === undefined) {
                continue;
              }
              if (texture.renderable === true) {
                continue;
              }
              texture.free();
              txManager.removeTextureFromCache(texture);
            }
          }
          cleanupDeep(critical) {
            var memTarget = critical ? this.criticalThreshold : this.targetThreshold;
            var txManager = this.stage.txManager;
            var filteredAndSortedTextures = [];
            var textures = [...this.loadedTextures.keys()];
            for (var i = 0; i < textures.length; i++) {
              var texture = textures[i];
              if (texture === undefined) {
                continue;
              }
              if (texture.type === TextureType.image || texture.type === TextureType.noise || texture.type === TextureType.renderToTexture) {
                if (texture.renderable === true) {
                  filteredAndSortedTextures.push(texture);
                } else {
                  filteredAndSortedTextures.unshift(texture);
                }
              }
            }
            while (this.memUsed >= memTarget && filteredAndSortedTextures.length > 0) {
              var _texture = filteredAndSortedTextures.shift();
              if (_texture === undefined) {
                continue;
              }
              if (_texture.preventCleanup === true) {
                continue;
              }
              if (_texture.renderable === true) {
                break;
              }
              _texture.free();
              this.removeFromOrphanedTextures(_texture);
              txManager.removeTextureFromCache(_texture);
              txManager.removeTextureFromQueue(_texture);
            }
          }
          cleanup() {
            var aggressive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var critical = this.criticalCleanupRequested;
            this.lastCleanupTime = this.frameTime;
            if (critical === true) {
              this.stage.queueFrameEvent("criticalCleanup", {
                memUsed: this.memUsed,
                criticalThreshold: this.criticalThreshold
              });
            }
            if (this.debugLogging === true) {
              console.log(`[TextureMemoryManager] Cleaning up textures. Critical: ${critical}. Aggressive: ${aggressive}`);
            }
            this.cleanupQuick(critical);
            if (aggressive === true && this.memUsed >= this.criticalThreshold) {
              this.cleanupDeep(critical);
            }
            if (this.memUsed >= this.criticalThreshold) {
              this.stage.queueFrameEvent("criticalCleanupFailed", {
                memUsed: this.memUsed,
                criticalThreshold: this.criticalThreshold
              });
              if (this.debugLogging === true || isProductionEnvironment() === false) {
                console.warn(`[TextureMemoryManager] Memory usage above critical threshold after cleanup: ${this.memUsed}`);
              }
            } else {
              this.criticalCleanupRequested = false;
            }
          }
          /**
           * Get the current texture memory usage information
           *
           * @remarks
           * This method is for debugging purposes and returns information about the
           * current memory usage of the textures in the Renderer.
           */
          getMemoryInfo() {
            var renderableTexturesLoaded = 0;
            var renderableMemUsed = [...this.loadedTextures.keys()].reduce((acc, texture) => {
              renderableTexturesLoaded += texture.renderable ? 1 : 0;
              return acc + (texture.renderable ? this.loadedTextures.get(texture) : 0);
            }, this.baselineMemoryAllocation);
            return {
              criticalThreshold: this.criticalThreshold,
              targetThreshold: this.targetThreshold,
              renderableMemUsed,
              memUsed: this.memUsed,
              renderableTexturesLoaded,
              loadedTextures: this.loadedTextures.size,
              baselineMemoryAllocation: this.baselineMemoryAllocation
            };
          }
        }
        class CoreContextTexture {
          constructor(memManager, textureSource) {
            _defineProperty(this, "textureSource", void 0);
            _defineProperty(this, "memManager", void 0);
            _defineProperty(this, "state", "freed");
            this.memManager = memManager;
            this.textureSource = textureSource;
          }
          setTextureMemUse(byteSize) {
            this.memManager.setTextureMemUse(this.textureSource, byteSize);
          }
          get renderable() {
            return this.textureSource.renderable;
          }
        }
        class CoreRenderer {
          constructor(options) {
            _defineProperty(this, "options", void 0);
            _defineProperty(this, "mode", void 0);
            _defineProperty(this, "stage", void 0);
            //// Core Managers
            _defineProperty(this, "rttNodes", []);
            this.options = options;
            this.stage = options.stage;
          }
        }
        class CoreTextNode extends CoreNode {
          constructor(stage, props, textRenderer) {
            super(stage, props);
            _defineProperty(this, "textRenderer", void 0);
            _defineProperty(this, "trState", void 0);
            _defineProperty(this, "_textRendererOverride", null);
            _defineProperty(this, "onTextLoaded", () => {
              var contain = this.contain;
              var setWidth = this.trState.props.width;
              var setHeight = this.trState.props.height;
              var calcWidth = this.trState.textW || 0;
              var calcHeight = this.trState.textH || 0;
              if (contain === "both") {
                this.props.width = setWidth;
                this.props.height = setHeight;
              } else if (contain === "width") {
                this.props.width = setWidth;
                this.props.height = calcHeight;
              } else if (contain === "none") {
                this.props.width = calcWidth;
                this.props.height = calcHeight;
              }
              this.updateLocalTransform();
              this.stage.requestRender();
              this.emit("loaded", {
                type: "text",
                dimensions: {
                  width: this.trState.textW || 0,
                  height: this.trState.textH || 0
                }
              });
            });
            _defineProperty(this, "onTextFailed", (target, error) => {
              this.emit("failed", {
                type: "text",
                error
              });
            });
            this._textRendererOverride = props.textRendererOverride;
            this.textRenderer = textRenderer;
            var textRendererState = this.createState({
              x: this.absX,
              y: this.absY,
              width: props.width,
              height: props.height,
              textAlign: props.textAlign,
              color: props.color,
              zIndex: props.zIndex,
              contain: props.contain,
              scrollable: props.scrollable,
              scrollY: props.scrollY,
              offsetY: props.offsetY,
              letterSpacing: props.letterSpacing,
              debug: props.debug,
              fontFamily: props.fontFamily,
              fontSize: props.fontSize,
              fontStretch: props.fontStretch,
              fontStyle: props.fontStyle,
              fontWeight: props.fontWeight,
              text: props.text,
              lineHeight: props.lineHeight,
              maxLines: props.maxLines,
              textBaseline: props.textBaseline,
              verticalAlign: props.verticalAlign,
              overflowSuffix: props.overflowSuffix
            });
            this.trState = textRendererState;
          }
          get width() {
            return this.props.width;
          }
          set width(value) {
            this.props.width = value;
            this.textRenderer.set.width(this.trState, value);
            if (this.contain === "none") {
              this.setUpdateType(UpdateType.Local);
            }
          }
          get height() {
            return this.props.height;
          }
          set height(value) {
            this.props.height = value;
            this.textRenderer.set.height(this.trState, value);
            if (this.contain !== "both") {
              this.setUpdateType(UpdateType.Local);
            }
          }
          get color() {
            return this.trState.props.color;
          }
          set color(value) {
            this.textRenderer.set.color(this.trState, value);
          }
          get text() {
            return this.trState.props.text;
          }
          set text(value) {
            this.textRenderer.set.text(this.trState, value);
          }
          get textRendererOverride() {
            return this._textRendererOverride;
          }
          set textRendererOverride(value) {
            this._textRendererOverride = value;
            this.textRenderer.destroyState(this.trState);
            var textRenderer = this.stage.resolveTextRenderer(this.trState.props, this._textRendererOverride);
            if (!textRenderer) {
              console.warn("Text Renderer not found for font", this.trState.props.fontFamily);
              return;
            }
            this.textRenderer = textRenderer;
            this.trState = this.createState(this.trState.props);
          }
          get fontSize() {
            return this.trState.props.fontSize;
          }
          set fontSize(value) {
            this.textRenderer.set.fontSize(this.trState, value);
          }
          get fontFamily() {
            return this.trState.props.fontFamily;
          }
          set fontFamily(value) {
            this.textRenderer.set.fontFamily(this.trState, value);
          }
          get fontStretch() {
            return this.trState.props.fontStretch;
          }
          set fontStretch(value) {
            this.textRenderer.set.fontStretch(this.trState, value);
          }
          get fontStyle() {
            return this.trState.props.fontStyle;
          }
          set fontStyle(value) {
            this.textRenderer.set.fontStyle(this.trState, value);
          }
          get fontWeight() {
            return this.trState.props.fontWeight;
          }
          set fontWeight(value) {
            this.textRenderer.set.fontWeight(this.trState, value);
          }
          get textAlign() {
            return this.trState.props.textAlign;
          }
          set textAlign(value) {
            this.textRenderer.set.textAlign(this.trState, value);
          }
          get contain() {
            return this.trState.props.contain;
          }
          set contain(value) {
            this.textRenderer.set.contain(this.trState, value);
          }
          get scrollable() {
            return this.trState.props.scrollable;
          }
          set scrollable(value) {
            this.textRenderer.set.scrollable(this.trState, value);
          }
          get scrollY() {
            return this.trState.props.scrollY;
          }
          set scrollY(value) {
            this.textRenderer.set.scrollY(this.trState, value);
          }
          get offsetY() {
            return this.trState.props.offsetY;
          }
          set offsetY(value) {
            this.textRenderer.set.offsetY(this.trState, value);
          }
          get letterSpacing() {
            return this.trState.props.letterSpacing;
          }
          set letterSpacing(value) {
            this.textRenderer.set.letterSpacing(this.trState, value);
          }
          get lineHeight() {
            return this.trState.props.lineHeight;
          }
          set lineHeight(value) {
            this.textRenderer.set.lineHeight(this.trState, value);
          }
          get maxLines() {
            return this.trState.props.maxLines;
          }
          set maxLines(value) {
            this.textRenderer.set.maxLines(this.trState, value);
          }
          get textBaseline() {
            return this.trState.props.textBaseline;
          }
          set textBaseline(value) {
            this.textRenderer.set.textBaseline(this.trState, value);
          }
          get verticalAlign() {
            return this.trState.props.verticalAlign;
          }
          set verticalAlign(value) {
            this.textRenderer.set.verticalAlign(this.trState, value);
          }
          get overflowSuffix() {
            return this.trState.props.overflowSuffix;
          }
          set overflowSuffix(value) {
            this.textRenderer.set.overflowSuffix(this.trState, value);
          }
          get debug() {
            return this.trState.props.debug;
          }
          set debug(value) {
            this.textRenderer.set.debug(this.trState, value);
          }
          update(delta, parentClippingRect) {
            super.update(delta, parentClippingRect);
            assertTruthy(this.globalTransform);
            this.textRenderer.set.x(this.trState, this.globalTransform.tx);
            this.textRenderer.set.y(this.trState, this.globalTransform.ty);
          }
          checkBasicRenderability() {
            if (this.worldAlpha === 0 || this.isOutOfBounds() === true) {
              return false;
            }
            if (this.trState && this.trState.props.text !== "") {
              return true;
            }
            return false;
          }
          setRenderable(isRenderable) {
            super.setRenderable(isRenderable);
            this.textRenderer.setIsRenderable(this.trState, isRenderable);
          }
          renderQuads(renderer) {
            var _this$props$parent4;
            assertTruthy(this.globalTransform);
            if (!this.textRenderer.renderQuads) {
              super.renderQuads(renderer);
              return;
            }
            if (this.parentHasRenderTexture) {
              if (!renderer.renderToTextureActive) {
                return;
              }
              if (this.parentRenderTexture !== renderer.activeRttNode) {
                return;
              }
            }
            if (this.parentHasRenderTexture && (_this$props$parent4 = this.props.parent) !== null && _this$props$parent4 !== void 0 && _this$props$parent4.rtt) {
              this.globalTransform = Matrix3d.identity();
              if (this.localTransform) {
                this.globalTransform.multiply(this.localTransform);
              }
            }
            assertTruthy(this.globalTransform);
            this.textRenderer.renderQuads(this);
          }
          /**
           * Destroy the node and cleanup all resources
           */
          destroy() {
            super.destroy();
            this.textRenderer.destroyState(this.trState);
          }
          /**
           * Resolve a text renderer and a new state based on the current text renderer props provided
           * @param props
           * @returns
           */
          createState(props) {
            var textRendererState = this.textRenderer.createState(props, this);
            textRendererState.emitter.on("loaded", this.onTextLoaded);
            textRendererState.emitter.on("failed", this.onTextFailed);
            this.textRenderer.scheduleUpdateState(textRendererState);
            return textRendererState;
          }
        }
        function santizeCustomDataMap(d) {
          var validTypes = {
            boolean: true,
            string: true,
            number: true,
            undefined: true
          };
          var keys = Object.keys(d);
          for (var i = 0; i < keys.length; i++) {
            var _key10 = keys[i];
            if (!_key10) {
              continue;
            }
            var value = d[_key10];
            var valueType = _typeof(value);
            if (valueType === "string" && value.length > 2048) {
              console.warn(`Custom Data value for ${_key10} is too long, it will be truncated to 2048 characters`);
              d[_key10] = value.substring(0, 2048);
            }
            if (!validTypes[valueType]) {
              console.warn(`Custom Data value for ${_key10} is not a boolean, string, or number, it will be ignored`);
              delete d[_key10];
            }
          }
          return d;
        }
        class Stage {
          /**
           * Stage constructor
           */
          constructor(options) {
            /// Module Instances
            _defineProperty(this, "animationManager", void 0);
            _defineProperty(this, "txManager", void 0);
            _defineProperty(this, "txMemManager", void 0);
            _defineProperty(this, "fontManager", void 0);
            _defineProperty(this, "textRenderers", void 0);
            _defineProperty(this, "shManager", void 0);
            _defineProperty(this, "renderer", void 0);
            _defineProperty(this, "root", void 0);
            _defineProperty(this, "boundsMargin", void 0);
            _defineProperty(this, "defShaderNode", null);
            _defineProperty(this, "strictBound", void 0);
            _defineProperty(this, "preloadBound", void 0);
            _defineProperty(this, "strictBounds", void 0);
            _defineProperty(this, "defaultTexture", null);
            _defineProperty(this, "pixelRatio", void 0);
            _defineProperty(this, "bufferMemory", 2e6);
            /**
             * Renderer Event Bus for the Stage to emit events onto
             *
             * @remarks
             * In reality this is just the RendererMain instance, which is an EventEmitter.
             * this allows us to directly emit events from the Stage to RendererMain
             * without having to set up forwarding handlers.
             */
            _defineProperty(this, "eventBus", void 0);
            /// State
            _defineProperty(this, "deltaTime", 0);
            _defineProperty(this, "lastFrameTime", 0);
            _defineProperty(this, "currentFrameTime", 0);
            _defineProperty(this, "clrColor", 0);
            _defineProperty(this, "fpsNumFrames", 0);
            _defineProperty(this, "fpsElapsedTime", 0);
            _defineProperty(this, "numQuadsRendered", 0);
            _defineProperty(this, "renderRequested", false);
            _defineProperty(this, "frameEventQueue", []);
            _defineProperty(this, "fontResolveMap", {});
            /// Debug data
            _defineProperty(this, "contextSpy", null);
            this.options = options;
            var canvas = options.canvas,
              clearColor = options.clearColor,
              appWidth = options.appWidth,
              appHeight = options.appHeight,
              boundsMargin = options.boundsMargin,
              enableContextSpy = options.enableContextSpy,
              forceWebGL2 = options.forceWebGL2,
              numImageWorkers = options.numImageWorkers,
              textureMemory = options.textureMemory,
              renderEngine = options.renderEngine,
              fontEngines = options.fontEngines,
              createImageBitmapSupport = options.createImageBitmapSupport;
            this.eventBus = options.eventBus;
            this.txManager = new CoreTextureManager(this, {
              numImageWorkers,
              createImageBitmapSupport
            });
            this.txManager.on("initialized", () => {
              this.requestRender();
            });
            this.txMemManager = new TextureMemoryManager(this, textureMemory);
            this.animationManager = new AnimationManager();
            this.contextSpy = enableContextSpy ? new ContextSpy() : null;
            this.strictBounds = options.strictBounds;
            var bm = [0, 0, 0, 0];
            if (boundsMargin) {
              bm = Array.isArray(boundsMargin) ? boundsMargin : [boundsMargin, boundsMargin, boundsMargin, boundsMargin];
            }
            this.boundsMargin = bm;
            this.strictBound = createBound(0, 0, appWidth, appHeight);
            this.preloadBound = createPreloadBounds(this.strictBound, bm);
            this.clrColor = clearColor;
            this.pixelRatio = options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio;
            this.renderer = new renderEngine({
              stage: this,
              canvas,
              contextSpy: this.contextSpy,
              forceWebGL2
            });
            this.shManager = new CoreShaderManager(this);
            this.defShaderNode = this.renderer.getDefaultShaderNode();
            var renderMode = this.renderer.mode || "webgl";
            this.createDefaultTexture();
            setPremultiplyMode(renderMode);
            this.txManager.renderer = this.renderer;
            this.textRenderers = {};
            fontEngines.forEach(fontEngineConstructor => {
              var fontEngineInstance = new fontEngineConstructor(this);
              var className = fontEngineInstance.type;
              if (className === "sdf" && renderMode === "canvas") {
                console.warn("SdfTextRenderer is not compatible with Canvas renderer. Skipping...");
                return;
              }
              if (fontEngineInstance instanceof TextRenderer) {
                if (className === "canvas") {
                  this.textRenderers["canvas"] = fontEngineInstance;
                } else if (className === "sdf") {
                  this.textRenderers["sdf"] = fontEngineInstance;
                }
              }
            });
            if (Object.keys(this.textRenderers).length === 0) {
              console.warn("No text renderers available. Your text will not render.");
            }
            this.fontManager = new TrFontManager(this.textRenderers);
            var rootNode = new CoreNode(this, {
              x: 0,
              y: 0,
              width: appWidth,
              height: appHeight,
              alpha: 1,
              autosize: false,
              boundsMargin: null,
              clipping: false,
              color: 0,
              colorTop: 0,
              colorBottom: 0,
              colorLeft: 0,
              colorRight: 0,
              colorTl: 0,
              colorTr: 0,
              colorBl: 0,
              colorBr: 0,
              zIndex: 0,
              zIndexLocked: 0,
              scaleX: 1,
              scaleY: 1,
              mountX: 0,
              mountY: 0,
              mount: 0,
              pivot: 0.5,
              pivotX: 0.5,
              pivotY: 0.5,
              rotation: 0,
              parent: null,
              texture: null,
              textureOptions: {},
              shader: this.defShaderNode,
              rtt: false,
              src: null,
              scale: 1,
              preventCleanup: false,
              strictBounds: this.strictBounds
            });
            this.root = rootNode;
            {
              startLoop(this);
            }
          }
          setClearColor(color) {
            this.clearColor = color;
            this.renderer.updateClearColor(color);
            this.renderRequested = true;
          }
          updateFrameTime() {
            var newFrameTime = getTimeStamp();
            this.lastFrameTime = this.currentFrameTime;
            this.currentFrameTime = newFrameTime;
            this.deltaTime = !this.lastFrameTime ? 100 / 6 : newFrameTime - this.lastFrameTime;
            this.txManager.frameTime = newFrameTime;
            this.txMemManager.frameTime = newFrameTime;
            this.eventBus.emit("frameTick", {
              time: this.currentFrameTime,
              delta: this.deltaTime
            });
          }
          /**
           * Create default PixelTexture
           */
          createDefaultTexture() {
            console.log("Creating default texture");
            this.defaultTexture = this.txManager.createTexture("ColorTexture", {
              color: 4294967295
            });
            assertTruthy(this.defaultTexture instanceof ColorTexture);
            this.txManager.loadTexture(this.defaultTexture, true);
            this.defaultTexture.setRenderableOwner(this, true);
            this.defaultTexture.once("loaded", () => {
              this.requestRender();
            });
          }
          /**
           * Update animations
           */
          updateAnimations() {
            var animationManager = this.animationManager;
            if (!this.root) {
              return;
            }
            animationManager.update(this.deltaTime);
          }
          /**
           * Check if the scene has updates
           */
          hasSceneUpdates() {
            return !!this.root.updateType || this.renderRequested || this.txManager.hasUpdates();
          }
          /**
           * Start a new frame draw
           */
          drawFrame() {
            var renderer = this.renderer,
              renderRequested = this.renderRequested;
            if (this.root.updateType !== 0) {
              this.root.update(this.deltaTime, this.root.clippingRect);
            }
            this.txManager.processSome(this.options.textureProcessingTimeLimit);
            renderer.reset();
            if (this.txMemManager.criticalCleanupRequested === true) {
              this.txMemManager.cleanup(false);
              if (this.txMemManager.criticalCleanupRequested === true) {
                this.txMemManager.cleanup(true);
              }
            }
            if (renderer.rttNodes.length > 0) {
              renderer.renderRTTNodes();
            }
            this.addQuads(this.root);
            renderer === null || renderer === void 0 || renderer.render();
            this.calculateFps();
            this.calculateQuads();
            if (renderRequested) {
              this.renderRequested = false;
            }
          }
          /**
           * Queue an event to be emitted after the current/next frame is rendered
           *
           * @remarks
           * When we are operating in the context of the render loop, we may want to
           * emit events that are related to the current frame. However, we generally do
           * NOT want to emit events directly in the middle of the render loop, since
           * this could enable event handlers to modify the scene graph and cause
           * unexpected behavior. Instead, we queue up events to be emitted and then
           * flush the queue after the frame has been rendered.
           *
           * @param name
           * @param data
           */
          queueFrameEvent(name, data) {
            this.frameEventQueue.push([name, data]);
          }
          /**
           * Emit all queued frame events
           *
           * @remarks
           * This method should be called after the frame has been rendered to emit
           * all events that were queued during the frame.
           *
           * See {@link queueFrameEvent} for more information.
           */
          flushFrameEvents() {
            var _iterator10 = _createForOfIteratorHelper(this.frameEventQueue),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _step10$value = _slicedToArray(_step10.value, 2),
                  name = _step10$value[0],
                  data = _step10$value[1];
                this.eventBus.emit(name, data);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
            this.frameEventQueue = [];
          }
          calculateFps() {
            var fpsUpdateInterval = this.options.fpsUpdateInterval;
            if (fpsUpdateInterval) {
              this.fpsNumFrames++;
              this.fpsElapsedTime += this.deltaTime;
              if (this.fpsElapsedTime >= fpsUpdateInterval) {
                var _this$contextSpy$getD, _this$contextSpy, _this$contextSpy2;
                var _fps = Math.round(this.fpsNumFrames * 1e3 / this.fpsElapsedTime);
                this.fpsNumFrames = 0;
                this.fpsElapsedTime = 0;
                this.queueFrameEvent("fpsUpdate", {
                  fps: _fps,
                  contextSpyData: (_this$contextSpy$getD = (_this$contextSpy = this.contextSpy) === null || _this$contextSpy === void 0 ? void 0 : _this$contextSpy.getData()) !== null && _this$contextSpy$getD !== void 0 ? _this$contextSpy$getD : null
                });
                (_this$contextSpy2 = this.contextSpy) === null || _this$contextSpy2 === void 0 || _this$contextSpy2.reset();
              }
            }
          }
          calculateQuads() {
            var quads = this.renderer.getQuadCount();
            if (quads && quads !== this.numQuadsRendered) {
              this.numQuadsRendered = quads;
              this.queueFrameEvent("quadsUpdate", {
                quads
              });
            }
          }
          addQuads(node) {
            assertTruthy(this.renderer);
            if (node.isRenderable === true) {
              node.renderQuads(this.renderer);
            }
            for (var i = 0; i < node.children.length; i++) {
              var child = node.children[i];
              if (child === undefined) {
                continue;
              }
              if (child.worldAlpha === 0 || child.strictBounds === true && child.renderState === CoreNodeRenderState.OutOfBounds) {
                continue;
              }
              this.addQuads(child);
            }
          }
          /**
           * Request a render pass without forcing an update
           */
          requestRender() {
            this.renderRequested = true;
          }
          /**
           * Given a font name, and possible renderer override, return the best compatible text renderer.
           *
           * @remarks
           * Will try to return a canvas renderer if no other suitable renderer can be resolved.
           *
           * @param fontFamily
           * @param textRendererOverride
           * @returns
           */
          resolveTextRenderer(trProps) {
            var textRendererOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var fontCacheString = `${trProps.fontFamily}${trProps.fontStyle}${trProps.fontWeight}${trProps.fontStretch}${textRendererOverride ? textRendererOverride : ""}`;
            if (this.fontResolveMap[fontCacheString] !== undefined) {
              return this.fontResolveMap[fontCacheString];
            }
            var rendererId = textRendererOverride;
            var overrideFallback = false;
            if (rendererId) {
              var possibleRenderer = this.textRenderers[rendererId];
              if (!possibleRenderer) {
                console.warn(`Text renderer override '${rendererId}' not found.`);
                rendererId = null;
                overrideFallback = true;
              } else if (!possibleRenderer.canRenderFont(trProps)) {
                console.warn(`Cannot use override text renderer '${rendererId}' for font`, trProps);
                rendererId = null;
                overrideFallback = true;
              }
            }
            if (!rendererId) {
              for (var _i = 0, _Object$entries = Object.entries(this.textRenderers); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  trId = _Object$entries$_i[0],
                  tr = _Object$entries$_i[1];
                if (tr.canRenderFont(trProps)) {
                  rendererId = trId;
                  break;
                }
              }
              if (!rendererId && this.textRenderers.canvas !== undefined) {
                rendererId = "canvas";
              }
            }
            if (overrideFallback) {
              console.warn(`Falling back to text renderer ${String(rendererId)}`);
            }
            if (!rendererId) {
              return null;
            }
            var resolvedTextRenderer = this.textRenderers[rendererId];
            this.fontResolveMap[fontCacheString] = resolvedTextRenderer;
            return resolvedTextRenderer;
          }
          createNode(props) {
            var resolvedProps = this.resolveNodeDefaults(props);
            return new CoreNode(this, resolvedProps);
          }
          createTextNode(props) {
            var _props$fontSize, _props$text, _props$textRendererOv, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$fontStretch, _props$textAlign, _props$contain, _props$scrollable, _props$scrollY, _props$offsetY, _props$letterSpacing, _props$maxLines, _props$textBaseline, _props$verticalAlign, _props$overflowSuffix, _props$debug;
            var fontSize = (_props$fontSize = props.fontSize) !== null && _props$fontSize !== void 0 ? _props$fontSize : 16;
            var resolvedProps = _objectSpread(_objectSpread({}, this.resolveNodeDefaults(props)), {}, {
              text: (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : "",
              textRendererOverride: (_props$textRendererOv = props.textRendererOverride) !== null && _props$textRendererOv !== void 0 ? _props$textRendererOv : null,
              fontSize,
              fontFamily: (_props$fontFamily = props.fontFamily) !== null && _props$fontFamily !== void 0 ? _props$fontFamily : "sans-serif",
              fontStyle: (_props$fontStyle = props.fontStyle) !== null && _props$fontStyle !== void 0 ? _props$fontStyle : "normal",
              fontWeight: (_props$fontWeight = props.fontWeight) !== null && _props$fontWeight !== void 0 ? _props$fontWeight : "normal",
              fontStretch: (_props$fontStretch = props.fontStretch) !== null && _props$fontStretch !== void 0 ? _props$fontStretch : "normal",
              textAlign: (_props$textAlign = props.textAlign) !== null && _props$textAlign !== void 0 ? _props$textAlign : "left",
              contain: (_props$contain = props.contain) !== null && _props$contain !== void 0 ? _props$contain : "none",
              scrollable: (_props$scrollable = props.scrollable) !== null && _props$scrollable !== void 0 ? _props$scrollable : false,
              scrollY: (_props$scrollY = props.scrollY) !== null && _props$scrollY !== void 0 ? _props$scrollY : 0,
              offsetY: (_props$offsetY = props.offsetY) !== null && _props$offsetY !== void 0 ? _props$offsetY : 0,
              letterSpacing: (_props$letterSpacing = props.letterSpacing) !== null && _props$letterSpacing !== void 0 ? _props$letterSpacing : 0,
              lineHeight: props.lineHeight,
              // `undefined` is a valid value
              maxLines: (_props$maxLines = props.maxLines) !== null && _props$maxLines !== void 0 ? _props$maxLines : 0,
              textBaseline: (_props$textBaseline = props.textBaseline) !== null && _props$textBaseline !== void 0 ? _props$textBaseline : "alphabetic",
              verticalAlign: (_props$verticalAlign = props.verticalAlign) !== null && _props$verticalAlign !== void 0 ? _props$verticalAlign : "middle",
              overflowSuffix: (_props$overflowSuffix = props.overflowSuffix) !== null && _props$overflowSuffix !== void 0 ? _props$overflowSuffix : "...",
              debug: (_props$debug = props.debug) !== null && _props$debug !== void 0 ? _props$debug : {},
              shaderProps: null
            });
            var resolvedTextRenderer = this.resolveTextRenderer(resolvedProps, props.textRendererOverride);
            if (!resolvedTextRenderer) {
              throw new Error(`No compatible text renderer found for ${resolvedProps.fontFamily}`);
            }
            return new CoreTextNode(this, resolvedProps, resolvedTextRenderer);
          }
          setBoundsMargin(value) {
            this.boundsMargin = Array.isArray(value) ? value : [value, value, value, value];
            this.root.setUpdateType(UpdateType.RenderBounds);
          }
          /**
           * Resolves the default property values for a Node
           *
           * @remarks
           * This method is used internally by the RendererMain to resolve the default
           * property values for a Node. It is exposed publicly so that it can be used
           * by Core Driver implementations.
           *
           * @param props
           * @returns
           */
          resolveNodeDefaults(props) {
            var _props$color, _ref6, _ref7, _props$colorTl, _ref8, _ref9, _props$colorTr, _ref10, _ref11, _props$colorBl, _ref12, _ref13, _props$colorBr, _props$x, _props$y, _props$width3, _props$height3, _props$alpha, _props$autosize, _props$boundsMargin, _props$clipping, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _props$zIndex, _props$zIndexLocked, _props$parent3, _props$texture, _props$textureOptions, _props$shader, _props$src2, _props$scale, _ref14, _props$scaleX, _ref15, _props$scaleY, _props$mount, _ref16, _props$mountX, _ref17, _props$mountY, _props$pivot, _ref18, _props$pivotX, _ref19, _props$pivotY, _props$rotation, _props$rtt, _props$preventCleanup, _props$strictBounds;
            var color = (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 4294967295;
            var colorTl = (_ref6 = (_ref7 = (_props$colorTl = props.colorTl) !== null && _props$colorTl !== void 0 ? _props$colorTl : props.colorTop) !== null && _ref7 !== void 0 ? _ref7 : props.colorLeft) !== null && _ref6 !== void 0 ? _ref6 : color;
            var colorTr = (_ref8 = (_ref9 = (_props$colorTr = props.colorTr) !== null && _props$colorTr !== void 0 ? _props$colorTr : props.colorTop) !== null && _ref9 !== void 0 ? _ref9 : props.colorRight) !== null && _ref8 !== void 0 ? _ref8 : color;
            var colorBl = (_ref10 = (_ref11 = (_props$colorBl = props.colorBl) !== null && _props$colorBl !== void 0 ? _props$colorBl : props.colorBottom) !== null && _ref11 !== void 0 ? _ref11 : props.colorLeft) !== null && _ref10 !== void 0 ? _ref10 : color;
            var colorBr = (_ref12 = (_ref13 = (_props$colorBr = props.colorBr) !== null && _props$colorBr !== void 0 ? _props$colorBr : props.colorBottom) !== null && _ref13 !== void 0 ? _ref13 : props.colorRight) !== null && _ref12 !== void 0 ? _ref12 : color;
            var data = {};
            if (this.options.inspector === true) {
              var _props$data;
              data = santizeCustomDataMap((_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : {});
            }
            return {
              x: (_props$x = props.x) !== null && _props$x !== void 0 ? _props$x : 0,
              y: (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0,
              width: (_props$width3 = props.width) !== null && _props$width3 !== void 0 ? _props$width3 : 0,
              height: (_props$height3 = props.height) !== null && _props$height3 !== void 0 ? _props$height3 : 0,
              alpha: (_props$alpha = props.alpha) !== null && _props$alpha !== void 0 ? _props$alpha : 1,
              autosize: (_props$autosize = props.autosize) !== null && _props$autosize !== void 0 ? _props$autosize : false,
              boundsMargin: (_props$boundsMargin = props.boundsMargin) !== null && _props$boundsMargin !== void 0 ? _props$boundsMargin : null,
              clipping: (_props$clipping = props.clipping) !== null && _props$clipping !== void 0 ? _props$clipping : false,
              color,
              colorTop: (_props$colorTop = props.colorTop) !== null && _props$colorTop !== void 0 ? _props$colorTop : color,
              colorBottom: (_props$colorBottom = props.colorBottom) !== null && _props$colorBottom !== void 0 ? _props$colorBottom : color,
              colorLeft: (_props$colorLeft = props.colorLeft) !== null && _props$colorLeft !== void 0 ? _props$colorLeft : color,
              colorRight: (_props$colorRight = props.colorRight) !== null && _props$colorRight !== void 0 ? _props$colorRight : color,
              colorBl,
              colorBr,
              colorTl,
              colorTr,
              zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : 0,
              zIndexLocked: (_props$zIndexLocked = props.zIndexLocked) !== null && _props$zIndexLocked !== void 0 ? _props$zIndexLocked : 0,
              parent: (_props$parent3 = props.parent) !== null && _props$parent3 !== void 0 ? _props$parent3 : null,
              texture: (_props$texture = props.texture) !== null && _props$texture !== void 0 ? _props$texture : null,
              textureOptions: (_props$textureOptions = props.textureOptions) !== null && _props$textureOptions !== void 0 ? _props$textureOptions : {},
              shader: (_props$shader = props.shader) !== null && _props$shader !== void 0 ? _props$shader : this.defShaderNode,
              // Since setting the `src` will trigger a texture load, we need to set it after
              // we set the texture. Otherwise, problems happen.
              src: (_props$src2 = props.src) !== null && _props$src2 !== void 0 ? _props$src2 : null,
              srcHeight: props.srcHeight,
              srcWidth: props.srcWidth,
              srcX: props.srcX,
              srcY: props.srcY,
              scale: (_props$scale = props.scale) !== null && _props$scale !== void 0 ? _props$scale : null,
              scaleX: (_ref14 = (_props$scaleX = props.scaleX) !== null && _props$scaleX !== void 0 ? _props$scaleX : props.scale) !== null && _ref14 !== void 0 ? _ref14 : 1,
              scaleY: (_ref15 = (_props$scaleY = props.scaleY) !== null && _props$scaleY !== void 0 ? _props$scaleY : props.scale) !== null && _ref15 !== void 0 ? _ref15 : 1,
              mount: (_props$mount = props.mount) !== null && _props$mount !== void 0 ? _props$mount : 0,
              mountX: (_ref16 = (_props$mountX = props.mountX) !== null && _props$mountX !== void 0 ? _props$mountX : props.mount) !== null && _ref16 !== void 0 ? _ref16 : 0,
              mountY: (_ref17 = (_props$mountY = props.mountY) !== null && _props$mountY !== void 0 ? _props$mountY : props.mount) !== null && _ref17 !== void 0 ? _ref17 : 0,
              pivot: (_props$pivot = props.pivot) !== null && _props$pivot !== void 0 ? _props$pivot : 0.5,
              pivotX: (_ref18 = (_props$pivotX = props.pivotX) !== null && _props$pivotX !== void 0 ? _props$pivotX : props.pivot) !== null && _ref18 !== void 0 ? _ref18 : 0.5,
              pivotY: (_ref19 = (_props$pivotY = props.pivotY) !== null && _props$pivotY !== void 0 ? _props$pivotY : props.pivot) !== null && _ref19 !== void 0 ? _ref19 : 0.5,
              rotation: (_props$rotation = props.rotation) !== null && _props$rotation !== void 0 ? _props$rotation : 0,
              rtt: (_props$rtt = props.rtt) !== null && _props$rtt !== void 0 ? _props$rtt : false,
              data,
              preventCleanup: (_props$preventCleanup = props.preventCleanup) !== null && _props$preventCleanup !== void 0 ? _props$preventCleanup : false,
              imageType: props.imageType,
              strictBounds: (_props$strictBounds = props.strictBounds) !== null && _props$strictBounds !== void 0 ? _props$strictBounds : this.strictBounds
            };
          }
          /**
           * Cleanup Orphaned Textures
           *
           * @remarks
           * This method is used to cleanup orphaned textures that are no longer in use.
           */
          cleanup(aggressive) {
            this.txMemManager.cleanup(aggressive);
          }
          set clearColor(value) {
            this.renderer.updateClearColor(value);
            this.renderRequested = true;
            this.clrColor = value;
          }
          get clearColor() {
            return this.clrColor;
          }
        }
        class RendererMain extends EventEmitter {
          /**
           * Constructs a new Renderer instance
           *
           * @param settings Renderer settings
           * @param target Element ID or HTMLElement to insert the canvas into
           * @param driver Core Driver to use
           */
          constructor(settings, target) {
            var _settings$textureMemo, _settings$textureMemo2, _settings$textureMemo3, _settings$textureMemo4, _settings$textureMemo5, _settings$textureMemo6, _settings$clearColor, _settings$enableConte, _settings$forceWebGL, _settings$inspector, _settings$quadBufferS, _settings$strictBound;
            super();
            _defineProperty(this, "root", void 0);
            _defineProperty(this, "canvas", void 0);
            _defineProperty(this, "settings", void 0);
            _defineProperty(this, "stage", void 0);
            _defineProperty(this, "inspector", null);
            var resolvedTxSettings = {
              criticalThreshold: ((_settings$textureMemo = settings.textureMemory) === null || _settings$textureMemo === void 0 ? void 0 : _settings$textureMemo.criticalThreshold) || 124e6,
              targetThresholdLevel: ((_settings$textureMemo2 = settings.textureMemory) === null || _settings$textureMemo2 === void 0 ? void 0 : _settings$textureMemo2.targetThresholdLevel) || 0.5,
              cleanupInterval: ((_settings$textureMemo3 = settings.textureMemory) === null || _settings$textureMemo3 === void 0 ? void 0 : _settings$textureMemo3.cleanupInterval) || 5e3,
              debugLogging: ((_settings$textureMemo4 = settings.textureMemory) === null || _settings$textureMemo4 === void 0 ? void 0 : _settings$textureMemo4.debugLogging) || false,
              baselineMemoryAllocation: ((_settings$textureMemo5 = settings.textureMemory) === null || _settings$textureMemo5 === void 0 ? void 0 : _settings$textureMemo5.baselineMemoryAllocation) || 26e6,
              doNotExceedCriticalThreshold: ((_settings$textureMemo6 = settings.textureMemory) === null || _settings$textureMemo6 === void 0 ? void 0 : _settings$textureMemo6.doNotExceedCriticalThreshold) || false
            };
            var resolvedSettings = {
              appWidth: settings.appWidth || 1920,
              appHeight: settings.appHeight || 1080,
              textureMemory: resolvedTxSettings,
              boundsMargin: settings.boundsMargin || 0,
              deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
              devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || window.devicePixelRatio,
              clearColor: (_settings$clearColor = settings.clearColor) !== null && _settings$clearColor !== void 0 ? _settings$clearColor : 0,
              fpsUpdateInterval: settings.fpsUpdateInterval || 0,
              numImageWorkers: settings.numImageWorkers !== undefined ? settings.numImageWorkers : 2,
              enableContextSpy: (_settings$enableConte = settings.enableContextSpy) !== null && _settings$enableConte !== void 0 ? _settings$enableConte : false,
              forceWebGL2: (_settings$forceWebGL = settings.forceWebGL2) !== null && _settings$forceWebGL !== void 0 ? _settings$forceWebGL : false,
              inspector: (_settings$inspector = settings.inspector) !== null && _settings$inspector !== void 0 ? _settings$inspector : false,
              renderEngine: settings.renderEngine,
              quadBufferSize: (_settings$quadBufferS = settings.quadBufferSize) !== null && _settings$quadBufferS !== void 0 ? _settings$quadBufferS : 4 * 1024 * 1024,
              fontEngines: settings.fontEngines,
              strictBounds: (_settings$strictBound = settings.strictBounds) !== null && _settings$strictBound !== void 0 ? _settings$strictBound : true,
              textureProcessingTimeLimit: settings.textureProcessingTimeLimit || 10,
              canvas: settings.canvas || document.createElement("canvas"),
              createImageBitmapSupport: settings.createImageBitmapSupport || "full"
            };
            this.settings = resolvedSettings;
            var appWidth = resolvedSettings.appWidth,
              appHeight = resolvedSettings.appHeight,
              deviceLogicalPixelRatio = resolvedSettings.deviceLogicalPixelRatio,
              devicePhysicalPixelRatio = resolvedSettings.devicePhysicalPixelRatio,
              inspector = resolvedSettings.inspector,
              canvas = resolvedSettings.canvas;
            var deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
            var deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
            this.canvas = canvas;
            canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
            canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
            canvas.style.width = `${deviceLogicalWidth}px`;
            canvas.style.height = `${deviceLogicalHeight}px`;
            this.stage = new Stage({
              appWidth: this.settings.appWidth,
              appHeight: this.settings.appHeight,
              boundsMargin: this.settings.boundsMargin,
              clearColor: this.settings.clearColor,
              canvas: this.canvas,
              deviceLogicalPixelRatio: this.settings.deviceLogicalPixelRatio,
              devicePhysicalPixelRatio: this.settings.devicePhysicalPixelRatio,
              enableContextSpy: this.settings.enableContextSpy,
              forceWebGL2: this.settings.forceWebGL2,
              fpsUpdateInterval: this.settings.fpsUpdateInterval,
              numImageWorkers: this.settings.numImageWorkers,
              renderEngine: this.settings.renderEngine,
              textureMemory: resolvedTxSettings,
              eventBus: this,
              quadBufferSize: this.settings.quadBufferSize,
              fontEngines: this.settings.fontEngines,
              inspector: this.settings.inspector !== null,
              strictBounds: this.settings.strictBounds,
              textureProcessingTimeLimit: this.settings.textureProcessingTimeLimit,
              createImageBitmapSupport: this.settings.createImageBitmapSupport
            });
            this.root = this.stage.root;
            var targetEl;
            if (typeof target === "string") {
              targetEl = document.getElementById(target);
            } else {
              targetEl = target;
            }
            if (!targetEl) {
              throw new Error("Could not find target element");
            }
            targetEl.appendChild(canvas);
          }
          /**
           * Create a new scene graph node
           *
           * @remarks
           * A node is the main graphical building block of the Renderer scene graph. It
           * can be a container for other nodes, or it can be a leaf node that renders a
           * solid color, gradient, image, or specific texture, using a specific shader.
           *
           * To create a text node, see {@link createTextNode}.
           *
           * See {@link CoreNode} for more details.
           *
           * @param props
           * @returns
           */
          createNode(props) {
            assertTruthy(this.stage);
            var node = this.stage.createNode(props);
            if (this.inspector) {
              return this.inspector.createNode(node);
            }
            return node;
          }
          /**
           * Create a new scene graph text node
           *
           * @remarks
           * A text node is the second graphical building block of the Renderer scene
           * graph. It renders text using a specific text renderer that is automatically
           * chosen based on the font requested and what type of fonts are installed
           * into an app.
           *
           * See {@link ITextNode} for more details.
           *
           * @param props
           * @returns
           */
          createTextNode(props) {
            var textNode = this.stage.createTextNode(props);
            if (this.inspector) {
              return this.inspector.createTextNode(textNode);
            }
            return textNode;
          }
          /**
           * Destroy a node
           *
           * @remarks
           * This method destroys a node
           *
           * @param node
           * @returns
           */
          destroyNode(node) {
            if (this.inspector) {
              this.inspector.destroyNode(node.id);
            }
            return node.destroy();
          }
          /**
           * Create a new texture reference
           *
           * @remarks
           * This method creates a new reference to a texture. The texture is not
           * loaded until it is used on a node.
           *
           * It can be assigned to a node's `texture` property, or it can be used
           * when creating a SubTexture.
           *
           * @param textureType
           * @param props
           * @param options
           * @returns
           */
          createTexture(textureType, props) {
            return this.stage.txManager.createTexture(textureType, props);
          }
          /**
           * Create a new shader controller for a shader type
           *
           * @remarks
           * This method creates a new Shader Controller for a specific shader type.
           *
           * If the shader has not been loaded yet, it will be loaded. Otherwise, the
           * existing shader will be reused.
           *
           * It can be assigned to a Node's `shader` property.
           *
           * @param shaderType
           * @param props
           * @returns
           */
          createShader(shType, props) {
            return this.stage.shManager.createShader(shType, props);
          }
          /**
           * Get a Node by its ID
           *
           * @param id
           * @returns
           */
          getNodeById(id) {
            var _this$stage;
            var root = (_this$stage = this.stage) === null || _this$stage === void 0 ? void 0 : _this$stage.root;
            if (!root) {
              return null;
            }
            var findNode = node => {
              if (node.id === id) {
                return node;
              }
              var _iterator11 = _createForOfIteratorHelper(node.children),
                _step11;
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var child = _step11.value;
                  var found = findNode(child);
                  if (found) {
                    return found;
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
              return null;
            };
            return findNode(root);
          }
          toggleFreeze() {
            throw new Error("Not implemented");
          }
          advanceFrame() {
            throw new Error("Not implemented");
          }
          getBufferInfo() {
            return this.stage.renderer.getBufferInfo();
          }
          /**
           * Re-render the current frame without advancing any running animations.
           *
           * @remarks
           * Any state changes will be reflected in the re-rendered frame. Useful for
           * debugging.
           *
           * May not do anything if the render loop is running on a separate worker.
           */
          rerender() {
            this.stage.requestRender();
          }
          /**
           * Cleanup textures that are not being used
           *
           * @param aggressive - If true, will cleanup all textures, regardless of render status
           *
           * @remarks
           * This can be used to free up GFX memory used by textures that are no longer
           * being displayed.
           *
           * This routine is also called automatically when the memory used by textures
           * exceeds the critical threshold on frame generation **OR** when the renderer
           * is idle and the memory used by textures exceeds the target threshold.
           *
           * **NOTE**: This is a heavy operation and should be used sparingly.
           * **NOTE2**: This will not cleanup textures that are currently being displayed.
           * **NOTE3**: This will not cleanup textures that are marked as `preventCleanup`.
           * **NOTE4**: This has nothing to do with the garbage collection of JavaScript.
           */
          cleanup() {
            var aggressive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.stage.cleanup(aggressive);
          }
          /**
           * Sets the clear color for the stage.
           *
           * @param color - The color to set as the clear color.
           */
          setClearColor(color) {
            this.stage.setClearColor(color);
          }
        }
        var Default = {
          vertex: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    attribute vec2 a_position;
    attribute vec2 a_textureCoords;
    attribute vec4 a_color;
    attribute vec2 a_nodeCoords;

    uniform vec2 u_resolution;
    uniform float u_pixelRatio;

    varying vec4 v_color;
    varying vec2 v_textureCoords;
    varying vec2 v_nodeCoords;

    void main() {
      vec2 normalized = a_position * u_pixelRatio;
      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);

      v_color = a_color;
      v_nodeCoords = a_nodeCoords;
      v_textureCoords = a_textureCoords;

      gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);
      gl_Position.y = -sign(screenSpace.y) * gl_Position.y;
    }
  `,
          fragment: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    uniform vec2 u_resolution;
    uniform sampler2D u_texture;

    varying vec4 v_color;
    varying vec2 v_textureCoords;

    void main() {
      vec4 color = texture2D(u_texture, v_textureCoords);
      gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoords);
    }
  `
        };
        function createShader(glw, type, source) {
          var shader = glw.createShader(type);
          if (!shader) {
            var glError = glw.getError();
            throw new Error(`Unable to create the shader: ${type === glw.VERTEX_SHADER ? "VERTEX_SHADER" : "FRAGMENT_SHADER"}.${glError ? ` WebGlContext Error: ${glError}` : ""}`);
          }
          glw.shaderSource(shader, source);
          glw.compileShader(shader);
          var success = !!glw.getShaderParameter(shader, glw.COMPILE_STATUS);
          if (success) {
            return shader;
          }
          console.error(glw.getShaderInfoLog(shader));
          glw.deleteShader(shader);
        }
        function createProgram(glw, vertexShader, fragmentShader) {
          var program = glw.createProgram();
          if (!program) {
            throw new Error("Unable to create program");
          }
          glw.attachShader(program, vertexShader);
          glw.attachShader(program, fragmentShader);
          glw.linkProgram(program);
          var success = !!glw.getProgramParameter(program, glw.LINK_STATUS);
          if (success) {
            return program;
          }
          console.warn(glw.getProgramInfoLog(program));
          glw.deleteProgram(program);
          return undefined;
        }
        class WebGlShaderProgram {
          constructor(renderer, config, resolvedProps) {
            _defineProperty(this, "boundBufferCollection", null);
            _defineProperty(this, "program", void 0);
            /**
             * Vertex Array Object
             *
             * @remarks
             * Used by WebGL2 Only
             */
            _defineProperty(this, "vao", void 0);
            _defineProperty(this, "renderer", void 0);
            _defineProperty(this, "glw", void 0);
            _defineProperty(this, "attributeLocations", void 0);
            _defineProperty(this, "lifecycle", void 0);
            _defineProperty(this, "useSystemAlpha", false);
            _defineProperty(this, "useSystemDimensions", false);
            _defineProperty(this, "supportsIndexedTextures", false);
            this.renderer = renderer;
            var glw = this.glw = renderer.glw;
            var webGl2 = glw.isWebGl2();
            var requiredExtensions = [];
            this.supportsIndexedTextures = config.supportsIndexedTextures || this.supportsIndexedTextures;
            requiredExtensions = webGl2 && config.webgl2Extensions || !webGl2 && config.webgl1Extensions || [];
            var glVersion = webGl2 ? "2.0" : "1.0";
            requiredExtensions.forEach(extensionName => {
              if (!glw.getExtension(extensionName)) {
                throw new Error(`Shader "${this.constructor.name}" requires extension "${extensionName}" for WebGL ${glVersion} but wasn't found`);
              }
            });
            var vertexSource = config.vertex instanceof Function ? config.vertex(renderer, resolvedProps) : config.vertex;
            if (vertexSource === undefined) {
              vertexSource = Default.vertex;
            }
            var fragmentSource = config.fragment instanceof Function ? config.fragment(renderer, resolvedProps) : config.fragment;
            var vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
            if (!vertexShader) {
              throw new Error("Vertex shader creation failed");
            }
            var fragmentShader = createShader(glw, glw.FRAGMENT_SHADER, fragmentSource);
            if (!fragmentShader) {
              throw new Error("fragment shader creation failed");
            }
            var program = createProgram(glw, vertexShader, fragmentShader);
            if (!program) {
              throw new Error();
            }
            this.program = program;
            this.attributeLocations = glw.getAttributeLocations(program);
            this.useSystemAlpha = this.glw.getUniformLocation(program, "u_alpha") !== null;
            this.useSystemDimensions = this.glw.getUniformLocation(program, "u_dimensions") !== null;
            this.lifecycle = {
              update: config.update,
              canBatch: config.canBatch
            };
          }
          disableAttribute(location) {
            this.glw.disableVertexAttribArray(location);
          }
          disableAttributes() {
            var glw = this.glw;
            var attribs = Object.keys(this.attributeLocations);
            var attribLen = attribs.length;
            for (var i = 0; i < attribLen; i++) {
              glw.disableVertexAttribArray(i);
            }
          }
          reuseRenderOp(renderOpA, renderOpB) {
            var _renderOpA$shader, _renderOpB$shader;
            var lifecycleCheck = this.lifecycle.canBatch ? this.lifecycle.canBatch(renderOpA, renderOpB) : true;
            if (!lifecycleCheck) {
              return false;
            }
            if (this.useSystemAlpha) {
              if (renderOpA.alpha !== renderOpB.alpha) {
                return false;
              }
            }
            if (this.useSystemDimensions) {
              if (renderOpA.width !== renderOpB.width || renderOpA.height !== renderOpB.height) {
                return false;
              }
            }
            var shaderPropsA = (_renderOpA$shader = renderOpA.shader) === null || _renderOpA$shader === void 0 ? void 0 : _renderOpA$shader.getResolvedProps();
            var shaderPropsB = (_renderOpB$shader = renderOpB.shader) === null || _renderOpB$shader === void 0 ? void 0 : _renderOpB$shader.getResolvedProps();
            if (shaderPropsA !== undefined && shaderPropsB !== undefined) {
              for (var _key11 in shaderPropsA) {
                if (shaderPropsA[_key11] !== shaderPropsB[_key11]) {
                  return false;
                }
              }
            }
            return true;
          }
          bindRenderOp(renderOp) {
            this.bindBufferCollection(renderOp.buffers);
            this.bindTextures(renderOp.textures);
            var parentHasRenderTexture = renderOp.quad.parentHasRenderTexture;
            if (renderOp.quad.rtt && parentHasRenderTexture) {
              return;
            }
            if (parentHasRenderTexture) {
              var _renderOp$quad$frameb = renderOp.quad.framebufferDimensions,
                width = _renderOp$quad$frameb.width,
                height = _renderOp$quad$frameb.height;
              this.glw.uniform1f("u_pixelRatio", 1);
              this.glw.uniform2f("u_resolution", width, height);
            } else {
              this.glw.uniform1f("u_pixelRatio", renderOp.renderer.stage.pixelRatio);
              this.glw.uniform2f("u_resolution", this.glw.canvas.width, this.glw.canvas.height);
            }
            this.glw.uniform1f("u_rtt", renderOp.quad.rtt ? 1 : 0);
            if (this.useSystemAlpha) {
              this.glw.uniform1f("u_alpha", renderOp.quad.alpha);
            }
            if (this.useSystemDimensions) {
              this.glw.uniform2f("u_dimensions", renderOp.quad.width, renderOp.quad.height);
            }
            if (renderOp.sdfShaderProps !== undefined) {
              var _renderOp$shader$shad;
              (_renderOp$shader$shad = renderOp.shader.shaderType.onSdfBind) === null || _renderOp$shader$shad === void 0 || _renderOp$shader$shad.call(this.glw, renderOp.sdfShaderProps);
              return;
            }
            if (renderOp.shader.props) {
              for (var _key12 in renderOp.shader.uniforms.single) {
                var _renderOp$shader$unif = renderOp.shader.uniforms.single[_key12],
                  method = _renderOp$shader$unif.method,
                  value = _renderOp$shader$unif.value;
                this.glw[method](_key12, value);
              }
              for (var _key13 in renderOp.shader.uniforms.vec2) {
                var _renderOp$shader$unif2 = renderOp.shader.uniforms.vec2[_key13],
                  _method = _renderOp$shader$unif2.method,
                  _value2 = _renderOp$shader$unif2.value;
                this.glw[_method](_key13, _value2[0], _value2[1]);
              }
              for (var _key14 in renderOp.shader.uniforms.vec3) {
                var _renderOp$shader$unif3 = renderOp.shader.uniforms.vec3[_key14],
                  _method2 = _renderOp$shader$unif3.method,
                  _value3 = _renderOp$shader$unif3.value;
                this.glw[_method2](_key14, _value3[0], _value3[1], _value3[2]);
              }
              for (var _key15 in renderOp.shader.uniforms.vec4) {
                var _renderOp$shader$unif4 = renderOp.shader.uniforms.vec4[_key15],
                  _method3 = _renderOp$shader$unif4.method,
                  _value4 = _renderOp$shader$unif4.value;
                this.glw[_method3](_key15, _value4[0], _value4[1], _value4[2], _value4[3]);
              }
            }
          }
          bindBufferCollection(buffer) {
            var glw = this.glw;
            var attribs = Object.keys(this.attributeLocations);
            var attribLen = attribs.length;
            for (var i = 0; i < attribLen; i++) {
              var name = attribs[i];
              var resolvedBuffer = buffer.getBuffer(name);
              var resolvedInfo = buffer.getAttributeInfo(name);
              if (!resolvedBuffer || !resolvedInfo) {
                continue;
              }
              glw.enableVertexAttribArray(i);
              glw.vertexAttribPointer(resolvedBuffer, i, resolvedInfo.size, resolvedInfo.type, resolvedInfo.normalized, resolvedInfo.stride, resolvedInfo.offset);
            }
          }
          bindTextures(textures) {
            this.glw.activeTexture(0);
            this.glw.bindTexture(textures[0].ctxTexture);
          }
          attach() {
            this.glw.useProgram(this.program);
            if (this.glw.isWebGl2() && this.vao) {
              this.glw.bindVertexArray(this.vao);
            }
          }
          detach() {
            this.disableAttributes();
          }
        }
        class TrFontFace extends EventEmitter {
          constructor(options) {
            super();
            _defineProperty(this, "fontFamily", void 0);
            _defineProperty(this, "descriptors", void 0);
            _defineProperty(this, "loaded", false);
            _defineProperty(this, "metrics", null);
            var fontFamily = options.fontFamily,
              descriptors = options.descriptors,
              metrics = options.metrics;
            if (metrics) {
              this.metrics = {
                ascender: metrics.ascender / metrics.unitsPerEm,
                descender: metrics.descender / metrics.unitsPerEm,
                lineGap: metrics.lineGap / metrics.unitsPerEm
              };
            }
            this.fontFamily = fontFamily;
            this.descriptors = _objectSpread({
              style: "normal",
              weight: "normal",
              stretch: "normal"
            }, descriptors);
          }
          /**
           * Convert a TrFontFaceDescriptors to a FontFaceDescriptors which differ slightly
           *
           * @param descriptors
           * @returns
           */
          static convertToCssFontFaceDescriptors(descriptors) {
            return {
              style: descriptors.style,
              weight: typeof descriptors.weight === "number" ? `${descriptors.weight}` : descriptors.weight,
              stretch: descriptors.stretch,
              unicodeRange: descriptors.unicodeRange,
              featureSettings: descriptors.featureSettings,
              display: descriptors.display
            };
          }
        }
        class WebTrFontFace extends TrFontFace {
          constructor(options) {
            super(options);
            _defineProperty(this, "fontFace", void 0);
            _defineProperty(this, "fontUrl", void 0);
            var fontFamily = options.fontFamily,
              fontUrl = options.fontUrl;
            var fontUrlWithoutParentheses = fontUrl.replace(/\(|\)/g, "");
            var determinedDescriptors = this.descriptors;
            var cssDescriptors = {
              style: determinedDescriptors.style,
              weight: typeof determinedDescriptors.weight === "number" ? `${determinedDescriptors.weight}` : determinedDescriptors.weight,
              stretch: determinedDescriptors.stretch,
              unicodeRange: determinedDescriptors.unicodeRange,
              featureSettings: determinedDescriptors.featureSettings,
              display: determinedDescriptors.display
            };
            for (var k in cssDescriptors) {
              var _key16 = k;
              if (cssDescriptors[_key16] === undefined) {
                delete cssDescriptors[_key16];
              }
            }
            var fontFace = new FontFace(fontFamily, `url(${fontUrlWithoutParentheses})`, cssDescriptors);
            if (fontUrlWithoutParentheses.length > 0) {
              fontFace.load().then(() => {
                this.loaded = true;
                this.emit("loaded");
              }).catch(console.error);
            } else {
              this.loaded = true;
              this.emit("loaded");
            }
            this.fontFace = fontFace;
            this.fontUrl = fontUrl;
          }
        }
        class CoreRenderOp {}
        class WebGlRenderOp extends CoreRenderOp {
          constructor(renderer, quad, bufferIdx) {
            super();
            _defineProperty(this, "length", 0);
            _defineProperty(this, "numQuads", 0);
            _defineProperty(this, "textures", []);
            /**
             * need to improve this when TextRenderers are refactored
             */
            _defineProperty(this, "sdfShaderProps", void 0);
            _defineProperty(this, "sdfNode", void 0);
            _defineProperty(this, "maxTextures", void 0);
            _defineProperty(this, "buffers", void 0);
            _defineProperty(this, "shader", void 0);
            this.renderer = renderer;
            this.quad = quad;
            this.bufferIdx = bufferIdx;
            this.buffers = quad.sdfBuffers || renderer.quadBufferCollection;
            this.shader = quad.shader;
            this.sdfShaderProps = quad.sdfShaderProps;
            this.maxTextures = this.shader.program.supportsIndexedTextures ? renderer.glw.getParameter(renderer.glw.MAX_VERTEX_TEXTURE_IMAGE_UNITS) : 1;
          }
          addTexture(texture) {
            var textures = this.textures,
              maxTextures = this.maxTextures;
            var existingIdx = -1;
            var texturesLength = textures.length;
            for (var i = 0; i < texturesLength; i++) {
              var t = textures[i];
              if (t === texture) {
                existingIdx = i;
                break;
              }
            }
            if (existingIdx !== -1) {
              return existingIdx;
            }
            if (texturesLength >= maxTextures) {
              return 4294967295;
            }
            this.textures.push(texture);
            return texturesLength;
          }
          draw() {
            var _this$renderer = this.renderer,
              glw = _this$renderer.glw,
              options = _this$renderer.options,
              stage = _this$renderer.stage;
            stage.shManager.useShader(this.shader.program);
            this.shader.program.bindRenderOp(this);
            var quadIdx = this.bufferIdx / 32 * 6 * 2;
            if (this.quad.clippingRect.valid) {
              var _this$quad$clippingRe = this.quad.clippingRect,
                x = _this$quad$clippingRe.x,
                y = _this$quad$clippingRe.y,
                width = _this$quad$clippingRe.width,
                height = _this$quad$clippingRe.height;
              var pixelRatio = this.quad.parentHasRenderTexture ? 1 : stage.pixelRatio;
              var canvasHeight = options.canvas.height;
              var clipX = Math.round(x * pixelRatio);
              var clipWidth = Math.round(width * pixelRatio);
              var clipHeight = Math.round(height * pixelRatio);
              var clipY = Math.round(canvasHeight - clipHeight - y * pixelRatio);
              if (this.quad.parentHasRenderTexture) {
                clipY = this.quad.framebufferDimensions ? this.quad.framebufferDimensions.height - this.quad.height : 0;
              }
              glw.setScissorTest(true);
              glw.scissor(clipX, clipY, clipWidth, clipHeight);
            } else {
              glw.setScissorTest(false);
            }
            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
          }
        }
        function getWebGlParameters(glw) {
          var params = {
            MAX_RENDERBUFFER_SIZE: 0,
            MAX_TEXTURE_SIZE: 0,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
            MAX_VIEWPORT_DIMS: 0,
            // Code below will replace this with an Int32Array
            MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0,
            MAX_TEXTURE_IMAGE_UNITS: 0,
            MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0,
            MAX_VERTEX_ATTRIBS: 0,
            MAX_VARYING_VECTORS: 0,
            MAX_VERTEX_UNIFORM_VECTORS: 0,
            MAX_FRAGMENT_UNIFORM_VECTORS: 0
          };
          var keys = Object.keys(params);
          keys.forEach(key => {
            params[key] = glw.getParameter(glw[key]);
          });
          return params;
        }
        function getWebGlExtensions(glw) {
          var extensions = {
            ANGLE_instanced_arrays: null,
            WEBGL_compressed_texture_s3tc: null,
            WEBGL_compressed_texture_astc: null,
            WEBGL_compressed_texture_etc: null,
            WEBGL_compressed_texture_etc1: null,
            WEBGL_compressed_texture_pvrtc: null,
            WEBKIT_WEBGL_compressed_texture_pvrtc: null,
            WEBGL_compressed_texture_s3tc_srgb: null,
            OES_vertex_array_object: null
          };
          var keys = Object.keys(extensions);
          keys.forEach(key => {
            extensions[key] = glw.getExtension(key);
          });
          return extensions;
        }
        function createIndexBuffer(glw, size) {
          var maxQuads = ~~(size / 80);
          var indices = new Uint16Array(maxQuads * 6);
          for (var i = 0, j = 0; i < maxQuads; i += 6, j += 4) {
            indices[i] = j;
            indices[i + 1] = j + 1;
            indices[i + 2] = j + 2;
            indices[i + 3] = j + 2;
            indices[i + 4] = j + 1;
            indices[i + 5] = j + 3;
          }
          var buffer = glw.createBuffer();
          glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW);
        }
        function isHTMLImageElement(obj) {
          return obj !== null && (_typeof(obj) === "object" && obj.constructor && obj.constructor.name === "HTMLImageElement" || typeof HTMLImageElement !== "undefined" && obj instanceof HTMLImageElement);
        }
        var TRANSPARENT_TEXTURE_DATA = new Uint8Array([0, 0, 0, 0]);
        class WebGlCtxTexture extends CoreContextTexture {
          constructor(glw, memManager, textureSource) {
            super(memManager, textureSource);
            _defineProperty(this, "_nativeCtxTexture", null);
            _defineProperty(this, "_w", 0);
            _defineProperty(this, "_h", 0);
            this.glw = glw;
          }
          get ctxTexture() {
            if (this.state === "freed") {
              this.load();
              return null;
            }
            assertTruthy(this._nativeCtxTexture);
            return this._nativeCtxTexture;
          }
          get w() {
            return this._w;
          }
          get h() {
            return this._h;
          }
          /**
           * Load the texture data from the Texture source and upload it to the GPU
           *
           * @remarks
           * This method is called automatically when accessing the ctxTexture property
           * if the texture hasn't been loaded yet. But it can also be called manually
           * to force the texture to be pre-loaded prior to accessing the ctxTexture
           * property.
           */
          load() {
            if (this.state === "loading" || this.state === "loaded") {
              return;
            }
            this.state = "loading";
            this.textureSource.setState("loading");
            this._nativeCtxTexture = this.createNativeCtxTexture();
            if (this._nativeCtxTexture === null) {
              this.state = "failed";
              this.textureSource.setState("failed", new Error("Could not create WebGL Texture"));
              console.error("Could not create WebGL Texture");
              return;
            }
            this.onLoadRequest().then(_ref20 => {
              var width = _ref20.width,
                height = _ref20.height;
              if (this.state === "freed") {
                return;
              }
              this.state = "loaded";
              this._w = width;
              this._h = height;
              this.textureSource.setState("loaded", {
                width,
                height
              });
              this.textureSource.freeTextureData();
            }).catch(err => {
              if (this.state === "freed") {
                return;
              }
              this.state = "failed";
              this.textureSource.setState("failed", err);
              this.textureSource.freeTextureData();
              console.error(err);
            });
          }
          /**
           * Called when the texture data needs to be loaded and uploaded to a texture
           */
          onLoadRequest() {
            var _this11 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var glw, textureData, width, height, tdata, format, formatBytes, memoryPadding, _mipmaps$, mipmaps, _tdata$width, width2, _tdata$height, height2, type, glInternalFormat, view;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    glw = _this11.glw;
                    textureData = _this11.textureSource.textureData;
                    if (!(textureData === null || _this11._nativeCtxTexture === null)) {
                      _context13.next = 4;
                      break;
                    }
                    throw new Error("Texture data or native texture is null " + _this11.textureSource.type);
                  case 4:
                    glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
                    _this11.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
                    width = 0;
                    height = 0;
                    glw.activeTexture(0);
                    tdata = textureData.data;
                    format = glw.RGBA;
                    formatBytes = 4;
                    memoryPadding = 1.1;
                    if (typeof ImageBitmap !== "undefined" && tdata instanceof ImageBitmap || tdata instanceof ImageData ||
                    // not using typeof HTMLImageElement due to web worker
                    isHTMLImageElement(tdata)) {
                      width = tdata.width;
                      height = tdata.height;
                      glw.bindTexture(_this11._nativeCtxTexture);
                      glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
                      glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata);
                      _this11.setTextureMemUse(height * width * formatBytes * memoryPadding);
                    } else if (tdata === null) {
                      width = 0;
                      height = 0;
                      glw.bindTexture(_this11._nativeCtxTexture);
                      glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
                      _this11.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
                    } else if ("mipmaps" in tdata && tdata.mipmaps) {
                      mipmaps = tdata.mipmaps, _tdata$width = tdata.width, width2 = _tdata$width === void 0 ? 0 : _tdata$width, _tdata$height = tdata.height, height2 = _tdata$height === void 0 ? 0 : _tdata$height, type = tdata.type, glInternalFormat = tdata.glInternalFormat;
                      view = type === "ktx" ? new DataView((_mipmaps$ = mipmaps[0]) !== null && _mipmaps$ !== void 0 ? _mipmaps$ : new ArrayBuffer(0)) : mipmaps[0];
                      glw.bindTexture(_this11._nativeCtxTexture);
                      glw.compressedTexImage2D(0, glInternalFormat, width2, height2, 0, view);
                      glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
                      glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
                      glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
                      glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
                      _this11.setTextureMemUse(view.byteLength);
                    } else if (tdata && tdata instanceof Uint8Array) {
                      width = 1;
                      height = 1;
                      glw.bindTexture(_this11._nativeCtxTexture);
                      glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
                      glw.texImage2D(0, format, width, height, 0, format, glw.UNSIGNED_BYTE, tdata);
                      _this11.setTextureMemUse(width * height * formatBytes);
                    } else {
                      console.error(`WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned`, textureData);
                    }
                    return _context13.abrupt("return", {
                      width,
                      height
                    });
                  case 15:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13);
            }))();
          }
          /**
           * Free the WebGLTexture from the GPU
           *
           * @returns
           */
          free() {
            if (this.state === "freed") {
              return;
            }
            this.state = "freed";
            this.textureSource.setState("freed");
            this._w = 0;
            this._h = 0;
            if (this._nativeCtxTexture !== null) {
              this.glw.deleteTexture(this._nativeCtxTexture);
              this.setTextureMemUse(0);
              this._nativeCtxTexture = null;
            }
            this.textureSource.freeTextureData();
          }
          /**
           * Create native context texture
           *
           * @remarks
           * When this method returns the returned texture will be bound to the GL context state.
           *
           * @param width
           * @param height
           * @returns
           */
          createNativeCtxTexture() {
            var glw = this.glw;
            var nativeTexture = glw.createTexture();
            if (!nativeTexture) {
              return null;
            }
            glw.activeTexture(0);
            glw.bindTexture(nativeTexture);
            glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
            glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
            glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
            glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
            return nativeTexture;
          }
        }
        class WebGlCtxSubTexture extends WebGlCtxTexture {
          constructor(glw, memManager, textureSource) {
            super(glw, memManager, textureSource);
          }
          onLoadRequest() {
            var _this12 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var _props$data2, _props$data3;
              var props;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    props = _this12.textureSource.textureData;
                    if (!(props.data instanceof Uint8Array)) {
                      _context14.next = 3;
                      break;
                    }
                    return _context14.abrupt("return", {
                      width: 1,
                      height: 1
                    });
                  case 3:
                    return _context14.abrupt("return", {
                      width: ((_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.width) || 0,
                      height: ((_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.height) || 0
                    });
                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14);
            }))();
          }
        }
        class BufferCollection {
          constructor(config) {
            this.config = config;
          }
          /**
           * Get the WebGLBuffer associated with the given attribute name if it exists.
           *
           * @param attributeName
           * @returns
           */
          getBuffer(attributeName) {
            var _this$config$find;
            return (_this$config$find = this.config.find(item => item.attributes[attributeName])) === null || _this$config$find === void 0 ? void 0 : _this$config$find.buffer;
          }
          /**
           * Get the AttributeInfo associated with the given attribute name if it exists.
           *
           * @param attributeName
           * @returns
           */
          getAttributeInfo(attributeName) {
            var _this$config$find2;
            return (_this$config$find2 = this.config.find(item => item.attributes[attributeName])) === null || _this$config$find2 === void 0 ? void 0 : _this$config$find2.attributes[attributeName];
          }
        }
        function isWebGl2(gl) {
          return self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext;
        }
        class WebGlContextWrapper {
          //#endregion WebGL Enums
          constructor(gl) {
            //#region Cached WebGL State
            _defineProperty(this, "activeTextureUnit", 0);
            _defineProperty(this, "texture2dUnits", void 0);
            _defineProperty(this, "texture2dParams", /* @__PURE__ */new WeakMap());
            _defineProperty(this, "scissorEnabled", void 0);
            _defineProperty(this, "scissorX", void 0);
            _defineProperty(this, "scissorY", void 0);
            _defineProperty(this, "scissorWidth", void 0);
            _defineProperty(this, "scissorHeight", void 0);
            _defineProperty(this, "blendEnabled", void 0);
            _defineProperty(this, "blendSrcRgb", void 0);
            _defineProperty(this, "blendDstRgb", void 0);
            _defineProperty(this, "blendSrcAlpha", void 0);
            _defineProperty(this, "blendDstAlpha", void 0);
            _defineProperty(this, "boundArrayBuffer", void 0);
            _defineProperty(this, "boundElementArrayBuffer", void 0);
            _defineProperty(this, "curProgram", void 0);
            //#endregion Cached WebGL State
            //#region Canvas
            _defineProperty(this, "canvas", void 0);
            //#endregion Canvas
            //#region WebGL Enums
            _defineProperty(this, "MAX_RENDERBUFFER_SIZE", void 0);
            _defineProperty(this, "MAX_TEXTURE_SIZE", void 0);
            _defineProperty(this, "MAX_VIEWPORT_DIMS", void 0);
            _defineProperty(this, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", void 0);
            _defineProperty(this, "MAX_TEXTURE_IMAGE_UNITS", void 0);
            _defineProperty(this, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", void 0);
            _defineProperty(this, "MAX_VERTEX_ATTRIBS", void 0);
            _defineProperty(this, "MAX_VARYING_VECTORS", void 0);
            _defineProperty(this, "MAX_VERTEX_UNIFORM_VECTORS", void 0);
            _defineProperty(this, "MAX_FRAGMENT_UNIFORM_VECTORS", void 0);
            _defineProperty(this, "TEXTURE_MAG_FILTER", void 0);
            _defineProperty(this, "TEXTURE_MIN_FILTER", void 0);
            _defineProperty(this, "TEXTURE_WRAP_S", void 0);
            _defineProperty(this, "TEXTURE_WRAP_T", void 0);
            _defineProperty(this, "LINEAR", void 0);
            _defineProperty(this, "CLAMP_TO_EDGE", void 0);
            _defineProperty(this, "RGB", void 0);
            _defineProperty(this, "RGBA", void 0);
            _defineProperty(this, "UNSIGNED_BYTE", void 0);
            _defineProperty(this, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", void 0);
            _defineProperty(this, "UNPACK_FLIP_Y_WEBGL", void 0);
            _defineProperty(this, "FLOAT", void 0);
            _defineProperty(this, "TRIANGLES", void 0);
            _defineProperty(this, "UNSIGNED_SHORT", void 0);
            _defineProperty(this, "ONE", void 0);
            _defineProperty(this, "ONE_MINUS_SRC_ALPHA", void 0);
            _defineProperty(this, "VERTEX_SHADER", void 0);
            _defineProperty(this, "FRAGMENT_SHADER", void 0);
            _defineProperty(this, "STATIC_DRAW", void 0);
            _defineProperty(this, "COMPILE_STATUS", void 0);
            _defineProperty(this, "LINK_STATUS", void 0);
            _defineProperty(this, "DYNAMIC_DRAW", void 0);
            _defineProperty(this, "COLOR_ATTACHMENT0", void 0);
            _defineProperty(this, "INVALID_ENUM", void 0);
            _defineProperty(this, "INVALID_OPERATION", void 0);
            this.gl = gl;
            this.activeTextureUnit = gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0;
            var maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
            this.texture2dUnits = new Array(maxTextureUnits).fill(undefined).map((_, i) => {
              this.activeTexture(i);
              return gl.getParameter(gl.TEXTURE_BINDING_2D);
            });
            this.activeTexture(this.activeTextureUnit);
            this.scissorEnabled = gl.isEnabled(gl.SCISSOR_TEST);
            var scissorBox = gl.getParameter(gl.SCISSOR_BOX);
            this.scissorX = scissorBox[0];
            this.scissorY = scissorBox[1];
            this.scissorWidth = scissorBox[2];
            this.scissorHeight = scissorBox[3];
            this.blendEnabled = gl.isEnabled(gl.BLEND);
            this.blendSrcRgb = gl.getParameter(gl.BLEND_SRC_RGB);
            this.blendDstRgb = gl.getParameter(gl.BLEND_DST_RGB);
            this.blendSrcAlpha = gl.getParameter(gl.BLEND_SRC_ALPHA);
            this.blendDstAlpha = gl.getParameter(gl.BLEND_DST_ALPHA);
            this.boundArrayBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
            this.boundElementArrayBuffer = gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
            this.curProgram = gl.getParameter(gl.CURRENT_PROGRAM);
            this.canvas = gl.canvas;
            this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE;
            this.MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE;
            this.MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS;
            this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
            this.MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS;
            this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
            this.MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS;
            this.MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS;
            this.MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS;
            this.MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS;
            this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER;
            this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER;
            this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S;
            this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T;
            this.LINEAR = gl.LINEAR;
            this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE;
            this.RGB = gl.RGB;
            this.RGBA = gl.RGBA;
            this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
            this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
            this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
            this.FLOAT = gl.FLOAT;
            this.TRIANGLES = gl.TRIANGLES;
            this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
            this.ONE = gl.ONE;
            this.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA;
            this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
            this.TRIANGLES = gl.TRIANGLES;
            this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
            this.VERTEX_SHADER = gl.VERTEX_SHADER;
            this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER;
            this.STATIC_DRAW = gl.STATIC_DRAW;
            this.COMPILE_STATUS = gl.COMPILE_STATUS;
            this.LINK_STATUS = gl.LINK_STATUS;
            this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW;
            this.COLOR_ATTACHMENT0 = gl.COLOR_ATTACHMENT0;
            this.INVALID_ENUM = gl.INVALID_ENUM;
            this.INVALID_OPERATION = gl.INVALID_OPERATION;
          }
          /**
           * Returns true if the WebGL context is WebGL2
           *
           * @returns
           */
          isWebGl2() {
            return isWebGl2(this.gl);
          }
          /**
           * ```
           * gl.activeTexture(textureUnit + gl.TEXTURE0);
           * ```
           *
           * @remarks
           * **WebGL Difference**: `textureUnit` is based from 0, not `gl.TEXTURE0`.
           *
           * @param textureUnit
           */
          activeTexture(textureUnit) {
            if (this.activeTextureUnit !== textureUnit) {
              this.gl.activeTexture(textureUnit + this.gl.TEXTURE0);
              this.activeTextureUnit = textureUnit;
            }
          }
          /**
           * ```
           * gl.bindTexture(gl.TEXTURE_2D, texture);
           * ```
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
           *
           * @param texture
           */
          bindTexture(texture) {
            if (this.texture2dUnits[this.activeTextureUnit] === texture) {
              return;
            }
            this.texture2dUnits[this.activeTextureUnit] = texture;
            this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
          }
          _getActiveTexture() {
            return this.texture2dUnits[this.activeTextureUnit];
          }
          /**
           * ```
           * gl.texParameteri(gl.TEXTURE_2D, pname, param);
           * ```
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
           *
           * @param pname
           * @param param
           * @returns
           */
          texParameteri(pname, param) {
            var activeTexture = this._getActiveTexture();
            if (!activeTexture) {
              throw new Error("No active texture");
            }
            var textureParams = this.texture2dParams.get(activeTexture);
            if (!textureParams) {
              textureParams = {};
              this.texture2dParams.set(activeTexture, textureParams);
            }
            if (textureParams[pname] === param) {
              return;
            }
            textureParams[pname] = param;
            this.gl.texParameteri(this.gl.TEXTURE_2D, pname, param);
          }
          texImage2D(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) {
            if (format) {
              this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels);
            } else {
              this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
            }
          }
          /**
           * ```
           * gl.compressedTexImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, data);
           * ```
           *
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
           */
          compressedTexImage2D(level, internalformat, width, height, border, data) {
            this.gl.compressedTexImage2D(this.gl.TEXTURE_2D, level, internalformat, width, height, border, data);
          }
          /**
           * ```
           * gl.pixelStorei(pname, param);
           * ```
           *
           * @param pname
           * @param param
           */
          pixelStorei(pname, param) {
            this.gl.pixelStorei(pname, param);
          }
          /**
           * ```
           * gl.generateMipmap(gl.TEXTURE_2D);
           * ```
           *
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
           */
          generateMipmap() {
            this.gl.generateMipmap(this.gl.TEXTURE_2D);
          }
          /**
           * ```
           * gl.createTexture();
           * ```
           *
           * @returns
           */
          createTexture() {
            return this.gl.createTexture();
          }
          /**
           * ```
           * gl.deleteTexture(texture);
           * ```
           *
           * @param texture
           */
          deleteTexture(texture) {
            if (texture) {
              this.texture2dParams.delete(texture);
            }
            this.gl.deleteTexture(texture);
          }
          /**
           * ```
           * gl.deleteFramebuffer(framebuffer);
           *
           * @param framebuffer
           */
          deleteFramebuffer(framebuffer) {
            this.gl.deleteFramebuffer(framebuffer);
          }
          /**
           * ```
           * gl.viewport(x, y, width, height);
           * ```
           */
          viewport(x, y, width, height) {
            this.gl.viewport(x, y, width, height);
          }
          /**
           * ```
           * gl.clearColor(red, green, blue, alpha);
           * ```
           *
           * @param red
           * @param green
           * @param blue
           * @param alpha
           */
          clearColor(red, green, blue, alpha) {
            this.gl.clearColor(red, green, blue, alpha);
          }
          /**
           * ```
           * gl["enable"|"disable"](gl.SCISSOR_TEST);
           * ```
           * @param enable
           */
          setScissorTest(enable) {
            if (enable === this.scissorEnabled) {
              return;
            }
            if (enable) {
              this.gl.enable(this.gl.SCISSOR_TEST);
            } else {
              this.gl.disable(this.gl.SCISSOR_TEST);
            }
            this.scissorEnabled = enable;
          }
          /**
           * ```
           * gl.scissor(x, y, width, height);
           * ```
           *
           * @param x
           * @param y
           * @param width
           * @param height
           */
          scissor(x, y, width, height) {
            if (x !== this.scissorX || y !== this.scissorY || width !== this.scissorWidth || height !== this.scissorHeight) {
              this.gl.scissor(x, y, width, height);
              this.scissorX = x;
              this.scissorY = y;
              this.scissorWidth = width;
              this.scissorHeight = height;
            }
          }
          /**
           * ```
           * gl["enable"|"disable"](gl.BLEND);
           * ```
           *
           * @param blend
           * @returns
           */
          setBlend(blend) {
            if (blend === this.blendEnabled) {
              return;
            }
            if (blend) {
              this.gl.enable(this.gl.BLEND);
            } else {
              this.gl.disable(this.gl.BLEND);
            }
            this.blendEnabled = blend;
          }
          /**
           * ```
           * gl.blendFunc(src, dst);
           * ```
           *
           * @param src
           * @param dst
           */
          blendFunc(src, dst) {
            if (src !== this.blendSrcRgb || dst !== this.blendDstRgb || src !== this.blendSrcAlpha || dst !== this.blendDstAlpha) {
              this.gl.blendFunc(src, dst);
              this.blendSrcRgb = src;
              this.blendDstRgb = dst;
              this.blendSrcAlpha = src;
              this.blendDstAlpha = dst;
            }
          }
          /**
           * ```
           * gl.createBuffer();
           * ```
           *
           * @returns
           */
          createBuffer() {
            return this.gl.createBuffer();
          }
          /**
           * ```
           * gl.createFramebuffer();
           * ```
           * @returns
           */
          createFramebuffer() {
            return this.gl.createFramebuffer();
          }
          /**
           * ```
           * gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
           * ```
           *
           * @param framebuffer
           */
          bindFramebuffer(framebuffer) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
          }
          /**
           * ```
           * gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
           * ```
           * @remarks
           * **WebGL Difference**: Bind target is always `gl.FRAMEBUFFER` and textarget is always `gl.TEXTURE_2D`
           */
          framebufferTexture2D(attachment, texture, level) {
            var gl = this.gl;
            gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, level);
          }
          /**
           * ```
           * gl.clear(gl.COLOR_BUFFER_BIT);
           * ```
           *
           * @remarks
           * **WebGL Difference**: Clear mask is always `gl.COLOR_BUFFER_BIT`
           */
          clear() {
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
          }
          /**
           * ```
           * gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
           * gl.bufferData(gl.ARRAY_BUFFER, data, usage);
           * ```
           *
           * @remarks
           * **WebGL Combo**: `gl.bindBuffer` and `gl.bufferData` are combined into one function.
           *
           * @param buffer
           * @param data
           * @param usage
           */
          arrayBufferData(buffer, data, usage) {
            if (this.boundArrayBuffer !== buffer) {
              this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
              this.boundArrayBuffer = buffer;
            }
            this.gl.bufferData(this.gl.ARRAY_BUFFER, data, usage);
          }
          /**
           * ```
           * gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
           * gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usage);
           * ```
           * @remarks
           * **WebGL Combo**: `gl.bindBuffer` and `gl.bufferData` are combined into one function.
           *
           * @param buffer
           * @param data
           * @param usage
           */
          elementArrayBufferData(buffer, data, usage) {
            if (this.boundElementArrayBuffer !== buffer) {
              this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
              this.boundElementArrayBuffer = buffer;
            }
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, usage);
          }
          /**
           * ```
           * gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
           * gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
           * ```
           *
           * @remarks
           * **WebGL Combo**: `gl.bindBuffer` and `gl.vertexAttribPointer` are combined into one function.
           *
           * @param buffer
           * @param index
           * @param size
           * @param type
           * @param normalized
           * @param stride
           * @param offset
           */
          vertexAttribPointer(buffer, index, size, type, normalized, stride, offset) {
            if (this.boundArrayBuffer !== buffer) {
              this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
              this.boundArrayBuffer = buffer;
            }
            this.gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
          }
          /**
           * Returns object with Attribute names as key and numbers as location values
           *
           * @param program
           * @returns object with numbers
           */
          getUniformLocations(program) {
            var gl = this.gl;
            var length = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
            var result = {};
            for (var i = 0; i < length; i++) {
              var _gl$getActiveUniform = gl.getActiveUniform(program, i),
                name = _gl$getActiveUniform.name;
              result[name] = i;
            }
            return result;
          }
          /**
           * Returns object with Attribute names as key and numbers as location values
           * @param program
           * @returns object with numbers
           */
          getAttributeLocations(program) {
            var gl = this.gl;
            var length = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
            var result = {};
            for (var i = 0; i < length; i++) {
              var _gl$getActiveAttrib = gl.getActiveAttrib(program, i),
                name = _gl$getActiveAttrib.name;
              result[name] = i;
            }
            return result;
          }
          /**
           * ```
           * gl.useProgram(program);
           * ```
           *
           * @param program
           * @returns
           */
          useProgram(program) {
            if (this.curProgram === program) {
              return;
            }
            this.gl.useProgram(program);
            this.curProgram = program;
          }
          /**
           * Sets the value of a single float uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The value to set.
           */
          uniform1f(location, v0) {
            this.gl.uniform1f(this.gl.getUniformLocation(this.curProgram, location), v0);
          }
          /**
           * Sets the value of a float array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of values to set.
           */
          uniform1fv(location, value) {
            this.gl.uniform1fv(this.gl.getUniformLocation(this.curProgram, location), value);
          }
          /**
           * Sets the value of a single integer uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The value to set.
           */
          uniform1i(location, v0) {
            this.gl.uniform1i(this.gl.getUniformLocation(this.curProgram, location), v0);
          }
          /**
           * Sets the value of an integer array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of values to set.
           */
          uniform1iv(location, value) {
            this.gl.uniform1iv(this.gl.getUniformLocation(this.curProgram, location), value);
          }
          /**
           * Sets the value of a vec2 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           */
          uniform2f(location, v0, v1) {
            this.gl.uniform2f(this.gl.getUniformLocation(this.curProgram, location), v0, v1);
          }
          /**
           * Sets the value of a vec2 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of vec2 values to set.
           */
          uniform2fv(location, value) {
            this.gl.uniform2fv(this.gl.getUniformLocation(this.curProgram, location), value);
          }
          /**
           * Sets the value of a ivec2 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           */
          uniform2i(location, v0, v1) {
            this.gl.uniform2i(this.gl.getUniformLocation(this.curProgram, location), v0, v1);
          }
          /**
           * Sets the value of an ivec2 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of ivec2 values to set.
           */
          uniform2iv(location, value) {
            this.gl.uniform2iv(this.gl.getUniformLocation(this.curProgram, location), value);
          }
          /**
           * Sets the value of a vec3 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           * @param v2 - The third component of the vector.
           */
          uniform3f(location, v0, v1, v2) {
            this.gl.uniform3f(this.gl.getUniformLocation(this.curProgram, location), v0, v1, v2);
          }
          /**
           * Sets the value of a vec3 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of vec3 values to set.
           */
          uniform3fv(location, value) {
            this.gl.uniform3fv(this.gl.getUniformLocation(this.curProgram, location), value);
          }
          /**
           * Sets the value of a ivec3 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           * @param v2 - The third component of the vector.
           */
          uniform3i(location, v0, v1, v2) {
            this.gl.uniform3i(this.gl.getUniformLocation(this.curProgram, location), v0, v1, v2);
          }
          /**
           * Sets the value of an ivec3 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of ivec3 values to set.
           */
          uniform3iv(location, value) {
            this.gl.uniform3iv(this.gl.getUniformLocation(this.curProgram, location), value);
          }
          /**
           * Sets the value of a vec4 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           * @param v2 - The third component of the vector.
           * @param v3 - The fourth component of the vector.
           */
          uniform4f(location, v0, v1, v2, v3) {
            this.gl.uniform4f(this.gl.getUniformLocation(this.curProgram, location), v0, v1, v2, v3);
          }
          /**
           * Sets the value of a vec4 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of vec4 values to set.
           */
          uniform4fv(location, value) {
            this.gl.uniform4fv(this.gl.getUniformLocation(this.curProgram, location), value);
          }
          /**
           * Sets the value of a ivec4 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           * @param v2 - The third component of the vector.
           * @param v3 - The fourth component of the vector.
           */
          uniform4i(location, v0, v1, v2, v3) {
            this.gl.uniform4i(this.gl.getUniformLocation(this.curProgram, location), v0, v1, v2, v3);
          }
          /**
           * Sets the value of an ivec4 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of ivec4 values to set.
           */
          uniform4iv(location, value) {
            this.gl.uniform4iv(this.gl.getUniformLocation(this.curProgram, location), value);
          }
          /**
           * Sets the value of a mat2 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param transpose - Whether to transpose the matrix.
           * @param value - The array of mat2 values to set.
           */
          uniformMatrix2fv(location, value) {
            this.gl.uniformMatrix2fv(this.gl.getUniformLocation(this.curProgram, location), false, value);
          }
          /**
           * Sets the value of a mat2 uniform variable.
           * @param location - The location of the uniform variable.
           * @param value - The array of mat2 values to set.
           */
          uniformMatrix3fv(location, value) {
            this.gl.uniformMatrix3fv(this.gl.getUniformLocation(this.curProgram, location), false, value);
          }
          /**
           * Sets the value of a mat4 uniform variable.
           * @param location - The location of the uniform variable.
           * @param value - The array of mat4 values to set.
           */
          uniformMatrix4fv(location, value) {
            this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.curProgram, location), false, value);
          }
          /**
           * ```
           * gl.getParameter(pname);
           * ```
           *
           * @param pname
           * @returns
           */
          getParameter(pname) {
            return this.gl.getParameter(pname);
          }
          /**
           * ```
           * gl.drawElements(mode, count, type, offset);
           * ```
           *
           * @param mode
           * @param count
           * @param type
           * @param offset
           */
          drawElements(mode, count, type, offset) {
            this.gl.drawElements(mode, count, type, offset);
          }
          /**
           * ```
           * gl.drawArrays(mode, first, count);
           * ```
           *
           * @param name
           * @returns
           */
          getExtension(name) {
            return this.gl.getExtension(name);
          }
          /**
           * ```
           * gl.getError(type);
           * ```
           *
           * @returns
           */
          getError() {
            return this.gl.getError();
          }
          /**
           * ```
           * gl.createVertexArray();
           * ```
           *
           * @returns
           */
          createVertexArray() {
            if (this.gl instanceof WebGL2RenderingContext) {
              return this.gl.createVertexArray();
            }
            return undefined;
          }
          /**
           * ```
           * gl.bindVertexArray(vertexArray);
           * ```
           *
           * @param vertexArray
           */
          bindVertexArray(vertexArray) {
            if (this.gl instanceof WebGL2RenderingContext) {
              this.gl.bindVertexArray(vertexArray);
            }
          }
          /**
           * ```
           * gl.getAttribLocation(program, name);
           * ```
           *
           * @param program
           * @param name
           * @returns
           */
          getAttribLocation(program, name) {
            return this.gl.getAttribLocation(program, name);
          }
          /**
           * ```
           * gl.getUniformLocation(program, name);
           * ```
           *
           * @param program
           * @param name
           * @returns
           */
          getUniformLocation(program, name) {
            return this.gl.getUniformLocation(program, name);
          }
          /**
           * ```
           * gl.enableVertexAttribArray(index);
           * ```
           *
           * @param index
           */
          enableVertexAttribArray(index) {
            this.gl.enableVertexAttribArray(index);
          }
          /**
           * ```
           * gl.disableVertexAttribArray(index);
           * ```
           *
           * @param index
           */
          disableVertexAttribArray(index) {
            this.gl.disableVertexAttribArray(index);
          }
          /**
           * ```
           * gl.createShader(type);
           * ```
           *
           * @param type
           * @returns
           */
          createShader(type) {
            return this.gl.createShader(type);
          }
          /**
           * ```
           * gl.compileShader(shader);
           * ```
           *
           * @param shader
           * @returns
           */
          compileShader(shader) {
            this.gl.compileShader(shader);
          }
          /**
           * ```
           * gl.attachShader(program, shader);
           * ```
           *
           * @param program
           * @param shader
           */
          attachShader(program, shader) {
            this.gl.attachShader(program, shader);
          }
          /**
           * ```
           * gl.linkProgram(program);
           * ```
           *
           * @param program
           */
          linkProgram(program) {
            this.gl.linkProgram(program);
          }
          /**
           * ```
           * gl.deleteProgram(shader);
           * ```
           *
           * @param shader
           */
          deleteProgram(shader) {
            this.gl.deleteProgram(shader);
          }
          /**
           * ```
           * gl.getShaderParameter(shader, pname);
           * ```
           *
           * @param shader
           * @param pname
           */
          getShaderParameter(shader, pname) {
            return this.gl.getShaderParameter(shader, pname);
          }
          /**
           * ```
           * gl.getShaderInfoLog(shader);
           * ```
           *
           * @param shader
           */
          getShaderInfoLog(shader) {
            return this.gl.getShaderInfoLog(shader);
          }
          /**
           * ```
           * gl.createProgram();
           * ```
           *
           * @returns
           */
          createProgram() {
            return this.gl.createProgram();
          }
          /**
           * ```
           * gl.getProgramParameter(program, pname);
           * ```
           *
           * @param program
           * @param pname
           * @returns
           */
          getProgramParameter(program, pname) {
            return this.gl.getProgramParameter(program, pname);
          }
          /**
           * ```
           * gl.getProgramInfoLog(program);
           * ```
           *
           * @param program
           * @returns
           */
          getProgramInfoLog(program) {
            return this.gl.getProgramInfoLog(program);
          }
          /**
           * ```
           * gl.shaderSource(shader, source);
           * ```
           *
           * @param shader
           * @param source
           */
          shaderSource(shader, source) {
            this.gl.shaderSource(shader, source);
          }
          /**
           * ```
           * gl.deleteShader(shader);
           * ```
           *
           * @param shader
           */
          deleteShader(shader) {
            this.gl.deleteShader(shader);
          }
        }
        class WebGlCtxRenderTexture extends WebGlCtxTexture {
          constructor(glw, memManager, textureSource) {
            super(glw, memManager, textureSource);
            _defineProperty(this, "framebuffer", null);
          }
          onLoadRequest() {
            var _this13 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var glw, nativeTexture, _this13$textureSource, width, height;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    glw = _this13.glw;
                    nativeTexture = _this13._nativeCtxTexture = _this13.createNativeCtxTexture();
                    _this13$textureSource = _this13.textureSource, width = _this13$textureSource.width, height = _this13$textureSource.height;
                    _this13.framebuffer = glw.createFramebuffer();
                    glw.texImage2D(0, glw.RGBA, width, height, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
                    _this13.setTextureMemUse(width * height * 4);
                    glw.bindFramebuffer(_this13.framebuffer);
                    glw.framebufferTexture2D(glw.COLOR_ATTACHMENT0, nativeTexture, 0);
                    glw.bindFramebuffer(null);
                    return _context15.abrupt("return", {
                      width,
                      height
                    });
                  case 10:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15);
            }))();
          }
          free() {
            super.free();
            this.glw.deleteFramebuffer(this.framebuffer);
            this.framebuffer = null;
          }
        }
        class WebGlShaderNode extends CoreShaderNode {
          constructor(shaderKey, config, program, stage, props) {
            super(shaderKey, config, stage, props);
            _defineProperty(this, "program", void 0);
            _defineProperty(this, "updater", undefined);
            _defineProperty(this, "valueKey", "");
            _defineProperty(this, "uniforms", {
              single: {},
              vec2: {},
              vec3: {},
              vec4: {}
            });
            this.program = program;
            if (config.update !== undefined) {
              this.updater = config.update;
              this.update = () => {
                if (this.props === undefined) {
                  this.updater(this.node, this.props);
                  return;
                }
                var prevKey = this.valueKey;
                this.valueKey = "";
                for (var _key17 in this.resolvedProps) {
                  this.valueKey += `${_key17}:${this.resolvedProps[_key17]};`;
                }
                if (prevKey === this.valueKey) {
                  return;
                }
                if (prevKey.length > 0) {
                  this.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                }
                var values = this.stage.shManager.getShaderValues(this.valueKey);
                if (values !== undefined) {
                  this.uniforms = values;
                  return;
                }
                this.uniforms = {
                  single: {},
                  vec2: {},
                  vec3: {},
                  vec4: {}
                };
                this.updater(this.node);
                this.stage.shManager.setShaderValues(this.valueKey, this.uniforms);
              };
            }
          }
          /**
           * Sets the value of a RGBA variable
           * @param location
           * @param value
           */
          uniformRGBA(location, value) {
            this.uniform4fv(location, new Float32Array(getNormalizedRgbaComponents(value)));
          }
          /**
           * Sets the value of a single float uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The value to set.
           */
          uniform1f(location, value) {
            this.uniforms.single[location] = {
              method: "uniform1f",
              value
            };
          }
          /**
           * Sets the value of a float array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of values to set.
           */
          uniform1fv(location, value) {
            this.uniforms.single[location] = {
              method: "uniform1fv",
              value
            };
          }
          /**
           * Sets the value of a single integer uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The value to set.
           */
          uniform1i(location, value) {
            this.uniforms.single[location] = {
              method: "uniform1i",
              value
            };
          }
          /**
           * Sets the value of an integer array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of values to set.
           */
          uniform1iv(location, value) {
            this.uniforms.single[location] = {
              method: "uniform1iv",
              value
            };
          }
          /**
           * Sets the value of a vec2 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           */
          uniform2f(location, v0, v1) {
            this.uniforms.vec2[location] = {
              method: "uniform2f",
              value: [v0, v1]
            };
          }
          /**
           * Sets the value of a vec2 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of vec2 values to set as FloatArray.
           */
          uniform2fv(location, value) {
            this.uniforms.single[location] = {
              method: "uniform2fv",
              value
            };
          }
          /**
           * Sets the value of a vec2 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of vec2 values to set.
           */
          uniform2fa(location, value) {
            this.uniforms.vec2[location] = {
              method: "uniform2f",
              value
            };
          }
          /**
           * Sets the value of a ivec2 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           */
          uniform2i(location, v0, v1) {
            this.uniforms.vec2[location] = {
              method: "uniform2i",
              value: [v0, v1]
            };
          }
          /**
           * Sets the value of an ivec2 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of ivec2 values to set.
           */
          uniform2iv(location, value) {
            this.uniforms.single[location] = {
              method: "uniform2iv",
              value
            };
          }
          /**
           * Sets the value of a vec3 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           * @param v2 - The third component of the vector.
           */
          uniform3f(location, v0, v1, v2) {
            this.uniforms.vec3[location] = {
              method: "uniform3f",
              value: [v0, v1, v2]
            };
          }
          /**
           * Sets the value of a vec3 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param
           */
          uniform3fa(location, value) {
            this.uniforms.vec3[location] = {
              method: "uniform3f",
              value
            };
          }
          /**
           * Sets the value of a vec3 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of vec3 values to set.
           */
          uniform3fv(location, value) {
            this.uniforms.single[location] = {
              method: "uniform3fv",
              value
            };
          }
          /**
           * Sets the value of a ivec3 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           * @param v2 - The third component of the vector.
           */
          uniform3i(location, v0, v1, v2) {
            this.uniforms.vec3[location] = {
              method: "uniform3i",
              value: [v0, v1, v2]
            };
          }
          /**
           * Sets the value of an ivec3 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of ivec3 values to set.
           */
          uniform3iv(location, value) {
            this.uniforms.single[location] = {
              method: "uniform3iv",
              value
            };
          }
          /**
           * Sets the value of a vec4 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           * @param v2 - The third component of the vector.
           * @param v3 - The fourth component of the vector.
           */
          uniform4f(location, v0, v1, v2, v3) {
            this.uniforms.vec4[location] = {
              method: "uniform4f",
              value: [v0, v1, v2, v3]
            };
          }
          /**
           * Sets an array of numbers
           * @param location The location of the uniform variable.
           * @param value
           */
          uniform4fa(location, value) {
            this.uniforms.vec4[location] = {
              method: "uniform4f",
              value
            };
          }
          /**
           * Sets the value of a vec4 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of vec4 values to set.
           */
          uniform4fv(location, value) {
            this.uniforms.single[location] = {
              method: "uniform4fv",
              value
            };
          }
          /**
           * Sets the value of a ivec4 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param v0 - The first component of the vector.
           * @param v1 - The second component of the vector.
           * @param v2 - The third component of the vector.
           * @param v3 - The fourth component of the vector.
           */
          uniform4i(location, v0, v1, v2, v3) {
            this.uniforms.vec4[location] = {
              method: "uniform4i",
              value: [v0, v1, v2, v3]
            };
          }
          /**
           * Sets the value of an ivec4 array uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param value - The array of ivec4 values to set.
           */
          uniform4iv(location, value) {
            this.uniforms.single[location] = {
              method: "uniform4iv",
              value
            };
          }
          /**
           * Sets the value of a mat2 uniform variable.
           *
           * @param location - The location of the uniform variable.
           * @param transpose - Whether to transpose the matrix.
           * @param value - The array of mat2 values to set.
           */
          uniformMatrix2fv(location, value) {
            this.uniforms.single[location] = {
              method: "uniformMatrix2fv",
              value
            };
          }
          /**
           * Sets the value of a mat2 uniform variable.
           * @param location - The location of the uniform variable.
           * @param value - The array of mat2 values to set.
           */
          uniformMatrix3fv(location, value) {
            this.uniforms.single[location] = {
              method: "uniformMatrix3fv",
              value
            };
          }
          /**
           * Sets the value of a mat4 uniform variable.
           * @param location - The location of the uniform variable.
           * @param value - The array of mat4 values to set.
           */
          uniformMatrix4fv(location, value) {
            this.uniforms.single[location] = {
              method: "uniformMatrix4fv",
              value
            };
          }
        }
        var WORDS_PER_QUAD = 24;
        class WebGlRenderer extends CoreRenderer {
          constructor(options) {
            super(options);
            //// WebGL Native Context and Data
            _defineProperty(this, "glw", void 0);
            _defineProperty(this, "system", void 0);
            //// Persistent data
            _defineProperty(this, "quadBuffer", void 0);
            _defineProperty(this, "fQuadBuffer", void 0);
            _defineProperty(this, "uiQuadBuffer", void 0);
            _defineProperty(this, "renderOps", []);
            //// Render Op / Buffer Filling State
            _defineProperty(this, "curBufferIdx", 0);
            _defineProperty(this, "curRenderOp", null);
            _defineProperty(this, "rttNodes", []);
            _defineProperty(this, "activeRttNode", null);
            //// Default Shader
            _defineProperty(this, "defaultShaderNode", null);
            _defineProperty(this, "quadBufferCollection", void 0);
            _defineProperty(this, "clearColor", {
              raw: 0,
              normalized: [0, 0, 0, 0]
            });
            /**
             * White pixel texture used by default when no texture is specified.
             */
            _defineProperty(this, "quadBufferUsage", 0);
            _defineProperty(this, "numQuadsRendered", 0);
            /**
             * Whether the renderer is currently rendering to a texture.
             */
            _defineProperty(this, "renderToTextureActive", false);
            this.quadBuffer = new ArrayBuffer(this.stage.options.quadBufferSize);
            this.fQuadBuffer = new Float32Array(this.quadBuffer);
            this.uiQuadBuffer = new Uint32Array(this.quadBuffer);
            this.mode = "webgl";
            var gl = createWebGLContext(options.canvas, options.forceWebGL2, options.contextSpy);
            var glw = this.glw = new WebGlContextWrapper(gl);
            glw.viewport(0, 0, options.canvas.width, options.canvas.height);
            this.updateClearColor(this.stage.clearColor);
            glw.setBlend(true);
            glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
            createIndexBuffer(glw, this.stage.bufferMemory);
            this.system = {
              parameters: getWebGlParameters(this.glw),
              extensions: getWebGlExtensions(this.glw)
            };
            var quadBuffer = glw.createBuffer();
            var stride = 8 * Float32Array.BYTES_PER_ELEMENT;
            this.quadBufferCollection = new BufferCollection([{
              buffer: quadBuffer,
              attributes: {
                a_position: {
                  name: "a_position",
                  size: 2,
                  // 2 components per iteration
                  type: glw.FLOAT,
                  // the data is 32bit floats
                  normalized: false,
                  // don't normalize the data
                  stride,
                  // 0 = move forward size * sizeof(type) each iteration to get the next position
                  offset: 0
                  // start at the beginning of the buffer
                },
                a_textureCoords: {
                  name: "a_textureCoords",
                  size: 2,
                  type: glw.FLOAT,
                  normalized: false,
                  stride,
                  offset: 2 * Float32Array.BYTES_PER_ELEMENT
                },
                a_color: {
                  name: "a_color",
                  size: 4,
                  type: glw.UNSIGNED_BYTE,
                  normalized: true,
                  stride,
                  offset: 4 * Float32Array.BYTES_PER_ELEMENT
                },
                a_textureIndex: {
                  name: "a_textureIndex",
                  size: 1,
                  type: glw.FLOAT,
                  normalized: false,
                  stride,
                  offset: 5 * Float32Array.BYTES_PER_ELEMENT
                },
                a_nodeCoords: {
                  name: "a_nodeCoords",
                  size: 2,
                  type: glw.FLOAT,
                  normalized: false,
                  stride,
                  offset: 6 * Float32Array.BYTES_PER_ELEMENT
                }
              }
            }]);
          }
          reset() {
            var glw = this.glw;
            this.curBufferIdx = 0;
            this.curRenderOp = null;
            this.renderOps.length = 0;
            glw.setScissorTest(false);
            glw.clear();
          }
          createShaderProgram(shaderType, props) {
            return new WebGlShaderProgram(this, shaderType, props);
          }
          createShaderNode(shaderKey, shaderType, props, program) {
            return new WebGlShaderNode(shaderKey, shaderType, program, this.stage, props);
          }
          supportsShaderType(shaderType) {
            return shaderType.fragment !== undefined;
          }
          createCtxTexture(textureSource) {
            if (textureSource instanceof SubTexture) {
              return new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource);
            } else if (textureSource instanceof RenderTexture) {
              return new WebGlCtxRenderTexture(this.glw, this.stage.txMemManager, textureSource);
            }
            return new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
          }
          /**
           * This function adds a quad (a rectangle composed of two triangles) to the WebGL rendering pipeline.
           *
           * It takes a set of options that define the quad's properties, such as its dimensions, colors, texture, shader, and transformation matrix.
           * The function first updates the shader properties with the current dimensions if necessary, then sets the default texture if none is provided.
           * It then checks if a new render operation is needed, based on the current shader and clipping rectangle.
           * If a new render operation is needed, it creates one and updates the current render operation.
           * The function then adjusts the texture coordinates based on the texture options and adds the texture to the texture manager.
           *
           * Finally, it calculates the vertices for the quad, taking into account any transformations, and adds them to the quad buffer.
           * The function updates the length and number of quads in the current render operation, and updates the current buffer index.
           */
          addQuad(params) {
            var fQuadBuffer = this.fQuadBuffer,
              uiQuadBuffer = this.uiQuadBuffer;
            var texture = params.texture;
            var bufferIdx = this.curBufferIdx,
              curRenderOp = this.curRenderOp;
            if (this.reuseRenderOp(params) === false) {
              this.newRenderOp(params, bufferIdx);
              curRenderOp = this.curRenderOp;
            }
            var texCoordX1 = 0;
            var texCoordY1 = 0;
            var texCoordX2 = 1;
            var texCoordY2 = 1;
            if (texture.type === TextureType.subTexture) {
              var _texture$props = texture.props,
                tx = _texture$props.x,
                ty = _texture$props.y,
                tw = _texture$props.width,
                th = _texture$props.height;
              var _ref21 = texture.parentTexture.dimensions || {
                  width: 0,
                  height: 0
                },
                _ref21$width = _ref21.width,
                parentW = _ref21$width === void 0 ? 0 : _ref21$width,
                _ref21$height = _ref21.height,
                parentH = _ref21$height === void 0 ? 0 : _ref21$height;
              texCoordX1 = tx / parentW;
              texCoordX2 = texCoordX1 + tw / parentW;
              texCoordY1 = ty / parentH;
              texCoordY2 = texCoordY1 + th / parentH;
              texture = texture.parentTexture;
            }
            if (texture.type === TextureType.image && params.textureOptions !== null && params.textureOptions.resizeMode !== undefined && texture.dimensions !== null) {
              var resizeMode = params.textureOptions.resizeMode;
              var _texture$dimensions2 = texture.dimensions,
                _tw = _texture$dimensions2.width,
                _th = _texture$dimensions2.height;
              if (resizeMode.type === "cover") {
                var scaleX = params.width / _tw;
                var scaleY = params.height / _th;
                var scale = Math.max(scaleX, scaleY);
                var precision = 1 / scale;
                if (scale && scaleX && scaleX < scale) {
                  var _resizeMode$clipX;
                  var desiredSize = precision * params.width;
                  texCoordX1 = (1 - desiredSize / _tw) * ((_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : 0.5);
                  texCoordX2 = texCoordX1 + desiredSize / _tw;
                }
                if (scale && scaleY && scaleY < scale) {
                  var _resizeMode$clipY;
                  var _desiredSize = precision * params.height;
                  texCoordY1 = (1 - _desiredSize / _th) * ((_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : 0.5);
                  texCoordY2 = texCoordY1 + _desiredSize / _th;
                }
              }
            }
            var flipY = 0;
            if (params.textureOptions !== null) {
              if (params.textureOptions.flipX === true) {
                var _ref22 = [texCoordX2, texCoordX1];
                texCoordX1 = _ref22[0];
                texCoordX2 = _ref22[1];
              }
              flipY = +(params.textureOptions.flipY || false);
            }
            if (flipY ^ +(texture.type === TextureType.renderToTexture)) {
              var _ref23 = [texCoordY2, texCoordY1];
              texCoordY1 = _ref23[0];
              texCoordY2 = _ref23[1];
            }
            var ctxTexture = texture.ctxTexture;
            var textureIdx = this.addTexture(ctxTexture, bufferIdx);
            assertTruthy(this.curRenderOp !== null);
            assertTruthy(params.renderCoords);
            fQuadBuffer[bufferIdx++] = params.renderCoords.x1;
            fQuadBuffer[bufferIdx++] = params.renderCoords.y1;
            fQuadBuffer[bufferIdx++] = texCoordX1;
            fQuadBuffer[bufferIdx++] = texCoordY1;
            uiQuadBuffer[bufferIdx++] = params.colorTl;
            fQuadBuffer[bufferIdx++] = textureIdx;
            fQuadBuffer[bufferIdx++] = 0;
            fQuadBuffer[bufferIdx++] = 0;
            fQuadBuffer[bufferIdx++] = params.renderCoords.x2;
            fQuadBuffer[bufferIdx++] = params.renderCoords.y2;
            fQuadBuffer[bufferIdx++] = texCoordX2;
            fQuadBuffer[bufferIdx++] = texCoordY1;
            uiQuadBuffer[bufferIdx++] = params.colorTr;
            fQuadBuffer[bufferIdx++] = textureIdx;
            fQuadBuffer[bufferIdx++] = 1;
            fQuadBuffer[bufferIdx++] = 0;
            fQuadBuffer[bufferIdx++] = params.renderCoords.x4;
            fQuadBuffer[bufferIdx++] = params.renderCoords.y4;
            fQuadBuffer[bufferIdx++] = texCoordX1;
            fQuadBuffer[bufferIdx++] = texCoordY2;
            uiQuadBuffer[bufferIdx++] = params.colorBl;
            fQuadBuffer[bufferIdx++] = textureIdx;
            fQuadBuffer[bufferIdx++] = 0;
            fQuadBuffer[bufferIdx++] = 1;
            fQuadBuffer[bufferIdx++] = params.renderCoords.x3;
            fQuadBuffer[bufferIdx++] = params.renderCoords.y3;
            fQuadBuffer[bufferIdx++] = texCoordX2;
            fQuadBuffer[bufferIdx++] = texCoordY2;
            uiQuadBuffer[bufferIdx++] = params.colorBr;
            fQuadBuffer[bufferIdx++] = textureIdx;
            fQuadBuffer[bufferIdx++] = 1;
            fQuadBuffer[bufferIdx++] = 1;
            this.curRenderOp.length += WORDS_PER_QUAD;
            this.curRenderOp.numQuads++;
            this.curBufferIdx = bufferIdx;
          }
          /**
           * Replace the existing RenderOp with a new one that uses the specified Shader
           * and starts at the specified buffer index.
           *
           * @param shader
           * @param bufferIdx
           */
          newRenderOp(quad, bufferIdx) {
            var curRenderOp = new WebGlRenderOp(this, quad, bufferIdx);
            this.curRenderOp = curRenderOp;
            this.renderOps.push(curRenderOp);
          }
          /**
           * Add a texture to the current RenderOp. If the texture cannot be added to the
           * current RenderOp, a new RenderOp will be created and the texture will be added
           * to that one.
           *
           * If the texture cannot be added to the new RenderOp, an error will be thrown.
           *
           * @param texture
           * @param bufferIdx
           * @param recursive
           * @returns Assigned Texture Index of the texture in the render op
           */
          addTexture(texture, bufferIdx, recursive) {
            assertTruthy(this.curRenderOp);
            var textureIdx = this.curRenderOp.addTexture(texture);
            if (textureIdx === 4294967295) {
              if (recursive) {
                throw new Error("Unable to add texture to render op");
              }
              this.newRenderOp(this.curRenderOp.quad, bufferIdx);
              return this.addTexture(texture, bufferIdx, true);
            }
            return textureIdx;
          }
          /**
           * Test if the current Render operation can be reused for the specified parameters.
           * @param params
           * @returns
           */
          reuseRenderOp(params) {
            var _this$curRenderOp;
            var shader = params.shader,
              parentHasRenderTexture = params.parentHasRenderTexture,
              rtt = params.rtt,
              clippingRect = params.clippingRect;
            if (((_this$curRenderOp = this.curRenderOp) === null || _this$curRenderOp === void 0 ? void 0 : _this$curRenderOp.shader.shaderKey) !== shader.shaderKey) {
              return false;
            }
            if (compareRect(this.curRenderOp.quad.clippingRect, clippingRect) === false) {
              return false;
            }
            if (parentHasRenderTexture !== undefined || rtt !== undefined) {
              return false;
            }
            if (!this.curRenderOp.shader.program.reuseRenderOp(params, this.curRenderOp.quad)) {
              return false;
            }
            return true;
          }
          /**
           * add RenderOp to the render pipeline
           */
          addRenderOp(renderable) {
            this.renderOps.push(renderable);
            this.curRenderOp = null;
          }
          /**
           * Render the current set of RenderOps to render to the specified surface.
           *
           * TODO: 'screen' is the only supported surface at the moment.
           *
           * @param surface
           */
          render() {
            var surface = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "screen";
            var glw = this.glw,
              quadBuffer = this.quadBuffer;
            var arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
            var buffer = this.quadBufferCollection.getBuffer("a_position") || null;
            glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW);
            for (var i = 0, length = this.renderOps.length; i < length; i++) {
              this.renderOps[i].draw();
            }
            this.quadBufferUsage = this.curBufferIdx * arr.BYTES_PER_ELEMENT;
            var QUAD_SIZE_IN_BYTES = 4 * (8 * arr.BYTES_PER_ELEMENT);
            this.numQuadsRendered = this.quadBufferUsage / QUAD_SIZE_IN_BYTES;
          }
          getQuadCount() {
            return this.numQuadsRendered;
          }
          renderToTexture(node) {
            for (var i = 0; i < this.rttNodes.length; i++) {
              if (this.rttNodes[i] === node) {
                return;
              }
            }
            this.insertRTTNodeInOrder(node);
          }
          /**
           * Inserts an RTT node into `this.rttNodes` while maintaining the correct rendering order based on hierarchy.
           *
           * Rendering order for RTT nodes is critical when nested RTT nodes exist in a parent-child relationship.
           * Specifically:
           *  - Child RTT nodes must be rendered before their RTT-enabled parents to ensure proper texture composition.
           *  - If an RTT node is added and it has existing RTT children, it should be rendered after those children.
           *
           * This function addresses both cases by:
           * 1. **Checking Upwards**: It traverses the node's hierarchy upwards to identify any RTT parent
           *    already in `rttNodes`. If an RTT parent is found, the new node is placed before this parent.
           * 2. **Checking Downwards**: It traverses the node’s children recursively to find any RTT-enabled
           *    children that are already in `rttNodes`. If such children are found, the new node is inserted
           *    after the last (highest index) RTT child node.
           *
           * The final calculated insertion index ensures the new node is positioned in `rttNodes` to respect
           * both parent-before-child and child-before-parent rendering rules, preserving the correct order
           * for the WebGL renderer.
           *
           * @param node - The RTT-enabled CoreNode to be added to `rttNodes` in the appropriate hierarchical position.
           */
          insertRTTNodeInOrder(node) {
            var insertIndex = this.rttNodes.length;
            var currentNode = node;
            while (currentNode) {
              if (!currentNode.parent) {
                break;
              }
              var parentIndex = this.rttNodes.indexOf(currentNode.parent);
              if (parentIndex !== -1) {
                insertIndex = parentIndex;
                break;
              }
              currentNode = currentNode.parent;
            }
            var maxChildIndex = this.findMaxChildRTTIndex(node);
            if (maxChildIndex !== -1) {
              insertIndex = Math.max(insertIndex, maxChildIndex + 1);
            }
            this.rttNodes.splice(insertIndex, 0, node);
          }
          // Helper function to find the highest index of any RTT children of a node within rttNodes
          findMaxChildRTTIndex(node) {
            var maxIndex = -1;
            var traverseChildren = currentNode => {
              var currentIndex = this.rttNodes.indexOf(currentNode);
              if (currentIndex !== -1) {
                maxIndex = Math.max(maxIndex, currentIndex);
              }
              var _iterator12 = _createForOfIteratorHelper(currentNode.children),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var child = _step12.value;
                  traverseChildren(child);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            };
            traverseChildren(node);
            return maxIndex;
          }
          renderRTTNodes() {
            var glw = this.glw;
            for (var i = 0; i < this.rttNodes.length; i++) {
              var node = this.rttNodes[i];
              if (node === undefined || node.hasRTTupdates === false) {
                continue;
              }
              if (node.worldAlpha === 0 || node.strictBounds === true && node.renderState === CoreNodeRenderState.OutOfBounds) {
                continue;
              }
              if (node.texture === null || node.texture.state !== "loaded") {
                continue;
              }
              this.activeRttNode = node;
              assertTruthy(node.texture !== null);
              var ctxTexture = node.texture.ctxTexture;
              this.renderToTextureActive = true;
              glw.bindFramebuffer(ctxTexture.framebuffer);
              glw.viewport(0, 0, ctxTexture.w, ctxTexture.h);
              glw.clearColor(0, 0, 0, 0);
              glw.clear();
              for (var i2 = 0; i2 < node.children.length; i2++) {
                var child = node.children[i2];
                if (child === undefined) {
                  continue;
                }
                this.stage.addQuads(child);
                child.hasRTTupdates = false;
              }
              this.render();
              this.renderOps.length = 0;
              node.hasRTTupdates = false;
            }
            var clearColor = this.clearColor.normalized;
            glw.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
            glw.bindFramebuffer(null);
            glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
            this.renderToTextureActive = false;
          }
          removeRTTNode(node) {
            var index = this.rttNodes.indexOf(node);
            if (index === -1) {
              return;
            }
            this.rttNodes.splice(index, 1);
          }
          getBufferInfo() {
            var bufferInfo = {
              totalAvailable: this.stage.options.quadBufferSize,
              totalUsed: this.quadBufferUsage
            };
            return bufferInfo;
          }
          getDefaultShaderNode() {
            if (this.defaultShaderNode !== null) {
              return this.defaultShaderNode;
            }
            this.stage.shManager.registerShaderType("Default", Default);
            this.defaultShaderNode = this.stage.shManager.createShader("Default");
            return this.defaultShaderNode;
          }
          /**
           * Updates the WebGL context's clear color and clears the color buffer.
           *
           * @param color - The color to set as the clear color, represented as a 32-bit integer.
           */
          updateClearColor(color) {
            if (this.clearColor.raw === color) {
              return;
            }
            var glw = this.glw;
            var normalizedColor = getNormalizedRgbaComponents(color);
            glw.clearColor(normalizedColor[0], normalizedColor[1], normalizedColor[2], normalizedColor[3]);
            this.clearColor = {
              raw: color,
              normalized: normalizedColor
            };
            glw.clear();
          }
        }
        var SpecialCodepoints = {
          LINE_FEED: 10,
          CARRIAGE_RETURN: 13,
          SPACE: 32,
          TAB: 9,
          ZERO_WIDTH_SPACE: 8203,
          ZERO_WIDTH_NON_JOINER: 8204,
          ZERO_WIDTH_JOINER: 8205,
          LEFT_TO_RIGHT_MARK: 8206,
          RIGHT_TO_LEFT_MARK: 8207,
          LEFT_TO_RIGHT_EMBEDDING: 8234,
          RIGHT_TO_LEFT_EMBEDDING: 8235,
          POP_DIRECTIONAL_FORMATTING: 8236,
          LEFT_TO_RIGHT_OVERRIDE: 8237,
          RIGHT_TO_LEFT_OVERRIDE: 8238,
          LINE_SEPARATOR: 8232,
          PARAGRAPH_SEPARATOR: 8233,
          OBJECT_REPLACEMENT_CHARACTER: 65532,
          REPLACEMENT_CHARACTER: 65533,
          ZERO_WIDTH_NO_BREAK_SPACE: 65279,
          LEFT_TO_RIGHT_ISOLATE: 8294,
          RIGHT_TO_LEFT_ISOLATE: 8295,
          FIRST_STRONG_ISOLATE: 8296,
          POP_DIRECTIONAL_ISOLATE: 8297,
          INHIBIT_SYMMETRIC_SWAPPING: 8298,
          ACTIVATE_SYMMETRIC_SWAPPING: 8299,
          INHIBIT_ARABIC_FORM_SHAPING: 8300,
          ACTIVATE_ARABIC_FORM_SHAPING: 8301,
          NATIONAL_DIGIT_SHAPES: 8302,
          NOMINAL_DIGIT_SHAPES: 8303,
          LEFT_TO_RIGHT_BOUNDARY: 8206,
          RIGHT_TO_LEFT_BOUNDARY: 8207
        };
        class FontShaper {}
        class SdfFontShaper extends FontShaper {
          constructor(data, glyphMap) {
            super();
            _defineProperty(this, "data", void 0);
            _defineProperty(this, "glyphMap", void 0);
            _defineProperty(this, "kernings", void 0);
            this.data = data;
            this.glyphMap = glyphMap;
            var kernings = this.kernings = {};
            data.kernings.forEach(kerning => {
              var second = kerning.second;
              var firsts = kernings[second] = kernings[second] || {};
              firsts[kerning.first] = kerning.amount;
            });
            this.kernings = kernings;
          }
          shapeText(props, codepoints) {
            var _this14 = this;
            return /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var codepointResult, lastGlyphId, codepoint, glyph, _this14$kernings$glyp, kerning;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    lastGlyphId = undefined;
                  case 1:
                    if (!((codepointResult = codepoints.peek()) && !codepointResult.done)) {
                      _context16.next = 17;
                      break;
                    }
                    codepoint = codepointResult.value;
                    glyph = _this14.glyphMap.get(codepoint);
                    codepoints.next();
                    if (!(glyph !== undefined)) {
                      _context16.next = 12;
                      break;
                    }
                    kerning = lastGlyphId !== undefined ? (((_this14$kernings$glyp = _this14.kernings[glyph.id]) === null || _this14$kernings$glyp === void 0 ? void 0 : _this14$kernings$glyp[lastGlyphId]) || 0) + props.letterSpacing : 0;
                    lastGlyphId = glyph.id;
                    _context16.next = 10;
                    return {
                      mapped: true,
                      glyphId: glyph.id,
                      codepoint,
                      cluster: codepoints.lastIndex,
                      xAdvance: glyph.xadvance + kerning,
                      yAdvance: 0,
                      xOffset: glyph.xoffset + kerning,
                      yOffset: glyph.yoffset,
                      xBearing: 0,
                      yBearing: 0,
                      width: glyph.width,
                      height: glyph.height
                    };
                  case 10:
                    _context16.next = 15;
                    break;
                  case 12:
                    if (codepoint === SpecialCodepoints.LINE_FEED) {
                      lastGlyphId = undefined;
                    }
                    _context16.next = 15;
                    return {
                      mapped: false,
                      codepoint,
                      cluster: codepoints.lastIndex
                    };
                  case 15:
                    _context16.next = 1;
                    break;
                  case 17:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16);
            })();
          }
        }
        class SdfTrFontFace extends TrFontFace {
          constructor(type, options) {
            super(options);
            _defineProperty(this, "type", void 0);
            _defineProperty(this, "texture", void 0);
            /**
             * Height of the tallest character in the font including the whitespace above it
             * in SDF/vertex units.
             */
            _defineProperty(this, "maxCharHeight", 0);
            _defineProperty(this, "shaper", void 0);
            _defineProperty(this, "glyphMap", /* @__PURE__ */new Map());
            _defineProperty(this, "data", void 0);
            var atlasUrl = options.atlasUrl,
              atlasDataUrl = options.atlasDataUrl,
              stage = options.stage;
            this.type = type;
            stage.renderer;
            this.texture = stage.txManager.createTexture("ImageTexture", {
              src: atlasUrl,
              // IMPORTANT: The SDF shader requires the alpha channel to NOT be
              // premultiplied on the atlas texture. If it is premultiplied, the
              // rendering of SDF glyphs (especially single-channel SDF fonts) will
              // be very jagged.
              premultiplyAlpha: false
            });
            stage.txManager.loadTexture(this.texture, true);
            this.texture.preventCleanup = true;
            this.texture.on("loaded", () => {
              this.checkLoaded();
              stage.requestRender();
            });
            fetchJson(atlasDataUrl).then(response => {
              this.data = JSON.parse(response);
              assertTruthy(this.data);
              var maxCharHeight = 0;
              this.data.chars.forEach(glyph => {
                this.glyphMap.set(glyph.id, glyph);
                var charHeight = glyph.yoffset + glyph.height;
                if (charHeight > maxCharHeight) {
                  maxCharHeight = charHeight;
                }
              });
              this.maxCharHeight = maxCharHeight;
              this.shaper = new SdfFontShaper(this.data, this.glyphMap);
              if (!this.metrics) {
                var _this$data;
                if ((_this$data = this.data) !== null && _this$data !== void 0 && _this$data.lightningMetrics) {
                  var _this$data$lightningM = this.data.lightningMetrics,
                    ascender = _this$data$lightningM.ascender,
                    descender = _this$data$lightningM.descender,
                    lineGap = _this$data$lightningM.lineGap,
                    unitsPerEm = _this$data$lightningM.unitsPerEm;
                  this.metrics = {
                    ascender: ascender / unitsPerEm,
                    descender: descender / unitsPerEm,
                    lineGap: lineGap / unitsPerEm
                  };
                } else {
                  throw new Error(`Font metrics not found in ${this.type} font ${this.fontFamily}. Make sure you are using the latest version of the Lightning 3 \`msdf-generator\` tool to generate your SDF fonts.`);
                }
              }
              this.checkLoaded();
            }).catch(console.error);
          }
          getAtlasEntry(glyphId) {
            var glyph = this.glyphMap.get(glyphId);
            if (glyph === undefined) {
              throw new Error(`Glyph ${glyphId} not found in font ${this.fontFamily}`);
            }
            return {
              x: glyph.x,
              y: glyph.y,
              width: glyph.width,
              height: glyph.height
            };
          }
          checkLoaded() {
            if (this.loaded) return;
            if (this.texture.state === "loaded" && this.data) {
              this.loaded = true;
              this.emit("loaded");
            }
          }
        }
        ({
          "BASE_URL": "/lightning-solid-demo-app/",
          "DEV": false,
          "LEGACY": true,
          "MODE": "production",
          "PROD": true,
          "SSR": false
        });
        var Config = {
          debug: false,
          focusDebug: false,
          keyDebug: false,
          animationsEnabled: true,
          animationSettings: {
            duration: 250,
            easing: "ease-in-out"
          },
          fontSettings: {
            fontFamily: "Ubuntu",
            fontSize: 100
          },
          setActiveElement: () => {},
          focusStateKey: "$focus",
          domRendering: false
        };
        var colorToRgba = c => `rgba(${c >> 24 & 255},${c >> 16 & 255},${c >> 8 & 255},${(c & 255) / 255})`;
        var animationTasks = [];
        var animationFrameRequested = false;
        function requestAnimationUpdate() {
          if (!animationFrameRequested && animationTasks.length > 0) {
            animationFrameRequested = true;
            requestAnimationFrame(updateAnimations);
          }
        }
        function updateAnimations(time) {
          animationFrameRequested = false;
          for (var i = 0; i < animationTasks.length; i++) {
            var task = animationTasks[i];
            if (task.pausedTime != null) continue;
            var elapsed = time - task.timeStart;
            if (elapsed < task.settings.delay) {
              requestAnimationUpdate();
              continue;
            }
            var activeTime = elapsed - task.settings.delay;
            if (activeTime >= task.settings.duration) {
              if (task.settings.loop || task.iteration < task.settings.repeat - 1) {
                task.iteration++;
                task.timeStart = time - task.settings.delay;
                if (task.settings.repeatDelay > 0) {
                  task.timeStart += task.settings.repeatDelay;
                }
                requestAnimationUpdate();
              } else {
                Object.assign(task.node.props, task.propsEnd);
                updateNodeStyles(task.node);
                animationTasks.splice(i, 1);
                i--;
              }
              continue;
            }
            var t = applyEasing(activeTime / task.settings.duration, task.settings.easing);
            for (var prop in task.propsEnd) {
              var fn = prop.startsWith("color") ? interpolateColor : interpolate;
              task.node.props[prop] = fn(task.propsStart[prop], task.propsEnd[prop], t);
            }
            updateNodeStyles(task.node);
          }
          requestAnimationUpdate();
        }
        function applyEasing(progress, easing) {
          switch (easing) {
            case "linear":
            default:
              return progress;
            case "ease-in":
              return progress * progress;
            case "ease-out":
              return progress * (2 - progress);
            case "ease-in-out":
              return progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
          }
        }
        function interpolate(start, end, t) {
          return start + (end - start) * t;
        }
        function interpolateColor(start, end, t) {
          return interpolate(start >> 24 & 255, end >> 24 & 255, t) << 24 | interpolate(start >> 16 & 255, end >> 16 & 255, t) << 16 | interpolate(start >> 8 & 255, end >> 8 & 255, t) << 8 | interpolate(start & 255, end & 255, t);
        }
        class AnimationController {
          constructor(task) {
            _defineProperty(this, "state", "paused");
            this.task = task;
          }
          start() {
            if (this.task.pausedTime != null) {
              this.task.timeStart += performance.now() - this.task.pausedTime;
              this.task.pausedTime = null;
            } else {
              this.task.timeStart = performance.now();
            }
            requestAnimationUpdate();
            return this;
          }
          pause() {
            this.task.pausedTime = performance.now();
            return this;
          }
          stop() {
            var index = animationTasks.indexOf(this.task);
            if (index !== -1) {
              animationTasks.splice(index, 1);
            }
            return this;
          }
          restore() {
            return this;
          }
          waitUntilStopped() {
            return Promise.resolve();
          }
          on() {
            return this;
          }
          once() {
            return this;
          }
          off() {
            return this;
          }
          emit() {
            return this;
          }
        }
        function animate(props, settings) {
          var _settings$duration2, _settings$delay2, _settings$easing, _settings$loop2, _settings$repeat2, _settings$repeatDelay2;
          var fullSettings = {
            duration: (_settings$duration2 = settings.duration) !== null && _settings$duration2 !== void 0 ? _settings$duration2 : 300,
            delay: (_settings$delay2 = settings.delay) !== null && _settings$delay2 !== void 0 ? _settings$delay2 : 0,
            easing: (_settings$easing = settings.easing) !== null && _settings$easing !== void 0 ? _settings$easing : "linear",
            loop: (_settings$loop2 = settings.loop) !== null && _settings$loop2 !== void 0 ? _settings$loop2 : false,
            repeat: (_settings$repeat2 = settings.repeat) !== null && _settings$repeat2 !== void 0 ? _settings$repeat2 : 1,
            repeatDelay: (_settings$repeatDelay2 = settings.repeatDelay) !== null && _settings$repeatDelay2 !== void 0 ? _settings$repeatDelay2 : 0,
            stopMethod: false
          };
          var now = performance.now();
          var task = {
            node: this,
            propsStart: {},
            propsEnd: {},
            timeStart: now,
            timeEnd: now + fullSettings.delay + fullSettings.duration,
            settings: fullSettings,
            iteration: 0,
            pausedTime: null
          };
          for (var _i2 = 0, _Object$entries2 = Object.entries(props); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              prop = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            if (value != null && typeof value === "number") {
              task.propsStart[prop] = this.props[prop];
              task.propsEnd[prop] = value;
            }
          }
          animationTasks.push(task);
          return new AnimationController(task);
        }
        var elMap = /* @__PURE__ */new WeakMap();
        var domRoot = document.body.appendChild(document.createElement("div"));
        domRoot.id = "dom_root";
        function updateNodeParent(node) {
          if (node.parent != null) {
            if (node.parent.id === 1) {
              domRoot.appendChild(node.el);
            } else {
              elMap.get(node.parent).appendChild(node.el);
            }
          } else {
            console.warn("no parent?");
          }
        }
        function getNodeStyles(node) {
          var style = "position: absolute;";
          if (node.alpha !== 1) style += `opacity: ${node.alpha};`;
          var x = node.x,
            y = node.y;
          if (node.mountX != null) {
            var _node$width;
            x -= ((_node$width = node.width) !== null && _node$width !== void 0 ? _node$width : 0) * node.mountX;
          }
          if (node.mountY != null) {
            var _node$height;
            y -= ((_node$height = node.height) !== null && _node$height !== void 0 ? _node$height : 0) * node.mountY;
          }
          if (x !== 0) style += `left: ${x}px;`;
          if (y !== 0) style += `top: ${y}px;`;
          if (node.width !== 0) style += `width: ${node.width}px;`;
          if (node.height !== 0) style += `height: ${node.height}px;`;
          if (node.zIndex !== 0) {
            style += `z-index: ${node.zIndex};`;
          }
          if (node.clipping) {
            style += `overflow: hidden;`;
          }
          var transform = "";
          if (node.rotation !== 0) transform += `rotate(${node.rotation}rad);`;
          if (node.scale !== 1) transform += `scale(${node.scale});`;else {
            if (node.scaleX !== 1) transform += `scaleX(${node.scaleX});`;
            if (node.scaleY !== 1) transform += `scaleY(${node.scaleY});`;
          }
          if (transform.length > 0) {
            style += `transform: ${transform}`;
          }
          if (node instanceof DOMText) {
            if (node.color != null && node.color !== 0) {
              style += `color: ${colorToRgba(node.color)};`;
            }
            if (node.fontFamily) style += `font-family: ${node.fontFamily};`;
            if (node.fontSize) style += `font-size: ${node.fontSize}px;`;
            if (node.fontStyle !== "normal") style += `font-style: ${node.fontStyle};`;
            if (node.fontWeight !== "normal") style += `font-weight: ${node.fontWeight};`;
            if (node.fontStretch !== "normal") style += `font-stretch: ${node.fontStretch};`;
            if (node.lineHeight != null) style += `line-height: ${node.lineHeight}px;`;
            if (node.letterSpacing) style += `letter-spacing: ${node.letterSpacing}px;`;
            if (node.textAlign !== "left") style += `text-align: ${node.textAlign};`;
            if (node.maxLines > 0) {
              style += `display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: ${node.maxLines};
        line-clamp: ${node.maxLines};
        -webkit-box-orient: vertical;`;
            }
            if (node.contain !== "none") {
              style += `overflow: hidden;`;
            }
          } else {
            var bgImg = [];
            var bgPos = null;
            if (node.colorBottom !== node.colorTop) {
              bgImg.push(`linear-gradient(${colorToRgba(node.colorTop)}, ${colorToRgba(node.colorBottom)})`);
            }
            if (node.colorLeft !== node.colorRight) {
              bgImg.push(`linear-gradient(to right, ${colorToRgba(node.colorLeft)}, ${colorToRgba(node.colorRight)})`);
            }
            if (node.texture != null && node.texture.type === TextureType.subTexture) {
              bgPos = node.texture.props;
              bgImg.push(`url(${node.texture.props.texture.props.src})`);
            } else if (node.src != null) {
              bgImg.push(`url(${node.src})`);
            }
            if (bgImg.length > 0) {
              style += `background-image: ${bgImg.join(",")}; background-blend-mode: multiply;`;
              if (bgPos !== null) {
                style += `background-position: -${bgPos.x}px -${bgPos.y}px;`;
              } else {
                style += "background-size: 100% 100%;";
              }
              if (node.color !== 4294967295 && node.color !== 0) {
                style += `background-color: ${colorToRgba(node.color)};`;
                style += `mask-image: ${bgImg.join(",")};`;
                if (bgPos !== null) {
                  style += `mask-position: -${bgPos.x}px -${bgPos.y}px;`;
                } else {
                  style += `mask-size: 100% 100%;`;
                }
              }
            } else if (node.color !== 0) {
              style += `background-color: ${colorToRgba(node.color)};`;
            }
            if (node.shader != null) {
              var shader = node.shader.props;
              if (shader != null) {
                if (typeof shader["border-width"] === "number" && shader["border-width"] > 0 && typeof shader["border-color"] === "number" && shader["border-color"] > 0) {
                  style += `box-shadow: inset 0px 0px 0px ${shader["border-width"]}px ${colorToRgba(shader["border-color"])};`;
                }
                if (typeof shader["radius"] === "number" && shader["radius"] > 0) {
                  style += `border-radius: ${shader["radius"]}px;`;
                }
              }
            }
          }
          return style;
        }
        function updateNodeStyles(node) {
          node.el.setAttribute("style", getNodeStyles(node));
        }
        function updateNodeData(node) {
          for (var _key18 in node.data) {
            var keyValue = node.data[_key18];
            if (keyValue === undefined) {
              node.el.removeAttribute("data-" + _key18);
            } else {
              node.el.setAttribute("data-" + _key18, String(keyValue));
            }
          }
        }
        function resolveNodeDefaults(props) {
          var _props$color2, _props$x2, _props$y2, _props$width4, _props$height4, _props$alpha2, _props$autosize2, _props$boundsMargin2, _props$clipping2, _props$colorTop2, _props$colorBottom2, _props$colorLeft2, _props$colorRight2, _ref24, _ref25, _props$colorBl2, _ref26, _ref27, _props$colorBr2, _ref28, _ref29, _props$colorTl2, _ref30, _ref31, _props$colorTr2, _props$zIndex2, _props$zIndexLocked2, _props$parent4, _props$texture2, _props$textureOptions2, _props$shader2, _props$src3, _props$scale2, _ref32, _props$scaleX2, _ref33, _props$scaleY2, _props$mount2, _ref34, _props$mountX2, _ref35, _props$mountY2, _props$pivot2, _ref36, _props$pivotX2, _ref37, _props$pivotY2, _props$rotation2, _props$rtt2, _props$preventCleanup2, _props$strictBounds2;
          var color = (_props$color2 = props.color) !== null && _props$color2 !== void 0 ? _props$color2 : 4294967295;
          return {
            x: (_props$x2 = props.x) !== null && _props$x2 !== void 0 ? _props$x2 : 0,
            y: (_props$y2 = props.y) !== null && _props$y2 !== void 0 ? _props$y2 : 0,
            width: (_props$width4 = props.width) !== null && _props$width4 !== void 0 ? _props$width4 : 0,
            height: (_props$height4 = props.height) !== null && _props$height4 !== void 0 ? _props$height4 : 0,
            alpha: (_props$alpha2 = props.alpha) !== null && _props$alpha2 !== void 0 ? _props$alpha2 : 1,
            autosize: (_props$autosize2 = props.autosize) !== null && _props$autosize2 !== void 0 ? _props$autosize2 : false,
            boundsMargin: (_props$boundsMargin2 = props.boundsMargin) !== null && _props$boundsMargin2 !== void 0 ? _props$boundsMargin2 : null,
            clipping: (_props$clipping2 = props.clipping) !== null && _props$clipping2 !== void 0 ? _props$clipping2 : false,
            color,
            colorTop: (_props$colorTop2 = props.colorTop) !== null && _props$colorTop2 !== void 0 ? _props$colorTop2 : color,
            colorBottom: (_props$colorBottom2 = props.colorBottom) !== null && _props$colorBottom2 !== void 0 ? _props$colorBottom2 : color,
            colorLeft: (_props$colorLeft2 = props.colorLeft) !== null && _props$colorLeft2 !== void 0 ? _props$colorLeft2 : color,
            colorRight: (_props$colorRight2 = props.colorRight) !== null && _props$colorRight2 !== void 0 ? _props$colorRight2 : color,
            colorBl: (_ref24 = (_ref25 = (_props$colorBl2 = props.colorBl) !== null && _props$colorBl2 !== void 0 ? _props$colorBl2 : props.colorBottom) !== null && _ref25 !== void 0 ? _ref25 : props.colorLeft) !== null && _ref24 !== void 0 ? _ref24 : color,
            colorBr: (_ref26 = (_ref27 = (_props$colorBr2 = props.colorBr) !== null && _props$colorBr2 !== void 0 ? _props$colorBr2 : props.colorBottom) !== null && _ref27 !== void 0 ? _ref27 : props.colorRight) !== null && _ref26 !== void 0 ? _ref26 : color,
            colorTl: (_ref28 = (_ref29 = (_props$colorTl2 = props.colorTl) !== null && _props$colorTl2 !== void 0 ? _props$colorTl2 : props.colorTop) !== null && _ref29 !== void 0 ? _ref29 : props.colorLeft) !== null && _ref28 !== void 0 ? _ref28 : color,
            colorTr: (_ref30 = (_ref31 = (_props$colorTr2 = props.colorTr) !== null && _props$colorTr2 !== void 0 ? _props$colorTr2 : props.colorTop) !== null && _ref31 !== void 0 ? _ref31 : props.colorRight) !== null && _ref30 !== void 0 ? _ref30 : color,
            zIndex: (_props$zIndex2 = props.zIndex) !== null && _props$zIndex2 !== void 0 ? _props$zIndex2 : 0,
            zIndexLocked: (_props$zIndexLocked2 = props.zIndexLocked) !== null && _props$zIndexLocked2 !== void 0 ? _props$zIndexLocked2 : 0,
            parent: (_props$parent4 = props.parent) !== null && _props$parent4 !== void 0 ? _props$parent4 : null,
            texture: (_props$texture2 = props.texture) !== null && _props$texture2 !== void 0 ? _props$texture2 : null,
            textureOptions: (_props$textureOptions2 = props.textureOptions) !== null && _props$textureOptions2 !== void 0 ? _props$textureOptions2 : {},
            shader: (_props$shader2 = props.shader) !== null && _props$shader2 !== void 0 ? _props$shader2 : defaultShader,
            // Since setting the `src` will trigger a texture load, we need to set it after
            // we set the texture. Otherwise, problems happen.
            src: (_props$src3 = props.src) !== null && _props$src3 !== void 0 ? _props$src3 : null,
            srcHeight: props.srcHeight,
            srcWidth: props.srcWidth,
            srcX: props.srcX,
            srcY: props.srcY,
            scale: (_props$scale2 = props.scale) !== null && _props$scale2 !== void 0 ? _props$scale2 : null,
            scaleX: (_ref32 = (_props$scaleX2 = props.scaleX) !== null && _props$scaleX2 !== void 0 ? _props$scaleX2 : props.scale) !== null && _ref32 !== void 0 ? _ref32 : 1,
            scaleY: (_ref33 = (_props$scaleY2 = props.scaleY) !== null && _props$scaleY2 !== void 0 ? _props$scaleY2 : props.scale) !== null && _ref33 !== void 0 ? _ref33 : 1,
            mount: (_props$mount2 = props.mount) !== null && _props$mount2 !== void 0 ? _props$mount2 : 0,
            mountX: (_ref34 = (_props$mountX2 = props.mountX) !== null && _props$mountX2 !== void 0 ? _props$mountX2 : props.mount) !== null && _ref34 !== void 0 ? _ref34 : 0,
            mountY: (_ref35 = (_props$mountY2 = props.mountY) !== null && _props$mountY2 !== void 0 ? _props$mountY2 : props.mount) !== null && _ref35 !== void 0 ? _ref35 : 0,
            pivot: (_props$pivot2 = props.pivot) !== null && _props$pivot2 !== void 0 ? _props$pivot2 : 0.5,
            pivotX: (_ref36 = (_props$pivotX2 = props.pivotX) !== null && _props$pivotX2 !== void 0 ? _props$pivotX2 : props.pivot) !== null && _ref36 !== void 0 ? _ref36 : 0.5,
            pivotY: (_ref37 = (_props$pivotY2 = props.pivotY) !== null && _props$pivotY2 !== void 0 ? _props$pivotY2 : props.pivot) !== null && _ref37 !== void 0 ? _ref37 : 0.5,
            rotation: (_props$rotation2 = props.rotation) !== null && _props$rotation2 !== void 0 ? _props$rotation2 : 0,
            rtt: (_props$rtt2 = props.rtt) !== null && _props$rtt2 !== void 0 ? _props$rtt2 : false,
            data: {},
            preventCleanup: (_props$preventCleanup2 = props.preventCleanup) !== null && _props$preventCleanup2 !== void 0 ? _props$preventCleanup2 : false,
            imageType: props.imageType,
            strictBounds: (_props$strictBounds2 = props.strictBounds) !== null && _props$strictBounds2 !== void 0 ? _props$strictBounds2 : false
          };
        }
        function resolveTextNodeDefaults(props) {
          var _props$text2, _props$textRendererOv2, _props$fontSize2, _props$fontFamily2, _props$fontStyle2, _props$fontWeight2, _props$fontStretch2, _props$textAlign2, _props$contain2, _props$scrollable2, _props$scrollY2, _props$offsetY2, _props$letterSpacing2, _props$maxLines2, _props$textBaseline2, _props$verticalAlign2, _props$overflowSuffix2, _props$debug2;
          return _objectSpread(_objectSpread({}, resolveNodeDefaults(props)), {}, {
            text: (_props$text2 = props.text) !== null && _props$text2 !== void 0 ? _props$text2 : "",
            textRendererOverride: (_props$textRendererOv2 = props.textRendererOverride) !== null && _props$textRendererOv2 !== void 0 ? _props$textRendererOv2 : null,
            fontSize: (_props$fontSize2 = props.fontSize) !== null && _props$fontSize2 !== void 0 ? _props$fontSize2 : 16,
            fontFamily: (_props$fontFamily2 = props.fontFamily) !== null && _props$fontFamily2 !== void 0 ? _props$fontFamily2 : "sans-serif",
            fontStyle: (_props$fontStyle2 = props.fontStyle) !== null && _props$fontStyle2 !== void 0 ? _props$fontStyle2 : "normal",
            fontWeight: (_props$fontWeight2 = props.fontWeight) !== null && _props$fontWeight2 !== void 0 ? _props$fontWeight2 : "normal",
            fontStretch: (_props$fontStretch2 = props.fontStretch) !== null && _props$fontStretch2 !== void 0 ? _props$fontStretch2 : "normal",
            textAlign: (_props$textAlign2 = props.textAlign) !== null && _props$textAlign2 !== void 0 ? _props$textAlign2 : "left",
            contain: (_props$contain2 = props.contain) !== null && _props$contain2 !== void 0 ? _props$contain2 : "none",
            scrollable: (_props$scrollable2 = props.scrollable) !== null && _props$scrollable2 !== void 0 ? _props$scrollable2 : false,
            scrollY: (_props$scrollY2 = props.scrollY) !== null && _props$scrollY2 !== void 0 ? _props$scrollY2 : 0,
            offsetY: (_props$offsetY2 = props.offsetY) !== null && _props$offsetY2 !== void 0 ? _props$offsetY2 : 0,
            letterSpacing: (_props$letterSpacing2 = props.letterSpacing) !== null && _props$letterSpacing2 !== void 0 ? _props$letterSpacing2 : 0,
            lineHeight: props.lineHeight,
            // `undefined` is a valid value
            maxLines: (_props$maxLines2 = props.maxLines) !== null && _props$maxLines2 !== void 0 ? _props$maxLines2 : 0,
            textBaseline: (_props$textBaseline2 = props.textBaseline) !== null && _props$textBaseline2 !== void 0 ? _props$textBaseline2 : "alphabetic",
            verticalAlign: (_props$verticalAlign2 = props.verticalAlign) !== null && _props$verticalAlign2 !== void 0 ? _props$verticalAlign2 : "middle",
            overflowSuffix: (_props$overflowSuffix2 = props.overflowSuffix) !== null && _props$overflowSuffix2 !== void 0 ? _props$overflowSuffix2 : "...",
            debug: (_props$debug2 = props.debug) !== null && _props$debug2 !== void 0 ? _props$debug2 : {}
          });
        }
        var defaultShader = {};
        var lastNodeId = 0;
        class DOMNode {
          constructor(stage, props) {
            _defineProperty(this, "el", document.createElement("div"));
            _defineProperty(this, "id", ++lastNodeId);
            _defineProperty(this, "globalTransform", undefined);
            _defineProperty(this, "children", undefined);
            _defineProperty(this, "rttParent", undefined);
            _defineProperty(this, "updateType", undefined);
            _defineProperty(this, "childUpdateType", undefined);
            _defineProperty(this, "scaleRotateTransform", undefined);
            _defineProperty(this, "localTransform", undefined);
            _defineProperty(this, "renderCoords", undefined);
            _defineProperty(this, "renderBound", undefined);
            _defineProperty(this, "strictBound", undefined);
            _defineProperty(this, "preloadBound", undefined);
            _defineProperty(this, "clippingRect", undefined);
            _defineProperty(this, "isRenderable", undefined);
            _defineProperty(this, "renderState", undefined);
            _defineProperty(this, "worldAlpha", undefined);
            _defineProperty(this, "premultipliedColorTl", undefined);
            _defineProperty(this, "premultipliedColorTr", undefined);
            _defineProperty(this, "premultipliedColorBl", undefined);
            _defineProperty(this, "premultipliedColorBr", undefined);
            _defineProperty(this, "calcZIndex", undefined);
            _defineProperty(this, "hasRTTupdates", undefined);
            _defineProperty(this, "parentHasRenderTexture", undefined);
            _defineProperty(this, "animate", animate);
            this.stage = stage;
            this.props = props;
            this.el._node = this;
            this.el.setAttribute("data-id", String(this.id));
            elMap.set(this, this.el);
            updateNodeParent(this);
            updateNodeStyles(this);
            updateNodeData(this);
          }
          destroy() {
            elMap.delete(this);
            this.el.parentNode.removeChild(this.el);
          }
          get parent() {
            return this.props.parent;
          }
          set parent(value) {
            this.props.parent = value;
            updateNodeParent(this);
          }
          get x() {
            return this.props.x;
          }
          set x(value) {
            this.props.x = value;
            updateNodeStyles(this);
          }
          get y() {
            return this.props.y;
          }
          set y(value) {
            this.props.y = value;
            updateNodeStyles(this);
          }
          get width() {
            return this.props.width;
          }
          set width(value) {
            this.props.width = value;
            updateNodeStyles(this);
          }
          get height() {
            return this.props.height;
          }
          set height(value) {
            this.props.height = value;
            updateNodeStyles(this);
          }
          get alpha() {
            return this.props.alpha;
          }
          set alpha(value) {
            this.props.alpha = value;
            updateNodeStyles(this);
          }
          get autosize() {
            return this.props.autosize;
          }
          set autosize(value) {
            this.props.autosize = value;
            updateNodeStyles(this);
          }
          get clipping() {
            return this.props.clipping;
          }
          set clipping(value) {
            this.props.clipping = value;
            updateNodeStyles(this);
          }
          get color() {
            return this.props.color;
          }
          set color(value) {
            this.props.color = value;
            updateNodeStyles(this);
          }
          get colorTop() {
            return this.props.colorTop;
          }
          set colorTop(value) {
            this.props.colorTop = value;
            updateNodeStyles(this);
          }
          get colorBottom() {
            return this.props.colorBottom;
          }
          set colorBottom(value) {
            this.props.colorBottom = value;
            updateNodeStyles(this);
          }
          get colorLeft() {
            return this.props.colorLeft;
          }
          set colorLeft(value) {
            this.props.colorLeft = value;
            updateNodeStyles(this);
          }
          get colorRight() {
            return this.props.colorRight;
          }
          set colorRight(value) {
            this.props.colorRight = value;
            updateNodeStyles(this);
          }
          get colorTl() {
            return this.props.colorTl;
          }
          set colorTl(value) {
            this.props.colorTl = value;
            updateNodeStyles(this);
          }
          get colorTr() {
            return this.props.colorTr;
          }
          set colorTr(value) {
            this.props.colorTr = value;
            updateNodeStyles(this);
          }
          get colorBr() {
            return this.props.colorBr;
          }
          set colorBr(value) {
            this.props.colorBr = value;
            updateNodeStyles(this);
          }
          get colorBl() {
            return this.props.colorBl;
          }
          set colorBl(value) {
            this.props.colorBl = value;
            updateNodeStyles(this);
          }
          get zIndex() {
            return this.props.zIndex;
          }
          set zIndex(value) {
            this.props.zIndex = value;
            updateNodeStyles(this);
          }
          get texture() {
            return this.props.texture;
          }
          set texture(value) {
            this.props.texture = value;
            updateNodeStyles(this);
          }
          get preventCleanup() {
            return this.props.preventCleanup;
          }
          set preventCleanup(value) {
            this.props.preventCleanup = value;
            updateNodeStyles(this);
          }
          get textureOptions() {
            return this.props.textureOptions;
          }
          set textureOptions(value) {
            this.props.textureOptions = value;
            updateNodeStyles(this);
          }
          get src() {
            return this.props.src;
          }
          set src(value) {
            this.props.src = value;
            updateNodeStyles(this);
          }
          get zIndexLocked() {
            return this.props.zIndexLocked;
          }
          set zIndexLocked(value) {
            this.props.zIndexLocked = value;
            updateNodeStyles(this);
          }
          get scale() {
            var _this$props$scale;
            return (_this$props$scale = this.props.scale) !== null && _this$props$scale !== void 0 ? _this$props$scale : 1;
          }
          set scale(value) {
            this.props.scale = value;
            updateNodeStyles(this);
          }
          get scaleX() {
            return this.props.scaleX;
          }
          set scaleX(value) {
            this.props.scaleX = value;
            updateNodeStyles(this);
          }
          get scaleY() {
            return this.props.scaleY;
          }
          set scaleY(value) {
            this.props.scaleY = value;
            updateNodeStyles(this);
          }
          get mount() {
            return this.props.mount;
          }
          set mount(value) {
            this.props.mount = value;
            updateNodeStyles(this);
          }
          get mountX() {
            return this.props.mountX;
          }
          set mountX(value) {
            this.props.mountX = value;
            updateNodeStyles(this);
          }
          get mountY() {
            return this.props.mountY;
          }
          set mountY(value) {
            this.props.mountY = value;
            updateNodeStyles(this);
          }
          get pivot() {
            return this.props.pivot;
          }
          set pivot(value) {
            this.props.pivot = value;
            updateNodeStyles(this);
          }
          get pivotX() {
            return this.props.pivotX;
          }
          set pivotX(value) {
            this.props.pivotX = value;
            updateNodeStyles(this);
          }
          get pivotY() {
            return this.props.pivotY;
          }
          set pivotY(value) {
            this.props.pivotY = value;
            updateNodeStyles(this);
          }
          get rotation() {
            return this.props.rotation;
          }
          set rotation(value) {
            this.props.rotation = value;
            updateNodeStyles(this);
          }
          get rtt() {
            return this.props.rtt;
          }
          set rtt(value) {
            this.props.rtt = value;
            updateNodeStyles(this);
          }
          get shader() {
            return this.props.shader;
          }
          set shader(v) {
            this.props.shader = v;
            updateNodeStyles(this);
          }
          get strictBounds() {
            return this.props.strictBounds;
          }
          set strictBounds(value) {
            this.props.strictBounds = value;
            updateNodeStyles(this);
          }
          get data() {
            return this.props.data;
          }
          set data(value) {
            this.props.data = value;
            updateNodeData(this);
          }
          get imageType() {
            return this.props.imageType;
          }
          set imageType(value) {
            this.props.imageType = value;
          }
          get srcWidth() {
            return this.props.srcWidth;
          }
          set srcWidth(value) {
            this.props.srcWidth = value;
          }
          get srcHeight() {
            return this.props.srcHeight;
          }
          set srcHeight(value) {
            this.props.srcHeight = value;
          }
          get srcX() {
            return this.props.srcX;
          }
          set srcX(value) {
            this.props.srcX = value;
          }
          get srcY() {
            return this.props.srcY;
          }
          set srcY(value) {
            this.props.srcY = value;
          }
          get boundsMargin() {
            return this.props.boundsMargin;
          }
          set boundsMargin(value) {
            this.props.boundsMargin = value;
          }
          get absX() {
            var _this$parent2, _this$parent3;
            return this.x + -this.width * this.mountX + (((_this$parent2 = this.parent) === null || _this$parent2 === void 0 ? void 0 : _this$parent2.absX) || ((_this$parent3 = this.parent) === null || _this$parent3 === void 0 || (_this$parent3 = _this$parent3.globalTransform) === null || _this$parent3 === void 0 ? void 0 : _this$parent3.tx) || 0);
          }
          get absY() {
            var _this$parent$absY, _this$parent4;
            return this.y + -this.height * this.mountY + ((_this$parent$absY = (_this$parent4 = this.parent) === null || _this$parent4 === void 0 ? void 0 : _this$parent4.absY) !== null && _this$parent$absY !== void 0 ? _this$parent$absY : 0);
          }
          get framebufferDimensions() {
            return this.node.framebufferDimensions;
          }
          get parentRenderTexture() {
            return this.node.parentRenderTexture;
          }
          loadTexture() {}
          unloadTexture() {}
          autosizeNode(dimensions) {}
          sortChildren() {}
          updateScaleRotateTransform() {}
          updateLocalTransform() {}
          checkRenderBounds() {}
          updateBoundingRect() {}
          createRenderBounds() {}
          updateRenderState(renderState) {}
          updateIsRenderable() {}
          checkBasicRenderability() {}
          setRenderable(isRenderable) {}
          updateTextureOwnership(isRenderable) {}
          isOutOfBounds() {}
          hasDimensions() {}
          hasColorProperties() {}
          hasShader() {}
          calculateRenderCoords() {}
          calculateZIndex() {}
          flush() {}
          on(event, listener) {}
          off(event, listener) {}
          once(event, listener) {}
          emit(event, data) {}
          removeAllListeners() {}
          setUpdateType(type) {}
          update(delta, parentClippingRect) {}
          calculateClippingRect(parentClippingRect) {}
          renderQuads(renderer) {}
        }
        class DOMText extends DOMNode {
          constructor(stage, props) {
            super(stage, props);
            this.props = props;
            this.el.innerText = props.text;
          }
          get text() {
            return this.props.text;
          }
          set text(value) {
            this.props.text = value;
            this.el.innerText = value;
          }
          get fontFamily() {
            return this.props.fontFamily;
          }
          set fontFamily(value) {
            this.props.fontFamily = value;
            updateNodeStyles(this);
          }
          get fontSize() {
            return this.props.fontSize;
          }
          set fontSize(value) {
            this.props.fontSize = value;
            updateNodeStyles(this);
          }
          get fontStyle() {
            return this.props.fontStyle;
          }
          set fontStyle(value) {
            this.props.fontStyle = value;
            updateNodeStyles(this);
          }
          get fontWeight() {
            return this.props.fontWeight;
          }
          set fontWeight(value) {
            this.props.fontWeight = value;
            updateNodeStyles(this);
          }
          get fontStretch() {
            return this.props.fontStretch;
          }
          set fontStretch(value) {
            this.props.fontStretch = value;
            updateNodeStyles(this);
          }
          get lineHeight() {
            return this.props.lineHeight;
          }
          set lineHeight(value) {
            this.props.lineHeight = value;
            updateNodeStyles(this);
          }
          get letterSpacing() {
            return this.props.letterSpacing;
          }
          set letterSpacing(value) {
            this.props.letterSpacing = value;
            updateNodeStyles(this);
          }
          get textAlign() {
            return this.props.textAlign;
          }
          set textAlign(value) {
            this.props.textAlign = value;
            updateNodeStyles(this);
          }
          get overflowSuffix() {
            return this.props.overflowSuffix;
          }
          set overflowSuffix(value) {
            this.props.overflowSuffix = value;
            updateNodeStyles(this);
          }
          get maxLines() {
            return this.props.maxLines;
          }
          set maxLines(value) {
            this.props.maxLines = value;
            updateNodeStyles(this);
          }
          get contain() {
            return this.props.contain;
          }
          set contain(value) {
            this.props.contain = value;
            updateNodeStyles(this);
          }
          get verticalAlign() {
            return this.props.verticalAlign;
          }
          set verticalAlign(value) {
            this.props.verticalAlign = value;
            updateNodeStyles(this);
          }
          get textBaseline() {
            return this.props.textBaseline;
          }
          set textBaseline(value) {
            this.props.textBaseline = value;
            updateNodeStyles(this);
          }
          get textRendererOverride() {
            return this.props.textRendererOverride;
          }
          set textRendererOverride(value) {
            this.props.textRendererOverride = value;
            updateNodeStyles(this);
          }
          get scrollable() {
            return this.props.scrollable;
          }
          set scrollable(value) {
            this.props.scrollable = value;
            updateNodeStyles(this);
          }
          get scrollY() {
            return this.props.scrollY;
          }
          set scrollY(value) {
            this.props.scrollY = value;
            updateNodeStyles(this);
          }
          get offsetY() {
            return this.props.offsetY;
          }
          set offsetY(value) {
            this.props.offsetY = value;
            updateNodeStyles(this);
          }
          get debug() {
            return this.props.debug;
          }
          set debug(value) {
            this.props.debug = value;
            updateNodeStyles(this);
          }
        }
        function updateRootPosition() {
          var _settings$appHeight, _settings$deviceLogic, _settings$appWidth, _settings$deviceLogic2, _settings$deviceLogic3, _settings$deviceLogic4;
          var canvas = this.canvas,
            settings = this.settings;
          var rect = canvas.getBoundingClientRect();
          var top = document.documentElement.scrollTop + rect.top;
          var left = document.documentElement.scrollLeft + rect.left;
          var height = Math.ceil((_settings$appHeight = settings.appHeight) !== null && _settings$appHeight !== void 0 ? _settings$appHeight : 1080 / ((_settings$deviceLogic = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic !== void 0 ? _settings$deviceLogic : 1));
          var width = Math.ceil((_settings$appWidth = settings.appWidth) !== null && _settings$appWidth !== void 0 ? _settings$appWidth : 1920 / ((_settings$deviceLogic2 = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic2 !== void 0 ? _settings$deviceLogic2 : 1));
          var scaleX = (_settings$deviceLogic3 = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic3 !== void 0 ? _settings$deviceLogic3 : 1;
          var scaleY = (_settings$deviceLogic4 = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic4 !== void 0 ? _settings$deviceLogic4 : 1;
          domRoot.style.left = `${left}px`;
          domRoot.style.top = `${top}px`;
          domRoot.style.width = `${width}px`;
          domRoot.style.height = `${height}px`;
          domRoot.style.position = "absolute";
          domRoot.style.transformOrigin = "0 0 0";
          domRoot.style.transform = `scale(${scaleX}, ${scaleY})`;
          domRoot.style.overflow = "hidden";
          domRoot.style.zIndex = "65534";
        }
        class DOMRendererMain {
          constructor(settings, target) {
            var _settings$appWidth2, _settings$appWidth3;
            _defineProperty(this, "root", void 0);
            _defineProperty(this, "canvas", void 0);
            _defineProperty(this, "stage", void 0);
            this.settings = settings;
            this.target = target;
            var canvas = document.body.appendChild(document.createElement("canvas"));
            canvas.style.position = "absolute";
            canvas.style.top = "0";
            canvas.style.left = "0";
            canvas.style.width = "100vw";
            canvas.style.height = "100vh";
            this.canvas = canvas;
            this.stage = {
              root: null,
              renderer: {
                mode: "canvas"
              },
              fontManager: {
                addFontFace: () => {}
              }
            };
            this.root = new DOMNode(this.stage, {
              x: 0,
              y: 0,
              width: (_settings$appWidth2 = settings.appWidth) !== null && _settings$appWidth2 !== void 0 ? _settings$appWidth2 : 1920,
              height: (_settings$appWidth3 = settings.appWidth) !== null && _settings$appWidth3 !== void 0 ? _settings$appWidth3 : 1080,
              alpha: 1,
              autosize: false,
              boundsMargin: null,
              clipping: false,
              color: 0,
              colorTop: 0,
              colorBottom: 0,
              colorLeft: 0,
              colorRight: 0,
              colorTl: 0,
              colorTr: 0,
              colorBl: 0,
              colorBr: 0,
              zIndex: 0,
              zIndexLocked: 0,
              scaleX: 1,
              scaleY: 1,
              mountX: 0,
              mountY: 0,
              mount: 0,
              pivot: 0.5,
              pivotX: 0.5,
              pivotY: 0.5,
              rotation: 0,
              parent: null,
              texture: null,
              textureOptions: {},
              shader: defaultShader,
              rtt: false,
              src: null,
              scale: 1,
              preventCleanup: false,
              strictBounds: false
            });
            this.stage.root = this.root;
            if (Config.fontSettings.fontFamily != null) {
              domRoot.style.setProperty("font-family", Config.fontSettings.fontFamily);
            }
            if (Config.fontSettings.fontSize != null) {
              domRoot.style.setProperty("font-size", Config.fontSettings.fontSize + "px");
            }
            domRoot.style.setProperty("line-height", Config.fontSettings.lineHeight ? Config.fontSettings.lineHeight + "px" : "1"
            // 1 = same as font size
            );
            updateRootPosition.call(this);
            new MutationObserver(updateRootPosition.bind(this)).observe(this.canvas, {
              attributes: true
            });
            new ResizeObserver(updateRootPosition.bind(this)).observe(this.canvas);
            window.addEventListener("resize", updateRootPosition.bind(this));
          }
          createNode(props) {
            return new DOMNode(this.stage, resolveNodeDefaults(props));
          }
          createTextNode(props) {
            return new DOMText(this.stage, resolveTextNodeDefaults(props));
          }
          createShader(shType, props) {
            return {
              shaderType: shType,
              props,
              resolvedProps: props,
              node: null,
              attachNode(node) {
                this.node = node;
              }
            };
          }
          createTexture(textureType, props) {
            var type = TextureType.generic;
            switch (textureType) {
              case "SubTexture":
                type = TextureType.subTexture;
                break;
              case "ImageTexture":
                type = TextureType.image;
                break;
              case "ColorTexture":
                type = TextureType.color;
                break;
              case "NoiseTexture":
                type = TextureType.noise;
                break;
              case "RenderTexture":
                type = TextureType.renderToTexture;
                break;
            }
            return {
              type,
              props,
              setRenderableOwner: () => {},
              on: () => {}
            };
          }
          on(name, callback) {
            console.log("on", name, callback);
          }
        }
        var renderer$2;
        function startLightningRenderer(options) {
          var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "app";
          renderer$2 = Config.domRendering ? new DOMRendererMain(options, rootId) : new RendererMain(options, rootId);
          return renderer$2;
        }
        function loadFonts(fonts) {
          var _iterator13 = _createForOfIteratorHelper(fonts),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var font = _step13.value;
              if (renderer$2.stage.renderer.mode === "webgl" && "type" in font && (font.type === "msdf" || font.type === "ssdf")) {
                renderer$2.stage.fontManager.addFontFace(new SdfTrFontFace(font.type, _objectSpread(_objectSpread({}, font), {}, {
                  stage: renderer$2.stage
                })));
              } else if ("fontUrl" in font) {
                renderer$2.stage.fontManager.addFontFace(new WebTrFontFace(font));
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }
        var NodeType = {
          Element: "element",
          TextNode: "textNode",
          Text: "text"
        };
        function log(msg, node) {}
        var isFunc = obj => obj instanceof Function;
        var isFunction = exports("l", obj => typeof obj === "function");
        function isArray(item) {
          return Array.isArray(item);
        }
        function isString(item) {
          return typeof item === "string";
        }
        function isNumber(item) {
          return typeof item === "number";
        }
        function isInteger(item) {
          return Number.isInteger(item);
        }
        function isINode(node) {
          return "destroy" in node && typeof node.destroy === "function";
        }
        function isElementNode(node) {
          return node instanceof ElementNode;
        }
        function isElementText(node) {
          return node._type === NodeType.TextNode;
        }
        function isTextNode(node) {
          return node._type === NodeType.Text;
        }
        function keyExists(obj, keys) {
          var _iterator14 = _createForOfIteratorHelper(keys),
            _step14;
          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _key19 = _step14.value;
              if (_key19 in obj) {
                return true;
              }
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
          return false;
        }
        class States extends Array {
          constructor(callback) {
            var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (isArray(initialState)) {
              super(...initialState);
              _defineProperty(this, "onChange", void 0);
            } else if (isString(initialState)) {
              super(initialState);
              _defineProperty(this, "onChange", void 0);
            } else {
              super(...Object.entries(initialState).filter(_ref38 => {
                var _ref39 = _slicedToArray(_ref38, 2),
                  _key = _ref39[0],
                  value = _ref39[1];
                return value;
              }).map(_ref40 => {
                var _ref41 = _slicedToArray(_ref40, 1),
                  key = _ref41[0];
                return key;
              })
              // Assert as DollarString
              );
              _defineProperty(this, "onChange", void 0);
            }
            this.onChange = callback;
            return this;
          }
          has(state) {
            return this.indexOf(state) >= 0 || this.indexOf(`$${state}`) >= 0;
          }
          is(state) {
            return this.indexOf(state) >= 0;
          }
          add(state) {
            if (this.has(state)) {
              return;
            }
            this.push(state);
            this.onChange();
          }
          toggle(state, force) {
            if (force === true) {
              this.add(state);
            } else if (force === false) {
              this.remove(state);
            } else {
              if (this.has(state)) {
                this.remove(state);
              } else {
                this.add(state);
              }
            }
          }
          merge(newStates) {
            if (isArray(newStates)) {
              this.length = 0;
              this.push(...newStates);
            } else if (isString(newStates)) {
              this.length = 0;
              this.push(newStates);
            } else {
              for (var state in newStates) {
                var value = newStates[state];
                if (value) {
                  if (!this.has(state)) {
                    this.push(state);
                  }
                } else {
                  var stateIndexToRemove = this.indexOf(state);
                  if (stateIndexToRemove >= 0) {
                    this.splice(stateIndexToRemove, 1);
                  }
                }
              }
            }
            return this;
          }
          remove(state) {
            var stateIndexToRemove = this.indexOf(state);
            if (stateIndexToRemove >= 0) {
              this.splice(stateIndexToRemove, 1);
              this.onChange();
            }
          }
        }
        function calculateFlex(node) {
          var children = [];
          var hasOrder = false;
          var growSize = 0;
          for (var i = 0; i < node.children.length; i++) {
            var c = node.children[i];
            if (isElementText(c) && c.text && !(c.width || c.height)) {
              return false;
            }
            if (isTextNode(c) || c.flexItem === false) {
              continue;
            }
            if (c.flexOrder !== undefined) {
              hasOrder = true;
            }
            if (c.flexGrow !== undefined) {
              growSize += c.flexGrow;
            }
            children.push(c);
          }
          if (hasOrder) {
            children.sort((a, b) => (a.flexOrder || 0) - (b.flexOrder || 0));
          }
          var numChildren = children.length;
          var direction = node.flexDirection || "row";
          var isRow = direction === "row";
          var dimension = isRow ? "width" : "height";
          var crossDimension = isRow ? "height" : "width";
          var marginOne = isRow ? "marginLeft" : "marginTop";
          var crossMarginOne = isRow ? "marginTop" : "marginLeft";
          var marginTwo = isRow ? "marginRight" : "marginBottom";
          var crossMarginTwo = isRow ? "marginBottom" : "marginRight";
          var prop = isRow ? "x" : "y";
          var crossProp = isRow ? "y" : "x";
          var containerSize = node[dimension] || 0;
          var containerCrossSize = node[crossDimension] || 0;
          var gap = node.gap || 0;
          var justify = node.justifyContent || "flexStart";
          var align = node.alignItems;
          var containerUpdated = false;
          if (growSize && numChildren > 1) {
            var flexBasis = children.reduce((prev, c) => prev + (c.flexGrow ? 0 : c[dimension] || 0) + (c[marginOne] || 0) + (c[marginTwo] || 0), 0);
            var growFactor = (containerSize - flexBasis - gap * (numChildren - 1)) / growSize;
            for (var _i3 = 0; _i3 < numChildren; _i3++) {
              var _c = children[_i3];
              if (_c.flexGrow && _c.flexGrow > 0) {
                _c[dimension] = _c.flexGrow * growFactor;
              }
            }
          }
          var itemSize = 0;
          if (justify === "center" || justify === "spaceBetween" || justify === "spaceEvenly") {
            itemSize = children.reduce((prev, c) => prev + (c[dimension] || 0) + (c[marginOne] || 0) + (c[marginTwo] || 0), 0);
          }
          var crossAlignChild = containerCrossSize && align ? c => {
            if (align === "flexStart") {
              c[crossProp] = c[crossMarginOne] || 0;
            } else if (align === "center") {
              c[crossProp] = (containerCrossSize - (c[crossDimension] || 0)) / 2 + (c[crossMarginOne] || 0);
            } else if (align === "flexEnd") {
              c[crossProp] = containerCrossSize - (c[crossDimension] || 0) - (c[crossMarginTwo] || 0);
            }
          } : c => c;
          if (isRow && node._calcHeight && !node.flexCrossBoundary) {
            var _children$;
            var newHeight = ((_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.height) || node.height;
            if (newHeight !== node.height) {
              containerUpdated = true;
              node.height = containerCrossSize = newHeight;
            }
          }
          if (justify === "flexStart") {
            var start = node.padding || 0;
            for (var _i4 = 0; _i4 < children.length; _i4++) {
              var _c2 = children[_i4];
              _c2[prop] = start + (_c2[marginOne] || 0);
              start += (_c2[dimension] || 0) + gap + (_c2[marginOne] || 0) + (_c2[marginTwo] || 0);
              crossAlignChild(_c2);
            }
            if (node.flexBoundary !== "fixed") {
              var calculatedSize = start - gap + (node.padding || 0);
              if (calculatedSize !== containerSize) {
                node[`preFlex${dimension}`] = containerSize;
                node[dimension] = calculatedSize;
                return true;
              }
            }
          } else if (justify === "flexEnd") {
            var _start = containerSize;
            for (var _i5 = numChildren - 1; _i5 >= 0; _i5--) {
              var _c3 = children[_i5];
              _c3[prop] = _start - (_c3[dimension] || 0) - (_c3[marginTwo] || 0);
              _start -= (_c3[dimension] || 0) + gap + (_c3[marginOne] || 0) + (_c3[marginTwo] || 0);
              crossAlignChild(_c3);
            }
          } else if (justify === "center") {
            var _start2 = (containerSize - (itemSize + gap * (numChildren - 1))) / 2;
            for (var _i6 = 0; _i6 < children.length; _i6++) {
              var _c4 = children[_i6];
              _c4[prop] = _start2 + (_c4[marginOne] || 0);
              _start2 += (_c4[dimension] || 0) + gap + (_c4[marginOne] || 0) + (_c4[marginTwo] || 0);
              crossAlignChild(_c4);
            }
          } else if (justify === "spaceBetween") {
            var toPad = (containerSize - itemSize) / (numChildren - 1);
            var _start3 = 0;
            for (var _i7 = 0; _i7 < children.length; _i7++) {
              var _c5 = children[_i7];
              _c5[prop] = _start3 + (_c5[marginOne] || 0);
              _start3 += (_c5[dimension] || 0) + toPad + (_c5[marginOne] || 0) + (_c5[marginTwo] || 0);
              crossAlignChild(_c5);
            }
          } else if (justify === "spaceEvenly") {
            var _toPad = (containerSize - itemSize) / (numChildren + 1);
            var _start4 = _toPad;
            for (var _i8 = 0; _i8 < children.length; _i8++) {
              var _c6 = children[_i8];
              _c6[prop] = _start4 + (_c6[marginOne] || 0);
              _start4 += (_c6[dimension] || 0) + _toPad + (_c6[marginOne] || 0) + (_c6[marginTwo] || 0);
              crossAlignChild(_c6);
            }
          }
          return containerUpdated;
        }
        var keyMapEntries = {
          ArrowLeft: "Left",
          ArrowRight: "Right",
          ArrowUp: "Up",
          ArrowDown: "Down",
          Enter: "Enter",
          l: "Last",
          " ": "Space",
          Backspace: "Back",
          Escape: "Escape"
        };
        var keyHoldMapEntries = {
          // Enter: 'EnterHold',
        };
        var flattenKeyMap = (keyMap, targetMap) => {
          var _loop4 = function _loop4() {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i9], 2),
              key = _Object$entries3$_i[0],
              value = _Object$entries3$_i[1];
            if (Array.isArray(value)) {
              value.forEach(v => {
                targetMap[v] = key;
              });
            } else if (value === null) {
              delete targetMap[key];
            } else {
              targetMap[value] = key;
            }
          };
          for (var _i9 = 0, _Object$entries3 = Object.entries(keyMap); _i9 < _Object$entries3.length; _i9++) {
            _loop4();
          }
        };
        var needFocusDebugStyles = true;
        var addFocusDebug = (prevFocusPath, newFocusPath) => {
          if (needFocusDebugStyles) {
            var style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML = `
      [data-focus="3"] {
        border: 2px solid rgba(255, 33, 33, 0.2);
        border-radius: 5px;
        transition: border-color 0.3s ease;
      }

      [data-focus="2"] {
        border: 2px solid rgba(255, 33, 33, 0.4);
        border-radius: 5px;
        transition: border-color 0.3s ease;
      }

      [data-focus="1"] {
        border: 4px solid rgba(255, 33, 33, 0.9);
        border-radius: 5px;
        transition: border-color 0.5s ease;
      }
    `;
            document.head.appendChild(style);
            needFocusDebugStyles = false;
          }
          prevFocusPath.forEach(elm => {
            elm.data = _objectSpread(_objectSpread({}, elm.data), {}, {
              focus: undefined
            });
          });
          newFocusPath.forEach((elm, i) => {
            elm.data = _objectSpread(_objectSpread({}, elm.data), {}, {
              focus: i + 1
            });
          });
        };
        var activeElement$1;
        var setActiveElement$1 = elm => {
          updateFocusPath(elm, activeElement$1);
          activeElement$1 = elm;
          Config.setActiveElement(elm);
        };
        var focusPath$1 = [];
        var updateFocusPath = (currentFocusedElm, prevFocusedElm) => {
          var current = currentFocusedElm;
          var fp = [];
          while (current) {
            if (!current.states.has(Config.focusStateKey) || current === currentFocusedElm) {
              var _current$onFocus, _current$onFocusChang;
              current.states.add(Config.focusStateKey);
              (_current$onFocus = current.onFocus) === null || _current$onFocus === void 0 || _current$onFocus.call(current, currentFocusedElm, prevFocusedElm);
              (_current$onFocusChang = current.onFocusChanged) === null || _current$onFocusChang === void 0 || _current$onFocusChang.call(current, true, currentFocusedElm, prevFocusedElm);
            }
            fp.push(current);
            current = current.parent;
          }
          focusPath$1.forEach(elm => {
            if (!fp.includes(elm)) {
              var _elm$onBlur, _elm$onFocusChanged;
              elm.states.remove(Config.focusStateKey);
              (_elm$onBlur = elm.onBlur) === null || _elm$onBlur === void 0 || _elm$onBlur.call(elm, currentFocusedElm, prevFocusedElm);
              (_elm$onFocusChanged = elm.onFocusChanged) === null || _elm$onFocusChanged === void 0 || _elm$onFocusChanged.call(elm, false, currentFocusedElm, prevFocusedElm);
            }
          });
          if (Config.focusDebug) {
            addFocusDebug(focusPath$1, fp);
          }
          focusPath$1 = fp;
          return fp;
        };
        var propagateKeyPress = function propagateKeyPress(e, mappedEvent) {
          var isHold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var isUp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var finalFocusElm;
          var numItems = focusPath$1.length;
          for (var i = numItems - 1; i >= 0; i--) {
            var elm = focusPath$1[i];
            var captureKey = `capture${e.key}`;
            var captureHandler = elm[captureKey] || elm.captureKey;
            if (isFunction(captureHandler)) {
              if (captureHandler.call(elm, e, elm, finalFocusElm) === true) {
                return true;
              }
            }
          }
          for (var _i10 = 0; _i10 < numItems; _i10++) {
            var _elm = focusPath$1[_i10];
            if (!finalFocusElm) finalFocusElm = _elm;
            if (mappedEvent) {
              var eventHandler = isUp ? _elm[`on${mappedEvent}Release`] : _elm[`on${mappedEvent}`];
              if (isFunction(eventHandler)) {
                if (eventHandler.call(_elm, e, _elm, finalFocusElm) === true) {
                  return true;
                }
              }
            }
            if (!isUp) {
              var fallbackHandler = isHold ? _elm.onKeyHold : _elm.onKeyPress;
              if (isFunction(fallbackHandler)) {
                if (fallbackHandler.call(_elm, e, mappedEvent, _elm, finalFocusElm) === true) {
                  return true;
                }
              }
            }
          }
          return false;
        };
        var DEFAULT_KEY_HOLD_THRESHOLD = 500;
        var keyHoldTimeouts = {};
        var handleKeyEvents = (delay, keydown, keyup) => {
          if (keydown) {
            var _key20 = keydown.key || keydown.keyCode;
            var mappedKeyHoldEvent = keyHoldMapEntries[keydown.key] || keyHoldMapEntries[keydown.keyCode];
            var mappedKeyEvent = keyMapEntries[keydown.key] || keyMapEntries[keydown.keyCode];
            if (mappedKeyHoldEvent) {
              if (!keyHoldTimeouts[_key20]) {
                keyHoldTimeouts[_key20] = window.setTimeout(() => {
                  keyHoldTimeouts[_key20] = true;
                  propagateKeyPress(keydown, mappedKeyHoldEvent, true);
                }, delay);
              }
              return;
            }
            propagateKeyPress(keydown, mappedKeyEvent, false);
          } else if (keyup) {
            var _key21 = keyup.key || keyup.keyCode;
            var _mappedKeyEvent = keyMapEntries[keyup.key] || keyMapEntries[keyup.keyCode];
            if (keyHoldTimeouts[_key21] === true) {
              delete keyHoldTimeouts[_key21];
            } else if (keyHoldTimeouts[_key21]) {
              clearTimeout(keyHoldTimeouts[_key21]);
              delete keyHoldTimeouts[_key21];
              propagateKeyPress(keyup, _mappedKeyEvent, false);
            }
            propagateKeyPress(keyup, _mappedKeyEvent, false, true);
          }
        };
        var useFocusManager$1 = function useFocusManager$1() {
          var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            userKeyMap = _ref42.userKeyMap,
            keyHoldOptions = _ref42.keyHoldOptions,
            _ref42$ownerContext = _ref42.ownerContext,
            ownerContext = _ref42$ownerContext === void 0 ? cb => {
              cb();
            } : _ref42$ownerContext;
          if (userKeyMap) {
            flattenKeyMap(userKeyMap, keyMapEntries);
          }
          if (keyHoldOptions !== null && keyHoldOptions !== void 0 && keyHoldOptions.userKeyHoldMap) {
            flattenKeyMap(keyHoldOptions.userKeyHoldMap, keyHoldMapEntries);
          }
          var delay = (keyHoldOptions === null || keyHoldOptions === void 0 ? void 0 : keyHoldOptions.holdThreshold) || DEFAULT_KEY_HOLD_THRESHOLD;
          var runKeyEvent = handleKeyEvents.bind(null, delay);
          var keyPressHandler = event => ownerContext(() => {
            runKeyEvent(event, undefined);
          });
          var keyUpHandler = event => ownerContext(() => {
            runKeyEvent(undefined, event);
          });
          document.addEventListener("keyup", keyUpHandler);
          document.addEventListener("keydown", keyPressHandler);
          return {
            cleanup: () => {
              document.removeEventListener("keydown", keyPressHandler);
              document.removeEventListener("keyup", keyUpHandler);
              for (var _i11 = 0, _Object$entries4 = Object.entries(keyHoldTimeouts); _i11 < _Object$entries4.length; _i11++) {
                var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i11], 2),
                  _ = _Object$entries4$_i[0],
                  timeout = _Object$entries4$_i[1];
                if (timeout && timeout !== true) clearTimeout(timeout);
              }
            },
            focusPath: () => focusPath$1
          };
        };
        var layoutQueue = /* @__PURE__ */new Set();
        function runLayout() {
          var queue = [...layoutQueue];
          layoutQueue.clear();
          for (var i = queue.length - 1; i >= 0; i--) {
            var node = queue[i];
            node.updateLayout();
          }
        }
        function convertEffectsToShader(_node, v) {
          var border = v.border,
            shadow = v.shadow,
            rounded = v.rounded,
            radius = v.radius;
          var props = {};
          var parseAndAssignProps = (prefix, obj) => {
            Object.entries(obj).forEach(_ref43 => {
              var _ref44 = _slicedToArray(_ref43, 2),
                key = _ref44[0],
                value = _ref44[1];
              props[`${prefix}-${key}`] = value;
            });
          };
          if (border) parseAndAssignProps("border", border);
          if (shadow) parseAndAssignProps("shadow", shadow);
          if (rounded) Object.assign(props, rounded, radius);
          var typeParts = ["rounded"];
          if (border) typeParts.push("WithBorder");
          if (shadow) typeParts.push("WithShadow");
          return renderer$2.createShader(typeParts.join(""), props);
        }
        function borderAccessor() {
          var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return {
            set(value) {
              if (isNumber(value)) {
                value = {
                  width: value,
                  color: 255
                };
              }
              this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects || {}), {
                [`border${direction}`]: value
              }) : {
                [`border${direction}`]: value
              };
            },
            get() {
              var _this$effects;
              return (_this$effects = this.effects) === null || _this$effects === void 0 ? void 0 : _this$effects[`border${direction}`];
            }
          };
        }
        var LightningRendererNumberProps = ["alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "height", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "scaleX", "scaleY", "width", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked"];
        var LightningRendererNonAnimatingProps = ["absX", "absY", "autosize", "clipping", "contain", "data", "fontFamily", "fontStretch", "fontStyle", "fontWeight", "imageType", "letterSpacing", "maxLines", "offsetY", "overflowSuffix", "preventCleanup", "rtt", "scrollable", "scrollY", "srcHeight", "srcWidth", "srcX", "srcY", "strictBounds", "text", "textAlign", "textBaseline", "textOverflow", "texture", "textureOptions", "verticalAlign", "wordWrap"];
        class ElementNode extends Object {
          constructor(name) {
            super();
            this._type = name === "text" ? NodeType.TextNode : NodeType.Element;
            this.rendered = false;
            this.lng = {};
            this.children = [];
          }
          get effects() {
            return this._effects;
          }
          set effects(v) {
            this._effects = v;
            if (this.rendered) {
              this.lng.shader = convertEffectsToShader(this, v);
            }
          }
          set id(id) {
            var _Config$rendererOptio;
            this._id = id;
            if ((_Config$rendererOptio = Config.rendererOptions) !== null && _Config$rendererOptio !== void 0 && _Config$rendererOptio.inspector) {
              this.data = _objectSpread(_objectSpread({}, this.data), {}, {
                testId: id
              });
            }
          }
          get id() {
            return this._id;
          }
          get parent() {
            return this._parent;
          }
          set parent(p) {
            this._parent = p;
            if (this.rendered) {
              var _p$lng;
              this.lng.parent = (_p$lng = p === null || p === void 0 ? void 0 : p.lng) !== null && _p$lng !== void 0 ? _p$lng : null;
            }
          }
          insertChild(node, beforeNode) {
            node.parent = this;
            if (beforeNode) {
              this.removeChild(node);
              var index = this.children.indexOf(beforeNode);
              if (index >= 0) {
                this.children.splice(index, 0, node);
                return;
              }
            }
            this.children.push(node);
          }
          removeChild(node) {
            var nodeIndexToRemove = this.children.indexOf(node);
            if (nodeIndexToRemove >= 0) {
              this.children.splice(nodeIndexToRemove, 1);
            }
          }
          get selectedNode() {
            var selectedIndex = this.selected || 0;
            for (var i = selectedIndex; i < this.children.length; i++) {
              var element = this.children[i];
              if (isElementNode(element)) {
                this.selected = i;
                return element;
              }
            }
            return undefined;
          }
          set shader(shaderProps) {
            var shProps = shaderProps;
            if (isArray(shaderProps)) {
              shProps = renderer$2.createShader(...shaderProps);
            }
            this.lng.shader = shProps;
          }
          _sendToLightningAnimatable(name, value) {
            var _this15 = this;
            if (this.transition && this.rendered && Config.animationsEnabled && (this.transition === true || this.transition[name])) {
              var animationSettings = this.transition === true || this.transition[name] === true ? undefined : this.transition[name];
              var animationController = this.animate({
                [name]: value
              }, animationSettings);
              if (this.onAnimation) {
                var animationEvents = Object.keys(this.onAnimation);
                var _loop5 = function _loop5() {
                  var event = _animationEvents[_i12];
                  var handler = _this15.onAnimation[event];
                  animationController.on(event, (controller, props) => {
                    handler.call(_this15, controller, name, value, props);
                  });
                };
                for (var _i12 = 0, _animationEvents = animationEvents; _i12 < _animationEvents.length; _i12++) {
                  _loop5();
                }
              }
              return animationController.start();
            }
            this.lng[name] = value;
          }
          animate(props, animationSettings) {
            assertTruthy(this.rendered);
            return this.lng.animate(props, animationSettings || this.animationSettings || {});
          }
          chain(props, animationSettings) {
            if (this._animationRunning) {
              this._animationQueue = [];
              this._animationRunning = false;
            }
            if (animationSettings) {
              this._animationQueueSettings = animationSettings;
            } else if (!this._animationQueueSettings) {
              this._animationQueueSettings = animationSettings || this.animationSettings;
            }
            animationSettings = animationSettings || this._animationQueueSettings;
            this._animationQueue = this._animationQueue || [];
            this._animationQueue.push({
              props,
              animationSettings
            });
            return this;
          }
          start() {
            var _this16 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var animation;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    animation = _this16._animationQueue.shift();
                  case 1:
                    if (!animation) {
                      _context17.next = 8;
                      break;
                    }
                    _this16._animationRunning = true;
                    _context17.next = 5;
                    return _this16.animate(animation.props, animation.animationSettings).start().waitUntilStopped();
                  case 5:
                    animation = _this16._animationQueue.shift();
                    _context17.next = 1;
                    break;
                  case 8:
                    _this16._animationRunning = false;
                    _this16._animationQueueSettings = undefined;
                  case 10:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17);
            }))();
          }
          emit(event) {
            var current = this.parent;
            var capitalizedEvent = `on${event.charAt(0).toUpperCase()}${event.slice(1)}`;
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key22 = 1; _key22 < _len; _key22++) {
              args[_key22 - 1] = arguments[_key22];
            }
            while (current) {
              var handler = current[capitalizedEvent];
              if (isFunction(handler)) {
                if (handler.call(current, this, ...args) === true) {
                  return true;
                }
              }
              current = current.parent;
            }
            return false;
          }
          setFocus() {
            if (this.rendered) {
              if (this.forwardFocus !== undefined) {
                if (isFunc(this.forwardFocus)) {
                  if (this.forwardFocus.call(this, this) !== false) {
                    return;
                  }
                } else {
                  var focusedIndex = typeof this.forwardFocus === "number" ? this.forwardFocus : null;
                  var nodes = this.children;
                  if (focusedIndex !== null && focusedIndex < nodes.length) {
                    var child = nodes[focusedIndex];
                    isElementNode(child) && child.setFocus();
                    return;
                  }
                }
              }
              queueMicrotask(() => setActiveElement$1(this));
            } else {
              this._autofocus = true;
            }
          }
          _layoutOnLoad() {
            this.lng.on("loaded", () => {
              this.parent.updateLayout();
            });
          }
          getText() {
            var result = "";
            for (var i = 0; i < this.children.length; i++) {
              result += this.children[i].text;
            }
            return result;
          }
          destroy() {
            if (this.onDestroy) {
              var destroyPromise = this.onDestroy(this);
              if (destroyPromise instanceof Promise) {
                destroyPromise.then(() => this._destroy());
              } else {
                this._destroy();
              }
            } else {
              this._destroy();
            }
          }
          _destroy() {
            if (this._queueDelete && isINode(this.lng)) {
              var _this$parent5;
              this.lng.destroy();
              if ((_this$parent5 = this.parent) !== null && _this$parent5 !== void 0 && _this$parent5.requiresLayout()) {
                this.parent.updateLayout();
              }
            }
          }
          set style(style) {
            if (!style) {
              return;
            }
            this._style = style;
            for (var _key23 in this._style) {
              if (this[_key23] === undefined) {
                this[_key23] = this._style[_key23];
              }
            }
          }
          get style() {
            return this._style;
          }
          get hasChildren() {
            return this.children.length > 0;
          }
          set src(src) {
            if (typeof src === "string") {
              this.lng.src = src;
              if (!this.color && this.rendered) {
                this.color = 4294967295;
              }
            } else {
              this.color = 0;
            }
          }
          get src() {
            return this.lng.src;
          }
          getChildById(id) {
            return this.children.find(c => c.id === id);
          }
          searchChildrenById(id) {
            for (var i = 0; i < this.children.length; i++) {
              var child = this.children[i];
              if (isElementNode(child)) {
                if (child.id === id) {
                  return child;
                }
                var found = child.searchChildrenById(id);
                if (found) {
                  return found;
                }
              }
            }
          }
          set states(states) {
            this._states = this._states ? this._states.merge(states) : new States(this._stateChanged.bind(this), states);
            if (this.rendered) {
              this._stateChanged();
            }
          }
          get states() {
            this._states = this._states || new States(this._stateChanged.bind(this));
            return this._states;
          }
          get animationSettings() {
            return this._animationSettings || Config.animationSettings;
          }
          set animationSettings(animationSettings) {
            this._animationSettings = animationSettings;
          }
          set hidden(val) {
            this.alpha = val ? 0 : 1;
          }
          get hidden() {
            return this.alpha === 0;
          }
          /**
           * Sets the autofocus state of the element.
           * When set to a truthy value, the element will automatically gain focus.
           * You can also set it to a signal to recalculate
           *
           * @param val - A value to determine if the element should autofocus.
           *              A truthy value enables autofocus, otherwise disables it.
           */
          set autofocus(val) {
            this._autofocus = val;
            val && this.setFocus();
          }
          get autofocus() {
            return this._autofocus;
          }
          requiresLayout() {
            return this.display === "flex" || this.onLayout;
          }
          set updateLayoutOn(v) {
            this.updateLayout();
          }
          get updateLayoutOn() {
            return null;
          }
          updateLayout() {
            if (this.hasChildren) {
              if (this.display === "flex") {
                if (calculateFlex(this)) {
                  var _this$parent6;
                  (_this$parent6 = this.parent) === null || _this$parent6 === void 0 || _this$parent6.updateLayout();
                }
              }
              if (isFunc(this.onLayout) && this.onLayout.call(this, this)) {
                var _this$parent7;
                (_this$parent7 = this.parent) === null || _this$parent7 === void 0 || _this$parent7.updateLayout();
              }
            }
          }
          _stateChanged() {
            log("State Changed: ", this, this.states);
            if (this.forwardStates) {
              var states2 = this.states.slice();
              this.children.forEach(c => {
                c.states = states2;
              });
            }
            var states = this.states;
            if (this._undoStyles || keyExists(this, states)) {
              var stylesToUndo;
              if (this._undoStyles && this._undoStyles.length) {
                stylesToUndo = {};
                this._undoStyles.forEach(styleKey => {
                  stylesToUndo[styleKey] = this.style[styleKey];
                });
              }
              var numStates = states.length;
              if (numStates === 0) {
                Object.assign(this, stylesToUndo);
                this._undoStyles = [];
                return;
              }
              var newStyles;
              if (numStates === 1) {
                newStyles = this[states[0]];
                newStyles = stylesToUndo ? _objectSpread(_objectSpread({}, stylesToUndo), newStyles) : newStyles;
              } else {
                newStyles = states.reduce((acc, state) => {
                  var styles = this[state];
                  return styles ? _objectSpread(_objectSpread({}, acc), styles) : acc;
                }, stylesToUndo || {});
              }
              if (newStyles) {
                this._undoStyles = Object.keys(newStyles);
                if (newStyles.transition !== undefined) {
                  this.transition = newStyles.transition;
                }
                Object.assign(this, newStyles);
              } else {
                this._undoStyles = [];
              }
            }
          }
          render(topNode) {
            var _node$lng;
            var node = this;
            var parent = this.parent;
            if (!parent) {
              console.warn("Parent not set - no node created for: ", this);
              return;
            }
            if (!parent.rendered) {
              console.warn("Parent not rendered yet: ", this);
              return;
            }
            if (parent.requiresLayout()) {
              layoutQueue.add(parent);
            }
            if (this.rendered) {
              return;
            }
            if (this._states) {
              this._stateChanged();
            }
            var props = node.lng;
            props.x = props.x || 0;
            props.y = props.y || 0;
            props.parent = parent.lng;
            if (this.right || this.right === 0) {
              props.x = (parent.width || 0) - this.right;
              props.mountX = 1;
            }
            if (this.bottom || this.bottom === 0) {
              props.y = (parent.height || 0) - this.bottom;
              props.mountY = 1;
            }
            if (this.center) {
              this.centerX = this.centerY = true;
            }
            if (this.centerX) {
              props.x += (parent.width || 0) / 2;
              props.mountX = 0.5;
            }
            if (this.centerY) {
              props.y += (parent.height || 0) / 2;
              props.mountY = 0.5;
            }
            if (isElementText(node)) {
              var textProps = props;
              if (Config.fontSettings) {
                for (var _key24 in Config.fontSettings) {
                  if (textProps[_key24] === undefined) {
                    textProps[_key24] = Config.fontSettings[_key24];
                  }
                }
              }
              textProps.text = textProps.text || node.getText();
              if (textProps.textAlign && !textProps.contain) {
                console.warn("Text align requires contain: ", node.getText());
              }
              if (textProps.contain) {
                if (!textProps.width) {
                  textProps.width = (parent.width || 0) - textProps.x - (textProps.marginRight || 0);
                }
                if (textProps.contain === "both" && !textProps.height && !textProps.maxLines) {
                  textProps.height = (parent.height || 0) - textProps.y - (textProps.marginBottom || 0);
                } else if (textProps.maxLines === 1) {
                  textProps.height = textProps.height || textProps.lineHeight || textProps.fontSize;
                }
              }
              if (node._effects) {
                props.shader = convertEffectsToShader(node, node._effects);
              }
              node.lng = renderer$2.createTextNode(props);
              if (parent.requiresLayout()) {
                if (!props.width || !props.height) {
                  node._layoutOnLoad();
                }
              }
            } else {
              if (!props.texture) {
                if (isNaN(props.width)) {
                  props.width = (parent.width || 0) - props.x;
                  node._calcWidth = true;
                }
                if (isNaN(props.height)) {
                  props.height = (parent.height || 0) - props.y;
                  node._calcHeight = true;
                }
                if (props.rtt && !props.color) {
                  props.color = 4294967295;
                }
                if (!props.color && !props.src) {
                  props.color = 0;
                }
              }
              if (node._effects) {
                props.shader = convertEffectsToShader(node, node._effects);
              }
              node.lng = renderer$2.createNode(props);
            }
            node.rendered = true;
            if (node.autosize && parent.requiresLayout()) {
              node._layoutOnLoad();
            }
            isFunc(this.onCreate) && this.onCreate.call(this, node);
            if (node.onEvent) {
              var _loop6 = function _loop6() {
                var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i13], 2),
                  name = _Object$entries5$_i[0],
                  handler = _Object$entries5$_i[1];
                node.lng.on(name, (_inode, data) => handler.call(node, node, data));
              };
              for (var _i13 = 0, _Object$entries5 = Object.entries(node.onEvent); _i13 < _Object$entries5.length; _i13++) {
                _loop6();
              }
            }
            if ((_node$lng = node.lng) !== null && _node$lng !== void 0 && _node$lng.div) {
              node.lng.div.element = node;
            }
            if (node._type === NodeType.Element) {
              var numChildren = node.children.length;
              for (var i = 0; i < numChildren; i++) {
                var c = node.children[i];
                if (isElementNode(c)) {
                  c.render();
                }
              }
            }
            if (topNode) {
              runLayout();
            }
            node._autofocus && node.setFocus();
          }
        }
        exports("E", ElementNode);
        var _loop7 = function _loop7() {
          var key = _LightningRendererNum[_i14];
          Object.defineProperty(ElementNode.prototype, key, {
            get() {
              return this.lng[key];
            },
            set(v) {
              this._sendToLightningAnimatable(key, v);
            }
          });
        };
        for (var _i14 = 0, _LightningRendererNum = LightningRendererNumberProps; _i14 < _LightningRendererNum.length; _i14++) {
          _loop7();
        }
        var _loop8 = function _loop8() {
          var key = _LightningRendererNon[_i15];
          Object.defineProperty(ElementNode.prototype, key, {
            get() {
              return this.lng[key];
            },
            set(v) {
              this.lng[key] = v;
            }
          });
        };
        for (var _i15 = 0, _LightningRendererNon = LightningRendererNonAnimatingProps; _i15 < _LightningRendererNon.length; _i15++) {
          _loop8();
        }
        function createEffectAccessor(key) {
          return {
            set(value) {
              this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects), {}, {
                [key]: value
              }) : {
                [key]: value
              };
            },
            get() {
              var _this$effects2;
              return (_this$effects2 = this.effects) === null || _this$effects2 === void 0 ? void 0 : _this$effects2[key];
            }
          };
        }
        Object.defineProperties(ElementNode.prototype, {
          border: borderAccessor(),
          borderLeft: borderAccessor("Left"),
          borderRight: borderAccessor("Right"),
          borderTop: borderAccessor("Top"),
          borderBottom: borderAccessor("Bottom"),
          linearGradient: createEffectAccessor("linearGradient"),
          radialGradient: createEffectAccessor("radialGradient"),
          borderRadius: {
            set(radius) {
              this.effects = this.effects ? _objectSpread(_objectSpread({}, this.effects), {}, {
                rounded: {
                  radius
                }
              }) : {
                rounded: {
                  radius
                }
              };
            },
            get() {
              var _this$effects3;
              return (_this$effects3 = this.effects) === null || _this$effects3 === void 0 || (_this$effects3 = _this$effects3.rounded) === null || _this$effects3 === void 0 ? void 0 : _this$effects3.radius;
            }
          }
        });
        var sharedConfig = {
          context: undefined,
          registry: undefined,
          effects: undefined,
          done: false,
          getContextId() {
            return getContextId(this.context.count);
          },
          getNextContextId() {
            return getContextId(this.context.count++);
          }
        };
        function getContextId(count) {
          var num = String(count),
            len = num.length - 1;
          return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
        }
        function setHydrateContext(context) {
          sharedConfig.context = context;
        }
        var equalFn = (a, b) => a === b;
        var $PROXY = Symbol("solid-proxy");
        var SUPPORTS_PROXY = typeof Proxy === "function";
        var $TRACK = exports("$", Symbol("solid-track"));
        var signalOptions = {
          equals: equalFn
        };
        var runEffects = runQueue;
        var STALE = 1;
        var PENDING = 2;
        var UNOWNED = {
          owned: null,
          cleanups: null,
          context: null,
          owner: null
        };
        var NO_INIT = {};
        var Owner = null;
        var Transition = null;
        var ExternalSourceConfig = null;
        var Listener = null;
        var Updates = null;
        var Effects = null;
        var ExecCount = 0;
        function createRoot(fn, detachedOwner) {
          var listener = Listener,
            owner = Owner,
            unowned = fn.length === 0,
            current = owner,
            root = unowned ? UNOWNED : {
              owned: null,
              cleanups: null,
              context: current ? current.context : null,
              owner: current
            },
            updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
          Owner = root;
          Listener = null;
          try {
            return runUpdates(updateFn, true);
          } finally {
            Listener = listener;
            Owner = owner;
          }
        }
        function createSignal(value, options) {
          options = options ? Object.assign({}, signalOptions, options) : signalOptions;
          var s = {
            value,
            observers: null,
            observerSlots: null,
            comparator: options.equals || undefined
          };
          var setter = value => {
            if (typeof value === "function") {
              value = value(s.value);
            }
            return writeSignal(s, value);
          };
          return [readSignal.bind(s), setter];
        }
        function createComputed(fn, value, options) {
          var c = createComputation(fn, value, true, STALE);
          updateComputation(c);
        }
        function createRenderEffect(fn, value, options) {
          var c = createComputation(fn, value, false, STALE);
          updateComputation(c);
        }
        function createEffect(fn, value, options) {
          runEffects = runUserEffects;
          var c = createComputation(fn, value, false, STALE);
          c.user = true;
          Effects ? Effects.push(c) : updateComputation(c);
        }
        function createMemo(fn, value, options) {
          options = options ? Object.assign({}, signalOptions, options) : signalOptions;
          var c = createComputation(fn, value, true, 0);
          c.observers = null;
          c.observerSlots = null;
          c.comparator = options.equals || undefined;
          updateComputation(c);
          return readSignal.bind(c);
        }
        function isPromise(v) {
          return v && _typeof(v) === "object" && "then" in v;
        }
        function createResource(pSource, pFetcher, pOptions) {
          var source;
          var fetcher;
          var options;
          if (typeof pFetcher === "function") {
            source = pSource;
            fetcher = pFetcher;
            options = {};
          } else {
            source = true;
            fetcher = pSource;
            options = pFetcher || {};
          }
          var pr = null,
            initP = NO_INIT,
            id = null,
            scheduled = false,
            resolved = "initialValue" in options,
            dynamic = typeof source === "function" && createMemo(source);
          var contexts = new Set(),
            _ref45 = (options.storage || createSignal)(options.initialValue),
            _ref46 = _slicedToArray(_ref45, 2),
            value = _ref46[0],
            setValue = _ref46[1],
            _createSignal = createSignal(undefined),
            _createSignal2 = _slicedToArray(_createSignal, 2),
            error = _createSignal2[0],
            setError = _createSignal2[1],
            _createSignal3 = createSignal(undefined, {
              equals: false
            }),
            _createSignal4 = _slicedToArray(_createSignal3, 2),
            track = _createSignal4[0],
            trigger = _createSignal4[1],
            _createSignal5 = createSignal(resolved ? "ready" : "unresolved"),
            _createSignal6 = _slicedToArray(_createSignal5, 2),
            state = _createSignal6[0],
            setState = _createSignal6[1];
          if (sharedConfig.context) {
            id = sharedConfig.getNextContextId();
            if (options.ssrLoadFrom === "initial") initP = options.initialValue;else if (sharedConfig.load && sharedConfig.has(id)) initP = sharedConfig.load(id);
          }
          function loadEnd(p, v, error, key) {
            if (pr === p) {
              pr = null;
              key !== undefined && (resolved = true);
              if ((p === initP || v === initP) && options.onHydrated) queueMicrotask(() => options.onHydrated(key, {
                value: v
              }));
              initP = NO_INIT;
              completeLoad(v, error);
            }
            return v;
          }
          function completeLoad(v, err) {
            runUpdates(() => {
              if (err === undefined) setValue(() => v);
              setState(err !== undefined ? "errored" : resolved ? "ready" : "unresolved");
              setError(err);
              var _iterator15 = _createForOfIteratorHelper(contexts.keys()),
                _step15;
              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var c = _step15.value;
                  c.decrement();
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
              contexts.clear();
            }, false);
          }
          function read() {
            var c = SuspenseContext,
              v = value(),
              err = error();
            if (err !== undefined && !pr) throw err;
            if (Listener && !Listener.user && c) ;
            return v;
          }
          function load() {
            var refetching = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (refetching !== false && scheduled) return;
            scheduled = false;
            var lookup = dynamic ? dynamic() : source;
            if (lookup == null || lookup === false) {
              loadEnd(pr, untrack(value));
              return;
            }
            var p = initP !== NO_INIT ? initP : untrack(() => fetcher(lookup, {
              value: value(),
              refetching
            }));
            if (!isPromise(p)) {
              loadEnd(pr, p, undefined, lookup);
              return p;
            }
            pr = p;
            if ("value" in p) {
              if (p.status === "success") loadEnd(pr, p.value, undefined, lookup);else loadEnd(pr, undefined, castError(p.value), lookup);
              return p;
            }
            scheduled = true;
            queueMicrotask(() => scheduled = false);
            runUpdates(() => {
              setState(resolved ? "refreshing" : "pending");
              trigger();
            }, false);
            return p.then(v => loadEnd(p, v, undefined, lookup), e => loadEnd(p, undefined, castError(e), lookup));
          }
          Object.defineProperties(read, {
            state: {
              get: () => state()
            },
            error: {
              get: () => error()
            },
            loading: {
              get() {
                var s = state();
                return s === "pending" || s === "refreshing";
              }
            },
            latest: {
              get() {
                if (!resolved) return read();
                var err = error();
                if (err && !pr) throw err;
                return value();
              }
            }
          });
          if (dynamic) createComputed(() => load(false));else load(false);
          return [read, {
            refetch: load,
            mutate: setValue
          }];
        }
        function createSelector(source) {
          var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : equalFn;
          var options = arguments.length > 2 ? arguments[2] : undefined;
          var subs = new Map();
          var node = createComputation(p => {
            var v = source();
            var _iterator16 = _createForOfIteratorHelper(subs.entries()),
              _step16;
            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _step16$value = _slicedToArray(_step16.value, 2),
                  _key25 = _step16$value[0],
                  val = _step16$value[1];
                if (fn(_key25, v) !== fn(_key25, p)) {
                  var _iterator17 = _createForOfIteratorHelper(val.values()),
                    _step17;
                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                      var c = _step17.value;
                      c.state = STALE;
                      if (c.pure) Updates.push(c);else Effects.push(c);
                    }
                  } catch (err) {
                    _iterator17.e(err);
                  } finally {
                    _iterator17.f();
                  }
                }
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
            return v;
          }, undefined, true, STALE);
          updateComputation(node);
          return key => {
            var listener = Listener;
            if (listener) {
              var l;
              if (l = subs.get(key)) l.add(listener);else subs.set(key, l = new Set([listener]));
              onCleanup(() => {
                l.delete(listener);
                !l.size && subs.delete(key);
              });
            }
            return fn(key, node.value);
          };
        }
        function batch(fn) {
          return runUpdates(fn, false);
        }
        function untrack(fn) {
          if (Listener === null) return fn();
          var listener = Listener;
          Listener = null;
          try {
            if (ExternalSourceConfig) ;
            return fn();
          } finally {
            Listener = listener;
          }
        }
        function on(deps, fn, options) {
          var isArray = Array.isArray(deps);
          var prevInput;
          var defer = options && options.defer;
          return prevValue => {
            var input;
            if (isArray) {
              input = Array(deps.length);
              for (var i = 0; i < deps.length; i++) input[i] = deps[i]();
            } else input = deps();
            if (defer) {
              defer = false;
              return prevValue;
            }
            var result = untrack(() => fn(input, prevInput, prevValue));
            prevInput = input;
            return result;
          };
        }
        function onMount(fn) {
          createEffect(() => untrack(fn));
        }
        function onCleanup(fn) {
          if (Owner === null) ;else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
          return fn;
        }
        function getOwner() {
          return Owner;
        }
        function runWithOwner(o, fn) {
          var prev = Owner;
          var prevListener = Listener;
          Owner = o;
          Listener = null;
          try {
            return runUpdates(fn, true);
          } catch (err) {
            handleError(err);
          } finally {
            Owner = prev;
            Listener = prevListener;
          }
        }
        function startTransition(fn) {
          var l = Listener;
          var o = Owner;
          return Promise.resolve().then(() => {
            Listener = l;
            Owner = o;
            var t;
            runUpdates(fn, false);
            Listener = Owner = null;
            return t ? t.done : undefined;
          });
        }
        function createContext(defaultValue, options) {
          var id = Symbol("context");
          return {
            id,
            Provider: createProvider(id),
            defaultValue
          };
        }
        function useContext(context) {
          var value;
          return Owner && Owner.context && (value = Owner.context[context.id]) !== undefined ? value : context.defaultValue;
        }
        function children(fn) {
          var children = createMemo(fn);
          var memo = createMemo(() => resolveChildren(children()));
          memo.toArray = () => {
            var c = memo();
            return Array.isArray(c) ? c : c != null ? [c] : [];
          };
          return memo;
        }
        var SuspenseContext;
        function readSignal() {
          if (this.sources && this.state) {
            if (this.state === STALE) updateComputation(this);else {
              var updates = Updates;
              Updates = null;
              runUpdates(() => lookUpstream(this), false);
              Updates = updates;
            }
          }
          if (Listener) {
            var sSlot = this.observers ? this.observers.length : 0;
            if (!Listener.sources) {
              Listener.sources = [this];
              Listener.sourceSlots = [sSlot];
            } else {
              Listener.sources.push(this);
              Listener.sourceSlots.push(sSlot);
            }
            if (!this.observers) {
              this.observers = [Listener];
              this.observerSlots = [Listener.sources.length - 1];
            } else {
              this.observers.push(Listener);
              this.observerSlots.push(Listener.sources.length - 1);
            }
          }
          return this.value;
        }
        function writeSignal(node, value, isComp) {
          var current = node.value;
          if (!node.comparator || !node.comparator(current, value)) {
            node.value = value;
            if (node.observers && node.observers.length) {
              runUpdates(() => {
                for (var i = 0; i < node.observers.length; i += 1) {
                  var o = node.observers[i];
                  var TransitionRunning = Transition && Transition.running;
                  if (TransitionRunning && Transition.disposed.has(o)) ;
                  if (TransitionRunning ? !o.tState : !o.state) {
                    if (o.pure) Updates.push(o);else Effects.push(o);
                    if (o.observers) markDownstream(o);
                  }
                  if (!TransitionRunning) o.state = STALE;
                }
                if (Updates.length > 10e5) {
                  Updates = [];
                  if (false) ;
                  throw new Error();
                }
              }, false);
            }
          }
          return value;
        }
        function updateComputation(node) {
          if (!node.fn) return;
          cleanNode(node);
          var time = ExecCount;
          runComputation(node, node.value, time);
        }
        function runComputation(node, value, time) {
          var nextValue;
          var owner = Owner,
            listener = Listener;
          Listener = Owner = node;
          try {
            nextValue = node.fn(value);
          } catch (err) {
            if (node.pure) {
              {
                node.state = STALE;
                node.owned && node.owned.forEach(cleanNode);
                node.owned = null;
              }
            }
            node.updatedAt = time + 1;
            return handleError(err);
          } finally {
            Listener = listener;
            Owner = owner;
          }
          if (!node.updatedAt || node.updatedAt <= time) {
            if (node.updatedAt != null && "observers" in node) {
              writeSignal(node, nextValue);
            } else node.value = nextValue;
            node.updatedAt = time;
          }
        }
        function createComputation(fn, init, pure) {
          var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : STALE;
          var options = arguments.length > 4 ? arguments[4] : undefined;
          var c = {
            fn,
            state: state,
            updatedAt: null,
            owned: null,
            sources: null,
            sourceSlots: null,
            cleanups: null,
            value: init,
            owner: Owner,
            context: Owner ? Owner.context : null,
            pure
          };
          if (Owner === null) ;else if (Owner !== UNOWNED) {
            {
              if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
            }
          }
          return c;
        }
        function runTop(node) {
          if (node.state === 0) return;
          if (node.state === PENDING) return lookUpstream(node);
          if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
          var ancestors = [node];
          while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
            if (node.state) ancestors.push(node);
          }
          for (var i = ancestors.length - 1; i >= 0; i--) {
            node = ancestors[i];
            if (node.state === STALE) {
              updateComputation(node);
            } else if (node.state === PENDING) {
              var updates = Updates;
              Updates = null;
              runUpdates(() => lookUpstream(node, ancestors[0]), false);
              Updates = updates;
            }
          }
        }
        function runUpdates(fn, init) {
          if (Updates) return fn();
          var wait = false;
          if (!init) Updates = [];
          if (Effects) wait = true;else Effects = [];
          ExecCount++;
          try {
            var res = fn();
            completeUpdates(wait);
            return res;
          } catch (err) {
            if (!wait) Effects = null;
            Updates = null;
            handleError(err);
          }
        }
        function completeUpdates(wait) {
          if (Updates) {
            runQueue(Updates);
            Updates = null;
          }
          if (wait) return;
          var e = Effects;
          Effects = null;
          if (e.length) runUpdates(() => runEffects(e), false);
        }
        function runQueue(queue) {
          for (var i = 0; i < queue.length; i++) runTop(queue[i]);
        }
        function runUserEffects(queue) {
          var i,
            userLength = 0;
          for (i = 0; i < queue.length; i++) {
            var e = queue[i];
            if (!e.user) runTop(e);else queue[userLength++] = e;
          }
          if (sharedConfig.context) {
            if (sharedConfig.count) {
              sharedConfig.effects || (sharedConfig.effects = []);
              sharedConfig.effects.push(...queue.slice(0, userLength));
              return;
            }
            setHydrateContext();
          }
          if (sharedConfig.effects && (sharedConfig.done || !sharedConfig.count)) {
            queue = [...sharedConfig.effects, ...queue];
            userLength += sharedConfig.effects.length;
            delete sharedConfig.effects;
          }
          for (i = 0; i < userLength; i++) runTop(queue[i]);
        }
        function lookUpstream(node, ignore) {
          node.state = 0;
          for (var i = 0; i < node.sources.length; i += 1) {
            var source = node.sources[i];
            if (source.sources) {
              var state = source.state;
              if (state === STALE) {
                if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
              } else if (state === PENDING) lookUpstream(source, ignore);
            }
          }
        }
        function markDownstream(node) {
          for (var i = 0; i < node.observers.length; i += 1) {
            var o = node.observers[i];
            if (!o.state) {
              o.state = PENDING;
              if (o.pure) Updates.push(o);else Effects.push(o);
              o.observers && markDownstream(o);
            }
          }
        }
        function cleanNode(node) {
          var i;
          if (node.sources) {
            while (node.sources.length) {
              var source = node.sources.pop(),
                index = node.sourceSlots.pop(),
                obs = source.observers;
              if (obs && obs.length) {
                var n = obs.pop(),
                  s = source.observerSlots.pop();
                if (index < obs.length) {
                  n.sourceSlots[s] = index;
                  obs[index] = n;
                  source.observerSlots[index] = s;
                }
              }
            }
          }
          if (node.tOwned) {
            for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
            delete node.tOwned;
          }
          if (node.owned) {
            for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
            node.owned = null;
          }
          if (node.cleanups) {
            for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
            node.cleanups = null;
          }
          node.state = 0;
        }
        function castError(err) {
          if (err instanceof Error) return err;
          return new Error(typeof err === "string" ? err : "Unknown error", {
            cause: err
          });
        }
        function handleError(err) {
          var owner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Owner;
          var error = castError(err);
          throw error;
        }
        function resolveChildren(children) {
          if (typeof children === "function" && !children.length) return resolveChildren(children());
          if (Array.isArray(children)) {
            var results = [];
            for (var i = 0; i < children.length; i++) {
              var result = resolveChildren(children[i]);
              Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
            }
            return results;
          }
          return children;
        }
        function createProvider(id, options) {
          return function provider(props) {
            var res;
            createRenderEffect(() => res = untrack(() => {
              Owner.context = _objectSpread(_objectSpread({}, Owner.context), {}, {
                [id]: props.value
              });
              return children(() => props.children);
            }), undefined);
            return res;
          };
        }
        var FALLBACK = Symbol("fallback");
        function dispose(d) {
          for (var i = 0; i < d.length; i++) d[i]();
        }
        function mapArray(list, mapFn) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var items = [],
            mapped = [],
            disposers = [],
            len = 0,
            indexes = mapFn.length > 1 ? [] : null;
          onCleanup(() => dispose(disposers));
          return () => {
            var newItems = list() || [],
              newLen = newItems.length,
              i,
              j;
            newItems[$TRACK];
            return untrack(() => {
              var newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
              if (newLen === 0) {
                if (len !== 0) {
                  dispose(disposers);
                  disposers = [];
                  items = [];
                  mapped = [];
                  len = 0;
                  indexes && (indexes = []);
                }
                if (options.fallback) {
                  items = [FALLBACK];
                  mapped[0] = createRoot(disposer => {
                    disposers[0] = disposer;
                    return options.fallback();
                  });
                  len = 1;
                }
              } else if (len === 0) {
                mapped = new Array(newLen);
                for (j = 0; j < newLen; j++) {
                  items[j] = newItems[j];
                  mapped[j] = createRoot(mapper);
                }
                len = newLen;
              } else {
                temp = new Array(newLen);
                tempdisposers = new Array(newLen);
                indexes && (tempIndexes = new Array(newLen));
                for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
                for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
                  temp[newEnd] = mapped[end];
                  tempdisposers[newEnd] = disposers[end];
                  indexes && (tempIndexes[newEnd] = indexes[end]);
                }
                newIndices = new Map();
                newIndicesNext = new Array(newEnd + 1);
                for (j = newEnd; j >= start; j--) {
                  item = newItems[j];
                  i = newIndices.get(item);
                  newIndicesNext[j] = i === undefined ? -1 : i;
                  newIndices.set(item, j);
                }
                for (i = start; i <= end; i++) {
                  item = items[i];
                  j = newIndices.get(item);
                  if (j !== undefined && j !== -1) {
                    temp[j] = mapped[i];
                    tempdisposers[j] = disposers[i];
                    indexes && (tempIndexes[j] = indexes[i]);
                    j = newIndicesNext[j];
                    newIndices.set(item, j);
                  } else disposers[i]();
                }
                for (j = start; j < newLen; j++) {
                  if (j in temp) {
                    mapped[j] = temp[j];
                    disposers[j] = tempdisposers[j];
                    if (indexes) {
                      indexes[j] = tempIndexes[j];
                      indexes[j](j);
                    }
                  } else mapped[j] = createRoot(mapper);
                }
                mapped = mapped.slice(0, len = newLen);
                items = newItems.slice(0);
              }
              return mapped;
            });
            function mapper(disposer) {
              disposers[j] = disposer;
              if (indexes) {
                var _createSignal7 = createSignal(j),
                  _createSignal8 = _slicedToArray(_createSignal7, 2),
                  s = _createSignal8[0],
                  set = _createSignal8[1];
                indexes[j] = set;
                return mapFn(newItems[j], s);
              }
              return mapFn(newItems[j]);
            }
          };
        }
        function indexArray(list, mapFn) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var items = [],
            mapped = [],
            disposers = [],
            signals = [],
            len = 0,
            i;
          onCleanup(() => dispose(disposers));
          return () => {
            var newItems = list() || [],
              newLen = newItems.length;
            newItems[$TRACK];
            return untrack(() => {
              if (newLen === 0) {
                if (len !== 0) {
                  dispose(disposers);
                  disposers = [];
                  items = [];
                  mapped = [];
                  len = 0;
                  signals = [];
                }
                if (options.fallback) {
                  items = [FALLBACK];
                  mapped[0] = createRoot(disposer => {
                    disposers[0] = disposer;
                    return options.fallback();
                  });
                  len = 1;
                }
                return mapped;
              }
              if (items[0] === FALLBACK) {
                disposers[0]();
                disposers = [];
                items = [];
                mapped = [];
                len = 0;
              }
              for (i = 0; i < newLen; i++) {
                if (i < items.length && items[i] !== newItems[i]) {
                  signals[i](() => newItems[i]);
                } else if (i >= items.length) {
                  mapped[i] = createRoot(mapper);
                }
              }
              for (; i < items.length; i++) {
                disposers[i]();
              }
              len = signals.length = disposers.length = newLen;
              items = newItems.slice(0);
              return mapped = mapped.slice(0, len);
            });
            function mapper(disposer) {
              disposers[i] = disposer;
              var _createSignal9 = createSignal(newItems[i]),
                _createSignal10 = _slicedToArray(_createSignal9, 2),
                s = _createSignal10[0],
                set = _createSignal10[1];
              signals[i] = set;
              return mapFn(s, i);
            }
          };
        }
        function createComponent$1(Comp, props) {
          return untrack(() => Comp(props || {}));
        }
        function trueFn() {
          return true;
        }
        var propTraps = {
          get(_, property, receiver) {
            if (property === $PROXY) return receiver;
            return _.get(property);
          },
          has(_, property) {
            if (property === $PROXY) return true;
            return _.has(property);
          },
          set: trueFn,
          deleteProperty: trueFn,
          getOwnPropertyDescriptor(_, property) {
            return {
              configurable: true,
              enumerable: true,
              get() {
                return _.get(property);
              },
              set: trueFn,
              deleteProperty: trueFn
            };
          },
          ownKeys(_) {
            return _.keys();
          }
        };
        function resolveSource(s) {
          return !(s = typeof s === "function" ? s() : s) ? {} : s;
        }
        function resolveSources() {
          for (var i = 0, length = this.length; i < length; ++i) {
            var v = this[i]();
            if (v !== undefined) return v;
          }
        }
        function mergeProps$1() {
          for (var _len2 = arguments.length, sources = new Array(_len2), _key26 = 0; _key26 < _len2; _key26++) {
            sources[_key26] = arguments[_key26];
          }
          var proxy = false;
          for (var i = 0; i < sources.length; i++) {
            var s = sources[i];
            proxy = proxy || !!s && $PROXY in s;
            sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
          }
          if (SUPPORTS_PROXY && proxy) {
            return new Proxy({
              get(property) {
                for (var _i16 = sources.length - 1; _i16 >= 0; _i16--) {
                  var v = resolveSource(sources[_i16])[property];
                  if (v !== undefined) return v;
                }
              },
              has(property) {
                for (var _i17 = sources.length - 1; _i17 >= 0; _i17--) {
                  if (property in resolveSource(sources[_i17])) return true;
                }
                return false;
              },
              keys() {
                var keys = [];
                for (var _i18 = 0; _i18 < sources.length; _i18++) keys.push(...Object.keys(resolveSource(sources[_i18])));
                return [...new Set(keys)];
              }
            }, propTraps);
          }
          var sourcesMap = {};
          var defined = Object.create(null);
          for (var _i19 = sources.length - 1; _i19 >= 0; _i19--) {
            var source = sources[_i19];
            if (!source) continue;
            var sourceKeys = Object.getOwnPropertyNames(source);
            var _loop9 = function _loop9() {
              var key = sourceKeys[_i20];
              if (key === "__proto__" || key === "constructor") return 1; // continue
              var desc = Object.getOwnPropertyDescriptor(source, key);
              if (!defined[key]) {
                defined[key] = desc.get ? {
                  enumerable: true,
                  configurable: true,
                  get: resolveSources.bind(sourcesMap[key] = [desc.get.bind(source)])
                } : desc.value !== undefined ? desc : undefined;
              } else {
                var _sources = sourcesMap[key];
                if (_sources) {
                  if (desc.get) _sources.push(desc.get.bind(source));else if (desc.value !== undefined) _sources.push(() => desc.value);
                }
              }
            };
            for (var _i20 = sourceKeys.length - 1; _i20 >= 0; _i20--) {
              if (_loop9()) continue;
            }
          }
          var target = {};
          var definedKeys = Object.keys(defined);
          for (var _i21 = definedKeys.length - 1; _i21 >= 0; _i21--) {
            var _key27 = definedKeys[_i21],
              desc = defined[_key27];
            if (desc && desc.get) Object.defineProperty(target, _key27, desc);else target[_key27] = desc ? desc.value : undefined;
          }
          return target;
        }
        function splitProps(props) {
          for (var _len3 = arguments.length, keys = new Array(_len3 > 1 ? _len3 - 1 : 0), _key28 = 1; _key28 < _len3; _key28++) {
            keys[_key28 - 1] = arguments[_key28];
          }
          if (SUPPORTS_PROXY && $PROXY in props) {
            var blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
            var res = keys.map(k => {
              return new Proxy({
                get(property) {
                  return k.includes(property) ? props[property] : undefined;
                },
                has(property) {
                  return k.includes(property) && property in props;
                },
                keys() {
                  return k.filter(property => property in props);
                }
              }, propTraps);
            });
            res.push(new Proxy({
              get(property) {
                return blocked.has(property) ? undefined : props[property];
              },
              has(property) {
                return blocked.has(property) ? false : property in props;
              },
              keys() {
                return Object.keys(props).filter(k => !blocked.has(k));
              }
            }, propTraps));
            return res;
          }
          var otherObject = {};
          var objects = keys.map(() => ({}));
          var _iterator18 = _createForOfIteratorHelper(Object.getOwnPropertyNames(props)),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var propName = _step18.value;
              var desc = Object.getOwnPropertyDescriptor(props, propName);
              var isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
              var _blocked = false;
              var objectIndex = 0;
              var _iterator19 = _createForOfIteratorHelper(keys),
                _step19;
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var k = _step19.value;
                  if (k.includes(propName)) {
                    _blocked = true;
                    isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
                  }
                  ++objectIndex;
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
              if (!_blocked) {
                isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
          return [...objects, otherObject];
        }
        function lazy(fn) {
          var comp;
          var p;
          var wrap = props => {
            var ctx = sharedConfig.context;
            if (ctx) {
              var _createSignal11 = createSignal(),
                _createSignal12 = _slicedToArray(_createSignal11, 2),
                s = _createSignal12[0],
                set = _createSignal12[1];
              sharedConfig.count || (sharedConfig.count = 0);
              sharedConfig.count++;
              (p || (p = fn())).then(mod => {
                !sharedConfig.done && setHydrateContext(ctx);
                sharedConfig.count--;
                set(() => mod.default);
                setHydrateContext();
              });
              comp = s;
            } else if (!comp) {
              var _createResource = createResource(() => (p || (p = fn())).then(mod => mod.default)),
                _createResource2 = _slicedToArray(_createResource, 1),
                _s = _createResource2[0];
              comp = _s;
            }
            var Comp;
            return createMemo(() => (Comp = comp()) ? untrack(() => {
              if (false) ;
              if (!ctx || sharedConfig.done) return Comp(props);
              var c = sharedConfig.context;
              setHydrateContext(ctx);
              var r = Comp(props);
              setHydrateContext(c);
              return r;
            }) : "");
          };
          wrap.preload = () => p || ((p = fn()).then(mod => comp = () => mod.default), p);
          return wrap;
        }
        var narrowedError = name => `Stale read from <${name}>.`;
        function For(props) {
          var fallback = "fallback" in props && {
            fallback: () => props.fallback
          };
          return createMemo(mapArray(() => props.each, props.children, fallback || undefined));
        }
        function Index(props) {
          var fallback = "fallback" in props && {
            fallback: () => props.fallback
          };
          return createMemo(indexArray(() => props.each, props.children, fallback || undefined));
        }
        function Show(props) {
          var keyed = props.keyed;
          var condition = createMemo(() => props.when, undefined, {
            equals: (a, b) => keyed ? a === b : !a === !b
          });
          return createMemo(() => {
            var c = condition();
            if (c) {
              var child = props.children;
              var fn = typeof child === "function" && child.length > 0;
              return fn ? untrack(() => child(keyed ? c : () => {
                if (!untrack(condition)) throw narrowedError("Show");
                return props.when;
              })) : child;
            }
            return props.fallback;
          }, undefined, undefined);
        }
        var _createSignal13 = createSignal(undefined),
          _createSignal14 = _slicedToArray(_createSignal13, 2),
          activeElement = _createSignal14[0],
          setActiveElement = _createSignal14[1];
        exports("p", activeElement);
        function hexColor() {
          var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          if (isInteger(color)) {
            return color;
          }
          if (typeof color === "string") {
            if (color.startsWith("#")) {
              return Number(color.replace("#", "0x") + (color.length === 7 ? "ff" : ""));
            }
            if (color.startsWith("0x")) {
              return Number(color);
            }
            return Number("0x" + (color.length === 6 ? color + "ff" : color));
          }
          return 0;
        }
        function combineStyles(style1, style2) {
          if (!style1) {
            return style2;
          }
          if (!style2) {
            return style1;
          }
          return _objectSpread(_objectSpread({}, style2), style1);
        }
        function createRenderer$1(_ref47) {
          var createElement = _ref47.createElement,
            createTextNode = _ref47.createTextNode,
            isTextNode = _ref47.isTextNode,
            replaceText = _ref47.replaceText,
            insertNode = _ref47.insertNode,
            removeNode = _ref47.removeNode,
            setProperty = _ref47.setProperty,
            getParentNode = _ref47.getParentNode,
            getFirstChild = _ref47.getFirstChild,
            getNextSibling = _ref47.getNextSibling;
          function insert(parent, accessor, marker, initial) {
            if (marker !== undefined && !initial) initial = [];
            if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
            createRenderEffect(current => insertExpression(parent, accessor(), current, marker), initial);
          }
          function insertExpression(parent, value, current, marker, unwrapArray) {
            while (typeof current === "function") current = current();
            if (value === current) return current;
            var t = _typeof(value),
              multi = marker !== undefined;
            if (t === "string" || t === "number") {
              if (t === "number") value = value.toString();
              if (multi) {
                var node = current[0];
                if (node && isTextNode(node)) {
                  replaceText(node, value);
                } else node = createTextNode(value);
                current = cleanChildren(parent, current, marker, node);
              } else {
                if (current !== "" && typeof current === "string") {
                  replaceText(getFirstChild(parent), current = value);
                } else {
                  cleanChildren(parent, current, marker, createTextNode(value));
                  current = value;
                }
              }
            } else if (value == null || t === "boolean") {
              current = cleanChildren(parent, current, marker);
            } else if (t === "function") {
              createRenderEffect(() => {
                var v = value();
                while (typeof v === "function") v = v();
                current = insertExpression(parent, v, current, marker);
              });
              return () => current;
            } else if (Array.isArray(value)) {
              var array = [];
              if (normalizeIncomingArray(array, value, unwrapArray)) {
                createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
                return () => current;
              }
              if (array.length === 0) {
                var replacement = cleanChildren(parent, current, marker);
                if (multi) return current = replacement;
              } else {
                if (Array.isArray(current)) {
                  if (current.length === 0) {
                    appendNodes(parent, array, marker);
                  } else reconcileArrays(parent, current, array);
                } else if (current == null || current === "") {
                  appendNodes(parent, array);
                } else {
                  reconcileArrays(parent, multi && current || [getFirstChild(parent)], array);
                }
              }
              current = array;
            } else {
              if (Array.isArray(current)) {
                if (multi) return current = cleanChildren(parent, current, marker, value);
                cleanChildren(parent, current, null, value);
              } else if (current == null || current === "" || !getFirstChild(parent)) {
                insertNode(parent, value);
              } else replaceNode(parent, value, getFirstChild(parent));
              current = value;
            }
            return current;
          }
          function normalizeIncomingArray(normalized, array, unwrap) {
            var dynamic = false;
            for (var i = 0, len = array.length; i < len; i++) {
              var item = array[i],
                t = void 0;
              if (item == null || item === true || item === false) ;else if (Array.isArray(item)) {
                dynamic = normalizeIncomingArray(normalized, item) || dynamic;
              } else if ((t = _typeof(item)) === "string" || t === "number") {
                normalized.push(createTextNode(item));
              } else if (t === "function") {
                if (unwrap) {
                  while (typeof item === "function") item = item();
                  dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
                } else {
                  normalized.push(item);
                  dynamic = true;
                }
              } else normalized.push(item);
            }
            return dynamic;
          }
          function reconcileArrays(parentNode, a, b) {
            var bLength = b.length,
              aEnd = a.length,
              bEnd = bLength,
              aStart = 0,
              bStart = 0,
              after = getNextSibling(a[aEnd - 1]),
              map = null;
            while (aStart < aEnd || bStart < bEnd) {
              if (a[aStart] === b[bStart]) {
                aStart++;
                bStart++;
                continue;
              }
              while (a[aEnd - 1] === b[bEnd - 1]) {
                aEnd--;
                bEnd--;
              }
              if (aEnd === aStart) {
                var node = bEnd < bLength ? bStart ? getNextSibling(b[bStart - 1]) : b[bEnd - bStart] : after;
                while (bStart < bEnd) insertNode(parentNode, b[bStart++], node);
              } else if (bEnd === bStart) {
                while (aStart < aEnd) {
                  if (!map || !map.has(a[aStart])) removeNode(parentNode, a[aStart]);
                  aStart++;
                }
              } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
                var _node2 = getNextSibling(a[--aEnd]);
                insertNode(parentNode, b[bStart++], getNextSibling(a[aStart++]));
                insertNode(parentNode, b[--bEnd], _node2);
                a[aEnd] = b[bEnd];
              } else {
                if (!map) {
                  map = new Map();
                  var i = bStart;
                  while (i < bEnd) map.set(b[i], i++);
                }
                var index = map.get(a[aStart]);
                if (index != null) {
                  if (bStart < index && index < bEnd) {
                    var _i22 = aStart,
                      sequence = 1,
                      t = void 0;
                    while (++_i22 < aEnd && _i22 < bEnd) {
                      if ((t = map.get(a[_i22])) == null || t !== index + sequence) break;
                      sequence++;
                    }
                    if (sequence > index - bStart) {
                      var _node3 = a[aStart];
                      while (bStart < index) insertNode(parentNode, b[bStart++], _node3);
                    } else replaceNode(parentNode, b[bStart++], a[aStart++]);
                  } else aStart++;
                } else removeNode(parentNode, a[aStart++]);
              }
            }
          }
          function cleanChildren(parent, current, marker, replacement) {
            if (marker === undefined) {
              var removed;
              while (removed = getFirstChild(parent)) removeNode(parent, removed);
              replacement && insertNode(parent, replacement);
              return "";
            }
            var node = replacement || createTextNode("");
            if (current.length) {
              var inserted = false;
              for (var i = current.length - 1; i >= 0; i--) {
                var el = current[i];
                if (node !== el) {
                  var isParent = getParentNode(el) === parent;
                  if (!inserted && !i) isParent ? replaceNode(parent, node, el) : insertNode(parent, node, marker);else isParent && removeNode(parent, el);
                } else inserted = true;
              }
            } else insertNode(parent, node, marker);
            return [node];
          }
          function appendNodes(parent, array, marker) {
            for (var i = 0, len = array.length; i < len; i++) insertNode(parent, array[i], marker);
          }
          function replaceNode(parent, newNode, oldNode) {
            insertNode(parent, newNode, oldNode);
            removeNode(parent, oldNode);
          }
          function spreadExpression(node, props) {
            var prevProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var skipChildren = arguments.length > 3 ? arguments[3] : undefined;
            props || (props = {});
            if (!skipChildren) {
              createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
            }
            createRenderEffect(() => props.ref && props.ref(node));
            createRenderEffect(() => {
              for (var prop in props) {
                if (prop === "children" || prop === "ref") continue;
                var value = props[prop];
                if (value === prevProps[prop]) continue;
                setProperty(node, prop, value, prevProps[prop]);
                prevProps[prop] = value;
              }
            });
            return prevProps;
          }
          return {
            render(code, element) {
              var disposer;
              createRoot(dispose => {
                disposer = dispose;
                insert(element, code());
              });
              return disposer;
            },
            insert,
            spread(node, accessor, skipChildren) {
              if (typeof accessor === "function") {
                createRenderEffect(current => spreadExpression(node, accessor(), current, skipChildren));
              } else spreadExpression(node, accessor, undefined, skipChildren);
            },
            createElement,
            createTextNode,
            insertNode,
            setProp(node, name, value, prev) {
              setProperty(node, name, value, prev);
              return value;
            },
            mergeProps: mergeProps$1,
            effect: createRenderEffect,
            memo: createMemo,
            createComponent: createComponent$1,
            use(fn, element, arg) {
              return untrack(() => fn(element, arg));
            }
          };
        }
        function createRenderer$2(options) {
          var renderer = createRenderer$1(options);
          renderer.mergeProps = mergeProps$1;
          return renderer;
        }
        var nodeOpts = {
          createElement(name) {
            return new ElementNode(name);
          },
          createTextNode(text) {
            return {
              _type: NodeType.Text,
              text
            };
          },
          replaceText(node, value) {
            node.text = value;
            var parent = node.parent;
            parent.text = parent.getText();
          },
          setProperty(node, name) {
            var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            node[name] = value;
          },
          insertNode(parent, node, anchor) {
            parent.insertChild(node, anchor);
            node._queueDelete = false;
            if (node instanceof ElementNode) {
              parent.rendered && node.render(true);
            } else if (isElementText(parent)) {
              parent.text = parent.getText();
            }
          },
          isTextNode(node) {
            return isElementText(node);
          },
          removeNode(parent, node) {
            parent.removeChild(node);
            node._queueDelete = true;
            if (node instanceof ElementNode) {
              queueMicrotask(() => node.destroy());
            }
          },
          getParentNode(node) {
            return node.parent;
          },
          getFirstChild(node) {
            return node.children[0];
          },
          getNextSibling(node) {
            var children = node.parent.children || [];
            var index = children.indexOf(node) + 1;
            if (index < children.length) {
              return children[index];
            }
            return undefined;
          }
        };
        var solidRenderer = createRenderer$2(nodeOpts);
        var renderer$1;
        var rootNode = nodeOpts.createElement("App");
        var render$1 = function render$1(code) {
          return solidRenderer.render(code, rootNode);
        };
        function createRenderer(rendererOptions, node) {
          var options = Config.rendererOptions;
          renderer$1 = startLightningRenderer(options, "app");
          Config.setActiveElement = setActiveElement;
          rootNode.lng = renderer$1.root;
          rootNode.rendered = true;
          renderer$1.on("idle", () => {
            tasksEnabled = true;
            processTasks();
          });
          return {
            renderer: renderer$1,
            rootNode,
            render: render$1
          };
        }
        var effect = solidRenderer.effect,
          memo = solidRenderer.memo,
          createComponent = solidRenderer.createComponent,
          createElement = solidRenderer.createElement,
          createTextNode = solidRenderer.createTextNode,
          insertNode = solidRenderer.insertNode,
          insert = solidRenderer.insert,
          spread = solidRenderer.spread,
          setProp = solidRenderer.setProp,
          mergeProps = solidRenderer.mergeProps,
          use = solidRenderer.use;
        exports({
          x: memo,
          h: createComponent,
          m: mergeProps
        });
        var taskQueue = [];
        var tasksEnabled = false;
        createRenderEffect(() => {
          activeElement();
          tasksEnabled = false;
        });
        function processTasks() {
          if (tasksEnabled && taskQueue.length) {
            setTimeout(() => {
              var task = taskQueue.shift();
              if (task) {
                task();
                processTasks();
              }
            }, 0);
          }
        }
        function Dynamic(props) {
          var _splitProps = splitProps(props, ["component"]),
            _splitProps2 = _slicedToArray(_splitProps, 2),
            p = _splitProps2[0],
            others = _splitProps2[1];
          var cached = createMemo(() => p.component);
          return createMemo(() => {
            var component = cached();
            switch (_typeof(component)) {
              case "function":
                return untrack(() => component(others));
              case "string":
                {
                  var el = createElement(component);
                  spread(el, others);
                  return el;
                }
            }
          });
        }
        var View = exports("V", props => {
          var el = createElement("node");
          spread(el, props, false);
          return el;
        });
        var Text$4 = exports("T", props => {
          var el = createElement("text");
          spread(el, props, false);
          return el;
        });
        var FLOATS_PER_GLYPH = 24;
        function getStartConditions(sdfFontSize, sdfLineHeight, fontFace, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH) {
          var startLineIndex = Math.min(Math.max(renderWindow.firstLineIdx, 0), lineCache.length);
          var sdfStartX = 0;
          var metrics = fontFace.metrics;
          assertTruthy(fontFace.data);
          var sdfBareLineHeight = (metrics.ascender - metrics.descender) * sdfFontSize;
          var sdfVerticalAlignYOffset = 0;
          if (verticalAlign === "middle") {
            sdfVerticalAlignYOffset = (sdfLineHeight - sdfBareLineHeight) / 2;
          } else if (verticalAlign === "bottom") {
            sdfVerticalAlignYOffset = sdfLineHeight - sdfBareLineHeight;
          }
          var sdfOffsetY = offsetY / fontSizeRatio;
          var sdfEncodedAscender = fontFace.data.common.base;
          var sdfConfiguredAscender = metrics.ascender * sdfFontSize;
          var sdfAscenderAdjOffset = sdfConfiguredAscender - sdfEncodedAscender;
          var sdfStartY = sdfOffsetY + sdfAscenderAdjOffset + startLineIndex * sdfLineHeight + sdfVerticalAlignYOffset;
          if (textH && sdfStartY >= textH / fontSizeRatio) {
            return;
          }
          return {
            sdfX: sdfStartX,
            sdfY: sdfStartY,
            lineIndex: startLineIndex
          };
        }
        class PeekableIterator {
          constructor(iterator) {
            var indexBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            _defineProperty(this, "peekBuffer", []);
            _defineProperty(this, "_lastIndex", void 0);
            this.iterator = iterator;
            this.iterator = iterator;
            this._lastIndex = indexBase - 1;
            this.peekBuffer = [];
          }
          next() {
            var nextResult = this.peekBuffer.length > 0 ?
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.peekBuffer.pop() : this.iterator.next();
            if (nextResult.done) {
              this._lastIndex = -1;
            } else {
              this._lastIndex++;
            }
            return nextResult;
          }
          peek() {
            if (this.peekBuffer.length > 0) {
              return this.peekBuffer[0];
            }
            var result = this.iterator.next();
            this.peekBuffer.push(result);
            return result;
          }
          get lastIndex() {
            return this._lastIndex;
          }
        }
        function getUnicodeCodepoints(text) {
          var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            var i, codePoint;
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  i = start;
                case 1:
                  if (!(i < text.length)) {
                    _context18.next = 10;
                    break;
                  }
                  codePoint = text.codePointAt(i);
                  if (!(codePoint === undefined)) {
                    _context18.next = 5;
                    break;
                  }
                  throw new Error("Invalid Unicode code point");
                case 5:
                  _context18.next = 7;
                  return codePoint;
                case 7:
                  i += codePoint <= 65535 ? 1 : 2;
                  _context18.next = 1;
                  break;
                case 10:
                case "end":
                  return _context18.stop();
              }
            }, _callee18);
          })();
        }
        function measureText(text, shaperProps, shaper) {
          var glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, 0), 0));
          var width = 0;
          var _iterator20 = _createForOfIteratorHelper(glyphs),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var glyph = _step20.value;
              if (glyph.mapped && glyph.codepoint !== 8203) {
                width += glyph.xAdvance;
              }
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
          return width;
        }
        function layoutText(curLineIndex, startX, startY, text, textAlign, width, height, fontSize, lineHeight, letterSpacing, vertexBuffer, contain, lineCache, rwSdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines) {
          assertTruthy(trFontFace.loaded);
          assertTruthy(trFontFace.data);
          assertTruthy(trFontFace.shaper);
          var fontSizeRatio = fontSize / trFontFace.data.info.size;
          var vertexLineHeight = lineHeight / fontSizeRatio;
          var vertexW = width / fontSizeRatio;
          var vertexLSpacing = letterSpacing / fontSizeRatio;
          var startingLineCacheEntry = lineCache[curLineIndex];
          var startingCodepointIndex = (startingLineCacheEntry === null || startingLineCacheEntry === void 0 ? void 0 : startingLineCacheEntry.codepointIndex) || 0;
          var startingMaxX = (startingLineCacheEntry === null || startingLineCacheEntry === void 0 ? void 0 : startingLineCacheEntry.maxX) || 0;
          var startingMaxY = (startingLineCacheEntry === null || startingLineCacheEntry === void 0 ? void 0 : startingLineCacheEntry.maxY) || 0;
          var maxX = startingMaxX;
          var maxY = startingMaxY;
          var curX = startX;
          var curY = startY;
          var bufferOffset = 0;
          var lastWord = {
            codepointIndex: -1,
            bufferOffset: -1,
            xStart: -1
          };
          var shaper = trFontFace.shaper;
          var shaperProps = {
            letterSpacing: vertexLSpacing
          };
          if (text.endsWith(" ")) {
            text += " ";
          }
          var glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, startingCodepointIndex), startingCodepointIndex));
          var glyphResult;
          var curLineBufferStart = -1;
          var bufferLineInfos = [];
          var vertexTruncateHeight = height / fontSizeRatio;
          var overflowSuffVertexWidth = measureText(overflowSuffix, shaperProps, shaper);
          var moreLines = true;
          while (moreLines) {
            var nextLineWillFit = (maxLines === 0 || curLineIndex + 1 < maxLines) && (contain !== "both" || scrollable || curY + vertexLineHeight + trFontFace.maxCharHeight <= vertexTruncateHeight);
            var lineVertexW = nextLineWillFit ? vertexW : vertexW - overflowSuffVertexWidth;
            var xStartLastWordBoundary = 0;
            var lineIsBelowWindowTop = curY + trFontFace.maxCharHeight >= rwSdf.y1;
            var lineIsAboveWindowBottom = curY <= rwSdf.y2;
            var lineIsWithinWindow = lineIsBelowWindowTop && lineIsAboveWindowBottom;
            while ((glyphResult = glyphs.next()) && !glyphResult.done) {
              var glyph = glyphResult.value;
              if (curLineIndex === lineCache.length) {
                lineCache.push({
                  codepointIndex: glyph.cluster,
                  maxY,
                  maxX
                });
              } else if (curLineIndex > lineCache.length) {
                throw new Error("Unexpected lineCache length");
              }
              if (glyph.codepoint === 32 || glyph.codepoint === 10 || glyph.codepoint === 8203) {
                if (lastWord.codepointIndex !== -1) {
                  lastWord.codepointIndex = -1;
                  xStartLastWordBoundary = curX;
                }
              } else if (lastWord.codepointIndex === -1) {
                lastWord.codepointIndex = glyph.cluster;
                lastWord.bufferOffset = bufferOffset;
                lastWord.xStart = xStartLastWordBoundary;
              }
              if (glyph.mapped) {
                var charEndX = curX + glyph.xOffset + glyph.width;
                if (
                // We are containing the text
                contain !== "none" &&
                // The current glyph reaches outside the contained width
                charEndX >= lineVertexW &&
                // There is a last word that we can break to the next line
                lastWord.codepointIndex !== -1 &&
                // Prevents infinite loop when a single word is longer than the width
                lastWord.xStart > 0) {
                  if (nextLineWillFit) {
                    glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, lastWord.codepointIndex), lastWord.codepointIndex));
                    bufferOffset = lastWord.bufferOffset;
                    break;
                  } else {
                    glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
                    curX = lastWord.xStart;
                    bufferOffset = lastWord.bufferOffset;
                    contain = "none";
                  }
                } else {
                  var quadX = curX + glyph.xOffset;
                  var quadY = curY + glyph.yOffset;
                  if (lineIsWithinWindow) {
                    if (curLineBufferStart === -1) {
                      curLineBufferStart = bufferOffset;
                    }
                    var atlasEntry = trFontFace.getAtlasEntry(glyph.glyphId);
                    var u = atlasEntry.x / trFontFace.data.common.scaleW;
                    var v = atlasEntry.y / trFontFace.data.common.scaleH;
                    var uvWidth = atlasEntry.width / trFontFace.data.common.scaleW;
                    var uvHeight = atlasEntry.height / trFontFace.data.common.scaleH;
                    vertexBuffer[bufferOffset++] = quadX;
                    vertexBuffer[bufferOffset++] = quadY;
                    vertexBuffer[bufferOffset++] = u;
                    vertexBuffer[bufferOffset++] = v;
                    vertexBuffer[bufferOffset++] = quadX + glyph.width;
                    vertexBuffer[bufferOffset++] = quadY;
                    vertexBuffer[bufferOffset++] = u + uvWidth;
                    vertexBuffer[bufferOffset++] = v;
                    vertexBuffer[bufferOffset++] = quadX;
                    vertexBuffer[bufferOffset++] = quadY + glyph.height;
                    vertexBuffer[bufferOffset++] = u;
                    vertexBuffer[bufferOffset++] = v + uvHeight;
                    vertexBuffer[bufferOffset++] = quadX + glyph.width;
                    vertexBuffer[bufferOffset++] = quadY + glyph.height;
                    vertexBuffer[bufferOffset++] = u + uvWidth;
                    vertexBuffer[bufferOffset++] = v + uvHeight;
                  }
                  maxY = Math.max(maxY, quadY + glyph.height);
                  maxX = Math.max(maxX, quadX + glyph.width);
                  curX += glyph.xAdvance;
                }
              } else {
                if (glyph.codepoint === 10) {
                  if (nextLineWillFit) {
                    break;
                  } else {
                    glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
                    contain = "none";
                  }
                }
              }
            }
            if (curLineBufferStart !== -1) {
              bufferLineInfos.push({
                bufferStart: curLineBufferStart,
                bufferEnd: bufferOffset
              });
              curLineBufferStart = -1;
            }
            curX = 0;
            curY += vertexLineHeight;
            curLineIndex++;
            lastWord.codepointIndex = -1;
            xStartLastWordBoundary = 0;
            if (!forceFullLayoutCalc && contain === "both" && curY > rwSdf.y2) {
              moreLines = false;
            } else if (glyphResult && glyphResult.done) {
              moreLines = false;
            } else if (!nextLineWillFit) {
              moreLines = false;
            }
          }
          if (textAlign === "center") {
            var vertexTextW = contain === "none" ? maxX : vertexW;
            for (var i = 0; i < bufferLineInfos.length; i++) {
              var line = bufferLineInfos[i];
              var lineWidth =
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              vertexBuffer[line.bufferEnd - 4] - vertexBuffer[line.bufferStart];
              var xOffset = (vertexTextW - lineWidth) / 2;
              for (var j = line.bufferStart; j < line.bufferEnd; j += 4) {
                vertexBuffer[j] += xOffset;
              }
            }
          } else if (textAlign === "right") {
            var _vertexTextW = contain === "none" ? maxX : vertexW;
            for (var _i23 = 0; _i23 < bufferLineInfos.length; _i23++) {
              var _line = bufferLineInfos[_i23];
              var _lineWidth = _line.bufferEnd === _line.bufferStart ? 0 :
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              vertexBuffer[_line.bufferEnd - 4] - vertexBuffer[_line.bufferStart];
              var _xOffset = _vertexTextW - _lineWidth;
              for (var _j = _line.bufferStart; _j < _line.bufferEnd; _j += 4) {
                vertexBuffer[_j] += _xOffset;
              }
            }
          }
          return {
            bufferNumFloats: bufferOffset,
            bufferNumQuads: bufferOffset / 16,
            layoutNumCharacters: glyphResult.done ? text.length - startingCodepointIndex : glyphResult.value.cluster - startingCodepointIndex + 1,
            fullyProcessed: !!glyphResult.done,
            maxX,
            maxY,
            numLines: lineCache.length
          };
        }
        function roundUpToMultiple(value, multiple) {
          return Math.ceil(value / multiple) * multiple;
        }
        function roundDownToMultiple(value, multiple) {
          return Math.floor(value / multiple) * multiple;
        }
        function setRenderWindow(outRenderWindow, x, y, scrollY, lineHeight, bufferMargin, visibleWindow, fontSizeRatio) {
          var screen = outRenderWindow.screen,
            sdf = outRenderWindow.sdf;
          if (!isBoundPositive(visibleWindow)) {
            screen.x1 = 0;
            screen.y1 = 0;
            screen.x2 = 0;
            screen.y2 = 0;
            sdf.x1 = 0;
            sdf.y1 = 0;
            sdf.x2 = 0;
            sdf.y2 = 0;
            outRenderWindow.numLines = 0;
            outRenderWindow.firstLineIdx = 0;
          } else {
            var x1 = visibleWindow.x1 - x;
            var x2 = x1 + (visibleWindow.x2 - visibleWindow.x1);
            var y1Base = visibleWindow.y1 - y + scrollY;
            var y1 = roundDownToMultiple(y1Base - bufferMargin, lineHeight || 1);
            var y2 = roundUpToMultiple(y1Base + (visibleWindow.y2 - visibleWindow.y1) + bufferMargin, lineHeight || 1);
            screen.x1 = x1;
            screen.y1 = y1;
            screen.x2 = x2;
            screen.y2 = y2;
            sdf.x1 = x1 / fontSizeRatio;
            sdf.y1 = y1 / fontSizeRatio;
            sdf.x2 = x2 / fontSizeRatio;
            sdf.y2 = y2 / fontSizeRatio;
            outRenderWindow.numLines = Math.ceil((y2 - y1) / lineHeight);
            outRenderWindow.firstLineIdx = lineHeight ? Math.floor(y1 / lineHeight) : 0;
          }
          outRenderWindow.valid = true;
        }
        var IDENTITY_MATRIX_3x3 = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        var Sdf = {
          props: {
            transform: IDENTITY_MATRIX_3x3,
            scrollY: 0,
            color: 4294967295,
            size: 16,
            distanceRange: 1,
            debug: false
          },
          onSdfBind(props) {
            this.uniformMatrix3fv("u_transform", props.transform);
            this.uniform1f("u_scrollY", props.scrollY);
            this.uniform4fv("u_color", new Float32Array(getNormalizedRgbaComponents(props.color)));
            this.uniform1f("u_size", props.size);
            this.uniform1f("u_distanceRange", props.distanceRange);
            this.uniform1i("u_debug", props.debug ? 1 : 0);
          },
          vertex: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif
    // an attribute is an input (in) to a vertex shader.
    // It will receive data from a buffer
    attribute vec2 a_position;
    attribute vec2 a_textureCoords;

    uniform vec2 u_resolution;
    uniform mat3 u_transform;
    uniform float u_scrollY;
    uniform float u_pixelRatio;
    uniform float u_size;

    varying vec2 v_texcoord;

    void main() {
      vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);
      vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;

      // Calculate screen space with pixel ratio
      vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);

      gl_Position = vec4(screenSpace, 0.0, 1.0);
      v_texcoord = a_textureCoords;

    }
  `,
          fragment: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif
    uniform vec4 u_color;
    uniform sampler2D u_texture;
    uniform float u_distanceRange;
    uniform float u_pixelRatio;
    uniform int u_debug;

    varying vec2 v_texcoord;

    float median(float r, float g, float b) {
        return max(min(r, g), min(max(r, g), b));
    }

    void main() {
        vec3 sample = texture2D(u_texture, v_texcoord).rgb;
        if (u_debug == 1) {
          gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);
          return;
        }
        float scaledDistRange = u_distanceRange * u_pixelRatio;
        float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);
        float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;

        // Build the final color.
        // IMPORTANT: We must premultiply the color by the alpha value before returning it.
        gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);
    }
  `
        };
        function calcDefaultLineHeight(metrics, fontSize) {
          return fontSize * (metrics.ascender - metrics.descender + metrics.lineGap);
        }
        var tmpRect = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        class SdfTextRenderer extends TextRenderer {
          constructor(stage) {
            super(stage);
            /**
             * Map of font family names to a set of font faces.
             */
            _defineProperty(this, "ssdfFontFamilies", {});
            _defineProperty(this, "msdfFontFamilies", {});
            _defineProperty(this, "fontFamilyArray", [this.ssdfFontFamilies, this.msdfFontFamilies]);
            _defineProperty(this, "sdfShader", void 0);
            _defineProperty(this, "rendererBounds", void 0);
            _defineProperty(this, "type", "sdf");
            this.stage.shManager.registerShaderType("Sdf", Sdf);
            this.sdfShader = this.stage.shManager.createShader("Sdf");
            this.rendererBounds = {
              x1: 0,
              y1: 0,
              x2: this.stage.options.appWidth,
              y2: this.stage.options.appHeight
            };
          }
          //#region Overrides
          getPropertySetters() {
            return {
              fontFamily: (state, value) => {
                state.props.fontFamily = value;
                this.releaseFontFace(state);
                this.invalidateLayoutCache(state);
              },
              fontWeight: (state, value) => {
                state.props.fontWeight = value;
                this.releaseFontFace(state);
                this.invalidateLayoutCache(state);
              },
              fontStyle: (state, value) => {
                state.props.fontStyle = value;
                this.releaseFontFace(state);
                this.invalidateLayoutCache(state);
              },
              fontStretch: (state, value) => {
                state.props.fontStretch = value;
                this.releaseFontFace(state);
                this.invalidateLayoutCache(state);
              },
              fontSize: (state, value) => {
                state.props.fontSize = value;
                this.invalidateLayoutCache(state);
              },
              text: (state, value) => {
                state.props.text = value;
                this.invalidateLayoutCache(state);
              },
              textAlign: (state, value) => {
                state.props.textAlign = value;
                this.invalidateLayoutCache(state);
              },
              color: (state, value) => {
                state.props.color = value;
              },
              x: (state, value) => {
                state.props.x = value;
                if (state.elementBounds.valid) {
                  this.setElementBoundsX(state);
                  if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
                    this.scheduleUpdateState(state);
                  }
                }
              },
              y: (state, value) => {
                state.props.y = value;
                if (state.elementBounds.valid) {
                  this.setElementBoundsY(state);
                  if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
                    this.scheduleUpdateState(state);
                  }
                }
              },
              contain: (state, value) => {
                state.props.contain = value;
                this.invalidateLayoutCache(state);
              },
              width: (state, value) => {
                state.props.width = value;
                if (state.props.contain !== "none") {
                  this.invalidateLayoutCache(state);
                }
              },
              height: (state, value) => {
                state.props.height = value;
                if (state.props.contain === "both") {
                  this.invalidateLayoutCache(state);
                }
              },
              offsetY: (state, value) => {
                state.props.offsetY = value;
                this.invalidateLayoutCache(state);
              },
              scrollable: (state, value) => {
                state.props.scrollable = value;
                this.invalidateLayoutCache(state);
              },
              scrollY: (state, value) => {
                state.props.scrollY = value;
                this.scheduleUpdateState(state);
              },
              letterSpacing: (state, value) => {
                state.props.letterSpacing = value;
                this.invalidateLayoutCache(state);
              },
              lineHeight: (state, value) => {
                state.props.lineHeight = value;
                state.resLineHeight = undefined;
                this.invalidateLayoutCache(state);
              },
              maxLines: (state, value) => {
                state.props.maxLines = value;
                this.invalidateLayoutCache(state);
              },
              textBaseline: (state, value) => {
                state.props.textBaseline = value;
                this.invalidateLayoutCache(state);
              },
              verticalAlign: (state, value) => {
                state.props.verticalAlign = value;
                this.invalidateLayoutCache(state);
              },
              overflowSuffix: (state, value) => {
                state.props.overflowSuffix = value;
                this.invalidateLayoutCache(state);
              },
              debug: (state, value) => {
                state.props.debug = value;
              }
            };
          }
          canRenderFont(props) {
            var fontFamily = props.fontFamily;
            return fontFamily in this.ssdfFontFamilies || fontFamily in this.msdfFontFamilies || fontFamily === "$$SDF_FAILURE_TEST$$";
          }
          isFontFaceSupported(fontFace) {
            return fontFace instanceof SdfTrFontFace;
          }
          addFontFace(fontFace) {
            var familyName = fontFace.fontFamily;
            var fontFamiles = fontFace.type === "ssdf" ? this.ssdfFontFamilies : fontFace.type === "msdf" ? this.msdfFontFamilies : undefined;
            if (!fontFamiles) {
              console.warn(`Invalid font face type: ${fontFace.type}`);
              return;
            }
            var faceSet = fontFamiles[familyName];
            if (!faceSet) {
              faceSet = /* @__PURE__ */new Set();
              fontFamiles[familyName] = faceSet;
            }
            faceSet.add(fontFace);
          }
          createState(props) {
            return {
              props,
              status: "initialState",
              updateScheduled: false,
              emitter: new EventEmitter(),
              lineCache: [],
              forceFullLayoutCalc: false,
              renderWindow: {
                screen: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 0
                },
                sdf: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 0
                },
                firstLineIdx: 0,
                numLines: 0,
                valid: false
              },
              elementBounds: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                valid: false
              },
              clippingRect: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                valid: false
              },
              bufferNumFloats: 0,
              bufferNumQuads: 0,
              vertexBuffer: undefined,
              webGlBuffers: null,
              bufferUploaded: false,
              textH: undefined,
              textW: undefined,
              distanceRange: 0,
              trFontFace: undefined,
              isRenderable: false,
              resLineHeight: undefined,
              debugData: {
                updateCount: 0,
                layoutCount: 0,
                lastLayoutNumCharacters: 0,
                layoutSum: 0,
                drawSum: 0,
                drawCount: 0,
                bufferSize: 0
              }
            };
          }
          updateState(state) {
            var trFontFace = state.trFontFace;
            var textH = state.textH,
              lineCache = state.lineCache,
              debugData = state.debugData,
              forceFullLayoutCalc = state.forceFullLayoutCalc;
            debugData.updateCount++;
            if (state.status === "initialState") {
              this.setStatus(state, "loading");
            }
            if (trFontFace === undefined) {
              trFontFace = this.resolveFontFace(state.props);
              state.trFontFace = trFontFace;
              if (trFontFace === undefined) {
                var msg = `SdfTextRenderer: Could not resolve font face for family: '${state.props.fontFamily}'`;
                console.error(msg);
                this.setStatus(state, "failed", new Error(msg));
                return;
              }
              trFontFace.texture.setRenderableOwner(state, true);
            }
            if (trFontFace.loaded === false) {
              trFontFace.once("loaded", () => {
                this.scheduleUpdateState(state);
              });
              return;
            }
            assertTruthy(trFontFace.data);
            assertTruthy(trFontFace.metrics);
            var _state$props = state.props,
              text = _state$props.text,
              fontSize = _state$props.fontSize,
              x = _state$props.x,
              y = _state$props.y,
              contain = _state$props.contain,
              width = _state$props.width,
              height = _state$props.height,
              verticalAlign = _state$props.verticalAlign,
              scrollable = _state$props.scrollable,
              overflowSuffix = _state$props.overflowSuffix,
              maxLines = _state$props.maxLines;
            var scrollY = contain === "both" && scrollable ? state.props.scrollY : 0;
            var renderWindow = state.renderWindow;
            var sdfFontSize = trFontFace.data.info.size;
            var fontSizeRatio = fontSize / sdfFontSize;
            var resLineHeight = state.resLineHeight;
            if (resLineHeight === undefined) {
              var lineHeight = state.props.lineHeight;
              if (lineHeight === undefined) {
                resLineHeight = calcDefaultLineHeight(trFontFace.metrics, fontSize);
              } else {
                resLineHeight = lineHeight;
              }
              state.resLineHeight = resLineHeight;
            }
            var sdfLineHeight = resLineHeight / fontSizeRatio;
            state.distanceRange = fontSizeRatio * trFontFace.data.distanceField.distanceRange;
            var neededLength = text.length * FLOATS_PER_GLYPH;
            var vertexBuffer = state.vertexBuffer;
            if (!vertexBuffer || vertexBuffer.length < neededLength) {
              vertexBuffer = new Float32Array(neededLength * 2);
            }
            var elementBounds = state.elementBounds;
            if (!elementBounds.valid) {
              this.setElementBoundsX(state);
              this.setElementBoundsY(state);
              elementBounds.valid = true;
            }
            if (!forceFullLayoutCalc && renderWindow.valid) {
              var rwScreen = renderWindow.screen;
              if (x + rwScreen.x1 <= elementBounds.x1 && x + rwScreen.x2 >= elementBounds.x2 && y - scrollY + rwScreen.y1 <= elementBounds.y1 && y - scrollY + rwScreen.y2 >= elementBounds.y2) {
                this.setStatus(state, "loaded");
                return;
              }
              renderWindow.valid = false;
              this.setStatus(state, "loading");
            }
            var _state$props2 = state.props,
              offsetY = _state$props2.offsetY,
              textAlign = _state$props2.textAlign;
            if (!renderWindow.valid) {
              var isPossiblyOnScreen = boundsOverlap(elementBounds, this.rendererBounds);
              if (!isPossiblyOnScreen) {
                return;
              }
              setRenderWindow(renderWindow, x, y, scrollY, resLineHeight, contain === "both" ? elementBounds.y2 - elementBounds.y1 : 0, elementBounds, fontSizeRatio);
            }
            var start = getStartConditions(sdfFontSize, sdfLineHeight, trFontFace, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH);
            if (!start) {
              this.setStatus(state, "loaded");
              return;
            }
            var letterSpacing = state.props.letterSpacing;
            var out2 = layoutText(start.lineIndex, start.sdfX, start.sdfY, text, textAlign, width, height, fontSize, resLineHeight, letterSpacing, vertexBuffer, contain, lineCache, renderWindow.sdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines);
            state.bufferUploaded = false;
            state.bufferNumFloats = out2.bufferNumFloats;
            state.bufferNumQuads = out2.bufferNumQuads;
            state.vertexBuffer = vertexBuffer;
            state.renderWindow = renderWindow;
            debugData.lastLayoutNumCharacters = out2.layoutNumCharacters;
            debugData.bufferSize = vertexBuffer.byteLength;
            if (out2.fullyProcessed) {
              state.textW = out2.maxX * fontSizeRatio;
              state.textH = out2.numLines * sdfLineHeight * fontSizeRatio;
            }
            this.setStatus(state, "loaded");
          }
          renderQuads(node) {
            var _trFontFace$data, _state$trFontFace;
            var state = node.trState;
            if (!state.vertexBuffer) {
              return;
            }
            var renderer = this.stage.renderer;
            var _state$props3 = state.props,
              fontSize = _state$props3.fontSize,
              color = _state$props3.color,
              contain = _state$props3.contain,
              scrollable = _state$props3.scrollable,
              zIndex = _state$props3.zIndex,
              debug = _state$props3.debug;
            var scrollY = contain === "both" && scrollable ? state.props.scrollY : 0;
            var _state$textW = state.textW,
              textW = _state$textW === void 0 ? 0 : _state$textW,
              _state$textH = state.textH,
              textH = _state$textH === void 0 ? 0 : _state$textH,
              distanceRange = state.distanceRange,
              vertexBuffer = state.vertexBuffer,
              bufferUploaded = state.bufferUploaded,
              trFontFace = state.trFontFace,
              elementBounds = state.elementBounds;
            var webGlBuffers = state.webGlBuffers;
            if (!webGlBuffers) {
              var glw = renderer.glw;
              var stride = 4 * Float32Array.BYTES_PER_ELEMENT;
              var webGlBuffer = glw.createBuffer();
              state.webGlBuffers = new BufferCollection([{
                buffer: webGlBuffer,
                attributes: {
                  a_position: {
                    name: "a_position",
                    size: 2,
                    // 2 components per iteration
                    type: glw.FLOAT,
                    // the data is 32bit floats
                    normalized: false,
                    // don't normalize the data
                    stride,
                    // 0 = move forward size * sizeof(type) each iteration to get the next position
                    offset: 0
                    // start at the beginning of the buffer
                  },
                  a_textureCoords: {
                    name: "a_textureCoords",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride,
                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                  }
                }
              }]);
              state.bufferUploaded = false;
              assertTruthy(state.webGlBuffers);
              webGlBuffers = state.webGlBuffers;
            }
            if (!bufferUploaded) {
              var _webGlBuffers$getBuff, _webGlBuffers;
              var _glw = renderer.glw;
              var buffer = (_webGlBuffers$getBuff = (_webGlBuffers = webGlBuffers) === null || _webGlBuffers === void 0 ? void 0 : _webGlBuffers.getBuffer("a_textureCoords")) !== null && _webGlBuffers$getBuff !== void 0 ? _webGlBuffers$getBuff : null;
              _glw.arrayBufferData(buffer, vertexBuffer, _glw.STATIC_DRAW);
              state.bufferUploaded = true;
            }
            if (scrollable && contain === "both") {
              assertTruthy(elementBounds.valid);
              var elementRect = convertBoundToRect(elementBounds, tmpRect);
              if (node.clippingRect.valid) {
                state.clippingRect.valid = true;
                node.clippingRect = intersectRect(node.clippingRect, elementRect, state.clippingRect);
              } else {
                state.clippingRect.valid = true;
                node.clippingRect = copyRect(elementRect, state.clippingRect);
              }
            }
            var renderOp = new WebGlRenderOp(renderer, {
              sdfShaderProps: {
                transform: node.globalTransform.getFloatArr(),
                color: mergeColorAlpha(color, node.worldAlpha),
                size: fontSize / (((_trFontFace$data = trFontFace.data) === null || _trFontFace$data === void 0 ? void 0 : _trFontFace$data.info.size) || 0),
                scrollY,
                distanceRange,
                debug: debug.sdfShaderDebug
              },
              sdfBuffers: state.webGlBuffers,
              shader: this.sdfShader,
              alpha: node.worldAlpha,
              clippingRect: node.clippingRect,
              height: textH,
              width: textW,
              rtt: false,
              parentHasRenderTexture: node.parentHasRenderTexture,
              framebufferDimensions: node.framebufferDimensions
            }, 0);
            var texture = (_state$trFontFace = state.trFontFace) === null || _state$trFontFace === void 0 ? void 0 : _state$trFontFace.texture;
            var ctxTexture = texture.ctxTexture;
            renderOp.addTexture(ctxTexture);
            renderOp.length = state.bufferNumFloats;
            renderOp.numQuads = state.bufferNumQuads;
            renderer.addRenderOp(renderOp);
          }
          setIsRenderable(state, renderable) {
            var _state$trFontFace2;
            super.setIsRenderable(state, renderable);
            (_state$trFontFace2 = state.trFontFace) === null || _state$trFontFace2 === void 0 || _state$trFontFace2.texture.setRenderableOwner(state, renderable);
          }
          destroyState(state) {
            var _state$trFontFace3;
            super.destroyState(state);
            (_state$trFontFace3 = state.trFontFace) === null || _state$trFontFace3 === void 0 || _state$trFontFace3.texture.setRenderableOwner(state, false);
          }
          //#endregion Overrides
          resolveFontFace(props) {
            return this.stage.fontManager.resolveFontFace(this.fontFamilyArray, props, "sdf");
          }
          /**
           * Release the loaded SDF font face
           *
           * @param state
           */
          releaseFontFace(state) {
            state.resLineHeight = undefined;
            if (state.trFontFace) {
              state.trFontFace.texture.setRenderableOwner(state, false);
              state.trFontFace = undefined;
            }
          }
          /**
           * Invalidate the layout cache stored in the state. This will cause the text
           * to be re-layed out on the next update.
           *
           * @remarks
           * This also invalidates the visible window cache.
           *
           * @param state
           */
          invalidateLayoutCache(state) {
            state.renderWindow.valid = false;
            state.elementBounds.valid = false;
            state.textH = undefined;
            state.textW = undefined;
            state.lineCache = [];
            this.setStatus(state, "loading");
            this.scheduleUpdateState(state);
          }
          setElementBoundsX(state) {
            var _state$props4 = state.props,
              x = _state$props4.x,
              contain = _state$props4.contain,
              width = _state$props4.width;
            var elementBounds = state.elementBounds;
            elementBounds.x1 = x;
            elementBounds.x2 = contain !== "none" ? x + width : Infinity;
          }
          setElementBoundsY(state) {
            var _state$props5 = state.props,
              y = _state$props5.y,
              contain = _state$props5.contain,
              height = _state$props5.height;
            var elementBounds = state.elementBounds;
            elementBounds.y1 = y;
            elementBounds.y2 = contain === "both" ? y + height : Infinity;
          }
        }
        function isZeroWidthSpace(space) {
          return space === "" || space === "​";
        }
        function getWebFontMetrics(context, fontFace, fontSize) {
          if (fontFace.metrics) {
            return fontFace.metrics;
          }
          var browserMetrics = context.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
          console.warn(`Font metrics not provided for Canvas Web font ${fontFace.fontFamily}. Using fallback values. It is HIGHLY recommended you use the latest version of the Lightning 3 \`msdf-generator\` tool to extract the default metrics for the font and provide them in the Canvas Web font definition.`);
          var metrics;
          if (browserMetrics.actualBoundingBoxDescent && browserMetrics.actualBoundingBoxAscent) {
            metrics = {
              ascender: browserMetrics.actualBoundingBoxAscent / fontSize,
              descender: -browserMetrics.actualBoundingBoxDescent / fontSize,
              lineGap: 0.2
            };
          } else {
            metrics = {
              ascender: 0.8,
              descender: -0.2,
              lineGap: 0.2
            };
          }
          fontFace.metrics = metrics;
          return metrics;
        }
        var MAX_TEXTURE_DIMENSION = 2048;
        function calcHeight(textBaseline, fontSize, lineHeight, numLines, offsetY) {
          var baselineOffset = textBaseline !== "bottom" ? 0.5 * fontSize : 0;
          return lineHeight * (numLines - 1) + baselineOffset + Math.max(lineHeight, fontSize) + (offsetY || 0);
        }
        class LightningTextTextureRenderer {
          constructor(canvas, context) {
            _defineProperty(this, "_canvas", void 0);
            _defineProperty(this, "_context", void 0);
            _defineProperty(this, "_settings", void 0);
            this._canvas = canvas;
            this._context = context;
            this._settings = this.mergeDefaults({});
          }
          set settings(v) {
            this._settings = this.mergeDefaults(v);
          }
          get settings() {
            return this._settings;
          }
          getPrecision() {
            return this._settings.precision;
          }
          setFontProperties() {
            this._context.font = this._getFontSetting();
            this._context.textBaseline = this._settings.textBaseline;
          }
          _getFontSetting() {
            var ff = [this._settings.fontFamily];
            var ffs = [];
            for (var i = 0, n = ff.length; i < n; i++) {
              if (ff[i] === "serif" || ff[i] === "sans-serif") {
                ffs.push(ff[i]);
              } else {
                ffs.push(`"${ff[i]}"`);
              }
            }
            return `${this._settings.fontStyle} ${this._settings.fontSize * this.getPrecision()}px ${ffs.join(",")}`;
          }
          _load() {
            if (document.fonts) {
              var fontSetting = this._getFontSetting();
              try {
                if (!document.fonts.check(fontSetting, this._settings.text)) {
                  return document.fonts.load(fontSetting, this._settings.text).catch(err => {
                    console.warn("[Lightning] Font load error", err, fontSetting);
                  }).then(() => {
                    if (!document.fonts.check(fontSetting, this._settings.text)) {
                      console.warn("[Lightning] Font not found", fontSetting);
                    }
                  });
                }
              } catch (e) {
                console.warn("[Lightning] Can't check font loading for " + fontSetting);
              }
            }
          }
          calculateRenderInfo() {
            var renderInfo = {};
            var precision = this.getPrecision();
            var paddingLeft = this._settings.paddingLeft * precision;
            var paddingRight = this._settings.paddingRight * precision;
            var fontSize = this._settings.fontSize * precision;
            var offsetY = this._settings.offsetY === null ? null : this._settings.offsetY * precision;
            var w = this._settings.w * precision;
            var h = this._settings.h * precision;
            var wordWrapWidth = this._settings.wordWrapWidth * precision;
            var cutSx = this._settings.cutSx * precision;
            var cutEx = this._settings.cutEx * precision;
            var cutSy = this._settings.cutSy * precision;
            var cutEy = this._settings.cutEy * precision;
            var letterSpacing = (this._settings.letterSpacing || 0) * precision;
            var textIndent = this._settings.textIndent * precision;
            var trFontFace = this._settings.trFontFace;
            this.setFontProperties();
            var metrics = getWebFontMetrics(this._context, trFontFace, fontSize);
            var defLineHeight = calcDefaultLineHeight(metrics, fontSize) * precision;
            var lineHeight = this._settings.lineHeight !== null ? this._settings.lineHeight * precision : defLineHeight;
            var maxHeight = this._settings.maxHeight;
            var containedMaxLines = maxHeight !== null && lineHeight > 0 ? Math.floor(maxHeight / lineHeight) : 0;
            var setMaxLines = this._settings.maxLines;
            var calcMaxLines = containedMaxLines > 0 && setMaxLines > 0 ? Math.min(containedMaxLines, setMaxLines) : Math.max(containedMaxLines, setMaxLines);
            var width = w || 2048 / this.getPrecision();
            var innerWidth = width - paddingLeft;
            if (innerWidth < 10) {
              width += 10 - innerWidth;
              innerWidth = 10;
            }
            if (!wordWrapWidth) {
              wordWrapWidth = innerWidth;
            }
            if (this._settings.textOverflow && !this._settings.wordWrap) {
              var suffix;
              switch (this._settings.textOverflow) {
                case "clip":
                  suffix = "";
                  break;
                case "ellipsis":
                  suffix = this._settings.overflowSuffix;
                  break;
                default:
                  suffix = this._settings.textOverflow;
              }
              this._settings.text = this.wrapWord(this._settings.text, wordWrapWidth - textIndent, suffix);
            }
            var linesInfo;
            if (this._settings.wordWrap) {
              linesInfo = this.wrapText(this._settings.text, wordWrapWidth, letterSpacing, textIndent);
            } else {
              linesInfo = {
                l: this._settings.text.split(/(?:\r\n|\r|\n)/),
                n: []
              };
              var n = linesInfo.l.length;
              for (var i = 0; i < n - 1; i++) {
                linesInfo.n.push(i);
              }
            }
            var lines = linesInfo.l;
            if (calcMaxLines && lines.length > calcMaxLines) {
              var usedLines = lines.slice(0, calcMaxLines);
              var otherLines = null;
              if (this._settings.overflowSuffix) {
                var w2 = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0;
                var al = this.wrapText(usedLines[usedLines.length - 1], wordWrapWidth - w2, letterSpacing, textIndent);
                usedLines[usedLines.length - 1] = `${al.l[0]}${this._settings.overflowSuffix}`;
                otherLines = [al.l.length > 1 ? al.l[1] : ""];
              } else {
                otherLines = [""];
              }
              var _i24;
              var _n = lines.length;
              var j = 0;
              var m = linesInfo.n.length;
              for (_i24 = calcMaxLines; _i24 < _n; _i24++) {
                otherLines[j] += `${otherLines[j] ? " " : ""}${lines[_i24]}`;
                if (_i24 + 1 < m && linesInfo.n[_i24 + 1]) {
                  j++;
                }
              }
              renderInfo.remainingText = otherLines.join("\n");
              renderInfo.moreTextLines = true;
              lines = usedLines;
            } else {
              renderInfo.moreTextLines = false;
              renderInfo.remainingText = "";
            }
            var maxLineWidth = 0;
            var lineWidths = [];
            for (var _i25 = 0; _i25 < lines.length; _i25++) {
              var lineWidth = this.measureText(lines[_i25], letterSpacing) + (_i25 === 0 ? textIndent : 0);
              lineWidths.push(lineWidth);
              maxLineWidth = Math.max(maxLineWidth, lineWidth);
            }
            renderInfo.lineWidths = lineWidths;
            if (!w) {
              width = maxLineWidth + paddingLeft + paddingRight;
              innerWidth = maxLineWidth;
            }
            if (this._settings.wordWrap && w > maxLineWidth && this._settings.textAlign === "left" && lines.length === 1) {
              width = maxLineWidth + paddingLeft + paddingRight;
            }
            var height;
            if (h) {
              height = h;
            } else {
              height = calcHeight(this._settings.textBaseline, fontSize, lineHeight, lines.length, offsetY);
            }
            if (offsetY === null) {
              offsetY = fontSize;
            }
            renderInfo.w = width;
            renderInfo.h = height;
            renderInfo.lines = lines;
            renderInfo.precision = precision;
            if (!width) {
              width = 1;
            }
            if (!height) {
              height = 1;
            }
            if (cutSx || cutEx) {
              width = Math.min(width, cutEx - cutSx);
            }
            if (cutSy || cutEy) {
              height = Math.min(height, cutEy - cutSy);
            }
            renderInfo.width = width;
            renderInfo.innerWidth = innerWidth;
            renderInfo.height = height;
            renderInfo.fontSize = fontSize;
            renderInfo.cutSx = cutSx;
            renderInfo.cutSy = cutSy;
            renderInfo.cutEx = cutEx;
            renderInfo.cutEy = cutEy;
            renderInfo.lineHeight = lineHeight;
            renderInfo.defLineHeight = defLineHeight;
            renderInfo.lineWidths = lineWidths;
            renderInfo.offsetY = offsetY;
            renderInfo.paddingLeft = paddingLeft;
            renderInfo.paddingRight = paddingRight;
            renderInfo.letterSpacing = letterSpacing;
            renderInfo.textIndent = textIndent;
            renderInfo.metrics = metrics;
            return renderInfo;
          }
          draw(renderInfo, linesOverride) {
            var precision = this.getPrecision();
            var lines = (linesOverride === null || linesOverride === void 0 ? void 0 : linesOverride.lines) || renderInfo.lines;
            var lineWidths = (linesOverride === null || linesOverride === void 0 ? void 0 : linesOverride.lineWidths) || renderInfo.lineWidths;
            var height = linesOverride ? calcHeight(this._settings.textBaseline, renderInfo.fontSize, renderInfo.lineHeight, linesOverride.lines.length, this._settings.offsetY === null ? null : this._settings.offsetY * precision) : renderInfo.height;
            this._canvas.width = Math.min(Math.ceil(renderInfo.width + this._settings.textRenderIssueMargin), MAX_TEXTURE_DIMENSION);
            this._canvas.height = Math.min(Math.ceil(height), MAX_TEXTURE_DIMENSION);
            this.setFontProperties();
            if (renderInfo.fontSize >= 128) {
              this._context.globalAlpha = 0.01;
              this._context.fillRect(0, 0, 0.01, 0.01);
              this._context.globalAlpha = 1;
            }
            if (renderInfo.cutSx || renderInfo.cutSy) {
              this._context.translate(-renderInfo.cutSx, -renderInfo.cutSy);
            }
            var linePositionX;
            var linePositionY;
            var drawLines = [];
            var metrics = renderInfo.metrics;
            var ascenderPx = metrics ? metrics.ascender * renderInfo.fontSize : renderInfo.fontSize;
            var bareLineHeightPx = (metrics.ascender - metrics.descender) * renderInfo.fontSize;
            for (var i = 0, n = lines.length; i < n; i++) {
              linePositionX = i === 0 ? renderInfo.textIndent : 0;
              linePositionY = i * renderInfo.lineHeight + ascenderPx;
              if (this._settings.verticalAlign == "middle") {
                linePositionY += (renderInfo.lineHeight - bareLineHeightPx) / 2;
              } else if (this._settings.verticalAlign == "bottom") {
                linePositionY += renderInfo.lineHeight - bareLineHeightPx;
              }
              if (this._settings.textAlign === "right") {
                linePositionX += renderInfo.innerWidth - lineWidths[i];
              } else if (this._settings.textAlign === "center") {
                linePositionX += (renderInfo.innerWidth - lineWidths[i]) / 2;
              }
              linePositionX += renderInfo.paddingLeft;
              drawLines.push({
                text: lines[i],
                x: linePositionX,
                y: linePositionY,
                w: lineWidths[i]
              });
            }
            if (this._settings.highlight) {
              var color = this._settings.highlightColor;
              var hlHeight = this._settings.highlightHeight * precision || renderInfo.fontSize * 1.5;
              var offset = this._settings.highlightOffset * precision;
              var hlPaddingLeft = this._settings.highlightPaddingLeft !== null ? this._settings.highlightPaddingLeft * precision : renderInfo.paddingLeft;
              var hlPaddingRight = this._settings.highlightPaddingRight !== null ? this._settings.highlightPaddingRight * precision : renderInfo.paddingRight;
              this._context.fillStyle = getRgbaString(color);
              for (var _i26 = 0; _i26 < drawLines.length; _i26++) {
                var drawLine = drawLines[_i26];
                this._context.fillRect(drawLine.x - hlPaddingLeft, drawLine.y - renderInfo.offsetY + offset, drawLine.w + hlPaddingRight + hlPaddingLeft, hlHeight);
              }
            }
            var prevShadowSettings = null;
            if (this._settings.shadow) {
              prevShadowSettings = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur];
              this._context.shadowColor = getRgbaString(this._settings.shadowColor);
              this._context.shadowOffsetX = this._settings.shadowOffsetX * precision;
              this._context.shadowOffsetY = this._settings.shadowOffsetY * precision;
              this._context.shadowBlur = this._settings.shadowBlur * precision;
            }
            this._context.fillStyle = getRgbaString(this._settings.textColor);
            for (var _i27 = 0, _n2 = drawLines.length; _i27 < _n2; _i27++) {
              var _drawLine = drawLines[_i27];
              if (renderInfo.letterSpacing === 0) {
                this._context.fillText(_drawLine.text, _drawLine.x, _drawLine.y);
              } else {
                var textSplit = _drawLine.text.split("");
                var x = _drawLine.x;
                for (var i2 = 0, j = textSplit.length; i2 < j; i2++) {
                  this._context.fillText(textSplit[i2], x, _drawLine.y);
                  x += this.measureText(textSplit[i2], renderInfo.letterSpacing);
                }
              }
            }
            if (prevShadowSettings) {
              this._context.shadowColor = prevShadowSettings[0];
              this._context.shadowOffsetX = prevShadowSettings[1];
              this._context.shadowOffsetY = prevShadowSettings[2];
              this._context.shadowBlur = prevShadowSettings[3];
            }
            if (renderInfo.cutSx || renderInfo.cutSy) {
              this._context.translate(renderInfo.cutSx, renderInfo.cutSy);
            }
          }
          wrapWord(word, wordWrapWidth, suffix) {
            var suffixWidth = this._context.measureText(suffix).width;
            var wordLen = word.length;
            var wordWidth = this._context.measureText(word).width;
            if (wordWidth <= wordWrapWidth) {
              return word;
            }
            var cutoffIndex = Math.floor(wordWrapWidth * wordLen / wordWidth);
            var truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
            if (truncWordWidth > wordWrapWidth) {
              while (cutoffIndex > 0) {
                truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
                if (truncWordWidth > wordWrapWidth) {
                  cutoffIndex -= 1;
                } else {
                  break;
                }
              }
            } else {
              while (cutoffIndex < wordLen) {
                truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
                if (truncWordWidth < wordWrapWidth) {
                  cutoffIndex += 1;
                } else {
                  cutoffIndex -= 1;
                  break;
                }
              }
            }
            return word.substring(0, cutoffIndex) + (wordWrapWidth >= suffixWidth ? suffix : "");
          }
          /**
           * Applies newlines to a string to have it optimally fit into the horizontal
           * bounds set by the Text object's wordWrapWidth property.
           */
          wrapText(text, wordWrapWidth, letterSpacing) {
            var indent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var spaceRegex = / |\u200B/g;
            var lines = text.split(/\r?\n/g);
            var allLines = [];
            var realNewlines = [];
            for (var i = 0; i < lines.length; i++) {
              var resultLines = [];
              var result = "";
              var spaceLeft = wordWrapWidth - indent;
              var words = lines[i].split(spaceRegex);
              var spaces = lines[i].match(spaceRegex) || [];
              for (var j = 0; j < words.length; j++) {
                var space = spaces[j - 1] || "";
                var word = words[j];
                var wordWidth = this.measureText(word, letterSpacing);
                var wordWidthWithSpace = isZeroWidthSpace(space) ? wordWidth : wordWidth + this.measureText(space, letterSpacing);
                if (j === 0 || wordWidthWithSpace > spaceLeft) {
                  if (j > 0) {
                    resultLines.push(result);
                    result = "";
                  }
                  result += word;
                  spaceLeft = wordWrapWidth - wordWidth - (j === 0 ? indent : 0);
                } else {
                  spaceLeft -= wordWidthWithSpace;
                  result += space + word;
                }
              }
              resultLines.push(result);
              result = "";
              allLines = allLines.concat(resultLines);
              if (i < lines.length - 1) {
                realNewlines.push(allLines.length);
              }
            }
            return {
              l: allLines,
              n: realNewlines
            };
          }
          measureText(word) {
            var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (!space) {
              return this._context.measureText(word).width;
            }
            return word.split("").reduce((acc, char) => {
              if (isZeroWidthSpace(char)) {
                return acc;
              }
              return acc + this._context.measureText(char).width + space;
            }, 0);
          }
          mergeDefaults(settings) {
            return _objectSpread({
              text: "",
              w: 0,
              h: 0,
              fontStyle: "normal",
              fontSize: 40,
              fontFamily: null,
              trFontFace: null,
              wordWrap: true,
              wordWrapWidth: 0,
              wordBreak: false,
              textOverflow: "",
              lineHeight: null,
              textBaseline: "alphabetic",
              textAlign: "left",
              verticalAlign: "top",
              offsetY: null,
              maxLines: 0,
              maxHeight: null,
              overflowSuffix: "...",
              textColor: [1, 1, 1, 1],
              paddingLeft: 0,
              paddingRight: 0,
              shadow: false,
              shadowColor: [0, 0, 0, 1],
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              highlight: false,
              highlightHeight: 0,
              highlightColor: [0, 0, 0, 1],
              highlightOffset: 0,
              highlightPaddingLeft: 0,
              highlightPaddingRight: 0,
              letterSpacing: 0,
              textIndent: 0,
              cutSx: 0,
              cutEx: 0,
              cutSy: 0,
              cutEy: 0,
              advancedRenderer: false,
              fontBaselineRatio: 0,
              precision: 1,
              textRenderIssueMargin: 0
            }, settings);
          }
        }
        var resolvedGlobal = typeof self === "undefined" ? globalThis : self;
        var globalFontSet = ((_resolvedGlobal$docum = resolvedGlobal.document) === null || _resolvedGlobal$docum === void 0 ? void 0 : _resolvedGlobal$docum.fonts) || resolvedGlobal.fonts;
        function getFontCssString(props) {
          var fontFamily = props.fontFamily,
            fontStyle = props.fontStyle,
            fontWeight = props.fontWeight,
            fontStretch = props.fontStretch,
            fontSize = props.fontSize;
          return [fontStyle, fontWeight, fontStretch, `${fontSize}px`, fontFamily].join(" ");
        }
        class CanvasTextRenderer extends TextRenderer {
          constructor(stage) {
            super(stage);
            _defineProperty(this, "canvas", void 0);
            _defineProperty(this, "context", void 0);
            /**
             * Font family map used to store web font faces that were added to the
             * canvas text renderer.
             */
            _defineProperty(this, "fontFamilies", {});
            _defineProperty(this, "fontFamilyArray", [this.fontFamilies]);
            _defineProperty(this, "type", "canvas");
            _defineProperty(this, "loadFont", state => {
              var cssString = getFontCssString(state.props);
              var trFontFace = this.stage.fontManager.resolveFontFace(this.fontFamilyArray, state.props, "canvas");
              state.fontInfo = {
                fontFace: trFontFace,
                cssString,
                // TODO: For efficiency we would use this here but it's not reliable on WPE -> document.fonts.check(cssString),
                loaded: false
              };
              if (!state.fontInfo.loaded) {
                globalFontSet.load(cssString).then(this.onFontLoaded.bind(this, state, cssString)).catch(this.onFontLoadError.bind(this, state, cssString));
                return;
              }
            });
            if (typeof OffscreenCanvas !== "undefined") {
              this.canvas = new OffscreenCanvas(0, 0);
            } else {
              this.canvas = document.createElement("canvas");
            }
            var context = this.canvas.getContext("2d", {
              willReadFrequently: true
            });
            if (!context) {
              this.canvas = document.createElement("canvas");
              context = this.canvas.getContext("2d", {
                willReadFrequently: true
              });
            }
            this.context = context;
            this.addFontFace(new WebTrFontFace({
              fontFamily: "sans-serif",
              descriptors: {},
              fontUrl: ""
            }));
          }
          //#region Overrides
          getPropertySetters() {
            return {
              fontFamily: (state, value) => {
                state.props.fontFamily = value;
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              fontWeight: (state, value) => {
                state.props.fontWeight = value;
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              fontStyle: (state, value) => {
                state.props.fontStyle = value;
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              fontStretch: (state, value) => {
                state.props.fontStretch = value;
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              fontSize: (state, value) => {
                state.props.fontSize = value;
                state.fontInfo = undefined;
                this.invalidateLayoutCache(state);
              },
              text: (state, value) => {
                state.props.text = value;
                this.invalidateLayoutCache(state);
              },
              textAlign: (state, value) => {
                state.props.textAlign = value;
                this.invalidateLayoutCache(state);
              },
              color: (state, value) => {
                state.props.color = value;
                this.invalidateLayoutCache(state);
              },
              x: (state, value) => {
                state.props.x = value;
              },
              y: (state, value) => {
                state.props.y = value;
              },
              contain: (state, value) => {
                state.props.contain = value;
                this.invalidateLayoutCache(state);
              },
              width: (state, value) => {
                state.props.width = value;
                if (state.props.contain !== "none") {
                  this.invalidateLayoutCache(state);
                }
              },
              height: (state, value) => {
                state.props.height = value;
                if (state.props.contain === "both") {
                  this.invalidateLayoutCache(state);
                }
              },
              offsetY: (state, value) => {
                state.props.offsetY = value;
                this.invalidateLayoutCache(state);
              },
              scrollY: (state, value) => {
                state.props.scrollY = value;
              },
              letterSpacing: (state, value) => {
                state.props.letterSpacing = value;
                this.invalidateLayoutCache(state);
              },
              lineHeight: (state, value) => {
                state.props.lineHeight = value;
                this.invalidateLayoutCache(state);
              },
              maxLines: (state, value) => {
                state.props.maxLines = value;
                this.invalidateLayoutCache(state);
              },
              textBaseline: (state, value) => {
                state.props.textBaseline = value;
                this.invalidateLayoutCache(state);
              },
              verticalAlign: (state, value) => {
                state.props.verticalAlign = value;
                this.invalidateLayoutCache(state);
              },
              overflowSuffix: (state, value) => {
                state.props.overflowSuffix = value;
                this.invalidateLayoutCache(state);
              }
            };
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          canRenderFont(props) {
            return true;
          }
          isFontFaceSupported(fontFace) {
            return fontFace instanceof WebTrFontFace;
          }
          addFontFace(fontFace) {
            var fontFamily = fontFace.fontFamily;
            if (fontFamily !== "sans-serif") {
              globalFontSet.add(fontFace.fontFace);
            }
            var faceSet = this.fontFamilies[fontFamily];
            if (!faceSet) {
              faceSet = /* @__PURE__ */new Set();
              this.fontFamilies[fontFamily] = faceSet;
            }
            faceSet.add(fontFace);
          }
          createState(props, node) {
            return {
              node,
              props,
              status: "initialState",
              updateScheduled: false,
              emitter: new EventEmitter(),
              textureNode: undefined,
              lightning2TextRenderer: new LightningTextTextureRenderer(this.canvas, this.context),
              renderInfo: undefined,
              forceFullLayoutCalc: false,
              textW: 0,
              textH: 0,
              fontInfo: undefined,
              isRenderable: false,
              debugData: {
                updateCount: 0,
                layoutCount: 0,
                drawCount: 0,
                lastLayoutNumCharacters: 0,
                layoutSum: 0,
                drawSum: 0,
                bufferSize: 0
              }
            };
          }
          updateState(state) {
            if (state.status === "initialState") {
              this.setStatus(state, "loading");
            }
            if (state.status === "loaded") {
              return;
            }
            if (!state.fontInfo) {
              return this.loadFont(state);
            }
            if (!state.fontInfo.loaded) {
              return;
            }
            if (!state.renderInfo) {
              state.renderInfo = this.calculateRenderInfo(state);
              state.textH = state.renderInfo.lineHeight * state.renderInfo.lines.length;
              state.textW = state.renderInfo.width;
              this.renderSingleCanvasPage(state);
            }
          }
          renderSingleCanvasPage(state) {
            assertTruthy(state.renderInfo);
            var node = state.node;
            var texture = this.stage.txManager.createTexture("ImageTexture", {
              premultiplyAlpha: true,
              src: function (lightning2TextRenderer, renderInfo) {
                lightning2TextRenderer.draw(renderInfo, {
                  lines: renderInfo.lines,
                  lineWidths: renderInfo.lineWidths
                });
                if (this.canvas.width === 0 || this.canvas.height === 0) {
                  return null;
                }
                return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
              }.bind(this, state.lightning2TextRenderer, state.renderInfo)
            });
            if (state.textureNode) {
              state.textureNode.texture = texture;
              state.textureNode.alpha = getNormalizedAlphaComponent(state.props.color);
            } else {
              var textureNode = this.stage.createNode({
                parent: node,
                texture,
                autosize: true,
                // The alpha channel of the color is ignored when rasterizing the text
                // texture so we need to pass it directly to the texture node.
                alpha: getNormalizedAlphaComponent(state.props.color)
              });
              state.textureNode = textureNode;
            }
            this.setStatus(state, "loaded");
          }
          calculateRenderInfo(state) {
            var _state$fontInfo, _state$props$lineHeig;
            state.lightning2TextRenderer.settings = {
              text: state.props.text,
              textAlign: state.props.textAlign,
              fontFamily: state.props.fontFamily,
              trFontFace: (_state$fontInfo = state.fontInfo) === null || _state$fontInfo === void 0 ? void 0 : _state$fontInfo.fontFace,
              fontSize: state.props.fontSize,
              fontStyle: [state.props.fontStretch, state.props.fontStyle, state.props.fontWeight].join(" "),
              textColor: getNormalizedRgbaComponents(state.props.color),
              offsetY: state.props.offsetY,
              wordWrap: state.props.contain !== "none",
              wordWrapWidth: state.props.contain === "none" ? undefined : state.props.width,
              letterSpacing: state.props.letterSpacing,
              lineHeight: (_state$props$lineHeig = state.props.lineHeight) !== null && _state$props$lineHeig !== void 0 ? _state$props$lineHeig : null,
              maxLines: state.props.maxLines,
              maxHeight: state.props.contain === "both" ? state.props.height - state.props.offsetY : null,
              textBaseline: state.props.textBaseline,
              verticalAlign: state.props.verticalAlign,
              overflowSuffix: state.props.overflowSuffix,
              w: state.props.contain !== "none" ? state.props.width : undefined
            };
            state.renderInfo = state.lightning2TextRenderer.calculateRenderInfo();
            return state.renderInfo;
          }
          renderQuads() {
            return;
          }
          destroyState(state) {
            if (state.status === "destroyed") {
              return;
            }
            super.destroyState(state);
            if (state.textureNode) {
              state.textureNode.destroy();
              delete state.textureNode;
            }
            delete state.renderInfo;
          }
          //#endregion Overrides
          /**
           * Invalidate the layout cache stored in the state. This will cause the text
           * to be re-rendered on the next update.
           *
           * @remarks
           * This also invalidates the visible window cache.
           *
           * @param state
           */
          invalidateLayoutCache(state) {
            state.renderInfo = undefined;
            this.setStatus(state, "loading");
            this.scheduleUpdateState(state);
          }
          onFontLoaded(state, cssString) {
            var _state$fontInfo2;
            if (cssString !== ((_state$fontInfo2 = state.fontInfo) === null || _state$fontInfo2 === void 0 ? void 0 : _state$fontInfo2.cssString) || !state.fontInfo) {
              return;
            }
            state.fontInfo.loaded = true;
            this.scheduleUpdateState(state);
          }
          onFontLoadError(state, cssString, error) {
            var _state$fontInfo3;
            if (cssString !== ((_state$fontInfo3 = state.fontInfo) === null || _state$fontInfo3 === void 0 ? void 0 : _state$fontInfo3.cssString) || !state.fontInfo) {
              return;
            }
            state.fontInfo.loaded = true;
            console.error(`CanvasTextRenderer: Error loading font '${state.fontInfo.cssString}'`, error);
            this.scheduleUpdateState(state);
          }
        }
        var WHITE = {
          isWhite: true,
          a: 1,
          r: 255,
          g: 255,
          b: 255
        };
        function parseColor(abgr) {
          if (abgr === 4294967295) {
            return WHITE;
          }
          var a = (abgr >>> 24 & 255) / 255;
          var b = abgr >>> 16 & 255 & 255;
          var g = abgr >>> 8 & 255 & 255;
          var r = abgr & 255 & 255;
          return {
            isWhite: false,
            a,
            r,
            g,
            b
          };
        }
        function parseToAbgrString(abgr) {
          var a = (abgr >>> 24 & 255) / 255;
          var b = abgr >>> 16 & 255 & 255;
          var g = abgr >>> 8 & 255 & 255;
          var r = abgr & 255 & 255;
          return `rgba(${r},${g},${b},${a})`;
        }
        function parseToRgbaString(rgba) {
          var r = rgba >>> 24 & 255;
          var g = rgba >>> 16 & 255 & 255;
          var b = rgba >>> 8 & 255 & 255;
          var a = (rgba & 255 & 255) / 255;
          return `rgba(${r},${g},${b},${a})`;
        }
        function formatRgba(_ref48) {
          var a = _ref48.a,
            r = _ref48.r,
            g = _ref48.g,
            b = _ref48.b;
          return `rgba(${r},${g},${b},${a})`;
        }
        class CanvasTexture extends CoreContextTexture {
          constructor() {
            super(...arguments);
            _defineProperty(this, "image", void 0);
            _defineProperty(this, "tintCache", void 0);
          }
          load() {
            this.textureSource.setState("loading");
            this.onLoadRequest().then(size => {
              this.textureSource.setState("loaded", size);
              this.textureSource.freeTextureData();
              this.updateMemSize();
            }).catch(err => {
              this.textureSource.setState("failed", err);
              this.textureSource.freeTextureData();
            });
          }
          free() {
            this.image = undefined;
            this.tintCache = undefined;
            this.textureSource.setState("freed");
            this.setTextureMemUse(0);
            this.textureSource.freeTextureData();
          }
          updateMemSize() {
            var mult = this.tintCache ? 8 : 4;
            if (this.textureSource.dimensions) {
              var _this$textureSource$d = this.textureSource.dimensions,
                width = _this$textureSource$d.width,
                height = _this$textureSource$d.height;
              this.setTextureMemUse(width * height * mult);
            }
          }
          hasImage() {
            return this.image !== undefined;
          }
          getImage(color) {
            var _this$tintCache;
            var image = this.image;
            if (color.isWhite) {
              if (this.tintCache) {
                this.tintCache = undefined;
                this.updateMemSize();
              }
              return image;
            }
            var key = formatRgba(color);
            if (((_this$tintCache = this.tintCache) === null || _this$tintCache === void 0 ? void 0 : _this$tintCache.key) === key) {
              return this.tintCache.image;
            }
            var tintedImage = this.tintTexture(image, key);
            this.tintCache = {
              key,
              image: tintedImage
            };
            this.updateMemSize();
            return tintedImage;
          }
          tintTexture(source, color) {
            var width = source.width,
              height = source.height;
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.fillStyle = color;
              ctx.globalCompositeOperation = "copy";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "multiply";
              ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height);
              ctx.globalCompositeOperation = "destination-in";
              ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height);
            }
            return canvas;
          }
          onLoadRequest() {
            var _this17 = this;
            return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var _this17$textureSource;
              var data, canvas, ctx;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    assertTruthy((_this17$textureSource = _this17.textureSource) === null || _this17$textureSource === void 0 || (_this17$textureSource = _this17$textureSource.textureData) === null || _this17$textureSource === void 0 ? void 0 : _this17$textureSource.data);
                    data = _this17.textureSource.textureData.data;
                    if (!(data instanceof ImageData)) {
                      _context19.next = 12;
                      break;
                    }
                    canvas = document.createElement("canvas");
                    canvas.width = data.width;
                    canvas.height = data.height;
                    ctx = canvas.getContext("2d");
                    if (ctx) ctx.putImageData(data, 0, 0);
                    _this17.image = canvas;
                    return _context19.abrupt("return", {
                      width: data.width,
                      height: data.height
                    });
                  case 12:
                    if (!(typeof ImageBitmap !== "undefined" && data instanceof ImageBitmap || data instanceof HTMLImageElement)) {
                      _context19.next = 15;
                      break;
                    }
                    _this17.image = data;
                    return _context19.abrupt("return", {
                      width: data.width,
                      height: data.height
                    });
                  case 15:
                    return _context19.abrupt("return", {
                      width: 0,
                      height: 0
                    });
                  case 16:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19);
            }))();
          }
        }
        class CanvasShaderNode extends CoreShaderNode {
          constructor(shaderKey, config, stage, props) {
            super(shaderKey, config, stage, props);
            _defineProperty(this, "updater", undefined);
            _defineProperty(this, "valueKey", "");
            _defineProperty(this, "computed", {});
            _defineProperty(this, "applySNR", void 0);
            _defineProperty(this, "render", void 0);
            this.applySNR = config.saveAndRestore || false;
            this.render = config.render;
            if (config.update !== undefined) {
              this.updater = config.update;
              if (this.props === undefined) {
                this.updater(this.node, this.props);
                return;
              }
              this.update = () => {
                var prevKey = this.valueKey;
                this.valueKey = "";
                for (var _key29 in this.resolvedProps) {
                  this.valueKey += `${_key29}:${this.resolvedProps[_key29]};`;
                }
                if (prevKey === this.valueKey) {
                  return;
                }
                if (prevKey.length > 0) {
                  this.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                }
                var computed = this.stage.shManager.getShaderValues(this.valueKey);
                if (computed !== undefined) {
                  this.computed = computed;
                }
                this.computed = {};
                this.updater(this.node);
                this.stage.shManager.setShaderValues(this.valueKey, this.computed);
              };
            }
          }
          toColorString(rgba) {
            return this.stage.renderer.getParsedColor(rgba, true);
          }
        }
        class CanvasRenderer extends CoreRenderer {
          constructor(options) {
            super(options);
            _defineProperty(this, "context", void 0);
            _defineProperty(this, "canvas", void 0);
            _defineProperty(this, "pixelRatio", void 0);
            _defineProperty(this, "clearColor", void 0);
            _defineProperty(this, "renderToTextureActive", false);
            _defineProperty(this, "activeRttNode", null);
            _defineProperty(this, "parsedColorCache", /* @__PURE__ */new Map());
            this.mode = "canvas";
            var canvas = options.canvas;
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
            this.pixelRatio = this.stage.pixelRatio;
            this.clearColor = this.getParsedColor(this.stage.clearColor);
          }
          reset() {
            this.canvas.width = this.canvas.width;
            var ctx = this.context;
            if (this.clearColor) {
              ctx.fillStyle = this.clearColor;
              ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            }
            ctx.scale(this.pixelRatio, this.pixelRatio);
          }
          render() {}
          addQuad(quad) {
            var _texture2;
            var ctx = this.context;
            var tx = quad.tx,
              ty = quad.ty,
              ta = quad.ta,
              tb = quad.tb,
              tc = quad.tc,
              td = quad.td,
              clippingRect = quad.clippingRect;
            var texture = quad.texture;
            var textureType = (_texture2 = texture) === null || _texture2 === void 0 ? void 0 : _texture2.type;
            if (textureType !== TextureType.image && textureType !== TextureType.color && textureType !== TextureType.subTexture && textureType !== TextureType.noise) {
              return;
            }
            if (texture) {
              if (texture instanceof SubTexture) {
                texture = texture.parentTexture;
              }
              if (texture.state === "freed") {
                return;
              }
              if (texture.state !== "loaded") {
                return;
              }
            }
            var hasTransform = ta !== 1;
            var hasClipping = clippingRect.width !== 0 && clippingRect.height !== 0;
            var hasShader = quad.shader !== null;
            var saveAndRestore = hasTransform === true || hasClipping === true;
            if (hasShader === true) {
              saveAndRestore = saveAndRestore || quad.shader.applySNR;
            }
            if (saveAndRestore) {
              ctx.save();
            }
            if (hasClipping === true) {
              var path = new Path2D();
              var x = clippingRect.x,
                y = clippingRect.y,
                width = clippingRect.width,
                height = clippingRect.height;
              path.rect(x, y, width, height);
              ctx.clip(path);
            }
            if (hasTransform === true) {
              var scale = this.pixelRatio;
              ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale);
              ctx.scale(scale, scale);
              ctx.translate(-tx, -ty);
            }
            if (hasShader === true) {
              var renderContext = () => {
                this.renderContext(quad);
              };
              quad.shader.render(ctx, quad, renderContext);
              renderContext = null;
            } else {
              this.renderContext(quad);
            }
            if (saveAndRestore) {
              ctx.restore();
            }
          }
          renderContext(quad) {
            var _quad$texture, _quad$texture2;
            var color = quad.colorTl;
            var textureType = (_quad$texture = quad.texture) === null || _quad$texture === void 0 ? void 0 : _quad$texture.type;
            if ((textureType === TextureType.image || textureType === TextureType.subTexture || textureType === TextureType.noise) && (_quad$texture2 = quad.texture) !== null && _quad$texture2 !== void 0 && _quad$texture2.ctxTexture) {
              var _tintColor$a;
              var tintColor = parseColor(color);
              var image = quad.texture.ctxTexture.getImage(tintColor);
              this.context.globalAlpha = (_tintColor$a = tintColor.a) !== null && _tintColor$a !== void 0 ? _tintColor$a : quad.alpha;
              if (textureType === TextureType.subTexture) {
                this.context.drawImage(image, quad.texture.props.x, quad.texture.props.y, quad.texture.props.width, quad.texture.props.height, quad.tx, quad.ty, quad.width, quad.height);
              } else {
                try {
                  this.context.drawImage(image, quad.tx, quad.ty, quad.width, quad.height);
                } catch (error) {}
              }
              this.context.globalAlpha = 1;
              return;
            }
            var hasGradient = quad.colorTl !== quad.colorTr || quad.colorTl !== quad.colorBr;
            if (textureType === TextureType.color && hasGradient) {
              var endX = quad.tx;
              var endY = quad.ty;
              var endColor;
              if (quad.colorTl === quad.colorTr) {
                endX = quad.tx;
                endY = quad.ty + quad.height;
                endColor = quad.colorBr;
              } else {
                endX = quad.tx + quad.width;
                endY = quad.ty;
                endColor = quad.colorTr;
              }
              var gradient = this.context.createLinearGradient(quad.tx, quad.ty, endX, endY);
              gradient.addColorStop(0, this.getParsedColor(color));
              gradient.addColorStop(1, this.getParsedColor(endColor));
              this.context.fillStyle = gradient;
              this.context.fillRect(quad.tx, quad.ty, quad.width, quad.height);
            } else if (textureType === TextureType.color) {
              this.context.fillStyle = this.getParsedColor(color);
              this.context.fillRect(quad.tx, quad.ty, quad.width, quad.height);
            }
          }
          createShaderNode(shaderKey, shaderType, props) {
            return new CanvasShaderNode(shaderKey, shaderType, this.stage, props);
          }
          createShaderProgram(shaderConfig) {
            return null;
          }
          supportsShaderType(shaderType) {
            return shaderType.render !== undefined;
          }
          createCtxTexture(textureSource) {
            return new CanvasTexture(this.stage.txMemManager, textureSource);
          }
          renderRTTNodes() {}
          removeRTTNode(node) {}
          renderToTexture(node) {}
          getBufferInfo() {
            return null;
          }
          getQuadCount() {
            return null;
          }
          getParsedColor(color) {
            var isRGBA = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var out = this.parsedColorCache.get(color);
            if (out !== undefined) {
              return out;
            }
            if (isRGBA) {
              out = parseToRgbaString(color);
            } else {
              out = parseToAbgrString(color);
            }
            this.parsedColorCache.set(color, out);
            return out;
          }
          /**
           * Updates the clear color of the canvas renderer.
           *
           * @param color - The color to set as the clear color.
           */
          updateClearColor(color) {
            this.clearColor = this.getParsedColor(color);
          }
          getDefaultShaderNode() {
            return null;
          }
        }
        var voidFn = () => undefined;
        var isServer = false;
        function createBeforeLeave() {
          var listeners = new Set();
          function subscribe(listener) {
            listeners.add(listener);
            return () => listeners.delete(listener);
          }
          var ignore = false;
          function confirm(to, options) {
            if (ignore) return !(ignore = false);
            var e = {
              to,
              options,
              defaultPrevented: false,
              preventDefault: () => e.defaultPrevented = true
            };
            var _iterator21 = _createForOfIteratorHelper(listeners),
              _step21;
            try {
              var _loop10 = function _loop10() {
                var l = _step21.value;
                l.listener(_objectSpread(_objectSpread({}, e), {}, {
                  from: l.location,
                  retry: force => {
                    force && (ignore = true);
                    l.navigate(to, _objectSpread(_objectSpread({}, options), {}, {
                      resolve: false
                    }));
                  }
                }));
              };
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                _loop10();
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
            return !e.defaultPrevented;
          }
          return {
            subscribe,
            confirm
          };
        }
        // The following supports browser initiated blocking (eg back/forward)
        var depth;
        function saveCurrentDepth() {
          if (!window.history.state || window.history.state._depth == null) {
            window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
              _depth: window.history.length - 1
            }), "");
          }
          depth = window.history.state._depth;
        }
        {
          saveCurrentDepth();
        }
        function keepDepth(state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            _depth: window.history.state && window.history.state._depth
          });
        }
        function notifyIfNotBlocked(notify, block) {
          var ignore = false;
          return () => {
            var prevDepth = depth;
            saveCurrentDepth();
            var delta = prevDepth == null ? null : depth - prevDepth;
            if (ignore) {
              ignore = false;
              return;
            }
            if (delta && block(delta)) {
              ignore = true;
              window.history.go(-delta);
            } else {
              notify();
            }
          };
        }
        var hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
        var trimPathRegex = /^\/+|(\/)\/+$/g;
        var mockBase = "http://sr";
        function normalizePath(path) {
          var omitSlash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var s = path.replace(trimPathRegex, "$1");
          return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
        }
        function resolvePath(base, path, from) {
          if (hasSchemeRegex.test(path)) {
            return undefined;
          }
          var basePath = normalizePath(base);
          var fromPath = from && normalizePath(from);
          var result = "";
          if (!fromPath || path.startsWith("/")) {
            result = basePath;
          } else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) {
            result = basePath + fromPath;
          } else {
            result = fromPath;
          }
          return (result || "/") + normalizePath(path, !result);
        }
        function invariant(value, message) {
          if (value == null) {
            throw new Error(message);
          }
          return value;
        }
        function joinPaths(from, to) {
          return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
        }
        function extractSearchParams(url) {
          var params = {};
          url.searchParams.forEach((value, key) => {
            if (key in params) {
              if (Array.isArray(params[key])) params[key].push(value);else params[key] = [params[key], value];
            } else params[key] = value;
          });
          return params;
        }
        function createMatcher(path, partial, matchFilters) {
          var _path$split = path.split("/*", 2),
            _path$split2 = _slicedToArray(_path$split, 2),
            pattern = _path$split2[0],
            splat = _path$split2[1];
          var segments = pattern.split("/").filter(Boolean);
          var len = segments.length;
          return location => {
            var locSegments = location.split("/").filter(Boolean);
            var lenDiff = locSegments.length - len;
            if (lenDiff < 0 || lenDiff > 0 && splat === undefined && !partial) {
              return null;
            }
            var match = {
              path: len ? "" : "/",
              params: {}
            };
            var matchFilter = s => matchFilters === undefined ? undefined : matchFilters[s];
            for (var i = 0; i < len; i++) {
              var segment = segments[i];
              var dynamic = segment[0] === ":";
              var locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase();
              var _key30 = dynamic ? segment.slice(1) : segment.toLowerCase();
              if (dynamic && matchSegment(locSegment, matchFilter(_key30))) {
                match.params[_key30] = locSegment;
              } else if (dynamic || !matchSegment(locSegment, _key30)) {
                return null;
              }
              match.path += `/${locSegment}`;
            }
            if (splat) {
              var remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
              if (matchSegment(remainder, matchFilter(splat))) {
                match.params[splat] = remainder;
              } else {
                return null;
              }
            }
            return match;
          };
        }
        function matchSegment(input, filter) {
          var isEqual = s => s === input;
          if (filter === undefined) {
            return true;
          } else if (typeof filter === "string") {
            return isEqual(filter);
          } else if (typeof filter === "function") {
            return filter(input);
          } else if (Array.isArray(filter)) {
            return filter.some(isEqual);
          } else if (filter instanceof RegExp) {
            return filter.test(input);
          }
          return false;
        }
        function scoreRoute(route) {
          var _route$pattern$split = route.pattern.split("/*", 2),
            _route$pattern$split2 = _slicedToArray(_route$pattern$split, 2),
            pattern = _route$pattern$split2[0],
            splat = _route$pattern$split2[1];
          var segments = pattern.split("/").filter(Boolean);
          return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === undefined ? 0 : 1));
        }
        function createMemoObject(fn) {
          var map = new Map();
          var owner = getOwner();
          return new Proxy({}, {
            get(_, property) {
              if (!map.has(property)) {
                runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
              }
              return map.get(property)();
            },
            getOwnPropertyDescriptor() {
              return {
                enumerable: true,
                configurable: true
              };
            },
            ownKeys() {
              return Reflect.ownKeys(fn());
            }
          });
        }
        function expandOptionals(pattern) {
          var match = /(\/?\:[^\/]+)\?/.exec(pattern);
          if (!match) return [pattern];
          var prefix = pattern.slice(0, match.index);
          var suffix = pattern.slice(match.index + match[0].length);
          var prefixes = [prefix, prefix += match[1]];
          // This section handles adjacent optional params. We don't actually want all permuations since
          // that will lead to equivalent routes which have the same number of params. For example
          // `/:a?/:b?/:c`? only has the unique expansion: `/`, `/:a`, `/:a/:b`, `/:a/:b/:c` and we can
          // discard `/:b`, `/:c`, `/:b/:c` by building them up in order and not recursing. This also helps
          // ensure predictability where earlier params have precidence.
          while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
            prefixes.push(prefix += match[1]);
            suffix = suffix.slice(match[0].length);
          }
          return expandOptionals(suffix).reduce((results, expansion) => [...results, ...prefixes.map(p => p + expansion)], []);
        }
        var MAX_REDIRECTS = 100;
        var RouterContextObj = createContext();
        var RouteContextObj = createContext();
        var useRouter = () => invariant(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
        /**
         * Retrieves method to do navigation. The method accepts a path to navigate to and an optional object with the following options:
         *
         * - resolve (*boolean*, default `true`): resolve the path against the current route
         * - replace (*boolean*, default `false`): replace the history entry
         * - scroll (*boolean*, default `true`): scroll to top after navigation
         * - state (*any*, default `undefined`): pass custom state to `location.state`
         *
         * **Note**: The state is serialized using the structured clone algorithm which does not support all object types.
         *
         * @example
         * ```js
         * const navigate = useNavigate();
         *
         * if (unauthorized) {
         *   navigate("/login", { replace: true });
         * }
         * ```
         */
        var useNavigate = exports("r", () => useRouter().navigatorFactory());
        /**
         * Retrieves reactive `location` object useful for getting things like `pathname`.
         *
         * @example
         * ```js
         * const location = useLocation();
         *
         * const pathname = createMemo(() => parsePath(location.pathname));
         * ```
         */
        var useLocation = () => useRouter().location;
        /**
         * usePreloadRoute returns a function that can be used to preload a route manual.
         * This is what happens automatically with link hovering and similar focus based behavior, but it is available here as an API.
         *
         * @example
         * ```js
         * const preload = usePreloadRoute();
         *
         * preload(`/users/settings`, { preloadData: true });
         * ```
         */
        var usePreloadRoute = () => {
          var pre = useRouter().preloadRoute;
          return function (url) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return pre(url instanceof URL ? url : new URL(url, mockBase), options.preloadData);
          };
        };
        /**
         * `useMatch` takes an accessor that returns the path and creates a `Memo` that returns match information if the current path matches the provided path.
         * Useful for determining if a given path matches the current route.
         *
         * @example
         * ```js
         * const match = useMatch(() => props.href);
         *
         * return <div classList={{ active: Boolean(match()) }} />;
         * ```
         */
        var useMatch = (path, matchFilters) => {
          var location = useLocation();
          var matchers = createMemo(() => expandOptionals(path()).map(path => createMatcher(path, undefined, matchFilters)));
          return createMemo(() => {
            var _iterator22 = _createForOfIteratorHelper(matchers()),
              _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var matcher = _step22.value;
                var match = matcher(location.pathname);
                if (match) return match;
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          });
        };
        /**
         * Retrieves a reactive, store-like object containing the current route path parameters as defined in the Route.
         *
         * @example
         * ```js
         * const params = useParams();
         *
         * // fetch user based on the id path parameter
         * const [user] = createResource(() => params.id, fetchUser);
         * ```
         */
        var useParams = exports("O", () => useRouter().params);
        function createRoutes(routeDef) {
          var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var component = routeDef.component,
            preload = routeDef.preload,
            load = routeDef.load,
            children = routeDef.children,
            info = routeDef.info;
          var isLeaf = !children || Array.isArray(children) && !children.length;
          var shared = {
            key: routeDef,
            component,
            preload: preload || load,
            info
          };
          return asArray(routeDef.path).reduce((acc, originalPath) => {
            var _iterator23 = _createForOfIteratorHelper(expandOptionals(originalPath)),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var expandedPath = _step23.value;
                var path = joinPaths(base, expandedPath);
                var pattern = isLeaf ? path : path.split("/*", 1)[0];
                pattern = pattern.split("/").map(s => {
                  return s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s);
                }).join("/");
                acc.push(_objectSpread(_objectSpread({}, shared), {}, {
                  originalPath,
                  pattern,
                  matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
                }));
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
            return acc;
          }, []);
        }
        function createBranch(routes) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return {
            routes,
            score: scoreRoute(routes[routes.length - 1]) * 10000 - index,
            matcher(location) {
              var matches = [];
              for (var i = routes.length - 1; i >= 0; i--) {
                var route = routes[i];
                var match = route.matcher(location);
                if (!match) {
                  return null;
                }
                matches.unshift(_objectSpread(_objectSpread({}, match), {}, {
                  route
                }));
              }
              return matches;
            }
          };
        }
        function asArray(value) {
          return Array.isArray(value) ? value : [value];
        }
        function createBranches(routeDef) {
          var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var stack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var branches = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
          var routeDefs = asArray(routeDef);
          for (var i = 0, len = routeDefs.length; i < len; i++) {
            var def = routeDefs[i];
            if (def && _typeof(def) === "object") {
              if (!def.hasOwnProperty("path")) def.path = "";
              var routes = createRoutes(def, base);
              var _iterator24 = _createForOfIteratorHelper(routes),
                _step24;
              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var route = _step24.value;
                  stack.push(route);
                  var isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
                  if (def.children && !isEmptyArray) {
                    createBranches(def.children, route.pattern, stack, branches);
                  } else {
                    var branch = createBranch([...stack], branches.length);
                    branches.push(branch);
                  }
                  stack.pop();
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            }
          }
          // Stack will be empty on final return
          return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
        }
        function getRouteMatches(branches, location) {
          for (var i = 0, len = branches.length; i < len; i++) {
            var match = branches[i].matcher(location);
            if (match) {
              return match;
            }
          }
          return [];
        }
        function createLocation(path, state, queryWrapper) {
          var origin = new URL(mockBase);
          var url = createMemo(prev => {
            var path_ = path();
            try {
              return new URL(path_, origin);
            } catch (err) {
              console.error(`Invalid path ${path_}`);
              return prev;
            }
          }, origin, {
            equals: (a, b) => a.href === b.href
          });
          var pathname = createMemo(() => url().pathname);
          var search = createMemo(() => url().search, true);
          var hash = createMemo(() => url().hash);
          var key = () => "";
          var queryFn = on(search, () => extractSearchParams(url()));
          return {
            get pathname() {
              return pathname();
            },
            get search() {
              return search();
            },
            get hash() {
              return hash();
            },
            get state() {
              return state();
            },
            get key() {
              return key();
            },
            query: queryWrapper ? queryWrapper(queryFn) : createMemoObject(queryFn)
          };
        }
        var intent;
        function getIntent() {
          return intent;
        }
        function setInPreloadFn(value) {}
        function createRouterContext(integration, branches, getContext) {
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var _integration$signal = _slicedToArray(integration.signal, 2),
            source = _integration$signal[0],
            setSource = _integration$signal[1],
            _integration$utils = integration.utils,
            utils = _integration$utils === void 0 ? {} : _integration$utils;
          var parsePath = utils.parsePath || (p => p);
          var renderPath = utils.renderPath || (p => p);
          var beforeLeave = utils.beforeLeave || createBeforeLeave();
          var basePath = resolvePath("", options.base || "");
          if (basePath === undefined) {
            throw new Error(`${basePath} is not a valid base path`);
          } else if (basePath && !source().value) {
            setSource({
              value: basePath,
              replace: true,
              scroll: false
            });
          }
          var _createSignal15 = createSignal(false),
            _createSignal16 = _slicedToArray(_createSignal15, 2),
            isRouting = _createSignal16[0],
            setIsRouting = _createSignal16[1];
          // Keep track of last target, so that last call to transition wins
          var lastTransitionTarget;
          // Transition the location to a new value
          var transition = (newIntent, newTarget) => {
            if (newTarget.value === reference() && newTarget.state === state()) return;
            if (lastTransitionTarget === undefined) setIsRouting(true);
            intent = newIntent;
            lastTransitionTarget = newTarget;
            startTransition(() => {
              if (lastTransitionTarget !== newTarget) return;
              setReference(lastTransitionTarget.value);
              setState(lastTransitionTarget.state);
              submissions[1](subs => subs.filter(s => s.pending));
            }).finally(() => {
              if (lastTransitionTarget !== newTarget) return;
              // Batch, in order for isRouting and final source update to happen together
              batch(() => {
                intent = undefined;
                if (newIntent === "navigate") navigateEnd(lastTransitionTarget);
                setIsRouting(false);
                lastTransitionTarget = undefined;
              });
            });
          };
          var _createSignal17 = createSignal(source().value),
            _createSignal18 = _slicedToArray(_createSignal17, 2),
            reference = _createSignal18[0],
            setReference = _createSignal18[1];
          var _createSignal19 = createSignal(source().state),
            _createSignal20 = _slicedToArray(_createSignal19, 2),
            state = _createSignal20[0],
            setState = _createSignal20[1];
          var location = createLocation(reference, state, utils.queryWrapper);
          var referrers = [];
          var submissions = createSignal([]);
          var matches = createMemo(() => {
            if (typeof options.transformUrl === "function") {
              return getRouteMatches(branches(), options.transformUrl(location.pathname));
            }
            return getRouteMatches(branches(), location.pathname);
          });
          var buildParams = () => {
            var m = matches();
            var params = {};
            for (var i = 0; i < m.length; i++) {
              Object.assign(params, m[i].params);
            }
            return params;
          };
          var params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams);
          var baseRoute = {
            pattern: basePath,
            path: () => basePath,
            outlet: () => null,
            resolvePath(to) {
              return resolvePath(basePath, to);
            }
          };
          // Create a native transition, when source updates
          createRenderEffect(on(source, source => transition("native", source), {
            defer: true
          }));
          return {
            base: baseRoute,
            location,
            params,
            isRouting,
            renderPath,
            parsePath,
            navigatorFactory,
            matches,
            beforeLeave,
            preloadRoute,
            singleFlight: options.singleFlight === undefined ? true : options.singleFlight,
            submissions
          };
          function navigateFromRoute(route, to, options) {
            // Untrack in case someone navigates in an effect - don't want to track `reference` or route paths
            untrack(() => {
              if (typeof to === "number") {
                if (!to) {
                  // A delta of 0 means stay at the current location, so it is ignored
                } else if (utils.go) {
                  utils.go(to);
                } else {
                  console.warn("Router integration does not support relative routing");
                }
                return;
              }
              var queryOnly = !to || to[0] === "?";
              var _replace$resolve$scro = _objectSpread({
                  replace: false,
                  resolve: !queryOnly,
                  scroll: true
                }, options),
                replace = _replace$resolve$scro.replace,
                resolve = _replace$resolve$scro.resolve,
                scroll = _replace$resolve$scro.scroll,
                nextState = _replace$resolve$scro.state;
              var resolvedTo = resolve ? route.resolvePath(to) : resolvePath(queryOnly && location.pathname || "", to);
              if (resolvedTo === undefined) {
                throw new Error(`Path '${to}' is not a routable path`);
              } else if (referrers.length >= MAX_REDIRECTS) {
                throw new Error("Too many redirects");
              }
              var current = reference();
              if (resolvedTo !== current || nextState !== state()) {
                if (isServer) ;else if (beforeLeave.confirm(resolvedTo, options)) {
                  referrers.push({
                    value: current,
                    replace,
                    scroll,
                    state: state()
                  });
                  transition("navigate", {
                    value: resolvedTo,
                    state: nextState
                  });
                }
              }
            });
          }
          function navigatorFactory(route) {
            // Workaround for vite issue (https://github.com/vitejs/vite/issues/3803)
            route = route || useContext(RouteContextObj) || baseRoute;
            return (to, options) => navigateFromRoute(route, to, options);
          }
          function navigateEnd(next) {
            var first = referrers[0];
            if (first) {
              setSource(_objectSpread(_objectSpread({}, next), {}, {
                replace: first.replace,
                scroll: first.scroll
              }));
              referrers.length = 0;
            }
          }
          function preloadRoute(url, preloadData) {
            var matches = getRouteMatches(branches(), url.pathname);
            var prevIntent = intent;
            intent = "preload";
            var _loop11 = function _loop11() {
              var _matches$match = matches[match],
                route = _matches$match.route,
                params = _matches$match.params;
              route.component && route.component.preload && route.component.preload();
              var preload = route.preload;
              preloadData && preload && runWithOwner(getContext(), () => preload({
                params,
                location: {
                  pathname: url.pathname,
                  search: url.search,
                  hash: url.hash,
                  query: extractSearchParams(url),
                  state: null,
                  key: ""
                },
                intent: "preload"
              }));
            };
            for (var match in matches) {
              _loop11();
            }
            intent = prevIntent;
          }
        }
        function createRouteContext(router, parent, _outlet, match) {
          var base = router.base,
            location = router.location,
            params = router.params;
          var _match$route = match().route,
            pattern = _match$route.pattern,
            component = _match$route.component,
            preload = _match$route.preload;
          var path = createMemo(() => match().path);
          component && component.preload && component.preload();
          var data = preload ? preload({
            params,
            location,
            intent: intent || "initial"
          }) : undefined;
          var route = {
            parent,
            pattern,
            path,
            outlet: () => component ? createComponent$1(component, {
              params,
              location,
              data,
              get children() {
                return _outlet();
              }
            }) : _outlet(),
            resolvePath(to) {
              return resolvePath(base.path(), to, path());
            }
          };
          return route;
        }
        var createRouterComponent = router => props => {
          var base = props.base;
          var routeDefs = children(() => props.children);
          var branches = createMemo(() => createBranches(routeDefs(), props.base || ""));
          var context;
          var routerState = createRouterContext(router, branches, () => context, {
            base,
            singleFlight: props.singleFlight,
            transformUrl: props.transformUrl
          });
          router.create && router.create(routerState);
          return createComponent(RouterContextObj.Provider, {
            value: routerState,
            get children() {
              return createComponent(Root, {
                routerState,
                get root() {
                  return props.root;
                },
                get preload() {
                  return props.rootPreload || props.rootLoad;
                },
                get children() {
                  return [memo(() => (context = getOwner()) && null), createComponent(Routes, {
                    routerState,
                    get branches() {
                      return branches();
                    }
                  })];
                }
              });
            }
          });
        };
        function Root(props) {
          var location = props.routerState.location;
          var params = props.routerState.params;
          var data = createMemo(() => props.preload && untrack(() => {
            setInPreloadFn(true);
            props.preload({
              params,
              location,
              intent: getIntent() || "initial"
            });
            setInPreloadFn(false);
          }));
          return createComponent(Show, {
            get when() {
              return props.root;
            },
            keyed: true,
            get fallback() {
              return props.children;
            },
            children: Root2 => createComponent(Root2, {
              params,
              location,
              get data() {
                return data();
              },
              get children() {
                return props.children;
              }
            })
          });
        }
        function Routes(props) {
          var disposers = [];
          var root;
          var routeStates = createMemo(on(props.routerState.matches, (nextMatches, prevMatches, prev) => {
            var equal = prevMatches && nextMatches.length === prevMatches.length;
            var next = [];
            var _loop12 = function _loop12(i) {
              var prevMatch = prevMatches && prevMatches[i];
              var nextMatch = nextMatches[i];
              if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) {
                next[i] = prev[i];
              } else {
                equal = false;
                if (disposers[i]) {
                  disposers[i]();
                }
                createRoot(dispose => {
                  disposers[i] = dispose;
                  next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => props.routerState.matches()[i]);
                });
              }
            };
            for (var i = 0, len = nextMatches.length; i < len; i++) {
              _loop12(i);
            }
            disposers.splice(nextMatches.length).forEach(dispose => dispose());
            if (prev && equal) {
              return prev;
            }
            root = next[0];
            return next;
          }));
          return createOutlet(() => routeStates() && root)();
        }
        var createOutlet = child => {
          return () => createComponent(Show, {
            get when() {
              return child();
            },
            keyed: true,
            children: child2 => createComponent(RouteContextObj.Provider, {
              value: child2,
              get children() {
                return child2.outlet();
              }
            })
          });
        };
        var Route = props => {
          var childRoutes = children(() => props.children);
          return mergeProps$1(props, {
            get children() {
              return childRoutes();
            }
          });
        };
        function intercept(_ref49, get, set) {
          var _ref50 = _slicedToArray(_ref49, 2),
            value = _ref50[0],
            setValue = _ref50[1];
          return [value, v => setValue(set(v))];
        }
        function createRouter(config) {
          var ignore = false;
          var wrap = value => typeof value === "string" ? {
            value
          } : value;
          var signal = intercept(createSignal(wrap(config.get()), {
            equals: (a, b) => a.value === b.value && a.state === b.state
          }), undefined, next => {
            !ignore && config.set(next);
            if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = true;
            return next;
          });
          config.init && onCleanup(config.init(function () {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config.get();
            ignore = true;
            signal[1](wrap(value));
            ignore = false;
          }));
          return createRouterComponent({
            signal,
            create: config.create,
            utils: config.utils
          });
        }
        function hashParser(str) {
          var to = str.replace(/^.*?#/, "");
          if (!to.startsWith("/")) {
            var _window$location$hash = window.location.hash.split("#", 2),
              _window$location$hash2 = _slicedToArray(_window$location$hash, 2),
              _window$location$hash3 = _window$location$hash2[1],
              path = _window$location$hash3 === void 0 ? "/" : _window$location$hash3;
            return `${path}#${to}`;
          }
          return to;
        }
        function bindEvent(target, type, handler) {
          target.addEventListener(type, handler);
          return () => target.removeEventListener(type, handler);
        }
        function HashRouter(props) {
          var getSource = () => window.location.hash.slice(1);
          var beforeLeave = createBeforeLeave();
          return createRouter({
            get: getSource,
            set(_ref51) {
              var value = _ref51.value,
                replace = _ref51.replace,
                state = _ref51.state;
              if (replace) {
                window.history.replaceState(keepDepth(state), "", "#" + value);
              } else {
                window.history.pushState(state, "", "#" + value);
              }
              saveCurrentDepth();
            },
            init: notify => bindEvent(window, "hashchange", notifyIfNotBlocked(notify, delta => !beforeLeave.confirm(delta && delta < 0 ? delta : getSource()))),
            utils: {
              go: delta => window.history.go(delta),
              renderPath: path => `#${path}`,
              parsePath: hashParser,
              beforeLeave
            }
          })(props);
        }
        var _createSignal21 = createSignal([]),
          _createSignal22 = _slicedToArray(_createSignal21, 2),
          focusPath = _createSignal22[0],
          setFocusPath = _createSignal22[1];
        var useFocusManager = (userKeyMap, keyHoldOptions) => {
          var owner = getOwner();
          var ownerContext = runWithOwner.bind(undefined, owner);
          Config.setActiveElement = activeElm => ownerContext(() => setActiveElement(activeElm));
          var _useFocusManager$ = useFocusManager$1({
              userKeyMap,
              keyHoldOptions,
              ownerContext
            }),
            cleanup = _useFocusManager$.cleanup,
            focusPathCore = _useFocusManager$.focusPath;
          createEffect(on(activeElement, () => {
            setFocusPath([...focusPathCore()]);
          }, {
            defer: true
          }));
          onCleanup(cleanup);
        };
        function flattenStrings() {
          var series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var flattenedSeries = [];
          var i;
          for (i = 0; i < series.length; i++) {
            var s = series[i];
            if (typeof s === "string" && !s.includes("PAUSE-")) {
              flattenedSeries.push(series[i]);
            } else {
              break;
            }
          }
          return [flattenedSeries.join(",\b ")].concat(series.slice(i));
        }
        function delay(pause) {
          return new Promise(resolve => {
            setTimeout(resolve, pause);
          });
        }
        function speak(phrase, utterances) {
          var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en-US";
          var synth = window.speechSynthesis;
          return new Promise((resolve, reject) => {
            var utterance = new SpeechSynthesisUtterance(phrase);
            utterance.lang = lang;
            utterance.onend = () => {
              resolve();
            };
            utterance.onerror = e => {
              reject(e);
            };
            utterances.push(utterance);
            synth.speak(utterance);
          });
        }
        function speakSeries(series, lang) {
          var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var synth = window.speechSynthesis;
          var remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
          var nestedSeriesResults = [];
          var utterances = [];
          var active = true;
          var seriesChain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
            var phrase, pause, totalRetries, retriesLeft, seriesResult, _seriesResult;
            return _regeneratorRuntime().wrap(function _callee20$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.prev = 0;
                case 1:
                  if (!(active && remainingPhrases.length)) {
                    _context20.next = 62;
                    break;
                  }
                  _context20.next = 4;
                  return Promise.resolve(remainingPhrases.shift());
                case 4:
                  phrase = _context20.sent;
                  if (active) {
                    _context20.next = 9;
                    break;
                  }
                  return _context20.abrupt("break", 62);
                case 9:
                  if (!(typeof phrase === "string" && phrase.includes("PAUSE-"))) {
                    _context20.next = 16;
                    break;
                  }
                  pause = Number(phrase.split("PAUSE-")[1]) * 1e3;
                  if (isNaN(pause)) {
                    pause = 0;
                  }
                  _context20.next = 14;
                  return delay(pause);
                case 14:
                  _context20.next = 60;
                  break;
                case 16:
                  if (!(typeof phrase === "string" && phrase.length)) {
                    _context20.next = 48;
                    break;
                  }
                  totalRetries = 3;
                  retriesLeft = totalRetries;
                case 19:
                  if (!(active && retriesLeft > 0)) {
                    _context20.next = 46;
                    break;
                  }
                  _context20.prev = 20;
                  _context20.next = 23;
                  return speak(phrase, utterances, lang);
                case 23:
                  retriesLeft = 0;
                  _context20.next = 44;
                  break;
                case 26:
                  _context20.prev = 26;
                  _context20.t0 = _context20["catch"](20);
                  if (!(_context20.t0 instanceof SpeechSynthesisErrorEvent)) {
                    _context20.next = 43;
                    break;
                  }
                  if (!(_context20.t0.error === "network")) {
                    _context20.next = 36;
                    break;
                  }
                  retriesLeft--;
                  console.warn(`Speech synthesis network error. Retries left: ${retriesLeft}`);
                  _context20.next = 34;
                  return delay(500 * (totalRetries - retriesLeft));
                case 34:
                  _context20.next = 41;
                  break;
                case 36:
                  if (!(_context20.t0.error === "canceled" || _context20.t0.error === "interrupted")) {
                    _context20.next = 40;
                    break;
                  }
                  retriesLeft = 0;
                  _context20.next = 41;
                  break;
                case 40:
                  throw new Error(`SpeechSynthesisErrorEvent: ${_context20.t0.error}`);
                case 41:
                  _context20.next = 44;
                  break;
                case 43:
                  throw _context20.t0;
                case 44:
                  _context20.next = 19;
                  break;
                case 46:
                  _context20.next = 60;
                  break;
                case 48:
                  if (!(typeof phrase === "function")) {
                    _context20.next = 55;
                    break;
                  }
                  seriesResult = speakSeries(phrase(), lang, false);
                  nestedSeriesResults.push(seriesResult);
                  _context20.next = 53;
                  return seriesResult.series;
                case 53:
                  _context20.next = 60;
                  break;
                case 55:
                  if (!Array.isArray(phrase)) {
                    _context20.next = 60;
                    break;
                  }
                  _seriesResult = speakSeries(phrase, lang, false);
                  nestedSeriesResults.push(_seriesResult);
                  _context20.next = 60;
                  return _seriesResult.series;
                case 60:
                  _context20.next = 1;
                  break;
                case 62:
                  _context20.prev = 62;
                  active = false;
                  return _context20.finish(62);
                case 65:
                case "end":
                  return _context20.stop();
              }
            }, _callee20, null, [[0,, 62, 65], [20, 26]]);
          }))();
          return {
            series: seriesChain,
            get active() {
              return active;
            },
            append: toSpeak => {
              remainingPhrases.push(toSpeak);
            },
            cancel: () => {
              if (!active) {
                return;
              }
              if (root) {
                synth.cancel();
              }
              nestedSeriesResults.forEach(nestedSeriesResults2 => {
                nestedSeriesResults2.cancel();
              });
              active = false;
            }
          };
        }
        var currentSeries;
        function SpeechEngine(toSpeak) {
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
          currentSeries && currentSeries.cancel();
          currentSeries = speakSeries(toSpeak, lang);
          return currentSeries;
        }

        // src/index.ts
        var debounce$1 = (callback, wait) => {
          var timeoutId;
          var clear = () => clearTimeout(timeoutId);
          if (getOwner()) onCleanup(clear);
          var debounced = function debounced() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key31 = 0; _key31 < _len4; _key31++) {
              args[_key31] = arguments[_key31];
            }
            if (timeoutId !== undefined) clear();
            timeoutId = setTimeout(() => callback(...args), wait);
          };
          return Object.assign(debounced, {
            clear
          });
        };
        var resetFocusPathTimer;
        var prevFocusPath = [];
        var currentlySpeaking;
        var voiceOutDisabled = false;
        var fiveMinutes = 3e5;
        function debounceWithFlush(callback, time) {
          var trigger = debounce$1(callback, time);
          var scopedValue;
          var debounced = newValue => {
            scopedValue = newValue;
            trigger(newValue);
          };
          debounced.flush = () => {
            trigger.clear();
            callback(scopedValue);
          };
          debounced.clear = trigger.clear;
          return debounced;
        }
        function getElmName(elm) {
          return elm.id || elm.name;
        }
        function onFocusChangeCore() {
          var focusPath2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          if (!Announcer.onFocusChange || !Announcer.enabled) {
            return;
          }
          var loaded = focusPath2.every(elm => !elm.loading);
          var focusDiff = focusPath2.filter(elm => !prevFocusPath.includes(elm));
          resetFocusPathTimer();
          if (!loaded && Announcer.onFocusChange) {
            Announcer.onFocusChange([]);
            return;
          }
          prevFocusPath = focusPath2.slice(0);
          var toAnnounceText = [];
          var toAnnounce = focusDiff.reduce((acc, elm) => {
            if (elm.announce) {
              acc.push([getElmName(elm), "Announce", elm.announce]);
              toAnnounceText.push(elm.announce);
            } else if (elm.title) {
              acc.push([getElmName(elm), "Title", elm.title]);
              toAnnounceText.push(elm.title);
            } else {
              acc.push([getElmName(elm), "No Announce", ""]);
            }
            return acc;
          }, []);
          focusDiff.reverse().reduce((acc, elm) => {
            if (elm.announceContext) {
              acc.push([getElmName(elm), "Context", elm.announceContext]);
              toAnnounceText.push(elm.announceContext);
            } else {
              acc.push([getElmName(elm), "No Context", ""]);
            }
            return acc;
          }, toAnnounce);
          if (Announcer.debug) {
            console.table(toAnnounce);
          }
          if (toAnnounceText.length) {
            return Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), []));
          }
        }
        function textToSpeech(toSpeak, lang) {
          if (voiceOutDisabled) {
            return;
          }
          return currentlySpeaking = SpeechEngine(toSpeak, lang);
        }
        var Announcer = {
          debug: false,
          enabled: true,
          lang: "en-US",
          cancel: function cancel() {
            currentlySpeaking && currentlySpeaking.cancel();
          },
          clearPrevFocus: function clearPrevFocus() {
            var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            prevFocusPath = prevFocusPath.slice(0, depth);
            resetFocusPathTimer();
          },
          speak: function speak(text) {
            var _ref53 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref53$append = _ref53.append,
              append = _ref53$append === void 0 ? false : _ref53$append,
              _ref53$notification = _ref53.notification,
              notification = _ref53$notification === void 0 ? false : _ref53$notification;
            if (Announcer.onFocusChange && Announcer.enabled) {
              Announcer.onFocusChange.flush();
              if (append && currentlySpeaking && currentlySpeaking.active) {
                currentlySpeaking.append(text);
              } else {
                Announcer.cancel();
                textToSpeech(text, Announcer.lang);
              }
              if (notification) {
                var _currentlySpeaking;
                voiceOutDisabled = true;
                (_currentlySpeaking = currentlySpeaking) === null || _currentlySpeaking === void 0 || _currentlySpeaking.series.finally(() => {
                  voiceOutDisabled = false;
                  Announcer.refresh();
                }).catch(console.error);
              }
            }
            return currentlySpeaking;
          },
          refresh: function refresh() {
            var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            Announcer.clearPrevFocus(depth);
            Announcer.onFocusChange && Announcer.onFocusChange(untrack(() => focusPath()));
          },
          setupTimers: function setupTimers() {
            var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref54$focusDebounce = _ref54.focusDebounce,
              focusDebounce = _ref54$focusDebounce === void 0 ? 400 : _ref54$focusDebounce,
              _ref54$focusChangeTim = _ref54.focusChangeTimeout,
              focusChangeTimeout = _ref54$focusChangeTim === void 0 ? fiveMinutes : _ref54$focusChangeTim;
            Announcer.onFocusChange = debounceWithFlush(onFocusChangeCore, focusDebounce);
            resetFocusPathTimer = debounceWithFlush(() => {
              prevFocusPath = [];
            }, focusChangeTimeout);
          }
        };
        var useAnnouncer = () => {
          Announcer.setupTimers();
          createEffect(on(focusPath, Announcer.onFocusChange, {
            defer: true
          }));
          return Announcer;
        };
        function LazyUp(props) {
          var _splitProps3 = splitProps(props, ["component", "each", "fallback", "children"]),
            _splitProps4 = _slicedToArray(_splitProps3, 2),
            p = _splitProps4[0],
            others = _splitProps4[1];
          var _createSignal23 = createSignal(0),
            _createSignal24 = _slicedToArray(_createSignal23, 2),
            offset = _createSignal24[0],
            setOffset = _createSignal24[1];
          createEffect(() => {
            setOffset(props.selected || 0);
          });
          var items = createMemo(() => {
            if (p.each) {
              return p.each.slice(0, props.upCount + offset());
            }
          });
          console.log("LazyUp is deprecated. Please use LazyRow or LazyColumn instead.");
          var isRow = createMemo(() => {
            var _others$style;
            return others.direction !== undefined && others.direction === "row" || ((_others$style = others.style) === null || _others$style === void 0 ? void 0 : _others$style.flexDirection) === "row" || others.flexDirection === "row";
          });
          var keyHandlers = createMemo(() => {
            var updateOffset = () => {
              setOffset(prev => p.each && Math.min(prev + 1, p.each.length - props.upCount));
            };
            return isRow() ? {
              onRight: updateOffset
            } : {
              onDown: updateOffset
            };
          });
          return createComponent(Show, {
            get when() {
              return items();
            },
            get children() {
              return createComponent(Dynamic, mergeProps({
                get component() {
                  return p.component;
                }
              }, others, keyHandlers, {
                get children() {
                  return createComponent(Index, {
                    get each() {
                      return items();
                    },
                    get fallback() {
                      return p.fallback;
                    },
                    get children() {
                      return p.children;
                    }
                  });
                }
              }));
            }
          });
        }
        function onGridFocus(onSelectedChanged) {
          return function () {
            if (!this || this.children.length === 0) return false;
            this.selected = this.selected || 0;
            var child = this.selected ? this.children[this.selected] : this.selectedNode;
            while ((_child = child) !== null && _child !== void 0 && _child.skipFocus) {
              var _child;
              this.selected++;
              child = this.children[this.selected];
            }
            if (!(child instanceof ElementNode)) return false;
            child.setFocus();
            if (onSelectedChanged) {
              var grid = this;
              onSelectedChanged.call(grid, grid.selected, grid, child);
            }
            return true;
          };
        }
        function handleNavigation(direction) {
          return function () {
            var numChildren = this.children.length;
            var wrap = this.wrap;
            var lastSelected = this.selected || 0;
            if (numChildren === 0) {
              return false;
            }
            if (direction === "right" || direction === "down") {
              do {
                var _this$children$this$s;
                this.selected = (this.selected || 0) % numChildren + 1;
                if (this.selected >= numChildren) {
                  if (!wrap) {
                    this.selected = -1;
                    break;
                  }
                  this.selected = 0;
                }
              } while ((_this$children$this$s = this.children[this.selected]) !== null && _this$children$this$s !== void 0 && _this$children$this$s.skipFocus);
            } else if (direction === "left" || direction === "up") {
              do {
                var _this$children$this$s2;
                this.selected = (this.selected || 0) % numChildren - 1;
                if (this.selected < 0) {
                  if (!wrap) {
                    this.selected = -1;
                    break;
                  }
                  this.selected = numChildren - 1;
                }
              } while ((_this$children$this$s2 = this.children[this.selected]) !== null && _this$children$this$s2 !== void 0 && _this$children$this$s2.skipFocus);
            }
            if (this.selected === -1) {
              var _this$children$this$s3;
              this.selected = lastSelected;
              if ((_this$children$this$s3 = this.children[this.selected]) !== null && _this$children$this$s3 !== void 0 && _this$children$this$s3.states.has(Config.focusStateKey || "$focus")) {
                return false;
              }
            }
            var active = this.children[this.selected || 0];
            var navigableThis = this;
            navigableThis.onSelectedChanged && navigableThis.onSelectedChanged.call(navigableThis, navigableThis.selected, navigableThis, active, lastSelected);
            if (this.plinko) {
              var lastSelectedChild = this.children[lastSelected];
              var num = lastSelectedChild.selected || 0;
              active.selected = num < active.children.length ? num : active.children.length - 1;
            }
            active.setFocus();
            return true;
          };
        }
        var InViewPort = 8;
        var isNotShown = node => {
          return node.lng.renderState !== InViewPort;
        };
        function withScrolling(isRow) {
          var dimension = isRow ? "width" : "height";
          var axis = isRow ? "x" : "y";
          return (selected, component, selectedElement, lastSelected) => {
            var _componentRef$_target, _componentRef$offset2, _selectedElement$axis, _selectedElement$dime, _ref55, _selectedElement$scal, _selectedElement$styl, _componentRef$dimensi;
            var componentRef = component;
            if (typeof selected !== "number") {
              componentRef = selected;
              selected = componentRef.selected || 0;
            }
            if (!componentRef || componentRef.scroll === "none" || !componentRef.children.length) return;
            var lng = componentRef.lng;
            var screenSize = isRow ? lng.stage.root.width : lng.stage.root.height;
            var isIncrementing = lastSelected === undefined || lastSelected - 1 !== selected;
            if (componentRef._screenOffset === undefined) {
              var _componentRef$offset;
              if (componentRef.parent.clipping) {
                var p = componentRef.parent;
                componentRef.endOffset = screenSize - ((isRow ? p.absX : p.absY) || 0) - p[dimension];
              }
              componentRef._screenOffset = (_componentRef$offset = componentRef.offset) !== null && _componentRef$offset !== void 0 ? _componentRef$offset : (isRow ? lng.absX : lng.absY) - componentRef[axis];
            }
            var screenOffset = componentRef._screenOffset;
            var gap = componentRef.gap || 0;
            var scroll = componentRef.scroll || "auto";
            var targetPosition = (_componentRef$_target = componentRef._targetPosition) !== null && _componentRef$_target !== void 0 ? _componentRef$_target : componentRef[axis];
            var rootPosition = isIncrementing ? Math.min(targetPosition, componentRef[axis]) : Math.max(targetPosition, componentRef[axis]);
            componentRef.offset = (_componentRef$offset2 = componentRef.offset) !== null && _componentRef$offset2 !== void 0 ? _componentRef$offset2 : rootPosition;
            var offset = componentRef.offset;
            selectedElement = selectedElement || componentRef.children[selected];
            if (!selectedElement) {
              return;
            }
            var selectedPosition = (_selectedElement$axis = selectedElement[axis]) !== null && _selectedElement$axis !== void 0 ? _selectedElement$axis : 0;
            var selectedSize = (_selectedElement$dime = selectedElement[dimension]) !== null && _selectedElement$dime !== void 0 ? _selectedElement$dime : 0;
            var selectedScale = (_ref55 = (_selectedElement$scal = selectedElement.scale) !== null && _selectedElement$scal !== void 0 ? _selectedElement$scal : (_selectedElement$styl = selectedElement.style) === null || _selectedElement$styl === void 0 || (_selectedElement$styl = _selectedElement$styl.focus) === null || _selectedElement$styl === void 0 ? void 0 : _selectedElement$styl.scale) !== null && _ref55 !== void 0 ? _ref55 : 1;
            var selectedSizeScaled = selectedSize * selectedScale;
            var containerSize = (_componentRef$dimensi = componentRef[dimension]) !== null && _componentRef$dimensi !== void 0 ? _componentRef$dimensi : 0;
            var maxOffset = Math.min(screenSize - containerSize - screenOffset - (componentRef.endOffset || 2 * gap), offset);
            var nextIndex = isIncrementing ? selected + 1 : selected - 1;
            var nextElement = componentRef.children[nextIndex] || null;
            var nextPosition = rootPosition;
            if (selectedElement.centerScroll) {
              nextPosition = -selectedPosition + (screenSize - selectedSizeScaled) / 2;
            } else if (scroll === "always") {
              nextPosition = -selectedPosition + offset;
            } else if (scroll === "center") {
              var centerPosition = -selectedPosition + (screenSize - selectedSizeScaled) / 2 - screenOffset;
              nextPosition = Math.min(Math.max(centerPosition, maxOffset), offset);
            } else if (!nextElement) {
              nextPosition = isIncrementing ? maxOffset : offset;
            } else if (scroll === "auto") {
              if (componentRef.scrollIndex && componentRef.scrollIndex > 0) {
                var totalItems = componentRef.children.length;
                var nearEndIndex = totalItems - componentRef.scrollIndex;
                if (isIncrementing && componentRef.selected >= componentRef.scrollIndex) {
                  nextPosition = rootPosition - selectedSize - gap;
                } else if (!isIncrementing && componentRef.selected < nearEndIndex) {
                  nextPosition = rootPosition + selectedSize + gap;
                }
              } else if (isIncrementing) {
                nextPosition = -selectedPosition + offset;
              } else {
                nextPosition = rootPosition + selectedSize + gap;
              }
            } else if (isIncrementing && isNotShown(nextElement)) {
              nextPosition = rootPosition - selectedSize - gap;
            } else if (isNotShown(nextElement)) {
              nextPosition = -selectedPosition + offset;
            }
            nextPosition = isIncrementing && scroll !== "always" ? Math.max(nextPosition, maxOffset) : Math.min(nextPosition, offset);
            if (componentRef[axis] !== nextPosition) {
              componentRef[axis] = nextPosition;
              componentRef._targetPosition = nextPosition;
            }
          };
        }
        function chainFunctions() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key32 = 0; _key32 < _len5; _key32++) {
            args[_key32] = arguments[_key32];
          }
          var onlyFunctions = args.filter(func => typeof func === "function");
          if (onlyFunctions.length === 0) {
            return undefined;
          }
          if (onlyFunctions.length === 1) {
            return onlyFunctions[0];
          }
          return function () {
            var result;
            for (var _len6 = arguments.length, innerArgs = new Array(_len6), _key33 = 0; _key33 < _len6; _key33++) {
              innerArgs[_key33] = arguments[_key33];
            }
            var _iterator25 = _createForOfIteratorHelper(onlyFunctions),
              _step25;
            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var func = _step25.value;
                result = func.apply(this, innerArgs);
                if (result === true) {
                  return result;
                }
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
            return result;
          };
        }
        var ColumnStyles = {
          display: "flex",
          flexDirection: "column",
          gap: 30,
          transition: {
            y: {
              duration: 250,
              easing: "ease-in-out"
            }
          }
        };
        var onUp = handleNavigation("up");
        var onDown = handleNavigation("down");
        var scroll$1 = withScrolling(false);
        function scrollToIndex$1(index) {
          this.selected = index;
          scroll$1(index, this);
          this.setFocus();
        }
        var Column = exports("C", props => {
          return createComponent(View, mergeProps(props, {
            onUp: chainFunctions(props.onUp, onUp),
            onDown: chainFunctions(props.onDown, onDown),
            get selected() {
              return props.selected || 0;
            },
            scrollToIndex: scrollToIndex$1,
            get forwardFocus() {
              return /* once */onGridFocus(props.onSelectedChanged);
            },
            onLayout: props.selected ? chainFunctions(props.onLayout, scroll$1) : props.onLayout,
            onSelectedChanged: chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? scroll$1 : undefined),
            style: combineStyles(props.style, ColumnStyles)
          }));
        });
        var RowStyles = {
          display: "flex",
          gap: 30,
          transition: {
            x: {
              duration: 250,
              easing: "ease-in-out"
            }
          }
        };
        var onLeft = handleNavigation("left");
        var onRight = handleNavigation("right");
        var scroll = withScrolling(true);
        function scrollToIndex(index) {
          this.selected = index;
          scroll(index, this);
          this.setFocus();
        }
        var Row = exports("R", props => {
          return createComponent(View, mergeProps(props, {
            get selected() {
              return props.selected || 0;
            },
            onLeft: chainFunctions(props.onLeft, onLeft),
            onRight: chainFunctions(props.onRight, onRight),
            get forwardFocus() {
              return /* once */onGridFocus(props.onSelectedChanged);
            },
            scrollToIndex,
            onLayout: props.selected ? chainFunctions(props.onLayout, scroll) : props.onLayout,
            onSelectedChanged: chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? scroll : undefined),
            style: combineStyles(props.style, RowStyles)
          }));
        });
        function createSpriteMap(src, subTextures) {
          var spriteMapTexture = renderer$2.createTexture("ImageTexture", {
            src
          });
          return subTextures.reduce((acc, t) => {
            var x = t.x,
              y = t.y,
              width = t.width,
              height = t.height;
            acc[t.name] = renderer$2.createTexture("SubTexture", {
              texture: spriteMapTexture,
              x,
              y,
              width,
              height
            });
            return acc;
          }, {});
        }
        var _createSignal25 = createSignal(""),
          _createSignal26 = _slicedToArray(_createSignal25, 2),
          globalBackground = _createSignal26[0],
          setGlobalBackground = _createSignal26[1];
        exports("s", setGlobalBackground);
        var theme = exports("t", {
          name: 'Base Lightning TV',
          alpha: {
            primary: 1,
            secondary: 0.7,
            tertiary: 0.1,
            inactive: 0.5,
            full: 1,
            none: 0,
            alpha1: 0.1,
            alpha2: 0.3,
            alpha3: 0.5,
            alpha4: 0.7,
            alpha5: 0.9,
            alpha6: 0.95
          },
          animation: {
            duration: {
              none: 0,
              xfast: 100,
              fast: 250,
              normal: 500,
              slow: 750,
              xslow: 900
            },
            delay: {
              none: 0,
              xfast: 10,
              fast: 25,
              normal: 50,
              slow: 75,
              xslow: 90
            },
            expressive: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            expressiveEntrance: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            expressiveExit: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            standard: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            standardEntrance: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            standardExit: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            utility: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            utilityEntrance: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            },
            utilityExit: {
              timingFunction: 'cubic-bezier(0, 0, 1, 1)',
              delay: 0,
              duration: 0.25
            }
          },
          asset: {
            arrowLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==',
            arrowRight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=',
            backspaceOutline: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC',
            check: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=='
          },
          color: {
            palette: {},
            white: '0xffffffff',
            black: '0x000000ff',
            grey: '0x929096ff',
            red: '0xe74c3cff',
            orange: '0xdc7633ff',
            yellow: '0xf7dc6fff',
            green: '0x2ecc71ff',
            blue: '0x93a9fdff',
            purple: '0x663399ff',
            overlay: '0x181819b3',
            material: '0x181819ff',
            materialNeutral: '0x181819ff',
            materialNeutralElevated: '0x373639ff',
            materialInverse: '0xf8f7faff',
            materialInverseElevated: '0xffffffff',
            materialBrand: '0x000033ff',
            materialBrandElevated: '0x242a65ff',
            textNeutral: '0xf8f7faff',
            textNeutralSecondary: '0xf8f7fab3',
            textNeutralTertiary: '0xf8f7fa1a',
            textNeutralDisabled: '0xf8f7fa80',
            textInverse: '0x181819ff',
            textInverseSecondary: '0x181819b3',
            textInverseTertiary: '0x1818191a',
            textInverseDisabled: '0x18181980',
            textBrand: '0x93a9fdff',
            textBrandSecondary: '0x93a9fdb3',
            textBrandTertiary: '0x93a9fd1a',
            textBrandDisabled: '0x93a9fd80',
            textPositive: '0x2ecc71ff',
            textNegative: '0xe74c3cff',
            textInfo: '0x93a9fdff',
            textCaution: '0xdc7633ff',
            fillTransparent: '0xffffff0',
            fillNeutral: '0xf8f7faff',
            fillNeutralSecondary: '0xf8f7fab3',
            fillNeutralTertiary: '0xf8f7fa1a',
            fillNeutralDisabled: '0xf8f7fa80',
            fillInverse: '0x181819ff',
            fillInverseSecondary: '0x181819b3',
            fillInverseTertiary: '0x1818191a',
            fillInverseDisabled: '0x18181980',
            fillBrand: '0x93a9fdff',
            fillBrandSecondary: '0x93a9fdb3',
            fillBrandTertiary: '0x93a9fd1a',
            fillBrandDisabled: '0x93a9fd80',
            fillPositive: '0x2ecc71ff',
            fillNegative: '0xe74c3cff',
            fillInfo: '0x93a9fdff',
            fillCaution: '0xdc7633ff',
            strokeNeutral: '0xf8f7faff',
            strokeNeutralSecondary: '0xf8f7fab3',
            strokeNeutralTertiary: '0xf8f7fa1a',
            strokeNeutralDisabled: '0xf8f7fa80',
            strokeInverse: '0x181819ff',
            strokeInverseSecondary: '0x181819b3',
            strokeInverseTertiary: '0x1818191a',
            strokeInverseDisabled: '0x18181980',
            strokeBrand: '0x93a9fdff',
            strokeBrandSecondary: '0x93a9fdb3',
            strokeBrandTertiary: '0x93a9fd1a',
            strokeBrandDisabled: '0x93a9fd80',
            strokePositive: '0x2ecc71ff',
            strokeNegative: '0xe74c3cff',
            strokeInfo: '0x93a9fdff',
            strokeCaution: '0xdc7633ff',
            interactiveNeutral: '0xffffff1a',
            interactiveNeutralFocus: '0xffffffff',
            interactiveNeutralFocusSoft: '0xffffff1a',
            interactiveInverse: '0x48474b1a',
            interactiveInverseFocus: '0x48474bff',
            interactiveInverseFocusSoft: '0x48474b1a',
            interactiveBrand: '0xbecffe1a',
            interactiveBrandFocus: '0xbecffeff',
            interactiveBrandFocusSoft: '0xbecffe1a',
            shadowNeutral: '0x000000b3',
            shadowNeutralFocus: '0x000000b3',
            shadowNeutralFocusSoft: '0x000000b3',
            shadowNeutralText: '0x000000ff',
            shadowInverse: '0x000000b3',
            shadowInverseFocus: '0x000000b3',
            shadowInverseFocusSoft: '0x000000b3',
            shadowInverseText: '0x000000ff',
            shadowBrand: '0x000000b3',
            shadowBrandFocus: '0x000000b3',
            shadowBrandFocusSoft: '0x000000b3',
            shadowBrandText: '0x000000ff'
          },
          font: [],
          layout: {
            columnCount: 10,
            focusScale: 1.2,
            gutterX: 20,
            gutterY: 20,
            marginX: 150,
            marginY: 150,
            safe: 50,
            screenW: 1920,
            screenH: 1080
          },
          radius: {
            none: 0,
            xs: 2,
            sm: 4,
            md: 8,
            lg: 16,
            xl: 24
          },
          spacer: {
            none: 0,
            xxs: 2,
            xs: 4,
            sm: 8,
            md: 10,
            lg: 20,
            xl: 30,
            xxl: 40,
            xxxl: 50
          },
          stroke: {
            none: 0,
            sm: 2,
            md: 4,
            lg: 6,
            xl: 8
          },
          typography: {
            display1: {
              fontFamily: 'Arial',
              fontSize: 75,
              lineHeight: 85,
              fontWeight: 500,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            display2: {
              fontFamily: 'Arial',
              fontSize: 50,
              lineHeight: 60,
              fontWeight: 500,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            display3: {
              fontFamily: 'Arial',
              fontSize: 56,
              fontWeight: 400,
              lineHeight: 68,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            display4: {
              fontFamily: 'Arial',
              fontSize: 48,
              fontWeight: 400,
              lineHeight: 64,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            headline1: {
              fontFamily: 'Arial',
              fontSize: 35,
              fontWeight: 500,
              lineHeight: 48,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            headline2: {
              fontFamily: 'Arial',
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 40,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            headline3: {
              fontFamily: 'Arial',
              fontSize: 25,
              fontWeight: 500,
              lineHeight: 36,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            body1: {
              fontFamily: 'Arial',
              fontSize: 25,
              fontWeight: 300,
              lineHeight: 40,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            body2: {
              fontFamily: 'Arial',
              fontSize: 22,
              fontWeight: 300,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            body3: {
              fontFamily: 'Arial',
              fontSize: 20,
              fontWeight: 300,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            button1: {
              fontFamily: 'Arial',
              fontSize: 25,
              fontWeight: 500,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            button2: {
              fontFamily: 'Arial',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            callout1: {
              fontFamily: 'Arial',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            caption1: {
              fontFamily: 'Arial',
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 24,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            tag1: {
              fontFamily: 'Arial',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 24,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            footnote1: {
              fontFamily: 'Arial',
              fontSize: 22,
              fontWeight: 300,
              lineHeight: 30,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            subtitle1: {
              fontFamily: 'Arial',
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 36,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            subtitle2: {
              fontFamily: 'Arial',
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            },
            navigation: {
              fontFamily: 'Arial',
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 32,
              verticalAlign: 'middle',
              textBaseline: 'bottom'
            }
          },
          componentConfig: {
            Keyboard: {
              base: {
                keyProps: {
                  delete: {
                    title: null,
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC'
                  }
                }
              }
            }
          }
        });
        function Background() {
          var params = new URLSearchParams(window.location.search);
          var disableBG = params.get("disableBG") === "true";
          var bg1, bg2, heroMask;
          var active = 0;
          var alpha = 1;
          var animationSettings = {
            duration: 550,
            easing: "ease-in-out"
          };
          var bgStyles = {
            alpha,
            color: 4294967295
          };
          onMount(() => {
            if (disableBG) {
              heroMask.src = "";
              heroMask.colorLeft = 0x000000FF;
              heroMask.colorRight = 0x00000000;
              return;
            }
          });
          function changeBackgrounds(img) {
            if (disableBG) {
              heroMask.src = "";
              heroMask.colorLeft = 0x000000FF;
              heroMask.colorRight = 0x00000000;
              return;
            }
            if (typeof img !== "string") {
              bg1.color = img;
              bg1.src = "";
              bg1.alpha = 1;
              active = 1;
              bg2.alpha = 0;
              heroMask.alpha = 0;
              return;
            } else {
              bg1.color = 4294967295;
              heroMask.alpha = 1;
            }
            var currentBg = active === 1 ? bg2 : bg1;
            var nextBg = active === 1 ? bg1 : bg2;
            currentBg.src = img;
            if (active === 0) {
              currentBg.alpha = 1;
            } else {
              currentBg.alpha = 0.01;
              currentBg.animate({
                alpha: 1
              }, animationSettings).start();
            }
            nextBg.animate({
              alpha: 0.01
            }, animationSettings).start();
            active = active === 1 ? 2 : 1;
          }
          createEffect(on(globalBackground, img => {
            changeBackgrounds(img);
          }, {
            defer: true
          }));
          return createComponent(View, {
            width: 1920,
            height: 1080,
            zIndex: -5,
            get children() {
              return [createComponent(View, {
                ref(r$) {
                  var _ref$ = bg1;
                  typeof _ref$ === "function" ? _ref$(r$) : bg1 = r$;
                },
                style: bgStyles
              }), createComponent(View, {
                ref(r$) {
                  var _ref$2 = bg2;
                  typeof _ref$2 === "function" ? _ref$2(r$) : bg2 = r$;
                },
                style: bgStyles,
                alpha: 0
              }), createComponent(View, {
                ref(r$) {
                  var _ref$3 = heroMask;
                  typeof _ref$3 === "function" ? _ref$3(r$) : heroMask = r$;
                },
                src: "./assets/hero-mask-inverted.png",
                get color() {
                  return hexColor(theme.color.materialBrand);
                },
                width: 1920,
                height: 1080
              })];
            }
          });
        }
        var styles$7 = {
          Column: {
            flexDirection: "column",
            display: "flex",
            width: 140,
            height: 600,
            y: 360,
            gap: 20,
            zIndex: 101,
            transition: {
              x: {
                duration: 250,
                easing: "ease-in-out"
              }
            },
            x: 8,
            $focus: {
              width: 500,
              x: theme.layout.marginX
            }
          },
          Gradient: {
            zIndex: 99,
            color: 0x000000FF,
            src: "./assets/sidenav.png",
            alpha: 0,
            width: 200,
            height: 1080,
            $focus: {
              alpha: 1,
              width: 1600
            },
            transition: {
              alpha: true,
              width: true
            }
          },
          NavButton: {
            zIndex: 102,
            height: 70,
            width: 100,
            borderRadius: 8,
            color: 0,
            $focus: {
              color: 0x424242FF
            },
            $active: {
              width: 328,
              height: 70
            }
          }
        };
        var basePath$1 = "/lightning-solid-demo-app/";
        var icons = [{
          name: "experiment",
          width: 81,
          height: 100,
          x: 0,
          y: 0
        }, {
          name: "trending",
          width: 100,
          height: 56,
          x: 81,
          y: 0
        }, {
          name: "tv",
          width: 100,
          height: 68,
          x: 181,
          y: 0
        }, {
          name: "movie",
          width: 94,
          height: 100,
          x: 282,
          y: 0
        }];
        var sprite;
        function Icon(props) {
          sprite = sprite || createSpriteMap(basePath$1 + "assets/icons_white.png", icons);
          return createComponent(View, mergeProps(props, {
            get texture() {
              return sprite[props.name];
            },
            get width() {
              return sprite[props.name].props.width;
            },
            get height() {
              return sprite[props.name].props.height;
            },
            get x() {
              return (100 - (sprite[props.name].props.width || 0)) / 2;
            },
            get y() {
              return (100 - (sprite[props.name].props.height || 0)) / 2;
            }
          }));
        }
        var NavButtonTextStyles = {
          fontSize: 38,
          x: 116,
          y: 18,
          height: 50,
          alpha: 0,
          $active: {
            alpha: 1
          }
        };
        function NavButton(props) {
          return createComponent(View, mergeProps(props, {
            forwardStates: true,
            get style() {
              return styles$7.NavButton;
            },
            get children() {
              return [createComponent(View, {
                y: -16,
                get children() {
                  return createComponent(Icon, {
                    scale: 0.5,
                    get name() {
                      return props.icon;
                    }
                  });
                }
              }), createComponent(Text$4, {
                style: NavButtonTextStyles,
                get children() {
                  return props.children;
                }
              })];
            }
          }));
        }
        function NavDrawer(props) {
          var backdrop;
          var navigate = useNavigate();
          function onFocus() {
            backdrop.states.add("$focus");
            this.children.forEach(c => c.states.add("$active"));
            this.children[this.selected || 0].setFocus();
          }
          function onBlur() {
            backdrop.states.remove("$focus");
            this.selected = 0;
            this.children.forEach(c => c.states.remove("$active"));
          }
          function handleNavigate(page) {
            var isOnPage = useMatch(() => page);
            if (isOnPage()) {
              return props.focusPage();
            }
            navigate(page);
          }
          return [createComponent(View, {
            flexItem: false,
            width: 300,
            height: 150,
            x: 30,
            y: 15,
            zIndex: 105,
            get alpha() {
              return props.showWidgets ? 1 : 0.01;
            },
            get children() {
              return [createComponent(Text$4, {
                x: 80,
                fontSize: 28,
                color: 4143380036,
                children: "Built With:"
              }), createComponent(View, {
                y: 22,
                src: "./assets/solidWord.png",
                width: 280,
                height: 52
              }), createComponent(View, {
                x: 0,
                y: 110,
                src: "./assets/tmdb.png",
                width: 80,
                height: 41
              }), createComponent(Text$4, {
                x: 90,
                y: 110,
                contain: "width",
                width: 160,
                fontSize: 12,
                color: 4143380036,
                children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
              })];
            }
          }), createComponent(Column, mergeProps(props, {
            onFocus,
            onBlur,
            get style() {
              return styles$7.Column;
            },
            scroll: "none",
            get children() {
              return [createComponent(NavButton, {
                onEnter: () => handleNavigate("/browse/all"),
                icon: "trending",
                children: "Trending"
              }), createComponent(NavButton, {
                icon: "movie",
                onEnter: () => handleNavigate("/browse/movie"),
                children: "Movies"
              }), createComponent(NavButton, {
                icon: "tv",
                onEnter: () => handleNavigate("/browse/tv"),
                children: "TV"
              }), createComponent(NavButton, {
                icon: "experiment",
                onEnter: () => handleNavigate("/examples"),
                children: "Examples"
              })];
            }
          })), createComponent(View, {
            skipFocus: true,
            ref(r$) {
              var _ref$ = backdrop;
              typeof _ref$ === "function" ? _ref$(r$) : backdrop = r$;
            },
            get style() {
              return styles$7.Gradient;
            }
          })];
        }

        /*
         * Copyright 2024 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /**
         * Object.fromEntries is added in chrome 74, we need to support 63 where possible
         */
        function objectFromEntries(entries) {
          if (!entries || !entries[Symbol.iterator]) {
            throw new Error('objectFromEntries requires a single iterable argument');
          }
          var obj = {};
          var _iterator26 = _createForOfIteratorHelper(entries),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _step26$value = _slicedToArray(_step26.value, 2),
                _key34 = _step26$value[0],
                value = _step26$value[1];
              obj[_key34] = value;
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
          return obj;
        }

        /*
         * Copyright 2024 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        // TODO types, sub components
        // TODO these are configurable per component, move to theme?
        var defaultModeKeys = ['focus', 'disabled'];
        var defaultToneKeys = ['brand', 'inverse', 'neutral'];
        function makeComponentStyles(_ref56) {
          var themeKeys = _ref56.themeKeys,
            base = _ref56.base,
            themeStyles = _ref56.themeStyles,
            _ref56$modes = _ref56.modes,
            modes = _ref56$modes === void 0 ? {} : _ref56$modes,
            _ref56$tones = _ref56.tones,
            tones = _ref56$tones === void 0 ? {} : _ref56$tones,
            _ref56$modeKeys = _ref56.modeKeys,
            modeKeys = _ref56$modeKeys === void 0 ? defaultModeKeys : _ref56$modeKeys,
            _ref56$toneKeys = _ref56.toneKeys,
            toneKeys = _ref56$toneKeys === void 0 ? defaultToneKeys : _ref56$toneKeys;
          var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          /**
           * creates the object of tone styles
           *
           * for each key in the tone object, pass its set of styles to mapModeConfigToSolidStyle for formatting
           */
          var makeToneStyles = (tones, themeComponentStyles, modeStyles) => {
            var toneStyles = toneKeys.map(tone => {
              var _tones$tone, _themeComponentStyles;
              var styles = {};
              // get list of style keys across both style file and theme component config
              // TODO a better way to do this
              var styleList = new Set(
              // eslint-disable-next-line prefer-spread
              [].concat.apply([], [(_tones$tone = tones === null || tones === void 0 ? void 0 : tones[tone]) !== null && _tones$tone !== void 0 ? _tones$tone : {}, (_themeComponentStyles = themeComponentStyles === null || themeComponentStyles === void 0 ? void 0 : themeComponentStyles[tone]) !== null && _themeComponentStyles !== void 0 ? _themeComponentStyles : {}].map(Object.keys)));
              // combine style file tones and theme component config tones, ignoring tone modes(added below)
              styleList.forEach(styleKey => {
                // if the style isn't a mode
                if (!modeKeys.includes(styleKey)) {
                  var _themeComponentStyles2, _themeComponentStyles3, _tones$tone2;
                  styles[styleKey] = (_themeComponentStyles2 = themeComponentStyles === null || themeComponentStyles === void 0 || (_themeComponentStyles3 = themeComponentStyles[tone]) === null || _themeComponentStyles3 === void 0 ? void 0 : _themeComponentStyles3[styleKey]) !== null && _themeComponentStyles2 !== void 0 ? _themeComponentStyles2 : tones === null || tones === void 0 || (_tones$tone2 = tones[tone]) === null || _tones$tone2 === void 0 ? void 0 : _tones$tone2[styleKey];
                }
              });
              /**
               *  merge tone modes with the following priority(lowest to highest):
               * - base.mode
               * - style file tone.mode
               * - theme component config tone.mode
               */
              modeKeys.forEach(mode => {
                var _tones$tone3, _themeComponentStyles4;
                styles[mode] = _objectSpread(_objectSpread(_objectSpread({}, modeStyles[mode]), tones === null || tones === void 0 || (_tones$tone3 = tones[tone]) === null || _tones$tone3 === void 0 ? void 0 : _tones$tone3[mode]), themeComponentStyles === null || themeComponentStyles === void 0 || (_themeComponentStyles4 = themeComponentStyles[tone]) === null || _themeComponentStyles4 === void 0 ? void 0 : _themeComponentStyles4[mode]);
              });
              return [tone, styles];
            });
            return objectFromEntries(toneStyles);
          };
          /**
           * creates the object of mode(state-controlled) styles
           *
           * for each key in the mode object, pass its set of styles to mapModeConfigToSolidStyle for formatting
           */
          var makeModeStyles = (modes, themeComponentStyles) => {
            var modeStyles = modeKeys.map(mode => {
              return [mode, _objectSpread(_objectSpread({}, modes === null || modes === void 0 ? void 0 : modes[mode]), themeComponentStyles === null || themeComponentStyles === void 0 ? void 0 : themeComponentStyles[mode])];
            });
            var modeObject = objectFromEntries(modeStyles);
            return modeObject;
          };
          /**
           * creates a base style object
           *
           * if a property has a themeable value(has a corresponding themeKey in the themeKeys object) check the
           * componentConfig for a base value. if one exists use it, otherwise use the value from the defaults object
           */
          var makeBaseStyles = (base, themeComponentStyles) => {
            var baseStyles = _objectSpread(_objectSpread({}, base), themeComponentStyles.base);
            return baseStyles;
          };
          /**
           * uses the themeKey map to assign themed values to solid style properties
           * `themeKeys` is globally available
           */
          var mapThemeKeysToSolid = stylesToMap => objectFromEntries(Object.entries(themeKeys).filter(_ref57 => {
            var _ref58 = _slicedToArray(_ref57, 2),
              _ = _ref58[0],
              themeKey = _ref58[1];
            return stylesToMap[themeKey];
          }).map(_ref59 => {
            var _ref60 = _slicedToArray(_ref59, 2),
              solidKey = _ref60[0],
              themeKey = _ref60[1];
            return [solidKey, stylesToMap[themeKey]];
          }));
          var convertComponentConfig = themeStyles => {
            var convertedThemeStyles = objectFromEntries(
            // iterate through each variant
            Object.entries(themeStyles).map(_ref61 => {
              var _ref62 = _slicedToArray(_ref61, 2),
                variantName = _ref62[0],
                styles = _ref62[1];
              // within each variant, assign the theme value to the correct solid style property for each theme key
              var convertedStyles = mapThemeKeysToSolid(styles);
              // repeat the above for each mode within a variant
              Object.entries(styles).filter(_ref63 => {
                var _ref64 = _slicedToArray(_ref63, 2),
                  styleName = _ref64[0],
                  _ = _ref64[1];
                return modeKeys.includes(styleName);
              }).forEach(_ref65 => {
                var _ref66 = _slicedToArray(_ref65, 2),
                  modeName = _ref66[0],
                  modeStyles = _ref66[1];
                convertedStyles[modeName] = mapThemeKeysToSolid(modeStyles);
              });
              return [variantName, convertedStyles];
            }));
            return convertedThemeStyles;
          };
          var generateSolidStylesFromLookupObject = (base, modes, tones) => {
            var themeComponentStyles = convertComponentConfig(themeStyles);
            debug && console.log(themeComponentStyles);
            var baseStyles = makeBaseStyles(base, themeComponentStyles);
            debug && console.log(baseStyles);
            var modeStyles = makeModeStyles(modes, themeComponentStyles);
            debug && console.log(modeStyles);
            var toneStyles = makeToneStyles(tones, themeComponentStyles, modeStyles);
            debug && console.log(toneStyles);
            return {
              base: _objectSpread(_objectSpread({}, baseStyles), modeStyles),
              tones: toneStyles
            };
          };
          return generateSolidStylesFromLookupObject(base, modes, tones);
        }

        /*
         * Copyright 2024 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        function getWidthByUpCount() {
          var upCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var screenW = theme.layout.screenW;
          var columnCount = theme.layout.columnCount;
          var marginX = theme.layout.marginX;
          var gutterX = theme.layout.gutterX;
          if (upCount < 1 || upCount > columnCount) {
            console.error(`getWidthByUpCount expects an upCount between 1 & ${columnCount}, received ${upCount}. Defaulting to upCount 1.`);
            upCount = 1;
          }
          // the screen width, minus the margin x on each side
          var columnWidth = screenW - marginX * 2;
          // the total space of column gaps in between items
          var columnGapTotal = (upCount - 1) * gutterX;
          // the remaining amount of space left for all items
          var totalColumnsWidth = columnWidth - columnGapTotal;
          // the width of each item in that remaining width
          return totalColumnsWidth / upCount;
        }

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi2 = _theme$componentConfi.Artwork,
          _theme$componentConfi3 = _theme$componentConfi2 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi2,
          defaultTone$e = _theme$componentConfi3.defaultTone,
          themeStyles$e = _objectWithoutProperties(_theme$componentConfi3, _excluded);
        var container$e = {
          themeKeys: {
            borderRadius: 'radius',
            fallbackSrc: 'fallbackSrc',
            fillColor: 'fillColor',
            gradientColor: 'gradientColor',
            pivotX: 'imageScalePivotX',
            pivotY: 'imageScalePivotY',
            scale: 'imageScale'
          },
          base: {
            fallbackSrc: undefined,
            fillColor: theme.color.overlay,
            gradientColor: theme.color.material,
            pivotX: 0.5,
            pivotY: 0.5,
            scale: undefined,
            borderRadius: theme.radius.md
          },
          themeStyles: themeStyles$e
        };
        makeComponentStyles(container$e);

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi4 = theme.componentConfig.Badge,
          _theme$componentConfi5 = _theme$componentConfi4 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi4,
          defaultTone$d = _theme$componentConfi5.defaultTone,
          themeStyles$d = _objectWithoutProperties(_theme$componentConfi5, _excluded2);
        var container$d = {
          themeKeys: {
            color: 'backgroundColor',
            borderRadius: 'radius',
            gap: 'contentSpacing'
          },
          base: {
            // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
            // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
            color: theme.color.fillInverseSecondary,
            borderRadius: theme.radius.sm,
            // borderRadius must be applied _before_ border to prevent the node from breaking
            border: {
              color: theme.color.strokeInverse,
              width: theme.stroke.sm
            },
            gap: theme.spacer.xs,
            display: 'flex',
            justifyContent: 'flexStart',
            alignItems: 'center'
          },
          tones: {
            inverse: {
              color: theme.color.fillNeutralSecondary,
              borderRadius: theme.radius.sm,
              border: {
                color: theme.color.strokeInverseSecondary,
                width: theme.stroke.sm
              }
            },
            brand: {
              color: theme.color.fillBrand,
              borderRadius: theme.radius.sm,
              border: {
                color: theme.color.strokeInverseSecondary,
                width: theme.stroke.sm
              }
            }
          },
          themeStyles: themeStyles$d
        };
        var text$5 = {
          themeKeys: {
            color: 'textColor'
          },
          base: _objectSpread(_objectSpread({}, theme.typography.tag1), {}, {
            color: theme.color.textNeutral,
            lineHeight: theme.typography.tag1.lineHeight + 12,
            marginRight: theme.spacer.md + theme.stroke.sm,
            marginLeft: theme.spacer.md + theme.stroke.sm
          }),
          tones: {
            inverse: {
              color: theme.color.textInverse
            },
            brand: {
              color: theme.color.textNeutral
            }
          },
          themeStyles: themeStyles$d
        };
        var icon$1 = {
          themeKeys: {
            color: 'iconColor'
          },
          base: {
            color: theme.color.textNeutral
          },
          tones: {
            inverse: {
              color: theme.color.textInverse
            },
            brand: {
              color: theme.color.textNeutral
            }
          },
          themeStyles: themeStyles$d
        };
        makeComponentStyles(container$d);
        makeComponentStyles(icon$1);
        makeComponentStyles(text$5);

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi6 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi7 = _theme$componentConfi6.Button,
          _theme$componentConfi8 = _theme$componentConfi7 === void 0 ? {
            buttonThemeStyles: {}
          } : _theme$componentConfi7,
          defaultTone$c = _theme$componentConfi8.defaultTone,
          buttonThemeStyles = _objectWithoutProperties(_theme$componentConfi8, _excluded3);
        /* @ts-expect-error next-line see above */
        var _theme$componentConfi9 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi10 = _theme$componentConfi9.Surface,
          _theme$componentConfi11 = _theme$componentConfi10 === void 0 ? {
            surfaceThemeStyles: {}
          } : _theme$componentConfi10,
          surfaceDefaultTone = _theme$componentConfi11.surfaceDefaultTone,
          surfaceThemeStyles = _objectWithoutProperties(_theme$componentConfi11, _excluded4);
        var themeStyles$c = _objectSpread(_objectSpread({}, buttonThemeStyles), surfaceThemeStyles);
        var container$c = {
          themeKeys: {
            borderRadius: 'radius',
            color: 'backgroundColor',
            justifyContent: 'justify',
            itemSpacing: 'contentSpacing'
          },
          base: {
            height: theme.typography.button1.lineHeight + theme.spacer.xl * 2,
            display: 'flex',
            padding: [theme.spacer.xxxl, theme.spacer.xl],
            color: theme.color.interactiveNeutral,
            justifyContent: 'center',
            alignItems: 'center',
            flexBoundary: 'fixed',
            borderRadius: theme.radius.sm,
            contentColor: theme.color.fillNeutral
          },
          modes: {
            focus: {
              color: theme.color.interactiveNeutralFocus,
              contentColor: theme.color.fillInverse
            },
            disabled: {
              color: theme.color.fillNeutralDisabled
            }
          },
          tones: {
            inverse: {
              color: theme.color.interactiveInverse
            },
            brand: {
              color: theme.color.interactiveBrand,
              focus: {
                color: theme.color.fillNeutral
              }
            }
          },
          themeStyles: themeStyles$c
        };
        var content = {
          themeKeys: {
            color: 'contentColor'
          },
          base: {
            color: theme.color.textNeutral
          },
          modes: {
            focus: {
              color: theme.color.textInverse
            },
            disabled: {
              color: theme.color.textNeutralDisabled
            }
          },
          tones: {
            inverse: {
              color: theme.color.fillNeutral
            },
            brand: {
              color: theme.color.fillBrand,
              focus: {
                color: theme.color.fillBrand
              }
            }
          },
          themeStyles: themeStyles$c
        };
        var text$4 = {
          themeKeys: {
            color: 'textColor'
          },
          base: _objectSpread(_objectSpread({
            color: theme.color.textNeutral
          }, theme.typography.button1), {}, {
            textAlign: 'center',
            contain: 'none'
          }),
          modes: {
            focus: {
              color: theme.color.textInverse
            },
            disabled: {
              color: theme.color.textNeutralDisabled
            }
          },
          tones: {
            inverse: {
              color: theme.color.fillNeutral
            },
            brand: {
              color: theme.color.fillBrand,
              focus: {
                color: theme.color.fillBrand
              }
            }
          },
          themeStyles: themeStyles$c
        };
        var Container$5 = makeComponentStyles(container$c);
        var Content = makeComponentStyles(content);
        var Text$3 = makeComponentStyles(text$4);
        var styles$6 = exports("Z", {
          tone: defaultTone$c || surfaceDefaultTone || 'neutral',
          Container: Container$5,
          Content,
          Text: Text$3
        });

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi12 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi13 = _theme$componentConfi12.Checkbox,
          _theme$componentConfi14 = _theme$componentConfi13 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi13,
          defaultTone$b = _theme$componentConfi14.defaultTone,
          themeStyles$b = _objectWithoutProperties(_theme$componentConfi14, _excluded5);
        var container$b = {
          themeKeys: {
            color: 'backgroundColor',
            borderRadius: 'radius',
            border: 'border',
            justifyContent: 'justifyContent'
          },
          base: {
            width: theme.spacer.xxl,
            height: theme.spacer.xxl,
            display: 'flex',
            justifyContent: 'center',
            color: theme.color.fillNeutral,
            alignItems: 'center',
            borderRadius: theme.spacer.xxl / 4,
            border: {
              color: theme.color.strokeInverse,
              width: theme.stroke.sm
            }
          },
          modes: {
            disabled: {
              alpha: theme.alpha.inactive
            }
          },
          tones: {
            brand: {
              borderRadius: theme.spacer.xxl / 4,
              border: {
                color: theme.color.strokeNeutralSecondary,
                width: theme.stroke.sm
              },
              color: theme.color.fillNeutralSecondary,
              checked: {
                borderRadius: theme.spacer.xxl / 4,
                border: {
                  color: theme.color.strokeNeutralSecondary,
                  width: theme.stroke.sm
                },
                color: theme.color.fillBrand
              }
            },
            neutral: {
              borderRadius: theme.spacer.xxl / 4,
              border: {
                color: theme.color.strokeNeutralSecondary,
                width: theme.stroke.sm
              },
              color: theme.color.fillInverseSecondary,
              checked: {
                borderRadius: theme.spacer.xxl / 4,
                border: {
                  color: theme.color.strokeNeutralSecondary,
                  width: theme.stroke.sm
                },
                color: theme.color.fillNeutral
              }
            },
            inverse: {
              borderRadius: theme.spacer.xxl / 4,
              border: {
                color: theme.color.strokeInverseSecondary,
                width: theme.stroke.sm
              },
              color: theme.color.fillNeutralSecondary,
              checked: {
                borderRadius: theme.spacer.xxl / 4,
                border: {
                  color: theme.color.strokeInverseSecondary,
                  width: theme.stroke.sm
                },
                color: theme.color.fillInverse
              }
            }
          },
          modeKeys: ['focus', 'disabled', 'checked'],
          themeStyles: themeStyles$b
        };
        var icon = {
          themeKeys: {
            // color: 'strokeColor', see types 58 for TODO
            width: 'checkWidth',
            height: 'checkHeight'
          },
          base: {
            width: theme.spacer.lg,
            height: theme.spacer.lg,
            src: theme.asset.check
          },
          tones: {
            neutral: {
              color: theme.color.fillInverse
            },
            inverse: {
              color: theme.color.fillNeutral
            },
            brand: {
              color: theme.color.fillInverse
            }
          },
          themeStyles: themeStyles$b
        };
        makeComponentStyles(container$b);
        makeComponentStyles(icon);

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi15 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi16 = _theme$componentConfi15.Icon,
          _theme$componentConfi17 = _theme$componentConfi16 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi16,
          defaultTone$a = _theme$componentConfi17.defaultTone,
          themeStyles$a = _objectWithoutProperties(_theme$componentConfi17, _excluded6);
        var container$a = {
          themeKeys: {
            color: 'color'
          },
          base: {
            width: 100,
            height: 100,
            color: theme.color.fillNeutral
          },
          tones: {
            inverse: {
              color: theme.color.fillInverse
            },
            brand: {
              color: theme.color.fillBrand
            }
          },
          themeStyles: themeStyles$a
        };
        makeComponentStyles(container$a);

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi18 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi19 = _theme$componentConfi18.Column,
          _theme$componentConfi20 = _theme$componentConfi19 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi19,
          defaultTone$9 = _theme$componentConfi20.defaultTone,
          themeStyles$9 = _objectWithoutProperties(_theme$componentConfi20, _excluded7);
        var container$9 = {
          themeKeys: {
            gap: 'itemSpacing',
            scrollIndex: 'scrollIndex',
            transition: 'itemTransition'
          },
          base: {
            display: 'flex',
            flexDirection: 'column',
            gap: theme.layout.gutterY,
            transition: {
              y: _objectSpread(_objectSpread({}, theme.animation.standardEntrance), {}, {
                duration: theme.animation.duration.fast
              })
            }
          },
          themeStyles: themeStyles$9
        };
        var Container$4 = makeComponentStyles(container$9);
        var styles$5 = exports("Q", {
          tone: defaultTone$9 || 'neutral',
          Container: Container$4
        });

        /*
         * Copyright 2024 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi21 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi22 = _theme$componentConfi21.FocusRing,
          _theme$componentConfi23 = _theme$componentConfi22 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi22,
          defaultTone$8 = _theme$componentConfi23.defaultTone,
          themeStyles$8 = _objectWithoutProperties(_theme$componentConfi23, _excluded8);
        var container$8 = {
          themeKeys: {
            borderRadius: 'radius'
          },
          base: {
            x: 0,
            y: 0,
            borderRadius: theme.radius.lg,
            border: {
              color: theme.color.interactiveNeutralFocus,
              width: theme.stroke.md
            }
          },
          themeStyles: themeStyles$8
        };
        makeComponentStyles(container$8);

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi24 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi25 = _theme$componentConfi24.Input,
          _theme$componentConfi26 = _theme$componentConfi25 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi25,
          defaultTone$7 = _theme$componentConfi26.defaultTone,
          themeStyles$7 = _objectWithoutProperties(_theme$componentConfi26, _excluded9);
        var container$7 = {
          themeKeys: {
            borderRadius: 'radius',
            color: 'backgroundColor',
            justifyContent: 'justify'
          },
          base: {
            // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
            // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
            width: getWidthByUpCount(4),
            height: 100,
            padding: [theme.spacer.xxxl, theme.spacer.xl],
            color: theme.color.interactiveNeutral,
            contentColor: theme.color.fillInverse,
            borderRadius: theme.radius.sm,
            marginX: theme.spacer.xxxl,
            actualTitle: ''
          },
          themeStyles: themeStyles$7
        };
        var text$3 = {
          themeKeys: {
            color: 'textColor'
          },
          base: _objectSpread({
            textAlign: 'left',
            color: theme.color.textNeutral
          }, theme.typography.button1),
          themeStyles: themeStyles$7
        };
        var Container$3 = makeComponentStyles(container$7);
        var Text$2 = makeComponentStyles(text$3);
        var styles$4 = exports("U", {
          tone: defaultTone$7 || 'neutral',
          Container: Container$3,
          Text: Text$2
        });

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi27 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi28 = _theme$componentConfi27.Key,
          _theme$componentConfi29 = _theme$componentConfi28 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi28,
          defaultTone$6 = _theme$componentConfi29.defaultTone,
          themeStyles$6 = _objectWithoutProperties(_theme$componentConfi29, _excluded10);
        var container$6 = {
          themeKeys: {
            keySpacing: 'keySpacing',
            borderRadius: 'borderRadius',
            color: 'backgroundColor',
            justifyContent: 'justify',
            baseWidth: 'baseWidth',
            sizes: 'sizes',
            contentColor: 'contentColor'
          },
          base: {
            keySpacing: theme.spacer.md,
            height: theme.spacer.md * 9,
            paddingX: theme.spacer.md,
            contentColor: theme.color.fillNeutral,
            sizes: {
              sm: 1,
              md: 2,
              lg: 3,
              xl: 4,
              xxl: 5
            },
            padding: [theme.spacer.md],
            baseWidth: theme.spacer.md * 7,
            color: theme.color.interactiveNeutral,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: theme.radius.sm
          },
          modes: {
            focus: {
              color: theme.color.interactiveNeutralFocus,
              contentColor: theme.color.fillInverse
            },
            disabled: {
              color: theme.color.fillNeutralDisabled,
              contentColor: theme.color.fillNeutralDisabled
            }
          },
          tones: {
            inverse: {
              color: theme.color.interactiveInverse,
              focus: {
                color: theme.color.interactiveInverseFocus,
                contentColor: theme.color.fillNeutral
              }
            },
            brand: {
              focus: {
                contentColor: theme.color.fillNeutral
              }
            }
          },
          themeStyles: themeStyles$6
        };
        var text$2 = {
          themeKeys: {
            color: 'textColor'
          },
          base: _objectSpread(_objectSpread({
            color: theme.color.textNeutral
          }, theme.typography.headline2), {}, {
            textAlign: 'center',
            contain: 'none'
          }),
          modes: {
            focus: {
              color: theme.color.textInverse
            },
            disabled: {
              color: theme.color.textNeutralDisabled
            }
          },
          tones: {
            inverse: {
              focus: {
                color: theme.color.textNeutral
              }
            }
          },
          themeStyles: themeStyles$6
        };
        var Container$2 = makeComponentStyles(container$6);
        var Text$1 = makeComponentStyles(text$2);
        var styles$3 = exports("W", {
          tone: defaultTone$6 || 'neutral',
          Container: Container$2,
          Text: Text$1
        });

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi30 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi31 = _theme$componentConfi30.Row,
          _theme$componentConfi32 = _theme$componentConfi31 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi31,
          defaultTone$5 = _theme$componentConfi32.defaultTone,
          themeStyles$5 = _objectWithoutProperties(_theme$componentConfi32, _excluded11);
        var container$5 = {
          themeKeys: {
            gap: 'itemSpacing',
            scrollIndex: 'scrollIndex',
            transition: 'itemTransition'
          },
          base: {
            display: 'flex',
            flexDirection: 'row',
            gap: theme.layout.gutterX,
            transition: {
              x: _objectSpread(_objectSpread({}, theme.animation.standardEntrance), {}, {
                duration: theme.animation.duration.fast
              })
            }
          },
          themeStyles: themeStyles$5
        };
        var Container$1 = makeComponentStyles(container$5);
        var styles$2 = exports("X", {
          tone: defaultTone$5,
          Container: Container$1
        });

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi33 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi34 = _theme$componentConfi33.Keyboard,
          _theme$componentConfi35 = _theme$componentConfi34 === void 0 ? {} : _theme$componentConfi34,
          defaultTone$4 = _theme$componentConfi35.defaultTone,
          themeStyles$4 = _objectWithoutProperties(_theme$componentConfi35, _excluded12);
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi36 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi37 = _theme$componentConfi36.Key,
          _theme$componentConfi38 = _theme$componentConfi37 === void 0 ? {} : _theme$componentConfi37,
          keyThemeStyles = Object.assign({}, (_objectDestructuringEmpty(_theme$componentConfi38), _theme$componentConfi38)); // TODO default tone for sub-components
        var container$4 = {
          themeKeys: {
            gap: 'keySpacing',
            width: 'screenW',
            marginX: 'marginX',
            keyHeight: 'keyHeight'
          },
          base: {
            gap: theme.spacer.md,
            width: theme.layout.screenW,
            display: 'flex',
            marginX: theme.layout.marginX,
            keyHeight: 100,
            flexBoundary: 'contain'
          },
          // @ts-expect-error TODO fix style types for component configs
          themeStyles: themeStyles$4
        };
        var key = {
          themeKeys: {
            gap: 'keySpacing',
            borderRadius: 'borderRadius',
            color: 'backgroundColor',
            justifyContent: 'justify',
            baseWidth: 'baseWidth',
            sizes: 'sizes',
            contentColor: 'contentColor' // what is this used for
          },
          base: {
            gap: theme.spacer.md,
            height: theme.spacer.md * 9,
            sizes: {
              sm: 1,
              md: 2,
              lg: 3,
              xl: 4,
              xxl: 5
            },
            contentColor: theme.color.fillNeutral,
            padding: [theme.spacer.xxxl, theme.spacer.xl],
            baseWidth: theme.spacer.md * 7,
            color: theme.color.interactiveNeutral,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: theme.radius.sm
          },
          modes: {
            focus: {
              color: theme.color.interactiveNeutralFocus,
              contentColor: theme.color.fillInverse
            },
            disabled: {
              color: theme.color.fillNeutralDisabled,
              contentColor: theme.color.fillNeutralDisabled
            }
          },
          tones: {
            inverse: {
              color: theme.color.interactiveInverse,
              focus: {
                color: theme.color.interactiveInverseFocus,
                contentColor: theme.color.fillNeutral
              }
            },
            brand: {
              focus: {
                contentColor: theme.color.fillNeutral
              }
            }
          },
          themeStyles: keyThemeStyles
        };
        var text$1 = {
          themeKeys: {
            color: 'textColor'
          },
          base: _objectSpread({
            color: theme.color.textNeutral
          }, theme.typography.headline2),
          modes: {
            focus: {
              color: theme.color.textInverse
            },
            disabled: {
              color: theme.color.textNeutralDisabled
            }
          },
          tones: {
            inverse: {
              focus: {
                color: theme.color.textNeutral
              }
            }
          },
          // @ts-expect-error TODO fix style types for component configs
          themeStyles: themeStyles$4
        };
        var Container = makeComponentStyles(container$4);
        var Key = makeComponentStyles(key);
        var Text = makeComponentStyles(text$1);
        var styles$1 = exports("Y", {
          tone: defaultTone$4,
          Container,
          Key,
          Text
        });

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi39 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi40 = _theme$componentConfi39.Label,
          _theme$componentConfi41 = _theme$componentConfi40 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi40,
          defaultTone$3 = _theme$componentConfi41.defaultTone,
          themeStyles$3 = _objectWithoutProperties(_theme$componentConfi41, _excluded13);
        var container$3 = {
          themeKeys: {
            color: 'backgroundColor',
            borderRadius: 'radius'
          },
          base: {
            display: 'flex',
            justifyContent: 'flexStart',
            color: theme.color.textNeutral,
            padding: [theme.spacer.md, theme.spacer.lg],
            // TODO themed padding values
            height: theme.typography.caption1.lineHeight + theme.spacer.md * 2,
            borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none],
            neutral: {
              backgroundColor: theme.color.fillNeutral
            }
          },
          tones: {
            inverse: {
              color: theme.color.fillInverse
            },
            brand: {
              color: theme.color.fillBrand,
              focus: {
                color: theme.color.orange
              }
            }
          },
          themeStyles: themeStyles$3
        };
        var text = {
          themeKeys: {
            color: 'textColor'
          },
          base: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
            color: theme.color.textInverse,
            lineHeight: theme.typography.caption1.lineHeight + theme.spacer.md * 2,
            marginRight: theme.spacer.lg,
            marginLeft: theme.spacer.lg
          }),
          tones: {
            inverse: {
              color: theme.color.textNeutral
            },
            brand: {
              color: theme.color.textNeutral
            }
          },
          themeStyles: themeStyles$3
        };
        makeComponentStyles(container$3);
        makeComponentStyles(text);

        /*
         * Copyright 2023 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi42 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi43 = _theme$componentConfi42.ProgressBar,
          _theme$componentConfi44 = _theme$componentConfi43 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi43,
          defaultTone$2 = _theme$componentConfi44.defaultTone,
          themeStyles$2 = _objectWithoutProperties(_theme$componentConfi44, _excluded14);
        var container$2 = {
          themeKeys: {
            color: 'barColor',
            borderRadius: 'radius'
          },
          base: {
            height: theme.spacer.md,
            color: theme.color.fillNeutralTertiary,
            borderRadius: theme.radius.xs
          },
          tones: {
            inverse: {
              color: theme.color.fillInverseTertiary
            }
          },
          themeStyles: themeStyles$2
        };
        var progress = {
          themeKeys: {
            color: 'progressColor',
            borderRadius: 'radius'
          },
          base: {
            borderRadius: theme.radius.xs,
            color: theme.color.fillNeutral
          },
          tones: {
            inverse: {
              color: theme.color.fillInverse
            },
            brand: {
              color: theme.color.fillBrand
            }
          },
          themeStyles: themeStyles$2
        };
        makeComponentStyles(container$2);
        makeComponentStyles(progress);

        /*
         * Copyright 2024 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi45 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi46 = _theme$componentConfi45.Radio,
          _theme$componentConfi47 = _theme$componentConfi46 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi46,
          defaultTone$1 = _theme$componentConfi47.defaultTone,
          themeStyles$1 = _objectWithoutProperties(_theme$componentConfi47, _excluded15);
        var container$1 = {
          themeKeys: {
            borderRadius: 'radius',
            color: 'backgroundColor',
            colorChecked: 'backgroundColorChecked'
          },
          base: {
            color: theme.color.fillNeutralSecondary,
            height: theme.spacer.xxl + theme.stroke.sm * 2,
            width: theme.spacer.xxl + theme.stroke.sm * 2,
            borderRadius: theme.spacer.xxl / 2 + theme.stroke.sm,
            border: {
              color: theme.color.strokeNeutralSecondary,
              width: theme.stroke.sm
            }
          },
          tones: {
            inverse: {
              border: {
                color: theme.color.strokeInverseSecondary,
                width: theme.stroke.sm
              }
            },
            brand: {
              border: {
                color: theme.color.fillBrand,
                width: theme.stroke.sm
              }
            }
          },
          modeKeys: ['focus', 'disabled', 'checked'],
          themeStyles: themeStyles$1
        };
        var knob$1 = {
          themeKeys: {
            width: 'knobWidth',
            height: 'knobHeight',
            borderRadius: 'knobRadius',
            color: 'knobColor',
            colorChecked: 'knobColorChecked'
          },
          base: {
            color: theme.color.fillInverse,
            colorChecked: theme.color.fillInverse,
            width: theme.spacer.xxl,
            height: theme.spacer.xxl,
            borderRadius: theme.spacer.xxl / 2
          },
          tones: {
            inverse: {
              color: theme.color.fillNeutral
            }
          },
          themeStyles: themeStyles$1
        };
        makeComponentStyles(container$1);
        makeComponentStyles(knob$1);

        /*
         * Copyright 2024 Comcast Cable Communications Management, LLC
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         * SPDX-License-Identifier: Apache-2.0
         */
        /* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
        var _theme$componentConfi48 = theme === null || theme === void 0 ? void 0 : theme.componentConfig,
          _theme$componentConfi49 = _theme$componentConfi48.Toggle,
          _theme$componentConfi50 = _theme$componentConfi49 === void 0 ? {
            themeStyles: {}
          } : _theme$componentConfi49,
          defaultTone = _theme$componentConfi50.defaultTone,
          themeStyles = _objectWithoutProperties(_theme$componentConfi50, _excluded16);
        var knobSize = theme.spacer.xl;
        var knobPadding = theme.spacer.xs;
        var strokeWidth = theme.stroke.sm;
        var container = {
          themeKeys: {
            borderRadius: 'strokeRadius',
            color: 'backgroundColor',
            colorChecked: 'backgroundColorChecked'
          },
          base: {
            color: theme.color.fillInverseTertiary,
            colorChecked: theme.color.fillNeutral,
            height: knobSize + (knobPadding + strokeWidth) * 2,
            width: (strokeWidth + knobPadding * 2 + knobSize) * 2,
            borderRadius: knobSize / 2 + knobPadding + strokeWidth,
            border: {
              // TODO- strokeWidth, strokeColor, and strokeColorChecked map to border object with themeKeys
              color: theme.color.fillNeutral,
              width: strokeWidth
            }
          },
          modes: {
            focus: {},
            disabled: {
              borderRadius: knobSize / 2 + knobPadding + strokeWidth,
              border: {
                color: theme.color.fillNeutralDisabled,
                width: strokeWidth
              },
              color: theme.color.fillInverseDisabled,
              colorChecked: theme.color.fillNeutralDisabled
            }
          },
          tones: {
            inverse: {
              borderRadius: knobSize / 2 + knobPadding + strokeWidth,
              border: {
                color: theme.color.fillInverse,
                width: strokeWidth
              },
              color: theme.color.fillNeutralTertiary,
              colorChecked: theme.color.fillInverse,
              disabled: {
                borderRadius: knobSize / 2 + knobPadding + strokeWidth,
                border: {
                  color: theme.color.fillInverseDisabled,
                  width: strokeWidth
                },
                color: theme.color.fillNeutralDisabled,
                colorChecked: theme.color.fillInverseDisabled
              }
            },
            brand: {
              borderRadius: knobSize / 2 + knobPadding + strokeWidth,
              border: {
                color: theme.color.fillBrand,
                width: strokeWidth
              },
              color: theme.color.fillBrandTertiary,
              colorChecked: theme.color.fillBrand,
              disabled: {
                borderRadius: knobSize / 2 + knobPadding + strokeWidth,
                border: {
                  color: theme.color.fillNeutralDisabled,
                  width: strokeWidth
                },
                color: theme.color.fillInverseDisabled,
                colorChecked: theme.color.fillNeutralDisabled
              }
            }
          },
          // TODO: figure out checked state
          themeStyles
        };
        var knob = {
          themeKeys: {
            width: 'knobWidth',
            height: 'knobHeight',
            padding: 'knobPadding',
            borderRadius: 'knobRadius',
            color: 'knobColor',
            colorChecked: 'knobColorChecked'
          },
          base: {
            color: theme.color.fillNeutral,
            colorChecked: theme.color.fillInverse,
            width: knobSize,
            height: knobSize,
            borderRadius: knobSize / 2,
            padding: knobPadding
          },
          modes: {
            focus: {},
            disabled: {
              color: theme.color.fillNeutralDisabled,
              colorChecked: theme.color.fillInverseDisabled
            }
          },
          tones: {
            inverse: {
              color: theme.color.fillInverse,
              colorChecked: theme.color.fillNeutral,
              disabled: {
                color: theme.color.fillInverseDisabled,
                colorChecked: theme.color.fillNeutralDisabled
              }
            },
            brand: {
              color: theme.color.fillBrand,
              colorChecked: theme.color.fillInverse,
              disabled: {
                color: theme.color.fillNeutralDisabled,
                colorChecked: theme.color.fillInverseDisabled
              }
            }
          },
          themeStyles
        };
        makeComponentStyles(container);
        makeComponentStyles(knob);
        var fpsStyle = {
          color: 255,
          height: 180,
          width: 330,
          x: 1900,
          y: 6,
          mountX: 1,
          alpha: 0.8,
          zIndex: 100
        };
        var fpsLabel = {
          x: 10,
          fontSize: 20,
          textColor: 4143380223
        };
        var fpsValue = {
          fontSize: 22,
          textColor: 4143380223
        };
        var _createSignal27 = createSignal(0),
          _createSignal28 = _slicedToArray(_createSignal27, 2),
          fps = _createSignal28[0],
          setFps = _createSignal28[1];
        var _createSignal29 = createSignal(0),
          _createSignal30 = _slicedToArray(_createSignal29, 2),
          avgFps = _createSignal30[0],
          setAvgFps = _createSignal30[1];
        var _createSignal31 = createSignal(99),
          _createSignal32 = _slicedToArray(_createSignal31, 2),
          minFps = _createSignal32[0],
          setMinFps = _createSignal32[1];
        var _createSignal33 = createSignal(0),
          _createSignal34 = _slicedToArray(_createSignal33, 2),
          maxFps = _createSignal34[0],
          setMaxFps = _createSignal34[1];
        var _createSignal35 = createSignal(""),
          _createSignal36 = _slicedToArray(_createSignal35, 2),
          criticalThresholdSignal = _createSignal36[0],
          setCriticalThresholdSignal = _createSignal36[1];
        var _createSignal37 = createSignal(""),
          _createSignal38 = _slicedToArray(_createSignal37, 2),
          targetThresholdSignal = _createSignal38[0],
          setTargetThresholdSignal = _createSignal38[1];
        var _createSignal39 = createSignal(""),
          _createSignal40 = _slicedToArray(_createSignal39, 2),
          renderableMemUsedSignal = _createSignal40[0],
          setRenderableMemUsedSignal = _createSignal40[1];
        var _createSignal41 = createSignal(""),
          _createSignal42 = _slicedToArray(_createSignal41, 2),
          memUsedSignal = _createSignal42[0],
          setMemUsedSignal = _createSignal42[1];
        var _createSignal43 = createSignal(0),
          _createSignal44 = _slicedToArray(_createSignal43, 2),
          renderableTexturesLoadedSignal = _createSignal44[0],
          setRenderableTexturesLoadedSignal = _createSignal44[1];
        var _createSignal45 = createSignal(0),
          _createSignal46 = _slicedToArray(_createSignal45, 2),
          loadedTexturesSignal = _createSignal46[0],
          setLoadedTexturesSignal = _createSignal46[1];
        var count = 0;
        var totalFps = 0;
        var infoFontSize = 14;
        function bytesToMb(bytes) {
          return (bytes / 1024 / 1024).toFixed(2) + " Mb";
        }
        var calcFps = fps2 => {
          if (!fps2) return;
          setFps(fps2);
          setMinFps(prev => Math.min(fps2, prev));
          setMaxFps(prev => Math.max(fps2, prev));
          totalFps += fps2;
          count++;
          setAvgFps(Math.round(totalFps / count));
        };
        function updateMemoryInfo(stage) {
          var memInfo = stage.txMemManager.getMemoryInfo();
          setCriticalThresholdSignal(bytesToMb(memInfo.criticalThreshold));
          setTargetThresholdSignal(bytesToMb(memInfo.targetThreshold));
          setRenderableMemUsedSignal(bytesToMb(memInfo.renderableMemUsed));
          setMemUsedSignal(bytesToMb(memInfo.memUsed));
          setRenderableTexturesLoadedSignal(memInfo.renderableTexturesLoaded);
          setLoadedTexturesSignal(memInfo.loadedTextures);
        }
        var frameCount = 0;
        function setupFPS(root) {
          root.renderer.on("fpsUpdate", (target, fpsData) => {
            var fps2 = typeof fpsData === "number" ? fpsData : fpsData.fps;
            if (fps2 > 5) {
              calcFps(fps2);
              if (frameCount % 10 === 0) {
                updateMemoryInfo(target.stage);
                frameCount = 0;
              }
              frameCount++;
            }
          });
        }
        var FPSCounter = props => {
          return createComponent(View, mergeProps(props, {
            style: fpsStyle,
            get children() {
              return [createComponent(View, {
                y: 6,
                get children() {
                  return [createComponent(Text$4, {
                    style: fpsLabel,
                    children: "FPS:"
                  }), createComponent(Text$4, {
                    style: fpsValue,
                    x: 90,
                    get children() {
                      return fps().toString();
                    }
                  })];
                }
              }), createComponent(View, {
                y: 6,
                x: 160,
                get children() {
                  return [createComponent(Text$4, {
                    style: fpsLabel,
                    children: "AVG:"
                  }), createComponent(Text$4, {
                    style: fpsValue,
                    x: 100,
                    get children() {
                      return avgFps().toString();
                    }
                  })];
                }
              }), createComponent(View, {
                x: 0,
                y: 26,
                get children() {
                  return [createComponent(Text$4, {
                    style: fpsLabel,
                    children: "MIN:"
                  }), createComponent(Text$4, {
                    style: fpsValue,
                    x: 90,
                    get children() {
                      return minFps().toString();
                    }
                  })];
                }
              }), createComponent(View, {
                x: 160,
                y: 26,
                get children() {
                  return [createComponent(Text$4, {
                    style: fpsLabel,
                    children: "MAX:"
                  }), createComponent(Text$4, {
                    style: fpsValue,
                    x: 100,
                    get children() {
                      return maxFps().toString();
                    }
                  })];
                }
              }), createComponent(View, {
                display: "flex",
                flexDirection: "column",
                y: 58,
                gap: 4,
                get children() {
                  return [createComponent(View, {
                    height: infoFontSize,
                    get children() {
                      return [createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        children: "criticalThreshold:"
                      }), createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        x: 230,
                        get children() {
                          return criticalThresholdSignal();
                        }
                      })];
                    }
                  }), createComponent(View, {
                    height: infoFontSize,
                    get children() {
                      return [createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        children: "targetThreshold:"
                      }), createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        x: 230,
                        get children() {
                          return targetThresholdSignal();
                        }
                      })];
                    }
                  }), createComponent(View, {
                    height: infoFontSize,
                    get children() {
                      return [createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        children: "renderableMemUsed:"
                      }), createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        x: 230,
                        get children() {
                          return renderableMemUsedSignal();
                        }
                      })];
                    }
                  }), createComponent(View, {
                    height: infoFontSize,
                    get children() {
                      return [createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        children: "memUsed:"
                      }), createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        x: 230,
                        get children() {
                          return memUsedSignal();
                        }
                      })];
                    }
                  }), createComponent(View, {
                    height: infoFontSize,
                    get children() {
                      return [createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        children: "renderableTexturesLoaded:"
                      }), createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        x: 230,
                        get children() {
                          return renderableTexturesLoadedSignal().toString();
                        }
                      })];
                    }
                  }), createComponent(View, {
                    height: infoFontSize,
                    get children() {
                      return [createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        children: "loadedTextures:"
                      }), createComponent(Text$4, {
                        fontSize: infoFontSize,
                        style: fpsLabel,
                        x: 230,
                        get children() {
                          return loadedTexturesSignal().toString();
                        }
                      })];
                    }
                  })];
                }
              })];
            }
          }));
        };
        var App = props => {
          useFocusManager({
            Announcer: ["a"],
            Menu: ["m"],
            Escape: ["Escape", 27],
            Backspace: ["Backspace", 8],
            Left: ["ArrowLeft", 37],
            Right: ["ArrowRight", 39],
            Up: ["ArrowUp", 38],
            Down: ["ArrowDown", 40],
            Enter: ["Enter", 13]
          }, {
            userKeyHoldMap: {
              EnterHold: ["Enter", 13],
              BackHold: ["b", 66]
            },
            holdThreshold: 1e3
          });
          var announcer = useAnnouncer();
          announcer.enabled = false;
          var navigate = useNavigate();
          var navDrawer, lastFocused;
          setupFPS({
            renderer: renderer$2
          });
          function focusNavDrawer() {
            if (navDrawer.states.has("focus")) {
              return false;
            }
            lastFocused = activeElement();
            return navDrawer.setFocus();
          }
          var _createSignal47 = createSignal(true),
            _createSignal48 = _slicedToArray(_createSignal47, 2),
            showWidgets = _createSignal48[0],
            setShowWidgets = _createSignal48[1];
          var location = useLocation();
          var showOnPaths = ["/browse", "/entity"];
          createEffect(() => {
            var currentPath = location.pathname;
            var matchesPartial = showOnPaths.some(path => currentPath.startsWith(path));
            if (currentPath === "/") {
              matchesPartial = true;
            }
            setShowWidgets(matchesPartial);
          });
          var _createSignal49 = createSignal(),
            _createSignal50 = _slicedToArray(_createSignal49, 2),
            lastKey = _createSignal50[0],
            setLastKey = _createSignal50[1];
          var _createSignal51 = createSignal(),
            _createSignal52 = _slicedToArray(_createSignal51, 2),
            lastError = _createSignal52[0],
            setLastError = _createSignal52[1];
          var keyPressHandler = e => {
            setLastKey(`Last key: ${e.key}, Code: ${e.keyCode}`);
          };
          document.addEventListener("keydown", keyPressHandler);
          var displayError = e => {
            setLastError(p => (p || "") + "\n" + e.message);
          };
          document.addEventListener("onerror", displayError);
          onCleanup(() => {
            document.removeEventListener("onerror", displayError);
            document.removeEventListener("keydown", keyPressHandler);
          });
          var pageContainer;
          return createComponent(View, {
            ref(r$) {
              var _ref$ = window.APP;
              typeof _ref$ === "function" ? _ref$(r$) : window.APP = r$;
            },
            onAnnouncer: () => announcer.enabled = !announcer.enabled,
            onLast: () => history.back(),
            onMenu: () => navigate("/"),
            style: {
              width: 1920,
              height: 1080
            },
            onBackspace: focusNavDrawer,
            onLeft: focusNavDrawer,
            onRight: () => navDrawer.states.has("focus") && (lastFocused || pageContainer).setFocus(),
            get children() {
              return [createComponent(Background, {}), createComponent(FPSCounter, {
                mountX: 1,
                x: 1910,
                y: 10,
                get alpha() {
                  return showWidgets() ? 1 : 0.01;
                }
              }), createComponent(View, {
                mountX: 1,
                width: 330,
                height: 28,
                x: 1910,
                y: 190,
                color: 255,
                get hidden() {
                  return !showWidgets();
                },
                get children() {
                  return createComponent(Text$4, {
                    fontSize: 20,
                    y: 4,
                    x: 4,
                    get children() {
                      return lastKey();
                    }
                  });
                }
              }), createComponent(Text$4, {
                x: 270,
                y: 20,
                fontSize: 24,
                contain: "width",
                width: 800,
                get children() {
                  return lastError();
                }
              }), createComponent(View, {
                ref(r$) {
                  var _ref$2 = pageContainer;
                  typeof _ref$2 === "function" ? _ref$2(r$) : pageContainer = r$;
                },
                forwardFocus: 0,
                get children() {
                  return props.children;
                }
              }), createComponent(NavDrawer, {
                ref(r$) {
                  var _ref$3 = navDrawer;
                  typeof _ref$3 === "function" ? _ref$3(r$) : navDrawer = r$;
                },
                focusPage: () => lastFocused.setFocus(),
                get showWidgets() {
                  return showWidgets();
                }
              })];
            }
          });
        };
        var params = new URLSearchParams(window.location.search);
        var roundPoster = params.get("roundPoster") !== "false";
        var styles = exports("A", {
          Page: {
            width: 1920,
            height: 1080
          },
          headlineText: {
            width: 1200,
            height: 240,
            x: 360,
            // lineHeight: 170, // TODO: Add back when lineHeight is supported
            y: 455,
            contain: "both",
            fontSize: 66,
            textAlign: "center"
          },
          headlineSubText: {
            width: 960,
            height: 170,
            // lineHeight: 170, // TODO: Add back when lineHeight is supported
            x: 530,
            y: 655,
            contain: "both",
            fontSize: 48,
            textAlign: "center"
          },
          itemsContainer: {
            width: theme.layout.screenW,
            height: 800,
            y: 560,
            x: 0,
            zIndex: 2
          },
          Thumbnail: {
            borderRadius: roundPoster ? 16 : 0,
            width: 185,
            height: 278,
            scale: 1,
            zIndex: 2,
            transition: {
              scale: {
                duration: 250,
                easing: "ease-in-out"
              }
            },
            border: {
              width: 0,
              color: 0
            },
            $focus: {
              scale: 1.1,
              border: {
                color: 0x2C4F7CE8,
                width: 8
              }
            }
          },
          FocusRing: {
            borderRadius: 16,
            width: 194,
            height: 286,
            y: -5,
            x: -5,
            zIndex: -1
          },
          FPS: {
            color: 255,
            height: 42,
            width: 140,
            x: 20,
            y: 20,
            zIndex: 100
          },
          FPSLabel: {
            x: 10,
            y: 0,
            fontSize: 36,
            textColor: 0xFFFFFFFF
          },
          FPSValue: {
            x: 90,
            y: 0,
            fontSize: 36,
            textColor: 0xFFFFFFFF
          },
          showHeadline: {
            x: 70,
            y: 20
          },
          headlineBlur: {
            width: 1920,
            height: 150,
            x: 0,
            y: 0,
            zIndex: 14,
            alpha: 0.9,
            color: 0x000000FF
          },
          RowTitle: {
            height: 60,
            width: 300,
            marginBottom: -40,
            fontSize: 36,
            color: 0xF0F0F0FF,
            zIndex: 2
          },
          Row: {
            display: "flex",
            justifyContent: "spaceBetween",
            height: 300
          },
          Column: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexStart",
            flexBoundary: "contain",
            gap: 64,
            width: theme.layout.screenW - 2 * theme.layout.marginX,
            x: theme.layout.marginX + theme.layout.gutterX,
            y: 48,
            transition: {
              y: {
                duration: 250,
                easing: "ease-in-out"
              }
            },
            zIndex: 2
          },
          Rect: {
            width: 250,
            height: 100,
            y: 10,
            x: 300,
            color: 0x0000FFFF
          },
          peopleBio: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
            fontFamily: "Roboto",
            fontWeight: "normal",
            contain: "both",
            width: 780,
            height: 340
          })
        });
        var Button$1 = {
          width: 300,
          height: 90,
          color: 0x323232CC,
          $focus: {
            color: 0xFFFFFFFF
          }
        };
        var TopBar = {
          color: 0x00A699FF,
          height: 8,
          y: 2,
          x: -4,
          width: Button$1.width + 8
        };
        var ButtonText = {
          fontSize: 26,
          lineHeight: Button$1.height,
          contain: "width",
          textAlign: "center",
          height: Button$1.height,
          width: Button$1.width,
          color: 0xFFFFFFFF,
          $focus: {
            color: 0x000000FF
          }
        };
        var buttonStyles = {
          container: Button$1,
          topBar: TopBar,
          text: ButtonText
        };
        var MaterialButton = {
          width: 386,
          height: 136,
          color: 0x715CABFF,
          $focus: {
            color: 0x5A39A2FF
          },
          $disabled: {
            color: 0x291D43FF
          }
        };
        var MaterialButtonText = exports("M", {
          fontSize: 32,
          contain: "width",
          textAlign: "center",
          mountY: -0.35,
          color: 0xFFFFFFFF,
          height: MaterialButton.height,
          width: MaterialButton.width,
          // lineHeight: MaterialButton.height, // TODO: Add back when lineHeight is supported
          $focus: {
            fontSize: 40
          },
          $disabled: {
            color: 0x909090FF
          }
        });
        function Thumbnail(props) {
          return createComponent(View, mergeProps(props, {
            get style() {
              return styles.Thumbnail;
            }
          }));
        }
        function TileRow(props) {
          return createComponent(Row, mergeProps(props, {
            get style() {
              return styles.Row;
            },
            get children() {
              return createComponent(Index, {
                get each() {
                  return props.items;
                },
                children: item => createComponent(Thumbnail, item)
              });
            }
          }));
        }
        function Button(props) {
          return createComponent(View, mergeProps(props, {
            forwardStates: true,
            get style() {
              return buttonStyles.container;
            },
            get children() {
              return createComponent(Text$4, {
                get style() {
                  return buttonStyles.text;
                },
                get children() {
                  return props.children;
                }
              });
            }
          }));
        }
        var heroTransition = {
          duration: 300,
          easing: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
        };
        var titleRowStyles = {
          fontFamily: "Raleway",
          fontSize: 24,
          height: 32,
          lineHeight: 32
        };
        function TitleRow(props) {
          return createComponent(View, {
            get height() {
              return props.height;
            },
            forwardFocus: 1,
            marginTop: 30,
            get children() {
              return [createComponent(Text$4, {
                skipFocus: true,
                style: titleRowStyles,
                get children() {
                  return props.title;
                }
              }), createComponent(LazyUp, {
                component: Row,
                direction: "row",
                gap: 20,
                upCount: 11,
                get each() {
                  return props.items;
                },
                y: 50,
                children: item => createComponent(Dynamic, mergeProps({
                  get component() {
                    return typeToComponent[props.row.type];
                  }
                }, item))
              })];
            }
          });
        }
        var posterStyles = {
          width: 185,
          height: 278,
          scale: 1,
          zIndex: 2,
          color: 0xB0B0B0FF,
          //borderRadius: 8,
          transition: {
            scale: {
              duration: 200,
              easing: "linear"
            }
          },
          $focus: {
            scale: 1.1,
            color: 0xFFFFFFFF
          }
        };
        function Poster(props) {
          return createComponent(View, mergeProps(props, {
            onFail: node => node.src = "failback.png",
            style: posterStyles
          }));
        }
        var posterTitleStyles = {
          fontFamily: "Raleway",
          fontSize: 22,
          lineHeight: 22,
          height: 22,
          x: 10,
          y: 278,
          contain: "width",
          width: 185,
          maxLines: 2,
          alpha: 0,
          $focus: {
            alpha: 1,
            y: 288
          },
          transition: {
            y: heroTransition,
            alpha: heroTransition
          }
        };
        function PosterTitle(props) {
          return createComponent(View, mergeProps(props, {
            onFail: node => node.src = "failback.png",
            style: posterStyles,
            forwardStates: true,
            get children() {
              return createComponent(Text$4, {
                style: posterTitleStyles,
                get children() {
                  return props.title;
                }
              });
            }
          }));
        }
        var heroStyles = {
          width: 1280,
          height: 720,
          scale: 1,
          zIndex: 2,
          colorTop: 0xFFFFFFFF,
          colorBottom: 0x000000FF,
          //borderRadius: 8,
          transition: {
            scale: heroTransition
          },
          $focus: {
            scale: 1.05
          }
        };
        var heroTextStyles = {
          fontFamily: "Raleway",
          contain: "width"
        };
        function Hero(props) {
          var _createSignal53 = createSignal(false),
            _createSignal54 = _slicedToArray(_createSignal53, 2),
            hasFocus = _createSignal54[0],
            setHasFocus = _createSignal54[1];
          return createComponent(View, mergeProps(props, {
            get src() {
              return props.backdrop;
            },
            style: heroStyles,
            onFocusChanged: setHasFocus,
            forwardStates: true,
            get children() {
              return createComponent(View, {
                transition: {
                  alpha: heroTransition
                },
                get alpha() {
                  return hasFocus() ? 1 : 0;
                },
                get children() {
                  return [createComponent(View, {
                    width: 185,
                    height: 278,
                    x: 54,
                    y: 220,
                    get src() {
                      return props.src;
                    }
                  }), createComponent(Text$4, {
                    y: 520,
                    x: 54,
                    fontSize: 64,
                    width: 1e3,
                    maxLines: 1,
                    style: heroTextStyles,
                    get children() {
                      return props.title;
                    }
                  }), createComponent(Text$4, {
                    y: 620,
                    x: 60,
                    fontSize: 21,
                    width: 1e3,
                    maxLines: 2,
                    lineHeight: 36,
                    color: 0xCCCCCCFF,
                    style: heroTextStyles,
                    get children() {
                      return props.overview;
                    }
                  })];
                }
              });
            }
          }));
        }
        var typeToComponent = {
          Poster,
          Hero,
          PosterTitle
        };
        var BlockStyle = {
          alpha: 0.85,
          border: {
            width: 0,
            color: 0x000000FF
          },
          $focus: {
            border: {
              width: 4,
              color: 0xFFFFFFFF
            },
            alpha: 1
          }
        };
        function Block(props) {
          return createComponent(View, mergeProps(props, {
            width: 100,
            height: 100,
            style: BlockStyle,
            get color() {
              return props.color || 0xE0E0E0FF;
            }
          }));
        }
        function createInfiniteScroll(fetcher) {
          var _createSignal55 = createSignal([]),
            _createSignal56 = _slicedToArray(_createSignal55, 2),
            pages = _createSignal56[0],
            setPages = _createSignal56[1];
          var _createSignal57 = createSignal(1),
            _createSignal58 = _slicedToArray(_createSignal57, 2),
            page = _createSignal58[0],
            setPage = _createSignal58[1];
          var _createSignal59 = createSignal(false),
            _createSignal60 = _slicedToArray(_createSignal59, 2),
            end = _createSignal60[0],
            setEnd = _createSignal60[1];
          var _createResource3 = createResource(page, fetcher),
            _createResource4 = _slicedToArray(_createResource3, 1),
            contents = _createResource4[0];
          createComputed(() => {
            var content = contents();
            if (!content) return;
            batch(() => {
              if (content.length === 0) setEnd(true);
              setPages(p => [...p, ...content]);
            });
          });
          return {
            pages,
            page,
            setPage,
            setPages,
            end,
            setEnd
          };
        }
        var blockWidth = 900;
        var ContentBlockStyle = {
          display: "flex",
          flexDirection: "column",
          flexBoundary: "fixed",
          width: blockWidth,
          height: 220,
          gap: 16
        };
        var HeadlineStyles = _objectSpread(_objectSpread({}, theme.typography.display2), {}, {
          fontFamily: "Roboto",
          fontWeight: 700,
          maxLines: 1,
          width: blockWidth,
          contain: "width"
        });
        var Headline = props => createComponent(Text$4, mergeProps(props, {
          style: HeadlineStyles
        }));
        var DescriptionStyles = _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
          fontFamily: "Roboto",
          fontWeight: 400,
          lineHeight: 32,
          width: blockWidth,
          maxLines: 3,
          contain: "width"
        });
        var BadgeStyle = {
          fontSize: 16,
          lineHeight: 20,
          marginLeft: 13,
          marginRight: 13
        };
        var Description = props => createComponent(Text$4, mergeProps(props, {
          style: DescriptionStyles,
          get children() {
            return props.children;
          }
        }));
        var Badge = props => {
          return createComponent(View, mergeProps(props, {
            style: {
              color: "0x00000099",
              borderRadius: 8,
              border: {
                width: 2,
                color: "0xffffffff"
              },
              display: "flex",
              height: 36
            },
            get children() {
              return createComponent(Text$4, {
                lineHeight: 36,
                style: BadgeStyle,
                get children() {
                  return props.children;
                }
              });
            }
          }));
        };
        var MetaTextStyle = _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          fontFamily: "Roboto",
          fontWeight: 400
        });
        var Metadata = props => createComponent(View, {
          style: {
            display: "flex",
            flexDirection: "row",
            gap: 18,
            width: blockWidth,
            height: 48
          },
          get children() {
            return [createComponent(View, {
              y: -4,
              src: "./assets/stars.png",
              width: 188,
              height: 31
            }), createComponent(View, {
              y: -4,
              flexItem: false,
              clipping: true,
              get width() {
                return 188 * props.voteAverage / 10;
              },
              height: 31,
              get children() {
                return createComponent(View, {
                  src: "./assets/stars-full.png",
                  width: 188,
                  height: 31
                });
              }
            }), createComponent(Text$4, {
              style: MetaTextStyle,
              get children() {
                return [memo(() => props.voteCount), " reviews"];
              }
            }), createComponent(Text$4, {
              style: MetaTextStyle,
              get children() {
                return props.metaText;
              }
            }), createComponent(For, {
              get each() {
                return props.badges;
              },
              children: item => createComponent(Badge, {
                y: -5,
                children: item
              })
            })];
          }
        });
        var ContentBlock = exports("q", props => createComponent(View, mergeProps({
          id: "contentBlock",
          style: ContentBlockStyle
        }, props, {
          get children() {
            return [createComponent(Headline, {
              get children() {
                return props.content.title;
              }
            }), createComponent(Description, {
              get children() {
                return props.content.description;
              }
            }), createComponent(Show, {
              get when() {
                return props.content.voteCount;
              },
              get children() {
                return createComponent(Metadata, {
                  get metaText() {
                    return props.content.metaText;
                  },
                  get badges() {
                    return props.content.badges;
                  },
                  get voteCount() {
                    return props.content.voteCount;
                  },
                  get voteAverage() {
                    return props.content.voteAverage;
                  }
                });
              }
            })];
          }
        })));

        // src/index.ts
        var debounce = exports("n", (callback, wait) => {
          var timeoutId;
          var clear = () => clearTimeout(timeoutId);
          if (getOwner()) onCleanup(clear);
          var debounced = function debounced() {
            for (var _len7 = arguments.length, args = new Array(_len7), _key35 = 0; _key35 < _len7; _key35++) {
              args[_key35] = arguments[_key35];
            }
            if (timeoutId !== undefined) clear();
            timeoutId = setTimeout(() => callback(...args), wait);
          };
          return Object.assign(debounced, {
            clear
          });
        });
        var Browse = props => {
          var _createSignal61 = createSignal(0),
            _createSignal62 = _slicedToArray(_createSignal61, 2),
            columnY = _createSignal62[0],
            setcolumnY = _createSignal62[1];
          var preload = usePreloadRoute();
          var _createSignal63 = createSignal({}),
            _createSignal64 = _slicedToArray(_createSignal63, 2),
            heroContent = _createSignal64[0],
            setHeroContent = _createSignal64[1];
          var navigate = useNavigate();
          var firstRun = true;
          var provider = createMemo(() => {
            return createInfiniteScroll(props.data());
          });
          var delayedBackgrounds = debounce(img => setGlobalBackground(img), 800);
          var delayedHero = debounce(content => setHeroContent(content || {}), 600);
          createEffect(on(activeElement, elm => {
            if (!elm) return;
            if (firstRun) {
              if (elm.backdrop) {
                setGlobalBackground(elm.backdrop);
              }
              if (elm.heroContent) {
                setHeroContent(elm.heroContent);
              }
              preload(`/browse/tv`, {
                preloadData: true
              });
              preload(`/browse/movie`, {
                preloadData: true
              });
              firstRun = false;
              return;
            }
            if (elm.href) {
              preload(elm.href, {
                preloadData: true
              });
            }
            if (elm.backdrop) {
              delayedBackgrounds(elm.backdrop);
            }
            if (elm.heroContent) {
              delayedHero(elm.heroContent);
            }
          }, {
            defer: true
          }));
          function onRowFocus() {
            this.children[this.selected || 0].setFocus();
            setcolumnY((this.y || 0) * -1 + 24);
            var numPages = provider().pages().length;
            this.parent.selected = this.parent.children.indexOf(this);
            if (numPages === 0 || this.parent.selected && this.parent.selected >= numPages - 2) {
              provider().setPage(p => p + 1);
            }
          }
          function onEnter() {
            this.display = "flex";
            var entity = this.children.find(c => c.states.has("focus"));
            assertTruthy(entity && entity.href);
            navigate(entity.href);
            return true;
          }
          return createComponent(Show, {
            get when() {
              return provider().pages().length;
            },
            get children() {
              return [createComponent(ContentBlock, {
                y: 360,
                x: 162,
                get content() {
                  return heroContent();
                }
              }), createComponent(View, {
                clipping: true,
                get style() {
                  return styles.itemsContainer;
                },
                get children() {
                  return createComponent(Column, {
                    id: "BrowseColumn",
                    plinko: true,
                    announce: "All Trending - Week",
                    get y() {
                      return columnY();
                    },
                    scroll: "none",
                    autofocus: true,
                    get style() {
                      return styles.Column;
                    },
                    get children() {
                      return createComponent(For, {
                        get each() {
                          return provider().pages();
                        },
                        children: items => createComponent(TileRow, {
                          items,
                          width: 1620,
                          onFocus: onRowFocus,
                          onEnter
                        })
                      });
                    }
                  });
                }
              })];
            }
          });
        };
        var TMDB = props => {
          var _createSignal65 = createSignal({}),
            _createSignal66 = _slicedToArray(_createSignal65, 2),
            heroContent = _createSignal66[0],
            setHeroContent = _createSignal66[1];
          var contentBlock,
            solidLogo,
            firstRun = true;
          var delayedBackgrounds = debounce(setGlobalBackground, 800);
          var delayedHero = debounce(content => setHeroContent(content || {}), 600);
          createEffect(on(activeElement, elm => {
            if (!elm) return;
            if (firstRun) {
              elm.backdrop && setGlobalBackground(elm.backdrop);
              elm.heroContent && setHeroContent(elm.heroContent);
              firstRun = false;
            } else {
              elm.backdrop && delayedBackgrounds(elm.backdrop);
              elm.heroContent && delayedHero(elm.heroContent);
            }
          }, {
            defer: true
          }));
          function onSelectedChanged(selectedIndex, column, row) {
            var values = selectedIndex === 0 ? {
              y: 300,
              alpha: 1
            } : {
              y: 200,
              alpha: 0
            };
            contentBlock.animate(values, {
              duration: 300,
              easing: "ease-in-out"
            }).start();
            var values2 = selectedIndex === 0 ? {
              y: 80,
              alpha: 1
            } : {
              y: 0,
              alpha: 0
            };
            solidLogo.animate(values2, {
              duration: 300,
              easing: "ease-in-out"
            }).start();
          }
          return [createComponent(View, {
            ref(r$) {
              var _ref$ = solidLogo;
              typeof _ref$ === "function" ? _ref$(r$) : solidLogo = r$;
            },
            width: 300,
            height: 150,
            x: 162,
            y: 80,
            zIndex: 105,
            get children() {
              return [createComponent(Text$4, {
                x: 80,
                fontSize: 28,
                color: 4143380121,
                children: "Built With:"
              }), createComponent(View, {
                y: 32,
                src: "./assets/solidWord.png",
                width: 280,
                height: 52
              }), createComponent(View, {
                x: 0,
                y: 110,
                src: "./assets/tmdb.png",
                width: 80,
                height: 41
              }), createComponent(Text$4, {
                x: 90,
                y: 110,
                contain: "width",
                width: 160,
                fontSize: 12,
                color: 4143380121,
                children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
              })];
            }
          }), createComponent(ContentBlock, {
            ref(r$) {
              var _ref$2 = contentBlock;
              typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
            },
            y: 300,
            x: 162,
            get content() {
              return heroContent();
            }
          }), createComponent(LazyUp, {
            y: 500,
            component: Column,
            direction: "column",
            upCount: 3,
            get each() {
              return props.data.rows;
            },
            id: "BrowseColumn",
            onSelectedChanged,
            get autofocus() {
              return props.data.rows[0].items();
            },
            gap: 40,
            transition: {
              y: {
                duration: 300,
                easing: "ease-in-out"
              }
            },
            get style() {
              return styles.Column;
            },
            children: row => row().type === "Hero" ? createComponent(LazyUp, {
              component: Row,
              direction: "row",
              gap: 80,
              upCount: 3,
              scroll: "center",
              centerScroll: true,
              get each() {
                return row().items();
              },
              y: 50,
              get height() {
                return row().height;
              },
              children: item => createComponent(Hero, mergeProps(item))
            }) : createComponent(TitleRow, {
              get row() {
                return row();
              },
              get title() {
                return row().title;
              },
              get height() {
                return row().height;
              },
              get items() {
                return row().items();
              }
            })
          })];
        };
        var Destroy = props => {
          var _createSignal67 = createSignal(),
            _createSignal68 = _slicedToArray(_createSignal67, 2),
            heroContent = _createSignal68[0],
            setHeroContent = _createSignal68[1];
          var _createSignal69 = createSignal(0),
            _createSignal70 = _slicedToArray(_createSignal69, 2),
            heroIndex = _createSignal70[0],
            setHeroIndex = _createSignal70[1];
          onMount(() => setGlobalBackground(0x333333FF));
          createEffect(on([props.data.heroRow.items, heroIndex], _ref67 => {
            var _ref68 = _slicedToArray(_ref67, 2),
              heros = _ref68[0],
              index = _ref68[1];
            if (heros) setHeroContent(heros[index]);
            if (heros && index < heros.length - 1) {
              var img = new Image();
              img.crossOrigin = "anonymous";
              img.src = heros[index + 1].backdrop;
            }
          }));
          function onDown() {
            if (heroIndex() >= 19) return false;
            setHeroIndex(p => p + 1);
          }
          function onUp() {
            if (heroIndex() === 0) return false;
            setHeroIndex(p => p - 1);
            return true;
          }
          function animateOut(node) {
            return node.animate({
              y: 200,
              alpha: 0
            }, {
              duration: 500,
              easing: "ease-in-out"
            }).start().waitUntilStopped();
          }
          function animateIn(node) {
            node.alpha = 0;
            node.y = -100;
            return node.animate({
              y: 0,
              alpha: 1
            }, {
              duration: 500,
              easing: "ease-in-out"
            }).start().waitUntilStopped();
          }
          return createComponent(View, {
            x: 300,
            y: 200,
            onDown,
            onUp,
            get children() {
              return [createComponent(View, {
                src: "assets/up.svg",
                width: 350,
                height: 200,
                x: 450,
                y: -200,
                get rotation() {
                  return Math.PI;
                }
              }), createComponent(Show, {
                get when() {
                  return heroContent();
                },
                keyed: true,
                get children() {
                  return createComponent(Hero, {
                    id: "Hero",
                    autofocus: true,
                    onDestroy: animateOut,
                    onCreate: animateIn,
                    get src() {
                      return heroContent().src;
                    },
                    get backdrop() {
                      return heroContent().backdrop;
                    },
                    get title() {
                      return heroContent().title;
                    },
                    get overview() {
                      return heroContent().overview;
                    }
                  });
                }
              })];
            }
          });
        };
        var API_KEY_V4 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2U3ZGI4YjBkMzk2NGQ1YjI4ODViOTllN2FlN2VmYSIsIm5iZiI6MTczOTg4MzExOC44NjcsInN1YiI6IjY3YjQ4MjZlZTVlMWE3ZWQ3Y2UxMmVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eVtGjZ9sEFf1J2aHjOuGM4kfXSWIXwB4uIqxND4RFus";
        var API_BASE = "https://api.themoviedb.org/3";
        var tmdbConfig;
        var baseImageUrl;
        var basePosterSize = "w185";
        var defaultFetchParams = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY_V4
          }
        };
        function getImageUrl(path) {
          var posterSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : basePosterSize;
          return baseImageUrl + posterSize + path;
        }
        function get(path) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (tmdbConfig) {
            return _get(path, params);
          } else {
            return loadConfig().then(() => _get(path, params));
          }
        }
        function _get(path) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return fetch(API_BASE + path, _objectSpread(_objectSpread({}, defaultFetchParams), params)).then(r => r.json());
        }
        function loadConfig() {
          return _get("/configuration").then(data => {
            var _data$images;
            tmdbConfig = data;
            baseImageUrl = (_data$images = data.images) === null || _data$images === void 0 ? void 0 : _data$images.secure_base_url;
            return data;
          });
        }
        var api = exports("J", {
          get,
          loadConfig
        });
        function truncateString(str, maxLength) {
          if (str.length > maxLength) {
            return str.substring(0, maxLength - 3) + "...";
          }
          return str;
        }
        function chunkArray(array) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
          var result = [];
          for (var i = 0, j = array.length; i < j; i += size) {
            result.push(array.slice(i, i + size));
          }
          return result;
        }
        function convertItemsToTiles() {
          var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return items.map(item => ({
            src: getImageUrl(item.poster_path || item.profile_path),
            tileSrc: getImageUrl(item.backdrop_path || item.profile_path, "w300"),
            backdrop: getImageUrl(item.backdrop_path, "w1280"),
            href: `/entity/${item.media_type || "people"}/${item.id}`,
            shortTitle: truncateString(item.title || item.name, 30),
            title: item.title || item.name,
            overview: item.overview,
            item,
            entityInfo: {
              type: item.media_type || "people",
              id: item.id
            },
            heroContent: {
              title: item.title || item.name,
              description: item.overview
            }
          }));
        }
        var handleResults = response => {
          return response.then(_ref69 => {
            var results = _ref69.results;
            var filteredItems = results.filter(r => !r.adult);
            return convertItemsToTiles(filteredItems);
          });
        };
        var fetchPopular = type => {
          return handleResults(api.get(`/${type}/popular`));
        };
        var genreListCache;
        var fetchGenreMovies = genres => {
          var genreList = genreListCache || (genreListCache = api.get(`/genre/movie/list`));
          var targetGenre = Array.isArray(genres) ? genres : [genres];
          return genreList.then(_ref70 => {
            var genres2 = _ref70.genres;
            var targetGenreIds = [];
            genres2.forEach(item => {
              if (targetGenre.includes(item.name)) targetGenreIds.push(item.id);
            });
            return handleResults(api.get(`/discover/movie?with_genres=${targetGenreIds.join()}`));
          });
        };
        function destroyData() {
          var heroRow = {
            title: "Best Adventure and Action movies",
            items: createResource(() => fetchGenreMovies(["adventure", "action"]))[0],
            type: "Hero",
            height: 800
          };
          return {
            heroRow
          };
        }
        function tmdbData() {
          var rows = [];
          var popularMovies = createResource(() => fetchPopular("movie"));
          rows.push({
            title: "Popular Movies",
            items: popularMovies[0],
            setItems: popularMovies[1].mutate,
            type: "Poster",
            height: 328
          });
          rows.push({
            title: "Best Western movies",
            items: createResource(() => fetchGenreMovies(["Western"]))[0],
            type: "Hero",
            height: 720
          });
          rows.push({
            title: "Best Comedy movies",
            items: createResource(() => fetchGenreMovies(["Comedy"]))[0],
            type: "PosterTitle",
            height: 400
          });
          rows.push({
            title: "Popular TV shows",
            items: createResource(() => fetchPopular("tv"))[0],
            type: "PosterTitle",
            height: 400
          });
          var heroRow = {
            title: "Best Adventure and Action movies",
            items: createResource(() => fetchGenreMovies(["adventure", "action"]))[0],
            type: "Hero",
            height: 720
          };
          rows.push(heroRow);
          rows.push({
            title: "Best Documentaries",
            items: createResource(() => fetchGenreMovies("Documentary"))[0],
            type: "PosterTitle",
            height: 400
          });
          rows.push({
            title: "Best Western movies 2",
            items: createResource(() => fetchGenreMovies("Western"))[0],
            type: "PosterTitle",
            height: 400
          });
          return {
            rows
          };
        }
        var NotFound = () => {
          return (() => {
            var _el$ = createElement("node");
            setProp(_el$, "style", {
              width: 1920,
              height: 1080,
              color: 868483072
            });
            return _el$;
          })();
        };
        var basePath = "/lightning-solid-demo-app/";
        var fonts = [{
          type: "msdf",
          fontFamily: "Roboto",
          descriptors: {
            weight: 700
          },
          atlasDataUrl: basePath + "fonts/Roboto-Bold.msdf.json",
          atlasUrl: basePath + "fonts/Roboto-Bold.msdf.png"
        }, {
          type: "msdf",
          fontFamily: "Roboto",
          descriptors: {
            weight: 400
          },
          atlasDataUrl: basePath + "fonts/Roboto-Regular.msdf.json",
          atlasUrl: basePath + "fonts/Roboto-Regular.msdf.png"
        }, {
          type: "msdf",
          fontFamily: "Arial",
          descriptors: {
            weight: 500
          },
          atlasDataUrl: basePath + "fonts/Roboto-Regular.msdf.json",
          atlasUrl: basePath + "fonts/Roboto-Regular.msdf.png"
        }, {
          type: "msdf",
          fontFamily: "Raleway",
          descriptors: {
            weight: 800
          },
          atlasDataUrl: basePath + "fonts/Raleway-ExtraBold.msdf.json",
          atlasUrl: basePath + "fonts/Raleway-ExtraBold.msdf.png"
        }, {
          fontFamily: "Roboto",
          fontUrl: basePath + "fonts/Roboto-Regular.ttf"
        }];
        var cache = /* @__PURE__ */new Map();
        var leftoverTiles = /* @__PURE__ */new Map();
        function browseProvider(filter) {
          return pageIndex => {
            var url = `/trending/${filter}/week?page=${pageIndex}`;
            if (cache.has(url)) {
              return cache.get(url);
            }
            var result = api.get(url).then(trending => {
              var results = trending.results.filter(r => !r.adult);
              var tiles = (leftoverTiles.has(filter) ? leftoverTiles.get(filter) : []).concat(convertItemsToTiles(results));
              var chunks = chunkArray(tiles);
              if (chunks[chunks.length - 1].length < 7) {
                leftoverTiles.set(filter, chunks.pop());
              } else {
                leftoverTiles.delete(filter);
              }
              return chunks;
            });
            cache.set(url, result);
            return result;
          };
        }
        function browsePreload(_ref71) {
          var params = _ref71.params;
          return createMemo(() => {
            var provider = browseProvider(params.filter || "all");
            provider(1);
            return provider;
          });
        }
        function minutesToHMM(minutes) {
          var hours = Math.floor(minutes / 60);
          var remainingMinutes = minutes % 60;
          return hours + "h " + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + "min";
        }
        function formatDate(dateString) {
          var parts = dateString.split("-");
          return parts[1] + "/" + parts[2] + "/" + parts[0];
        }
        function justYear(dateString) {
          var parts = dateString.split("-");
          return parts[0];
        }
        function ensureItems(items, minCount) {
          var remainingCount = minCount - items.length;
          if (remainingCount > 0) {
            return items.concat(Array(remainingCount).fill({}));
          }
          return items;
        }
        function getRecommendations(_ref72) {
          var type = _ref72.type,
            id = _ref72.id;
          return api.get(`/${type}/${id}/recommendations`).then(_ref73 => {
            var results = _ref73.results;
            if (results.length) {
              return ensureItems(convertItemsToTiles(results.slice(0, 7)), 7);
            }
            return api.get(`/trending/${type}/week?page=1`).then(_ref74 => {
              var results = _ref74.results;
              return ensureItems(convertItemsToTiles(results.slice(0, 7)), 7);
            });
          });
        }
        function getCredits(_ref75) {
          var type = _ref75.type,
            id = _ref75.id;
          return api.get(`/${type}/${id}/credits`).then(_ref76 => {
            var cast = _ref76.cast;
            return ensureItems(convertItemsToTiles(cast.slice(0, 7)), 7);
          });
        }
        function getInfo(_ref77) {
          var type = _ref77.type,
            id = _ref77.id;
          var rt = type === "movie" ? {
            rtCrit: 86,
            rtFan: 92
          } : {};
          return api.get(`/${type}/${id}`).then(data => _objectSpread({
            backgroundImage: getImageUrl(data.backdrop_path, "w1280"),
            heroContent: {
              title: data.title || data.name,
              description: data.overview,
              badges: ["HD", "CC"],
              voteAverage: data.vote_average,
              voteCount: data.vote_count,
              metaText: type === "movie" ? minutesToHMM(data.runtime) + "   " + formatDate(data.release_date) : `${justYear(data.first_air_date)} - ${justYear(data.last_air_date)}`,
              reviews: rt
            }
          }, data));
        }
        function entityPreload(_ref78) {
          var params = _ref78.params,
            intent = _ref78.intent;
          var _createResource5 = createResource(() => _objectSpread({}, params), getInfo),
            _createResource6 = _slicedToArray(_createResource5, 1),
            entity = _createResource6[0];
          if (intent === "preload") {
            return;
          }
          var _createResource7 = createResource(() => _objectSpread({}, params), getCredits),
            _createResource8 = _slicedToArray(_createResource7, 1),
            credits = _createResource8[0];
          var _createResource9 = createResource(() => _objectSpread({}, params), getRecommendations),
            _createResource10 = _slicedToArray(_createResource9, 1),
            recommendations = _createResource10[0];
          return {
            entity,
            credits,
            recommendations
          };
        }
        window.HTMLCanvasElement.prototype.getContext = () => null;
        var Grid = lazy(() => __vitePreload(() => module.import('./Grid-legacy-COKUla8c.js'), false ? __VITE_PRELOAD__ : undefined));
        var Loops = lazy(() => __vitePreload(() => module.import('./Loops-legacy-dtKFcys0.js'), false ? __VITE_PRELOAD__ : undefined));
        var Infinite = lazy(() => __vitePreload(() => module.import('./Infinite-legacy-Dqn8iUOR.js'), false ? __VITE_PRELOAD__ : undefined));
        var TMDBGrid = lazy(() => __vitePreload(() => module.import('./TMDBGrid-legacy-DmTnGz6z.js'), false ? __VITE_PRELOAD__ : undefined));
        var Portal = lazy(() => __vitePreload(() => module.import('./Portal-legacy-C7Fibf1I.js'), false ? __VITE_PRELOAD__ : undefined));
        var TextPage = lazy(() => __vitePreload(() => module.import('./Text-legacy-avbtzvF0.js'), false ? __VITE_PRELOAD__ : undefined));
        var TextPosterPage = lazy(() => __vitePreload(() => module.import('./TextPoster-legacy-DNEZvSQi.js'), false ? __VITE_PRELOAD__ : undefined));
        var CreatePage = lazy(() => __vitePreload(() => module.import('./Create-legacy-BzpI3UkP.js'), false ? __VITE_PRELOAD__ : undefined));
        var ViewportPage = lazy(() => __vitePreload(() => module.import('./Viewport-legacy-BstfTMwe.js'), false ? __VITE_PRELOAD__ : undefined));
        var PositioningPage = lazy(() => __vitePreload(() => module.import('./Positioning-legacy-CN7wSK6m.js'), false ? __VITE_PRELOAD__ : undefined));
        var LayoutPage = lazy(() => __vitePreload(() => module.import('./Layout-legacy-B402b0Nq.js'), false ? __VITE_PRELOAD__ : undefined));
        var FocusBasicsPage = lazy(() => __vitePreload(() => module.import('./FocusBasics-legacy-DEom8kzs.js'), false ? __VITE_PRELOAD__ : undefined));
        var KeyHandlingPage = lazy(() => __vitePreload(() => module.import('./KeyHandling-legacy-DCum0w4Q.js'), false ? __VITE_PRELOAD__ : undefined));
        var TransitionsPage = lazy(() => __vitePreload(() => module.import('./Transitions-legacy-BBBLkyvi.js'), false ? __VITE_PRELOAD__ : undefined));
        var ComponentsPage = lazy(() => __vitePreload(() => module.import('./Components-legacy-ZXTgNzA8.js'), false ? __VITE_PRELOAD__ : undefined));
        var FocusHandlingPage = lazy(() => __vitePreload(() => module.import('./FocusHandling-legacy-BP4Z_jRV.js'), false ? __VITE_PRELOAD__ : undefined));
        var GradientsPage = lazy(() => __vitePreload(() => module.import('./Gradients-legacy-DB3E7JUA.js'), false ? __VITE_PRELOAD__ : undefined));
        var FlexPage = lazy(() => __vitePreload(() => module.import('./Flex-legacy-DuvfCbbD.js'), false ? __VITE_PRELOAD__ : undefined));
        var FlexGrowPage = lazy(() => __vitePreload(() => module.import('./FlexGrow-legacy-B87L6FvY.js'), false ? __VITE_PRELOAD__ : undefined));
        var FlexSizePage = lazy(() => __vitePreload(() => module.import('./FlexSize-legacy-CVtP1B6Z.js'), false ? __VITE_PRELOAD__ : undefined));
        var FlexColumnSizePage = lazy(() => __vitePreload(() => module.import('./FlexColumnSize-legacy-CSwp8Wa0.js'), false ? __VITE_PRELOAD__ : undefined));
        var FlexColumnPage = lazy(() => __vitePreload(() => module.import('./FlexColumn-legacy-BemeX1rq.js'), false ? __VITE_PRELOAD__ : undefined));
        var ButtonsMaterialPage = lazy(() => __vitePreload(() => module.import('./ButtonsMaterial-legacy-C87hSiOV.js'), false ? __VITE_PRELOAD__ : undefined));
        var SuperFlexPage = lazy(() => __vitePreload(() => module.import('./SuperFlex-legacy-J4mjmqr0.js'), false ? __VITE_PRELOAD__ : undefined));
        var Entity = lazy(() => __vitePreload(() => module.import('./Entity-legacy-DCu0F6yQ.js'), false ? __VITE_PRELOAD__ : undefined));
        var People = lazy(() => __vitePreload(() => module.import('./People-legacy-DRVAdLbA.js'), false ? __VITE_PRELOAD__ : undefined));
        var LoginPage = lazy(() => __vitePreload(() => module.import('./Login-legacy-Cf1TqkxY.js'), false ? __VITE_PRELOAD__ : undefined));
        var FireboltPage = lazy(() => __vitePreload(() => module.import('./Firebolt-legacy-BzGF0In2.js'), false ? __VITE_PRELOAD__ : undefined));
        var urlParams = new URLSearchParams(window.location.search);
        var numImageWorkers = 3;
        var numWorkers = urlParams.get("numImageWorkers");
        var screenSize = urlParams.get("size") || "default";
        var rendererMode = urlParams.get("mode") || "webgl";
        if (numWorkers) {
          numImageWorkers = parseInt(numWorkers);
        }
        var deviceLogicalPixelRatio = {
          "720": 0.666667,
          "1080": 1,
          "4k": 2,
          default: window.innerHeight / 1080
        }[screenSize];
        Config.debug = false;
        Config.animationsEnabled = true;
        Config.fontSettings.fontFamily = "Roboto";
        Config.fontSettings.color = 4143380223;
        Config.fontSettings.fontSize = 32;
        Config.rendererOptions = {
          fpsUpdateInterval: 1e3,
          // inspector: import.meta.env.DEV ? Inspector : undefined,
          // textureMemory: {
          //   criticalThreshold: 80e6,
          // },
          numImageWorkers,
          // temp fix for renderer bug
          // Set the resolution based on window height
          // 720p = 0.666667, 1080p = 1, 1440p = 1.5, 2160p = 2
          deviceLogicalPixelRatio,
          devicePhysicalPixelRatio: 1
        };
        Config.domRendering = true;
        if (rendererMode === "canvas") {
          Config.rendererOptions.fontEngines = [CanvasTextRenderer];
          Config.rendererOptions.renderEngine = CanvasRenderer;
        } else {
          Config.rendererOptions.fontEngines = [SdfTextRenderer];
          Config.rendererOptions.renderEngine = WebGlRenderer;
        }
        var _createRenderer = createRenderer(),
          renderer = _createRenderer.renderer,
          render = _createRenderer.render;
        loadFonts(fonts);
        render(() => createComponent(HashRouter, {
          root: props => createComponent(App, props),
          get children() {
            return [createComponent(Route, {
              path: "",
              component: Browse,
              preload: browsePreload
            }), createComponent(Route, {
              path: "examples",
              component: Portal
            }), createComponent(Route, {
              path: "browse/:filter",
              component: Browse,
              preload: browsePreload
            }), createComponent(Route, {
              path: "tmdb",
              component: TMDB,
              preload: tmdbData
            }), createComponent(Route, {
              path: "loops",
              component: Loops,
              preload: tmdbData
            }), createComponent(Route, {
              path: "infinite",
              component: Infinite,
              preload: tmdbData
            }), createComponent(Route, {
              path: "tmdbgrid",
              component: TMDBGrid,
              preload: tmdbData
            }), createComponent(Route, {
              path: "destroy",
              component: Destroy,
              preload: destroyData
            }), createComponent(Route, {
              path: "grid",
              component: Grid
            }), createComponent(Route, {
              path: "text",
              component: TextPage
            }), createComponent(Route, {
              path: "firebolt",
              component: FireboltPage
            }), createComponent(Route, {
              path: "textposter",
              component: TextPosterPage
            }), createComponent(Route, {
              path: "login",
              component: LoginPage
            }), createComponent(Route, {
              path: "positioning",
              component: PositioningPage
            }), createComponent(Route, {
              path: "layout",
              component: LayoutPage
            }), createComponent(Route, {
              path: "focusbasics",
              component: FocusBasicsPage
            }), createComponent(Route, {
              path: "transitions",
              component: TransitionsPage
            }), createComponent(Route, {
              path: "components",
              component: ComponentsPage
            }), createComponent(Route, {
              path: "focushandling",
              component: FocusHandlingPage
            }), createComponent(Route, {
              path: "keyhandling",
              component: KeyHandlingPage
            }), createComponent(Route, {
              path: "gradients",
              component: GradientsPage
            }), createComponent(Route, {
              path: "flex",
              component: FlexPage
            }), createComponent(Route, {
              path: "create",
              component: CreatePage
            }), createComponent(Route, {
              path: "viewport",
              component: ViewportPage
            }), createComponent(Route, {
              path: "flexsize",
              component: FlexSizePage
            }), createComponent(Route, {
              path: "flexcolumnsize",
              component: FlexColumnSizePage
            }), createComponent(Route, {
              path: "flexcolumn",
              component: FlexColumnPage
            }), createComponent(Route, {
              path: "flexgrow",
              component: FlexGrowPage
            }), createComponent(Route, {
              path: "superflex",
              component: SuperFlexPage
            }), createComponent(Route, {
              path: "buttonsmaterial",
              component: ButtonsMaterialPage
            }), createComponent(Route, {
              path: "entity/people/:id",
              component: People
            }), createComponent(Route, {
              path: "entity/:type/:id",
              component: Entity,
              preload: entityPreload
            }), createComponent(Route, {
              path: "*all",
              component: NotFound
            })];
          }
        }));
      }
    };
  });
})();
