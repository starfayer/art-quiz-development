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





var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/app/components/assets/artMain-logo.jpg */ "./src/app/components/assets/artMain-logo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_gilroy_gilroy_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  background-color: #000;\n  overflow: hidden;\n  font-family: \"Gilroy\";\n  font-weight: 500;\n  color: #fff;\n}\n\n.background {\n  height: inherit;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n.settings-wrapper {\n  position: absolute;\n  width: 100%;\n  transform: translateX(100%);\n  height: 95%;\n}\n\n.main-wrapper {\n  height: 100%;\n}\n\n.footer-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 80px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAgCA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBCdmB;EDenB,WAAA;AA7BF;;AAgCA;EACE,eAAA;EACA,yDAAA;EACA,sBAAA;AA7BF;;AA+BA;EACE,kBAAA;EACA,WAAA;EACA,2BAAA;EACA,WAAA;AA5BF;;AA+BA;EACE,YAAA;AA5BF;;AA8BA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;AA3BF","sourcesContent":["@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;\n@import \"../fonts/gilroy/gilroy.css\";\n@import \"normalize.css\";\n@import \"vars.scss\";\n\nbody {\n  height: 100vh;\n  background-color: #000;\n  overflow: hidden;\n  font-family: 'Gilroy';\n  font-weight: $medium-font-weight;\n  color: #fff;\n}\n\n.background {\n  height: inherit;\n  background-image: url(/src/app/components/assets/artMain-logo.jpg);\n  background-size: cover;\n}\n.settings-wrapper {\n  position: absolute;\n  width: 100%;\n  transform: translateX(100%);\n  height: 95%;\n}\n\n.main-wrapper {\n  height: 100%;\n}\n.footer-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 80px;\n}","@mixin button-layout {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  background-size: 100% 100%;\n}\n\n@mixin flex-column($height) {\n  @if $height {\n    height: $height;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@mixin center-position($width) {\n  width: $width;\n  margin: 0 auto;\n}\n$categories-font-size: 20px;\n$navigation-font-size: 22px;\n$medium-font-weight: 500;\n\n$orange-color: #FFBCA2;\n\n$transition-default: all 1s ease-in-out;"],"sourceRoot":""}]);
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
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQwIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDQ0MCAxNjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjgyLjE2ODciIGN5PSI4Mi4xNjg3IiByPSI4MC44NDM0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjUwNiIvPgo8Y2lyY2xlIGN4PSIxNjQuMzM3IiBjeT0iODIuMTY4NyIgcj0iODAuODQzNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjY1MDYiLz4KPHBhdGggZD0iTTEwOS43NTcgMTEyLjY1MUg5My4wNTgyTDg4LjM4MjUgOTguNjIzNkg1Ny4zMjI4TDUyLjY0NzEgMTEyLjY1MUgzNi4wNTk2TDYzLjMzNDMgMzQuNzIyOUg4Mi4zNzFMMTA5Ljc1NyAxMTIuNjUxWk03Mi45MDgzIDUyLjQyMzZMNjIuMjIxMSA4NC4yNjI2SDgzLjU5NTVMNzIuOTA4MyA1Mi40MjM2Wk0xMjguNTkzIDU2Ljk4NzlWNjYuNTYxOUMxMjkuODU1IDYzLjA3MzcgMTMyLjAwNyA2MC40MzkgMTM1LjA1IDU4LjY1NzhDMTM4LjA5MyA1Ni44MDI0IDE0MS41ODEgNTUuODc0NyAxNDUuNTE1IDU1Ljg3NDdWNzEuOTA1NUMxNDEuMTM2IDcxLjMxMTggMTM3LjIwMiA3Mi4yMDI0IDEzMy43MTQgNzQuNTc3M0MxMzAuMyA3Ni44NzgxIDEyOC41OTMgODAuNzAwMiAxMjguNTkzIDg2LjA0MzlWMTEyLjY1MUgxMTQuMjMyVjU2Ljk4NzlIMTI4LjU5M1pNMTg0Ljg1MSA1Ni45ODc5VjcwLjc5MjNIMTcyLjI3MlY5My45NDhDMTcyLjI3MiA5NS44Nzc2IDE3Mi43NTQgOTcuMjg3NyAxNzMuNzE5IDk4LjE3ODNDMTc0LjY4NCA5OS4wNjg5IDE3Ni4wOTQgOTkuNTg4NCAxNzcuOTQ5IDk5LjczNjlDMTc5LjgwNSA5OS44MTExIDE4Mi4xMDUgOTkuNzc0IDE4NC44NTEgOTkuNjI1NVYxMTIuNjUxQzE3NS4xMjkgMTEzLjc2NCAxNjguMTkgMTEyLjg3MyAxNjQuMDMzIDEwOS45NzlDMTU5Ljk1MiAxMDcuMDEgMTU3LjkxMSAxMDEuNjY3IDE1Ny45MTEgOTMuOTQ4VjcwLjc5MjNIMTQ4LjIyNVY1Ni45ODc5SDE1Ny45MTFWNDUuNzQ0MUwxNzIuMjcyIDQxLjQwMjRWNTYuOTg3OUgxODQuODUxWk0yOTYuODcgNzMuNjg2N0MyOTYuODcgODMuNzA2IDI5My42NzkgOTIuNDYzNiAyODcuMjk2IDk5Ljk1OTVMMjk1LjMxMSAxMDguMzA5TDI4NC40MDIgMTE3Ljk5NEwyNzUuOTQxIDEwOS4yQzI2OS45MjkgMTEyLjUzOSAyNjMuMzk4IDExNC4yMDkgMjU2LjM0OCAxMTQuMjA5QzI0NS4yMTUgMTE0LjIwOSAyMzUuNjc4IDExMC4zMTMgMjI3LjczNyAxMDIuNTJDMjE5Ljg3IDk0LjY1MyAyMTUuOTM2IDg1LjA0MTkgMjE1LjkzNiA3My42ODY3QzIxNS45MzYgNjIuMzMxNiAyMTkuODcgNTIuNzU3NiAyMjcuNzM3IDQ0Ljk2NDhDMjM1LjYwNCAzNy4wOTc4IDI0NS4xNDEgMzMuMTY0MyAyNTYuMzQ4IDMzLjE2NDNDMjY3LjU1NCAzMy4xNjQzIDI3Ny4wOTEgMzcuMDk3OCAyODQuOTU4IDQ0Ljk2NDhDMjkyLjg5OSA1Mi43NTc2IDI5Ni44NyA2Mi4zMzE2IDI5Ni44NyA3My42ODY3Wk0yNTYuMzQ4IDk5LjE4MDJDMjU5LjMxNiA5OS4xODAyIDI2Mi4yMTEgOTguNjk3OCAyNjUuMDMxIDk3LjczM0wyNTIuMjI5IDg0LjM3NEwyNjMuMTM4IDc0LjY4ODdMMjc2LjgzMSA4OC45MzgzQzI3OS45NDkgODQuNDg1MyAyODEuNTA3IDc5LjQwMTQgMjgxLjUwNyA3My42ODY3QzI4MS41MDcgNjYuMjY1MSAyNzkuMDk1IDYwLjE0MjIgMjc0LjI3MSA1NS4zMTgxQzI2OS40NDcgNTAuNDk0IDI2My40NzIgNDguMDgxOSAyNTYuMzQ4IDQ4LjA4MTlDMjQ5LjIyMyA0OC4wODE5IDI0My4yNDggNTAuNDk0IDIzOC40MjQgNTUuMzE4MUMyMzMuNiA2MC4xNDIyIDIzMS4xODggNjYuMjY1MSAyMzEuMTg4IDczLjY4NjdDMjMxLjE4OCA4MS4wMzQyIDIzMy42IDg3LjEyIDIzOC40MjQgOTEuOTQ0MUMyNDMuMjQ4IDk2Ljc2ODIgMjQ5LjIyMyA5OS4xODAyIDI1Ni4zNDggOTkuMTgwMlpNMzQyLjQwMSA4Ny4wNDU4VjU2Ljk4NzlIMzU2Ljc2MlYxMTIuNjUxSDM0Mi40MDFWMTA2LjQxNkMzMzguOTg3IDExMS42MTIgMzMzLjQ1OCAxMTQuMjA5IDMyNS44MTMgMTE0LjIwOUMzMTkuNzI4IDExNC4yMDkgMzE0LjY4MSAxMTIuMTY4IDMxMC42NzMgMTA4LjA4NkMzMDYuNzQgMTAzLjkzIDMwNC43NzMgOTguMjg5NiAzMDQuNzczIDkxLjE2NDhWNTYuOTg3OUgzMTkuMTM0Vjg5LjM4MzZDMzE5LjEzNCA5My4wMjAyIDMyMC4wOTkgOTUuODQwNSAzMjIuMDI4IDk3Ljg0NDNDMzI0LjAzMiA5OS44NDgyIDMyNi43NDEgMTAwLjg1IDMzMC4xNTUgMTAwLjg1QzMzMy45NCAxMDAuODUgMzM2LjkwOSA5OS42OTk4IDMzOS4wNjEgOTcuMzk5QzM0MS4yODggOTUuMDI0MSAzNDIuNDAxIDkxLjU3MyAzNDIuNDAxIDg3LjA0NThaTTM3NC42MTYgNTAuMzA4NEMzNzIuMjQxIDUwLjMwODQgMzcwLjE2MyA0OS40NTQ5IDM2OC4zODIgNDcuNzQ3OUMzNjYuNjc1IDQ1Ljk2NjcgMzY1LjgyMSA0My44ODg3IDM2NS44MjEgNDEuNTEzN0MzNjUuODIxIDM5LjEzODggMzY2LjY3NSAzNy4wNjA3IDM2OC4zODIgMzUuMjc5NUMzNzAuMTYzIDMzLjQ5ODMgMzcyLjI0MSAzMi42MDc3IDM3NC42MTYgMzIuNjA3N0MzNzcuMDY1IDMyLjYwNzcgMzc5LjE0MyAzMy40OTgzIDM4MC44NSAzNS4yNzk1QzM4Mi42MzIgMzcuMDYwNyAzODMuNTIyIDM5LjEzODggMzgzLjUyMiA0MS41MTM3QzM4My41MjIgNDMuODg4NyAzODIuNjMyIDQ1Ljk2NjcgMzgwLjg1IDQ3Ljc0NzlDMzc5LjE0MyA0OS40NTQ5IDM3Ny4wNjUgNTAuMzA4NCAzNzQuNjE2IDUwLjMwODRaTTM4MS44NTIgMTEyLjY1MUgzNjcuNDkxVjU2Ljk4NzlIMzgxLjg1MlYxMTIuNjUxWk00MzMuNjUyIDY2LjU2MTlMNDEwLjA1MSA5OS4xODAySDQzNC43NjVWMTEyLjY1MUgzOTAuNzkyVjEwMy4wNzdMNDE0LjI4MSA3MC40NTgzSDM5MS45MDVWNTYuOTg3OUg0MzMuNjUyVjY2LjU2MTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";

/***/ }),

/***/ "./src/app/components/assets/back-arrow.svg":
/*!**************************************************!*\
  !*** ./src/app/components/assets/back-arrow.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjU5MjUgMjYuOTE2N0MxOS4zODA5IDI2LjkxNzQgMTkuMTcxOCAyNi44NzA3IDE4Ljk4MDUgMjYuNzhDMTguNzg5MyAyNi42ODkzIDE4LjYyMDkgMjYuNTU2OSAxOC40ODc1IDI2LjM5MjVMMTEuNjQ1IDE3Ljg5MjVDMTEuNDM2NyAxNy42MzkgMTEuMzIyOCAxNy4zMjExIDExLjMyMjggMTYuOTkyOUMxMS4zMjI4IDE2LjY2NDggMTEuNDM2NyAxNi4zNDY4IDExLjY0NSAxNi4wOTM0TDE4LjcyODQgNy41OTMzNUMxOC45Njg4IDcuMzA0MDQgMTkuMzE0NCA3LjEyMjExIDE5LjY4OSA3LjA4NzU3QzIwLjA2MzYgNy4wNTMwMyAyMC40MzY2IDcuMTY4NzIgMjAuNzI1OSA3LjQwOTE4QzIxLjAxNTIgNy42NDk2NSAyMS4xOTcxIDcuOTk1MTkgMjEuMjMxNiA4LjM2OTc5QzIxLjI2NjIgOC43NDQ0IDIxLjE1MDUgOS4xMTczOCAyMC45MSA5LjQwNjY4TDE0LjU3NzUgMTdMMjAuNjk3NSAyNC41OTM0QzIwLjg3MDggMjQuODAxMyAyMC45ODA4IDI1LjA1NDUgMjEuMDE0NiAyNS4zMjNDMjEuMDQ4NSAyNS41OTE2IDIxLjAwNDcgMjUuODY0MiAyMC44ODg0IDI2LjEwODZDMjAuNzcyMiAyNi4zNTMgMjAuNTg4MyAyNi41NTkgMjAuMzU4NyAyNi43MDIyQzIwLjEyOSAyNi44NDU0IDE5Ljg2MzIgMjYuOTE5OCAxOS41OTI1IDI2LjkxNjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";

/***/ }),

/***/ "./src/app/components/assets/close-btn.svg":
/*!*************************************************!*\
  !*** ./src/app/components/assets/close-btn.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjExMyAxNy45OTg3TDI2LjU1NjcgMTEuNTY5QzI2LjgzODkgMTEuMjg2OCAyNi45OTc0IDEwLjkwNCAyNi45OTc0IDEwLjUwNDlDMjYuOTk3NCAxMC4xMDU4IDI2LjgzODkgOS43MjMgMjYuNTU2NyA5LjQ0MDc3QzI2LjI3NDUgOS4xNTg1NSAyNS44OTE4IDkgMjUuNDkyOCA5QzI1LjA5MzcgOSAyNC43MTEgOS4xNTg1NSAyNC40Mjg4IDkuNDQwNzdMMTggMTUuODg1NUwxMS41NzEyIDkuNDQwNzdDMTEuMjg5IDkuMTU4NTUgMTAuOTA2MyA5IDEwLjUwNzIgOUMxMC4xMDgyIDkgOS43MjU0NSA5LjE1ODU1IDkuNDQzMjcgOS40NDA3N0M5LjE2MTA5IDkuNzIzIDkuMDAyNTYgMTAuMTA1OCA5LjAwMjU2IDEwLjUwNDlDOS4wMDI1NiAxMC45MDQgOS4xNjEwOSAxMS4yODY4IDkuNDQzMjcgMTEuNTY5TDE1Ljg4NyAxNy45OTg3TDkuNDQzMjcgMjQuNDI4NEM5LjMwMjgxIDI0LjU2NzggOS4xOTEzMyAyNC43MzM1IDkuMTE1MjUgMjQuOTE2MkM5LjAzOTE3IDI1LjA5ODggOSAyNS4yOTQ3IDkgMjUuNDkyNUM5IDI1LjY5MDQgOS4wMzkxNyAyNS44ODYzIDkuMTE1MjUgMjYuMDY4OUM5LjE5MTMzIDI2LjI1MTYgOS4zMDI4MSAyNi40MTczIDkuNDQzMjcgMjYuNTU2N0M5LjU4MjU4IDI2LjY5NzEgOS43NDgzMiAyNi44MDg2IDkuOTMwOTMgMjYuODg0N0MxMC4xMTM1IDI2Ljk2MDggMTAuMzA5NCAyNyAxMC41MDcyIDI3QzEwLjcwNTEgMjcgMTAuOTAwOSAyNi45NjA4IDExLjA4MzUgMjYuODg0N0MxMS4yNjYyIDI2LjgwODYgMTEuNDMxOSAyNi42OTcxIDExLjU3MTIgMjYuNTU2N0wxOCAyMC4xMTJMMjQuNDI4OCAyNi41NTY3QzI0LjU2ODEgMjYuNjk3MSAyNC43MzM4IDI2LjgwODYgMjQuOTE2NSAyNi44ODQ3QzI1LjA5OTEgMjYuOTYwOCAyNS4yOTQ5IDI3IDI1LjQ5MjggMjdDMjUuNjkwNiAyNyAyNS44ODY1IDI2Ljk2MDggMjYuMDY5MSAyNi44ODQ3QzI2LjI1MTcgMjYuODA4NiAyNi40MTc0IDI2LjY5NzEgMjYuNTU2NyAyNi41NTY3QzI2LjY5NzIgMjYuNDE3MyAyNi44MDg3IDI2LjI1MTYgMjYuODg0OCAyNi4wNjg5QzI2Ljk2MDggMjUuODg2MyAyNyAyNS42OTA0IDI3IDI1LjQ5MjVDMjcgMjUuMjk0NyAyNi45NjA4IDI1LjA5ODggMjYuODg0OCAyNC45MTYyQzI2LjgwODcgMjQuNzMzNSAyNi42OTcyIDI0LjU2NzggMjYuNTU2NyAyNC40Mjg0TDIwLjExMyAxNy45OTg3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";

/***/ }),

/***/ "./src/app/components/assets/loud-icon.svg":
/*!*************************************************!*\
  !*** ./src/app/components/assets/loud-icon.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjkyODUgOC45OTk5OUMyOC45MjgyIDguNzg4MyAyOC44NjgxIDguNTgwOTggMjguNzU1MyA4LjQwMTg4QzI4LjY0MjUgOC4yMjI3NyAyOC40ODE0IDguMDc5MTQgMjguMjkwNSA3Ljk4NzQ5QzI4LjA5OTcgNy44OTU4NCAyNy44ODY5IDcuODU5ODkgMjcuNjc2NiA3Ljg4Mzc3QzI3LjQ2NjIgNy45MDc2NSAyNy4yNjY5IDcuOTkwMzkgMjcuMTAxNSA4LjEyMjQ5TDIxLjc4NDcgMTIuMzc1SDE2LjU1MzVDMTYuMjU1MSAxMi4zNzUgMTUuOTY5IDEyLjQ5MzUgMTUuNzU4IDEyLjcwNDVDMTUuNTQ3IDEyLjkxNTUgMTUuNDI4NSAxMy4yMDE2IDE1LjQyODUgMTMuNVYyMi41QzE1LjQyODUgMjIuNzk4NCAxNS41NDcgMjMuMDg0NSAxNS43NTggMjMuMjk1NUMxNS45NjkgMjMuNTA2NSAxNi4yNTUxIDIzLjYyNSAxNi41NTM1IDIzLjYyNUgyMS43ODQ3TDI3LjEwMTUgMjcuODc3NUMyNy4yNjY5IDI4LjAwOTYgMjcuNDY2MiAyOC4wOTIzIDI3LjY3NjYgMjguMTE2MkMyNy44ODY5IDI4LjE0MDEgMjguMDk5NyAyOC4xMDQxIDI4LjI5MDUgMjguMDEyNUMyOC40ODE0IDI3LjkyMDggMjguNjQyNSAyNy43NzcyIDI4Ljc1NTMgMjcuNTk4MUMyOC44NjgxIDI3LjQxOSAyOC45MjgyIDI3LjIxMTcgMjguOTI4NSAyN1Y4Ljk5OTk5Wk0yMi44ODA1IDE0LjM3NzVMMjYuNjc4NSAxMS4zNFYyNC42NkwyMi44ODA1IDIxLjYyMjVDMjIuNjgxMyAyMS40NjI3IDIyLjQzMzggMjEuMzc1NCAyMi4xNzg1IDIxLjM3NUgxNy42Nzg1VjE0LjYyNUgyMi4xNzg1QzIyLjQzMzggMTQuNjI0NSAyMi42ODEzIDE0LjUzNzMgMjIuODgwNSAxNC4zNzc1Wk0zNS43MzQ3IDE4QzM1LjczNjUgMTkuMzI5OSAzNS40NzU0IDIwLjY0NyAzNC45NjY0IDIxLjg3NTdDMzQuNDU3NSAyMy4xMDQzIDMzLjcxMDggMjQuMjIwMyAzMi43NjkyIDI1LjE1OTVMMzEuMTc4NSAyMy41Njg3QzMxLjkxMDggMjIuODM4MiAzMi40OTE2IDIxLjk3MDIgMzIuODg3MyAyMS4wMTQ1QzMzLjI4MzEgMjAuMDU4OCAzMy40ODYxIDE5LjAzNDQgMzMuNDg0NyAxOEMzMy40ODYgMTYuOTY1NiAzMy4yODMgMTUuOTQxMiAzMi44ODcyIDE0Ljk4NTVDMzIuNDkxNCAxNC4wMjk5IDMxLjkxMDcgMTMuMTYxOCAzMS4xNzg1IDEyLjQzMTJMMzIuNzY5MiAxMC44NDA1QzMzLjcxMDggMTEuNzc5NyAzNC40NTc1IDEyLjg5NTYgMzQuOTY2NCAxNC4xMjQzQzM1LjQ3NTQgMTUuMzUzIDM1LjczNjUgMTYuNjcwMSAzNS43MzQ3IDE4WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42Ii8+Cjwvc3ZnPgo=";

/***/ }),

/***/ "./src/app/components/assets/minus-btn.svg":
/*!*************************************************!*\
  !*** ./src/app/components/assets/minus-btn.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAxLjVDOC44ODc1IDEuNSAxLjUgOC44ODc1IDEuNSAxOEMxLjUgMjcuMTEyNSA4Ljg4NzUgMzQuNSAxOCAzNC41QzI3LjExMjUgMzQuNSAzNC41IDI3LjExMjUgMzQuNSAxOEMzNC41IDguODg3NSAyNy4xMTI1IDEuNSAxOCAxLjVaTTEyIDE2LjVDMTEuNjAyMiAxNi41IDExLjIyMDYgMTYuNjU4IDEwLjkzOTMgMTYuOTM5M0MxMC42NTggMTcuMjIwNiAxMC41IDE3LjYwMjIgMTAuNSAxOEMxMC41IDE4LjM5NzggMTAuNjU4IDE4Ljc3OTQgMTAuOTM5MyAxOS4wNjA3QzExLjIyMDYgMTkuMzQyIDExLjYwMjIgMTkuNSAxMiAxOS41SDI0QzI0LjM5NzggMTkuNSAyNC43Nzk0IDE5LjM0MiAyNS4wNjA3IDE5LjA2MDdDMjUuMzQyIDE4Ljc3OTQgMjUuNSAxOC4zOTc4IDI1LjUgMThDMjUuNSAxNy42MDIyIDI1LjM0MiAxNy4yMjA2IDI1LjA2MDcgMTYuOTM5M0MyNC43Nzk0IDE2LjY1OCAyNC4zOTc4IDE2LjUgMjQgMTYuNUgxMloiIGZpbGw9IiNGRkJDQTIiLz4KPC9zdmc+Cg==";

/***/ }),

/***/ "./src/app/components/assets/mute-icon.svg":
/*!*************************************************!*\
  !*** ./src/app/components/assets/mute-icon.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjg2MzMgNy45ODc1NEMxMy4wNTM5IDguMDc5MzYgMTMuMjE0NyA4LjIyMzA2IDEzLjMyNzMgOC40MDIxNkMxMy40NCA4LjU4MTI1IDEzLjQ5OTggOC43ODg0NyAxMy41IDkuMDAwMDRWMjdDMTMuNDk5NyAyNy4yMTE3IDEzLjQzOTcgMjcuNDE5IDEzLjMyNjggMjcuNTk4MUMxMy4yMTQgMjcuNzc3MyAxMy4wNTI5IDI3LjkyMDkgMTIuODYyMSAyOC4wMTI1QzEyLjY3MTIgMjguMTA0MiAxMi40NTg0IDI4LjE0MDEgMTIuMjQ4MSAyOC4xMTYzQzEyLjAzNzggMjguMDkyNCAxMS44Mzg0IDI4LjAwOTYgMTEuNjczIDI3Ljg3NzVMNi4zNTYyNSAyMy42MjVIMS4xMjVDMC44MjY2MzEgMjMuNjI1IDAuNTQwNDgzIDIzLjUwNjUgMC4zMjk1MDUgMjMuMjk1NUMwLjExODUyNiAyMy4wODQ2IDAgMjIuNzk4NCAwIDIyLjVWMTMuNUMwIDEzLjIwMTcgMC4xMTg1MjYgMTIuOTE1NSAwLjMyOTUwNSAxMi43MDQ1QzAuNTQwNDgzIDEyLjQ5MzYgMC44MjY2MzEgMTIuMzc1IDEuMTI1IDEyLjM3NUg2LjM1NjI1TDExLjY3MyA4LjEyMjU0QzExLjgzODUgNy45OTAyMSAxMi4wMzgxIDcuOTA3MzMgMTIuMjQ4NyA3Ljg4MzQ1QzEyLjQ1OTIgNy44NTk1NyAxMi42NzIzIDcuODk1NjUgMTIuODYzMyA3Ljk4NzU0Wk0xMS4yNSAxMS4zNEw3LjQ1MiAxNC4zNzc1QzcuMjUyODYgMTQuNTM3MyA3LjAwNTMxIDE0LjYyNDYgNi43NSAxNC42MjVIMi4yNVYyMS4zNzVINi43NUM3LjAwNTMxIDIxLjM3NTUgNy4yNTI4NiAyMS40NjI4IDcuNDUyIDIxLjYyMjVMMTEuMjUgMjQuNjZWMTEuMzRaTTI4LjkyMTUgMTIuNzAzNUMyOS4wMjYzIDEyLjgwOCAyOS4xMDk0IDEyLjkzMjIgMjkuMTY2MSAxMy4wNjg5QzI5LjIyMjggMTMuMjA1NSAyOS4yNTIgMTMuMzUyMSAyOS4yNTIgMTMuNUMyOS4yNTIgMTMuNjQ4IDI5LjIyMjggMTMuNzk0NSAyOS4xNjYxIDEzLjkzMTJDMjkuMTA5NCAxNC4wNjc5IDI5LjAyNjMgMTQuMTkyIDI4LjkyMTUgMTQuMjk2NUwyNS4yMTU3IDE4TDI4LjkyMTUgMjEuNzAzNUMyOS4xMzI3IDIxLjkxNDggMjkuMjUxNCAyMi4yMDEzIDI5LjI1MTQgMjIuNUMyOS4yNTE0IDIyLjc5ODggMjkuMTMyNyAyMy4wODUzIDI4LjkyMTUgMjMuMjk2NUMyOC43MTAzIDIzLjUwNzggMjguNDIzNyAyMy42MjY1IDI4LjEyNSAyMy42MjY1QzI3LjgyNjMgMjMuNjI2NSAyNy41Mzk3IDIzLjUwNzggMjcuMzI4NSAyMy4yOTY1TDIzLjYyNSAxOS41OTA4TDE5LjkyMTUgMjMuMjk2NUMxOS43MTAzIDIzLjUwNzggMTkuNDIzNyAyMy42MjY1IDE5LjEyNSAyMy42MjY1QzE4LjgyNjMgMjMuNjI2NSAxOC41Mzk3IDIzLjUwNzggMTguMzI4NSAyMy4yOTY1QzE4LjExNzMgMjMuMDg1MyAxNy45OTg2IDIyLjc5ODggMTcuOTk4NiAyMi41QzE3Ljk5ODYgMjIuMjAxMyAxOC4xMTczIDIxLjkxNDggMTguMzI4NSAyMS43MDM1TDIyLjAzNDMgMThMMTguMzI4NSAxNC4yOTY1QzE4LjIyMzkgMTQuMTkxOSAxOC4xNDA5IDE0LjA2NzggMTguMDg0MyAxMy45MzExQzE4LjAyNzcgMTMuNzk0NCAxNy45OTg2IDEzLjY0OCAxNy45OTg2IDEzLjVDMTcuOTk4NiAxMy4zNTIxIDE4LjAyNzcgMTMuMjA1NiAxOC4wODQzIDEzLjA2OUMxOC4xNDA5IDEyLjkzMjMgMTguMjIzOSAxMi44MDgxIDE4LjMyODUgMTIuNzAzNUMxOC41Mzk3IDEyLjQ5MjMgMTguODI2MyAxMi4zNzM2IDE5LjEyNSAxMi4zNzM2QzE5LjI3MjkgMTIuMzczNiAxOS40MTk0IDEyLjQwMjggMTkuNTU2MSAxMi40NTk0QzE5LjY5MjcgMTIuNTE2IDE5LjgxNjkgMTIuNTk4OSAxOS45MjE1IDEyLjcwMzVMMjMuNjI1IDE2LjQwOTNMMjcuMzI4NSAxMi43MDM1QzI3LjQzMyAxMi41OTg4IDI3LjU1NzEgMTIuNTE1NyAyNy42OTM4IDEyLjQ1ODlDMjcuODMwNSAxMi40MDIyIDI3Ljk3NyAxMi4zNzMgMjguMTI1IDEyLjM3M0MyOC4yNzMgMTIuMzczIDI4LjQxOTUgMTIuNDAyMiAyOC41NTYyIDEyLjQ1ODlDMjguNjkyOSAxMi41MTU3IDI4LjgxNyAxMi41OTg4IDI4LjkyMTUgMTIuNzAzNVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8L3N2Zz4K";

/***/ }),

/***/ "./src/app/components/assets/plus-btn.svg":
/*!************************************************!*\
  !*** ./src/app/components/assets/plus-btn.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAxLjVDOC44ODc1IDEuNSAxLjUgOC44ODc1IDEuNSAxOEMxLjUgMjcuMTEyNSA4Ljg4NzUgMzQuNSAxOCAzNC41QzI3LjExMjUgMzQuNSAzNC41IDI3LjExMjUgMzQuNSAxOEMzNC41IDguODg3NSAyNy4xMTI1IDEuNSAxOCAxLjVaTTE5LjUgMjRDMTkuNSAyNC4zOTc4IDE5LjM0MiAyNC43Nzk0IDE5LjA2MDcgMjUuMDYwN0MxOC43Nzk0IDI1LjM0MiAxOC4zOTc4IDI1LjUgMTggMjUuNUMxNy42MDIyIDI1LjUgMTcuMjIwNiAyNS4zNDIgMTYuOTM5MyAyNS4wNjA3QzE2LjY1OCAyNC43Nzk0IDE2LjUgMjQuMzk3OCAxNi41IDI0VjE5LjVIMTJDMTEuNjAyMiAxOS41IDExLjIyMDYgMTkuMzQyIDEwLjkzOTMgMTkuMDYwN0MxMC42NTggMTguNzc5NCAxMC41IDE4LjM5NzggMTAuNSAxOEMxMC41IDE3LjYwMjIgMTAuNjU4IDE3LjIyMDYgMTAuOTM5MyAxNi45MzkzQzExLjIyMDYgMTYuNjU4IDExLjYwMjIgMTYuNSAxMiAxNi41SDE2LjVWMTJDMTYuNSAxMS42MDIyIDE2LjY1OCAxMS4yMjA2IDE2LjkzOTMgMTAuOTM5M0MxNy4yMjA2IDEwLjY1OCAxNy42MDIyIDEwLjUgMTggMTAuNUMxOC4zOTc4IDEwLjUgMTguNzc5NCAxMC42NTggMTkuMDYwNyAxMC45MzkzQzE5LjM0MiAxMS4yMjA2IDE5LjUgMTEuNjAyMiAxOS41IDEyVjE2LjVIMjRDMjQuMzk3OCAxNi41IDI0Ljc3OTQgMTYuNjU4IDI1LjA2MDcgMTYuOTM5M0MyNS4zNDIgMTcuMjIwNiAyNS41IDE3LjYwMjIgMjUuNSAxOEMyNS41IDE4LjM5NzggMjUuMzQyIDE4Ljc3OTQgMjUuMDYwNyAxOS4wNjA3QzI0Ljc3OTQgMTkuMzQyIDI0LjM5NzggMTkuNSAyNCAxOS41SDE5LjVWMjRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";

/***/ }),

/***/ "./src/app/components/assets/rs-logo.svg":
/*!***********************************************!*\
  !*** ./src/app/components/assets/rs-logo.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA4NSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzUzNDRfNjUpIj4KPHBhdGggZD0iTTQzLjg4MzkgMTAuMjY3OUw0Ny45Mjc4IDEwLjAxMTJDNDguMDIwMSAxMC42NjA1IDQ4LjE4OTIgMTEuMTQzNyA0OC40NjYgMTEuNDkxQzQ4LjkxMTkgMTIuMDM0NiA0OS41MjcgMTIuMzA2NCA1MC4zNDE5IDEyLjMwNjRDNTAuOTQxNiAxMi4zMDY0IDUxLjQxODIgMTIuMTcwNSA1MS43NDExIDExLjg4MzZDNTIuMDQ4NyAxMS42NTcxIDUyLjIzMzIgMTEuMjk0NyA1Mi4yMzMyIDEwLjkxNzJDNTIuMjMzMiAxMC41NTQ4IDUyLjA2NCAxMC4yMDc1IDUxLjc3MTkgOS45ODFDNTEuNDY0NCA5LjcwOTIgNTAuNzQxNyA5LjQzNzQgNDkuNjAzOCA5LjE5NThDNDcuNzQzMyA4Ljc4ODExIDQ2LjQwNTYgOC4yNDQ1MSA0NS42MjE0IDcuNTQ5OTJDNDQuODM3MiA2LjkwMDYyIDQ0LjM5MTMgNS45NDkzMyA0NC40MjIgNC45Mzc2NEM0NC40MjIgNC4yNDMwNSA0NC42MzczIDMuNTQ4NDYgNDUuMDM3MSAyLjk3NDY2QzQ1LjQ5ODQgMi4zMjUzNyA0Ni4xMjg4IDEuODExOTcgNDYuODgyMiAxLjUyNTA4QzQ3LjY5NzIgMS4xNzc3OCA0OC44MzUgMC45OTY1ODIgNTAuMjY1IDAuOTk2NTgyQzUyLjAxNzkgMC45OTY1ODIgNTMuMzU1NyAxLjMxMzY4IDU0LjI3ODIgMS45NjI5N0M1NS4yMDA4IDIuNTk3MTcgNTUuNzU0NCAzLjYyMzk2IDU1LjkyMzUgNS4wMjgyNEw1MS45MjU3IDUuMjU0NzRDNTEuODE4IDQuNjUwNzUgNTEuNjAyOCA0LjIxMjg1IDUxLjI0OTEgMy45MjU5NUM1MC44OTU0IDMuNjM5MDYgNTAuNDM0MiAzLjUwMzE2IDQ5LjgzNDUgMy41MDMxNkM0OS4zNDI0IDMuNTAzMTYgNDguOTczNCAzLjYwODg2IDQ4LjcyNzQgMy44MDUxNUM0OC40OTY3IDMuOTg2MzUgNDguMzQzIDQuMjU4MTUgNDguMzU4NCA0LjU2MDE1QzQ4LjM1ODQgNC43ODY2NSA0OC40ODE0IDQuOTk4MDQgNDguNjY1OSA1LjEzMzk0QzQ4Ljg2NTggNS4zMTUxNCA0OS4zNDI0IDUuNDgxMjQgNTAuMDk1OSA1LjYzMjI0QzUxLjk1NjQgNi4wMjQ4MyA1My4yNzg4IDYuNDE3NDMgNTQuMDkzNyA2LjgyNTEzQzU0LjkwODcgNy4yMzI4MiA1NS40OTMgNy43MzExMiA1NS44NDY2IDguMzIwMDFDNTYuMjE1NiA4LjkyNDAxIDU2LjQwMDIgOS42MTg2IDU2LjM4NDggMTAuMzI4M0M1Ni4zODQ4IDExLjE3MzkgNTYuMTM4OCAxMi4wMTk1IDU1LjY0NjcgMTIuNzI5MkM1NS4xMzkzIDEzLjQ2OTEgNTQuNDMyIDE0LjA0MjkgNTMuNjAxNyAxNC4zOTAyQzUyLjcyNTIgMTQuNzY3NiA1MS42MTgxIDE0Ljk2MzkgNTAuMjk1OCAxNC45NjM5QzQ3Ljk1ODYgMTQuOTYzOSA0Ni4zNDQxIDE0LjUyNjEgNDUuNDM2OSAxMy42MzUyQzQ0LjUyOTcgMTIuNzQ0MyA0My45OTE1IDExLjYyNjkgNDMuODgzOSAxMC4yNjc5Wk0wLjk2ODcwNSAxNC43Mzc0VjEuMjM4MThIOC4wNTcxN0M5LjM2NDE1IDEuMjM4MTggMTAuMzc5IDEuMzQzODggMTEuMDcwOSAxLjU3MDM4QzExLjc0NzUgMS43ODE3NyAxMi4zNDcxIDIuMjE5NjcgMTIuNzQ2OSAyLjgwODU2QzEzLjE5MjggMy40NTc4NiAxMy40MDgxIDQuMjEyODUgMTMuMzkyNyA0Ljk5ODA0QzEzLjQzODkgNi4zMjY4MyAxMi43NDY5IDcuNTk1MjIgMTEuNTYzIDguMjU5NjFDMTEuMTAxNyA4LjUxNjMxIDEwLjU5NDIgOC42OTc1MSAxMC4wNzE1IDguNzg4MTFDMTAuNDU1OSA4Ljg5MzgxIDEwLjg0MDMgOS4wNzUgMTEuMTc4NSA5LjI4NjRDMTEuNDM5OSA5LjQ5NzggMTEuNjU1MiA5LjczOTQgMTEuODU1MSA5Ljk5NjA5QzEyLjA4NTcgMTAuMjUyOCAxMi4yODU2IDEwLjUzOTcgMTIuNDU0OCAxMC44NDE3TDE0LjUxNTIgMTQuNzUyNUg5LjY4NzA1TDcuNDExMzYgMTAuNjAwMUM3LjExOTIxIDEwLjA3MTYgNi44NzMxOSA5LjcyNDMgNi42NDI1NSA5LjU1ODJDNi4zMzUwMiA5LjM0NjggNS45NjU5OSA5LjI0MTEgNS41OTY5NiA5LjI0MTFINS4yMjc5M1YxNC43MjIzSDAuOTY4NzA1VjE0LjczNzRaTTUuMjI3OTMgNi43MDQzM0g3LjAyNjk1QzcuNDExMzYgNi42NzQxMyA3Ljc4MDM5IDYuNjEzNzMgOC4xNDk0MiA2LjUyMzEzQzguNDI2MiA2LjQ3NzgzIDguNjcyMjIgNi4zMjY4MyA4Ljg0MTM1IDYuMTAwMzNDOS4yNTY1MSA1LjU1Njc0IDkuMTk1MDEgNC43ODY2NSA4LjY4NzU5IDQuMzE4NTVDOC40MTA4MiA0LjA5MjA1IDcuODcyNjUgMy45NzEyNSA3LjEwMzg0IDMuOTcxMjVINS4yMjc5M1Y2LjcwNDMzWk0wIDI2LjMwMzlMNC4wNDM5NiAyNi4wNDcyQzQuMTM2MjIgMjYuNjk2NSA0LjMwNTM2IDI3LjE3OTcgNC41ODIxMyAyNy41MjdDNS4wMTI2NiAyOC4wNzA2IDUuNjQzMDkgMjguMzU3NSA2LjQ1ODAzIDI4LjM1NzVDNy4wNTc3MSAyOC4zNTc1IDcuNTM0MzcgMjguMjIxNiA3Ljg1NzI3IDI3LjkzNDdDOC4xNjQ4IDI3LjY5MzEgOC4zNDkzMSAyNy4zNDU4IDguMzQ5MzEgMjYuOTY4M0M4LjM0OTMxIDI2LjYwNTkgOC4xODAxNyAyNi4yNTg2IDcuODg4MDMgMjYuMDMyMUM3LjU4MDUgMjUuNzYwMyA2Ljg1NzgyIDI1LjQ4ODUgNS43MDQ2IDI1LjI0NjlDMy44NDQwNyAyNC44MzkyIDIuNTA2MzMgMjQuMjk1NyAxLjcyMjE0IDIzLjYwMTFDMC45Mzc5NTIgMjIuOTUxOCAwLjQ5MjA0MSAyMi4wMDA1IDAuNTIyNzkzIDIwLjk4ODhDMC41MjI3OTMgMjAuMjk0MiAwLjczODA2MSAxOS41OTk2IDEuMTM3ODQgMTkuMDI1OEMxLjU5OTEzIDE4LjM3NjUgMi4yMjk1NiAxNy44NjMxIDIuOTgzIDE3LjU3NjJDMy43OTc5NCAxNy4yMjg5IDQuOTM1NzggMTcuMDQ3NyA2LjM2NTc4IDE3LjA0NzdDOC4xMTg2NyAxNy4wNDc3IDkuNDU2NCAxNy4zNjQ4IDEwLjM3OSAxOC4wMTQxQzExLjMwMTYgMTguNjYzNCAxMS44Mzk3IDE5LjY3NTEgMTIuMDA4OSAyMS4wNzk0TDguMDExMDQgMjEuMzA1OUM3LjkwMzQgMjAuNzAxOSA3LjY4ODEzIDIwLjI2NCA3LjMzNDQ4IDE5Ljk3NzFDNi45OTYyIDE5LjY5MDIgNi41MTk1NCAxOS41NTQzIDUuOTE5ODYgMTkuNTY5NEM1LjQyNzgyIDE5LjU2OTQgNS4wNTg3OSAxOS42NzUxIDQuODEyNzcgMTkuODg2NUM0LjU2Njc1IDIwLjA2NzcgNC40MjgzNyAyMC4zMzk1IDQuNDQzNzQgMjAuNjQxNUM0LjQ0Mzc0IDIwLjg2OCA0LjU2Njc1IDIxLjA3OTQgNC43NTEyNyAyMS4yMTUzQzQuOTUxMTYgMjEuMzk2NSA1LjQyNzgyIDIxLjU2MjYgNi4xODEyNiAyMS43MTM2QzguMDQxNzkgMjIuMTA2MiA5LjM2NDE1IDIyLjQ5ODggMTAuMTc5MSAyMi45MDY1QzEwLjk5NCAyMy4zMTQyIDExLjU3ODMgMjMuODEyNSAxMS45MzIgMjQuNDAxNEMxMi4zMDEgMjUuMDA1MyAxMi40ODU1IDI1LjY5OTkgMTIuNDg1NSAyNi4zOTQ1QzEyLjQ4NTUgMjcuMjQwMSAxMi4yMjQxIDI4LjA3MDYgMTEuNzQ3NSAyOC43ODAzQzExLjI0MDEgMjkuNTIwMiAxMC41MzI3IDMwLjA5NCA5LjcwMjQzIDMwLjQ0MTNDOC44MjU5OCAzMC44MTg4IDcuNzE4ODkgMzEuMDE1MSA2LjM5NjUzIDMxLjAxNTFDNC4wNTkzMyAzMS4wMTUxIDIuNDQ0ODMgMzAuNTc3MiAxLjUzNzYzIDI5LjY4NjNDMC42MzA0MjcgMjguNzgwMyAwLjEyMzAxIDI3LjY2MjkgMCAyNi4zMDM5SDBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAuNDUwNSAyNS4yNDY5TDI0LjE3MTUgMjYuMzQ5MkMyMy45NzE2IDI3LjI3MDMgMjMuNTU2NSAyOC4xNDYxIDIyLjk4NzYgMjguOTE2MkMyMi40NjQ4IDI5LjU5NTcgMjEuNzcyOCAzMC4xMjQyIDIwLjk4ODcgMzAuNDcxNUMyMC4xODkxIDMwLjgxODggMTkuMTc0MyAzMSAxNy45NDQyIDMxQzE2LjQ1MjcgMzEgMTUuMjIyNiAzMC43ODg2IDE0LjI4NDYgMzAuMzY1OEMxMy4zMzEzIDI5Ljk0MyAxMi41MTYzIDI5LjE4OCAxMS44MjQ0IDI4LjExNTlDMTEuMTMyNSAyNy4wNDM4IDEwLjc5NDIgMjUuNjY5NyAxMC43OTQyIDIzLjk5MzdDMTAuNzk0MiAyMS43NTg5IDExLjM5MzkgMjAuMDM3NSAxMi42MDg2IDE4Ljg0NDZDMTMuODIzMyAxNy42NTE3IDE1LjUzMDEgMTcuMDQ3NyAxNy43NDQzIDE3LjA0NzdDMTkuNDgxOCAxNy4wNDc3IDIwLjgzNDkgMTcuMzk1IDIxLjgzNDMgMTguMDc0NUMyMi44MTg0IDE4Ljc2OTEgMjMuNTU2NSAxOS44MjYxIDI0LjA0ODUgMjEuMjQ1NUwyMC4yOTY3IDIyLjA2MDlDMjAuMjA0NSAyMS43NDM4IDIwLjA2NjEgMjEuNDI2NyAxOS44ODE2IDIxLjE1NDlDMTkuNjUwOSAyMC44Mzc4IDE5LjM1ODggMjAuNTk2MiAxOS4wMDUxIDIwLjQxNUMxOC42NTE1IDIwLjIzMzggMTguMjUxNyAyMC4xNTgzIDE3Ljg1MTkgMjAuMTU4M0MxNi44ODMyIDIwLjE1ODMgMTYuMTQ1MSAyMC41MzU4IDE1LjYzNzcgMjEuMzA1OUMxNS4yNTMzIDIxLjg2NDYgMTUuMDUzNCAyMi43NTU1IDE1LjA1MzQgMjMuOTYzNUMxNS4wNTM0IDI1LjQ1ODMgMTUuMjg0MSAyNi40ODUxIDE1Ljc0NTMgMjcuMDQzOEMxNi4yMDY2IDI3LjYwMjUgMTYuODUyNCAyNy44NzQzIDE3LjY5ODEgMjcuODc0M0MxOC41MTMxIDI3Ljg3NDMgMTkuMTI4MSAyNy42NDc4IDE5LjU0MzMgMjcuMjA5OUMxOS45NTg0IDI2Ljc0MTggMjAuMjY2IDI2LjA5MjUgMjAuNDUwNSAyNS4yNDY5Wk0yOS4xMzgxIDE3LjI3NDJIMzMuMzgxOVYyMi4wMDA1SDM4LjAyNTZWMTcuMjc0Mkg0Mi4zMDAyVjMwLjc3MzVIMzguMDI1NlYyNS4zMDczSDMzLjM4MTlWMzAuNzczNUgyOS4xMzgxVjE3LjI3NDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDEuNzE1OCAyNC4wMjM5QzQxLjcxNTggMjEuODE5MyA0Mi4zNDYyIDIwLjA5NzkgNDMuNTkxNyAxOC44NzQ4QzQ0LjgzNzIgMTcuNjUxNyA0Ni41OTAxIDE3LjAzMjcgNDguODE5NyAxNy4wMzI3QzUxLjExMDcgMTcuMDMyNyA1Mi44NjM2IDE3LjYzNjYgNTQuMTA5MSAxOC44NDQ2QzU1LjM1NDYgMjAuMDUyNiA1NS45Njk2IDIxLjc0MzggNTUuOTY5NiAyMy45MTgyQzU1Ljk2OTYgMjUuNTAzNyA1NS42OTI4IDI2Ljc4NzIgNTUuMTU0NyAyNy43OTg5QzU0LjYzMTkgMjguNzk1NCA1My44MTY5IDI5LjYxMDggNTIuODE3NSAzMC4xNTQ0QzUxLjc4NzMgMzAuNzEzMSA1MC41MTEgMzEgNDguOTg4OCAzMUM0Ny40MzU4IDMxIDQ2LjE1OTYgMzAuNzU4NCA0NS4xNDQ3IDMwLjI3NTJDNDQuMDk5MSAyOS43NjE4IDQzLjIzODEgMjguOTYxNSA0Mi42NjkyIDI3Ljk4QzQyLjAzODcgMjYuOTIzMSA0MS43MTU4IDI1LjYwOTQgNDEuNzE1OCAyNC4wMjM5Wk00NS45NTk3IDI0LjAzOUM0NS45NTk3IDI1LjM5OCA0Ni4yMjExIDI2LjM3OTUgNDYuNzI4NSAyNi45ODM1QzQ3LjIzNTkgMjcuNTcyNCA0Ny45NDMyIDI3Ljg3NDMgNDguODM1IDI3Ljg3NDNDNDkuNzQyMiAyNy44NzQzIDUwLjQ0OTUgMjcuNTg3NSA1MC45NTcgMjYuOTk4NkM1MS40NjQ0IDI2LjQwOTcgNTEuNzEwNCAyNS4zNjc4IDUxLjcxMDQgMjMuODU3OEM1MS43MTA0IDIyLjU4OTQgNTEuNDQ5IDIxLjY1MzIgNTAuOTI2MiAyMS4wNzk0QzUwLjQwMzQgMjAuNDkwNSA0OS42OTYxIDIwLjIwMzYgNDguODA0MyAyMC4yMDM2QzQ4LjAyMDEgMjAuMTczNCA0Ny4yNjY3IDIwLjUwNTYgNDYuNzQzOSAyMS4wOTQ1QzQ2LjIyMTEgMjEuNjgzNCA0NS45NTk3IDIyLjY2NDkgNDUuOTU5NyAyNC4wMzlaTTYwLjMyMTEgMjQuMDIzOUM2MC4zMjExIDIxLjgxOTMgNjAuOTUxNSAyMC4wOTc5IDYyLjE5NyAxOC44NzQ4QzYzLjQ0MjUgMTcuNjUxNyA2NS4xOTU0IDE3LjAzMjcgNjcuNDI0OSAxNy4wMzI3QzY5LjcxNiAxNy4wMzI3IDcxLjQ4NDMgMTcuNjM2NiA3Mi43MTQ0IDE4Ljg0NDZDNzMuOTQ0NSAyMC4wNTI2IDc0LjU3NDkgMjEuNzQzOCA3NC41NzQ5IDIzLjkxODJDNzQuNTc0OSAyNS41MDM3IDc0LjI5ODEgMjYuNzg3MiA3My43NiAyNy43OTg5QzczLjIzNzIgMjguNzk1NCA3Mi40MjIyIDI5LjYxMDggNzEuNDIyOCAzMC4xNTQ0QzcwLjM5MjYgMzAuNzEzMSA2OS4xMTYzIDMxIDY3LjU5NDEgMzFDNjYuMDQxMSAzMSA2NC43NjQ4IDMwLjc1ODQgNjMuNzUgMzAuMjc1MkM2Mi43MDQ0IDI5Ljc2MTggNjEuODQzNCAyOC45NjE1IDYxLjI3NDQgMjcuOThDNjAuNjQ0IDI2LjkyMzEgNjAuMzIxMSAyNS42MDk0IDYwLjMyMTEgMjQuMDIzOVpNNjQuNTY1IDI0LjAzOUM2NC41NjUgMjUuMzk4IDY0LjgyNjMgMjYuMzc5NSA2NS4zMzM4IDI2Ljk4MzVDNjUuODQxMiAyNy41NzI0IDY2LjU0ODUgMjcuODc0MyA2Ny40NDAzIDI3Ljg3NDNDNjguMzQ3NSAyNy44NzQzIDY5LjA1NDggMjcuNTg3NSA2OS41NjIyIDI2Ljk5ODZDNzAuMDY5NyAyNi40MDk3IDcwLjMxNTcgMjUuMzY3OCA3MC4zMTU3IDIzLjg1NzhDNzAuMzE1NyAyMi41ODk0IDcwLjA1NDMgMjEuNjUzMiA2OS41MzE1IDIxLjA3OTRDNjkuMDA4NyAyMC40OTA1IDY4LjMwMTQgMjAuMjAzNiA2Ny40MDk2IDIwLjIwMzZDNjYuNjI1NCAyMC4xNzM0IDY1Ljg1NjYgMjAuNTA1NiA2NS4zNDkxIDIxLjA5NDVDNjQuODI2MyAyMS42ODM0IDY0LjU2NSAyMi42NjQ5IDY0LjU2NSAyNC4wMzlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzQuMTI5IDE3LjI3NDJINzguMzcyOVYyNy40NTE1SDg1VjMwLjc3MzVINzQuMTEzNlYxNy4yNzQySDc0LjEyOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02OS40NTEzIDE2LjQ5NTJDNzMuNzIzOSAxMy4zMzMyIDc1LjA0MTUgNy45NzMzMSA3Mi4zOTQxIDQuNTIzMzlDNjkuNzQ2NyAxLjA3MzQ4IDY0LjEzNjkgMC44NCA1OS44NjQyIDQuMDAxOTFDNTUuNTkxNiA3LjE2MzgyIDU0LjI3NDEgMTIuNTIzOCA1Ni45MjE0IDE1Ljk3MzdDNTkuNTY4OCAxOS40MjM2IDY1LjE3ODYgMTkuNjU3MSA2OS40NTEzIDE2LjQ5NTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjkuNDUxMyAxNi40OTUyQzczLjcyMzkgMTMuMzMzMyA3NS4wNDE1IDcuOTczMzcgNzIuMzk0MSA0LjUyMzQ1QzY5Ljc0NjcgMS4wNzM1MyA2NC4xMzY5IDAuODQwMDYgNTkuODY0MiA0LjAwMTk3QzU1LjU5MTYgNy4xNjM4OCA1NC4yNzQxIDEyLjUyMzggNTYuOTIxNCAxNS45NzM3QzU5LjU2ODggMTkuNDIzNyA2NS4xNzg2IDE5LjY1NzEgNjkuNDUxMyAxNi40OTUyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MC4wNDkzIDQuMjQzMTRDNTUuODY1MiA3LjMzOTU2IDU0LjY1NDEgMTIuNTE3MyA1Ny4xNjcgMTUuNzkyQzU5LjY4IDE5LjA2NjcgNjUuMDgyIDE5LjM1MDQgNjkuMjY2MiAxNi4yNTRDNzMuNDUwNCAxMy4xNTc2IDc0LjY2MTQgNy45Nzk4OSA3Mi4xNDg1IDQuNzA1MTlDNjkuNjM1NiAxLjQzMDQ4IDY0LjIzMzUgMS4xNDY3MSA2MC4wNDkzIDQuMjQzMTRaTTU2LjY3NTkgMTYuMTU1NUM1My44OTQgMTIuNTMwMyA1NS4zMTggNi45ODgxNiA1OS42NzkyIDMuNzYwNzdDNjQuMDQwMyAwLjUzMzM4MSA2OS44NTc5IDAuNzE2NTU4IDcyLjYzOTcgNC4zNDE2OEM3NS40MjE1IDcuOTY2ODEgNzMuOTk3NSAxMy41MDkgNjkuNjM2NCAxNi43MzY0QzY1LjI3NTIgMTkuOTYzOCA1OS40NTc3IDE5Ljc4MDYgNTYuNjc1OSAxNi4xNTU1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYwLjMzNjQgOS4yNTYyNEw2MS44NzQgOC4xOTkyNUw2My43NjUzIDEwLjg0MTdDNjQuMDg4MiAxMS4yNjQ1IDY0LjMzNDIgMTEuNzE3NSA2NC41MTg3IDEyLjIxNThDNjQuNjI2NCAxMi41OTMzIDY0LjU5NTYgMTMuMDAxIDY0LjQ0MTggMTMuMzYzNEM2NC4yNDIgMTMuODE2NCA2My45MTkxIDE0LjE5MzkgNjMuNDg4NSAxNC40NjU3QzYyLjk4MTEgMTQuODEzIDYyLjU1MDYgMTUuMDA5MyA2Mi4xODE1IDE1LjA2OTdDNjEuODI3OSAxNS4xMzAxIDYxLjQ1ODggMTUuMDY5NyA2MS4xMjA2IDE0LjkxODdDNjAuNzUxNSAxNC43Mzc1IDYwLjQyODYgMTQuNDgwOCA2MC4xODI2IDE0LjE0ODZMNjEuNTA1IDEyLjk0MDZDNjEuNjEyNiAxMy4xMDY3IDYxLjc1MSAxMy4yNTc3IDYxLjkwNDggMTMuMzc4NUM2Mi4wMTI0IDEzLjQ1NCA2Mi4xMzU0IDEzLjQ5OTMgNjIuMjczOCAxMy40OTkzQzYyLjM4MTQgMTMuNDk5MyA2Mi40ODkxIDEzLjQ1NCA2Mi41NjU5IDEzLjM5MzZDNjIuNzE5NyAxMy4zMDMgNjIuODI3MyAxMy4xMjE4IDYyLjgxMiAxMi45NDA2QzYyLjc2NTggMTIuNjgzOSA2Mi42NTgyIDEyLjQyNzIgNjIuNDg5MSAxMi4yMzA5TDYwLjMzNjQgOS4yNTYyNFpNNjQuOTQ5MyAxMC45MzIzTDY2LjM0ODUgOS44NDUxM0M2Ni41MDIzIDEwLjAyNjMgNjYuNzAyMiAxMC4xNjIyIDY2LjkxNzQgMTAuMjM3N0M2Ny4yMjUgMTAuMzI4MyA2Ny41NDc5IDEwLjI2NzkgNjcuODA5MyAxMC4wNzE2QzY3Ljk5MzggOS45NTA4MyA2OC4xNDc1IDkuNzg0NzMgNjguMjA5IDkuNTczMzNDNjguMzAxMyA5LjMwMTU0IDY4LjE0NzUgOC45OTk1NCA2Ny44NzA4IDguOTA4OTRDNjcuODI0NiA4Ljg5Mzg0IDY3Ljc3ODUgOC44Nzg3NCA2Ny43MzI0IDguODc4NzRDNjcuNTQ3OSA4Ljg2MzY0IDY3LjIyNSA4LjkzOTE0IDY2Ljc0ODMgOS4xMzU0NEM2NS45NjQxIDkuNDUyNTMgNjUuMzQ5IDkuNTczMzMgNjQuODg3OCA5LjUyODAzQzY0LjQ0MTggOS40ODI3MyA2NC4wMjY3IDkuMjU2MjQgNjMuNzgwNyA4Ljg3ODc0QzYzLjU5NjEgOC42MjIwNCA2My41MDM5IDguMzIwMDQgNjMuNDg4NSA4LjAxODA1QzYzLjQ4ODUgNy42NzA3NSA2My41ODA4IDcuMzIzNDUgNjMuNzgwNyA3LjAzNjU2QzY0LjA3MjggNi42Mjg4NiA2NC40MjY1IDYuMjgxNTYgNjQuODU3IDYuMDA5NzdDNjUuNTAyOCA1LjU3MTg3IDY2LjA3MTcgNS4zNjA0NyA2Ni41NjM4IDUuMzYwNDdDNjcuMDU1OCA1LjM2MDQ3IDY3LjUxNzEgNS41ODY5NyA2Ny45NDc2IDYuMDU1MDdMNjYuNTYzOCA3LjEyNzE2QzY2LjI4NyA2Ljc3OTg2IDY1Ljc2NDIgNi43MDQzNiA2NS40MTA2IDYuOTc2MTZMNjUuMzY0NCA3LjAyMTQ2QzY1LjIxMDcgNy4xMTIwNiA2NS4xMDMgNy4yNDc5NiA2NS4wNDE1IDcuNDE0MDVDNjQuOTk1NCA3LjUzNDg1IDY1LjAyNjEgNy42NzA3NSA2NS4xMDMgNy43NzY0NUM2NS4xNjQ1IDcuODUxOTUgNjUuMjU2OCA3LjkxMjM1IDY1LjM2NDQgNy45MTIzNUM2NS40ODc0IDcuOTI3NDUgNjUuNzAyNyA3Ljg2NzA1IDY2LjAxMDIgNy43MzExNUM2Ni43NzkgNy40MTQwNSA2Ny4zNjMzIDcuMjMyODYgNjcuNzYzMSA3LjE3MjQ2QzY4LjEwMTQgNy4xMTIwNiA2OC40NTUxIDcuMTQyMjYgNjguNzc4IDcuMjc4MTZDNjkuMDcwMSA3LjM5ODk1IDY5LjMxNjEgNy42MTAzNSA2OS40ODUzIDcuODY3MDVDNjkuNzAwNSA4LjE2OTA1IDY5LjgyMzUgOC41MzE0NCA2OS44Mzg5IDguOTA4OTRDNjkuODU0MyA5LjMwMTU0IDY5Ljc0NjcgOS42NzkwMyA2OS41MzE0IDEwLjAxMTJDNjkuMjU0NiAxMC40MTg5IDY4LjkwMSAxMC43NjYyIDY4LjQ4NTggMTEuMDM4QzY3LjY0MDEgMTEuNjExOCA2Ni45NDgyIDExLjg1MzQgNjYuMzk0NiAxMS43NjI4QzY1Ljc5NSAxMS42NzIyIDY1LjMwMjkgMTEuMzcwMiA2NC45NDkzIDEwLjkzMjNaIiBmaWxsPSIjMTYxMDA0Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNTM0NF82NSI+CjxyZWN0IHdpZHRoPSI4NSIgaGVpZ2h0PSIzMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";

/***/ }),

/***/ "./src/app/components/assets/settings-btn.svg":
/*!****************************************************!*\
  !*** ./src/app/components/assets/settings-btn.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjM3NSAxOC44NTVWMThWMTcuMTMzOEwzMi41MzUgMTUuMjQzOEMzMi45MzMyIDE0Ljg5MjggMzMuMTk0NSAxNC40MTI0IDMzLjI3MjcgMTMuODg3NUMzMy4zNTA5IDEzLjM2MjUgMzMuMjQxMSAxMi44MjY4IDMyLjk2MjUgMTIuMzc1TDMwLjMwNzUgNy44NzUwM0MzMC4xMTAyIDcuNTMzMzMgMjkuODI2NiA3LjI0OTUxIDI5LjQ4NSA3LjA1MjA1QzI5LjE0MzQgNi44NTQ1OSAyOC43NTU4IDYuNzUwNDQgMjguMzYxMyA2Ljc1MDAzQzI4LjExNjggNi43NDgxNiAyNy44NzM2IDYuNzg2MTYgMjcuNjQxMyA2Ljg2MjUzTDI0LjkwNzUgNy43ODUwM0MyNC40MzU1IDcuNDcxMzkgMjMuOTQzMiA3LjE4OTUyIDIzLjQzMzggNi45NDEyOEwyMi44NiA0LjEwNjI4QzIyLjc1NzIgMy41ODgzNCAyMi40NzU0IDMuMTIzMDggMjIuMDY0IDIuNzkxOTVDMjEuNjUyNyAyLjQ2MDgxIDIxLjEzOCAyLjI4NDkxIDIwLjYxIDIuMjk1MDNIMTUuMzQ1QzE0LjgxNzEgMi4yODQ5MSAxNC4zMDI0IDIuNDYwODEgMTMuODkxIDIuNzkxOTVDMTMuNDc5NyAzLjEyMzA4IDEzLjE5NzkgMy41ODgzNCAxMy4wOTUgNC4xMDYyOEwxMi41MjEzIDYuOTQxMjhDMTIuMDA4MiA3LjE4OTQ2IDExLjUxMjEgNy40NzEzMiAxMS4wMzYzIDcuNzg1MDNMOC4zNTg3OSA2LjgxNzUzQzguMTI0IDYuNzU2MzYgNy44ODA4NiA2LjczMzU2IDcuNjM4NzkgNi43NTAwM0M3LjI0NDIyIDYuNzUwNDQgNi44NTY3IDYuODU0NTkgNi41MTUxIDcuMDUyMDVDNi4xNzM0OSA3LjI0OTUxIDUuODg5ODIgNy41MzMzMyA1LjY5MjU0IDcuODc1MDNMMy4wMzc1NCAxMi4zNzVDMi43NzQ5NSAxMi44MjYxIDIuNjc3MzcgMTMuMzU0NSAyLjc2MTUyIDEzLjg2OTdDMi44NDU2NyAxNC4zODQ4IDMuMTA2MyAxNC44NTQ3IDMuNDk4NzkgMTUuMTk4OEw1LjYyNTA0IDE3LjE0NVYxOC44NjYzTDMuNDk4NzkgMjAuNzU2M0MzLjA5NTIyIDIxLjEwMjggMi44Mjc0NSAyMS41ODExIDIuNzQzMDEgMjIuMTA2MkMyLjY1ODU3IDIyLjYzMTQgMi43NjI5MiAyMy4xNjk1IDMuMDM3NTQgMjMuNjI1TDUuNjkyNTQgMjguMTI1QzUuODg5ODIgMjguNDY2NyA2LjE3MzQ5IDI4Ljc1MDYgNi41MTUxIDI4Ljk0OEM2Ljg1NjcgMjkuMTQ1NSA3LjI0NDIyIDI5LjI0OTYgNy42Mzg3OSAyOS4yNUM3Ljg4MzMxIDI5LjI1MTkgOC4xMjY1IDI5LjIxMzkgOC4zNTg3OSAyOS4xMzc1TDExLjA5MjUgMjguMjE1QzExLjU2NDUgMjguNTI4NyAxMi4wNTY5IDI4LjgxMDUgMTIuNTY2MyAyOS4wNTg4TDEzLjE0IDMxLjg5MzhDMTMuMjQyOSAzMi40MTE3IDEzLjUyNDcgMzIuODc3IDEzLjkzNiAzMy4yMDgxQzE0LjM0NzQgMzMuNTM5MiAxNC44NjIxIDMzLjcxNTIgMTUuMzkgMzMuNzA1SDIwLjdDMjEuMjI4IDMzLjcxNTIgMjEuNzQyNyAzMy41MzkyIDIyLjE1NCAzMy4yMDgxQzIyLjU2NTQgMzIuODc3IDIyLjg0NzIgMzIuNDExNyAyMi45NSAzMS44OTM4TDIzLjUyMzggMjkuMDU4OEMyNC4wMzY5IDI4LjgxMDYgMjQuNTMyOSAyOC41Mjg3IDI1LjAwODggMjguMjE1TDI3LjczMTMgMjkuMTM3NUMyNy45NjM2IDI5LjIxMzkgMjguMjA2OCAyOS4yNTE5IDI4LjQ1MTMgMjkuMjVDMjguODQ1OCAyOS4yNDk2IDI5LjIzMzQgMjkuMTQ1NSAyOS41NzUgMjguOTQ4QzI5LjkxNjYgMjguNzUwNiAzMC4yMDAyIDI4LjQ2NjcgMzAuMzk3NSAyOC4xMjVMMzIuOTYyNSAyMy42MjVDMzMuMjI1MSAyMy4xNzM5IDMzLjMyMjcgMjIuNjQ1NSAzMy4yMzg2IDIyLjEzMDRDMzMuMTU0NCAyMS42MTUzIDMyLjg5MzggMjEuMTQ1NCAzMi41MDEzIDIwLjgwMTNMMzAuMzc1IDE4Ljg1NVpNMjguMzYxMyAyN0wyNC41MDI1IDI1LjY5NUMyMy41OTkyIDI2LjQ2MDIgMjIuNTY2OSAyNy4wNTgyIDIxLjQ1MzggMjcuNDYxM0wyMC42NTUgMzEuNUgxNS4zNDVMMTQuNTQ2MyAyNy41MDYzQzEzLjQ0MiAyNy4wOTE4IDEyLjQxNTIgMjYuNDk0NyAxMS41MDg4IDI1Ljc0TDcuNjM4NzkgMjdMNC45ODM3OSAyMi41TDguMDQzNzkgMTkuOEM3LjgzNTc3IDE4LjYzNTUgNy44MzU3NyAxNy40NDMzIDguMDQzNzkgMTYuMjc4OEw0Ljk4Mzc5IDEzLjVMNy42Mzg3OSA5LjAwMDAzTDExLjQ5NzUgMTAuMzA1QzEyLjQwMDggOS41Mzk5MSAxMy40MzMyIDguOTQxODIgMTQuNTQ2MyA4LjUzODc4TDE1LjM0NSA0LjUwMDAzSDIwLjY1NUwyMS40NTM4IDguNDkzNzhDMjIuNTU4MSA4LjkwODI2IDIzLjU4NDkgOS41MDUzMiAyNC40OTEzIDEwLjI2TDI4LjM2MTMgOS4wMDAwM0wzMS4wMTYzIDEzLjVMMjcuOTU2MyAxNi4yQzI4LjE2NDMgMTcuMzY0NiAyOC4xNjQzIDE4LjU1NjcgMjcuOTU2MyAxOS43MjEzTDMxLjAxNjMgMjIuNUwyOC4zNjEzIDI3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4IDI0Ljc1QzE2LjY2NSAyNC43NSAxNS4zNTk5IDI0LjM1NDEgMTQuMjQ5OSAyMy42MTI0QzEzLjEzOTkgMjIuODcwNyAxMi4yNzQ3IDIxLjgxNjUgMTEuNzYzOCAyMC41ODMxQzExLjI1MjkgMTkuMzQ5NyAxMS4xMTkzIDE3Ljk5MjUgMTEuMzc5NyAxNi42ODMxQzExLjY0MDIgMTUuMzczOCAxMi4yODMgMTQuMTcxIDEzLjIyNyAxMy4yMjdDMTQuMTcxIDEyLjI4MyAxNS4zNzM4IDExLjY0MDIgMTYuNjgzMSAxMS4zNzk3QzE3Ljk5MjUgMTEuMTE5MyAxOS4zNDk3IDExLjI1MjkgMjAuNTgzMSAxMS43NjM4QzIxLjgxNjUgMTIuMjc0NyAyMi44NzA3IDEzLjEzOTkgMjMuNjEyNCAxNC4yNDk5QzI0LjM1NDEgMTUuMzU5OSAyNC43NSAxNi42NjUgMjQuNzUgMThDMjQuNzU5IDE4Ljg4ODkgMjQuNTkwNiAxOS43NzA3IDI0LjI1NDYgMjAuNTkzOEMyMy45MTg2IDIxLjQxNjggMjMuNDIxNyAyMi4xNjQ1IDIyLjc5MzEgMjIuNzkzMUMyMi4xNjQ1IDIzLjQyMTcgMjEuNDE2OCAyMy45MTg2IDIwLjU5MzggMjQuMjU0NkMxOS43NzA3IDI0LjU5MDYgMTguODg4OSAyNC43NTkgMTggMjQuNzVaTTE4IDEzLjVDMTcuNDA1MyAxMy40ODYxIDE2LjgxMzkgMTMuNTkzMSAxNi4yNjE3IDEzLjgxNDNDMTUuNzA5NCAxNC4wMzU2IDE1LjIwNzggMTQuMzY2NSAxNC43ODcyIDE0Ljc4NzJDMTQuMzY2NSAxNS4yMDc4IDE0LjAzNTYgMTUuNzA5NCAxMy44MTQzIDE2LjI2MTdDMTMuNTkzMSAxNi44MTM5IDEzLjQ4NjEgMTcuNDA1MyAxMy41IDE4QzEzLjQ4NjEgMTguNTk0NyAxMy41OTMxIDE5LjE4NjEgMTMuODE0MyAxOS43MzgzQzE0LjAzNTYgMjAuMjkwNiAxNC4zNjY1IDIwLjc5MjIgMTQuNzg3MiAyMS4yMTI4QzE1LjIwNzggMjEuNjMzNSAxNS43MDk0IDIxLjk2NDQgMTYuMjYxNyAyMi4xODU3QzE2LjgxMzkgMjIuNDA2OSAxNy40MDUzIDIyLjUxMzkgMTggMjIuNUMxOC41OTQ3IDIyLjUxMzkgMTkuMTg2MSAyMi40MDY5IDE5LjczODMgMjIuMTg1N0MyMC4yOTA2IDIxLjk2NDQgMjAuNzkyMiAyMS42MzM1IDIxLjIxMjggMjEuMjEyOEMyMS42MzM1IDIwLjc5MjIgMjEuOTY0NCAyMC4yOTA2IDIyLjE4NTcgMTkuNzM4M0MyMi40MDY5IDE5LjE4NjEgMjIuNTEzOSAxOC41OTQ3IDIyLjUgMThDMjIuNTEzOSAxNy40MDUzIDIyLjQwNjkgMTYuODEzOSAyMi4xODU3IDE2LjI2MTdDMjEuOTY0NCAxNS43MDk0IDIxLjYzMzUgMTUuMjA3OCAyMS4yMTI4IDE0Ljc4NzJDMjAuNzkyMiAxNC4zNjY1IDIwLjI5MDYgMTQuMDM1NiAxOS43MzgzIDEzLjgxNDNDMTkuMTg2MSAxMy41OTMxIDE4LjU5NDcgMTMuNDg2MSAxOCAxMy41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";

/***/ }),

/***/ "./src/app/components/assets/artMain-logo.jpg":
/*!****************************************************!*\
  !*** ./src/app/components/assets/artMain-logo.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be6f130160bdf9acb474.jpg";

/***/ }),

/***/ "./src/app/components/assets/main-background.jpg":
/*!*******************************************************!*\
  !*** ./src/app/components/assets/main-background.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94d7d30a6bd21a4aa820.jpg";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Black.eot":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Black.eot ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b2585eedd7a4d88c123.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Black.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Black.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d9a8c2015f9498b72ae.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Black.woff":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Black.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9df216db6a98486e2d4.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Black.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Black.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae06da6f25281591aa09.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BlackItalic.eot":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BlackItalic.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c22099e2e812b31e190.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BlackItalic.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BlackItalic.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d038b5d638246ddec64.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BlackItalic.woff":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BlackItalic.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8be93572136655f575f2.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BlackItalic.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BlackItalic.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aca6567d47c77faf134e.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Bold.eot":
/*!******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Bold.eot ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa68c169bc1dc3db278e.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Bold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "901a60fc2835c74fba67.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Bold.woff":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Bold.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0607a1bc636f63251ed8.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Bold.woff2":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Bold.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef7c40ff1efeaaa4c7c6.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BoldItalic.eot":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BoldItalic.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "935ff576a0471c10fe20.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BoldItalic.ttf":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BoldItalic.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd526cc457cf69375bad.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BoldItalic.woff":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BoldItalic.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76c9191d364a334e16f9.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-BoldItalic.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-BoldItalic.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d9c407895620d7ab124.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Extrabold.eot":
/*!***********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Extrabold.eot ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35fe3e3eaadedba86260.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Extrabold.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Extrabold.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92e435f7fae6070d73bb.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Extrabold.woff":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Extrabold.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed1c7da8e3e8ced5c670.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Extrabold.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Extrabold.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c5942d3e4d9a9645df4.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.eot":
/*!*****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ExtraboldItalic.eot ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4bac2be67e19951f23d.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ExtraboldItalic.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "465aa5d03dff4ec5094d.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff":
/*!******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a15d926ad5ece9049e9d.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff2":
/*!*******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ExtraboldItalic.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb765d86e74c6a0ad15a.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Heavy.eot":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Heavy.eot ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "723496c6c6d2b0b662f1.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Heavy.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Heavy.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e275bc10f5c1d5d610fa.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Heavy.woff":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Heavy.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a33d69253e238091b7b1.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Heavy.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Heavy.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19b3f6fe15dc6f668d28.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-HeavyItalic.eot":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-HeavyItalic.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "086f7a74ba7719cd158f.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-HeavyItalic.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-HeavyItalic.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44070aa29f4a11d8a59c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-HeavyItalic.woff":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-HeavyItalic.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25ba04db5c80f50fad42.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-HeavyItalic.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-HeavyItalic.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1260ebe381a29891642a.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Light.eot":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Light.eot ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f498309f9a88b0a4402b.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Light.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ac7c2f9cb59ea1ba11c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Light.woff":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Light.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "368f09f56e89b3fe11c7.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Light.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Light.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dedfda6d5718bf775a46.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-LightItalic.eot":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-LightItalic.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47983c845f8baa0ba358.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-LightItalic.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-LightItalic.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6837de816692964aa2f.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-LightItalic.woff":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-LightItalic.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d899841d177dfb55d0fd.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-LightItalic.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-LightItalic.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dde57236def6091f19a.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Medium.eot":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Medium.eot ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fea647f59b209f411b1.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Medium.ttf":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c23f810e531d0702f76.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Medium.woff":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Medium.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5329bc502cdc219ad294.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Medium.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Medium.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acd4e613de34a826c191.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-MediumItalic.eot":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-MediumItalic.eot ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8f86090f3be85e834b7.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-MediumItalic.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-MediumItalic.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30f70edc13365c45c23c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-MediumItalic.woff":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-MediumItalic.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e50c6ab1ea93e533c67d.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-MediumItalic.woff2":
/*!****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-MediumItalic.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56b6f6d9042d2dab3555.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Regular.eot":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Regular.eot ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19055ba082a9f78262f6.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa652e766b6a85a1f9cb.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Regular.woff":
/*!**********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Regular.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebe86c0337572553acea.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Regular.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Regular.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6c9931fabe5a6eb3307.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-RegularItalic.eot":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-RegularItalic.eot ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b7071f6dca0c1e083a6.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-RegularItalic.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-RegularItalic.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f3ed3d83ee07d26cfdf.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-RegularItalic.woff":
/*!****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-RegularItalic.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a8de21734b4321e4a1c.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-RegularItalic.woff2":
/*!*****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-RegularItalic.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c23dc8503bf569ed5ed.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Semibold.eot":
/*!**********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Semibold.eot ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54bc2f8147659c45a055.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Semibold.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Semibold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41fa36c3c8e966b35423.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Semibold.woff":
/*!***********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Semibold.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b042906a8b58ec4633e.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Semibold.woff2":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Semibold.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4d726cc983f5bf45e13.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-SemiboldItalic.eot":
/*!****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-SemiboldItalic.eot ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df9d884f45eb4c4bfa40.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-SemiboldItalic.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-SemiboldItalic.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d55ee19689866217144.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-SemiboldItalic.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-SemiboldItalic.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7e83a7d9d8138dc2c60.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-SemiboldItalic.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-SemiboldItalic.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f573f3d8a93d564aa1e6.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Thin.eot":
/*!******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Thin.eot ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a43b77b973cff8a9425e.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Thin.ttf":
/*!******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Thin.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59ddb327f5768f22408c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Thin.woff":
/*!*******************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Thin.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6eae0e193760168b4236.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-Thin.woff2":
/*!********************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-Thin.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d8f3d8af0a7c707ecb2.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ThinItalic.eot":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ThinItalic.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16f98960e2f1d0901ec3.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ThinItalic.ttf":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ThinItalic.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46249e38c038ad36487c.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ThinItalic.woff":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ThinItalic.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "214652f49c667efc7f82.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-ThinItalic.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-ThinItalic.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa21bf2329fd28412640.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLight.eot":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLight.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69d9572880f4dc7b5030.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLight.ttf":
/*!************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLight.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c356bf421a0b34d2b76.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLight.woff":
/*!*************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLight.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9169fa71e31912724922.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLight.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLight.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "378f435161b00e9b8b60.woff2";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLightItalic.eot":
/*!******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLightItalic.eot ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6fc8679f9d9bbc3e3a7.eot";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLightItalic.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLightItalic.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68a9a27f1aa1261013f3.ttf";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLightItalic.woff":
/*!*******************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLightItalic.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c8027c9490b79159960.woff";

/***/ }),

/***/ "./src/fonts/gilroy/Gilroy-UltraLightItalic.woff2":
/*!********************************************************!*\
  !*** ./src/fonts/gilroy/Gilroy-UltraLightItalic.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e0449968eddd78a3a18.woff2";

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
/******/ 		__webpack_require__.p = "D:\\Code\\RS Projects\\Art-Quiz2\\art-quiz";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFlBQVksZUFBZSxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsYUFBYSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFL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QUErQixrQ0FBa0MsaUJBQWlCO0FBQzVILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixtQ0FBbUMsaUJBQWlCO0FBQzdILDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEw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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQzs7Ozs7QUFDSixxQkFBWXpGLE1BQVosRUFBb0I7QUFBQTs7QUFBQSw2QkFDWkEsTUFEWTtBQUVuQjs7O0VBSHFCa0U7O0FBTXhCLElBQU13QixTQUFTLEdBQUcsSUFBSUQsU0FBSixDQUFjO0FBQzlCekQsRUFBQUEsVUFBVSxFQUFWQSx3REFEOEI7QUFFOUJvQyxFQUFBQSxNQUFNLEVBQU5BLHlEQUY4QixDQUc5Qjs7QUFIOEIsQ0FBZCxDQUFsQjtBQU1BRyw0REFBTSxDQUFDbUIsU0FBRCxDQUFOLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL01haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29yZS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9wYWdlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvdXRpbHMvY2hhbmdlRWxlbWVudFRleHQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvdXRpbHMvZ2V0VXJsLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL2h0bWxUb0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvQnV0dG9uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi9zdHlsZS5zY3NzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvZm9udHMvZ2lscm95L2dpbHJveS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uaHRtbCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi9tYWluLmh0bWwiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3MuaHRtbCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC9jb21wb25lbnRzL0J1dHRvbi9zdHlsZS5zY3NzP2JjMDMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLnNjc3M/YzU2NSIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluL3N0eWxlLnNjc3M/YjljOSIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9zdHlsZS5zY3NzP2Q1ZmUiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YzU5ZCIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgQnV0dG9uRWxlbWVudCBmcm9tICcuL2J1dHRvbi5odG1sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQC9hcHAvY29yZS9jb21wb25lbnQnO1xuaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSAnQC91dGlscy9odG1sVG9FbGVtZW50JztcblxuLy8gY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4vLyAgICAgc3VwZXIoY29uZmlnKVxuLy8gICB9XG5cbi8vICAgZXZlbnRzKCkge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAnLmJ1dHRvbiBjbGljayc6IHRoaXMuZGVsYXlDbGlja1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIGRlbGF5Q2xpY2soZXZlbnQpIHtcbi8vICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcbi8vICAgICBldmVudC50YXJnZXQuc3R5bGUuY29sb3IgPSAnIzAwMCc7XG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiBldmVudC50YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpLCAxMDAwKVxuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuLy8gICBzY2FsYWJsZTogdHJ1ZSxcbi8vICAgdGVtcGxhdGU6IEJ1dHRvbkVsZW1lbnRcbi8vIH0pXG5cbmNvbnN0IGJ1dHRvbiA9IGh0bWxUb0VsZW1lbnQoQnV0dG9uRWxlbWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbjsiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBGb290ZXJFbGVtZW50IGZyb20gJy4vZm9vdGVyLmh0bWwnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAL2FwcC9jb3JlL2NvbXBvbmVudCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZylcbiAgfVxufVxuXG5jb25zdCBmb290ZXIgPSBuZXcgRm9vdGVyKHtcbiAgY2xhc3NTZWxlY3RvcjogJ2Zvb3Rlci13cmFwcGVyJyxcbiAgdGVtcGxhdGU6IEZvb3RlckVsZW1lbnRcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgTWFpbkVsZW1lbnQgZnJvbSAnLi9tYWluLmh0bWwnO1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAL2FwcC9jb3JlL2NvbXBvbmVudCc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpXG4gIH1cblxuICBleHRlcm5hbCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5tYWluX19idXR0b24tLWFydGlzdHMnOiBbYnV0dG9uLCBhcnRpc3RCdG5dLFxuICAgICAgJy5tYWluX19idXR0b24tLXBpY3R1cmVzJzogW2J1dHRvbiwgcGljdHVyZUJ0bl0sXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnLm1haW5fX2J1dHRvbiBjbGljayc6IHRoaXMuZGVsYXlDbGlja1xuICAgIH1cbiAgfVxuXG4gIGRlbGF5Q2xpY2soZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcbiAgICBldmVudC50YXJnZXQuc3R5bGUuY29sb3IgPSAnIzAwMCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiBldmVudC50YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpLCAxMDAwKVxuICB9XG59XG5cbmNvbnN0IGFydGlzdEJ0biA9ICdBcnRpc3QgUXVpeic7XG5jb25zdCBwaWN0dXJlQnRuID0gJ1BpY3R1cmVzIFF1aXonO1xuXG5sZXQgbWFpbiA9IG5ldyBNYWluKHtcbiAgY2xhc3NTZWxlY3RvcjogJ21haW4td3JhcHBlcicsXG4gIHRlbXBsYXRlOiBNYWluRWxlbWVudCxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1haW47IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAL2FwcC9jb3JlL2NvbXBvbmVudCc7XG5pbXBvcnQgU2V0dGluZ3NFbGVtZW50IGZyb20gJy4vc2V0dGluZ3MuaHRtbCc7XG5cblxuLy8gY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3NfX2xpbmsnKTtcblxuZnVuY3Rpb24gb3BlblNldHRpbmdzKCkge1xuXG59XG5cbi8vIHNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblNldHRpbmdzKTtcblxuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZylcbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5zZXR0aW5nc19fb3Blbi1jbG9zZS1idG4gY2xpY2snOiB0aGlzLm9wZW5TZXR0aW5ncyxcbiAgICAgICcuc2V0dGluZ3NfX2hlYWRlci1idG4gY2xpY2snOiB0aGlzLm9wZW5TZXR0aW5ncyxcbiAgICAgICcuc2V0dGluZ3NfX2hlYWRlci10ZXh0IGNsaWNrJzogdGhpcy5vcGVuU2V0dGluZ3MsXG4gICAgICAnLnNldHRpbmdzX19zbGlkZXIgY2hhbmdlJzogdGhpcy5jaGFuZ2VWb2x1bWVcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbnMoKSB7XG5cbiAgfVxuXG4gIG9wZW5TZXR0aW5ncyhldmVudCkge1xuICAgIGlmICghKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NldHRpbmdzX19oZWFkZXItdGV4dCcpKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZCcpLCAyMDAwKTtcbiAgICB9XG4gICAgLy8gSGF2ZSBhY2Nlc3MgdG8gdGhpcy5lbCBiZWNhdXNlIG9mIGluaGVyaXRhbmNlXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXdyYXBwZXInKS5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAxcyBlYXNlLWluLW91dCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXdyYXBwZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIGNoYW5nZVZvbHVtZShldmVudCkgeyBcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkJDQTIgMCUsICNGRkJDQTIgMCUsICNGRkJDQTIgJHt2YWx1ZX0lLCAjQTRBNEE0IDAlLCAjQTRBNEE0IDAlLCNBNEE0QTQgJHtldmVudC50YXJnZXQubWF4IC0gdmFsdWV9JSlgO1xuICB9XG59XG5jb25zdCBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyh7XG4gIGNsYXNzU2VsZWN0b3I6ICdzZXR0aW5ncy13cmFwcGVyJyxcbiAgdGVtcGxhdGU6IFNldHRpbmdzRWxlbWVudFxufSlcbmV4cG9ydCBkZWZhdWx0IHNldHRpbmdzO1xuIiwiaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9NYWluXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5cbmxldCBjb21wb25lbnRzID0gW1xuICBzZXR0aW5ncywgbWFpbiwgZm9vdGVyXG5dXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRzOyIsImltcG9ydCBjaGFuZ2VFbGVtZW50VGV4dCBmcm9tIFwiQC91dGlscy9jaGFuZ2VFbGVtZW50VGV4dFwiO1xuaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIkAvdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNsYXNzU2VsZWN0b3IgPSBjb25maWcuY2xhc3NTZWxlY3RvcjtcbiAgICB0aGlzLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNsYXNzU2VsZWN0b3J9YCkgfHwgbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc2NhbGFibGUpIHtcbiAgICAgIGlmICghdGhpcy5lbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgd2l0aCAke3RoaXMuY2xhc3NTZWxlY3Rvcn0gd2Fzbid0IGZvdW5kYCk7XG4gICAgICB0aGlzLnJld3JpdGVUYWcoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWwpO1xuICAgIH1cbiAgICB0aGlzLl9pbml0RXh0ZXJuYWwoKTtcbiAgICB0aGlzLl9pbml0RXZlbnRzKCk7XG4gIH1cblxuICBfaW5pdEV2ZW50cygpIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzKSByZXR1cm47XG5cbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMoKTtcbiAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IGtleS5zcGxpdCgnICcpO1xuICAgICAgbGV0IGNsYXNzU2VsZWN0b3IgPSBsaXN0ZW5lclswXTtcbiAgICAgIGxldCBldmVudCA9IGxpc3RlbmVyWzFdO1xuICAgICAgXG4gICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NTZWxlY3Rvcik7XG4gICAgICBpZiAoZWxlbWVudC5sZW5ndGggPT0gMSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc1NlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudHNba2V5XS5iaW5kKHRoaXMpKTtcbiAgICAgIGVsc2VcbiAgICAgICAgZWxlbWVudC5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50c1trZXldLmJpbmQodGhpcykpKTtcbiAgICB9KVxuICB9XG5cbiAgX2luaXRFeHRlcm5hbCgpIHtcbiAgICBpZiAoIXRoaXMuZXh0ZXJuYWwpIHJldHVybjtcblxuICAgIGxldCBleHRlcm5hbE9iaiA9IHRoaXMuZXh0ZXJuYWwoKTtcbiAgICBPYmplY3Qua2V5cyhleHRlcm5hbE9iaikuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9IGRhdGE7XG4gICAgICBsZXQgZWxlbWVudCA9IGV4dGVybmFsT2JqW2RhdGFdWzBdO1xuICAgICAgbGV0IHRleHQgPSBleHRlcm5hbE9ialtkYXRhXVsxXTtcblxuICAgICAgbGV0IG5ld0VsZW1lbnQgPSBjaGFuZ2VFbGVtZW50VGV4dChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSwgdGV4dCk7XG4gICAgICBuZXdFbGVtZW50LmlkID0gc2VsZWN0b3Iuc3BsaXQoJy0tJykuc2xpY2UoLTEpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfSlcbiAgfVxuXG4gIHJld3JpdGVUYWcoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc1NlbGVjdG9yfWApLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xhc3NTZWxlY3Rvcn1gKS5hcHBlbmRDaGlsZChodG1sVG9FbGVtZW50KHRoaXMudGVtcGxhdGUpKTtcbiAgfVxufSIsImltcG9ydCBnZXRDdXJyZW50VXJsIGZyb20gXCJAL3V0aWxzL2dldFVybFwiO1xuaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIkAvdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBjb25maWcuY29tcG9uZW50cztcbiAgICB0aGlzLnBhZ2VzID0gY29uZmlnLnBhZ2VzO1xuICAgIHRoaXMucm91dGVzID0gY29uZmlnLnJvdXRlcztcbiAgfVxuXG4gIHJlbmRlckFwcCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudHMpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVuZGVyKCkpXG4gICAgLy8gaWYgKHRoaXMucm91dGVzKSB0aGlzLnJlbmRlclJvdXRlcygpO1xuICB9XG5cbiAgcmVuZGVyUm91dGVzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5jaGFuZ2VSb3V0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNoYW5nZVJvdXRlKCk7XG4gIH1cblxuICBjaGFuZ2VSb3V0ZSgpIHtcbiAgICBsZXQgdXJsID0gZ2V0Q3VycmVudFVybCgpO1xuICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzLmZpbmQoaGFzaCA9PiBoYXNoLnBhdGguc2xpY2UoMSkgPT09IHVybCk7XG4gICAgaWYgKHJvdXRlKSByb3V0ZS5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgY29uc29sZS5sb2cocm91dGUpXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtb2R1bGUpIHtcbiAgbW9kdWxlLnJlbmRlckFwcCgpO1xufSIsImltcG9ydCBmb290ZXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvU2V0dGluZ3NcIjtcbmltcG9ydCBjb21wb25lbnRzIGZyb20gXCJAL2FwcC9jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBob21lUGFnZSA9IFtjb21wb25lbnRzLnNldHRpbmdzLCBjb21wb25lbnRzLm1haW4sIGNvbXBvbmVudHMuZm9vdGVyXSIsImltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSAnLi9Ib21lJ1xuXG5leHBvcnQgeyBob21lUGFnZSB9IiwiaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tICcuL2luZGV4J1xuXG5sZXQgcm91dGVzID0gW1xuICB7cGF0aDogJyMnLCBjb21wb25lbnQ6IGhvbWVQYWdlfVxuXVxuZXhwb3J0IGRlZmF1bHQgcm91dGVzOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW1lbnQsIHRleHQpIHtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBlbGVtZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEN1cnJlbnRVcmwoKSB7XG4gIHJldHVybiBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChodG1sRWxlbWVudCkge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWxFbGVtZW50O1xuICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gMC4ycztcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjRkZCQ0EyO1xcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9CdXR0b24vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE0QkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFqQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQStCQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FBdkJGO0FBd0JFO0VBQ0UsbUJBaEJXO0FBTmY7O0FBMEJBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FBdkJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBidXR0b24tbGF5b3V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jb2x1bW4oJGhlaWdodCkge1xcbiAgQGlmICRoZWlnaHQge1xcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB9XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1peGluIGNlbnRlci1wb3NpdGlvbigkd2lkdGgpIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuJGNhdGVnb3JpZXMtZm9udC1zaXplOiAyMHB4O1xcbiRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTogMjJweDtcXG4kbWVkaXVtLWZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuJG9yYW5nZS1jb2xvcjogI0ZGQkNBMjtcXG5cXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuLmJ1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBAaW5jbHVkZSBidXR0b24tbGF5b3V0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiAuMnM7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogJG9yYW5nZS1jb2xvcjtcXG4gIH1cXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9vdGVyX19jb250YWluZXIge1xcbiAgd2lkdGg6IDkyJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZvb3Rlcl9fZGV2ZWxvcGVyLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTUlO1xcbn1cXG4uZm9vdGVyX19uYW1lIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5mb290ZXJfX2xpbmsge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uZm9vdGVyX19saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiAjRkZCQ0EyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBNkJFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUE1Qko7QUE4QkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUE1Qko7QUE4QkU7RUFDRSxVQUFBO0FBNUJKO0FBOEJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUE1Qko7QUE4QkU7RUFDRSxjQXpCVztBQUhmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBidXR0b24tbGF5b3V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jb2x1bW4oJGhlaWdodCkge1xcbiAgQGlmICRoZWlnaHQge1xcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB9XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1peGluIGNlbnRlci1wb3NpdGlvbigkd2lkdGgpIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuJGNhdGVnb3JpZXMtZm9udC1zaXplOiAyMHB4O1xcbiRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTogMjJweDtcXG4kbWVkaXVtLWZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuJG9yYW5nZS1jb2xvcjogI0ZGQkNBMjtcXG5cXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuLmZvb3RlciB7XFxuICAmX19jb250YWluZXIge1xcbiAgICB3aWR0aDogOTIlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgJl9fZGV2ZWxvcGVyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxNSU7XFxuICB9XFxuICAmX19uYW1lIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG4gICZfX2xpbmsge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgJl9fbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiAkb3JhbmdlLWNvbG9yO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tYWluLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5tYWluX19jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLm1haW5fX2xvZ28ge1xcbiAgd2lkdGg6IDQ1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbn1cXG4ubWFpbl9faW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWFpbl9fYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDYyJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ubWFpbl9fYnV0dG9uIHtcXG4gIGhlaWdodDogNjJweDtcXG4gIHdpZHRoOiA0OCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBNEJBO0VBQ0UseURBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUEzQkY7QUE0QkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQTFCSjtBQTRCRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUExQko7QUE0QkU7RUFDRSxXQUFBO0FBMUJKO0FBNkJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUEzQko7QUE2QkU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQTNCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gYnV0dG9uLWxheW91dCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuQG1peGluIGZsZXgtY29sdW1uKCRoZWlnaHQpIHtcXG4gIEBpZiAkaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgfVxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtaXhpbiBjZW50ZXItcG9zaXRpb24oJHdpZHRoKSB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiRjYXRlZ29yaWVzLWZvbnQtc2l6ZTogMjBweDtcXG4kbmF2aWdhdGlvbi1mb250LXNpemU6IDIycHg7XFxuJG1lZGl1bS1mb250LXdlaWdodDogNTAwO1xcblxcbiRvcmFuZ2UtY29sb3I6ICNGRkJDQTI7XFxuXFxuJHRyYW5zaXRpb24tZGVmYXVsdDogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvbWFpbi1iYWNrZ3JvdW5kLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgJl9fY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICAmX19sb2dvIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gIH1cXG4gICZfX2ltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgJl9fYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDYyJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICAmX19idXR0b24ge1xcbiAgICBoZWlnaHQ6IDYycHg7XFxuICAgIHdpZHRoOiA0OCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3NldHRpbmdzLWJ0bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYmFjay1hcnJvdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvY2xvc2UtYnRuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9taW51cy1idG4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3BsdXMtYnRuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2V0dGluZ3Mge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uc2V0dGluZ3NfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICB3aWR0aDogOTIlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5zZXR0aW5nc19fb3Blbi1jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0JTtcXG4gIGxlZnQ6IC01JTtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG4uc2V0dGluZ3NfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcbi5zZXR0aW5nc19faGVhZGVyLXRleHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG4uc2V0dGluZ3NfX2hlYWRlci10ZXh0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xNSU7XFxuICBsZWZ0OiAtNDUlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuLnNldHRpbmdzX19oZWFkZXItYnRuIHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG4uc2V0dGluZ3NfX2lubmVyIHtcXG4gIGhlaWdodDogNTUlO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnNldHRpbmdzX192b2x1bWUge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbiAgd2lkdGg6IDIzJTtcXG4gIGhlaWdodDogMjMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZXR0aW5nc19fc2xpZGVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGQkNBMiAwJSwgI0ZGQkNBMiA1MCUsICNBNEE0QTQgNTAlLCAjQTRBNEE0IDEwMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMzU2cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbi5zZXR0aW5nc19fc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2V0dGluZ3NfX3NsaWRlci1pY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2V0dGluZ3NfX2NoZWNrIHtcXG4gIGhlaWdodDogMTYlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMjMlO1xcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcXG59XFxuLnNldHRpbmdzX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5zZXR0aW5nc19fY2hlY2tib3ggaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcbi5zZXR0aW5nc19fY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XFxufVxcbi5zZXR0aW5nc19fY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUsIC5zZXR0aW5nc19fY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uc2V0dGluZ3NfX2NoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YmVmb3JlIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZCQ0EyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLnNldHRpbmdzX19jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmFmdGVyIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgdG9wOiAtMjBweDtcXG4gIHJpZ2h0OiAtODNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XFxufVxcbi5zZXR0aW5nc19fY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gIHRvcDogLTIwcHg7XFxuICByaWdodDogLTYwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4uc2V0dGluZ3NfX3RpbWUge1xcbiAgaGVpZ2h0OiAxOCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxNiU7XFxufVxcbi5zZXR0aW5nc19fZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDQ1JTtcXG59XFxuLnNldHRpbmdzX19udW1iZXIge1xcbiAgbWFyZ2luLXRvcDogNCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uc2V0dGluZ3NfX2J1dHRvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXgtd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxufVxcbi5zZXR0aW5nc19fYnV0dG9uLS1taW51cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG4uc2V0dGluZ3NfX2J1dHRvbi0tcGx1cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG4uc2V0dGluZ3NfX2NvbmZpZyB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA2JTtcXG59XFxuLnNldHRpbmdzX19jb25maWctd3JhcHBlciB7XFxuICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuLnNldHRpbmdzX19jb25maWctYnV0dG9uIHtcXG4gIHdpZHRoOiA0OSU7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICBhbmltYXRpb246IGJhcnJlbFJvbGwgMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgYmFycmVsUm9sbCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uaGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBNEJBO0VBQ0UsWUFBQTtBQTNCRjtBQTZCRTtFQUNFLGVBQUE7RUFkRixVQWUyQjtFQWQzQixjQUFBO0FBWkY7QUE0QkU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUF2Q0YsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQXFDRSx5REFBQTtBQXRCSjtBQXdCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQXRCSjtBQXdCRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBakNtQjtBQVd2QjtBQXdCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdEJKO0FBeUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFyRUYsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQW1FRSx5REFBQTtBQW5CSjtBQXNCRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQko7QUFzQkU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBekVBLFdBMEVxQjtFQXhFdkIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFxREY7QUFtQkU7RUFDRSx5RkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQWpCSjtBQW1CRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBakJKO0FBbUJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBakJKO0FBb0JFO0VBbkdFLFdBb0dxQjtFQWxHdkIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFpR0UsVUFBQTtFQUNBLG1CQUFBO0FBZko7QUFpQkU7RUFDRSxlQTdGbUI7RUE4Rm5CLGdCQTdGaUI7QUE4RXJCO0FBaUJFO0VBQ0UsYUFBQTtBQWZKO0FBaUJFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFmSjtBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7QUFmSjtBQWlCRTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWhCRjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBaEJKO0FBa0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQWhCSjtBQWtCRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFoQko7QUFtQkU7RUF0SkUsV0F1SnFCO0VBckp2QixhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQW9KRSxVQUFBO0FBZEo7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBZEo7QUFnQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQXJKaUI7QUF1SXJCO0FBZ0JFO0VBN0tBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUEyS0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBVko7QUFZRTtFQUNFLHlEQUFBO0FBVko7QUFZRTtFQUNFLHlEQUFBO0FBVko7QUFhRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBWEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQVhKO0FBYUU7RUFDRSxVQUFBO0FBWEo7O0FBZUE7RUFDRSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQVpGOztBQWVBO0VBQ0U7SUFBSywrQkFBQTtFQVhMO0VBWUE7SUFBTyxpQ0FBQTtFQVRQO0FBQ0Y7QUFXQTtFQUVFLDhCQS9MbUI7RUFnTW5CLGVBQUE7QUFWRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gYnV0dG9uLWxheW91dCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuQG1peGluIGZsZXgtY29sdW1uKCRoZWlnaHQpIHtcXG4gIEBpZiAkaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgfVxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtaXhpbiBjZW50ZXItcG9zaXRpb24oJHdpZHRoKSB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiRjYXRlZ29yaWVzLWZvbnQtc2l6ZTogMjBweDtcXG4kbmF2aWdhdGlvbi1mb250LXNpemU6IDIycHg7XFxuJG1lZGl1bS1mb250LXdlaWdodDogNTAwO1xcblxcbiRvcmFuZ2UtY29sb3I6ICNGRkJDQTI7XFxuXFxuJHRyYW5zaXRpb24tZGVmYXVsdDogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbi5zZXR0aW5ncyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvLyB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICAmX19jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIEBpbmNsdWRlIGNlbnRlci1wb3NpdGlvbig5MiUpO1xcbiAgfVxcbiAgJl9fb3Blbi1jbG9zZS1idG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0JTtcXG4gICAgbGVmdDogLTUlO1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBAaW5jbHVkZSBidXR0b24tbGF5b3V0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3NldHRpbmdzLWJ0bi5zdmcpO1xcbiAgfVxcbiAgJl9faGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgfVxcbiAgJl9faGVhZGVyLXRleHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAkbmF2aWdhdGlvbi1mb250LXNpemU7XFxuICB9XFxuICAmX19oZWFkZXItdGV4dDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTUlO1xcbiAgICBsZWZ0OiAtNDUlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2JhY2stYXJyb3cuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDM0cHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gIH1cXG5cXG4gICZfX2hlYWRlci1idG4ge1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBAaW5jbHVkZSBidXR0b24tbGF5b3V0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2Nsb3NlLWJ0bi5zdmcpO1xcbiAgfVxcblxcbiAgJl9faW5uZXIge1xcbiAgICBoZWlnaHQ6IDU1JTtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwOztcXG4gIH1cXG4gICZfX3ZvbHVtZSB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbiAgICB3aWR0aDogMjMlO1xcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigyMyUpO1xcbiAgfVxcbiAgJl9fc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkb3JhbmdlLWNvbG9yIDAlLCAkb3JhbmdlLWNvbG9yIDUwJSwgI0E0QTRBNCA1MCUsICNBNEE0QTQgMTAwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiAzNTZweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG4gICZfX3NsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxNnB4OyBcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gICZfX3NsaWRlci1pY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gICZfX2NoZWNrIHtcXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oMTYlKTtcXG4gICAgd2lkdGg6IDIzJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcXG4gIH1cXG4gICZfX3RleHQge1xcbiAgICBmb250LXNpemU6ICRuYXZpZ2F0aW9uLWZvbnQtc2l6ZTtcXG4gICAgZm9udC13ZWlnaHQ6ICRtZWRpdW0tZm9udC13ZWlnaHQ7XFxuICB9XFxuICAmX19jaGVja2JveCBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAmX19jaGVja2JveCBsYWJlbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG4gIH1cXG4gICZfX2NoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgJl9fY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXStsYWJlbDpiZWZvcmUsXFxuICAmX19jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdK2xhYmVsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAmX19jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdK2xhYmVsOmJlZm9yZSB7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZCQ0EyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgJl9fY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXStsYWJlbDphZnRlciB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIHJpZ2h0OiAtODNweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XFxuICB9XFxuICAmX19jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICByaWdodDogLTYwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICB9XFxuXFxuICAmX190aW1lIHtcXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oMTglKTtcXG4gICAgd2lkdGg6IDE2JTtcXG4gIH1cXG4gICZfX2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA0NSU7XFxuICB9XFxuICAmX19udW1iZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0JTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogJG1lZGl1bS1mb250LXdlaWdodDtcXG4gIH1cXG4gICZfX2J1dHRvbiB7XFxuICAgIEBpbmNsdWRlIGJ1dHRvbi1sYXlvdXQ7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1heC13aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgfVxcbiAgJl9fYnV0dG9uLS1taW51cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvbWludXMtYnRuLnN2Zyk7XFxuICB9XFxuICAmX19idXR0b24tLXBsdXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3BsdXMtYnRuLnN2Zyk7XFxuICB9XFxuXFxuICAmX19jb25maWcge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiA2JTtcXG4gIH1cXG4gICZfX2NvbmZpZy13cmFwcGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxuICAmX19jb25maWctYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ5JTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gIGFuaW1hdGlvbjogYmFycmVsUm9sbCAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBiYXJyZWxSb2xsIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIC8vIGRpc3BsYXk6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1kZWZhdWx0O1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG4vLyBkaXY6aG92ZXIgPiBidXR0b24ge1xcbiAgLy8gYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICAvLyBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbi8vIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL2ZvbnRzL2dpbHJveS9naWxyb3kuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2FwcC9jb21wb25lbnRzL2Fzc2V0cy9hcnRNYWluLWxvZ28uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogXFxcIkdpbHJveVxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc2V0dGluZ3Mtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIGhlaWdodDogOTUlO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZvb3Rlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogODBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JDZG1CO0VEZW5CLFdBQUE7QUE3QkY7O0FBZ0NBO0VBQ0UsZUFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7QUE3QkY7O0FBK0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBNUJGOztBQStCQTtFQUNFLFlBQUE7QUE1QkY7O0FBOEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQTNCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gYnV0dG9uLWxheW91dCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuQG1peGluIGZsZXgtY29sdW1uKCRoZWlnaHQpIHtcXG4gIEBpZiAkaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgfVxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtaXhpbiBjZW50ZXItcG9zaXRpb24oJHdpZHRoKSB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiRjYXRlZ29yaWVzLWZvbnQtc2l6ZTogMjBweDtcXG4kbmF2aWdhdGlvbi1mb250LXNpemU6IDIycHg7XFxuJG1lZGl1bS1mb250LXdlaWdodDogNTAwO1xcblxcbiRvcmFuZ2UtY29sb3I6ICNGRkJDQTI7XFxuXFxuJHRyYW5zaXRpb24tZGVmYXVsdDogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbkBpbXBvcnQgXFxcIi4uL2ZvbnRzL2dpbHJveS9naWxyb3kuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJub3JtYWxpemUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCJ2YXJzLnNjc3NcXFwiO1xcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgZm9udC13ZWlnaHQ6ICRtZWRpdW0tZm9udC13ZWlnaHQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXBwL2NvbXBvbmVudHMvYXNzZXRzL2FydE1haW4tbG9nby5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLnNldHRpbmdzLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICBoZWlnaHQ6IDk1JTtcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5mb290ZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVwiLFwiQG1peGluIGJ1dHRvbi1sYXlvdXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbkBtaXhpbiBmbGV4LWNvbHVtbigkaGVpZ2h0KSB7XFxuICBAaWYgJGhlaWdodCB7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG4gIH1cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyLXBvc2l0aW9uKCR3aWR0aCkge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4kY2F0ZWdvcmllcy1mb250LXNpemU6IDIwcHg7XFxuJG5hdmlnYXRpb24tZm9udC1zaXplOiAyMnB4O1xcbiRtZWRpdW0tZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4kb3JhbmdlLWNvbG9yOiAjRkZCQ0EyO1xcblxcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IGFsbCAxcyBlYXNlLWluLW91dDtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIkdpbHJveS1SZWd1bGFyLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIkdpbHJveS1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiR2lscm95LVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIkdpbHJveS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIkdpbHJveS1FeHRyYWJvbGRJdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiR2lscm95LUV4dHJhYm9sZEl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIkdpbHJveS1FeHRyYWJvbGRJdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIkdpbHJveS1FeHRyYWJvbGRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiR2lscm95LUJvbGQuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiR2lscm95LUJvbGQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiR2lscm95LUJvbGQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18gPSBuZXcgVVJMKFwiR2lscm95LUJsYWNrLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQmxhY2sud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiR2lscm95LUJsYWNrLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiR2lscm95LUJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTGlnaHQuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIkdpbHJveS1MaWdodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTGlnaHQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fID0gbmV3IFVSTChcIkdpbHJveS1TZW1pYm9sZC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18gPSBuZXcgVVJMKFwiR2lscm95LVNlbWlib2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fID0gbmV3IFVSTChcIkdpbHJveS1TZW1pYm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fID0gbmV3IFVSTChcIkdpbHJveS1TZW1pYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18gPSBuZXcgVVJMKFwiR2lscm95LU1lZGl1bS5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18gPSBuZXcgVVJMKFwiR2lscm95LU1lZGl1bS53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTWVkaXVtLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18gPSBuZXcgVVJMKFwiR2lscm95LU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18gPSBuZXcgVVJMKFwiR2lscm95LU1lZGl1bUl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18gPSBuZXcgVVJMKFwiR2lscm95LU1lZGl1bUl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktTWVkaXVtSXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18gPSBuZXcgVVJMKFwiR2lscm95LU1lZGl1bUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18gPSBuZXcgVVJMKFwiR2lscm95LUJsYWNrSXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zM19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQmxhY2tJdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18gPSBuZXcgVVJMKFwiR2lscm95LUJsYWNrSXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18gPSBuZXcgVVJMKFwiR2lscm95LUJsYWNrSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVWx0cmFMaWdodC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzdfX18gPSBuZXcgVVJMKFwiR2lscm95LVVsdHJhTGlnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzhfX18gPSBuZXcgVVJMKFwiR2lscm95LVVsdHJhTGlnaHQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVWx0cmFMaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18gPSBuZXcgVVJMKFwiR2lscm95LVJlZ3VsYXJJdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQxX19fID0gbmV3IFVSTChcIkdpbHJveS1SZWd1bGFySXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQyX19fID0gbmV3IFVSTChcIkdpbHJveS1SZWd1bGFySXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDNfX18gPSBuZXcgVVJMKFwiR2lscm95LVJlZ3VsYXJJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ0X19fID0gbmV3IFVSTChcIkdpbHJveS1TZW1pYm9sZEl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDVfX18gPSBuZXcgVVJMKFwiR2lscm95LVNlbWlib2xkSXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ2X19fID0gbmV3IFVSTChcIkdpbHJveS1TZW1pYm9sZEl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ3X19fID0gbmV3IFVSTChcIkdpbHJveS1TZW1pYm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDhfX18gPSBuZXcgVVJMKFwiR2lscm95LUhlYXZ5SXRhbGljLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80OV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktSGVhdnlJdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTBfX18gPSBuZXcgVVJMKFwiR2lscm95LUhlYXZ5SXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTFfX18gPSBuZXcgVVJMKFwiR2lscm95LUhlYXZ5SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81Ml9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktRXh0cmFib2xkLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81M19fXyA9IG5ldyBVUkwoXCJHaWxyb3ktRXh0cmFib2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU0X19fID0gbmV3IFVSTChcIkdpbHJveS1FeHRyYWJvbGQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81NV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktRXh0cmFib2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81Nl9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQm9sZEl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTdfX18gPSBuZXcgVVJMKFwiR2lscm95LUJvbGRJdGFsaWMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNThfX18gPSBuZXcgVVJMKFwiR2lscm95LUJvbGRJdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81OV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktQm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjBfX18gPSBuZXcgVVJMKFwiR2lscm95LVVsdHJhTGlnaHRJdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYxX19fID0gbmV3IFVSTChcIkdpbHJveS1VbHRyYUxpZ2h0SXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzYyX19fID0gbmV3IFVSTChcIkdpbHJveS1VbHRyYUxpZ2h0SXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjNfX18gPSBuZXcgVVJMKFwiR2lscm95LVVsdHJhTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY0X19fID0gbmV3IFVSTChcIkdpbHJveS1MaWdodEl0YWxpYy5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjVfX18gPSBuZXcgVVJMKFwiR2lscm95LUxpZ2h0SXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY2X19fID0gbmV3IFVSTChcIkdpbHJveS1MaWdodEl0YWxpYy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY3X19fID0gbmV3IFVSTChcIkdpbHJveS1MaWdodEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjhfX18gPSBuZXcgVVJMKFwiR2lscm95LUhlYXZ5LmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82OV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktSGVhdnkud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzBfX18gPSBuZXcgVVJMKFwiR2lscm95LUhlYXZ5LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzFfX18gPSBuZXcgVVJMKFwiR2lscm95LUhlYXZ5LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83Ml9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVGhpbi5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzNfX18gPSBuZXcgVVJMKFwiR2lscm95LVRoaW4ud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzRfX18gPSBuZXcgVVJMKFwiR2lscm95LVRoaW4ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83NV9fXyA9IG5ldyBVUkwoXCJHaWxyb3ktVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzZfX18gPSBuZXcgVVJMKFwiR2lscm95LVRoaW5JdGFsaWMuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc3X19fID0gbmV3IFVSTChcIkdpbHJveS1UaGluSXRhbGljLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc4X19fID0gbmV3IFVSTChcIkdpbHJveS1UaGluSXRhbGljLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzlfX18gPSBuZXcgVVJMKFwiR2lscm95LVRoaW5JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQ0X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzYwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzYxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDhfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80OV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81MF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81MV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81Ml9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81Ml9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzUzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82OF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82OV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83MV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzU2X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzcyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzczX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82MV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82Ml9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82M19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82NF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82NF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84Ml9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84M19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84NF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84NV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84Nl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzY4X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNjlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzkwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzkxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNzJfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83M19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83NF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83NV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83Nl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83Nl9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85N19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85OF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85OV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzc5X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFJlZ3VsYXInKSwgbG9jYWwoJ0dpbHJveS1SZWd1bGFyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEV4dHJhYm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1FeHRyYWJvbGRJdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEJvbGQnKSwgbG9jYWwoJ0dpbHJveS1Cb2xkJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEJsYWNrJyksIGxvY2FsKCdHaWxyb3ktQmxhY2snKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBMaWdodCcpLCBsb2NhbCgnR2lscm95LUxpZ2h0JyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgU2VtaWJvbGQnKSwgbG9jYWwoJ0dpbHJveS1TZW1pYm9sZCcpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IE1lZGl1bScpLCBsb2NhbCgnR2lscm95LU1lZGl1bScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IE1lZGl1bSBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1NZWRpdW1JdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBCbGFjayBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1CbGFja0l0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80NV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFVsdHJhTGlnaHQnKSwgbG9jYWwoJ0dpbHJveS1VbHRyYUxpZ2h0JyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80Nl9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80N19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80OF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQ5X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzUwX19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgUmVndWxhciBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1SZWd1bGFySXRhbGljJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81MV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81Ml9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81M19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU0X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU1X19fICsgXCIpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgU2VtaWJvbGQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktU2VtaWJvbGRJdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzU4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNTlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBIZWF2eSBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1IZWF2eUl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82NF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82NV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEV4dHJhYm9sZCcpLCBsb2NhbCgnR2lscm95LUV4dHJhYm9sZCcpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNjhfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82OV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83MF9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEJvbGQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktQm9sZEl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83NF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzVfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBVbHRyYUxpZ2h0IEl0YWxpYycpLCBsb2NhbCgnR2lscm95LVVsdHJhTGlnaHRJdGFsaWMnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzc4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNzlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1MaWdodEl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84NF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84NV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEhlYXZ5JyksIGxvY2FsKCdHaWxyb3ktSGVhdnknKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg2X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg3X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzg4X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfODlfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTBfX18gKyBcIik7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBUaGluJyksIGxvY2FsKCdHaWxyb3ktVGhpbicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85NF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85NV9fXyArIFwiKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFRoaW4gSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktVGhpbkl0YWxpYycpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTZfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOTdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOThfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85OV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZvbnRzL2dpbHJveS9naWxyb3kuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUE4QjtJQUM5Qjs7OztrRUFJZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBc0M7SUFDdEM7Ozs7a0VBSXdEO0lBQ3hELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTJCO0lBQzNCOzs7O21FQUk2QztJQUM3QyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUE0QjtJQUM1Qjs7OzttRUFJOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNEI7SUFDNUI7Ozs7bUVBSThDO0lBQzlDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQStCO0lBQy9COzs7O21FQUlpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUE2QjtJQUM3Qjs7OzttRUFJK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBbUM7SUFDbkM7Ozs7bUVBSXFEO0lBQ3JELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQWtDO0lBQ2xDOzs7O21FQUlvRDtJQUNwRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFpQztJQUNqQzs7OzttRUFJbUQ7SUFDbkQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBb0M7SUFDcEM7Ozs7bUVBSXNEO0lBQ3RELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQXFDO0lBQ3JDOzs7O21FQUl1RDtJQUN2RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUFrQztJQUNsQzs7OzttRUFJb0Q7SUFDcEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBZ0M7SUFDaEM7Ozs7bUVBSWtEO0lBQ2xELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQWlDO0lBQ2pDOzs7O21FQUltRDtJQUNuRCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUF1QztJQUN2Qzs7OzttRUFJeUQ7SUFDekQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBa0M7SUFDbEM7Ozs7bUVBSW9EO0lBQ3BELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTRCO0lBQzVCOzs7O21FQUk4QztJQUM5QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUEyQjtJQUMzQjs7OzttRUFJNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBaUM7SUFDakM7Ozs7bUVBSW1EO0lBQ25ELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1SZWd1bGFyLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgUmVndWxhcicpLCBsb2NhbCgnR2lscm95LVJlZ3VsYXInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktRXh0cmFib2xkSXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgRXh0cmFib2xkIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUV4dHJhYm9sZEl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktRXh0cmFib2xkSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1FeHRyYWJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1FeHRyYWJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktRXh0cmFib2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUJvbGQuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBCb2xkJyksIGxvY2FsKCdHaWxyb3ktQm9sZCcpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktQmxhY2suZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBCbGFjaycpLCBsb2NhbCgnR2lscm95LUJsYWNrJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1CbGFjay5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktQmxhY2sud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1CbGFjay53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1CbGFjay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1MaWdodC5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IExpZ2h0JyksIGxvY2FsKCdHaWxyb3ktTGlnaHQnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUxpZ2h0LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LVNlbWlib2xkLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgU2VtaWJvbGQnKSwgbG9jYWwoJ0dpbHJveS1TZW1pYm9sZCcpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktU2VtaWJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVNlbWlib2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktU2VtaWJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktU2VtaWJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktTWVkaXVtLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgTWVkaXVtJyksIGxvY2FsKCdHaWxyb3ktTWVkaXVtJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1NZWRpdW0uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktTWVkaXVtSXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgTWVkaXVtIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LU1lZGl1bUl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTWVkaXVtSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1NZWRpdW1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1NZWRpdW1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTWVkaXVtSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUJsYWNrSXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgQmxhY2sgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktQmxhY2tJdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJsYWNrSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1CbGFja0l0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJsYWNrSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJsYWNrSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LVVsdHJhTGlnaHQuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBVbHRyYUxpZ2h0JyksIGxvY2FsKCdHaWxyb3ktVWx0cmFMaWdodCcpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVWx0cmFMaWdodC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVWx0cmFMaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVVsdHJhTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVWx0cmFMaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1SZWd1bGFySXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgUmVndWxhciBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1SZWd1bGFySXRhbGljJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1SZWd1bGFySXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1SZWd1bGFySXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktUmVndWxhckl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1SZWd1bGFySXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LVNlbWlib2xkSXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgU2VtaWJvbGQgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktU2VtaWJvbGRJdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVNlbWlib2xkSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1TZW1pYm9sZEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVNlbWlib2xkSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVNlbWlib2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUhlYXZ5SXRhbGljLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgSGVhdnkgSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktSGVhdnlJdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUhlYXZ5SXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1IZWF2eUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LUhlYXZ5SXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUhlYXZ5SXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUV4dHJhYm9sZC5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IEV4dHJhYm9sZCcpLCBsb2NhbCgnR2lscm95LUV4dHJhYm9sZCcpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktRXh0cmFib2xkLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1FeHRyYWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1FeHRyYWJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktRXh0cmFib2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LUJvbGRJdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBCb2xkIEl0YWxpYycpLCBsb2NhbCgnR2lscm95LUJvbGRJdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJvbGRJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1Cb2xkSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUJvbGRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xcbiAgICBzcmM6IHVybCgnR2lscm95LVVsdHJhTGlnaHRJdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBVbHRyYUxpZ2h0IEl0YWxpYycpLCBsb2NhbCgnR2lscm95LVVsdHJhTGlnaHRJdGFsaWMnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVVsdHJhTGlnaHRJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVVsdHJhTGlnaHRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1VbHRyYUxpZ2h0SXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVVsdHJhTGlnaHRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktTGlnaHRJdGFsaWMuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0dpbHJveS1MaWdodEl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTGlnaHRJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LUxpZ2h0SXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTGlnaHRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktTGlnaHRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktSGVhdnkuZW90Jyk7XFxuICAgIHNyYzogbG9jYWwoJ0dpbHJveSBIZWF2eScpLCBsb2NhbCgnR2lscm95LUhlYXZ5JyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1IZWF2eS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktSGVhdnkud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1IZWF2eS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1IZWF2eS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95JztcXG4gICAgc3JjOiB1cmwoJ0dpbHJveS1UaGluLmVvdCcpO1xcbiAgICBzcmM6IGxvY2FsKCdHaWxyb3kgVGhpbicpLCBsb2NhbCgnR2lscm95LVRoaW4nKSxcXG4gICAgICAgIHVybCgnR2lscm95LVRoaW4uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVRoaW4ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ0dpbHJveS1UaGluLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnR2lscm95LVRoaW4udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XFxuICAgIHNyYzogdXJsKCdHaWxyb3ktVGhpbkl0YWxpYy5lb3QnKTtcXG4gICAgc3JjOiBsb2NhbCgnR2lscm95IFRoaW4gSXRhbGljJyksIGxvY2FsKCdHaWxyb3ktVGhpbkl0YWxpYycpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVGhpbkl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVGhpbkl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnR2lscm95LVRoaW5JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCdHaWxyb3ktVGhpbkl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0NBRUQ7RUFDQyxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uXFxcIj48L2J1dHRvbj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3JzLWxvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19sb2dvXFxcIj5cXG4gICAgICA8aW1nIGNsYXNzPVxcXCJmb290ZXJfX2ltZ1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJSUyBTY2hvb2wgbG9nb1xcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2RldmVsb3Blci1pbmZvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX25hbWVcXFwiPkRldmVsb3BlZCBieSA8YSBjbGFzcz1cXFwiZm9vdGVyX19saW5rXFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vc3RhcmZheWVyXFxcIj5zdGFyZmF5ZXI8L2E+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyX195ZWFyXFxcIj4yMDIxPC9kaXY+XFxuICAgIDwvZGl2PiAgXFxuICA8L2Rpdj5cXG48L2Zvb3Rlcj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2FydFF1aXotbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8bWFpbiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJtYWluX19jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYWluX19sb2dvXFxcIj5cXG4gICAgICA8aW1nIGNsYXNzPVxcXCJtYWluX19pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwiQXJ0IFF1aXogbG9nb1xcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYWluX19idXR0b24tY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYWluX19idXR0b24gbWFpbl9fYnV0dG9uLS1hcnRpc3RzXFxcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYWluX19idXR0b24gbWFpbl9fYnV0dG9uLS1waWN0dXJlc1xcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9tYWluPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvbXV0ZS1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9sb3VkLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInNldHRpbmdzIGhpZGRlblxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX29wZW4tY2xvc2VcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcInNldHRpbmdzX19vcGVuLWNsb3NlLWJ0blxcXCIgaWQ9XFxcInNldHRpbmdzXFxcIj48L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19oZWFkZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19oZWFkZXItdGV4dFxcXCI+U2V0dGluZ3M8L2Rpdj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzZXR0aW5nc19faGVhZGVyLWJ0blxcXCI+PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19faW5uZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX192b2x1bWVcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3RpdGxlXFxcIj5Wb2x1bWU8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19zbGlkZXItY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGlucHV0IGNsYXNzPSdzZXR0aW5nc19fc2xpZGVyJyB0eXBlPSdyYW5nZScgbWluPScwJyBtYXg9JzEwMCc+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19zbGlkZXItaWNvbnNcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInNldHRpbmdzX19pY29uXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIm11dGUgaWNvblxcXCI+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic2V0dGluZ3NfX2ljb25cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwibG91ZCBpY29uXFxcIj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY2hlY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3RpdGxlXFxcIj5UaW1lIGdhbWU8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19jaGVjay1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fdGV4dFxcXCI+T248L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NoZWNrYm94XFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcImNoZWNrYm94LWNhdHMxXFxcIiBpZD1cXFwiY2hlY2tib3gtMVxcXCIgdmFsdWU9XFxcIjFcXFwiIGNoZWNrZWQ+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY2hlY2tib3gtMVxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fdGltZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fdGl0bGVcXFwiPlRpbWUgdG8gYW5zd2VyPC9kaXY+XFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwic2V0dGluZ3NfX2Zvcm1cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzZXR0aW5nc19fYnV0dG9uIHNldHRpbmdzX19idXR0b24tLW1pbnVzXFxcIj48L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX251bWJlclxcXCI+MDwvZGl2PlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzZXR0aW5nc19fYnV0dG9uIHNldHRpbmdzX19idXR0b24tLXBsdXNcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbmZpZ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbmZpZy13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNldHRpbmdzX19jb25maWctYnV0dG9uXFxcIj48L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNldHRpbmdzX19jb25maWctYnV0dG9uXFxcIj48L2J1dHRvbj5cXG4gICAgICA8L2Rpdj4gIFxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAgXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIkQ6XFxcXENvZGVcXFxcUlMgUHJvamVjdHNcXFxcQXJ0LVF1aXoyXFxcXGFydC1xdWl6XCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbmltcG9ydCAnQC9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9hcHAvY29yZS9tb2R1bGUnO1xuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy8nO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL2FwcC9wYWdlcy9yb3V0ZXMnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FwcC9jb3JlL3JlbmRlcic7XG5cbmNsYXNzIEFwcE1vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cbn1cblxuY29uc3QgYXBwTW9kdWxlID0gbmV3IEFwcE1vZHVsZSh7XG4gIGNvbXBvbmVudHMsXG4gIHJvdXRlc1xuICAvLyBwYWdlczogcGFnZXMsXG59KVxuXG5yZW5kZXIoYXBwTW9kdWxlKTsiXSwibmFtZXMiOlsiQnV0dG9uRWxlbWVudCIsIkNvbXBvbmVudCIsImh0bWxUb0VsZW1lbnQiLCJidXR0b24iLCJGb290ZXJFbGVtZW50IiwiRm9vdGVyIiwiY29uZmlnIiwiZm9vdGVyIiwiY2xhc3NTZWxlY3RvciIsInRlbXBsYXRlIiwiTWFpbkVsZW1lbnQiLCJNYWluIiwiYXJ0aXN0QnRuIiwicGljdHVyZUJ0biIsImRlbGF5Q2xpY2siLCJldmVudCIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIm1haW4iLCJTZXR0aW5nc0VsZW1lbnQiLCJvcGVuU2V0dGluZ3MiLCJTZXR0aW5ncyIsImNoYW5nZVZvbHVtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlIiwidmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYXgiLCJzZXR0aW5ncyIsImNvbXBvbmVudHMiLCJjaGFuZ2VFbGVtZW50VGV4dCIsImVsIiwic2NhbGFibGUiLCJFcnJvciIsInJld3JpdGVUYWciLCJjb25zb2xlIiwibG9nIiwiX2luaXRFeHRlcm5hbCIsIl9pbml0RXZlbnRzIiwiZXZlbnRzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJsaXN0ZW5lciIsInNwbGl0IiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsImV4dGVybmFsIiwiZXh0ZXJuYWxPYmoiLCJkYXRhIiwic2VsZWN0b3IiLCJ0ZXh0IiwibmV3RWxlbWVudCIsImNsb25lTm9kZSIsImlkIiwic2xpY2UiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImdldEN1cnJlbnRVcmwiLCJNb2R1bGUiLCJwYWdlcyIsInJvdXRlcyIsImNvbm5lY3QiLCJjIiwicmVuZGVyIiwid2luZG93IiwiY2hhbmdlUm91dGUiLCJ1cmwiLCJyb3V0ZSIsImZpbmQiLCJoYXNoIiwicGF0aCIsImNvbXBvbmVudCIsIm1vZHVsZSIsInJlbmRlckFwcCIsImhvbWVQYWdlIiwidGV4dENvbnRlbnQiLCJsb2NhdGlvbiIsImh0bWxFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiQXBwTW9kdWxlIiwiYXBwTW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==