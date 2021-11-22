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

/***/ "./src/app/components/Home/index.js":
/*!******************************************!*\
  !*** ./src/app/components/Home/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/app/components/Home/style.scss");
/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.html */ "./src/app/components/Home/home.html");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./src/app/components/Button/index.js");
/* harmony import */ var _app_core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/core/component */ "./src/app/core/component.js");
/* harmony import */ var _utils_changeHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/changeHash */ "./src/utils/changeHash.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        '.home__button--artists': [_Button__WEBPACK_IMPORTED_MODULE_2__["default"], artistBtn],
        '.home__button--pictures': [_Button__WEBPACK_IMPORTED_MODULE_2__["default"], pictureBtn]
      };
    }
  }, {
    key: "events",
    value: function events() {
      return _defineProperty({
        '.home__button click': this.delayClick
      }, ".home__button click", this.changeHash);
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
  }, {
    key: "changeHash",
    value: function changeHash(event) {
      var hashSelector = event.target.parentNode.classList[1].split('--').pop();

      (0,_utils_changeHash__WEBPACK_IMPORTED_MODULE_4__["default"])(hashSelector);
    }
  }]);

  return Main;
}(_app_core_component__WEBPACK_IMPORTED_MODULE_3__["default"]);

var artistBtn = 'Artist Quiz';
var pictureBtn = 'Pictures Quiz';
var home = new Main({
  classSelector: 'main-wrapper',
  template: _home_html__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./src/app/components/Button/index.js");
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
        '.settings__slider change': this.changeVolume,
        '.settings__config-button click': this.delayClick
      };
    }
  }, {
    key: "openSettings",
    value: function openSettings(event) {
      if (!event.target.classList.contains('settings__header-text')) {
        event.target.classList.add('animated');
        setTimeout(function () {
          return event.target.classList.remove('animated');
        }, 2000);
      } // Have access to this.el because of inheritance


      document.querySelector('.settings-wrapper').classList.toggle('hidden');
      document.querySelector('.settings-wrapper').nextElementSibling.classList.toggle('opacity');
    }
  }, {
    key: "changeVolume",
    value: function changeVolume(event) {
      var value = event.target.value;
      event.target.style.backgroundImage = "linear-gradient(to right, #FFBCA2 0%, #FFBCA2 0%, #FFBCA2 ".concat(value, "%, #A4A4A4 0%, #A4A4A4 0%,#A4A4A4 ").concat(event.target.max - value, "%)");
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
  }, {
    key: "external",
    value: function external() {
      return {
        '.settings__config-button--default': [_Button__WEBPACK_IMPORTED_MODULE_3__["default"], defaultBtn],
        '.settings__config-button--save': [_Button__WEBPACK_IMPORTED_MODULE_3__["default"], saveBtn]
      };
    }
  }]);

  return Settings;
}(_app_core_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

var defaultBtn = 'Default';
var saveBtn = 'Save';
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
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/app/components/Home/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/app/components/Footer/index.js");



var components = [_Settings__WEBPACK_IMPORTED_MODULE_0__["default"], _Home__WEBPACK_IMPORTED_MODULE_1__["default"], _Footer__WEBPACK_IMPORTED_MODULE_2__["default"]];
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

/***/ "./src/utils/changeHash.js":
/*!*********************************!*\
  !*** ./src/utils/changeHash.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(hash) {
  window.location.hash = hash;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Home/style.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Home/style.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".home {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  height: 100%;\n}\n.home__container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 50%;\n  margin: 0 auto;\n}\n.home__logo {\n  width: 45%;\n  margin: 0 auto;\n  margin-bottom: 10%;\n}\n.home__img {\n  width: 100%;\n}\n.home__button-container {\n  display: flex;\n  justify-content: space-between;\n  width: 62%;\n  margin: 0 auto;\n}\n.home__button {\n  height: 62px;\n  width: 48%;\n}", "",{"version":3,"sources":["webpack://./src/app/components/Home/style.scss"],"names":[],"mappings":"AA4BA;EACE,yDAAA;EACA,sBAAA;EACA,YAAA;AA3BF;AA4BE;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,UAAA;EACA,cAAA;AA1BJ;AA4BE;EACE,UAAA;EACA,cAAA;EACA,kBAAA;AA1BJ;AA4BE;EACE,WAAA;AA1BJ;AA6BE;EACE,aAAA;EACA,8BAAA;EACA,UAAA;EACA,cAAA;AA3BJ;AA6BE;EACE,YAAA;EACA,UAAA;AA3BJ","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n.home {\n  background-image: url(../assets/main-background.jpg);\n  background-size: cover;\n  height: 100%;\n  &__container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 50%;\n    margin: 0 auto;\n  }\n  &__logo {\n    width: 45%;\n    margin: 0 auto;\n    margin-bottom: 10%;\n  }\n  &__img {\n    width: 100%;\n  }\n\n  &__button-container {\n    display: flex;\n    justify-content: space-between;\n    width: 62%;\n    margin: 0 auto;\n  }\n  &__button {\n    height: 62px;\n    width: 48%;\n  }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".settings {\n  height: 100%;\n}\n.settings__container {\n  height: inherit;\n  width: 92%;\n  margin: 0 auto;\n}\n.settings__open-close-btn {\n  position: absolute;\n  top: 4%;\n  left: -5%;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.settings__header {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 2%;\n  align-items: center;\n  height: 10%;\n  background-size: 100% 100%;\n}\n.settings__header-text {\n  position: relative;\n  cursor: pointer;\n  font-size: 22px;\n}\n.settings__header-text::before {\n  content: \"\";\n  position: absolute;\n  top: -15%;\n  left: -45%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  width: 34px;\n  height: 34px;\n}\n.settings__header-btn {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.settings__inner {\n  height: 55%;\n  font-size: 34px;\n  font-weight: 700;\n}\n.settings__volume {\n  margin-top: 5%;\n  margin-bottom: 80px;\n  width: 23%;\n  height: 23%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.settings__slider {\n  background: linear-gradient(to right, #FFBCA2 0%, #FFBCA2 50%, #A4A4A4 50%, #A4A4A4 100%);\n  border-radius: 8px;\n  height: 3px;\n  width: 356px;\n  outline: none;\n  cursor: ew-resize;\n  -webkit-appearance: none;\n}\n.settings__slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.settings__slider-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.settings__check {\n  height: 16%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 23%;\n  margin-bottom: 80px;\n}\n.settings__text {\n  font-size: 22px;\n  font-weight: 500;\n}\n.settings__checkbox input {\n  display: none;\n}\n.settings__checkbox label {\n  cursor: pointer;\n  position: relative;\n  font-size: 18px;\n  padding: 15px 0;\n}\n.settings__checkbox input[type=checkbox] {\n  position: absolute;\n  visibility: hidden !important;\n}\n.settings__checkbox input[type=checkbox] + label:before, .settings__checkbox input[type=checkbox] + label:after {\n  content: \"\";\n  position: absolute;\n  bottom: 5%;\n  box-sizing: border-box;\n}\n.settings__checkbox input[type=checkbox] + label:before {\n  width: 48px;\n  height: 24px;\n  margin-left: 40px;\n  background: #FFBCA2;\n  border-radius: 15px;\n}\n.settings__checkbox input[type=checkbox] + label:after {\n  width: 16px;\n  height: 16px;\n  top: -20px;\n  right: -83px;\n  background: #fff;\n  border-radius: 50%;\n  transition: all 200ms ease-out;\n}\n.settings__checkbox input[type=checkbox]:checked + label:after {\n  top: -20px;\n  right: -60px;\n  background: #fff;\n}\n.settings__time {\n  height: 18%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 16%;\n}\n.settings__form {\n  display: flex;\n  justify-content: space-between;\n  width: 45%;\n}\n.settings__number {\n  margin-top: 4%;\n  font-size: 24px;\n  font-weight: 500;\n}\n.settings__button {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n  width: 60%;\n  max-width: 36px;\n  height: 36px;\n}\n.settings__button--minus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.settings__button--plus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.settings__config {\n  margin-top: 5%;\n  display: flex;\n  justify-content: flex-end;\n  height: 6%;\n}\n.settings__config-wrapper {\n  align-items: right;\n  display: flex;\n  justify-content: space-between;\n  width: 40%;\n}\n.settings__config-button {\n  width: 49%;\n  font-size: 22px;\n}\n\n.animated {\n  animation: barrelRoll 2s infinite linear;\n  animation-timing-function: ease-out;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes barrelRoll {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n.hidden {\n  transition: all 1s ease-in-out;\n  transform: none;\n}", "",{"version":3,"sources":["webpack://./src/app/components/Settings/style.scss"],"names":[],"mappings":"AA4BA;EACE,YAAA;AA3BF;AA6BE;EACE,eAAA;EAdF,UAe2B;EAd3B,cAAA;AAZF;AA4BE;EACE,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EAvCF,UAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EAqCE,yDAAA;AAtBJ;AAwBE;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,0BAAA;AAtBJ;AAwBE;EACE,kBAAA;EACA,eAAA;EACA,eAjCmB;AAWvB;AAwBE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,yDAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;AAtBJ;AAyBE;EACE,WAAA;EACA,YAAA;EArEF,UAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EAmEE,yDAAA;AAnBJ;AAsBE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;AApBJ;AAsBE;EACE,cAAA;EACA,mBAAA;EACA,UAAA;EAzEA,WA0EqB;EAxEvB,aAAA;EACA,sBAAA;EACA,8BAAA;AAqDF;AAmBE;EACE,yFAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,wBAAA;AAjBJ;AAmBE;EACE,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AAjBJ;AAmBE;EACE,aAAA;EACA,8BAAA;AAjBJ;AAoBE;EAnGE,WAoGqB;EAlGvB,aAAA;EACA,sBAAA;EACA,8BAAA;EAiGE,UAAA;EACA,mBAAA;AAfJ;AAiBE;EACE,eA7FmB;EA8FnB,gBA7FiB;AA8ErB;AAiBE;EACE,aAAA;AAfJ;AAiBE;EACE,eAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AAfJ;AAiBE;EACE,kBAAA;EACA,6BAAA;AAfJ;AAiBE;EAEA,WAAA;EACA,kBAAA;EACA,UAAA;EACA,sBAAA;AAhBF;AAkBE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;AAhBJ;AAkBE;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,8BAAA;AAhBJ;AAkBE;EACE,UAAA;EACA,YAAA;EACA,gBAAA;AAhBJ;AAmBE;EAtJE,WAuJqB;EArJvB,aAAA;EACA,sBAAA;EACA,8BAAA;EAoJE,UAAA;AAdJ;AAgBE;EACE,aAAA;EACA,8BAAA;EACA,UAAA;AAdJ;AAgBE;EACE,cAAA;EACA,eAAA;EACA,gBArJiB;AAuIrB;AAgBE;EA7KA,UAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EA2KE,UAAA;EACA,eAAA;EACA,YAAA;AAVJ;AAYE;EACE,yDAAA;AAVJ;AAYE;EACE,yDAAA;AAVJ;AAaE;EACE,cAAA;EACA,aAAA;EACA,yBAAA;EACA,UAAA;AAXJ;AAaE;EACE,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,UAAA;AAXJ;AAaE;EACE,UAAA;EACA,eAAA;AAXJ;;AAeA;EACE,wCAAA;EACA,mCAAA;EACA,4BAAA;EACA,6BAAA;AAZF;;AAeA;EACE;IAAK,+BAAA;EAXL;EAYA;IAAO,iCAAA;EATP;AACF;AAWA;EAEE,8BAhMmB;EAiMnB,eAAA;AAVF","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n.settings {\n  height: 100%;\n  // transition: all 1s ease-in-out;\n  &__container {\n    height: inherit;\n    @include center-position(92%);\n  }\n  &__open-close-btn{\n    position: absolute;\n    top: 4%;\n    left: -5%;\n    width: 36px;\n    height: 36px;\n    @include button-layout;\n    background-image: url(../assets/settings-btn.svg);\n  }\n  &__header{\n    display: flex;\n    justify-content: space-between;\n    margin-left: 2%;\n    align-items: center;\n    height: 10%;\n    background-size: 100% 100%;\n  }\n  &__header-text {\n    position: relative;\n    cursor: pointer;\n    font-size: $navigation-font-size;\n  }\n  &__header-text::before {\n    content: '';\n    position: absolute;\n    top: -15%;\n    left: -45%;\n    background-image: url(../assets/back-arrow.svg);\n    background-size: cover;\n    width: 34px;\n    height: 34px;\n  }\n\n  &__header-btn {\n    width: 36px;\n    height: 36px;\n    @include button-layout;\n    background-image: url(../assets/close-btn.svg);\n  }\n\n  &__inner {\n    height: 55%;\n    font-size: 34px;\n    font-weight: 700;;\n  }\n  &__volume {\n    margin-top: 5%;\n    margin-bottom: 80px;\n    width: 23%;\n    @include flex-column(23%);\n  }\n  &__slider {\n    background: linear-gradient(to right, $orange-color 0%, $orange-color 50%, #A4A4A4 50%, #A4A4A4 100%);\n    border-radius: 8px;\n    height: 3px;\n    width: 356px;\n    outline: none;\n    cursor: ew-resize;\n    -webkit-appearance: none;\n  }\n  &__slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 16px; \n    height: 16px;\n    background: #fff;\n    border-radius: 50%;\n    cursor: pointer;\n  }\n  &__slider-icons {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &__check {\n    @include flex-column(16%);\n    width: 23%;\n    margin-bottom: 80px;\n  }\n  &__text {\n    font-size: $navigation-font-size;\n    font-weight: $medium-font-weight;\n  }\n  &__checkbox input {\n    display: none;\n  }\n  &__checkbox label {\n    cursor: pointer;\n    position: relative;\n    font-size: 18px;\n    padding: 15px 0;\n  }\n  &__checkbox input[type=\"checkbox\"] {\n    position: absolute;\n    visibility: hidden !important;\n  }\n  &__checkbox input[type=\"checkbox\"]+label:before,\n  &__checkbox input[type=\"checkbox\"]+label:after {\n  content: '';\n  position: absolute;\n  bottom: 5%;\n  box-sizing: border-box;\n  }\n  &__checkbox input[type=\"checkbox\"]+label:before {\n    width: 48px;\n    height: 24px;\n    margin-left: 40px;\n    background: #FFBCA2;\n    border-radius: 15px;\n  }\n  &__checkbox input[type=\"checkbox\"]+label:after {\n    width: 16px;\n    height: 16px;\n    top: -20px;\n    right: -83px;\n    background: #fff;\n    border-radius: 50%;\n    transition: all 200ms ease-out;\n  }\n  &__checkbox input[type=\"checkbox\"]:checked+label:after {\n    top: -20px;\n    right: -60px;\n    background: #fff;\n  }\n\n  &__time {\n    @include flex-column(18%);\n    width: 16%;\n  }\n  &__form {\n    display: flex;\n    justify-content: space-between;\n    width: 45%;\n  }\n  &__number {\n    margin-top: 4%;\n    font-size: 24px;\n    font-weight: $medium-font-weight;\n  }\n  &__button {\n    @include button-layout;\n    width: 60%;\n    max-width: 36px;\n    height: 36px;\n  }\n  &__button--minus {\n    background-image: url(../assets/minus-btn.svg);\n  }\n  &__button--plus {\n    background-image: url(../assets/plus-btn.svg);\n  }\n\n  &__config {\n    margin-top: 5%;\n    display: flex;\n    justify-content: flex-end;\n    height: 6%;\n  }\n  &__config-wrapper {\n    align-items: right;\n    display: flex;\n    justify-content: space-between;\n    width: 40%;\n  }\n  &__config-button {\n    width: 49%;\n    font-size: 22px;\n  }\n}\n\n.animated {\n  animation: barrelRoll 2s infinite linear;\n  animation-timing-function: ease-out;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes barrelRoll {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n.hidden {\n  // display: none;\n  transition: $transition-default;\n  transform: none;\n}\n// div:hover > button {\n  // animation-play-state: running;\n  // animation-play-state: paused;\n// }"],"sourceRoot":""}]);
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
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_gilroy_gilroy_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  background-color: #000;\n  overflow: hidden;\n  font-family: \"Gilroy\";\n  font-weight: 500;\n  color: #fff;\n}\n\n.background {\n  height: inherit;\n  background-size: cover;\n}\n\n.content {\n  position: relative;\n  height: 100%;\n  transition: all 1s ease-in-out;\n}\n\n.opacity {\n  opacity: 0;\n}\n\n.settings-wrapper {\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  transform: translateX(100%);\n  height: 95%;\n}\n\n.main-wrapper {\n  height: 100%;\n}\n\n.footer-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 80px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAgCA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBCdmB;EDenB,WAAA;AA7BF;;AAgCA;EACE,eAAA;EACA,sBAAA;AA7BF;;AAgCA;EACE,kBAAA;EACA,YAAA;EACA,8BCtBmB;ADPrB;;AAgCA;EACE,UAAA;AA7BF;;AA+BA;EACE,UAAA;EACA,kBAAA;EACA,WAAA;EACA,2BAAA;EACA,WAAA;AA5BF;;AA+BA;EACE,YAAA;AA5BF;;AA8BA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;AA3BF","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n@import \"../fonts/gilroy/gilroy.css\";\n@import \"normalize.css\";\n@import \"vars.scss\";\n\nbody {\n  height: 100vh;\n  background-color: #000;\n  overflow: hidden;\n  font-family: 'Gilroy';\n  font-weight: $medium-font-weight;\n  color: #fff;\n}\n\n.background {\n  height: inherit;\n  background-size: cover;\n}\n\n.content {\n  position: relative;\n  height: 100%;\n  transition: $transition-default;\n}\n\n.opacity {\n  opacity: 0;\n}\n.settings-wrapper {\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  transform: translateX(100%);\n  height: 95%;\n}\n\n.main-wrapper {\n  height: 100%;\n}\n.footer-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 80px;\n}","@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;"],"sourceRoot":""}]);
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

/***/ "./src/app/components/Home/home.html":
/*!*******************************************!*\
  !*** ./src/app/components/Home/home.html ***!
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
var code = "<main class=\"home\">\n  <div class=\"home__container\">\n    <div class=\"home__logo\">\n      <img class=\"home__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Art Quiz logo\">\n    </div>\n    <div class=\"home__button-container\">\n      <div class=\"home__button home__button--artists\"></div>\n      <div class=\"home__button home__button--pictures\"></div>\n    </div>\n  </div>\n</main>";
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
var code = "<div class=\"settings hidden\">\n  <div class=\"settings__container\">\n    <div class=\"settings__open-close\">\n      <button class=\"settings__open-close-btn\" id=\"settings\"></button>\n    </div>\n    <div class=\"settings__header\">\n      <div class=\"settings__header-text\">Settings</div>\n      <button class=\"settings__header-btn\"></button>\n    </div>\n    <div class=\"settings__inner\">\n      <div class=\"settings__volume\">\n        <div class=\"settings__title\">Volume</div>\n        <div class=\"settings__slider-container\">\n          <input class='settings__slider' type='range' min='0' max='100'>\n          <div class=\"settings__slider-icons\">\n            <img class=\"settings__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"mute icon\">\n            <img class=\"settings__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"loud icon\">\n          </div>\n        </div>\n      </div>\n      <div class=\"settings__check\">\n        <div class=\"settings__title\">Time game</div>\n        <div class=\"settings__check-container\">\n          <div class=\"settings__text\">On</div>\n          <div class=\"settings__checkbox\">\n            <input type=\"checkbox\" name=\"checkbox-cats1\" id=\"checkbox-1\" value=\"1\" checked>\n            <label for=\"checkbox-1\"></label>\n          </div>\n        </div>\n      </div>\n      <div class=\"settings__time\">\n        <div class=\"settings__title\">Time to answer</div>\n        <form class=\"settings__form\">\n          <button class=\"settings__button settings__button--minus\"></button>\n          <div class=\"settings__number\">0</div>\n          <button class=\"settings__button settings__button--plus\"></button>\n        </form>\n      </div>\n    </div>\n    <div class=\"settings__config\">\n      <div class=\"settings__config-wrapper\">\n        <div class=\"settings__config-button settings__config-button--default\"></div>\n        <div class=\"settings__config-button settings__config-button--save\"></div>\n      </div>  \n    </div>\n  </div>  \n</div>";
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

/***/ "./src/app/components/Home/style.scss":
/*!********************************************!*\
  !*** ./src/app/components/Home/style.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/app/components/Home/style.scss");

      
      
      
      
      
      
      
      
      

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

module.exports = __webpack_require__.p + "images/94d7d30a6bd21a4aa820.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsYUFBYSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sWUFBWSxlQUFlLE9BQU8sTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxhQUFhLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLGFBQWEsWUFBWSwrQ0FBK0MsZUFBZSxvQkFBb0IsaUJBQWlCLGtDQUFrQywrQkFBK0IsR0FBRyxpQ0FBaUMsaUJBQWlCLHNCQUFzQixLQUFLLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsb0NBQW9DLGtCQUFrQixtQkFBbUIsR0FBRyw4QkFBOEIsOEJBQThCLDJCQUEyQiwyQkFBMkIsNENBQTRDLGFBQWEsaUJBQWlCLHNDQUFzQyxrQkFBa0Isc0JBQXNCLG9DQUFvQyxLQUFLLHNCQUFzQix5QkFBeUIsY0FBYyxnQkFBZ0Isa0JBQWtCLG1CQUFtQiw2QkFBNkIsd0RBQXdELEtBQUssY0FBYyxvQkFBb0IscUNBQXFDLHNCQUFzQiwwQkFBMEIsa0JBQWtCLGlDQUFpQyxLQUFLLG9CQUFvQix5QkFBeUIsc0JBQXNCLHVDQUF1QyxLQUFLLDRCQUE0QixrQkFBa0IseUJBQXlCLGdCQUFnQixpQkFBaUIsc0RBQXNELDZCQUE2QixrQkFBa0IsbUJBQW1CLEtBQUsscUJBQXFCLGtCQUFrQixtQkFBbUIsNkJBQTZCLHFEQUFxRCxLQUFLLGdCQUFnQixrQkFBa0Isc0JBQXNCLHdCQUF3QixLQUFLLGVBQWUscUJBQXFCLDBCQUEwQixpQkFBaUIsZ0NBQWdDLEtBQUssZUFBZSw0R0FBNEcseUJBQXlCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHdCQUF3QiwrQkFBK0IsS0FBSyxxQ0FBcUMsK0JBQStCLHVCQUF1QixtQkFBbUIsbUJBQW1CLHVCQUF1Qix5QkFBeUIsc0JBQXNCLEtBQUsscUJBQXFCLG9CQUFvQixxQ0FBcUMsS0FBSyxnQkFBZ0IsZ0NBQWdDLGlCQUFpQiwwQkFBMEIsS0FBSyxhQUFhLHVDQUF1Qyx1Q0FBdUMsS0FBSyx1QkFBdUIsb0JBQW9CLEtBQUssdUJBQXVCLHNCQUFzQix5QkFBeUIsc0JBQXNCLHNCQUFzQixLQUFLLDBDQUEwQyx5QkFBeUIsb0NBQW9DLEtBQUssNEdBQTRHLGdCQUFnQix1QkFBdUIsZUFBZSwyQkFBMkIsS0FBSyx1REFBdUQsa0JBQWtCLG1CQUFtQix3QkFBd0IsMEJBQTBCLDBCQUEwQixLQUFLLHNEQUFzRCxrQkFBa0IsbUJBQW1CLGlCQUFpQixtQkFBbUIsdUJBQXVCLHlCQUF5QixxQ0FBcUMsS0FBSyw4REFBOEQsaUJBQWlCLG1CQUFtQix1QkFBdUIsS0FBSyxlQUFlLGdDQUFnQyxpQkFBaUIsS0FBSyxhQUFhLG9CQUFvQixxQ0FBcUMsaUJBQWlCLEtBQUssZUFBZSxxQkFBcUIsc0JBQXNCLHVDQUF1QyxLQUFLLGVBQWUsNkJBQTZCLGlCQUFpQixzQkFBc0IsbUJBQW1CLEtBQUssc0JBQXNCLHFEQUFxRCxLQUFLLHFCQUFxQixvREFBb0QsS0FBSyxpQkFBaUIscUJBQXFCLG9CQUFvQixnQ0FBZ0MsaUJBQWlCLEtBQUssdUJBQXVCLHlCQUF5QixvQkFBb0IscUNBQXFDLGlCQUFpQixLQUFLLHNCQUFzQixpQkFBaUIsc0JBQXNCLEtBQUssR0FBRyxlQUFlLDZDQUE2Qyx3Q0FBd0MsaUNBQWlDLGtDQUFrQyxHQUFHLDJCQUEyQixTQUFTLGtDQUFrQyxXQUFXLG9DQUFvQyxHQUFHLGFBQWEscUJBQXFCLG9DQUFvQyxvQkFBb0IsR0FBRyx5QkFBeUIscUNBQXFDLG9DQUFvQyxNQUFNLG1CQUFtQjtBQUNybVc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ2QztBQUM2RztBQUNqQjtBQUMyQjtBQUNYO0FBQzVHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMEJBQTBCLG9HQUFpQztBQUMzRCwwQkFBMEIsMEZBQWlDO0FBQzNEO0FBQ0EsZ0RBQWdELGtCQUFrQiwyQkFBMkIscUJBQXFCLDRCQUE0QixxQkFBcUIsZ0JBQWdCLEdBQUcsaUJBQWlCLG9CQUFvQiwyQkFBMkIsR0FBRyxjQUFjLHVCQUF1QixpQkFBaUIsbUNBQW1DLEdBQUcsY0FBYyxlQUFlLEdBQUcsdUJBQXVCLGVBQWUsdUJBQXVCLGdCQUFnQixnQ0FBZ0MsZ0JBQWdCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLDRCQUE0QixnQkFBZ0IsdUJBQXVCLGNBQWMsaUJBQWlCLEdBQUcsT0FBTyw0SEFBNEgsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxnREFBZ0QsZUFBZSxvQkFBb0IsaUJBQWlCLGtDQUFrQywrQkFBK0IsR0FBRyxpQ0FBaUMsaUJBQWlCLHNCQUFzQixLQUFLLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsb0NBQW9DLGtCQUFrQixtQkFBbUIsR0FBRyw4QkFBOEIsOEJBQThCLDJCQUEyQiwyQkFBMkIsNENBQTRDLHlDQUF5Qyw0QkFBNEIsd0JBQXdCLFVBQVUsa0JBQWtCLDJCQUEyQixxQkFBcUIsMEJBQTBCLHFDQUFxQyxnQkFBZ0IsR0FBRyxpQkFBaUIsb0JBQW9CLDJCQUEyQixHQUFHLGNBQWMsdUJBQXVCLGlCQUFpQixvQ0FBb0MsR0FBRyxjQUFjLGVBQWUsR0FBRyxxQkFBcUIsZUFBZSx1QkFBdUIsZ0JBQWdCLGdDQUFnQyxnQkFBZ0IsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGdCQUFnQix1QkFBdUIsY0FBYyxpQkFBaUIsR0FBRyx5QkFBeUIsZUFBZSxvQkFBb0IsaUJBQWlCLGtDQUFrQywrQkFBK0IsR0FBRyxpQ0FBaUMsaUJBQWlCLHNCQUFzQixLQUFLLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsb0NBQW9DLGtCQUFrQixtQkFBbUIsR0FBRyw4QkFBOEIsOEJBQThCLDJCQUEyQiwyQkFBMkIsNENBQTRDLG1CQUFtQjtBQUNuZ0c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLGdJQUFxQztBQUNqRiw0Q0FBNEMsb0lBQXVDO0FBQ25GLDRDQUE0QyxrSUFBc0M7QUFDbEYsNENBQTRDLGdJQUFxQztBQUNqRiw0Q0FBNEMsZ0pBQTZDO0FBQ3pGLDRDQUE0QyxvSkFBK0M7QUFDM0YsNENBQTRDLGtKQUE4QztBQUMxRiw0Q0FBNEMsZ0pBQTZDO0FBQ3pGLDRDQUE0QywwSEFBa0M7QUFDOUUsNENBQTRDLDhIQUFvQztBQUNoRiw2Q0FBNkMsNEhBQW1DO0FBQ2hGLDZDQUE2QywwSEFBa0M7QUFDL0UsNkNBQTZDLDRIQUFtQztBQUNoRiw2Q0FBNkMsZ0lBQXFDO0FBQ2xGLDZDQUE2Qyw4SEFBb0M7QUFDakYsNkNBQTZDLDRIQUFtQztBQUNoRiw2Q0FBNkMsNEhBQW1DO0FBQ2hGLDZDQUE2QyxnSUFBcUM7QUFDbEYsNkNBQTZDLDhIQUFvQztBQUNqRiw2Q0FBNkMsNEhBQW1DO0FBQ2hGLDZDQUE2QyxrSUFBc0M7QUFDbkYsNkNBQTZDLHNJQUF3QztBQUNyRiw2Q0FBNkMsb0lBQXVDO0FBQ3BGLDZDQUE2QyxrSUFBc0M7QUFDbkYsNkNBQTZDLDhIQUFvQztBQUNqRiw2Q0FBNkMsa0lBQXNDO0FBQ25GLDZDQUE2QyxnSUFBcUM7QUFDbEYsNkNBQTZDLDhIQUFvQztBQUNqRiw2Q0FBNkMsMElBQTBDO0FBQ3ZGLDZDQUE2Qyw4SUFBNEM7QUFDekYsNkNBQTZDLDRJQUEyQztBQUN4Riw2Q0FBNkMsMElBQTBDO0FBQ3ZGLDZDQUE2Qyx3SUFBeUM7QUFDdEYsNkNBQTZDLDRJQUEyQztBQUN4Riw2Q0FBNkMsMElBQTBDO0FBQ3ZGLDZDQUE2Qyx3SUFBeUM7QUFDdEYsNkNBQTZDLHNJQUF3QztBQUNyRiw2Q0FBNkMsMElBQTBDO0FBQ3ZGLDZDQUE2Qyx3SUFBeUM7QUFDdEYsNkNBQTZDLHNJQUF3QztBQUNyRiw2Q0FBNkMsNElBQTJDO0FBQ3hGLDZDQUE2QyxnSkFBNkM7QUFDMUYsNkNBQTZDLDhJQUE0QztBQUN6Riw2Q0FBNkMsNElBQTJDO0FBQ3hGLDZDQUE2Qyw4SUFBNEM7QUFDekYsNkNBQTZDLGtKQUE4QztBQUMzRiw2Q0FBNkMsZ0pBQTZDO0FBQzFGLDZDQUE2Qyw4SUFBNEM7QUFDekYsNkNBQTZDLHdJQUF5QztBQUN0Riw2Q0FBNkMsNElBQTJDO0FBQ3hGLDZDQUE2QywwSUFBMEM7QUFDdkYsNkNBQTZDLHdJQUF5QztBQUN0Riw2Q0FBNkMsb0lBQXVDO0FBQ3BGLDZDQUE2Qyx3SUFBeUM7QUFDdEYsNkNBQTZDLHNJQUF3QztBQUNyRiw2Q0FBNkMsb0lBQXVDO0FBQ3BGLDZDQUE2QyxzSUFBd0M7QUFDckYsNkNBQTZDLDBJQUEwQztBQUN2Riw2Q0FBNkMsd0lBQXlDO0FBQ3RGLDZDQUE2QyxzSUFBd0M7QUFDckYsNkNBQTZDLGtKQUE4QztBQUMzRiw2Q0FBNkMsc0pBQWdEO0FBQzdGLDZDQUE2QyxvSkFBK0M7QUFDNUYsNkNBQTZDLGtKQUE4QztBQUMzRiw2Q0FBNkMsd0lBQXlDO0FBQ3RGLDZDQUE2Qyw0SUFBMkM7QUFDeEYsNkNBQTZDLDBJQUEwQztBQUN2Riw2Q0FBNkMsd0lBQXlDO0FBQ3RGLDZDQUE2Qyw0SEFBbUM7QUFDaEYsNkNBQTZDLGdJQUFxQztBQUNsRiw2Q0FBNkMsOEhBQW9DO0FBQ2pGLDZDQUE2Qyw0SEFBbUM7QUFDaEYsNkNBQTZDLDBIQUFrQztBQUMvRSw2Q0FBNkMsOEhBQW9DO0FBQ2pGLDZDQUE2Qyw0SEFBbUM7QUFDaEYsNkNBQTZDLDBIQUFrQztBQUMvRSw2Q0FBNkMsc0lBQXdDO0FBQ3JGLDZDQUE2QywwSUFBMEM7QUFDdkYsNkNBQTZDLHdJQUF5QztBQUN0Riw2Q0FBNkMsc0lBQXdDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCLGtDQUFrQyxpQkFBaUI7QUFDM0gseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCLGtDQUFrQyxpQkFBaUI7QUFDM0gseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLGtDQUFrQyxpQkFBaUI7QUFDNUgsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCLG1DQUFtQyxpQkFBaUI7QUFDN0gsMENBQTBDLHNGQUErQjtB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QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUM7Ozs7O0FBQ0oscUJBQVlqRyxNQUFaLEVBQW9CO0FBQUE7O0FBQUEsNkJBQ1pBLE1BRFk7QUFFbkI7OztFQUhxQnlFOztBQU14QixJQUFNeUIsU0FBUyxHQUFHLElBQUlELFNBQUosQ0FBYztBQUM5QnpELEVBQUFBLFVBQVUsRUFBVkEsd0RBRDhCO0FBRTlCbUMsRUFBQUEsTUFBTSxFQUFOQSx5REFGOEIsQ0FHOUI7O0FBSDhCLENBQWQsQ0FBbEI7QUFNQUcsNERBQU0sQ0FBQ29CLFNBQUQsQ0FBTixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb3JlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29yZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9wYWdlcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvcGFnZXMvcm91dGVzLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL2NoYW5nZUVsZW1lbnRUZXh0LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL2NoYW5nZUhhc2guanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvdXRpbHMvZ2V0VXJsLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL2h0bWxUb0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvQnV0dG9uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvSG9tZS9zdHlsZS5zY3NzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvZm9udHMvZ2lscm95L2dpbHJveS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uaHRtbCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvSG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3MuaHRtbCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL0J1dHRvbi9zdHlsZS5zY3NzP2JjMDMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLnNjc3M/YzU2NSIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lL3N0eWxlLnNjc3M/MWMwZiIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9zdHlsZS5zY3NzP2Q1ZmUiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YzU5ZCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBCdXR0b25FbGVtZW50IGZyb20gJy4vYnV0dG9uLmh0bWwnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAL2FwcC9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tICdAL3V0aWxzL2h0bWxUb0VsZW1lbnQnO1xuXG4vLyBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbi8vICAgICBzdXBlcihjb25maWcpXG4vLyAgIH1cblxuLy8gICBldmVudHMoKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICcuYnV0dG9uIGNsaWNrJzogdGhpcy5kZWxheUNsaWNrXG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgZGVsYXlDbGljayhldmVudCkge1xuLy8gICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xuLy8gICAgIGV2ZW50LnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMDAwJztcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IGV2ZW50LnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyksIDEwMDApXG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvbih7XG4vLyAgIHNjYWxhYmxlOiB0cnVlLFxuLy8gICB0ZW1wbGF0ZTogQnV0dG9uRWxlbWVudFxuLy8gfSlcblxuY29uc3QgYnV0dG9uID0gaHRtbFRvRWxlbWVudChCdXR0b25FbGVtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IEZvb3RlckVsZW1lbnQgZnJvbSAnLi9mb290ZXIuaHRtbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0AvYXBwL2NvcmUvY29tcG9uZW50JztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKVxuICB9XG59XG5cbmNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIoe1xuICBjbGFzc1NlbGVjdG9yOiAnZm9vdGVyLXdyYXBwZXInLFxuICB0ZW1wbGF0ZTogRm9vdGVyRWxlbWVudFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBIb21lRWxlbWVudCBmcm9tICcuL2hvbWUuaHRtbCc7XG5pbXBvcnQgYnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0AvYXBwL2NvcmUvY29tcG9uZW50JztcbmltcG9ydCBjaGFuZ2VIYXNoIGZyb20gJ0AvdXRpbHMvY2hhbmdlSGFzaCc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpXG4gIH1cblxuICBleHRlcm5hbCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5ob21lX19idXR0b24tLWFydGlzdHMnOiBbYnV0dG9uLCBhcnRpc3RCdG5dLFxuICAgICAgJy5ob21lX19idXR0b24tLXBpY3R1cmVzJzogW2J1dHRvbiwgcGljdHVyZUJ0bl0sXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnLmhvbWVfX2J1dHRvbiBjbGljayc6IHRoaXMuZGVsYXlDbGljayxcbiAgICAgICcuaG9tZV9fYnV0dG9uIGNsaWNrJzogdGhpcy5jaGFuZ2VIYXNoXG4gICAgfVxuICB9XG5cbiAgZGVsYXlDbGljayhldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMDAwJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IGV2ZW50LnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyksIDEwMDApXG4gIH1cblxuICBjaGFuZ2VIYXNoKGV2ZW50KSB7XG4gICAgbGV0IGhhc2hTZWxlY3RvciA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdFsxXS5zcGxpdCgnLS0nKS5wb3AoKTtcbiAgICBjaGFuZ2VIYXNoKGhhc2hTZWxlY3RvcilcbiAgfVxufVxuXG5jb25zdCBhcnRpc3RCdG4gPSAnQXJ0aXN0IFF1aXonO1xuY29uc3QgcGljdHVyZUJ0biA9ICdQaWN0dXJlcyBRdWl6JztcblxubGV0IGhvbWUgPSBuZXcgTWFpbih7XG4gIGNsYXNzU2VsZWN0b3I6ICdtYWluLXdyYXBwZXInLFxuICB0ZW1wbGF0ZTogSG9tZUVsZW1lbnQsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQC9hcHAvY29yZS9jb21wb25lbnQnO1xuaW1wb3J0IFNldHRpbmdzRWxlbWVudCBmcm9tICcuL3NldHRpbmdzLmh0bWwnO1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5cbi8vIGNvbnN0IHNldHRpbmdzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzX19saW5rJyk7XG5cbmZ1bmN0aW9uIG9wZW5TZXR0aW5ncygpIHtcblxufVxuXG4vLyBzZXR0aW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5TZXR0aW5ncyk7XG5cblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuc2V0dGluZ3NfX29wZW4tY2xvc2UtYnRuIGNsaWNrJzogdGhpcy5vcGVuU2V0dGluZ3MsXG4gICAgICAnLnNldHRpbmdzX19oZWFkZXItYnRuIGNsaWNrJzogdGhpcy5vcGVuU2V0dGluZ3MsXG4gICAgICAnLnNldHRpbmdzX19oZWFkZXItdGV4dCBjbGljayc6IHRoaXMub3BlblNldHRpbmdzLFxuICAgICAgJy5zZXR0aW5nc19fc2xpZGVyIGNoYW5nZSc6IHRoaXMuY2hhbmdlVm9sdW1lLFxuICAgICAgJy5zZXR0aW5nc19fY29uZmlnLWJ1dHRvbiBjbGljayc6IHRoaXMuZGVsYXlDbGlja1xuICAgIH1cbiAgfVxuXG4gIG9wZW5TZXR0aW5ncyhldmVudCkge1xuICAgIGlmICghKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NldHRpbmdzX19oZWFkZXItdGV4dCcpKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZCcpLCAyMDAwKTtcbiAgICB9XG4gICAgLy8gSGF2ZSBhY2Nlc3MgdG8gdGhpcy5lbCBiZWNhdXNlIG9mIGluaGVyaXRhbmNlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXdyYXBwZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3Mtd3JhcHBlcicpLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdvcGFjaXR5Jyk7XG4gIH1cblxuICBjaGFuZ2VWb2x1bWUoZXZlbnQpIHsgXG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZCQ0EyIDAlLCAjRkZCQ0EyIDAlLCAjRkZCQ0EyICR7dmFsdWV9JSwgI0E0QTRBNCAwJSwgI0E0QTRBNCAwJSwjQTRBNEE0ICR7ZXZlbnQudGFyZ2V0Lm1heCAtIHZhbHVlfSUpYDtcbiAgfVxuXG4gIGRlbGF5Q2xpY2soZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcbiAgICBldmVudC50YXJnZXQuc3R5bGUuY29sb3IgPSAnIzAwMCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiBldmVudC50YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpLCAxMDAwKVxuICB9XG5cbiAgZXh0ZXJuYWwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuc2V0dGluZ3NfX2NvbmZpZy1idXR0b24tLWRlZmF1bHQnOiBbYnV0dG9uLCBkZWZhdWx0QnRuXSxcbiAgICAgICcuc2V0dGluZ3NfX2NvbmZpZy1idXR0b24tLXNhdmUnOiBbYnV0dG9uLCBzYXZlQnRuXSxcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdEJ0biA9ICdEZWZhdWx0JztcbmNvbnN0IHNhdmVCdG4gPSAnU2F2ZSc7XG5cbmNvbnN0IHNldHRpbmdzID0gbmV3IFNldHRpbmdzKHtcbiAgY2xhc3NTZWxlY3RvcjogJ3NldHRpbmdzLXdyYXBwZXInLFxuICB0ZW1wbGF0ZTogU2V0dGluZ3NFbGVtZW50XG59KVxuZXhwb3J0IGRlZmF1bHQgc2V0dGluZ3M7XG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcbmltcG9ydCBob21lIGZyb20gXCIuL0hvbWVcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cblxubGV0IGNvbXBvbmVudHMgPSBbXG4gIHNldHRpbmdzLCBob21lLCBmb290ZXJcbl1cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudHM7IiwiaW1wb3J0IGNoYW5nZUVsZW1lbnRUZXh0IGZyb20gXCJAL3V0aWxzL2NoYW5nZUVsZW1lbnRUZXh0XCI7XG5pbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiQC91dGlscy9odG1sVG9FbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY2xhc3NTZWxlY3RvciA9IGNvbmZpZy5jbGFzc1NlbGVjdG9yO1xuICAgIHRoaXMudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3NTZWxlY3Rvcn1gKSB8fCBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zY2FsYWJsZSkge1xuICAgICAgaWYgKCF0aGlzLmVsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCB3aXRoICR7dGhpcy5jbGFzc1NlbGVjdG9yfSB3YXNuJ3QgZm91bmRgKTtcbiAgICAgIHRoaXMucmV3cml0ZVRhZygpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5lbCk7XG4gICAgfVxuICAgIHRoaXMuX2luaXRFeHRlcm5hbCgpO1xuICAgIHRoaXMuX2luaXRFdmVudHMoKTtcbiAgfVxuXG4gIF9pbml0RXZlbnRzKCkge1xuICAgIGlmICghdGhpcy5ldmVudHMpIHJldHVybjtcblxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cygpO1xuICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IGxpc3RlbmVyID0ga2V5LnNwbGl0KCcgJyk7XG4gICAgICBsZXQgY2xhc3NTZWxlY3RvciA9IGxpc3RlbmVyWzBdO1xuICAgICAgbGV0IGV2ZW50ID0gbGlzdGVuZXJbMV07XG4gICAgICBcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc1NlbGVjdG9yKTtcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA9PSAxKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzU2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50c1trZXldLmJpbmQodGhpcykpO1xuICAgICAgZWxzZVxuICAgICAgICBlbGVtZW50LmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRzW2tleV0uYmluZCh0aGlzKSkpO1xuICAgIH0pXG4gIH1cblxuICBfaW5pdEV4dGVybmFsKCkge1xuICAgIGlmICghdGhpcy5leHRlcm5hbCkgcmV0dXJuO1xuXG4gICAgbGV0IGV4dGVybmFsT2JqID0gdGhpcy5leHRlcm5hbCgpO1xuICAgIE9iamVjdC5rZXlzKGV4dGVybmFsT2JqKS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yID0gZGF0YTtcbiAgICAgIGxldCBlbGVtZW50ID0gZXh0ZXJuYWxPYmpbZGF0YV1bMF07XG4gICAgICBsZXQgdGV4dCA9IGV4dGVybmFsT2JqW2RhdGFdWzFdO1xuXG4gICAgICBsZXQgbmV3RWxlbWVudCA9IGNoYW5nZUVsZW1lbnRUZXh0KGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpLCB0ZXh0KTtcbiAgICAgIG5ld0VsZW1lbnQuaWQgPSBzZWxlY3Rvci5zcGxpdCgnLS0nKS5zbGljZSgtMSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICB9KVxuICB9XG5cbiAgcmV3cml0ZVRhZygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNsYXNzU2VsZWN0b3J9YCkuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc1NlbGVjdG9yfWApLmFwcGVuZENoaWxkKGh0bWxUb0VsZW1lbnQodGhpcy50ZW1wbGF0ZSkpO1xuICB9XG59IiwiaW1wb3J0IGdldEN1cnJlbnRVcmwgZnJvbSBcIkAvdXRpbHMvZ2V0VXJsXCI7XG5pbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiQC91dGlscy9odG1sVG9FbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbmZpZy5jb21wb25lbnRzO1xuICAgIHRoaXMucGFnZXMgPSBjb25maWcucGFnZXM7XG4gICAgdGhpcy5yb3V0ZXMgPSBjb25maWcucm91dGVzO1xuICB9XG5cbiAgcmVuZGVyQXBwKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29tcG9uZW50cyk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBjb25uZWN0KCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW5kZXIoKSlcbiAgICAvLyBpZiAodGhpcy5yb3V0ZXMpIHRoaXMucmVuZGVyUm91dGVzKCk7XG4gIH1cblxuICByZW5kZXJSb3V0ZXMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmNoYW5nZVJvdXRlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY2hhbmdlUm91dGUoKTtcbiAgfVxuXG4gIGNoYW5nZVJvdXRlKCkge1xuICAgIGxldCB1cmwgPSBnZXRDdXJyZW50VXJsKCk7XG4gICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXMuZmluZChoYXNoID0+IGhhc2gucGF0aC5zbGljZSgxKSA9PT0gdXJsKTtcbiAgICBpZiAocm91dGUpIHJvdXRlLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1vZHVsZSkge1xuICBtb2R1bGUucmVuZGVyQXBwKCk7XG59IiwiaW1wb3J0IGZvb3RlciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9TZXR0aW5nc1wiO1xuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IGhvbWVQYWdlID0gW2NvbXBvbmVudHMuc2V0dGluZ3MsIGNvbXBvbmVudHMubWFpbiwgY29tcG9uZW50cy5mb290ZXJdIiwiaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCB7IGhvbWVQYWdlIH0iLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gJy4vaW5kZXgnXG5cbmxldCByb3V0ZXMgPSBbXG4gIHtwYXRoOiAnIycsIGNvbXBvbmVudDogaG9tZVBhZ2V9XG5dXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbWVudCwgdGV4dCkge1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaGFzaCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q3VycmVudFVybCgpIHtcbiAgcmV0dXJuIGxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGh0bWxFbGVtZW50KSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbEVsZW1lbnQ7XG4gIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiAwLjJzO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNGRkJDQTI7XFxufVxcblxcbi5jbGlja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL0J1dHRvbi9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTRCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQWpDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBK0JBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUF2QkY7QUF3QkU7RUFDRSxtQkFoQlc7QUFOZjs7QUEwQkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUF2QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGJ1dHRvbi1sYXlvdXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbkBtaXhpbiBmbGV4LWNvbHVtbigkaGVpZ2h0KSB7XFxuICBAaWYgJGhlaWdodCB7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG4gIH1cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyLXBvc2l0aW9uKCR3aWR0aCkge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4kY2F0ZWdvcmllcy1mb250LXNpemU6IDIwcHg7XFxuJG5hdmlnYXRpb24tZm9udC1zaXplOiAyMnB4O1xcbiRtZWRpdW0tZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4kb3JhbmdlLWNvbG9yOiAjRkZCQ0EyO1xcblxcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IGFsbCAxcyBlYXNlLWluLW91dDtcXG4uYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIEBpbmNsdWRlIGJ1dHRvbi1sYXlvdXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLWluIC4ycztcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlLWNvbG9yO1xcbiAgfVxcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXJfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogOTIlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyX19kZXZlbG9wZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNSU7XFxufVxcbi5mb290ZXJfX25hbWUge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLmZvb3Rlcl9fbGluayB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5mb290ZXJfX2xpbms6aG92ZXIge1xcbiAgY29sb3I6ICNGRkJDQTI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE2QkU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQTVCSjtBQThCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQTVCSjtBQThCRTtFQUNFLFVBQUE7QUE1Qko7QUE4QkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQTVCSjtBQThCRTtFQUNFLGNBekJXO0FBSGZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGJ1dHRvbi1sYXlvdXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbkBtaXhpbiBmbGV4LWNvbHVtbigkaGVpZ2h0KSB7XFxuICBAaWYgJGhlaWdodCB7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG4gIH1cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyLXBvc2l0aW9uKCR3aWR0aCkge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4kY2F0ZWdvcmllcy1mb250LXNpemU6IDIwcHg7XFxuJG5hdmlnYXRpb24tZm9udC1zaXplOiAyMnB4O1xcbiRtZWRpdW0tZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4kb3JhbmdlLWNvbG9yOiAjRkZCQ0EyO1xcblxcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IGFsbCAxcyBlYXNlLWluLW91dDtcXG4uZm9vdGVyIHtcXG4gICZfX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MiU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAmX19kZXZlbG9wZXItaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gIH1cXG4gICZfX25hbWUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgJl9fbGluayB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxuICAmX19saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6ICRvcmFuZ2UtY29sb3I7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21haW4tYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmhvbWVfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uaG9tZV9fbG9nbyB7XFxuICB3aWR0aDogNDUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMCU7XFxufVxcbi5ob21lX19pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ob21lX19idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNjIlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5ob21lX19idXR0b24ge1xcbiAgaGVpZ2h0OiA2MnB4O1xcbiAgd2lkdGg6IDQ4JTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL0hvbWUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE0QkE7RUFDRSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQTNCRjtBQTRCRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBMUJKO0FBNEJFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTFCSjtBQTRCRTtFQUNFLFdBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQTNCSjtBQTZCRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBM0JKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBidXR0b24tbGF5b3V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jb2x1bW4oJGhlaWdodCkge1xcbiAgQGlmICRoZWlnaHQge1xcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB9XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1peGluIGNlbnRlci1wb3NpdGlvbigkd2lkdGgpIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuJGNhdGVnb3JpZXMtZm9udC1zaXplOiAyMHB4O1xcbiRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTogMjJweDtcXG4kbWVkaXVtLWZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuJG9yYW5nZS1jb2xvcjogI0ZGQkNBMjtcXG5cXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuLmhvbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9tYWluLWJhY2tncm91bmQuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAmX19jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG4gICZfX2xvZ28ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbiAgfVxcbiAgJl9faW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmX19idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogNjIlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG4gICZfX2J1dHRvbiB7XFxuICAgIGhlaWdodDogNjJweDtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc2V0dGluZ3MtYnRuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrLWFycm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9jbG9zZS1idG4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21pbnVzLWJ0bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcGx1cy1idG4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zZXR0aW5ncyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5zZXR0aW5nc19fY29udGFpbmVyIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHdpZHRoOiA5MiU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnNldHRpbmdzX19vcGVuLWNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQlO1xcbiAgbGVmdDogLTUlO1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbi5zZXR0aW5nc19faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tbGVmdDogMiU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuLnNldHRpbmdzX19oZWFkZXItdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcbi5zZXR0aW5nc19faGVhZGVyLXRleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTE1JTtcXG4gIGxlZnQ6IC00NSU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG4uc2V0dGluZ3NfX2hlYWRlci1idG4ge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcbi5zZXR0aW5nc19faW5uZXIge1xcbiAgaGVpZ2h0OiA1NSU7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uc2V0dGluZ3NfX3ZvbHVtZSB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxuICB3aWR0aDogMjMlO1xcbiAgaGVpZ2h0OiAyMyU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNldHRpbmdzX19zbGlkZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkZCQ0EyIDAlLCAjRkZCQ0EyIDUwJSwgI0E0QTRBNCA1MCUsICNBNEE0QTQgMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiAzNTZweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLnNldHRpbmdzX19zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZXR0aW5nc19fc2xpZGVyLWljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZXR0aW5nc19fY2hlY2sge1xcbiAgaGVpZ2h0OiAxNiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAyMyU7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbn1cXG4uc2V0dGluZ3NfX3RleHQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2V0dGluZ3NfX2NoZWNrYm94IGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZSwgLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5zZXR0aW5nc19fY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICNGRkJDQTI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG4uc2V0dGluZ3NfX2NoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YWZ0ZXIge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB0b3A6IC0yMHB4O1xcbiAgcmlnaHQ6IC04M3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgdG9wOiAtMjBweDtcXG4gIHJpZ2h0OiAtNjBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5zZXR0aW5nc19fdGltZSB7XFxuICBoZWlnaHQ6IDE4JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDE2JTtcXG59XFxuLnNldHRpbmdzX19mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNDUlO1xcbn1cXG4uc2V0dGluZ3NfX251bWJlciB7XFxuICBtYXJnaW4tdG9wOiA0JTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5zZXR0aW5nc19fYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1heC13aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuLnNldHRpbmdzX19idXR0b24tLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcbi5zZXR0aW5nc19fYnV0dG9uLS1wbHVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcbi5zZXR0aW5nc19fY29uZmlnIHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDYlO1xcbn1cXG4uc2V0dGluZ3NfX2NvbmZpZy13cmFwcGVyIHtcXG4gIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNDAlO1xcbn1cXG4uc2V0dGluZ3NfX2NvbmZpZy1idXR0b24ge1xcbiAgd2lkdGg6IDQ5JTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gIGFuaW1hdGlvbjogYmFycmVsUm9sbCAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBiYXJyZWxSb2xsIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5oaWRkZW4ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE0QkE7RUFDRSxZQUFBO0FBM0JGO0FBNkJFO0VBQ0UsZUFBQTtFQWRGLFVBZTJCO0VBZDNCLGNBQUE7QUFaRjtBQTRCRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQXZDRixVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBcUNFLHlEQUFBO0FBdEJKO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBdEJKO0FBd0JFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFqQ21CO0FBV3ZCO0FBd0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF0Qko7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQXJFRixVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBbUVFLHlEQUFBO0FBbkJKO0FBc0JFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCSjtBQXNCRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUF6RUEsV0EwRXFCO0VBeEV2QixhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQXFERjtBQW1CRTtFQUNFLHlGQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBakJKO0FBbUJFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFqQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFqQko7QUFvQkU7RUFuR0UsV0FvR3FCO0VBbEd2QixhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQWlHRSxVQUFBO0VBQ0EsbUJBQUE7QUFmSjtBQWlCRTtFQUNFLGVBN0ZtQjtFQThGbkIsZ0JBN0ZpQjtBQThFckI7QUFpQkU7RUFDRSxhQUFBO0FBZko7QUFpQkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWZKO0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQWZKO0FBaUJFO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBaEJGO0FBa0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFoQko7QUFrQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBaEJKO0FBa0JFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWhCSjtBQW1CRTtFQXRKRSxXQXVKcUI7RUFySnZCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBb0pFLFVBQUE7QUFkSjtBQWdCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFkSjtBQWdCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBckppQjtBQXVJckI7QUFnQkU7RUE3S0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQTJLRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFWSjtBQVlFO0VBQ0UseURBQUE7QUFWSjtBQVlFO0VBQ0UseURBQUE7QUFWSjtBQWFFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFYSjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBWEo7QUFhRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBWEo7O0FBZUE7RUFDRSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQVpGOztBQWVBO0VBQ0U7SUFBSywrQkFBQTtFQVhMO0VBWUE7SUFBTyxpQ0FBQTtFQVRQO0FBQ0Y7QUFXQTtFQUVFLDhCQWhNbUI7RUFpTW5CLGVBQUE7QUFWRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gYnV0dG9uLWxheW91dCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuQG1peGluIGZsZXgtY29sdW1uKCRoZWlnaHQpIHtcXG4gIEBpZiAkaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgfVxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtaXhpbiBjZW50ZXItcG9zaXRpb24oJHdpZHRoKSB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiRjYXRlZ29yaWVzLWZvbnQtc2l6ZTogMjBweDtcXG4kbmF2aWdhdGlvbi1mb250LXNpemU6IDIycHg7XFxuJG1lZGl1bS1mb250LXdlaWdodDogNTAwO1xcblxcbiRvcmFuZ2UtY29sb3I6ICNGRkJDQTI7XFxuXFxuJHRyYW5zaXRpb24tZGVmYXVsdDogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbi5zZXR0aW5ncyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvLyB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICAmX19jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIEBpbmNsdWRlIGNlbnRlci1wb3NpdGlvbig5MiUpO1xcbiAgfVxcbiAgJl9fb3Blbi1jbG9zZS1idG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0JTtcXG4gICAgbGVmdDogLTUlO1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBAaW5jbHVkZSBidXR0b24tbGF5b3V0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3NldHRpbmdzLWJ0bi5zdmcpO1xcbiAgfVxcbiAgJl9faGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgfVxcbiAgJl9faGVhZGVyLXRleHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAkbmF2aWdhdGlvbi1mb250LXNpemU7XFxuICB9XFxuICAmX19oZWFkZXItdGV4dDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTUlO1xcbiAgICBsZWZ0OiAtNDUlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2JhY2stYXJyb3cuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDM0cHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gIH1cXG5cXG4gICZfX2hlYWRlci1idG4ge1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBAaW5jbHVkZSBidXR0b24tbGF5b3V0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2Nsb3NlLWJ0bi5zdmcpO1xcbiAgfVxcblxcbiAgJl9faW5uZXIge1xcbiAgICBoZWlnaHQ6IDU1JTtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwOztcXG4gIH1cXG4gICZfX3ZvbHVtZSB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbiAgICB3aWR0aDogMjMlO1xcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigyMyUpO1xcbiAgfVxcbiAgJl9fc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkb3JhbmdlLWNvbG9yIDAlLCAkb3JhbmdlLWNvbG9yIDUwJSwgI0E0QTRBNCA1MCUsICNBNEE0QTQgMTAwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiAzNTZweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG4gICZfX3NsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxNnB4OyBcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gICZfX3NsaWRlci1pY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gICZfX2NoZWNrIHtcXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oMTYlKTtcXG4gICAgd2lkdGg6IDIzJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcXG4gIH1cXG4gICZfX3RleHQge1xcbiAgICBmb250LXNpemU6ICRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTtcXG4gICAgZm9udC13ZWlnaHQ6ICRtZWRpdW0tZm9udC13ZWlnaHQ7XFxuICB9XFxuICAmX19jaGVja2JveCBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAmX19jaGVja2JveCBsYWJlbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG4gIH1cXG4gICZfX2NoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgJl9fY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXStsYWJlbDpiZWZvcmUsXFxuICAmX19jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdK2xhYmVsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAmX19jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdK2xhYmVsOmJlZm9yZSB7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZCQ0EyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgJl9fY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXStsYWJlbDphZnRlciB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIHJpZ2h0OiAtODNweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XFxuICB9XFxuICAmX19jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICByaWdodDogLTYwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICB9XFxuXFxuICAmX190aW1lIHtcXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oMTglKTtcXG4gICAgd2lkdGg6IDE2JTtcXG4gIH1cXG4gICZfX2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA0NSU7XFxuICB9XFxuICAmX19udW1iZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0JTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogJG1lZGl1bS1mb250LXdlaWdodDtcXG4gIH1cXG4gICZfX2J1dHRvbiB7XFxuICAgIEBpbmNsdWRlIGJ1dHRvbi1sYXlvdXQ7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1heC13aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgfVxcbiAgJl9fYnV0dG9uLS1taW51cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvbWludXMtYnRuLnN2Zyk7XFxuICB9XFxuICAmX19idXR0b24tLXBsdXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3BsdXMtYnRuLnN2Zyk7XFxuICB9XFxuXFxuICAmX19jb25maWcge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiA2JTtcXG4gIH1cXG4gICZfX2NvbmZpZy13cmFwcGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxuICAmX19jb25maWctYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ5JTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgYW5pbWF0aW9uOiBiYXJyZWxSb2xsIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJhcnJlbFJvbGwge1xcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgLy8gZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlZmF1bHQ7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcbi8vIGRpdjpob3ZlciA+IGJ1dHRvbiB7XFxuICAvLyBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gIC8vIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxuLy8gfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vZm9udHMvZ2lscm95L2dpbHJveS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lscm95XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ub3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2V0dGluZ3Mtd3JhcHBlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICBoZWlnaHQ6IDk1JTtcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mb290ZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQ2RtQjtFRGVuQixXQUFBO0FBN0JGOztBQWdDQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQTdCRjs7QUFnQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkN0Qm1CO0FEUHJCOztBQWdDQTtFQUNFLFVBQUE7QUE3QkY7O0FBK0JBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQTVCRjs7QUErQkE7RUFDRSxZQUFBO0FBNUJGOztBQThCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUEzQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGJ1dHRvbi1sYXlvdXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbkBtaXhpbiBmbGV4LWNvbHVtbigkaGVpZ2h0KSB7XFxuICBAaWYgJGhlaWdodCB7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG4gIH1cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyLXBvc2l0aW9uKCR3aWR0aCkge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4kY2F0ZWdvcmllcy1mb250LXNpemU6IDIwcHg7XFxuJG5hdmlnYXRpb24tZm9udC1zaXplOiAyMnB4O1xcbiRtZWRpdW0tZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4kb3JhbmdlLWNvbG9yOiAjRkZCQ0EyO1xcblxcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IGFsbCAxcyBlYXNlLWluLW91dDtcXG5AaW1wb3J0IFxcXCIuLi9mb250cy9naWxyb3kvZ2lscm95LmNzc1xcXCI7XFxuQGltcG9ydCBcXFwibm9ybWFsaXplLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwidmFycy5zY3NzXFxcIjtcXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gIGZvbnQtd2VpZ2h0OiAkbWVkaXVtLWZvbnQtd2VpZ2h0O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlZmF1bHQ7XFxufVxcblxcbi5vcGFjaXR5IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5zZXR0aW5ncy13cmFwcGVyIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIGhlaWdodDogOTUlO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmZvb3Rlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogODBweDtcXG59XCIsXCJAbWl4aW4gYnV0dG9uLWxheW91dCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuQG1peGluIGZsZXgtY29sdW1uKCRoZWlnaHQpIHtcXG4gIEBpZiAkaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgfVxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtaXhpbiBjZW50ZXItcG9zaXRpb24oJHdpZHRoKSB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiRjYXRlZ29yaWVzLWZvbnQtc2l6ZTogMjBweDtcXG4kbmF2aWdhdGlvbi1mb250LXNpemU6IDIycHg7XFxuJG1lZGl1bS1mb250LXdlaWdodDogNTAwO1xcblxcbiRvcmFuZ2UtY29sb3I6ICNGRkJDQTI7XFxuXFxuJHRyYW5zaXRpb24tZGVmYXVsdDogYWxsIDFzIGVhc2UtaW4tb3V0O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiR2lscm95LVJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiR2lscm95LVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiR2lscm95LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiR2lscm95LUV4dHJhYm9sZEl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktRXh0cmFib2xkSXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiR2lscm95LUV4dHJhYm9sZEl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiR2lscm95LUV4dHJhYm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQm9sZC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIkdpbHJveS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQmxhY2suZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIkdpbHJveS1CbGFjay53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQmxhY2sud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcIkdpbHJveS1MaWdodC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiR2lscm95LUxpZ2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIkdpbHJveS1MaWdodC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fID0gbmV3IFVSTChcIkdpbHJveS1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18gPSBuZXcgVVJMKFwiR2lscm95LVNlbWlib2xkLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktU2VtaWJvbGQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18gPSBuZXcgVVJMKFwiR2lscm95LVNlbWlib2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18gPSBuZXcgVVJMKFwiR2lscm95LVNlbWlib2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTWVkaXVtLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTWVkaXVtLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fID0gbmV3IFVSTChcIkdpbHJveS1NZWRpdW0ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTWVkaXVtSXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTWVkaXVtSXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fID0gbmV3IFVSTChcIkdpbHJveS1NZWRpdW1JdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTWVkaXVtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQmxhY2tJdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMzX19fID0gbmV3IFVSTChcIkdpbHJveS1CbGFja0l0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQmxhY2tJdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQmxhY2tJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM2X19fID0gbmV3IFVSTChcIkdpbHJveS1VbHRyYUxpZ2h0LmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zN19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVWx0cmFMaWdodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVWx0cmFMaWdodC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM5X19fID0gbmV3IFVSTChcIkdpbHJveS1VbHRyYUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktUmVndWxhckl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDFfX18gPSBuZXcgVVJMKFwiR2lscm95LVJlZ3VsYXJJdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDJfX18gPSBuZXcgVVJMKFwiR2lscm95LVJlZ3VsYXJJdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80M19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktUmVndWxhckl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDRfX18gPSBuZXcgVVJMKFwiR2lscm95LVNlbWlib2xkSXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80NV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktU2VtaWJvbGRJdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDZfX18gPSBuZXcgVVJMKFwiR2lscm95LVNlbWlib2xkSXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDdfX18gPSBuZXcgVVJMKFwiR2lscm95LVNlbWlib2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80OF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktSGVhdnlJdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ5X19fID0gbmV3IFVSTChcIkdpbHJveS1IZWF2eUl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81MF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktSGVhdnlJdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81MV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktSGVhdnlJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUyX19fID0gbmV3IFVSTChcIkdpbHJveS1FeHRyYWJvbGQuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUzX19fID0gbmV3IFVSTChcIkdpbHJveS1FeHRyYWJvbGQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTRfX18gPSBuZXcgVVJMKFwiR2lscm95LUV4dHJhYm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU1X19fID0gbmV3IFVSTChcIkdpbHJveS1FeHRyYWJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU2X19fID0gbmV3IFVSTChcIkdpbHJveS1Cb2xkSXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81N19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQm9sZEl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81OF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQm9sZEl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU5X19fID0gbmV3IFVSTChcIkdpbHJveS1Cb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82MF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjFfX18gPSBuZXcgVVJMKFwiR2lscm95LVVsdHJhTGlnaHRJdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjJfX18gPSBuZXcgVVJMKFwiR2lscm95LVVsdHJhTGlnaHRJdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82M19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjRfX18gPSBuZXcgVVJMKFwiR2lscm95LUxpZ2h0SXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82NV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTGlnaHRJdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjZfX18gPSBuZXcgVVJMKFwiR2lscm95LUxpZ2h0SXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjdfX18gPSBuZXcgVVJMKFwiR2lscm95LUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82OF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktSGVhdnkuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY5X19fID0gbmV3IFVSTChcIkdpbHJveS1IZWF2eS53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83MF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktSGVhdnkud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83MV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktSGVhdnkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzcyX19fID0gbmV3IFVSTChcIkdpbHJveS1UaGluLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83M19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVGhpbi53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83NF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVGhpbi53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc1X19fID0gbmV3IFVSTChcIkdpbHJveS1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83Nl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVGhpbkl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzdfX18gPSBuZXcgVVJMKFwiR2lscm95LVRoaW5JdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzhfX18gPSBuZXcgVVJMKFwiR2lscm95LVRoaW5JdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83OV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVGhpbkl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNl9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQwX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDRfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80NV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80Nl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80N19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80OF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80OF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUyX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzcwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzcxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTZfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81N19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81OF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81OV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82MF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82MF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83OF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83OV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY0X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzgyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzgzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjhfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82OV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83MF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83MV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83Ml9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83Ml9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzczX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc2X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzlfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgUmVndWxhcicpLCBsb2NhbCgnR2lscm95LVJlZ3VsYXInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgRXh0cmFib2xkIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUV4dHJhYm9sZEl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgQm9sZCcpLCBsb2NhbCgnR2lscm95LUJvbGQnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgQmxhY2snKSwgbG9jYWwoJ0dpbHJveS1CbGFjaycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IExpZ2h0JyksIGxvY2FsKCdHaWxyb3ktTGlnaHQnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBTZW1pYm9sZCcpLCBsb2NhbCgnR2lscm95LVNlbWlib2xkJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgTWVkaXVtJyksIGxvY2FsKCdHaWxyb3ktTWVkaXVtJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgTWVkaXVtIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LU1lZGl1bUl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzhfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEJsYWNrIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUJsYWNrSXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80Ml9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80M19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgVWx0cmFMaWdodCcpLCBsb2NhbCgnR2lscm95LVVsdHJhTGlnaHQnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBSZWd1bGFyIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LVJlZ3VsYXJJdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUxX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUzX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBTZW1pYm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1TZW1pYm9sZEl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNThfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81OV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82MF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEhlYXZ5IEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUhlYXZ5SXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82MV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82Ml9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82M19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgRXh0cmFib2xkJyksIGxvY2FsKCdHaWxyb3ktRXh0cmFib2xkJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82Nl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82N19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82OF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzY5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzcwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1Cb2xkSXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83MV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83Ml9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83M19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83NV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFVsdHJhTGlnaHQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktVWx0cmFMaWdodEl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzhfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83OV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84MF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUxpZ2h0SXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84MV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84Ml9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84M19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgSGVhdnknKSwgbG9jYWwoJ0dpbHJveS1IZWF2eScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODhfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84OV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85MF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFRoaW4nKSwgbG9jYWwoJ0dpbHJveS1UaGluJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85MV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85Ml9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85M19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgVGhpbiBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1UaGluSXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85Nl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85N19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85OF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzk5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9udHMvZ2lscm95L2dpbHJveS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQThCO0lBQzlCOzs7O2tFQUlnRDtJQUNoRCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFzQztJQUN0Qzs7OztrRUFJd0Q7SUFDeEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBMkI7SUFDM0I7Ozs7bUVBSTZDO0lBQzdDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTRCO0lBQzVCOzs7O21FQUk4QztJQUM5QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUE0QjtJQUM1Qjs7OzttRUFJOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBK0I7SUFDL0I7Ozs7bUVBSWlEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTZCO0lBQzdCOzs7O21FQUkrQztJQUMvQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFtQztJQUNuQzs7OzttRUFJcUQ7SUFDckQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBa0M7SUFDbEM7Ozs7bUVBSW9EO0lBQ3BELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQWlDO0lBQ2pDOzs7O21FQUltRDtJQUNuRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFvQztJQUNwQzs7OzttRUFJc0Q7SUFDdEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBcUM7SUFDckM7Ozs7bUVBSXVEO0lBQ3ZELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQWtDO0lBQ2xDOzs7O21FQUlvRDtJQUNwRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFnQztJQUNoQzs7OzttRUFJa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBaUM7SUFDakM7Ozs7bUVBSW1EO0lBQ25ELGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQXVDO0lBQ3ZDOzs7O21FQUl5RDtJQUN6RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFrQztJQUNsQzs7OzttRUFJb0Q7SUFDcEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNEI7SUFDNUI7Ozs7bUVBSThDO0lBQzlDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTJCO0lBQzNCOzs7O21FQUk2QztJQUM3QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFpQztJQUNqQzs7OzttRUFJbUQ7SUFDbkQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LVJlZ3VsYXIuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBSZWd1bGFyJyksIGxvY2FsKCdHaWxyb3ktUmVndWxhcicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktUmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1FeHRyYWJvbGRJdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBFeHRyYWJvbGQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktRXh0cmFib2xkSXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1FeHRyYWJvbGRJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUV4dHJhYm9sZEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUV4dHJhYm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1FeHRyYWJvbGRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktQm9sZC5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEJvbGQnKSwgbG9jYWwoJ0dpbHJveS1Cb2xkJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1Cb2xkLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1CbGFjay5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEJsYWNrJyksIGxvY2FsKCdHaWxyb3ktQmxhY2snKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJsYWNrLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1CbGFjay53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJsYWNrLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUxpZ2h0LmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgTGlnaHQnKSwgbG9jYWwoJ0dpbHJveS1MaWdodCcpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTGlnaHQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUxpZ2h0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktU2VtaWJvbGQuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBTZW1pYm9sZCcpLCBsb2NhbCgnR2lscm95LVNlbWlib2xkJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1TZW1pYm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktU2VtaWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1TZW1pYm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1TZW1pYm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1NZWRpdW0uZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBNZWRpdW0nKSwgbG9jYWwoJ0dpbHJveS1NZWRpdW0nKSxcXG4gICAgICAgIHVybCgnR2lscm95LU1lZGl1bS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1NZWRpdW1JdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBNZWRpdW0gSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktTWVkaXVtSXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1NZWRpdW1JdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LU1lZGl1bUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LU1lZGl1bUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1NZWRpdW1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktQmxhY2tJdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBCbGFjayBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1CbGFja0l0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQmxhY2tJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJsYWNrSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQmxhY2tJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQmxhY2tJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktVWx0cmFMaWdodC5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFVsdHJhTGlnaHQnKSwgbG9jYWwoJ0dpbHJveS1VbHRyYUxpZ2h0JyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVWx0cmFMaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LVJlZ3VsYXJJdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBSZWd1bGFyIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LVJlZ3VsYXJJdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVJlZ3VsYXJJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVJlZ3VsYXJJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1SZWd1bGFySXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVJlZ3VsYXJJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktU2VtaWJvbGRJdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBTZW1pYm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1TZW1pYm9sZEl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktU2VtaWJvbGRJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVNlbWlib2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktU2VtaWJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktU2VtaWJvbGRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktSGVhdnlJdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBIZWF2eSBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1IZWF2eUl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktSGVhdnlJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUhlYXZ5SXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktSGVhdnlJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktSGVhdnlJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktRXh0cmFib2xkLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgRXh0cmFib2xkJyksIGxvY2FsKCdHaWxyb3ktRXh0cmFib2xkJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1FeHRyYWJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUV4dHJhYm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUV4dHJhYm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1FeHRyYWJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktQm9sZEl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEJvbGQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktQm9sZEl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQm9sZEl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQm9sZEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFVsdHJhTGlnaHQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktVWx0cmFMaWdodEl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVVsdHJhTGlnaHRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVWx0cmFMaWdodEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1MaWdodEl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUxpZ2h0SXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1MaWdodEl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTGlnaHRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1MaWdodEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1MaWdodEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1IZWF2eS5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEhlYXZ5JyksIGxvY2FsKCdHaWxyb3ktSGVhdnknKSxcXG4gICAgICAgIHVybCgnR2lscm95LUhlYXZ5LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1IZWF2eS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUhlYXZ5LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUhlYXZ5LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LVRoaW4uZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBUaGluJyksIGxvY2FsKCdHaWxyb3ktVGhpbicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVGhpbi5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVGhpbi53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVRoaW4ud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1UaGluSXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgVGhpbiBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1UaGluSXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1UaGluSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1UaGluSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVGhpbkl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1UaGluSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG4gaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7Q0FFRDtFQUNDLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG4gaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiPjwvYnV0dG9uPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcnMtbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2xvZ29cXFwiPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImZvb3Rlcl9faW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIlJTIFNjaG9vbCBsb2dvXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fZGV2ZWxvcGVyLWluZm9cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fbmFtZVxcXCI+RGV2ZWxvcGVkIGJ5IDxhIGNsYXNzPVxcXCJmb290ZXJfX2xpbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9zdGFyZmF5ZXJcXFwiPnN0YXJmYXllcjwvYT48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX3llYXJcXFwiPjIwMjE8L2Rpdj5cXG4gICAgPC9kaXY+ICBcXG4gIDwvZGl2PlxcbjwvZm9vdGVyPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYXJ0UXVpei1sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxtYWluIGNsYXNzPVxcXCJob21lXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImhvbWVfX2NvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhvbWVfX2xvZ29cXFwiPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcImhvbWVfX2ltZ1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJBcnQgUXVpeiBsb2dvXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhvbWVfX2J1dHRvbi1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhvbWVfX2J1dHRvbiBob21lX19idXR0b24tLWFydGlzdHNcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhvbWVfX2J1dHRvbiBob21lX19idXR0b24tLXBpY3R1cmVzXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L21haW4+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tdXRlLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2xvdWQtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwic2V0dGluZ3MgaGlkZGVuXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fb3Blbi1jbG9zZVxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2V0dGluZ3NfX29wZW4tY2xvc2UtYnRuXFxcIiBpZD1cXFwic2V0dGluZ3NcXFwiPjwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2hlYWRlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2hlYWRlci10ZXh0XFxcIj5TZXR0aW5nczwvZGl2PlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcInNldHRpbmdzX19oZWFkZXItYnRuXFxcIj48L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19pbm5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3ZvbHVtZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fdGl0bGVcXFwiPlZvbHVtZTwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3NsaWRlci1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9J3NldHRpbmdzX19zbGlkZXInIHR5cGU9J3JhbmdlJyBtaW49JzAnIG1heD0nMTAwJz5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3NsaWRlci1pY29uc1xcXCI+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic2V0dGluZ3NfX2ljb25cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwibXV0ZSBpY29uXFxcIj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJzZXR0aW5nc19faWNvblxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJsb3VkIGljb25cXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19jaGVja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fdGl0bGVcXFwiPlRpbWUgZ2FtZTwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NoZWNrLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX190ZXh0XFxcIj5PbjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY2hlY2tib3hcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwiY2hlY2tib3gtY2F0czFcXFwiIGlkPVxcXCJjaGVja2JveC0xXFxcIiB2YWx1ZT1cXFwiMVxcXCIgY2hlY2tlZD5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjaGVja2JveC0xXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX190aW1lXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX190aXRsZVxcXCI+VGltZSB0byBhbnN3ZXI8L2Rpdj5cXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJzZXR0aW5nc19fZm9ybVxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNldHRpbmdzX19idXR0b24gc2V0dGluZ3NfX2J1dHRvbi0tbWludXNcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fbnVtYmVyXFxcIj4wPC9kaXY+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNldHRpbmdzX19idXR0b24gc2V0dGluZ3NfX2J1dHRvbi0tcGx1c1xcXCI+PC9idXR0b24+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY29uZmlnXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY29uZmlnLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbmZpZy1idXR0b24gc2V0dGluZ3NfX2NvbmZpZy1idXR0b24tLWRlZmF1bHRcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbmZpZy1idXR0b24gc2V0dGluZ3NfX2NvbmZpZy1idXR0b24tLXNhdmVcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PiAgXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+ICBcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0ICdAL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuaW1wb3J0IE1vZHVsZSBmcm9tICcuL2FwcC9jb3JlL21vZHVsZSc7XG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL2FwcC9jb21wb25lbnRzLyc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vYXBwL3BhZ2VzL3JvdXRlcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYXBwL2NvcmUvcmVuZGVyJztcblxuY2xhc3MgQXBwTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxufVxuXG5jb25zdCBhcHBNb2R1bGUgPSBuZXcgQXBwTW9kdWxlKHtcbiAgY29tcG9uZW50cyxcbiAgcm91dGVzXG4gIC8vIHBhZ2VzOiBwYWdlcyxcbn0pXG5cbnJlbmRlcihhcHBNb2R1bGUpOyJdLCJuYW1lcyI6WyJCdXR0b25FbGVtZW50IiwiQ29tcG9uZW50IiwiaHRtbFRvRWxlbWVudCIsImJ1dHRvbiIsIkZvb3RlckVsZW1lbnQiLCJGb290ZXIiLCJjb25maWciLCJmb290ZXIiLCJjbGFzc1NlbGVjdG9yIiwidGVtcGxhdGUiLCJIb21lRWxlbWVudCIsImNoYW5nZUhhc2giLCJNYWluIiwiYXJ0aXN0QnRuIiwicGljdHVyZUJ0biIsImRlbGF5Q2xpY2siLCJldmVudCIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsImhhc2hTZWxlY3RvciIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJzcGxpdCIsInBvcCIsImhvbWUiLCJTZXR0aW5nc0VsZW1lbnQiLCJvcGVuU2V0dGluZ3MiLCJTZXR0aW5ncyIsImNoYW5nZVZvbHVtZSIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYXgiLCJkZWZhdWx0QnRuIiwic2F2ZUJ0biIsInNldHRpbmdzIiwiY29tcG9uZW50cyIsImNoYW5nZUVsZW1lbnRUZXh0IiwiZWwiLCJzY2FsYWJsZSIsIkVycm9yIiwicmV3cml0ZVRhZyIsImNvbnNvbGUiLCJsb2ciLCJfaW5pdEV4dGVybmFsIiwiX2luaXRFdmVudHMiLCJldmVudHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImxpc3RlbmVyIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsImV4dGVybmFsIiwiZXh0ZXJuYWxPYmoiLCJkYXRhIiwic2VsZWN0b3IiLCJ0ZXh0IiwibmV3RWxlbWVudCIsImNsb25lTm9kZSIsImlkIiwic2xpY2UiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImdldEN1cnJlbnRVcmwiLCJNb2R1bGUiLCJwYWdlcyIsInJvdXRlcyIsImNvbm5lY3QiLCJjIiwicmVuZGVyIiwid2luZG93IiwiY2hhbmdlUm91dGUiLCJ1cmwiLCJyb3V0ZSIsImZpbmQiLCJoYXNoIiwicGF0aCIsImNvbXBvbmVudCIsIm1vZHVsZSIsInJlbmRlckFwcCIsImhvbWVQYWdlIiwibWFpbiIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJodG1sRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIkFwcE1vZHVsZSIsImFwcE1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=