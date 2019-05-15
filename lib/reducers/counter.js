"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counterReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/counter/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  count: 0,
  isLoading: false
};

var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.INCREMENT:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _constants.default.INCREMENT_SUCCESS:
      return _objectSpread({}, state, {
        count: state.count + 1,
        isLoading: false
      });

    case _constants.default.INCREMENT_ASYNC:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _constants.default.INCREMENT_ASYNC_SUCCESS:
      return _objectSpread({}, state, {
        count: state.count + 1,
        isLoading: false
      });

    case _constants.default.DECREMENT:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _constants.default.DECREMENT_SUCCESS:
      return _objectSpread({}, state, {
        count: state.count - 1,
        isLoading: false
      });

    case _constants.default.DECREMENT_ASYNC:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _constants.default.DECREMENT_ASYNC_SUCCESS:
      return _objectSpread({}, state, {
        count: state.count - 1,
        isLoading: false
      });

    default:
      return state;
  }
};

exports.counterReducer = counterReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb3VudGVyLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImNvdW50IiwiaXNMb2FkaW5nIiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDb25zdGFudHMiLCJJTkNSRU1FTlQiLCJJTkNSRU1FTlRfU1VDQ0VTUyIsIklOQ1JFTUVOVF9BU1lOQyIsIklOQ1JFTUVOVF9BU1lOQ19TVUNDRVNTIiwiREVDUkVNRU5UIiwiREVDUkVNRU5UX1NVQ0NFU1MiLCJERUNSRU1FTlRfQVNZTkMiLCJERUNSRU1FTlRfQVNZTkNfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQVNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsS0FBSyxFQUFFLENBRFk7QUFFbkJDLEVBQUFBLFNBQVMsRUFBRTtBQUZRLENBQXJCOztBQUtPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBZ0Q7QUFBQSxNQUEvQ0MsS0FBK0MsdUVBQXZDSixZQUF1QztBQUFBLE1BQXpCSyxNQUF5Qjs7QUFDNUUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsbUJBQVVDLFNBQWY7QUFDRSwrQkFDS0osS0FETDtBQUVFRixRQUFBQSxTQUFTLEVBQUU7QUFGYjs7QUFJRixTQUFLSyxtQkFBVUUsaUJBQWY7QUFDRSwrQkFDS0wsS0FETDtBQUVFSCxRQUFBQSxLQUFLLEVBQUVHLEtBQUssQ0FBQ0gsS0FBTixHQUFjLENBRnZCO0FBR0VDLFFBQUFBLFNBQVMsRUFBRTtBQUhiOztBQUtGLFNBQUtLLG1CQUFVRyxlQUFmO0FBQ0UsK0JBQ0tOLEtBREw7QUFFRUYsUUFBQUEsU0FBUyxFQUFFO0FBRmI7O0FBSUYsU0FBS0ssbUJBQVVJLHVCQUFmO0FBQ0UsK0JBQ0tQLEtBREw7QUFFRUgsUUFBQUEsS0FBSyxFQUFFRyxLQUFLLENBQUNILEtBQU4sR0FBYyxDQUZ2QjtBQUdFQyxRQUFBQSxTQUFTLEVBQUU7QUFIYjs7QUFLRixTQUFLSyxtQkFBVUssU0FBZjtBQUNFLCtCQUNLUixLQURMO0FBRUVGLFFBQUFBLFNBQVMsRUFBRTtBQUZiOztBQUlGLFNBQUtLLG1CQUFVTSxpQkFBZjtBQUNFLCtCQUNLVCxLQURMO0FBRUVILFFBQUFBLEtBQUssRUFBRUcsS0FBSyxDQUFDSCxLQUFOLEdBQWMsQ0FGdkI7QUFHRUMsUUFBQUEsU0FBUyxFQUFFO0FBSGI7O0FBS0YsU0FBS0ssbUJBQVVPLGVBQWY7QUFDRSwrQkFDS1YsS0FETDtBQUVFRixRQUFBQSxTQUFTLEVBQUU7QUFGYjs7QUFJRixTQUFLSyxtQkFBVVEsdUJBQWY7QUFDRSwrQkFDS1gsS0FETDtBQUVFSCxRQUFBQSxLQUFLLEVBQUVHLEtBQUssQ0FBQ0gsS0FBTixHQUFjLENBRnZCO0FBR0VDLFFBQUFBLFNBQVMsRUFBRTtBQUhiOztBQUtGO0FBQ0UsYUFBT0UsS0FBUDtBQTlDSjtBQWdERCxDQWpETSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9jb3VudGVyL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IElBY3Rpb25Qcm9wcyB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb3VudGVyUmVkdWNlciB7XG4gIGNvdW50OiBudW1iZXI7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjb3VudDogMCxcbiAgaXNMb2FkaW5nOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IElBY3Rpb25Qcm9wcykgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuSU5DUkVNRU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5JTkNSRU1FTlRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLklOQ1JFTUVOVF9BU1lOQzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuSU5DUkVNRU5UX0FTWU5DX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50ICsgMSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5ERUNSRU1FTlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkRFQ1JFTUVOVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCAtIDEsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuREVDUkVNRU5UX0FTWU5DOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5ERUNSRU1FTlRfQVNZTkNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgLSAxLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXX0=