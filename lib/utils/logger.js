"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("../");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(message) {
      if (this.isDebuggerEnabled()) {
        // tslint:disable-next-line:no-console
        console.log('Log: ', message);
      }
    }
  }, {
    key: "info",
    value: function info(message) {
      if (this.isDebuggerEnabled()) {
        // tslint:disable-next-line:no-console
        console.info('Info: ', message);
      }
    }
  }, {
    key: "warn",
    value: function warn(message) {
      if (this.isDebuggerEnabled()) {
        // tslint:disable-next-line:no-console
        console.warn('Warn: ', message);
      }
    }
  }, {
    key: "error",
    value: function error(message, _ref) {
      var _error = _extends({}, _ref);

      if (this.isDebuggerEnabled()) {
        // tslint:disable-next-line:no-console
        console.error('Error: ', message, _error);
      }
    }
  }, {
    key: "isDebuggerEnabled",
    value: function isDebuggerEnabled() {
      var state = _.store.getState(); // TODO debugger enabling logic to changed


      return state.global.userStatus.loggedIn;
    }
  }]);

  return Logger;
}();

var _default = new Logger();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sb2dnZXIudHMiXSwibmFtZXMiOlsiTG9nZ2VyIiwibWVzc2FnZSIsImlzRGVidWdnZXJFbmFibGVkIiwiY29uc29sZSIsImxvZyIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJnbG9iYWwiLCJ1c2VyU3RhdHVzIiwibG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7d0JBQ09DLE8sRUFBaUI7QUFDMUIsVUFBSSxLQUFLQyxpQkFBTCxFQUFKLEVBQThCO0FBQzVCO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJILE9BQXJCO0FBQ0Q7QUFDRjs7O3lCQUVXQSxPLEVBQWlCO0FBQzNCLFVBQUksS0FBS0MsaUJBQUwsRUFBSixFQUE4QjtBQUM1QjtBQUNBQyxRQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYSxRQUFiLEVBQXVCSixPQUF2QjtBQUNEO0FBQ0Y7Ozt5QkFFV0EsTyxFQUFpQjtBQUMzQixVQUFJLEtBQUtDLGlCQUFMLEVBQUosRUFBOEI7QUFDNUI7QUFDQUMsUUFBQUEsT0FBTyxDQUFDRyxJQUFSLENBQWEsUUFBYixFQUF1QkwsT0FBdkI7QUFDRDtBQUNGOzs7MEJBRVlBLE8sUUFBdUM7QUFBQSxVQUFqQk0sTUFBaUI7O0FBQ2xELFVBQUksS0FBS0wsaUJBQUwsRUFBSixFQUE4QjtBQUM1QjtBQUNBQyxRQUFBQSxPQUFPLENBQUNJLEtBQVIsQ0FBYyxTQUFkLEVBQXlCTixPQUF6QixFQUFrQ00sTUFBbEM7QUFDRDtBQUNGOzs7d0NBRTJCO0FBQzFCLFVBQU1DLEtBQVUsR0FBR0MsUUFBTUMsUUFBTixFQUFuQixDQUQwQixDQUUxQjs7O0FBQ0EsYUFBT0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JDLFFBQS9CO0FBQ0Q7Ozs7OztlQUdZLElBQUliLE1BQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBzdG9yZSB9ICBmcm9tICcuLi8nO1xuXG5jbGFzcyBMb2dnZXIge1xuICBwdWJsaWMgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmlzRGVidWdnZXJFbmFibGVkKCkpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZygnTG9nOiAnLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc0RlYnVnZ2VyRW5hYmxlZCgpKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5pbmZvKCdJbmZvOiAnLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc0RlYnVnZ2VyRW5hYmxlZCgpKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKCdXYXJuOiAnLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZXJyb3IobWVzc2FnZTogc3RyaW5nLCB7IC4uLmVycm9yIH06IG9iamVjdCkge1xuICAgIGlmICh0aGlzLmlzRGVidWdnZXJFbmFibGVkKCkpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgbWVzc2FnZSwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNEZWJ1Z2dlckVuYWJsZWQoKSB7XG4gICAgY29uc3Qgc3RhdGU6IGFueSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgLy8gVE9ETyBkZWJ1Z2dlciBlbmFibGluZyBsb2dpYyB0byBjaGFuZ2VkXG4gICAgcmV0dXJuIHN0YXRlLmdsb2JhbC51c2VyU3RhdHVzLmxvZ2dlZEluO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2dnZXIoKTtcbiJdfQ==