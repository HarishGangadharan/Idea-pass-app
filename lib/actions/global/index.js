"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementLoaderQueue = exports.incrementLoaderQueue = exports.updateUserRole = exports.updateLoggedInStatus = void 0;

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateLoggedInStatus = function updateLoggedInStatus(userStatus) {
  return {
    type: _constants.default.SET_LOGGED_IN_STATUS,
    userStatus: userStatus
  };
};

exports.updateLoggedInStatus = updateLoggedInStatus;

var updateUserRole = function updateUserRole(userRole) {
  return {
    type: _constants.default.SET_USER_ROLE,
    userRole: userRole
  };
};

exports.updateUserRole = updateUserRole;

var incrementLoaderQueue = function incrementLoaderQueue() {
  return {
    type: _constants.default.INCREMENT_LOADER_QUEUE
  };
};

exports.incrementLoaderQueue = incrementLoaderQueue;

var decrementLoaderQueue = function decrementLoaderQueue() {
  return {
    type: _constants.default.DECREMENT_LOADER_QUEUE
  };
};

exports.decrementLoaderQueue = decrementLoaderQueue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2dsb2JhbC9pbmRleC50cyJdLCJuYW1lcyI6WyJ1cGRhdGVMb2dnZWRJblN0YXR1cyIsInVzZXJTdGF0dXMiLCJ0eXBlIiwiQ29uc3RhbnRzIiwiU0VUX0xPR0dFRF9JTl9TVEFUVVMiLCJ1cGRhdGVVc2VyUm9sZSIsInVzZXJSb2xlIiwiU0VUX1VTRVJfUk9MRSIsImluY3JlbWVudExvYWRlclF1ZXVlIiwiSU5DUkVNRU5UX0xPQURFUl9RVUVVRSIsImRlY3JlbWVudExvYWRlclF1ZXVlIiwiREVDUkVNRU5UX0xPQURFUl9RVUVVRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxVQUFELEVBQXFCO0FBQ3ZELFNBQU87QUFBRUMsSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUMsb0JBQWxCO0FBQXdDSCxJQUFBQSxVQUFVLEVBQVZBO0FBQXhDLEdBQVA7QUFDRCxDQUZNOzs7O0FBSUEsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQXNCO0FBQ2xELFNBQU87QUFBRUosSUFBQUEsSUFBSSxFQUFFQyxtQkFBVUksYUFBbEI7QUFBaUNELElBQUFBLFFBQVEsRUFBUkE7QUFBakMsR0FBUDtBQUNELENBRk07Ozs7QUFJQSxJQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDeEMsU0FBTztBQUFFTixJQUFBQSxJQUFJLEVBQUVDLG1CQUFVTTtBQUFsQixHQUFQO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN4QyxTQUFPO0FBQUVSLElBQUFBLElBQUksRUFBRUMsbUJBQVVRO0FBQWxCLEdBQVA7QUFDRCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVMb2dnZWRJblN0YXR1cyA9ICh1c2VyU3RhdHVzOiBhbnkpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogQ29uc3RhbnRzLlNFVF9MT0dHRURfSU5fU1RBVFVTLCB1c2VyU3RhdHVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclJvbGUgPSAodXNlclJvbGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4geyB0eXBlOiBDb25zdGFudHMuU0VUX1VTRVJfUk9MRSwgdXNlclJvbGUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRMb2FkZXJRdWV1ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogQ29uc3RhbnRzLklOQ1JFTUVOVF9MT0FERVJfUVVFVUUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWNyZW1lbnRMb2FkZXJRdWV1ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogQ29uc3RhbnRzLkRFQ1JFTUVOVF9MT0FERVJfUVVFVUUgfTtcbn07XG4iXX0=