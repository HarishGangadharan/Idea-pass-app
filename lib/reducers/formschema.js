"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formSchemaReducers = void 0;

var _redux = require("redux");

var _constants = _interopRequireDefault(require("../actions/formschema/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var listInitialState = {
  data: [],
  loading: false,
  total: 0
};
var currentFormInitialState = {
  _id: '',
  form_data: {
    display: 'form'
  },
  form_type: 'data',
  loading: false,
  name: '',
  name_singular: '',
  template_type: 'default'
};
var templateList = {
  data: [],
  loading: false
};

var formSchemaReducer = function formSchemaReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, currentFormInitialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.CREATE_FORM_SCHEMA_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.CREATE_FORM_SCHEMA_SUCCESS:
      return _objectSpread({}, currentFormInitialState);

    case _constants.default.CREATE_FORM_SCHEMA_FAILURE:
      return _objectSpread({}, currentFormInitialState);

    case _constants.default.FETCH_FORM_SCHEMA_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_FORM_SCHEMA_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      }, action.payload);

    case _constants.default.FETCH_FORM_SCHEMA_FAILURE:
      return currentFormInitialState;

    case _constants.default.UPDATE_FORM_SCHEMA_STATE:
      return _objectSpread({}, state, action.data ? action.data : currentFormInitialState, {
        isLoading: false
      });

    case _constants.default.CLEAR_FORM_SCHEMA_DATA:
      return _objectSpread({}, currentFormInitialState, {
        form_data: {
          display: 'form'
        }
      });

    default:
      return state;
  }
};

var formSchemaListReducer = function formSchemaListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : listInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.FETCH_FORM_SCHEMA_LIST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_FORM_SCHEMA_LIST_SUCCESS:
      return _objectSpread({}, state, {
        data: action.payload.data,
        loading: false,
        total: action.payload.total
      });

    case _constants.default.FETCH_FORM_SCHEMA_LIST_FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _constants.default.ADD_FORM_SCHEMA:
      return _objectSpread({}, state, {
        data: state.data.length < 10 ? [].concat(_toConsumableArray(state.data), [action.payload]) : state.data,
        total: state.total + 1
      });

    default:
      return state;
  }
};

var templateListReducer = function templateListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : templateList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.FETCH_TEMPLATE_LIST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_TEMPLATE_LIST_SUCCESS:
      return _objectSpread({}, state, {
        data: action.payload.data,
        loading: false
      });

    case _constants.default.FETCH_TEMPLATE_LIST_FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
};

var formSchemaReducers = (0, _redux.combineReducers)({
  currentFormSchema: formSchemaReducer,
  list: formSchemaListReducer,
  templateList: templateListReducer
});
exports.formSchemaReducers = formSchemaReducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9mb3Jtc2NoZW1hLnRzIl0sIm5hbWVzIjpbImxpc3RJbml0aWFsU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsInRvdGFsIiwiY3VycmVudEZvcm1Jbml0aWFsU3RhdGUiLCJfaWQiLCJmb3JtX2RhdGEiLCJkaXNwbGF5IiwiZm9ybV90eXBlIiwibmFtZSIsIm5hbWVfc2luZ3VsYXIiLCJ0ZW1wbGF0ZV90eXBlIiwidGVtcGxhdGVMaXN0IiwiZm9ybVNjaGVtYVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJGb3JtU2NoZW1hQ29uc3RhbnRzIiwiQ1JFQVRFX0ZPUk1fU0NIRU1BX1JFUVVFU1QiLCJDUkVBVEVfRk9STV9TQ0hFTUFfU1VDQ0VTUyIsIkNSRUFURV9GT1JNX1NDSEVNQV9GQUlMVVJFIiwiRkVUQ0hfRk9STV9TQ0hFTUFfUkVRVUVTVCIsIkZFVENIX0ZPUk1fU0NIRU1BX1NVQ0NFU1MiLCJwYXlsb2FkIiwiRkVUQ0hfRk9STV9TQ0hFTUFfRkFJTFVSRSIsIlVQREFURV9GT1JNX1NDSEVNQV9TVEFURSIsImlzTG9hZGluZyIsIkNMRUFSX0ZPUk1fU0NIRU1BX0RBVEEiLCJmb3JtU2NoZW1hTGlzdFJlZHVjZXIiLCJGRVRDSF9GT1JNX1NDSEVNQV9MSVNUIiwiRkVUQ0hfRk9STV9TQ0hFTUFfTElTVF9TVUNDRVNTIiwiRkVUQ0hfRk9STV9TQ0hFTUFfTElTVF9GQUlMVVJFIiwiQUREX0ZPUk1fU0NIRU1BIiwibGVuZ3RoIiwidGVtcGxhdGVMaXN0UmVkdWNlciIsIkZFVENIX1RFTVBMQVRFX0xJU1QiLCJGRVRDSF9URU1QTEFURV9MSVNUX1NVQ0NFU1MiLCJGRVRDSF9URU1QTEFURV9MSVNUX0ZBSUxVUkUiLCJmb3JtU2NoZW1hUmVkdWNlcnMiLCJjdXJyZW50Rm9ybVNjaGVtYSIsImxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSxJQUFNQSxnQkFB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QUFoRCxLQUEyRFQsS0FBSyxDQUFDYixJQUhyRTtBQUlFRSxRQUFBQSxLQUFLLEVBQUVXLEtBQUssQ0FBQ1gsS0FBTixHQUFjO0FBSnZCOztBQU1GO0FBQ0UsYUFBT1csS0FBUDtBQTFCSjtBQTRCRCxDQWhDRDs7QUFrQ0EsSUFBTW9CLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FHRjtBQUFBLE1BRnhCcEIsS0FFd0IsdUVBRktGLFlBRUw7QUFBQSxNQUR4QkcsTUFDd0I7O0FBQ3hCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1CQUFvQmtCLG1CQUF6QjtBQUNFLCtCQUNLckIsS0FETDtBQUVFWixRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRixTQUFLZSxtQkFBb0JtQiwyQkFBekI7QUFDRSwrQkFDS3RCLEtBREw7QUFFRWIsUUFBQUEsSUFBSSxFQUFFYyxNQUFNLENBQUNRLE9BQVAsQ0FBZXRCLElBRnZCO0FBR0VDLFFBQUFBLE9BQU8sRUFBRTtBQUhYOztBQUtGLFNBQUtlLG1CQUFvQm9CLDJCQUF6QjtBQUNFLCtCQUNLdkIsS0FETDtBQUVFWixRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRjtBQUNFLGFBQU9ZLEtBQVA7QUFsQko7QUFvQkQsQ0F4QkQ7O0FBMEJPLElBQU13QixrQkFBa0IsR0FBRyw0QkFBZ0I7QUFDaERDLEVBQUFBLGlCQUFpQixFQUFFMUIsaUJBRDZCO0FBRWhEMkIsRUFBQUEsSUFBSSxFQUFFWixxQkFGMEM7QUFHaERoQixFQUFBQSxZQUFZLEVBQUVzQjtBQUhrQyxDQUFoQixDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IElBY3Rpb25Qcm9wcyB9IGZyb20gJy4nO1xuaW1wb3J0IEZvcm1TY2hlbWFDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9mb3Jtc2NoZW1hL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1TY2hlbWEge1xuICBmb3JtX2RhdGE6IHtcbiAgICBkaXNwbGF5OiBzdHJpbmc7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hbWVfc2luZ3VsYXI6IHN0cmluZztcbiAgZm9ybV90eXBlOiBzdHJpbmc7XG4gIHRlbXBsYXRlX3R5cGU6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybVNjaGVtYXMge1xuICBkYXRhOiBJRm9ybVNjaGVtYVtdO1xuICB0b3RhbDogbnVtYmVyO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZUZvcm1TY2hlbWEge1xuICBkYXRhOiBJRm9ybVNjaGVtYVtdO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtU2NoZW1hUmVkdWNlciB7XG4gIGN1cnJlbnRGb3JtU2NoZW1hOiBJRm9ybVNjaGVtYTtcbiAgbGlzdDogSUZvcm1TY2hlbWFzO1xuICB0ZW1wbGF0ZUxpc3Q6IElUZW1wbGF0ZUZvcm1TY2hlbWE7XG59XG5cbmNvbnN0IGxpc3RJbml0aWFsU3RhdGU6IElGb3JtU2NoZW1hcyA9IHtcbiAgZGF0YTogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICB0b3RhbDogMFxufTtcblxuY29uc3QgY3VycmVudEZvcm1Jbml0aWFsU3RhdGU6IElGb3JtU2NoZW1hID0ge1xuICBfaWQ6ICcnLFxuICBmb3JtX2RhdGE6IHtcbiAgICBkaXNwbGF5OiAnZm9ybSdcbiAgfSxcbiAgZm9ybV90eXBlOiAnZGF0YScsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBuYW1lOiAnJyxcbiAgbmFtZV9zaW5ndWxhcjogJycsXG4gIHRlbXBsYXRlX3R5cGU6ICdkZWZhdWx0J1xufTtcblxuY29uc3QgdGVtcGxhdGVMaXN0OiBJVGVtcGxhdGVGb3JtU2NoZW1hID0ge1xuICBkYXRhOiBbXSxcbiAgbG9hZGluZzogZmFsc2Vcbn07XG5cbmNvbnN0IGZvcm1TY2hlbWFSZWR1Y2VyID0gKFxuICBzdGF0ZTogSUZvcm1TY2hlbWEgPSB7Li4uY3VycmVudEZvcm1Jbml0aWFsU3RhdGV9LFxuICBhY3Rpb246IElBY3Rpb25Qcm9wc1xuKTogSUZvcm1TY2hlbWEgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGb3JtU2NoZW1hQ29uc3RhbnRzLkNSRUFURV9GT1JNX1NDSEVNQV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBGb3JtU2NoZW1hQ29uc3RhbnRzLkNSRUFURV9GT1JNX1NDSEVNQV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5jdXJyZW50Rm9ybUluaXRpYWxTdGF0ZX07XG4gICAgY2FzZSBGb3JtU2NoZW1hQ29uc3RhbnRzLkNSRUFURV9GT1JNX1NDSEVNQV9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHsuLi5jdXJyZW50Rm9ybUluaXRpYWxTdGF0ZX07XG4gICAgY2FzZSBGb3JtU2NoZW1hQ29uc3RhbnRzLkZFVENIX0ZPUk1fU0NIRU1BX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIEZvcm1TY2hlbWFDb25zdGFudHMuRkVUQ0hfRk9STV9TQ0hFTUFfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgIH07XG4gICAgY2FzZSBGb3JtU2NoZW1hQ29uc3RhbnRzLkZFVENIX0ZPUk1fU0NIRU1BX0ZBSUxVUkU6XG4gICAgICByZXR1cm4gY3VycmVudEZvcm1Jbml0aWFsU3RhdGU7XG4gICAgY2FzZSBGb3JtU2NoZW1hQ29uc3RhbnRzLlVQREFURV9GT1JNX1NDSEVNQV9TVEFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24uZGF0YSA/IGFjdGlvbi5kYXRhIDogY3VycmVudEZvcm1Jbml0aWFsU3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgY2FzZSBGb3JtU2NoZW1hQ29uc3RhbnRzLkNMRUFSX0ZPUk1fU0NIRU1BX0RBVEE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jdXJyZW50Rm9ybUluaXRpYWxTdGF0ZSxcbiAgICAgICAgZm9ybV9kYXRhOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2Zvcm0nXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgZm9ybVNjaGVtYUxpc3RSZWR1Y2VyID0gKFxuICBzdGF0ZTogSUZvcm1TY2hlbWFzID0gbGlzdEluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBJQWN0aW9uUHJvcHNcbik6IElGb3JtU2NoZW1hcyA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZvcm1TY2hlbWFDb25zdGFudHMuRkVUQ0hfRk9STV9TQ0hFTUFfTElTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgRm9ybVNjaGVtYUNvbnN0YW50cy5GRVRDSF9GT1JNX1NDSEVNQV9MSVNUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbFxuICAgICAgfTtcbiAgICBjYXNlIEZvcm1TY2hlbWFDb25zdGFudHMuRkVUQ0hfRk9STV9TQ0hFTUFfTElTVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgRm9ybVNjaGVtYUNvbnN0YW50cy5BRERfRk9STV9TQ0hFTUE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTpcbiAgICAgICAgICBzdGF0ZS5kYXRhLmxlbmd0aCA8IDEwID8gWy4uLnN0YXRlLmRhdGEsIGFjdGlvbi5wYXlsb2FkXSA6IHN0YXRlLmRhdGEsXG4gICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIDFcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdGVtcGxhdGVMaXN0UmVkdWNlciA9IChcbiAgc3RhdGU6IElUZW1wbGF0ZUZvcm1TY2hlbWEgPSB0ZW1wbGF0ZUxpc3QsXG4gIGFjdGlvbjogSUFjdGlvblByb3BzXG4pOiBJVGVtcGxhdGVGb3JtU2NoZW1hID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRm9ybVNjaGVtYUNvbnN0YW50cy5GRVRDSF9URU1QTEFURV9MSVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBGb3JtU2NoZW1hQ29uc3RhbnRzLkZFVENIX1RFTVBMQVRFX0xJU1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIEZvcm1TY2hlbWFDb25zdGFudHMuRkVUQ0hfVEVNUExBVEVfTElTVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtU2NoZW1hUmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBjdXJyZW50Rm9ybVNjaGVtYTogZm9ybVNjaGVtYVJlZHVjZXIsXG4gIGxpc3Q6IGZvcm1TY2hlbWFMaXN0UmVkdWNlcixcbiAgdGVtcGxhdGVMaXN0OiB0ZW1wbGF0ZUxpc3RSZWR1Y2VyXG59KTtcbiJdfQ==