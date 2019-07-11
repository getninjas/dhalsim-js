(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.dhalsim = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var defaultDhalsimOptions = {
    breakingPointValue: '',
    tablet: '768px',
    desktop: '960px',
    wide: '1200px'
  };

  var Dhalsim =
  /*#__PURE__*/
  function () {
    function Dhalsim(options) {
      _classCallCheck(this, Dhalsim);

      _extends(this, defaultDhalsimOptions, options);
    }

    _createClass(Dhalsim, [{
      key: "init",
      value: function init() {
        this.renderCSS();
      }
    }, {
      key: "renderCSS",
      value: function renderCSS() {
        var css = "\n      body:before {\n        content: 'smartphone';\n        display: none;\n      }\n\n      @media (min-width: ".concat(this.tablet, ") {\n        body:before {\n          content: 'tablet';\n        }\n      }\n\n      @media (min-width: ").concat(this.desktop, ") {\n        body:before {\n          content: 'desktop';\n        }\n      }\n\n      @media (min-width: ").concat(this.wide, ") {\n        body:before {\n          content: 'wide';\n        }\n      }\n    ");
        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
      }
    }, {
      key: "isMobile",
      value: function isMobile() {
        return this.breakpoint === 'smartphone';
      }
    }, {
      key: "isTablet",
      value: function isTablet() {
        return this.breakpoint === 'tablet';
      }
    }, {
      key: "isDesktop",
      value: function isDesktop() {
        return this.breakpoint === 'desktop';
      }
    }, {
      key: "isWide",
      value: function isWide() {
        return this.breakpoint === 'wide';
      }
    }, {
      key: "beyondTablet",
      value: function beyondTablet() {
        return this.isDesktop() || this.isWide();
      }
    }, {
      key: "beyondMobile",
      value: function beyondMobile() {
        return this.isTablet() || this.beyondTablet();
      }
    }, {
      key: "breakpoint",
      get: function get() {
        var _document$getElements = document.getElementsByTagName('body'),
            _document$getElements2 = _slicedToArray(_document$getElements, 1),
            body = _document$getElements2[0];

        this.breakpointValue = window.getComputedStyle(body, ':before').getPropertyValue('content').replace(/"/g, '');
        return this.breakpointValue;
      }
    }]);

    return Dhalsim;
  }();

  _exports["default"] = Dhalsim;
});