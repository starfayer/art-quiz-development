/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/components/Button/index.js":
/*!********************************************!*\
  !*** ./src/app/components/Button/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/Button/style.scss");
/* harmony import */ var _button_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.html */ "./src/app/components/Button/button.html");
/* harmony import */ var _app_core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/core/component */ "./src/app/core/component.js");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/htmlToElement */ "./src/utils/htmlToElement.js");



 // class Button extends Component {
//   constructor(config) {
//     super(config)
//   }
//   events() {
//     return {
//       '.button click': this.delayClick
//     }
//   }
//   delayClick(event) {
//     event.target.style.background = '#fff';
//     event.target.style.color = '#000';
//     setTimeout(() => event.target.removeAttribute('style'), 1000)
//   }
// }
// const button = new Button({
//   scalable: true,
//   template: ButtonElement
// })

var button = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_3__["default"])(_button_html__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (button);

/***/ }),

/***/ "./src/app/components/Footer/index.js":
/*!********************************************!*\
  !*** ./src/app/components/Footer/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/Footer/style.scss");
/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.html */ "./src/app/components/Footer/footer.html");
/* harmony import */ var _app_core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/core/component */ "./src/app/core/component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Footer = /*#__PURE__*/function (_Component) {
  _inherits(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer(config) {
    _classCallCheck(this, Footer);

    return _super.call(this, config);
  }

  return Footer;
}(_app_core_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

var footer = new Footer({
  classSelector: 'footer-wrapper',
  template: _footer_html__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/app/components/Main/index.js":
/*!******************************************!*\
  !*** ./src/app/components/Main/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/Main/style.scss");
/* harmony import */ var _main_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.html */ "./src/app/components/Main/main.html");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./src/app/components/Button/index.js");
/* harmony import */ var _app_core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/core/component */ "./src/app/core/component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Main = /*#__PURE__*/function (_Component) {
  _inherits(Main, _Component);

  var _super = _createSuper(Main);

  function Main(config) {
    _classCallCheck(this, Main);

    return _super.call(this, config);
  }

  _createClass(Main, [{
    key: "external",
    value: function external() {
      return {
        '.main__button--artists': [_Button__WEBPACK_IMPORTED_MODULE_2__["default"], artistBtn],
        '.main__button--pictures': [_Button__WEBPACK_IMPORTED_MODULE_2__["default"], pictureBtn]
      };
    }
  }, {
    key: "events",
    value: function events() {
      return {
        '.main__button click': this.delayClick
      };
    }
  }, {
    key: "delayClick",
    value: function delayClick(event) {
      event.target.style.background = '#fff';
      event.target.style.color = '#000';
      setTimeout(function () {
        return event.target.removeAttribute('style');
      }, 1000);
    }
  }]);

  return Main;
}(_app_core_component__WEBPACK_IMPORTED_MODULE_3__["default"]);

var artistBtn = 'Artist Quiz';
var pictureBtn = 'Pictures Quiz';
var main = new Main({
  classSelector: 'main-wrapper',
  template: _main_html__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ "./src/app/components/Settings/index.js":
/*!**********************************************!*\
  !*** ./src/app/components/Settings/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/Settings/style.scss");
/* harmony import */ var _app_core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/core/component */ "./src/app/core/component.js");
/* harmony import */ var _settings_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.html */ "./src/app/components/Settings/settings.html");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



 // const settingsButton = document.querySelector('.settings__link');

function openSettings() {} // settingsButton.addEventListener('click', openSettings);


var Settings = /*#__PURE__*/function (_Component) {
  _inherits(Settings, _Component);

  var _super = _createSuper(Settings);

  function Settings(config) {
    _classCallCheck(this, Settings);

    return _super.call(this, config);
  }

  _createClass(Settings, [{
    key: "events",
    value: function events() {
      return {
        '.settings__open-close-btn click': this.openSettings,
        '.settings__header-btn click': this.openSettings,
        '.settings__header-text click': this.openSettings,
        '.settings__slider change': this.changeVolume
      };
    }
  }, {
    key: "functions",
    value: function functions() {}
  }, {
    key: "openSettings",
    value: function openSettings(event) {
      if (!event.target.classList.contains('settings__header-text')) {
        event.target.classList.add('animated');
        setTimeout(function () {
          return event.target.classList.remove('animated');
        }, 2000);
      } // Have access to this.el because of inheritance
      // document.querySelector('.settings-wrapper').style.transition = 'all 1s ease-in-out';


      document.querySelector('.settings-wrapper').classList.toggle('hidden');
    }
  }, {
    key: "changeVolume",
    value: function changeVolume(event) {
      var value = event.target.value;
      event.target.style.backgroundImage = "linear-gradient(to right, #FFBCA2 0%, #FFBCA2 0%, #FFBCA2 ".concat(value, "%, #A4A4A4 0%, #A4A4A4 0%,#A4A4A4 ").concat(event.target.max - value, "%)");
    }
  }]);

  return Settings;
}(_app_core_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

var settings = new Settings({
  classSelector: 'settings-wrapper',
  template: _settings_html__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);

/***/ }),

/***/ "./src/app/components/index.js":
/*!*************************************!*\
  !*** ./src/app/components/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings */ "./src/app/components/Settings/index.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./src/app/components/Main/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/app/components/Footer/index.js");



var components = [_Settings__WEBPACK_IMPORTED_MODULE_0__["default"], _Main__WEBPACK_IMPORTED_MODULE_1__["default"], _Footer__WEBPACK_IMPORTED_MODULE_2__["default"]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (components);

/***/ }),

/***/ "./src/app/core/component.js":
/*!***********************************!*\
  !*** ./src/app/core/component.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _utils_changeElementText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/changeElementText */ "./src/utils/changeElementText.js");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/htmlToElement */ "./src/utils/htmlToElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Component = /*#__PURE__*/function () {
  function Component(config) {
    _classCallCheck(this, Component);

    this.classSelector = config.classSelector;
    this.template = config.template;
    this.el = document.querySelector(".".concat(this.classSelector)) || null;
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      if (!this.scalable) {
        if (!this.el) throw new Error("Component with ".concat(this.classSelector, " wasn't found"));
        this.rewriteTag();
        console.log(this.el);
      }

      this._initExternal();

      this._initEvents();
    }
  }, {
    key: "_initEvents",
    value: function _initEvents() {
      var _this = this;

      if (!this.events) return;
      var events = this.events();
      Object.keys(events).forEach(function (key) {
        var listener = key.split(' ');
        var classSelector = listener[0];
        var event = listener[1];
        var element = document.querySelectorAll(classSelector);
        if (element.length == 1) document.querySelector(classSelector).addEventListener(event, events[key].bind(_this));else element.forEach(function (el) {
          return el.addEventListener(event, events[key].bind(_this));
        });
      });
    }
  }, {
    key: "_initExternal",
    value: function _initExternal() {
      if (!this.external) return;
      var externalObj = this.external();
      Object.keys(externalObj).forEach(function (data) {
        var selector = data;
        var element = externalObj[data][0];
        var text = externalObj[data][1];
        var newElement = (0,_utils_changeElementText__WEBPACK_IMPORTED_MODULE_0__["default"])(element.cloneNode(true), text);
        newElement.id = selector.split('--').slice(-1);
        document.querySelector(selector).appendChild(newElement);
      });
    }
  }, {
    key: "rewriteTag",
    value: function rewriteTag() {
      document.querySelector(".".concat(this.classSelector)).innerHTML = '';
      document.querySelector(".".concat(this.classSelector)).appendChild((0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__["default"])(this.template));
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/app/core/module.js":
/*!********************************!*\
  !*** ./src/app/core/module.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Module)
/* harmony export */ });
/* harmony import */ var _utils_getUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/getUrl */ "./src/utils/getUrl.js");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/htmlToElement */ "./src/utils/htmlToElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Module = /*#__PURE__*/function () {
  function Module(config) {
    _classCallCheck(this, Module);

    this.components = config.components;
    this.pages = config.pages;
    this.routes = config.routes;
  }

  _createClass(Module, [{
    key: "renderApp",
    value: function renderApp() {
      console.log(this.components);
      this.connect();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.components.forEach(function (c) {
        return c.render();
      }); // if (this.routes) this.renderRoutes();
    }
  }, {
    key: "renderRoutes",
    value: function renderRoutes() {
      window.addEventListener('hashchange', this.changeRoute.bind(this));
      this.changeRoute();
    }
  }, {
    key: "changeRoute",
    value: function changeRoute() {
      var url = (0,_utils_getUrl__WEBPACK_IMPORTED_MODULE_0__["default"])();
      var route = this.routes.find(function (hash) {
        return hash.path.slice(1) === url;
      });
      if (route) route.component.render();
      console.log(route);
    }
  }]);

  return Module;
}();



/***/ }),

/***/ "./src/app/core/render.js":
/*!********************************!*\
  !*** ./src/app/core/render.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(module) {
  module.renderApp();
}

/***/ }),

/***/ "./src/app/pages/Home/index.js":
/*!*************************************!*\
  !*** ./src/app/pages/Home/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _app_components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/components/Footer */ "./src/app/components/Footer/index.js");
/* harmony import */ var _app_components_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Settings */ "./src/app/components/Settings/index.js");
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components */ "./src/app/components/index.js");



var homePage = [_app_components__WEBPACK_IMPORTED_MODULE_2__["default"].settings, _app_components__WEBPACK_IMPORTED_MODULE_2__["default"].main, _app_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer];

/***/ }),

/***/ "./src/app/pages/index.js":
/*!********************************!*\
  !*** ./src/app/pages/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.homePage)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/app/pages/Home/index.js");



/***/ }),

/***/ "./src/app/pages/routes.js":
/*!*********************************!*\
  !*** ./src/app/pages/routes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/app/pages/index.js");

var routes = [{
  path: '#',
  component: _index__WEBPACK_IMPORTED_MODULE_0__.homePage
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/utils/changeElementText.js":
/*!****************************************!*\
  !*** ./src/utils/changeElementText.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element, text) {
  element.textContent = text;
  return element;
}

/***/ }),

/***/ "./src/utils/getUrl.js":
/*!*****************************!*\
  !*** ./src/utils/getUrl.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCurrentUrl)
/* harmony export */ });
function getCurrentUrl() {
  return location.hash.slice(1);
}

/***/ }),

/***/ "./src/utils/htmlToElement.js":
/*!************************************!*\
  !*** ./src/utils/htmlToElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(htmlElement) {
  var template = document.createElement('template');
  template.innerHTML = htmlElement;
  return template.content.firstChild;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Button/style.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Button/style.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n  border: 1px solid #fff;\n  border-radius: 60px;\n  color: #fff;\n  transition: background-color ease-in 0.2s;\n}\n.button:hover {\n  background: #FFBCA2;\n}\n\n.clicked {\n  background-color: #fff;\n  color: #000;\n}", "",{"version":3,"sources":["webpack://./src/app/components/Button/style.scss"],"names":[],"mappings":"AA4BA;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EAjCA,UAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EA+BA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,yCAAA;AAvBF;AAwBE;EACE,mBAhBW;AANf;;AA0BA;EACE,sBAAA;EACA,WAAA;AAvBF","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n.button {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  @include button-layout;\n  border: 1px solid #fff;\n  border-radius: 60px;\n  color: #fff;\n  transition: background-color ease-in .2s;\n  &:hover {\n    background: $orange-color;\n  }\n}\n\n.clicked {\n  background-color: #fff;\n  color: #000;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Footer/style.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Footer/style.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer__container {\n  width: 92%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n}\n.footer__developer-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 15%;\n}\n.footer__name {\n  width: 80%;\n}\n.footer__link {\n  color: #fff;\n  font-weight: 600;\n  text-decoration: none;\n}\n.footer__link:hover {\n  color: #FFBCA2;\n}", "",{"version":3,"sources":["webpack://./src/app/components/Footer/style.scss"],"names":[],"mappings":"AA6BE;EACE,UAAA;EACA,cAAA;EACA,aAAA;EACA,8BAAA;AA5BJ;AA8BE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;AA5BJ;AA8BE;EACE,UAAA;AA5BJ;AA8BE;EACE,WAAA;EACA,gBAAA;EACA,qBAAA;AA5BJ;AA8BE;EACE,cAzBW;AAHf","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n.footer {\n  &__container {\n    width: 92%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n  &__developer-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 15%;\n  }\n  &__name {\n    width: 80%;\n  }\n  &__link {\n    color: #fff;\n    font-weight: 600;\n    text-decoration: none;\n  }\n  &__link:hover {\n    color: $orange-color;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Main/style.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Main/style.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/main-background.jpg */ "./src/app/components/assets/main-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  height: 100%;\n}\n.main__container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 50%;\n  margin: 0 auto;\n}\n.main__logo {\n  width: 45%;\n  margin: 0 auto;\n  margin-bottom: 10%;\n}\n.main__img {\n  width: 100%;\n}\n.main__button-container {\n  display: flex;\n  justify-content: space-between;\n  width: 62%;\n  margin: 0 auto;\n}\n.main__button {\n  height: 62px;\n  width: 48%;\n}", "",{"version":3,"sources":["webpack://./src/app/components/Main/style.scss"],"names":[],"mappings":"AA4BA;EACE,yDAAA;EACA,sBAAA;EACA,YAAA;AA3BF;AA4BE;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,UAAA;EACA,cAAA;AA1BJ;AA4BE;EACE,UAAA;EACA,cAAA;EACA,kBAAA;AA1BJ;AA4BE;EACE,WAAA;AA1BJ;AA6BE;EACE,aAAA;EACA,8BAAA;EACA,UAAA;EACA,cAAA;AA3BJ;AA6BE;EACE,YAAA;EACA,UAAA;AA3BJ","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n.main {\n  background-image: url(../assets/main-background.jpg);\n  background-size: cover;\n  height: 100%;\n  &__container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 50%;\n    margin: 0 auto;\n  }\n  &__logo {\n    width: 45%;\n    margin: 0 auto;\n    margin-bottom: 10%;\n  }\n  &__img {\n    width: 100%;\n  }\n\n  &__button-container {\n    display: flex;\n    justify-content: space-between;\n    width: 62%;\n    margin: 0 auto;\n  }\n  &__button {\n    height: 62px;\n    width: 48%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Settings/style.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Settings/style.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/settings-btn.svg */ "./src/app/components/assets/settings-btn.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/back-arrow.svg */ "./src/app/components/assets/back-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/close-btn.svg */ "./src/app/components/assets/close-btn.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/minus-btn.svg */ "./src/app/components/assets/minus-btn.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/plus-btn.svg */ "./src/app/components/assets/plus-btn.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings {\n  height: 100%;\n}\n.settings__container {\n  height: inherit;\n  width: 92%;\n  margin: 0 auto;\n}\n.settings__open-close-btn {\n  position: absolute;\n  top: 4%;\n  left: -5%;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.settings__header {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 2%;\n  align-items: center;\n  height: 10%;\n  background-size: 100% 100%;\n}\n.settings__header-text {\n  position: relative;\n  cursor: pointer;\n  font-size: 22px;\n}\n.settings__header-text::before {\n  content: \"\";\n  position: absolute;\n  top: -15%;\n  left: -45%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  width: 34px;\n  height: 34px;\n}\n.settings__header-btn {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.settings__inner {\n  height: 55%;\n  font-size: 34px;\n  font-weight: 700;\n}\n.settings__volume {\n  margin-top: 5%;\n  margin-bottom: 80px;\n  width: 23%;\n  height: 23%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.settings__slider {\n  background: linear-gradient(to right, #FFBCA2 0%, #FFBCA2 50%, #A4A4A4 50%, #A4A4A4 100%);\n  border-radius: 8px;\n  height: 3px;\n  width: 356px;\n  outline: none;\n  cursor: ew-resize;\n  -webkit-appearance: none;\n}\n.settings__slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.settings__slider-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.settings__check {\n  height: 16%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 23%;\n  margin-bottom: 80px;\n}\n.settings__text {\n  font-size: 22px;\n  font-weight: 500;\n}\n.settings__checkbox input {\n  display: none;\n}\n.settings__checkbox label {\n  cursor: pointer;\n  position: relative;\n  font-size: 18px;\n  padding: 15px 0;\n}\n.settings__checkbox input[type=checkbox] {\n  position: absolute;\n  visibility: hidden !important;\n}\n.settings__checkbox input[type=checkbox] + label:before, .settings__checkbox input[type=checkbox] + label:after {\n  content: \"\";\n  position: absolute;\n  bottom: 5%;\n  box-sizing: border-box;\n}\n.settings__checkbox input[type=checkbox] + label:before {\n  width: 48px;\n  height: 24px;\n  margin-left: 40px;\n  background: #FFBCA2;\n  border-radius: 15px;\n}\n.settings__checkbox input[type=checkbox] + label:after {\n  width: 16px;\n  height: 16px;\n  top: -20px;\n  right: -83px;\n  background: #fff;\n  border-radius: 50%;\n  transition: all 200ms ease-out;\n}\n.settings__checkbox input[type=checkbox]:checked + label:after {\n  top: -20px;\n  right: -60px;\n  background: #fff;\n}\n.settings__time {\n  height: 18%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 16%;\n}\n.settings__form {\n  display: flex;\n  justify-content: space-between;\n  width: 45%;\n}\n.settings__number {\n  margin-top: 4%;\n  font-size: 24px;\n  font-weight: 500;\n}\n.settings__button {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n  width: 60%;\n  max-width: 36px;\n  height: 36px;\n}\n.settings__button--minus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.settings__button--plus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.settings__config {\n  margin-top: 5%;\n  display: flex;\n  justify-content: flex-end;\n  height: 6%;\n}\n.settings__config-wrapper {\n  align-items: right;\n  display: flex;\n  justify-content: space-between;\n  width: 40%;\n}\n.settings__config-button {\n  width: 49%;\n}\n\n.animated {\n  animation: barrelRoll 2s infinite linear;\n  animation-timing-function: ease-out;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes barrelRoll {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n.hidden {\n  transition: all 1s ease-in-out;\n  transform: none;\n}", "",{"version":3,"sources":["webpack://./src/app/components/Settings/style.scss"],"names":[],"mappings":"AA4BA;EACE,YAAA;AA3BF;AA6BE;EACE,eAAA;EAdF,UAe2B;EAd3B,cAAA;AAZF;AA4BE;EACE,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EAvCF,UAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EAqCE,yDAAA;AAtBJ;AAwBE;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,0BAAA;AAtBJ;AAwBE;EACE,kBAAA;EACA,eAAA;EACA,eAjCmB;AAWvB;AAwBE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,yDAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;AAtBJ;AAyBE;EACE,WAAA;EACA,YAAA;EArEF,UAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EAmEE,yDAAA;AAnBJ;AAsBE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;AApBJ;AAsBE;EACE,cAAA;EACA,mBAAA;EACA,UAAA;EAzEA,WA0EqB;EAxEvB,aAAA;EACA,sBAAA;EACA,8BAAA;AAqDF;AAmBE;EACE,yFAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,wBAAA;AAjBJ;AAmBE;EACE,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AAjBJ;AAmBE;EACE,aAAA;EACA,8BAAA;AAjBJ;AAoBE;EAnGE,WAoGqB;EAlGvB,aAAA;EACA,sBAAA;EACA,8BAAA;EAiGE,UAAA;EACA,mBAAA;AAfJ;AAiBE;EACE,eA7FmB;EA8FnB,gBA7FiB;AA8ErB;AAiBE;EACE,aAAA;AAfJ;AAiBE;EACE,eAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AAfJ;AAiBE;EACE,kBAAA;EACA,6BAAA;AAfJ;AAiBE;EAEA,WAAA;EACA,kBAAA;EACA,UAAA;EACA,sBAAA;AAhBF;AAkBE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;AAhBJ;AAkBE;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,8BAAA;AAhBJ;AAkBE;EACE,UAAA;EACA,YAAA;EACA,gBAAA;AAhBJ;AAmBE;EAtJE,WAuJqB;EArJvB,aAAA;EACA,sBAAA;EACA,8BAAA;EAoJE,UAAA;AAdJ;AAgBE;EACE,aAAA;EACA,8BAAA;EACA,UAAA;AAdJ;AAgBE;EACE,cAAA;EACA,eAAA;EACA,gBArJiB;AAuIrB;AAgBE;EA7KA,UAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EA2KE,UAAA;EACA,eAAA;EACA,YAAA;AAVJ;AAYE;EACE,yDAAA;AAVJ;AAYE;EACE,yDAAA;AAVJ;AAaE;EACE,cAAA;EACA,aAAA;EACA,yBAAA;EACA,UAAA;AAXJ;AAaE;EACE,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,UAAA;AAXJ;AAaE;EACE,UAAA;AAXJ;;AAeA;EACE,wCAAA;EACA,mCAAA;EACA,4BAAA;EACA,6BAAA;AAZF;;AAeA;EACE;IAAK,+BAAA;EAXL;EAYA;IAAO,iCAAA;EATP;AACF;AAWA;EAEE,8BA/LmB;EAgMnB,eAAA;AAVF","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n.settings {\n  height: 100%;\n  // transition: all 1s ease-in-out;\n  &__container {\n    height: inherit;\n    @include center-position(92%);\n  }\n  &__open-close-btn{\n    position: absolute;\n    top: 4%;\n    left: -5%;\n    width: 36px;\n    height: 36px;\n    @include button-layout;\n    background-image: url(../assets/settings-btn.svg);\n  }\n  &__header{\n    display: flex;\n    justify-content: space-between;\n    margin-left: 2%;\n    align-items: center;\n    height: 10%;\n    background-size: 100% 100%;\n  }\n  &__header-text {\n    position: relative;\n    cursor: pointer;\n    font-size: $navigation-font-size;\n  }\n  &__header-text::before {\n    content: '';\n    position: absolute;\n    top: -15%;\n    left: -45%;\n    background-image: url(../assets/back-arrow.svg);\n    background-size: cover;\n    width: 34px;\n    height: 34px;\n  }\n\n  &__header-btn {\n    width: 36px;\n    height: 36px;\n    @include button-layout;\n    background-image: url(../assets/close-btn.svg);\n  }\n\n  &__inner {\n    height: 55%;\n    font-size: 34px;\n    font-weight: 700;;\n  }\n  &__volume {\n    margin-top: 5%;\n    margin-bottom: 80px;\n    width: 23%;\n    @include flex-column(23%);\n  }\n  &__slider {\n    background: linear-gradient(to right, $orange-color 0%, $orange-color 50%, #A4A4A4 50%, #A4A4A4 100%);\n    border-radius: 8px;\n    height: 3px;\n    width: 356px;\n    outline: none;\n    cursor: ew-resize;\n    -webkit-appearance: none;\n  }\n  &__slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 16px; \n    height: 16px;\n    background: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n  }\n  &__slider-icons {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &__check {\n    @include flex-column(16%);\n    width: 23%;\n    margin-bottom: 80px;\n  }\n  &__text {\n    font-size: $navigation-font-size;\n    font-weight: $medium-font-weight;\n  }\n  &__checkbox input {\n    display: none;\n  }\n  &__checkbox label {\n    cursor: pointer;\n    position: relative;\n    font-size: 18px;\n    padding: 15px 0;\n  }\n  &__checkbox input[type=\"checkbox\"] {\n    position: absolute;\n    visibility: hidden !important;\n  }\n  &__checkbox input[type=\"checkbox\"]+label:before,\n  &__checkbox input[type=\"checkbox\"]+label:after {\n  content: '';\n  position: absolute;\n  bottom: 5%;\n  box-sizing: border-box;\n  }\n  &__checkbox input[type=\"checkbox\"]+label:before {\n    width: 48px;\n    height: 24px;\n    margin-left: 40px;\n    background: #FFBCA2;\n    border-radius: 15px;\n  }\n  &__checkbox input[type=\"checkbox\"]+label:after {\n    width: 16px;\n    height: 16px;\n    top: -20px;\n    right: -83px;\n    background: #fff;\n    border-radius: 50%;\n    transition: all 200ms ease-out;\n  }\n  &__checkbox input[type=\"checkbox\"]:checked+label:after {\n    top: -20px;\n    right: -60px;\n    background: #fff;\n  }\n\n  &__time {\n    @include flex-column(18%);\n    width: 16%;\n  }\n  &__form {\n    display: flex;\n    justify-content: space-between;\n    width: 45%;\n  }\n  &__number {\n    margin-top: 4%;\n    font-size: 24px;\n    font-weight: $medium-font-weight;\n  }\n  &__button {\n    @include button-layout;\n    width: 60%;\n    max-width: 36px;\n    height: 36px;\n  }\n  &__button--minus {\n    background-image: url(../assets/minus-btn.svg);\n  }\n  &__button--plus {\n    background-image: url(../assets/plus-btn.svg);\n  }\n\n  &__config {\n    margin-top: 5%;\n    display: flex;\n    justify-content: flex-end;\n    height: 6%;\n  }\n  &__config-wrapper {\n    align-items: right;\n    display: flex;\n    justify-content: space-between;\n    width: 40%;\n  }\n  &__config-button {\n    width: 49%;\n  }\n}\n\n.animated {\n  animation: barrelRoll 2s infinite linear;\n  animation-timing-function: ease-out;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes barrelRoll {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n.hidden {\n  // display: none;\n  transition: $transition-default;\n  transform: none;\n}\n// div:hover > button {\n  // animation-play-state: running;\n  // animation-play-state: paused;\n// }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/styles/style.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/styles/style.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_gilroy_gilroy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/gilroy/gilroy.css */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/gilroy/gilroy.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../app/components/assets/main-background.png */ "./src/app/components/assets/main-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_gilroy_gilroy_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  background-color: #000;\n  overflow: hidden;\n  font-family: \"Gilroy\";\n  font-weight: 500;\n  color: #fff;\n}\n\n.background {\n  height: inherit;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n.settings-wrapper {\n  position: absolute;\n  width: 100%;\n  transform: translateX(100%);\n  height: 95%;\n}\n\n.main-wrapper {\n  height: 100%;\n}\n\n.footer-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 80px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAgCA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBCdmB;EDenB,WAAA;AA7BF;;AAgCA;EACE,eAAA;EACA,yDAAA;EACA,sBAAA;AA7BF;;AA+BA;EACE,kBAAA;EACA,WAAA;EACA,2BAAA;EACA,WAAA;AA5BF;;AA+BA;EACE,YAAA;AA5BF;;AA8BA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;AA3BF","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n@import \"../fonts/gilroy/gilroy.css\";\n@import \"normalize.css\";\n@import \"vars.scss\";\n\nbody {\n  height: 100vh;\n  background-color: #000;\n  overflow: hidden;\n  font-family: 'Gilroy';\n  font-weight: $medium-font-weight;\n  color: #fff;\n}\n\n.background {\n  height: inherit;\n  background-image: url(../app/components/assets/main-background.png);\n  background-size: cover;\n}\n.settings-wrapper {\n  position: absolute;\n  width: 100%;\n  transform: translateX(100%);\n  height: 95%;\n}\n\n.main-wrapper {\n  height: 100%;\n}\n.footer-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 80px;\n}","@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/gilroy/gilroy.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/gilroy/gilroy.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Regular.eot */ "./src/fonts/gilroy/Gilroy-Regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Regular.woff2 */ "./src/fonts/gilroy/Gilroy-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Regular.woff */ "./src/fonts/gilroy/Gilroy-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Regular.ttf */ "./src/fonts/gilroy/Gilroy-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-ExtraboldItalic.eot */ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-ExtraboldItalic.woff2 */ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-ExtraboldItalic.woff */ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-ExtraboldItalic.ttf */ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Bold.eot */ "./src/fonts/gilroy/Gilroy-Bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Bold.woff2 */ "./src/fonts/gilroy/Gilroy-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Bold.woff */ "./src/fonts/gilroy/Gilroy-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Bold.ttf */ "./src/fonts/gilroy/Gilroy-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Black.eot */ "./src/fonts/gilroy/Gilroy-Black.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Black.woff2 */ "./src/fonts/gilroy/Gilroy-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Black.woff */ "./src/fonts/gilroy/Gilroy-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Black.ttf */ "./src/fonts/gilroy/Gilroy-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Light.eot */ "./src/fonts/gilroy/Gilroy-Light.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Light.woff2 */ "./src/fonts/gilroy/Gilroy-Light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Light.woff */ "./src/fonts/gilroy/Gilroy-Light.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Light.ttf */ "./src/fonts/gilroy/Gilroy-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Semibold.eot */ "./src/fonts/gilroy/Gilroy-Semibold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Semibold.woff2 */ "./src/fonts/gilroy/Gilroy-Semibold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Semibold.woff */ "./src/fonts/gilroy/Gilroy-Semibold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Semibold.ttf */ "./src/fonts/gilroy/Gilroy-Semibold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Medium.eot */ "./src/fonts/gilroy/Gilroy-Medium.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Medium.woff2 */ "./src/fonts/gilroy/Gilroy-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Medium.woff */ "./src/fonts/gilroy/Gilroy-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Medium.ttf */ "./src/fonts/gilroy/Gilroy-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-MediumItalic.eot */ "./src/fonts/gilroy/Gilroy-MediumItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-MediumItalic.woff2 */ "./src/fonts/gilroy/Gilroy-MediumItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-MediumItalic.woff */ "./src/fonts/gilroy/Gilroy-MediumItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-MediumItalic.ttf */ "./src/fonts/gilroy/Gilroy-MediumItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-BlackItalic.eot */ "./src/fonts/gilroy/Gilroy-BlackItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-BlackItalic.woff2 */ "./src/fonts/gilroy/Gilroy-BlackItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-BlackItalic.woff */ "./src/fonts/gilroy/Gilroy-BlackItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-BlackItalic.ttf */ "./src/fonts/gilroy/Gilroy-BlackItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-UltraLight.eot */ "./src/fonts/gilroy/Gilroy-UltraLight.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-UltraLight.woff2 */ "./src/fonts/gilroy/Gilroy-UltraLight.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-UltraLight.woff */ "./src/fonts/gilroy/Gilroy-UltraLight.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-UltraLight.ttf */ "./src/fonts/gilroy/Gilroy-UltraLight.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-RegularItalic.eot */ "./src/fonts/gilroy/Gilroy-RegularItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-RegularItalic.woff2 */ "./src/fonts/gilroy/Gilroy-RegularItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-RegularItalic.woff */ "./src/fonts/gilroy/Gilroy-RegularItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-RegularItalic.ttf */ "./src/fonts/gilroy/Gilroy-RegularItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-SemiboldItalic.eot */ "./src/fonts/gilroy/Gilroy-SemiboldItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-SemiboldItalic.woff2 */ "./src/fonts/gilroy/Gilroy-SemiboldItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-SemiboldItalic.woff */ "./src/fonts/gilroy/Gilroy-SemiboldItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-SemiboldItalic.ttf */ "./src/fonts/gilroy/Gilroy-SemiboldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-HeavyItalic.eot */ "./src/fonts/gilroy/Gilroy-HeavyItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-HeavyItalic.woff2 */ "./src/fonts/gilroy/Gilroy-HeavyItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-HeavyItalic.woff */ "./src/fonts/gilroy/Gilroy-HeavyItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_51___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-HeavyItalic.ttf */ "./src/fonts/gilroy/Gilroy-HeavyItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_52___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Extrabold.eot */ "./src/fonts/gilroy/Gilroy-Extrabold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_53___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Extrabold.woff2 */ "./src/fonts/gilroy/Gilroy-Extrabold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_54___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Extrabold.woff */ "./src/fonts/gilroy/Gilroy-Extrabold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_55___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Extrabold.ttf */ "./src/fonts/gilroy/Gilroy-Extrabold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_56___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-BoldItalic.eot */ "./src/fonts/gilroy/Gilroy-BoldItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_57___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-BoldItalic.woff2 */ "./src/fonts/gilroy/Gilroy-BoldItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_58___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-BoldItalic.woff */ "./src/fonts/gilroy/Gilroy-BoldItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_59___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-BoldItalic.ttf */ "./src/fonts/gilroy/Gilroy-BoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_60___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-UltraLightItalic.eot */ "./src/fonts/gilroy/Gilroy-UltraLightItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_61___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-UltraLightItalic.woff2 */ "./src/fonts/gilroy/Gilroy-UltraLightItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_62___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-UltraLightItalic.woff */ "./src/fonts/gilroy/Gilroy-UltraLightItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_63___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-UltraLightItalic.ttf */ "./src/fonts/gilroy/Gilroy-UltraLightItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_64___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-LightItalic.eot */ "./src/fonts/gilroy/Gilroy-LightItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_65___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-LightItalic.woff2 */ "./src/fonts/gilroy/Gilroy-LightItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_66___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-LightItalic.woff */ "./src/fonts/gilroy/Gilroy-LightItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_67___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-LightItalic.ttf */ "./src/fonts/gilroy/Gilroy-LightItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_68___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Heavy.eot */ "./src/fonts/gilroy/Gilroy-Heavy.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_69___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Heavy.woff2 */ "./src/fonts/gilroy/Gilroy-Heavy.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_70___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Heavy.woff */ "./src/fonts/gilroy/Gilroy-Heavy.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_71___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Heavy.ttf */ "./src/fonts/gilroy/Gilroy-Heavy.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_72___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Thin.eot */ "./src/fonts/gilroy/Gilroy-Thin.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_73___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Thin.woff2 */ "./src/fonts/gilroy/Gilroy-Thin.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_74___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Thin.woff */ "./src/fonts/gilroy/Gilroy-Thin.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_75___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-Thin.ttf */ "./src/fonts/gilroy/Gilroy-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_76___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-ThinItalic.eot */ "./src/fonts/gilroy/Gilroy-ThinItalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_77___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-ThinItalic.woff2 */ "./src/fonts/gilroy/Gilroy-ThinItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_78___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-ThinItalic.woff */ "./src/fonts/gilroy/Gilroy-ThinItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_79___ = new URL(/* asset import */ __webpack_require__(/*! Gilroy-ThinItalic.ttf */ "./src/fonts/gilroy/Gilroy-ThinItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);
var ___CSS_LOADER_URL_REPLACEMENT_44___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_47___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);
var ___CSS_LOADER_URL_REPLACEMENT_48___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);
var ___CSS_LOADER_URL_REPLACEMENT_50___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_52___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);
var ___CSS_LOADER_URL_REPLACEMENT_53___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);
var ___CSS_LOADER_URL_REPLACEMENT_54___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);
var ___CSS_LOADER_URL_REPLACEMENT_55___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_44___);
var ___CSS_LOADER_URL_REPLACEMENT_56___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_44___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_57___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_45___);
var ___CSS_LOADER_URL_REPLACEMENT_58___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_46___);
var ___CSS_LOADER_URL_REPLACEMENT_59___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_47___);
var ___CSS_LOADER_URL_REPLACEMENT_60___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_48___);
var ___CSS_LOADER_URL_REPLACEMENT_61___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_48___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_62___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_49___);
var ___CSS_LOADER_URL_REPLACEMENT_63___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_50___);
var ___CSS_LOADER_URL_REPLACEMENT_64___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_51___);
var ___CSS_LOADER_URL_REPLACEMENT_65___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_52___);
var ___CSS_LOADER_URL_REPLACEMENT_66___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_52___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_67___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_53___);
var ___CSS_LOADER_URL_REPLACEMENT_68___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_54___);
var ___CSS_LOADER_URL_REPLACEMENT_69___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_55___);
var ___CSS_LOADER_URL_REPLACEMENT_70___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_56___);
var ___CSS_LOADER_URL_REPLACEMENT_71___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_56___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_72___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_57___);
var ___CSS_LOADER_URL_REPLACEMENT_73___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_58___);
var ___CSS_LOADER_URL_REPLACEMENT_74___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_59___);
var ___CSS_LOADER_URL_REPLACEMENT_75___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_60___);
var ___CSS_LOADER_URL_REPLACEMENT_76___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_60___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_77___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_61___);
var ___CSS_LOADER_URL_REPLACEMENT_78___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_62___);
var ___CSS_LOADER_URL_REPLACEMENT_79___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_63___);
var ___CSS_LOADER_URL_REPLACEMENT_80___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_64___);
var ___CSS_LOADER_URL_REPLACEMENT_81___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_64___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_82___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_65___);
var ___CSS_LOADER_URL_REPLACEMENT_83___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_66___);
var ___CSS_LOADER_URL_REPLACEMENT_84___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_67___);
var ___CSS_LOADER_URL_REPLACEMENT_85___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_68___);
var ___CSS_LOADER_URL_REPLACEMENT_86___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_68___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_87___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_69___);
var ___CSS_LOADER_URL_REPLACEMENT_88___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_70___);
var ___CSS_LOADER_URL_REPLACEMENT_89___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_71___);
var ___CSS_LOADER_URL_REPLACEMENT_90___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_72___);
var ___CSS_LOADER_URL_REPLACEMENT_91___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_72___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_92___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_73___);
var ___CSS_LOADER_URL_REPLACEMENT_93___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_74___);
var ___CSS_LOADER_URL_REPLACEMENT_94___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_75___);
var ___CSS_LOADER_URL_REPLACEMENT_95___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_76___);
var ___CSS_LOADER_URL_REPLACEMENT_96___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_76___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_97___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_77___);
var ___CSS_LOADER_URL_REPLACEMENT_98___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_78___);
var ___CSS_LOADER_URL_REPLACEMENT_99___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_79___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    src: local('Gilroy Regular'), local('Gilroy-Regular'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    src: local('Gilroy Extrabold Italic'), local('Gilroy-ExtraboldItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('truetype');\n    font-weight: 800;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n    src: local('Gilroy Bold'), local('Gilroy-Bold'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n    src: local('Gilroy Black'), local('Gilroy-Black'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format('truetype');\n    font-weight: 900;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n    src: local('Gilroy Light'), local('Gilroy-Light'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ") format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n    src: local('Gilroy Semibold'), local('Gilroy-Semibold'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ");\n    src: local('Gilroy Medium'), local('Gilroy-Medium'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ") format('truetype');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ");\n    src: local('Gilroy Medium Italic'), local('Gilroy-MediumItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ") format('truetype');\n    font-weight: 500;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ");\n    src: local('Gilroy Black Italic'), local('Gilroy-BlackItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_44___ + ") format('truetype');\n    font-weight: 900;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_45___ + ");\n    src: local('Gilroy UltraLight'), local('Gilroy-UltraLight'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_46___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_47___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_48___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_49___ + ") format('truetype');\n    font-weight: 200;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_50___ + ");\n    src: local('Gilroy Regular Italic'), local('Gilroy-RegularItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_51___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_52___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_53___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_54___ + ") format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_55___ + ");\n    src: local('Gilroy Semibold Italic'), local('Gilroy-SemiboldItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_56___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_57___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_58___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_59___ + ") format('truetype');\n    font-weight: 600;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_60___ + ");\n    src: local('Gilroy Heavy Italic'), local('Gilroy-HeavyItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_61___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_62___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_63___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_64___ + ") format('truetype');\n    font-weight: 900;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_65___ + ");\n    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_66___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_67___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_68___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_69___ + ") format('truetype');\n    font-weight: 800;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_70___ + ");\n    src: local('Gilroy Bold Italic'), local('Gilroy-BoldItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_71___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_72___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_73___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_74___ + ") format('truetype');\n    font-weight: bold;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_75___ + ");\n    src: local('Gilroy UltraLight Italic'), local('Gilroy-UltraLightItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_76___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_77___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_78___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_79___ + ") format('truetype');\n    font-weight: 200;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_80___ + ");\n    src: local('Gilroy Light Italic'), local('Gilroy-LightItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_81___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_82___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_83___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_84___ + ") format('truetype');\n    font-weight: 300;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_85___ + ");\n    src: local('Gilroy Heavy'), local('Gilroy-Heavy'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_86___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_87___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_88___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_89___ + ") format('truetype');\n    font-weight: 900;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_90___ + ");\n    src: local('Gilroy Thin'), local('Gilroy-Thin'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_91___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_92___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_93___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_94___ + ") format('truetype');\n    font-weight: 100;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_95___ + ");\n    src: local('Gilroy Thin Italic'), local('Gilroy-ThinItalic'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_96___ + ") format('embedded-opentype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_97___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_98___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_99___ + ") format('truetype');\n    font-weight: 100;\n    font-style: italic;\n}\n\n", "",{"version":3,"sources":["webpack://./src/fonts/gilroy/gilroy.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAA8B;IAC9B;;;;kEAIgD;IAChD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,4CAAsC;IACtC;;;;kEAIwD;IACxD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAA2B;IAC3B;;;;mEAI6C;IAC7C,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAA4B;IAC5B;;;;mEAI8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAA4B;IAC5B;;;;mEAI8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAA+B;IAC/B;;;;mEAIiD;IACjD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAA6B;IAC7B;;;;mEAI+C;IAC/C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAmC;IACnC;;;;mEAIqD;IACrD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAkC;IAClC;;;;mEAIoD;IACpD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAiC;IACjC;;;;mEAImD;IACnD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAoC;IACpC;;;;mEAIsD;IACtD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAqC;IACrC;;;;mEAIuD;IACvD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAkC;IAClC;;;;mEAIoD;IACpD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAgC;IAChC;;;;mEAIkD;IAClD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAiC;IACjC;;;;mEAImD;IACnD,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAuC;IACvC;;;;mEAIyD;IACzD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAkC;IAClC;;;;mEAIoD;IACpD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAA4B;IAC5B;;;;mEAI8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAA2B;IAC3B;;;;mEAI6C;IAC7C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,6CAAiC;IACjC;;;;mEAImD;IACnD,gBAAgB;IAChB,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Regular.eot');\n    src: local('Gilroy Regular'), local('Gilroy-Regular'),\n        url('Gilroy-Regular.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Regular.woff2') format('woff2'),\n        url('Gilroy-Regular.woff') format('woff'),\n        url('Gilroy-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-ExtraboldItalic.eot');\n    src: local('Gilroy Extrabold Italic'), local('Gilroy-ExtraboldItalic'),\n        url('Gilroy-ExtraboldItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-ExtraboldItalic.woff2') format('woff2'),\n        url('Gilroy-ExtraboldItalic.woff') format('woff'),\n        url('Gilroy-ExtraboldItalic.ttf') format('truetype');\n    font-weight: 800;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Bold.eot');\n    src: local('Gilroy Bold'), local('Gilroy-Bold'),\n        url('Gilroy-Bold.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Bold.woff2') format('woff2'),\n        url('Gilroy-Bold.woff') format('woff'),\n        url('Gilroy-Bold.ttf') format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Black.eot');\n    src: local('Gilroy Black'), local('Gilroy-Black'),\n        url('Gilroy-Black.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Black.woff2') format('woff2'),\n        url('Gilroy-Black.woff') format('woff'),\n        url('Gilroy-Black.ttf') format('truetype');\n    font-weight: 900;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Light.eot');\n    src: local('Gilroy Light'), local('Gilroy-Light'),\n        url('Gilroy-Light.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Light.woff2') format('woff2'),\n        url('Gilroy-Light.woff') format('woff'),\n        url('Gilroy-Light.ttf') format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Semibold.eot');\n    src: local('Gilroy Semibold'), local('Gilroy-Semibold'),\n        url('Gilroy-Semibold.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Semibold.woff2') format('woff2'),\n        url('Gilroy-Semibold.woff') format('woff'),\n        url('Gilroy-Semibold.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Medium.eot');\n    src: local('Gilroy Medium'), local('Gilroy-Medium'),\n        url('Gilroy-Medium.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Medium.woff2') format('woff2'),\n        url('Gilroy-Medium.woff') format('woff'),\n        url('Gilroy-Medium.ttf') format('truetype');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-MediumItalic.eot');\n    src: local('Gilroy Medium Italic'), local('Gilroy-MediumItalic'),\n        url('Gilroy-MediumItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-MediumItalic.woff2') format('woff2'),\n        url('Gilroy-MediumItalic.woff') format('woff'),\n        url('Gilroy-MediumItalic.ttf') format('truetype');\n    font-weight: 500;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-BlackItalic.eot');\n    src: local('Gilroy Black Italic'), local('Gilroy-BlackItalic'),\n        url('Gilroy-BlackItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-BlackItalic.woff2') format('woff2'),\n        url('Gilroy-BlackItalic.woff') format('woff'),\n        url('Gilroy-BlackItalic.ttf') format('truetype');\n    font-weight: 900;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-UltraLight.eot');\n    src: local('Gilroy UltraLight'), local('Gilroy-UltraLight'),\n        url('Gilroy-UltraLight.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-UltraLight.woff2') format('woff2'),\n        url('Gilroy-UltraLight.woff') format('woff'),\n        url('Gilroy-UltraLight.ttf') format('truetype');\n    font-weight: 200;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-RegularItalic.eot');\n    src: local('Gilroy Regular Italic'), local('Gilroy-RegularItalic'),\n        url('Gilroy-RegularItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-RegularItalic.woff2') format('woff2'),\n        url('Gilroy-RegularItalic.woff') format('woff'),\n        url('Gilroy-RegularItalic.ttf') format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-SemiboldItalic.eot');\n    src: local('Gilroy Semibold Italic'), local('Gilroy-SemiboldItalic'),\n        url('Gilroy-SemiboldItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-SemiboldItalic.woff2') format('woff2'),\n        url('Gilroy-SemiboldItalic.woff') format('woff'),\n        url('Gilroy-SemiboldItalic.ttf') format('truetype');\n    font-weight: 600;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-HeavyItalic.eot');\n    src: local('Gilroy Heavy Italic'), local('Gilroy-HeavyItalic'),\n        url('Gilroy-HeavyItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-HeavyItalic.woff2') format('woff2'),\n        url('Gilroy-HeavyItalic.woff') format('woff'),\n        url('Gilroy-HeavyItalic.ttf') format('truetype');\n    font-weight: 900;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Extrabold.eot');\n    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),\n        url('Gilroy-Extrabold.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Extrabold.woff2') format('woff2'),\n        url('Gilroy-Extrabold.woff') format('woff'),\n        url('Gilroy-Extrabold.ttf') format('truetype');\n    font-weight: 800;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-BoldItalic.eot');\n    src: local('Gilroy Bold Italic'), local('Gilroy-BoldItalic'),\n        url('Gilroy-BoldItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-BoldItalic.woff2') format('woff2'),\n        url('Gilroy-BoldItalic.woff') format('woff'),\n        url('Gilroy-BoldItalic.ttf') format('truetype');\n    font-weight: bold;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-UltraLightItalic.eot');\n    src: local('Gilroy UltraLight Italic'), local('Gilroy-UltraLightItalic'),\n        url('Gilroy-UltraLightItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-UltraLightItalic.woff2') format('woff2'),\n        url('Gilroy-UltraLightItalic.woff') format('woff'),\n        url('Gilroy-UltraLightItalic.ttf') format('truetype');\n    font-weight: 200;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-LightItalic.eot');\n    src: local('Gilroy Light Italic'), local('Gilroy-LightItalic'),\n        url('Gilroy-LightItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-LightItalic.woff2') format('woff2'),\n        url('Gilroy-LightItalic.woff') format('woff'),\n        url('Gilroy-LightItalic.ttf') format('truetype');\n    font-weight: 300;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Heavy.eot');\n    src: local('Gilroy Heavy'), local('Gilroy-Heavy'),\n        url('Gilroy-Heavy.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Heavy.woff2') format('woff2'),\n        url('Gilroy-Heavy.woff') format('woff'),\n        url('Gilroy-Heavy.ttf') format('truetype');\n    font-weight: 900;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-Thin.eot');\n    src: local('Gilroy Thin'), local('Gilroy-Thin'),\n        url('Gilroy-Thin.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-Thin.woff2') format('woff2'),\n        url('Gilroy-Thin.woff') format('woff'),\n        url('Gilroy-Thin.ttf') format('truetype');\n    font-weight: 100;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Gilroy';\n    src: url('Gilroy-ThinItalic.eot');\n    src: local('Gilroy Thin Italic'), local('Gilroy-ThinItalic'),\n        url('Gilroy-ThinItalic.eot?#iefix') format('embedded-opentype'),\n        url('Gilroy-ThinItalic.woff2') format('woff2'),\n        url('Gilroy-ThinItalic.woff') format('woff'),\n        url('Gilroy-ThinItalic.ttf') format('truetype');\n    font-weight: 100;\n    font-style: italic;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;EACC,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/app/components/Button/button.html":
/*!***********************************************!*\
  !*** ./src/app/components/Button/button.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<button class=\"button\"></button>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/app/components/Footer/footer.html":
/*!***********************************************!*\
  !*** ./src/app/components/Footer/footer.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/rs-logo.svg */ "./src/app/components/assets/rs-logo.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<footer class=\"footer\">\n  <div class=\"footer__container\">\n    <div class=\"footer__logo\">\n      <img class=\"footer__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"RS School logo\">\n    </div>\n    <div class=\"footer__developer-info\">\n      <div class=\"footer__name\">Developed by <a class=\"footer__link\" href=\"https://github.com/starfayer\">starfayer</a></div>\n      <div class=\"footer__year\">2021</div>\n    </div>  \n  </div>\n</footer>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/app/components/Main/main.html":
/*!*******************************************!*\
  !*** ./src/app/components/Main/main.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/artQuiz-logo.svg */ "./src/app/components/assets/artQuiz-logo.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<main class=\"main\">\n  <div class=\"main__container\">\n    <div class=\"main__logo\">\n      <img class=\"main__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Art Quiz logo\">\n    </div>\n    <div class=\"main__button-container\">\n      <div class=\"main__button main__button--artists\"></div>\n      <div class=\"main__button main__button--pictures\"></div>\n    </div>\n  </div>\n</main>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/app/components/Settings/settings.html":
/*!***************************************************!*\
  !*** ./src/app/components/Settings/settings.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mute-icon.svg */ "./src/app/components/assets/mute-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/loud-icon.svg */ "./src/app/components/assets/loud-icon.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<div class=\"settings hidden\">\n  <div class=\"settings__container\">\n    <div class=\"settings__open-close\">\n      <button class=\"settings__open-close-btn\" id=\"settings\"></button>\n    </div>\n    <div class=\"settings__header\">\n      <div class=\"settings__header-text\">Settings</div>\n      <button class=\"settings__header-btn\"></button>\n    </div>\n    <div class=\"settings__inner\">\n      <div class=\"settings__volume\">\n        <div class=\"settings__title\">Volume</div>\n        <div class=\"settings__slider-container\">\n          <input class='settings__slider' type='range' min='0' max='100'>\n          <div class=\"settings__slider-icons\">\n            <img class=\"settings__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"mute icon\">\n            <img class=\"settings__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"loud icon\">\n          </div>\n        </div>\n      </div>\n      <div class=\"settings__check\">\n        <div class=\"settings__title\">Time game</div>\n        <div class=\"settings__check-container\">\n          <div class=\"settings__text\">On</div>\n          <div class=\"settings__checkbox\">\n            <input type=\"checkbox\" name=\"checkbox-cats1\" id=\"checkbox-1\" value=\"1\" checked>\n            <label for=\"checkbox-1\"></label>\n          </div>\n        </div>\n      </div>\n      <div class=\"settings__time\">\n        <div class=\"settings__title\">Time to answer</div>\n        <form class=\"settings__form\">\n          <button class=\"settings__button settings__button--minus\"></button>\n          <div class=\"settings__number\">0</div>\n          <button class=\"settings__button settings__button--plus\"></button>\n        </form>\n      </div>\n    </div>\n    <div class=\"settings__config\">\n      <div class=\"settings__config-wrapper\">\n        <button class=\"settings__config-button\"></button>\n        <button class=\"settings__config-button\"></button>\n      </div>  \n    </div>\n  </div>  \n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/app/components/Button/style.scss":
/*!**********************************************!*\
  !*** ./src/app/components/Button/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Button/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/Footer/style.scss":
/*!**********************************************!*\
  !*** ./src/app/components/Footer/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Footer/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/Main/style.scss":
/*!********************************************!*\
  !*** ./src/app/components/Main/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Main/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/components/Settings/style.scss":
/*!************************************************!*\
  !*** ./src/app/components/Settings/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Settings/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
/***/ ((module) => {



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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
/***/ ((module) => {



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
  } // For old IE

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
/***/ ((module) => {



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

/***/ "./src/app/components/assets/artQuiz-logo.svg":
/*!****************************************************!*\
  !*** ./src/app/components/assets/artQuiz-logo.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/5574a089eb6c1228391a.svg";

/***/ }),

/***/ "./src/app/components/assets/back-arrow.svg":
/*!**************************************************!*\
  !*** ./src/app/components/assets/back-arrow.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/0ef5e71a1569662e1a41.svg";

/***/ }),

/***/ "./src/app/components/assets/close-btn.svg":
/*!*************************************************!*\
  !*** ./src/app/components/assets/close-btn.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/a6d3c70900e0335dc5a1.svg";

/***/ }),

/***/ "./src/app/components/assets/loud-icon.svg":
/*!*************************************************!*\
  !*** ./src/app/components/assets/loud-icon.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/23f02071be213dcc07e5.svg";

/***/ }),

/***/ "./src/app/components/assets/main-background.jpg":
/*!*******************************************************!*\
  !*** ./src/app/components/assets/main-background.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6b04d03cd801cdf848a9.jpg";

/***/ }),

/***/ "./src/app/components/assets/main-background.png":
/*!*******************************************************!*\
  !*** ./src/app/components/assets/main-background.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7a5d2d3bb00657304bb0.png";

/***/ }),

/***/ "./src/app/components/assets/minus-btn.svg":
/*!*************************************************!*\
  !*** ./src/app/components/assets/minus-btn.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/e2ca8d02777c4e72ef93.svg";

/***/ }),

/***/ "./src/app/components/assets/mute-icon.svg":
/*!*************************************************!*\
  !*** ./src/app/components/assets/mute-icon.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/d2de9a25bfd8c89962dc.svg";

/***/ }),

/***/ "./src/app/components/assets/plus-btn.svg":
/*!************************************************!*\
  !*** ./src/app/components/assets/plus-btn.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/254dd896641b4e9a11cc.svg";

/***/ }),

/***/ "./src/app/components/assets/rs-logo.svg":
/*!***********************************************!*\
  !*** ./src/app/components/assets/rs-logo.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/95f49c479873174b993c.svg";

/***/ }),

/***/ "./src/app/components/assets/settings-btn.svg":
/*!****************************************************!*\
  !*** ./src/app/components/assets/settings-btn.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/6e18f3aa5645ed01b219.svg";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Black.eot":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Black.eot ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/1b2585eedd7a4d88c123.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Black.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Black.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/3d9a8c2015f9498b72ae.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Black.woff":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Black.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/a9df216db6a98486e2d4.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Black.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Black.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/ae06da6f25281591aa09.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BlackItalic.eot":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BlackItalic.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/0c22099e2e812b31e190.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BlackItalic.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BlackItalic.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/9d038b5d638246ddec64.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BlackItalic.woff":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BlackItalic.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/8be93572136655f575f2.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BlackItalic.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BlackItalic.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/aca6567d47c77faf134e.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Bold.eot":
/*!******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Bold.eot ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/aa68c169bc1dc3db278e.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Bold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/901a60fc2835c74fba67.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Bold.woff":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Bold.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/0607a1bc636f63251ed8.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Bold.woff2":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Bold.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/ef7c40ff1efeaaa4c7c6.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BoldItalic.eot":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BoldItalic.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/935ff576a0471c10fe20.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BoldItalic.ttf":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BoldItalic.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/dd526cc457cf69375bad.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BoldItalic.woff":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BoldItalic.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/76c9191d364a334e16f9.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BoldItalic.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BoldItalic.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/6d9c407895620d7ab124.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Extrabold.eot":
/*!***********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Extrabold.eot ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/35fe3e3eaadedba86260.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Extrabold.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Extrabold.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/92e435f7fae6070d73bb.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Extrabold.woff":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Extrabold.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/ed1c7da8e3e8ced5c670.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Extrabold.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Extrabold.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/5c5942d3e4d9a9645df4.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.eot":
/*!*****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ExtraboldItalic.eot ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/d4bac2be67e19951f23d.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ExtraboldItalic.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/465aa5d03dff4ec5094d.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff":
/*!******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/a15d926ad5ece9049e9d.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff2":
/*!*******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/cb765d86e74c6a0ad15a.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Heavy.eot":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Heavy.eot ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/723496c6c6d2b0b662f1.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Heavy.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Heavy.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/e275bc10f5c1d5d610fa.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Heavy.woff":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Heavy.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/a33d69253e238091b7b1.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Heavy.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Heavy.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/19b3f6fe15dc6f668d28.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-HeavyItalic.eot":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-HeavyItalic.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/086f7a74ba7719cd158f.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-HeavyItalic.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-HeavyItalic.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/44070aa29f4a11d8a59c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-HeavyItalic.woff":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-HeavyItalic.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/25ba04db5c80f50fad42.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-HeavyItalic.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-HeavyItalic.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/1260ebe381a29891642a.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Light.eot":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Light.eot ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/f498309f9a88b0a4402b.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Light.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/0ac7c2f9cb59ea1ba11c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Light.woff":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Light.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/368f09f56e89b3fe11c7.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Light.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Light.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/dedfda6d5718bf775a46.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-LightItalic.eot":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-LightItalic.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/47983c845f8baa0ba358.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-LightItalic.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-LightItalic.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/b6837de816692964aa2f.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-LightItalic.woff":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-LightItalic.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/d899841d177dfb55d0fd.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-LightItalic.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-LightItalic.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/8dde57236def6091f19a.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Medium.eot":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Medium.eot ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/2fea647f59b209f411b1.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Medium.ttf":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/1c23f810e531d0702f76.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Medium.woff":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Medium.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/5329bc502cdc219ad294.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Medium.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Medium.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/acd4e613de34a826c191.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-MediumItalic.eot":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-MediumItalic.eot ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/a8f86090f3be85e834b7.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-MediumItalic.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-MediumItalic.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/30f70edc13365c45c23c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-MediumItalic.woff":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-MediumItalic.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/e50c6ab1ea93e533c67d.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-MediumItalic.woff2":
/*!****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-MediumItalic.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/56b6f6d9042d2dab3555.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Regular.eot":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Regular.eot ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/19055ba082a9f78262f6.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/fa652e766b6a85a1f9cb.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Regular.woff":
/*!**********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Regular.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/ebe86c0337572553acea.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Regular.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Regular.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/f6c9931fabe5a6eb3307.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-RegularItalic.eot":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-RegularItalic.eot ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/3b7071f6dca0c1e083a6.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-RegularItalic.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-RegularItalic.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/5f3ed3d83ee07d26cfdf.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-RegularItalic.woff":
/*!****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-RegularItalic.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/1a8de21734b4321e4a1c.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-RegularItalic.woff2":
/*!*****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-RegularItalic.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/5c23dc8503bf569ed5ed.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Semibold.eot":
/*!**********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Semibold.eot ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/54bc2f8147659c45a055.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Semibold.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Semibold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/41fa36c3c8e966b35423.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Semibold.woff":
/*!***********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Semibold.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/5b042906a8b58ec4633e.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Semibold.woff2":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Semibold.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/a4d726cc983f5bf45e13.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-SemiboldItalic.eot":
/*!****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-SemiboldItalic.eot ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/df9d884f45eb4c4bfa40.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-SemiboldItalic.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-SemiboldItalic.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/4d55ee19689866217144.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-SemiboldItalic.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-SemiboldItalic.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/b7e83a7d9d8138dc2c60.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-SemiboldItalic.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-SemiboldItalic.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/f573f3d8a93d564aa1e6.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Thin.eot":
/*!******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Thin.eot ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/a43b77b973cff8a9425e.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Thin.ttf":
/*!******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Thin.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/59ddb327f5768f22408c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Thin.woff":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Thin.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/6eae0e193760168b4236.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Thin.woff2":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Thin.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/8d8f3d8af0a7c707ecb2.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ThinItalic.eot":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ThinItalic.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/16f98960e2f1d0901ec3.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ThinItalic.ttf":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ThinItalic.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/46249e38c038ad36487c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ThinItalic.woff":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ThinItalic.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/214652f49c667efc7f82.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ThinItalic.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ThinItalic.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/aa21bf2329fd28412640.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLight.eot":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLight.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/69d9572880f4dc7b5030.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLight.ttf":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLight.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/6c356bf421a0b34d2b76.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLight.woff":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLight.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/9169fa71e31912724922.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLight.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLight.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/378f435161b00e9b8b60.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLightItalic.eot":
/*!******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLightItalic.eot ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/a6fc8679f9d9bbc3e3a7.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLightItalic.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLightItalic.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/68a9a27f1aa1261013f3.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLightItalic.woff":
/*!*******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLightItalic.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/3c8027c9490b79159960.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLightItalic.woff2":
/*!********************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLightItalic.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/9e0449968eddd78a3a18.woff2";

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
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
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _app_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/core/module */ "./src/app/core/module.js");
/* harmony import */ var _app_components___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/ */ "./src/app/components/index.js");
/* harmony import */ var _app_pages_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/pages/routes */ "./src/app/pages/routes.js");
/* harmony import */ var _app_core_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/core/render */ "./src/app/core/render.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// eslint-disable-next-line import/no-unresolved






var AppModule = /*#__PURE__*/function (_Module) {
  _inherits(AppModule, _Module);

  var _super = _createSuper(AppModule);

  function AppModule(config) {
    _classCallCheck(this, AppModule);

    return _super.call(this, config);
  }

  return AppModule;
}(_app_core_module__WEBPACK_IMPORTED_MODULE_1__["default"]);

var appModule = new AppModule({
  components: _app_components___WEBPACK_IMPORTED_MODULE_2__["default"],
  routes: _app_pages_routes__WEBPACK_IMPORTED_MODULE_3__["default"] // pages: pages,

});
(0,_app_core_render__WEBPACK_IMPORTED_MODULE_4__["default"])(appModule);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1HLE1BQU0sR0FBR0QsZ0VBQWEsQ0FBQ0Ysb0RBQUQsQ0FBNUI7QUFFQSxpRUFBZUcsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBOztJQUVNRTs7Ozs7QUFDSixrQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBLDZCQUNaQSxNQURZO0FBRW5COzs7RUFIa0JMOztBQU1yQixJQUFNTSxNQUFNLEdBQUcsSUFBSUYsTUFBSixDQUFXO0FBQ3hCRyxFQUFBQSxhQUFhLEVBQUUsZ0JBRFM7QUFFeEJDLEVBQUFBLFFBQVEsRUFBRUwsb0RBQWFBO0FBRkMsQ0FBWCxDQUFmO0FBS0EsaUVBQWVHLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUk7Ozs7O0FBQ0osZ0JBQVlMLE1BQVosRUFBb0I7QUFBQTs7QUFBQSw2QkFDWkEsTUFEWTtBQUVuQjs7OztXQUVELG9CQUFXO0FBQ1QsYUFBTztBQUNMLGtDQUEwQixDQUFDSCwrQ0FBRCxFQUFTUyxTQUFULENBRHJCO0FBRUwsbUNBQTJCLENBQUNULCtDQUFELEVBQVNVLFVBQVQ7QUFGdEIsT0FBUDtBQUlEOzs7V0FFRCxrQkFBUztBQUNQLGFBQU87QUFDTCwrQkFBdUIsS0FBS0M7QUFEdkIsT0FBUDtBQUdEOzs7V0FFRCxvQkFBV0MsS0FBWCxFQUFrQjtBQUNoQkEsTUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLFVBQW5CLEdBQWdDLE1BQWhDO0FBQ0FILE1BQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CRSxLQUFuQixHQUEyQixNQUEzQjtBQUNBQyxNQUFBQSxVQUFVLENBQUM7QUFBQSxlQUFNTCxLQUFLLENBQUNDLE1BQU4sQ0FBYUssZUFBYixDQUE2QixPQUE3QixDQUFOO0FBQUEsT0FBRCxFQUE4QyxJQUE5QyxDQUFWO0FBQ0Q7Ozs7RUF0QmdCcEI7O0FBeUJuQixJQUFNVyxTQUFTLEdBQUcsYUFBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsZUFBbkI7QUFFQSxJQUFJUyxJQUFJLEdBQUcsSUFBSVgsSUFBSixDQUFTO0FBQ2xCSCxFQUFBQSxhQUFhLEVBQUUsY0FERztBQUVsQkMsRUFBQUEsUUFBUSxFQUFFQyxrREFBV0E7QUFGSCxDQUFULENBQVg7QUFLQSxpRUFBZVksSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7Q0FJQTs7QUFFQSxTQUFTRSxZQUFULEdBQXdCLENBRXZCLEVBRUQ7OztJQUdNQzs7Ozs7QUFDSixvQkFBWW5CLE1BQVosRUFBb0I7QUFBQTs7QUFBQSw2QkFDWkEsTUFEWTtBQUVuQjs7OztXQUVELGtCQUFTO0FBQ1AsYUFBTztBQUNMLDJDQUFtQyxLQUFLa0IsWUFEbkM7QUFFTCx1Q0FBK0IsS0FBS0EsWUFGL0I7QUFHTCx3Q0FBZ0MsS0FBS0EsWUFIaEM7QUFJTCxvQ0FBNEIsS0FBS0U7QUFKNUIsT0FBUDtBQU1EOzs7V0FFRCxxQkFBWSxDQUVYOzs7V0FFRCxzQkFBYVgsS0FBYixFQUFvQjtBQUNsQixVQUFJLENBQUVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhVyxTQUFiLENBQXVCQyxRQUF2QixDQUFnQyx1QkFBaEMsQ0FBTixFQUFpRTtBQUMvRGIsUUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFXLFNBQWIsQ0FBdUJFLEdBQXZCLENBQTJCLFVBQTNCO0FBQ0FULFFBQUFBLFVBQVUsQ0FBQztBQUFBLGlCQUFNTCxLQUFLLENBQUNDLE1BQU4sQ0FBYVcsU0FBYixDQUF1QkcsTUFBdkIsQ0FBOEIsVUFBOUIsQ0FBTjtBQUFBLFNBQUQsRUFBa0QsSUFBbEQsQ0FBVjtBQUNELE9BSmlCLENBS2xCO0FBQ0E7OztBQUNBQyxNQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDTCxTQUE1QyxDQUFzRE0sTUFBdEQsQ0FBNkQsUUFBN0Q7QUFDRDs7O1dBRUQsc0JBQWFsQixLQUFiLEVBQW9CO0FBQ2xCLFVBQUltQixLQUFLLEdBQUduQixLQUFLLENBQUNDLE1BQU4sQ0FBYWtCLEtBQXpCO0FBQ0FuQixNQUFBQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixDQUFtQmtCLGVBQW5CLHVFQUFrR0QsS0FBbEcsK0NBQTRJbkIsS0FBSyxDQUFDQyxNQUFOLENBQWFvQixHQUFiLEdBQW1CRixLQUEvSjtBQUNEOzs7O0VBL0JvQmpDOztBQWlDdkIsSUFBTW9DLFFBQVEsR0FBRyxJQUFJWixRQUFKLENBQWE7QUFDNUJqQixFQUFBQSxhQUFhLEVBQUUsa0JBRGE7QUFFNUJDLEVBQUFBLFFBQVEsRUFBRWMsc0RBQWVBO0FBRkcsQ0FBYixDQUFqQjtBQUlBLGlFQUFlYyxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQyxVQUFVLEdBQUcsQ0FDZkQsaURBRGUsRUFDTGYsNkNBREssRUFDQ2YsK0NBREQsQ0FBakI7QUFHQSxpRUFBZStCLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOztJQUVxQnJDO0FBQ25CLHFCQUFZSyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtFLGFBQUwsR0FBcUJGLE1BQU0sQ0FBQ0UsYUFBNUI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCSCxNQUFNLENBQUNHLFFBQXZCO0FBQ0EsU0FBSytCLEVBQUwsR0FBVVQsUUFBUSxDQUFDQyxhQUFULFlBQTJCLEtBQUt4QixhQUFoQyxNQUFvRCxJQUE5RDtBQUNEOzs7O1dBRUQsa0JBQVM7QUFDUCxVQUFJLENBQUMsS0FBS2lDLFFBQVYsRUFBb0I7QUFDbEIsWUFBSSxDQUFDLEtBQUtELEVBQVYsRUFDRSxNQUFNLElBQUlFLEtBQUosMEJBQTRCLEtBQUtsQyxhQUFqQyxtQkFBTjtBQUNGLGFBQUttQyxVQUFMO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtMLEVBQWpCO0FBQ0Q7O0FBQ0QsV0FBS00sYUFBTDs7QUFDQSxXQUFLQyxXQUFMO0FBQ0Q7OztXQUVELHVCQUFjO0FBQUE7O0FBQ1osVUFBSSxDQUFDLEtBQUtDLE1BQVYsRUFBa0I7QUFFbEIsVUFBSUEsTUFBTSxHQUFHLEtBQUtBLE1BQUwsRUFBYjtBQUNBQyxNQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUYsTUFBWixFQUFvQkcsT0FBcEIsQ0FBNEIsVUFBQUMsR0FBRyxFQUFJO0FBQ2pDLFlBQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsR0FBVixDQUFmO0FBQ0EsWUFBSTlDLGFBQWEsR0FBRzZDLFFBQVEsQ0FBQyxDQUFELENBQTVCO0FBQ0EsWUFBSXRDLEtBQUssR0FBR3NDLFFBQVEsQ0FBQyxDQUFELENBQXBCO0FBRUEsWUFBSUUsT0FBTyxHQUFHeEIsUUFBUSxDQUFDeUIsZ0JBQVQsQ0FBMEJoRCxhQUExQixDQUFkO0FBQ0EsWUFBSStDLE9BQU8sQ0FBQ0UsTUFBUixJQUFrQixDQUF0QixFQUNFMUIsUUFBUSxDQUFDQyxhQUFULENBQXVCeEIsYUFBdkIsRUFBc0NrRCxnQkFBdEMsQ0FBdUQzQyxLQUF2RCxFQUE4RGlDLE1BQU0sQ0FBQ0ksR0FBRCxDQUFOLENBQVlPLElBQVosQ0FBaUIsS0FBakIsQ0FBOUQsRUFERixLQUdFSixPQUFPLENBQUNKLE9BQVIsQ0FBZ0IsVUFBQVgsRUFBRTtBQUFBLGlCQUFJQSxFQUFFLENBQUNrQixnQkFBSCxDQUFvQjNDLEtBQXBCLEVBQTJCaUMsTUFBTSxDQUFDSSxHQUFELENBQU4sQ0FBWU8sSUFBWixDQUFpQixLQUFqQixDQUEzQixDQUFKO0FBQUEsU0FBbEI7QUFDSCxPQVZEO0FBV0Q7OztXQUVELHlCQUFnQjtBQUNkLFVBQUksQ0FBQyxLQUFLQyxRQUFWLEVBQW9CO0FBRXBCLFVBQUlDLFdBQVcsR0FBRyxLQUFLRCxRQUFMLEVBQWxCO0FBQ0FYLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVyxXQUFaLEVBQXlCVixPQUF6QixDQUFpQyxVQUFBVyxJQUFJLEVBQUk7QUFDdkMsWUFBSUMsUUFBUSxHQUFHRCxJQUFmO0FBQ0EsWUFBSVAsT0FBTyxHQUFHTSxXQUFXLENBQUNDLElBQUQsQ0FBWCxDQUFrQixDQUFsQixDQUFkO0FBQ0EsWUFBSUUsSUFBSSxHQUFHSCxXQUFXLENBQUNDLElBQUQsQ0FBWCxDQUFrQixDQUFsQixDQUFYO0FBRUEsWUFBSUcsVUFBVSxHQUFHMUIsb0VBQWlCLENBQUNnQixPQUFPLENBQUNXLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBRCxFQUEwQkYsSUFBMUIsQ0FBbEM7QUFDQUMsUUFBQUEsVUFBVSxDQUFDRSxFQUFYLEdBQWdCSixRQUFRLENBQUNULEtBQVQsQ0FBZSxJQUFmLEVBQXFCYyxLQUFyQixDQUEyQixDQUFDLENBQTVCLENBQWhCO0FBQ0FyQyxRQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIrQixRQUF2QixFQUFpQ00sV0FBakMsQ0FBNkNKLFVBQTdDO0FBQ0QsT0FSRDtBQVNEOzs7V0FFRCxzQkFBYTtBQUNYbEMsTUFBQUEsUUFBUSxDQUFDQyxhQUFULFlBQTJCLEtBQUt4QixhQUFoQyxHQUFpRDhELFNBQWpELEdBQTZELEVBQTdEO0FBQ0F2QyxNQUFBQSxRQUFRLENBQUNDLGFBQVQsWUFBMkIsS0FBS3hCLGFBQWhDLEdBQWlENkQsV0FBakQsQ0FBNkRuRSxnRUFBYSxDQUFDLEtBQUtPLFFBQU4sQ0FBMUU7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hESDtBQUNBOztJQUVxQitEO0FBQ25CLGtCQUFZbEUsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLZ0MsVUFBTCxHQUFrQmhDLE1BQU0sQ0FBQ2dDLFVBQXpCO0FBQ0EsU0FBS21DLEtBQUwsR0FBYW5FLE1BQU0sQ0FBQ21FLEtBQXBCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjcEUsTUFBTSxDQUFDb0UsTUFBckI7QUFDRDs7OztXQUVELHFCQUFZO0FBQ1Y5QixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLUCxVQUFqQjtBQUNBLFdBQUtxQyxPQUFMO0FBQ0Q7OztXQUVELG1CQUFVO0FBQ1IsV0FBS3JDLFVBQUwsQ0FBZ0JhLE9BQWhCLENBQXdCLFVBQUF5QixDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxNQUFGLEVBQUo7QUFBQSxPQUF6QixFQURRLENBRVI7QUFDRDs7O1dBRUQsd0JBQWU7QUFDYkMsTUFBQUEsTUFBTSxDQUFDcEIsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsS0FBS3FCLFdBQUwsQ0FBaUJwQixJQUFqQixDQUFzQixJQUF0QixDQUF0QztBQUNBLFdBQUtvQixXQUFMO0FBQ0Q7OztXQUVELHVCQUFjO0FBQ1osVUFBSUMsR0FBRyxHQUFHVCx5REFBYSxFQUF2QjtBQUNBLFVBQUlVLEtBQUssR0FBRyxLQUFLUCxNQUFMLENBQVlRLElBQVosQ0FBaUIsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0MsSUFBTCxDQUFVaEIsS0FBVixDQUFnQixDQUFoQixNQUF1QlksR0FBM0I7QUFBQSxPQUFyQixDQUFaO0FBQ0EsVUFBSUMsS0FBSixFQUFXQSxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JSLE1BQWhCO0FBQ1hqQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW9DLEtBQVo7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkgsNkJBQWUsb0NBQVNLLE1BQVQsRUFBaUI7QUFDOUJBLEVBQUFBLE1BQU0sQ0FBQ0MsU0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQ0E7QUFDQTtBQUVPLElBQU1DLFFBQVEsR0FBRyxDQUFDbEQsZ0VBQUQsRUFBc0JBLDREQUF0QixFQUF1Q0EsOERBQXZDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7QUNKUDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUEsSUFBSW9DLE1BQU0sR0FBRyxDQUNYO0FBQUNVLEVBQUFBLElBQUksRUFBRSxHQUFQO0FBQVlDLEVBQUFBLFNBQVMsRUFBRUcsNENBQVFBO0FBQS9CLENBRFcsQ0FBYjtBQUdBLGlFQUFlZCxNQUFmOzs7Ozs7Ozs7Ozs7OztBQ0xBLDZCQUFlLG9DQUFTbkIsT0FBVCxFQUFrQlMsSUFBbEIsRUFBd0I7QUFDckNULEVBQUFBLE9BQU8sQ0FBQ2tDLFdBQVIsR0FBc0J6QixJQUF0QjtBQUNBLFNBQU9ULE9BQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUNIYyxTQUFTZ0IsYUFBVCxHQUF5QjtBQUN0QyxTQUFPbUIsUUFBUSxDQUFDUCxJQUFULENBQWNmLEtBQWQsQ0FBb0IsQ0FBcEIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ0ZELDZCQUFlLG9DQUFVdUIsV0FBVixFQUF1QjtBQUNwQyxNQUFNbEYsUUFBUSxHQUFHc0IsUUFBUSxDQUFDNkQsYUFBVCxDQUF1QixVQUF2QixDQUFqQjtBQUNBbkYsRUFBQUEsUUFBUSxDQUFDNkQsU0FBVCxHQUFxQnFCLFdBQXJCO0FBQ0EsU0FBT2xGLFFBQVEsQ0FBQ29GLE9BQVQsQ0FBaUJDLFVBQXhCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxtREFBbUQsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixpQkFBaUIsZUFBZSxvQkFBb0IsaUJBQWlCLGtDQUFrQywrQkFBK0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsOENBQThDLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLGNBQWMsMkJBQTJCLGdCQUFnQixHQUFHLE9BQU8sd0dBQXdHLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsZ0RBQWdELGVBQWUsb0JBQW9CLGlCQUFpQixrQ0FBa0MsK0JBQStCLEdBQUcsaUNBQWlDLGlCQUFpQixzQkFBc0IsS0FBSyxrQkFBa0IsMkJBQTJCLG1DQUFtQyxHQUFHLG9DQUFvQyxrQkFBa0IsbUJBQW1CLEdBQUcsOEJBQThCLDhCQUE4QiwyQkFBMkIsMkJBQTJCLDRDQUE0QyxXQUFXLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLDJCQUEyQiwyQkFBMkIsd0JBQXdCLGdCQUFnQiw2Q0FBNkMsYUFBYSxnQ0FBZ0MsS0FBSyxHQUFHLGNBQWMsMkJBQTJCLGdCQUFnQixHQUFHLG1CQUFtQjtBQUNweEQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsOERBQThELGVBQWUsbUJBQW1CLGtCQUFrQixtQ0FBbUMsR0FBRywyQkFBMkIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsZUFBZSxHQUFHLGlCQUFpQixlQUFlLEdBQUcsaUJBQWlCLGdCQUFnQixxQkFBcUIsMEJBQTBCLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLE9BQU8sd0dBQXdHLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLCtDQUErQyxlQUFlLG9CQUFvQixpQkFBaUIsa0NBQWtDLCtCQUErQixHQUFHLGlDQUFpQyxpQkFBaUIsc0JBQXNCLEtBQUssa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixHQUFHLDhCQUE4Qiw4QkFBOEIsMkJBQTJCLDJCQUEyQiw0Q0FBNEMsV0FBVyxrQkFBa0IsaUJBQWlCLHFCQUFxQixvQkFBb0IscUNBQXFDLEtBQUssdUJBQXVCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLGlCQUFpQixLQUFLLGFBQWEsaUJBQWlCLEtBQUssYUFBYSxrQkFBa0IsdUJBQXVCLDRCQUE0QixLQUFLLG1CQUFtQiwyQkFBMkIsS0FBSyxHQUFHLG1CQUFtQjtBQUNqdEQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ21IO0FBQ2pCO0FBQ087QUFDekcsNENBQTRDLHFKQUFnRDtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxpREFBaUQsc0VBQXNFLDJCQUEyQixpQkFBaUIsR0FBRyxvQkFBb0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGVBQWUsbUJBQW1CLEdBQUcsZUFBZSxlQUFlLG1CQUFtQix1QkFBdUIsR0FBRyxjQUFjLGdCQUFnQixHQUFHLDJCQUEyQixrQkFBa0IsbUNBQW1DLGVBQWUsbUJBQW1CLEdBQUcsaUJBQWlCLGlCQUFpQixlQUFlLEdBQUcsT0FBTyxzR0FBc0csV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLGdEQUFnRCxlQUFlLG9CQUFvQixpQkFBaUIsa0NBQWtDLCtCQUErQixHQUFHLGlDQUFpQyxpQkFBaUIsc0JBQXNCLEtBQUssa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixHQUFHLDhCQUE4Qiw4QkFBOEIsMkJBQTJCLDJCQUEyQiw0Q0FBNEMsU0FBUyx5REFBeUQsMkJBQTJCLGlCQUFpQixrQkFBa0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLGlCQUFpQixxQkFBcUIsS0FBSyxhQUFhLGlCQUFpQixxQkFBcUIseUJBQXlCLEtBQUssWUFBWSxrQkFBa0IsS0FBSywyQkFBMkIsb0JBQW9CLHFDQUFxQyxpQkFBaUIscUJBQXFCLEtBQUssZUFBZSxtQkFBbUIsaUJBQWlCLEtBQUssR0FBRyxtQkFBbUI7QUFDM2pFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QztBQUNtSDtBQUNqQjtBQUNPO0FBQ3pHLDRDQUE0QywrSUFBNkM7QUFDekYsNENBQTRDLDJJQUEyQztBQUN2Riw0Q0FBNEMseUlBQTBDO0FBQ3RGLDRDQUE0Qyx5SUFBMEM7QUFDdEYsNENBQTRDLHVJQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHFEQUFxRCxpQkFBaUIsR0FBRyx3QkFBd0Isb0JBQW9CLGVBQWUsbUJBQW1CLEdBQUcsNkJBQTZCLHVCQUF1QixZQUFZLGNBQWMsZ0JBQWdCLGlCQUFpQixlQUFlLG9CQUFvQixpQkFBaUIsa0NBQWtDLCtCQUErQixzRUFBc0UsR0FBRyxxQkFBcUIsa0JBQWtCLG1DQUFtQyxvQkFBb0Isd0JBQXdCLGdCQUFnQiwrQkFBK0IsR0FBRywwQkFBMEIsdUJBQXVCLG9CQUFvQixvQkFBb0IsR0FBRyxrQ0FBa0Msa0JBQWtCLHVCQUF1QixjQUFjLGVBQWUsc0VBQXNFLDJCQUEyQixnQkFBZ0IsaUJBQWlCLEdBQUcseUJBQXlCLGdCQUFnQixpQkFBaUIsZUFBZSxvQkFBb0IsaUJBQWlCLGtDQUFrQywrQkFBK0Isc0VBQXNFLEdBQUcsb0JBQW9CLGdCQUFnQixvQkFBb0IscUJBQXFCLEdBQUcscUJBQXFCLG1CQUFtQix3QkFBd0IsZUFBZSxnQkFBZ0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxxQkFBcUIsOEZBQThGLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGtCQUFrQixzQkFBc0IsNkJBQTZCLEdBQUcsMkNBQTJDLDZCQUE2QixxQkFBcUIsZ0JBQWdCLGlCQUFpQixxQkFBcUIsdUJBQXVCLG9CQUFvQixHQUFHLDJCQUEyQixrQkFBa0IsbUNBQW1DLEdBQUcsb0JBQW9CLGdCQUFnQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxlQUFlLHdCQUF3QixHQUFHLG1CQUFtQixvQkFBb0IscUJBQXFCLEdBQUcsNkJBQTZCLGtCQUFrQixHQUFHLDZCQUE2QixvQkFBb0IsdUJBQXVCLG9CQUFvQixvQkFBb0IsR0FBRyw0Q0FBNEMsdUJBQXVCLGtDQUFrQyxHQUFHLG1IQUFtSCxrQkFBa0IsdUJBQXVCLGVBQWUsMkJBQTJCLEdBQUcsMkRBQTJELGdCQUFnQixpQkFBaUIsc0JBQXNCLHdCQUF3Qix3QkFBd0IsR0FBRywwREFBMEQsZ0JBQWdCLGlCQUFpQixlQUFlLGlCQUFpQixxQkFBcUIsdUJBQXVCLG1DQUFtQyxHQUFHLGtFQUFrRSxlQUFlLGlCQUFpQixxQkFBcUIsR0FBRyxtQkFBbUIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLGVBQWUsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxlQUFlLEdBQUcscUJBQXFCLG1CQUFtQixvQkFBb0IscUJBQXFCLEdBQUcscUJBQXFCLGVBQWUsb0JBQW9CLGlCQUFpQixrQ0FBa0MsK0JBQStCLGVBQWUsb0JBQW9CLGlCQUFpQixHQUFHLDRCQUE0QixzRUFBc0UsR0FBRywyQkFBMkIsc0VBQXNFLEdBQUcscUJBQXFCLG1CQUFtQixrQkFBa0IsOEJBQThCLGVBQWUsR0FBRyw2QkFBNkIsdUJBQXVCLGtCQUFrQixtQ0FBbUMsZUFBZSxHQUFHLDRCQUE0QixlQUFlLEdBQUcsZUFBZSw2Q0FBNkMsd0NBQXdDLGlDQUFpQyxrQ0FBa0MsR0FBRywyQkFBMkIsUUFBUSxzQ0FBc0MsS0FBSyxVQUFVLHdDQUF3QyxLQUFLLEdBQUcsV0FBVyxtQ0FBbUMsb0JBQW9CLEdBQUcsT0FBTywwR0FBMEcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFlBQVksZUFBZSxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsYUFBYSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFL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QUErQixrQ0FBa0MsaUJBQWlCO0FBQzVILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEw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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQzs7Ozs7QUFDSixxQkFBWXpGLE1BQVosRUFBb0I7QUFBQTs7QUFBQSw2QkFDWkEsTUFEWTtBQUVuQjs7O0VBSHFCa0U7O0FBTXhCLElBQU13QixTQUFTLEdBQUcsSUFBSUQsU0FBSixDQUFjO0FBQzlCekQsRUFBQUEsVUFBVSxFQUFWQSx3REFEOEI7QUFFOUJvQyxFQUFBQSxNQUFNLEVBQU5BLHlEQUY4QixDQUc5Qjs7QUFIOEIsQ0FBZCxDQUFsQjtBQU1BRyw0REFBTSxDQUFDbUIsU0FBRCxDQUFOLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL01haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29yZS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9wYWdlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvdXRpbHMvY2hhbmdlRWxlbWVudFRleHQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvdXRpbHMvZ2V0VXJsLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL2h0bWxUb0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvQnV0dG9uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi9zdHlsZS5zY3NzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvZm9udHMvZ2lscm95L2dpbHJveS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uaHRtbCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi9tYWluLmh0bWwiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3MuaHRtbCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL0J1dHRvbi9zdHlsZS5zY3NzP2JjMDMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLnNjc3M/YzU2NSIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluL3N0eWxlLnNjc3M/YjljOSIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9zdHlsZS5zY3NzP2Q1ZmUiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YzU5ZCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBCdXR0b25FbGVtZW50IGZyb20gJy4vYnV0dG9uLmh0bWwnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAL2FwcC9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tICdAL3V0aWxzL2h0bWxUb0VsZW1lbnQnO1xuXG4vLyBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbi8vICAgICBzdXBlcihjb25maWcpXG4vLyAgIH1cblxuLy8gICBldmVudHMoKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICcuYnV0dG9uIGNsaWNrJzogdGhpcy5kZWxheUNsaWNrXG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgZGVsYXlDbGljayhldmVudCkge1xuLy8gICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xuLy8gICAgIGV2ZW50LnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMDAwJztcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IGV2ZW50LnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyksIDEwMDApXG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvbih7XG4vLyAgIHNjYWxhYmxlOiB0cnVlLFxuLy8gICB0ZW1wbGF0ZTogQnV0dG9uRWxlbWVudFxuLy8gfSlcblxuY29uc3QgYnV0dG9uID0gaHRtbFRvRWxlbWVudChCdXR0b25FbGVtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IEZvb3RlckVsZW1lbnQgZnJvbSAnLi9mb290ZXIuaHRtbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0AvYXBwL2NvcmUvY29tcG9uZW50JztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKVxuICB9XG59XG5cbmNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIoe1xuICBjbGFzc1NlbGVjdG9yOiAnZm9vdGVyLXdyYXBwZXInLFxuICB0ZW1wbGF0ZTogRm9vdGVyRWxlbWVudFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBNYWluRWxlbWVudCBmcm9tICcuL21haW4uaHRtbCc7XG5pbXBvcnQgYnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0AvYXBwL2NvcmUvY29tcG9uZW50JztcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZylcbiAgfVxuXG4gIGV4dGVybmFsKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnLm1haW5fX2J1dHRvbi0tYXJ0aXN0cyc6IFtidXR0b24sIGFydGlzdEJ0bl0sXG4gICAgICAnLm1haW5fX2J1dHRvbi0tcGljdHVyZXMnOiBbYnV0dG9uLCBwaWN0dXJlQnRuXSxcbiAgICB9XG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcubWFpbl9fYnV0dG9uIGNsaWNrJzogdGhpcy5kZWxheUNsaWNrXG4gICAgfVxuICB9XG5cbiAgZGVsYXlDbGljayhldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMDAwJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IGV2ZW50LnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyksIDEwMDApXG4gIH1cbn1cblxuY29uc3QgYXJ0aXN0QnRuID0gJ0FydGlzdCBRdWl6JztcbmNvbnN0IHBpY3R1cmVCdG4gPSAnUGljdHVyZXMgUXVpeic7XG5cbmxldCBtYWluID0gbmV3IE1haW4oe1xuICBjbGFzc1NlbGVjdG9yOiAnbWFpbi13cmFwcGVyJyxcbiAgdGVtcGxhdGU6IE1haW5FbGVtZW50LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWFpbjsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0AvYXBwL2NvcmUvY29tcG9uZW50JztcbmltcG9ydCBTZXR0aW5nc0VsZW1lbnQgZnJvbSAnLi9zZXR0aW5ncy5odG1sJztcblxuXG4vLyBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5nc19fbGluaycpO1xuXG5mdW5jdGlvbiBvcGVuU2V0dGluZ3MoKSB7XG5cbn1cblxuLy8gc2V0dGluZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuU2V0dGluZ3MpO1xuXG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnLnNldHRpbmdzX19vcGVuLWNsb3NlLWJ0biBjbGljayc6IHRoaXMub3BlblNldHRpbmdzLFxuICAgICAgJy5zZXR0aW5nc19faGVhZGVyLWJ0biBjbGljayc6IHRoaXMub3BlblNldHRpbmdzLFxuICAgICAgJy5zZXR0aW5nc19faGVhZGVyLXRleHQgY2xpY2snOiB0aGlzLm9wZW5TZXR0aW5ncyxcbiAgICAgICcuc2V0dGluZ3NfX3NsaWRlciBjaGFuZ2UnOiB0aGlzLmNoYW5nZVZvbHVtZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9ucygpIHtcblxuICB9XG5cbiAgb3BlblNldHRpbmdzKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2V0dGluZ3NfX2hlYWRlci10ZXh0JykpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkJyksIDIwMDApO1xuICAgIH1cbiAgICAvLyBIYXZlIGFjY2VzcyB0byB0aGlzLmVsIGJlY2F1c2Ugb2YgaW5oZXJpdGFuY2VcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3Mtd3JhcHBlcicpLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDFzIGVhc2UtaW4tb3V0JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3Mtd3JhcHBlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9XG5cbiAgY2hhbmdlVm9sdW1lKGV2ZW50KSB7IFxuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGQkNBMiAwJSwgI0ZGQkNBMiAwJSwgI0ZGQkNBMiAke3ZhbHVlfSUsICNBNEE0QTQgMCUsICNBNEE0QTQgMCUsI0E0QTRBNCAke2V2ZW50LnRhcmdldC5tYXggLSB2YWx1ZX0lKWA7XG4gIH1cbn1cbmNvbnN0IHNldHRpbmdzID0gbmV3IFNldHRpbmdzKHtcbiAgY2xhc3NTZWxlY3RvcjogJ3NldHRpbmdzLXdyYXBwZXInLFxuICB0ZW1wbGF0ZTogU2V0dGluZ3NFbGVtZW50XG59KVxuZXhwb3J0IGRlZmF1bHQgc2V0dGluZ3M7XG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcbmltcG9ydCBtYWluIGZyb20gXCIuL01haW5cIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cblxubGV0IGNvbXBvbmVudHMgPSBbXG4gIHNldHRpbmdzLCBtYWluLCBmb290ZXJcbl1cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudHM7IiwiaW1wb3J0IGNoYW5nZUVsZW1lbnRUZXh0IGZyb20gXCJAL3V0aWxzL2NoYW5nZUVsZW1lbnRUZXh0XCI7XG5pbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiQC91dGlscy9odG1sVG9FbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY2xhc3NTZWxlY3RvciA9IGNvbmZpZy5jbGFzc1NlbGVjdG9yO1xuICAgIHRoaXMudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3NTZWxlY3Rvcn1gKSB8fCBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zY2FsYWJsZSkge1xuICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCB3aXRoICR7dGhpcy5jbGFzc1NlbGVjdG9yfSB3YXNuJ3QgZm91bmRgKTtcbiAgICAgIHRoaXMucmV3cml0ZVRhZygpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5lbCk7XG4gICAgfVxuICAgIHRoaXMuX2luaXRFeHRlcm5hbCgpO1xuICAgIHRoaXMuX2luaXRFdmVudHMoKTtcbiAgfVxuXG4gIF9pbml0RXZlbnRzKCkge1xuICAgIGlmICghdGhpcy5ldmVudHMpIHJldHVybjtcblxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cygpO1xuICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IGxpc3RlbmVyID0ga2V5LnNwbGl0KCcgJyk7XG4gICAgICBsZXQgY2xhc3NTZWxlY3RvciA9IGxpc3RlbmVyWzBdO1xuICAgICAgbGV0IGV2ZW50ID0gbGlzdGVuZXJbMV07XG4gICAgICBcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc1NlbGVjdG9yKTtcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA9PSAxKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzU2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50c1trZXldLmJpbmQodGhpcykpO1xuICAgICAgZWxzZVxuICAgICAgICBlbGVtZW50LmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRzW2tleV0uYmluZCh0aGlzKSkpO1xuICAgIH0pXG4gIH1cblxuICBfaW5pdEV4dGVybmFsKCkge1xuICAgIGlmICghdGhpcy5leHRlcm5hbCkgcmV0dXJuO1xuXG4gICAgbGV0IGV4dGVybmFsT2JqID0gdGhpcy5leHRlcm5hbCgpO1xuICAgIE9iamVjdC5rZXlzKGV4dGVybmFsT2JqKS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gZGF0YTtcbiAgICAgIGxldCBlbGVtZW50ID0gZXh0ZXJuYWxPYmpbZGF0YV1bMF07XG4gICAgICBsZXQgdGV4dCA9IGV4dGVybmFsT2JqW2RhdGFdWzFdO1xuXG4gICAgICBsZXQgbmV3RWxlbWVudCA9IGNoYW5nZUVsZW1lbnRUZXh0KGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpLCB0ZXh0KTtcbiAgICAgIG5ld0VsZW1lbnQuaWQgPSBzZWxlY3Rvci5zcGxpdCgnLS0nKS5zbGljZSgtMSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICB9KVxuICB9XG5cbiAgcmV3cml0ZVRhZygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNsYXNzU2VsZWN0b3J9YCkuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc1NlbGVjdG9yfWApLmFwcGVuZENoaWxkKGh0bWxUb0VsZW1lbnQodGhpcy50ZW1wbGF0ZSkpO1xuICB9XG59IiwiaW1wb3J0IGdldEN1cnJlbnRVcmwgZnJvbSBcIkAvdXRpbHMvZ2V0VXJsXCI7XG5pbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiQC91dGlscy9odG1sVG9FbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbmZpZy5jb21wb25lbnRzO1xuICAgIHRoaXMucGFnZXMgPSBjb25maWcucGFnZXM7XG4gICAgdGhpcy5yb3V0ZXMgPSBjb25maWcucm91dGVzO1xuICB9XG5cbiAgcmVuZGVyQXBwKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29tcG9uZW50cyk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBjb25uZWN0KCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW5kZXIoKSlcbiAgICAvLyBpZiAodGhpcy5yb3V0ZXMpIHRoaXMucmVuZGVyUm91dGVzKCk7XG4gIH1cblxuICByZW5kZXJSb3V0ZXMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmNoYW5nZVJvdXRlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY2hhbmdlUm91dGUoKTtcbiAgfVxuXG4gIGNoYW5nZVJvdXRlKCkge1xuICAgIGxldCB1cmwgPSBnZXRDdXJyZW50VXJsKCk7XG4gICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXMuZmluZChoYXNoID0+IGhhc2gucGF0aC5zbGljZSgxKSA9PT0gdXJsKTtcbiAgICBpZiAocm91dGUpIHJvdXRlLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1vZHVsZSkge1xuICBtb2R1bGUucmVuZGVyQXBwKCk7XG59IiwiaW1wb3J0IGZvb3RlciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9TZXR0aW5nc1wiO1xuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IGhvbWVQYWdlID0gW2NvbXBvbmVudHMuc2V0dGluZ3MsIGNvbXBvbmVudHMubWFpbiwgY29tcG9uZW50cy5mb290ZXJdIiwiaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCB7IGhvbWVQYWdlIH0iLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gJy4vaW5kZXgnXG5cbmxldCByb3V0ZXMgPSBbXG4gIHtwYXRoOiAnIycsIGNvbXBvbmVudDogaG9tZVBhZ2V9XG5dXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbWVudCwgdGV4dCkge1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q3VycmVudFVybCgpIHtcbiAgcmV0dXJuIGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGh0bWxFbGVtZW50KSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbEVsZW1lbnQ7XG4gIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiAwLjJzO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNGRkJDQTI7XFxufVxcblxcbi5jbGlja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL0J1dHRvbi9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTRCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQWpDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBK0JBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUF2QkY7QUF3QkU7RUFDRSxtQkFoQlc7QUFOZjs7QUEwQkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUF2QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGJ1dHRvbi1sYXlvdXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbkBtaXhpbiBmbGV4LWNvbHVtbigkaGVpZ2h0KSB7XFxuICBAaWYgJGhlaWdodCB7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG4gIH1cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyLXBvc2l0aW9uKCR3aWR0aCkge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4kY2F0ZWdvcmllcy1mb250LXNpemU6IDIwcHg7XFxuJG5hdmlnYXRpb24tZm9udC1zaXplOiAyMnB4O1xcbiRtZWRpdW0tZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4kb3JhbmdlLWNvbG9yOiAjRkZCQ0EyO1xcblxcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IGFsbCAxcyBlYXNlLWluLW91dDtcXG4uYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIEBpbmNsdWRlIGJ1dHRvbi1sYXlvdXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLWluIC4ycztcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlLWNvbG9yO1xcbiAgfVxcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXJfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogOTIlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyX19kZXZlbG9wZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNSU7XFxufVxcbi5mb290ZXJfX25hbWUge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLmZvb3Rlcl9fbGluayB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5mb290ZXJfX2xpbms6aG92ZXIge1xcbiAgY29sb3I6ICNGRkJDQTI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE2QkU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQTVCSjtBQThCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQTVCSjtBQThCRTtFQUNFLFVBQUE7QUE1Qko7QUE4QkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQTVCSjtBQThCRTtFQUNFLGNBekJXO0FBSGZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGJ1dHRvbi1sYXlvdXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbkBtaXhpbiBmbGV4LWNvbHVtbigkaGVpZ2h0KSB7XFxuICBAaWYgJGhlaWdodCB7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG4gIH1cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyLXBvc2l0aW9uKCR3aWR0aCkge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4kY2F0ZWdvcmllcy1mb250LXNpemU6IDIwcHg7XFxuJG5hdmlnYXRpb24tZm9udC1zaXplOiAyMnB4O1xcbiRtZWRpdW0tZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4kb3JhbmdlLWNvbG9yOiAjRkZCQ0EyO1xcblxcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IGFsbCAxcyBlYXNlLWluLW91dDtcXG4uZm9vdGVyIHtcXG4gICZfX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MiU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAmX19kZXZlbG9wZXItaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gIH1cXG4gICZfX25hbWUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgJl9fbGluayB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxuICAmX19saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6ICRvcmFuZ2UtY29sb3I7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21haW4tYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm1haW5fX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ubWFpbl9fbG9nbyB7XFxuICB3aWR0aDogNDUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMCU7XFxufVxcbi5tYWluX19pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tYWluX19idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNjIlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5tYWluX19idXR0b24ge1xcbiAgaGVpZ2h0OiA2MnB4O1xcbiAgd2lkdGg6IDQ4JTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE0QkE7RUFDRSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQTNCRjtBQTRCRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBMUJKO0FBNEJFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTFCSjtBQTRCRTtFQUNFLFdBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQTNCSjtBQTZCRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBM0JKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBidXR0b24tbGF5b3V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jb2x1bW4oJGhlaWdodCkge1xcbiAgQGlmICRoZWlnaHQge1xcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB9XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1peGluIGNlbnRlci1wb3NpdGlvbigkd2lkdGgpIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuJGNhdGVnb3JpZXMtZm9udC1zaXplOiAyMHB4O1xcbiRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTogMjJweDtcXG4kbWVkaXVtLWZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuJG9yYW5nZS1jb2xvcjogI0ZGQkNBMjtcXG5cXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9tYWluLWJhY2tncm91bmQuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAmX19jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG4gICZfX2xvZ28ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbiAgfVxcbiAgJl9faW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmX19idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogNjIlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG4gICZfX2J1dHRvbiB7XFxuICAgIGhlaWdodDogNjJweDtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc2V0dGluZ3MtYnRuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrLWFycm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9jbG9zZS1idG4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21pbnVzLWJ0bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcGx1cy1idG4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zZXR0aW5ncyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5zZXR0aW5nc19fY29udGFpbmVyIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHdpZHRoOiA5MiU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnNldHRpbmdzX19vcGVuLWNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQlO1xcbiAgbGVmdDogLTUlO1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbi5zZXR0aW5nc19faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMiU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuLnNldHRpbmdzX19oZWFkZXItdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcbi5zZXR0aW5nc19faGVhZGVyLXRleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTE1JTtcXG4gIGxlZnQ6IC00NSU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG4uc2V0dGluZ3NfX2hlYWRlci1idG4ge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcbi5zZXR0aW5nc19faW5uZXIge1xcbiAgaGVpZ2h0OiA1NSU7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uc2V0dGluZ3NfX3ZvbHVtZSB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxuICB3aWR0aDogMjMlO1xcbiAgaGVpZ2h0OiAyMyU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNldHRpbmdzX19zbGlkZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZCQ0EyIDAlLCAjRkZCQ0EyIDUwJSwgI0E0QTRBNCA1MCUsICNBNEE0QTQgMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiAzNTZweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLnNldHRpbmdzX19zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZXR0aW5nc19fc2xpZGVyLWljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZXR0aW5nc19fY2hlY2sge1xcbiAgaGVpZ2h0OiAxNiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAyMyU7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbn1cXG4uc2V0dGluZ3NfX3RleHQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2V0dGluZ3NfX2NoZWNrYm94IGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZSwgLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5zZXR0aW5nc19fY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICNGRkJDQTI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG4uc2V0dGluZ3NfX2NoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YWZ0ZXIge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB0b3A6IC0yMHB4O1xcbiAgcmlnaHQ6IC04M3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgdG9wOiAtMjBweDtcXG4gIHJpZ2h0OiAtNjBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5zZXR0aW5nc19fdGltZSB7XFxuICBoZWlnaHQ6IDE4JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDE2JTtcXG59XFxuLnNldHRpbmdzX19mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNDUlO1xcbn1cXG4uc2V0dGluZ3NfX251bWJlciB7XFxuICBtYXJnaW4tdG9wOiA0JTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5zZXR0aW5nc19fYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1heC13aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuLnNldHRpbmdzX19idXR0b24tLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcbi5zZXR0aW5nc19fYnV0dG9uLS1wbHVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcbi5zZXR0aW5nc19fY29uZmlnIHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDYlO1xcbn1cXG4uc2V0dGluZ3NfX2NvbmZpZy13cmFwcGVyIHtcXG4gIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNDAlO1xcbn1cXG4uc2V0dGluZ3NfX2NvbmZpZy1idXR0b24ge1xcbiAgd2lkdGg6IDQ5JTtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gIGFuaW1hdGlvbjogYmFycmVsUm9sbCAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBiYXJyZWxSb2xsIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5oaWRkZW4ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE0QkE7RUFDRSxZQUFBO0FBM0JGO0FBNkJFO0VBQ0UsZUFBQTtFQWRGLFVBZTJCO0VBZDNCLGNBQUE7QUFaRjtBQTRCRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQXZDRixVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBcUNFLHlEQUFBO0FBdEJKO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBdEJKO0FBd0JFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFqQ21CO0FBV3ZCO0FBd0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF0Qko7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQXJFRixVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBbUVFLHlEQUFBO0FBbkJKO0FBc0JFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCSjtBQXNCRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUF6RUEsV0EwRXFCO0VBeEV2QixhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQXFERjtBQW1CRTtFQUNFLHlGQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBakJKO0FBbUJFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFqQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFqQko7QUFvQkU7RUFuR0UsV0FvR3FCO0VBbEd2QixhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQWlHRSxVQUFBO0VBQ0EsbUJBQUE7QUFmSjtBQWlCRTtFQUNFLGVBN0ZtQjtFQThGbkIsZ0JBN0ZpQjtBQThFckI7QUFpQkU7RUFDRSxhQUFBO0FBZko7QUFpQkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWZKO0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQWZKO0FBaUJFO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBaEJGO0FBa0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFoQko7QUFrQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBaEJKO0FBa0JFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWhCSjtBQW1CRTtFQXRKRSxXQXVKcUI7RUFySnZCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBb0pFLFVBQUE7QUFkSjtBQWdCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFkSjtBQWdCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBckppQjtBQXVJckI7QUFnQkU7RUE3S0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQTJLRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFWSjtBQVlFO0VBQ0UseURBQUE7QUFWSjtBQVlFO0VBQ0UseURBQUE7QUFWSjtBQWFFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFYSjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBWEo7QUFhRTtFQUNFLFVBQUE7QUFYSjs7QUFlQTtFQUNFLHdDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBWkY7O0FBZUE7RUFDRTtJQUFLLCtCQUFBO0VBWEw7RUFZQTtJQUFPLGlDQUFBO0VBVFA7QUFDRjtBQVdBO0VBRUUsOEJBL0xtQjtFQWdNbkIsZUFBQTtBQVZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBidXR0b24tbGF5b3V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jb2x1bW4oJGhlaWdodCkge1xcbiAgQGlmICRoZWlnaHQge1xcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB9XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1peGluIGNlbnRlci1wb3NpdGlvbigkd2lkdGgpIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuJGNhdGVnb3JpZXMtZm9udC1zaXplOiAyMHB4O1xcbiRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTogMjJweDtcXG4kbWVkaXVtLWZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuJG9yYW5nZS1jb2xvcjogI0ZGQkNBMjtcXG5cXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuLnNldHRpbmdzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC8vIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gICZfX2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgQGluY2x1ZGUgY2VudGVyLXBvc2l0aW9uKDkyJSk7XFxuICB9XFxuICAmX19vcGVuLWNsb3NlLWJ0bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQlO1xcbiAgICBsZWZ0OiAtNSU7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIEBpbmNsdWRlIGJ1dHRvbi1sYXlvdXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2V0dGluZ3MtYnRuLnN2Zyk7XFxuICB9XFxuICAmX19oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICB9XFxuICAmX19oZWFkZXItdGV4dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6ICRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTtcXG4gIH1cXG4gICZfX2hlYWRlci10ZXh0OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xNSU7XFxuICAgIGxlZnQ6IC00NSU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYmFjay1hcnJvdy5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMzRweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgfVxcblxcbiAgJl9faGVhZGVyLWJ0biB7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIEBpbmNsdWRlIGJ1dHRvbi1sYXlvdXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvY2xvc2UtYnRuLnN2Zyk7XFxuICB9XFxuXFxuICAmX19pbm5lciB7XFxuICAgIGhlaWdodDogNTUlO1xcbiAgICBmb250LXNpemU6IDM0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7O1xcbiAgfVxcbiAgJl9fdm9sdW1lIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XFxuICAgIHdpZHRoOiAyMyU7XFxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKDIzJSk7XFxuICB9XFxuICAmX19zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRvcmFuZ2UtY29sb3IgMCUsICRvcmFuZ2UtY29sb3IgNTAlLCAjQTRBNEE0IDUwJSwgI0E0QTRBNCAxMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgd2lkdGg6IDM1NnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgJl9fc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDE2cHg7IFxcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgJl9fc2xpZGVyLWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgJl9fY2hlY2sge1xcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigxNiUpO1xcbiAgICB3aWR0aDogMjMlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbiAgfVxcbiAgJl9fdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogJG5hdmlnYXRpb24tZm9udC1zaXplO1xcbiAgICBmb250LXdlaWdodDogJG1lZGl1bS1mb250LXdlaWdodDtcXG4gIH1cXG4gICZfX2NoZWNrYm94IGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICZfX2NoZWNrYm94IGxhYmVsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbiAgfVxcbiAgJl9fY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XFxuICB9XFxuICAmX19jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdK2xhYmVsOmJlZm9yZSxcXG4gICZfX2NoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0rbGFiZWw6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gICZfX2NoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0rbGFiZWw6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGRkJDQTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICAmX19jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdK2xhYmVsOmFmdGVyIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgcmlnaHQ6IC04M3B4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcXG4gIH1cXG4gICZfX2NoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbDphZnRlciB7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIHJpZ2h0OiAtNjBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIH1cXG5cXG4gICZfX3RpbWUge1xcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigxOCUpO1xcbiAgICB3aWR0aDogMTYlO1xcbiAgfVxcbiAgJl9fZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gIH1cXG4gICZfX251bWJlciB7XFxuICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAkbWVkaXVtLWZvbnQtd2VpZ2h0O1xcbiAgfVxcbiAgJl9fYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgYnV0dG9uLWxheW91dDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWF4LXdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICB9XFxuICAmX19idXR0b24tLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9taW51cy1idG4uc3ZnKTtcXG4gIH1cXG4gICZfX2J1dHRvbi0tcGx1cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvcGx1cy1idG4uc3ZnKTtcXG4gIH1cXG5cXG4gICZfX2NvbmZpZyB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDYlO1xcbiAgfVxcbiAgJl9fY29uZmlnLXdyYXBwZXIge1xcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG4gICZfX2NvbmZpZy1idXR0b24ge1xcbiAgICB3aWR0aDogNDklO1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgYW5pbWF0aW9uOiBiYXJyZWxSb2xsIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJhcnJlbFJvbGwge1xcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgLy8gZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlZmF1bHQ7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcbi8vIGRpdjpob3ZlciA+IGJ1dHRvbiB7XFxuICAvLyBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gIC8vIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxuLy8gfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vZm9udHMvZ2lscm95L2dpbHJveS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2FwcC9jb21wb25lbnRzL2Fzc2V0cy9tYWluLWJhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogXFxcIkdpbHJveVxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc2V0dGluZ3Mtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIGhlaWdodDogOTUlO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZvb3Rlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogODBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JDZG1CO0VEZW5CLFdBQUE7QUE3QkY7O0FBZ0NBO0VBQ0UsZUFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7QUE3QkY7O0FBK0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBNUJGOztBQStCQTtFQUNFLFlBQUE7QUE1QkY7O0FBOEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQTNCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gYnV0dG9uLWxheW91dCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuQG1peGluIGZsZXgtY29sdW1uKCRoZWlnaHQpIHtcXG4gIEBpZiAkaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgfVxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtaXhpbiBjZW50ZXItcG9zaXRpb24oJHdpZHRoKSB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiRjYXRlZ29yaWVzLWZvbnQtc2l6ZTogMjBweDtcXG4kbmF2aWdhdGlvbi1mb250LXNpemU6IDIycHg7XFxuJG1lZGl1bS1mb250LXdlaWdodDogNTAwO1xcblxcbiRvcmFuZ2UtY29sb3I6ICNGRkJDQTI7XFxuXFxuJHRyYW5zaXRpb24tZGVmYXVsdDogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbkBpbXBvcnQgXFxcIi4uL2ZvbnRzL2dpbHJveS9naWxyb3kuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJub3JtYWxpemUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJ2YXJzLnNjc3NcXFwiO1xcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgZm9udC13ZWlnaHQ6ICRtZWRpdW0tZm9udC13ZWlnaHQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2FwcC9jb21wb25lbnRzL2Fzc2V0cy9tYWluLWJhY2tncm91bmQucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5zZXR0aW5ncy13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgaGVpZ2h0OiA5NSU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZm9vdGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cIixcIkBtaXhpbiBidXR0b24tbGF5b3V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jb2x1bW4oJGhlaWdodCkge1xcbiAgQGlmICRoZWlnaHQge1xcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB9XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1peGluIGNlbnRlci1wb3NpdGlvbigkd2lkdGgpIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuJGNhdGVnb3JpZXMtZm9udC1zaXplOiAyMHB4O1xcbiRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTogMjJweDtcXG4kbWVkaXVtLWZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuJG9yYW5nZS1jb2xvcjogI0ZGQkNBMjtcXG5cXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiBhbGwgMXMgZWFzZS1pbi1vdXQ7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktUmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIkdpbHJveS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktRXh0cmFib2xkSXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIkdpbHJveS1FeHRyYWJvbGRJdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktRXh0cmFib2xkSXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktRXh0cmFib2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIkdpbHJveS1Cb2xkLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIkdpbHJveS1Cb2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIkdpbHJveS1Cb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiR2lscm95LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIkdpbHJveS1CbGFjay5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiR2lscm95LUJsYWNrLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIkdpbHJveS1CbGFjay53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fID0gbmV3IFVSTChcIkdpbHJveS1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiR2lscm95LUxpZ2h0LmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTGlnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiR2lscm95LUxpZ2h0LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiR2lscm95LUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktU2VtaWJvbGQuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fID0gbmV3IFVSTChcIkdpbHJveS1TZW1pYm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktU2VtaWJvbGQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktU2VtaWJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fID0gbmV3IFVSTChcIkdpbHJveS1NZWRpdW0uZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcIkdpbHJveS1NZWRpdW0ud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18gPSBuZXcgVVJMKFwiR2lscm95LU1lZGl1bS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fID0gbmV3IFVSTChcIkdpbHJveS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fID0gbmV3IFVSTChcIkdpbHJveS1NZWRpdW1JdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fID0gbmV3IFVSTChcIkdpbHJveS1NZWRpdW1JdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18gPSBuZXcgVVJMKFwiR2lscm95LU1lZGl1bUl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fID0gbmV3IFVSTChcIkdpbHJveS1NZWRpdW1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fID0gbmV3IFVSTChcIkdpbHJveS1CbGFja0l0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18gPSBuZXcgVVJMKFwiR2lscm95LUJsYWNrSXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM0X19fID0gbmV3IFVSTChcIkdpbHJveS1CbGFja0l0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM1X19fID0gbmV3IFVSTChcIkdpbHJveS1CbGFja0l0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18gPSBuZXcgVVJMKFwiR2lscm95LVVsdHJhTGlnaHQuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM3X19fID0gbmV3IFVSTChcIkdpbHJveS1VbHRyYUxpZ2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM4X19fID0gbmV3IFVSTChcIkdpbHJveS1VbHRyYUxpZ2h0LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzlfX18gPSBuZXcgVVJMKFwiR2lscm95LVVsdHJhTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQwX19fID0gbmV3IFVSTChcIkdpbHJveS1SZWd1bGFySXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktUmVndWxhckl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80Ml9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktUmVndWxhckl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQzX19fID0gbmV3IFVSTChcIkdpbHJveS1SZWd1bGFySXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80NF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktU2VtaWJvbGRJdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ1X19fID0gbmV3IFVSTChcIkdpbHJveS1TZW1pYm9sZEl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80Nl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktU2VtaWJvbGRJdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80N19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktU2VtaWJvbGRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ4X19fID0gbmV3IFVSTChcIkdpbHJveS1IZWF2eUl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDlfX18gPSBuZXcgVVJMKFwiR2lscm95LUhlYXZ5SXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUwX19fID0gbmV3IFVSTChcIkdpbHJveS1IZWF2eUl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUxX19fID0gbmV3IFVSTChcIkdpbHJveS1IZWF2eUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTJfX18gPSBuZXcgVVJMKFwiR2lscm95LUV4dHJhYm9sZC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTNfX18gPSBuZXcgVVJMKFwiR2lscm95LUV4dHJhYm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81NF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktRXh0cmFib2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTVfX18gPSBuZXcgVVJMKFwiR2lscm95LUV4dHJhYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTZfX18gPSBuZXcgVVJMKFwiR2lscm95LUJvbGRJdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU3X19fID0gbmV3IFVSTChcIkdpbHJveS1Cb2xkSXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU4X19fID0gbmV3IFVSTChcIkdpbHJveS1Cb2xkSXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTlfX18gPSBuZXcgVVJMKFwiR2lscm95LUJvbGRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYwX19fID0gbmV3IFVSTChcIkdpbHJveS1VbHRyYUxpZ2h0SXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82MV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82Ml9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYzX19fID0gbmV3IFVSTChcIkdpbHJveS1VbHRyYUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82NF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTGlnaHRJdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY1X19fID0gbmV3IFVSTChcIkdpbHJveS1MaWdodEl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82Nl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTGlnaHRJdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82N19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY4X19fID0gbmV3IFVSTChcIkdpbHJveS1IZWF2eS5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjlfX18gPSBuZXcgVVJMKFwiR2lscm95LUhlYXZ5LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzcwX19fID0gbmV3IFVSTChcIkdpbHJveS1IZWF2eS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzcxX19fID0gbmV3IFVSTChcIkdpbHJveS1IZWF2eS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzJfX18gPSBuZXcgVVJMKFwiR2lscm95LVRoaW4uZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzczX19fID0gbmV3IFVSTChcIkdpbHJveS1UaGluLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc0X19fID0gbmV3IFVSTChcIkdpbHJveS1UaGluLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzVfX18gPSBuZXcgVVJMKFwiR2lscm95LVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc2X19fID0gbmV3IFVSTChcIkdpbHJveS1UaGluSXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83N19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVGhpbkl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83OF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVGhpbkl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc5X19fID0gbmV3IFVSTChcIkdpbHJveS1UaGluSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM2X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80Ml9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80M19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80NF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80NF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81OF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81OV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ4X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzYyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzYzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTJfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81M19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81NF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81NV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81Nl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81Nl9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYwX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzgwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzgxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjRfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82NV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82Nl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82N19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82OF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82OF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84OF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzcwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84OV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzcxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzcyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzcyX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzkyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzkzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzZfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83N19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83OF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83OV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBSZWd1bGFyJyksIGxvY2FsKCdHaWxyb3ktUmVndWxhcicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBFeHRyYWJvbGQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktRXh0cmFib2xkSXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBCb2xkJyksIGxvY2FsKCdHaWxyb3ktQm9sZCcpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBCbGFjaycpLCBsb2NhbCgnR2lscm95LUJsYWNrJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgTGlnaHQnKSwgbG9jYWwoJ0dpbHJveS1MaWdodCcpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFNlbWlib2xkJyksIGxvY2FsKCdHaWxyb3ktU2VtaWJvbGQnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBNZWRpdW0nKSwgbG9jYWwoJ0dpbHJveS1NZWRpdW0nKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBNZWRpdW0gSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktTWVkaXVtSXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zN19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgQmxhY2sgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktQmxhY2tJdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQxX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQzX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBVbHRyYUxpZ2h0JyksIGxvY2FsKCdHaWxyb3ktVWx0cmFMaWdodCcpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDhfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFJlZ3VsYXIgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktUmVndWxhckl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFNlbWlib2xkIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LVNlbWlib2xkSXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Nl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81N19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81OF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzYwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgSGVhdnkgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktSGVhdnlJdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzYxX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzYyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzYzX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBFeHRyYWJvbGQnKSwgbG9jYWwoJ0dpbHJveS1FeHRyYWJvbGQnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBCb2xkIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUJvbGRJdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzcxX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzcyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzczX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgVWx0cmFMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1VbHRyYUxpZ2h0SXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83Nl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83N19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83OF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzgwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgTGlnaHQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktTGlnaHRJdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzgxX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzgyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzgzX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBIZWF2eScpLCBsb2NhbCgnR2lscm95LUhlYXZ5JyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84Nl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84N19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84OF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzkwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgVGhpbicpLCBsb2NhbCgnR2lscm95LVRoaW4nKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzkxX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzkyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzkzX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBUaGluIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LVRoaW5JdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb250cy9naWxyb3kvZ2lscm95LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBOEI7SUFDOUI7Ozs7a0VBSWdEO0lBQ2hELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQXNDO0lBQ3RDOzs7O2tFQUl3RDtJQUN4RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUEyQjtJQUMzQjs7OzttRUFJNkM7SUFDN0MsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNEI7SUFDNUI7Ozs7bUVBSThDO0lBQzlDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTRCO0lBQzVCOzs7O21FQUk4QztJQUM5QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUErQjtJQUMvQjs7OzttRUFJaUQ7SUFDakQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNkI7SUFDN0I7Ozs7bUVBSStDO0lBQy9DLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQW1DO0lBQ25DOzs7O21FQUlxRDtJQUNyRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFrQztJQUNsQzs7OzttRUFJb0Q7SUFDcEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBaUM7SUFDakM7Ozs7bUVBSW1EO0lBQ25ELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQW9DO0lBQ3BDOzs7O21FQUlzRDtJQUN0RCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFxQztJQUNyQzs7OzttRUFJdUQ7SUFDdkQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBa0M7SUFDbEM7Ozs7bUVBSW9EO0lBQ3BELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQWdDO0lBQ2hDOzs7O21FQUlrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFpQztJQUNqQzs7OzttRUFJbUQ7SUFDbkQsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBdUM7SUFDdkM7Ozs7bUVBSXlEO0lBQ3pELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQWtDO0lBQ2xDOzs7O21FQUlvRDtJQUNwRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUE0QjtJQUM1Qjs7OzttRUFJOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBMkI7SUFDM0I7Ozs7bUVBSTZDO0lBQzdDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQWlDO0lBQ2pDOzs7O21FQUltRDtJQUNuRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktUmVndWxhci5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFJlZ3VsYXInKSwgbG9jYWwoJ0dpbHJveS1SZWd1bGFyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1SZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUV4dHJhYm9sZEl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEV4dHJhYm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1FeHRyYWJvbGRJdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUV4dHJhYm9sZEl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktRXh0cmFib2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktRXh0cmFib2xkSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUV4dHJhYm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1Cb2xkLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgQm9sZCcpLCBsb2NhbCgnR2lscm95LUJvbGQnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUJsYWNrLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgQmxhY2snKSwgbG9jYWwoJ0dpbHJveS1CbGFjaycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQmxhY2suZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJsYWNrLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQmxhY2sud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktTGlnaHQuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBMaWdodCcpLCBsb2NhbCgnR2lscm95LUxpZ2h0JyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1MaWdodC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTGlnaHQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1MaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1TZW1pYm9sZC5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFNlbWlib2xkJyksIGxvY2FsKCdHaWxyb3ktU2VtaWJvbGQnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVNlbWlib2xkLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1TZW1pYm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVNlbWlib2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVNlbWlib2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LU1lZGl1bS5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IE1lZGl1bScpLCBsb2NhbCgnR2lscm95LU1lZGl1bScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTWVkaXVtLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1NZWRpdW0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LU1lZGl1bUl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IE1lZGl1bSBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1NZWRpdW1JdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LU1lZGl1bUl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTWVkaXVtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTWVkaXVtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LU1lZGl1bUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1CbGFja0l0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEJsYWNrIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUJsYWNrSXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1CbGFja0l0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQmxhY2tJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1CbGFja0l0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1CbGFja0l0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0LmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgVWx0cmFMaWdodCcpLCBsb2NhbCgnR2lscm95LVVsdHJhTGlnaHQnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVVsdHJhTGlnaHQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVVsdHJhTGlnaHQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVVsdHJhTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktUmVndWxhckl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFJlZ3VsYXIgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktUmVndWxhckl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktUmVndWxhckl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktUmVndWxhckl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVJlZ3VsYXJJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktUmVndWxhckl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1TZW1pYm9sZEl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFNlbWlib2xkIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LVNlbWlib2xkSXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1TZW1pYm9sZEl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktU2VtaWJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1TZW1pYm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1TZW1pYm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1IZWF2eUl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEhlYXZ5IEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUhlYXZ5SXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1IZWF2eUl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktSGVhdnlJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1IZWF2eUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1IZWF2eUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1FeHRyYWJvbGQuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBFeHRyYWJvbGQnKSwgbG9jYWwoJ0dpbHJveS1FeHRyYWJvbGQnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUV4dHJhYm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktRXh0cmFib2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktRXh0cmFib2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUV4dHJhYm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1Cb2xkSXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1Cb2xkSXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1Cb2xkSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1Cb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1Cb2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0SXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgVWx0cmFMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1VbHRyYUxpZ2h0SXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0SXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0SXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0SXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUxpZ2h0SXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgTGlnaHQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktTGlnaHRJdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUxpZ2h0SXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1MaWdodEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUxpZ2h0SXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUxpZ2h0SXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUhlYXZ5LmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgSGVhdnknKSwgbG9jYWwoJ0dpbHJveS1IZWF2eScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktSGVhdnkuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUhlYXZ5LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktSGVhdnkud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktSGVhdnkudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktVGhpbi5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFRoaW4nKSwgbG9jYWwoJ0dpbHJveS1UaGluJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1UaGluLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1UaGluLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVGhpbi53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LVRoaW5JdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBUaGluIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LVRoaW5JdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVRoaW5JdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVRoaW5JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1UaGluSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVRoaW5JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbiBodG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztDQUVEO0VBQ0MsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbiBodG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxidXR0b24gY2xhc3M9XFxcImJ1dHRvblxcXCI+PC9idXR0b24+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9ycy1sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxmb290ZXIgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fbG9nb1xcXCI+XFxuICAgICAgPGltZyBjbGFzcz1cXFwiZm9vdGVyX19pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwiUlMgU2Nob29sIGxvZ29cXFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19kZXZlbG9wZXItaW5mb1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19uYW1lXFxcIj5EZXZlbG9wZWQgYnkgPGEgY2xhc3M9XFxcImZvb3Rlcl9fbGlua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL3N0YXJmYXllclxcXCI+c3RhcmZheWVyPC9hPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9feWVhclxcXCI+MjAyMTwvZGl2PlxcbiAgICA8L2Rpdj4gIFxcbiAgPC9kaXY+XFxuPC9mb290ZXI+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9hcnRRdWl6LWxvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPG1haW4gY2xhc3M9XFxcIm1haW5cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibWFpbl9fY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fbG9nb1xcXCI+XFxuICAgICAgPGltZyBjbGFzcz1cXFwibWFpbl9faW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIkFydCBRdWl6IGxvZ29cXFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fYnV0dG9uLWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fYnV0dG9uIG1haW5fX2J1dHRvbi0tYXJ0aXN0c1xcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fYnV0dG9uIG1haW5fX2J1dHRvbi0tcGljdHVyZXNcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvbWFpbj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL211dGUtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvbG91ZC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJzZXR0aW5ncyBoaWRkZW5cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19vcGVuLWNsb3NlXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzZXR0aW5nc19fb3Blbi1jbG9zZS1idG5cXFwiIGlkPVxcXCJzZXR0aW5nc1xcXCI+PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19faGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19faGVhZGVyLXRleHRcXFwiPlNldHRpbmdzPC9kaXY+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2V0dGluZ3NfX2hlYWRlci1idG5cXFwiPjwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2lubmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fdm9sdW1lXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX190aXRsZVxcXCI+Vm9sdW1lPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fc2xpZGVyLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBjbGFzcz0nc2V0dGluZ3NfX3NsaWRlcicgdHlwZT0ncmFuZ2UnIG1pbj0nMCcgbWF4PScxMDAnPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fc2xpZGVyLWljb25zXFxcIj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJzZXR0aW5nc19faWNvblxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJtdXRlIGljb25cXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInNldHRpbmdzX19pY29uXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcImxvdWQgaWNvblxcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NoZWNrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX190aXRsZVxcXCI+VGltZSBnYW1lPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY2hlY2stY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3RleHRcXFwiPk9uPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19jaGVja2JveFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJjaGVja2JveC1jYXRzMVxcXCIgaWQ9XFxcImNoZWNrYm94LTFcXFwiIHZhbHVlPVxcXCIxXFxcIiBjaGVja2VkPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNoZWNrYm94LTFcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3RpbWVcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3RpdGxlXFxcIj5UaW1lIHRvIGFuc3dlcjwvZGl2PlxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcInNldHRpbmdzX19mb3JtXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2V0dGluZ3NfX2J1dHRvbiBzZXR0aW5nc19fYnV0dG9uLS1taW51c1xcXCI+PC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19udW1iZXJcXFwiPjA8L2Rpdj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2V0dGluZ3NfX2J1dHRvbiBzZXR0aW5nc19fYnV0dG9uLS1wbHVzXFxcIj48L2J1dHRvbj5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19jb25maWdcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19jb25maWctd3JhcHBlclxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzZXR0aW5nc19fY29uZmlnLWJ1dHRvblxcXCI+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzZXR0aW5nc19fY29uZmlnLWJ1dHRvblxcXCI+PC9idXR0b24+XFxuICAgICAgPC9kaXY+ICBcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gIFxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgJ0Avc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgTW9kdWxlIGZyb20gJy4vYXBwL2NvcmUvbW9kdWxlJztcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9hcHAvcGFnZXMvcm91dGVzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hcHAvY29yZS9yZW5kZXInO1xuXG5jbGFzcyBBcHBNb2R1bGUgZXh0ZW5kcyBNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG59XG5cbmNvbnN0IGFwcE1vZHVsZSA9IG5ldyBBcHBNb2R1bGUoe1xuICBjb21wb25lbnRzLFxuICByb3V0ZXNcbiAgLy8gcGFnZXM6IHBhZ2VzLFxufSlcblxucmVuZGVyKGFwcE1vZHVsZSk7Il0sIm5hbWVzIjpbIkJ1dHRvbkVsZW1lbnQiLCJDb21wb25lbnQiLCJodG1sVG9FbGVtZW50IiwiYnV0dG9uIiwiRm9vdGVyRWxlbWVudCIsIkZvb3RlciIsImNvbmZpZyIsImZvb3RlciIsImNsYXNzU2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsIk1haW5FbGVtZW50IiwiTWFpbiIsImFydGlzdEJ0biIsInBpY3R1cmVCdG4iLCJkZWxheUNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJtYWluIiwiU2V0dGluZ3NFbGVtZW50Iiwib3BlblNldHRpbmdzIiwiU2V0dGluZ3MiLCJjaGFuZ2VWb2x1bWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsInZhbHVlIiwiYmFja2dyb3VuZEltYWdlIiwibWF4Iiwic2V0dGluZ3MiLCJjb21wb25lbnRzIiwiY2hhbmdlRWxlbWVudFRleHQiLCJlbCIsInNjYWxhYmxlIiwiRXJyb3IiLCJyZXdyaXRlVGFnIiwiY29uc29sZSIsImxvZyIsIl9pbml0RXh0ZXJuYWwiLCJfaW5pdEV2ZW50cyIsImV2ZW50cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwibGlzdGVuZXIiLCJzcGxpdCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJleHRlcm5hbCIsImV4dGVybmFsT2JqIiwiZGF0YSIsInNlbGVjdG9yIiwidGV4dCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJpZCIsInNsaWNlIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJnZXRDdXJyZW50VXJsIiwiTW9kdWxlIiwicGFnZXMiLCJyb3V0ZXMiLCJjb25uZWN0IiwiYyIsInJlbmRlciIsIndpbmRvdyIsImNoYW5nZVJvdXRlIiwidXJsIiwicm91dGUiLCJmaW5kIiwiaGFzaCIsInBhdGgiLCJjb21wb25lbnQiLCJtb2R1bGUiLCJyZW5kZXJBcHAiLCJob21lUGFnZSIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJodG1sRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIkFwcE1vZHVsZSIsImFwcE1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=