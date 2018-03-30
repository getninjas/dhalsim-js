(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.dhalsim = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defaultDhalsimOptions = {
    breakingPointValue: '',
    tablet: '768px',
    desktop: '960px',
    wide: '1200px'
  };

  var Dhalsim = function () {
    function Dhalsim(options) {
      _classCallCheck(this, Dhalsim);

      var defaultOptions = _extends({}, defaultDhalsimOptions, options);
      this.breakingPointValue = defaultOptions.breakingPointValue;

      this.tablet = defaultOptions.tablet;
      this.desktop = defaultOptions.desktop;
      this.wide = defaultOptions.wide;

      this.body = document.getElementsByTagName('body')[0];
    }

    _createClass(Dhalsim, [{
      key: 'init',
      value: function init() {
        this.renderCSS();
      }
    }, {
      key: 'renderCSS',
      value: function renderCSS() {
        var css = '\n      body:before {\n        content: \'smartphone\';\n        display: none;\n      }\n\n      @media (min-width: ' + this.tablet + ') {\n        body:before {\n          content: \'tablet\';\n        }\n      }\n\n      @media (min-width: ' + this.desktop + ') {\n        body:before {\n          content: \'desktop\';\n        }\n      }\n\n      @media (min-width: ' + this.wide + ') {\n        body:before {\n          content: \'wide\';\n        }\n      }\n    ';

        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
      }
    }, {
      key: 'breakpoint',
      value: function breakpoint() {
        this.breakpointValue = window.getComputedStyle(this.body, ':before').getPropertyValue('content').replace(/"/g, '');

        return this.breakpointValue;
      }
    }, {
      key: 'isMobile',
      value: function isMobile() {
        return this.breakpoint() === 'smartphone';
      }
    }, {
      key: 'isTablet',
      value: function isTablet() {
        return this.breakpoint() === 'tablet';
      }
    }, {
      key: 'isDesktop',
      value: function isDesktop() {
        return this.breakpoint() === 'desktop';
      }
    }, {
      key: 'isWide',
      value: function isWide() {
        return this.breakpoint() === 'wide';
      }
    }, {
      key: 'beyondTablet',
      value: function beyondTablet() {
        return this.isDesktop() || this.isWide();
      }
    }, {
      key: 'beyondMobile',
      value: function beyondMobile() {
        return this.isTablet() || this.beyondTablet();
      }
    }]);

    return Dhalsim;
  }();

  exports.default = Dhalsim;
});