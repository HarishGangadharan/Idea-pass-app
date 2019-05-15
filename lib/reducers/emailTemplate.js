"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailTemplateReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/emailTemplate/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emailTemplateInitialState = {
  data: [],
  loading: false,
  template: null,
  total: 0
};

var emailTemplateReducer = function emailTemplateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emailTemplateInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.CREATE_OR_UPDATE_EMAIL_TEMPLATE:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.CREATE_OR_UPDATE_EMAIL_TEMPLATE_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _constants.default.CREATE_OR_UPDATE_EMAIL_TEMPLATE_FAIL:
      return _objectSpread({}, state, {
        error: action.error,
        loading: false
      });

    case _constants.default.GET_EMAIL_TEMPLATE:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.GET_EMAIL_TEMPLATE_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        template: action.response
      });

    case _constants.default.GET_EMAIL_TEMPLATE_FAIL:
      return _objectSpread({}, state, {
        error: action.error,
        loading: false
      });

    case _constants.default.GET_ALL_EMAIL_TEMPLATES:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.GET_ALL_EMAIL_TEMPLATES_SUCCESS:
      return _objectSpread({}, state, {
        data: action.response.data,
        loading: false,
        total: action.response.total
      });

    case _constants.default.GET_ALL_EMAIL_TEMPLATES_FAIL:
      return _objectSpread({}, state, {
        error: action.error,
        loading: false
      });

    case _constants.default.RESET_INITIAL_STATE:
      return emailTemplateInitialState;

    default:
      return state;
  }
};

exports.emailTemplateReducer = emailTemplateReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9lbWFpbFRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbImVtYWlsVGVtcGxhdGVJbml0aWFsU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsInRlbXBsYXRlIiwidG90YWwiLCJlbWFpbFRlbXBsYXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkVtYWlsVGVtcGxhdGVDb25zdGFudHMiLCJDUkVBVEVfT1JfVVBEQVRFX0VNQUlMX1RFTVBMQVRFIiwiQ1JFQVRFX09SX1VQREFURV9FTUFJTF9URU1QTEFURV9TVUNDRVNTIiwiQ1JFQVRFX09SX1VQREFURV9FTUFJTF9URU1QTEFURV9GQUlMIiwiZXJyb3IiLCJHRVRfRU1BSUxfVEVNUExBVEUiLCJHRVRfRU1BSUxfVEVNUExBVEVfU1VDQ0VTUyIsInJlc3BvbnNlIiwiR0VUX0VNQUlMX1RFTVBMQVRFX0ZBSUwiLCJHRVRfQUxMX0VNQUlMX1RFTVBMQVRFUyIsIkdFVF9BTExfRU1BSUxfVEVNUExBVEVTX1NVQ0NFU1MiLCJHRVRfQUxMX0VNQUlMX1RFTVBMQVRFU19GQUlMIiwiUkVTRVRfSU5JVElBTF9TVEFURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7OztBQWdCQSxJQUFNQSx5QkFBeUMsR0FBRztBQUNoREMsRUFBQUEsSUFBSSxFQUFFLEVBRDBDO0FBRWhEQyxFQUFBQSxPQUFPLEVBQUUsS0FGdUM7QUFHaERDLEVBQUFBLFFBQVEsRUFBRSxJQUhzQztBQUloREMsRUFBQUEsS0FBSyxFQUFFO0FBSnlDLENBQWxEOztBQU9PLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBOEU7QUFBQSxNQUE3RUMsS0FBNkUsdUVBQXJETix5QkFBcUQ7QUFBQSxNQUExQk8sTUFBMEI7O0FBQ2hILFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1CQUF1QkMsK0JBQTVCO0FBQ0UsK0JBQ0tKLEtBREw7QUFFRUosUUFBQUEsT0FBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS08sbUJBQXVCRSx1Q0FBNUI7QUFDRSwrQkFDS0wsS0FETDtBQUVFSixRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRixTQUFLTyxtQkFBdUJHLG9DQUE1QjtBQUNFLCtCQUNLTixLQURMO0FBRUVPLFFBQUFBLEtBQUssRUFBRU4sTUFBTSxDQUFDTSxLQUZoQjtBQUdFWCxRQUFBQSxPQUFPLEVBQUU7QUFIWDs7QUFNQSxTQUFLTyxtQkFBdUJLLGtCQUE1QjtBQUNBLCtCQUNLUixLQURMO0FBRUVKLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtPLG1CQUF1Qk0sMEJBQTVCO0FBQ0UsK0JBQ0tULEtBREw7QUFFRUosUUFBQUEsT0FBTyxFQUFFLEtBRlg7QUFHRUMsUUFBQUEsUUFBUSxFQUFFSSxNQUFNLENBQUNTO0FBSG5COztBQUtGLFNBQUtQLG1CQUF1QlEsdUJBQTVCO0FBQ0UsK0JBQ0tYLEtBREw7QUFFRU8sUUFBQUEsS0FBSyxFQUFFTixNQUFNLENBQUNNLEtBRmhCO0FBR0VYLFFBQUFBLE9BQU8sRUFBRTtBQUhYOztBQU1GLFNBQUtPLG1CQUF1QlMsdUJBQTVCO0FBQ0UsK0JBQ0taLEtBREw7QUFFRUosUUFBQUEsT0FBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS08sbUJBQXVCVSwrQkFBNUI7QUFDRSwrQkFDS2IsS0FETDtBQUVFTCxRQUFBQSxJQUFJLEVBQUVNLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQmYsSUFGeEI7QUFHRUMsUUFBQUEsT0FBTyxFQUFFLEtBSFg7QUFJRUUsUUFBQUEsS0FBSyxFQUFFRyxNQUFNLENBQUNTLFFBQVAsQ0FBZ0JaO0FBSnpCOztBQU1GLFNBQUtLLG1CQUF1QlcsNEJBQTVCO0FBQ0UsK0JBQ0tkLEtBREw7QUFFRU8sUUFBQUEsS0FBSyxFQUFFTixNQUFNLENBQUNNLEtBRmhCO0FBR0VYLFFBQUFBLE9BQU8sRUFBRTtBQUhYOztBQUtGLFNBQUtPLG1CQUF1QlksbUJBQTVCO0FBQ0UsYUFBT3JCLHlCQUFQOztBQUVGO0FBQ0MsYUFBT00sS0FBUDtBQTFESDtBQTRERCxDQTdETSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSUFjdGlvblByb3BzIH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCBFbWFpbFRlbXBsYXRlQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvZW1haWxUZW1wbGF0ZS9jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFbWFpbFRlbXBsYXRlIHtcbiAgZGF0YTogSVRlbXBsYXRlTGlzdFtdO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICB0ZW1wbGF0ZTogYW55O1xuICB0b3RhbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZUxpc3Qge1xuICBpZDogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHR5cGU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xufVxuXG5jb25zdCBlbWFpbFRlbXBsYXRlSW5pdGlhbFN0YXRlOiBJRW1haWxUZW1wbGF0ZSA9IHtcbiAgZGF0YTogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICB0ZW1wbGF0ZTogbnVsbCxcbiAgdG90YWw6IDBcbn07XG5cbmV4cG9ydCBjb25zdCBlbWFpbFRlbXBsYXRlUmVkdWNlciA9IChzdGF0ZTogSUVtYWlsVGVtcGxhdGUgPSBlbWFpbFRlbXBsYXRlSW5pdGlhbFN0YXRlLCBhY3Rpb246IElBY3Rpb25Qcm9wcyApID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRW1haWxUZW1wbGF0ZUNvbnN0YW50cy5DUkVBVEVfT1JfVVBEQVRFX0VNQUlMX1RFTVBMQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBFbWFpbFRlbXBsYXRlQ29uc3RhbnRzLkNSRUFURV9PUl9VUERBVEVfRU1BSUxfVEVNUExBVEVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIEVtYWlsVGVtcGxhdGVDb25zdGFudHMuQ1JFQVRFX09SX1VQREFURV9FTUFJTF9URU1QTEFURV9GQUlMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICBjYXNlIEVtYWlsVGVtcGxhdGVDb25zdGFudHMuR0VUX0VNQUlMX1RFTVBMQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBFbWFpbFRlbXBsYXRlQ29uc3RhbnRzLkdFVF9FTUFJTF9URU1QTEFURV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB0ZW1wbGF0ZTogYWN0aW9uLnJlc3BvbnNlXG4gICAgICB9O1xuICAgIGNhc2UgRW1haWxUZW1wbGF0ZUNvbnN0YW50cy5HRVRfRU1BSUxfVEVNUExBVEVfRkFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcblxuICAgIGNhc2UgRW1haWxUZW1wbGF0ZUNvbnN0YW50cy5HRVRfQUxMX0VNQUlMX1RFTVBMQVRFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgRW1haWxUZW1wbGF0ZUNvbnN0YW50cy5HRVRfQUxMX0VNQUlMX1RFTVBMQVRFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhdGE6IGFjdGlvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgdG90YWw6IGFjdGlvbi5yZXNwb25zZS50b3RhbFxuICAgICAgfTtcbiAgICBjYXNlIEVtYWlsVGVtcGxhdGVDb25zdGFudHMuR0VUX0FMTF9FTUFJTF9URU1QTEFURVNfRkFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIEVtYWlsVGVtcGxhdGVDb25zdGFudHMuUkVTRVRfSU5JVElBTF9TVEFURTpcbiAgICAgIHJldHVybiBlbWFpbFRlbXBsYXRlSW5pdGlhbFN0YXRlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl19