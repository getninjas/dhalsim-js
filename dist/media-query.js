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
    global.mediaQuery = mod.exports;
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

  var defaultMediaQueryOptions = {
    breakingPointValue: ''
  };

  var MediaQuery = function () {
    function MediaQuery(options) {
      _classCallCheck(this, MediaQuery);

      var defaultOptions = _extends({}, defaultMediaQueryOptions, options);
      this.breakingPointValue = defaultOptions.breakingPointValue;

      this.body = document.getElementsByTagName('body')[0];
    }

    _createClass(MediaQuery, [{
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

    return MediaQuery;
  }();

  exports.default = MediaQuery;
});