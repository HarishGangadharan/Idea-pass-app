"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/theme/constants"));

var _application = require("../constants/application.properties");

var _storage = _interopRequireDefault(require("../utils/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inititalState = {
  activeTheme: _storage.default.getItem(_application.AppProperties.ACTIVE_THEME) ? _storage.default.getItem(_application.AppProperties.ACTIVE_THEME) : 'theme1'
};

var themeReducer = function themeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inititalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.CHANGE_THEME:
      _storage.default.setItem(_application.AppProperties.ACTIVE_THEME, action.selectedTheme);

      return _objectSpread({}, state, {
        activeTheme: action.selectedTheme
      });

    default:
      return _objectSpread({}, state);
  }
};

exports.themeReducer = themeReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy90aGVtZS50cyJdLCJuYW1lcyI6WyJpbml0aXRhbFN0YXRlIiwiYWN0aXZlVGhlbWUiLCJzdG9yYWdlIiwiZ2V0SXRlbSIsIkFwcFByb3BlcnRpZXMiLCJBQ1RJVkVfVEhFTUUiLCJ0aGVtZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDb25zdGFudHMiLCJDSEFOR0VfVEhFTUUiLCJzZXRJdGVtIiwic2VsZWN0ZWRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsRUFBQUEsV0FBVyxFQUFFQyxpQkFBUUMsT0FBUixDQUFnQkMsMkJBQWNDLFlBQTlCLElBQThDSCxpQkFBUUMsT0FBUixDQUFnQkMsMkJBQWNDLFlBQTlCLENBQTlDLEdBQTRGO0FBRHJGLENBQXRCOztBQVVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWlEO0FBQUEsTUFBaERDLEtBQWdELHVFQUF4Q1AsYUFBd0M7QUFBQSxNQUF6QlEsTUFBeUI7O0FBQzNFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1CQUFVQyxZQUFmO0FBQ0VULHVCQUFRVSxPQUFSLENBQWdCUiwyQkFBY0MsWUFBOUIsRUFBNENHLE1BQU0sQ0FBQ0ssYUFBbkQ7O0FBQ0EsK0JBQ0tOLEtBREw7QUFFRU4sUUFBQUEsV0FBVyxFQUFFTyxNQUFNLENBQUNLO0FBRnRCOztBQUlGO0FBQ0UsK0JBQ0tOLEtBREw7QUFSSjtBQVlELENBYk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvdGhlbWUvY29uc3RhbnRzJztcbmltcG9ydCB7IEFwcFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdGFudHMvYXBwbGljYXRpb24ucHJvcGVydGllcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi91dGlscy9zdG9yYWdlJztcblxuY29uc3QgaW5pdGl0YWxTdGF0ZSA9IHtcbiAgYWN0aXZlVGhlbWU6IHN0b3JhZ2UuZ2V0SXRlbShBcHBQcm9wZXJ0aWVzLkFDVElWRV9USEVNRSkgPyBzdG9yYWdlLmdldEl0ZW0oQXBwUHJvcGVydGllcy5BQ1RJVkVfVEhFTUUpIDogJ3RoZW1lMSdcbn07XG5cbmltcG9ydCB7IElBY3Rpb25Qcm9wcyB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEl0aGVtZVJlZHVjZXIge1xuICBhY3RpdmVUaGVtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdGhlbWVSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGl0YWxTdGF0ZSwgYWN0aW9uOiBJQWN0aW9uUHJvcHMpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ29uc3RhbnRzLkNIQU5HRV9USEVNRTpcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbShBcHBQcm9wZXJ0aWVzLkFDVElWRV9USEVNRSwgYWN0aW9uLnNlbGVjdGVkVGhlbWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZVRoZW1lOiBhY3Rpb24uc2VsZWN0ZWRUaGVtZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH07XG4gIH1cbn07XG4iXX0=