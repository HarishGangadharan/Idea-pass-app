"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupInterceptors = exports.updateUserSession = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _global = require("../actions/global");

var _application = require("../constants/application.properties");

var _errorConstants = _interopRequireDefault(require("../constants/errorConstants"));

var _ApiError = _interopRequireDefault(require("../errors/ApiError"));

var _storage = _interopRequireDefault(require("../utils/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Saves user session in storage and sets as default
 * @param valid: boolean : userSession
 */
var updateUserSession = function updateUserSession(valid) {
  _storage.default.setItem(_application.AppProperties.USER_SESSION, valid);
};
/**
 * Setup defaults and request response interceptors for axios on load
 * @param store : Redux App Store
 */


exports.updateUserSession = updateUserSession;

var setupInterceptors = function setupInterceptors(store) {
  _storage.default.setItem(_application.AppProperties.RULES_UPDATED, 'false');

  _axios.default.defaults.baseURL = _application.AppProperties.BASE_URL;
  _axios.default.defaults.headers.post['Content-Type'] = 'application/json';

  _axios.default.defaults.validateStatus = function () {
    return true;
  };

  _axios.default.interceptors.request.use(function (config) {
    config.withCredentials = true;
    /**
     * We receive removeFromQueue from service - Role Permission.
     * It comes with default value true.
     */

    if (config.data && config.data.removeFromQueue) {
      /**
       * If removeFromQueue is true, this dispatch method decrease the value.
       */
      store.dispatch((0, _global.decrementLoaderQueue)());
    }
    /**
     * If removeFromQueue is false, this dispatch method increase the value.
     */


    store.dispatch((0, _global.incrementLoaderQueue)());
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  var userSession = _storage.default.getItem(_application.AppProperties.USER_SESSION);

  var userRole = _storage.default.getItem(_application.AppProperties.ROLES);

  updateUserSession(userSession);
  store.dispatch((0, _global.updateLoggedInStatus)(userSession !== 'true' ? {
    loggedIn: false
  } : {
    loggedIn: true
  }));

  if (userRole) {
    store.dispatch((0, _global.updateUserRole)(userRole));
  }

  _axios.default.interceptors.response.use(function (response) {
    var status = response.status;
    /** Processes response body
     *  use store.dispatch() to dispatch any redux actions
     *  considered for logout status to be 201
     */

    var header = response.config.data;

    if (header && JSON.parse(header).removeFromQueue) {
      /**
       * Increase the value deponds on how many request receives.
       */
      store.dispatch((0, _global.incrementLoaderQueue)());
    }
    /**
     * Decrease the value deponds on how many request done.
     */


    store.dispatch((0, _global.decrementLoaderQueue)());

    if (status > 205 && status !== 201) {
      switch (status) {
        case 500:
          throw new _ApiError.default(_errorConstants.default.SERVER_ERROR);

        case 403:
          updateUserSession(false);

          _storage.default.deleteItem(_application.AppProperties.ROLES);

          _storage.default.deleteItem(_application.AppProperties.USER_ID);

          _storage.default.deleteItem(_application.AppProperties.RULES_UPDATED);

          _storage.default.deleteItem(_application.AppProperties.TENANT);

          _storage.default.deleteItem(_application.AppProperties.USER_SESSION);

          store.dispatch((0, _global.updateLoggedInStatus)({
            loggedIn: false
          }));
          throw new _ApiError.default(_errorConstants.default.SERVER_ERROR);

        case 409:
          throw new _ApiError.default(_errorConstants.default.SERVER_CONFLICT);

        case 401:
          throw response.data.code;
      }
    } else {
      return response;
    }
  }, function (error) {
    Promise.reject(error);
    throw new _ApiError.default(_errorConstants.default.NETWORK_ERROR);
  });
};

exports.setupInterceptors = setupInterceptors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWwvaW50ZXJjZXB0b3JzLnRzIl0sIm5hbWVzIjpbInVwZGF0ZVVzZXJTZXNzaW9uIiwidmFsaWQiLCJzdG9yYWdlIiwic2V0SXRlbSIsIkFwcFByb3BlcnRpZXMiLCJVU0VSX1NFU1NJT04iLCJzZXR1cEludGVyY2VwdG9ycyIsInN0b3JlIiwiUlVMRVNfVVBEQVRFRCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiQkFTRV9VUkwiLCJoZWFkZXJzIiwicG9zdCIsInZhbGlkYXRlU3RhdHVzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJyZW1vdmVGcm9tUXVldWUiLCJkaXNwYXRjaCIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInVzZXJTZXNzaW9uIiwiZ2V0SXRlbSIsInVzZXJSb2xlIiwiUk9MRVMiLCJsb2dnZWRJbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiaGVhZGVyIiwiSlNPTiIsInBhcnNlIiwiQXBpRXJyb3IiLCJFUlJPUlMiLCJTRVJWRVJfRVJST1IiLCJkZWxldGVJdGVtIiwiVVNFUl9JRCIsIlRFTkFOVCIsIlNFUlZFUl9DT05GTElDVCIsImNvZGUiLCJORVRXT1JLX0VSUk9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUlPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFvQjtBQUNuREMsbUJBQVFDLE9BQVIsQ0FBZ0JDLDJCQUFjQyxZQUE5QixFQUE0Q0osS0FBNUM7QUFDRCxDQUZNO0FBSVA7Ozs7Ozs7O0FBSU8sSUFBTUssaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQWdCO0FBQy9DTCxtQkFBUUMsT0FBUixDQUFnQkMsMkJBQWNJLGFBQTlCLEVBQTZDLE9BQTdDOztBQUNBQyxp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LHdCQUFPQyxZQUFwQixDQUFOOztBQUNGLGFBQUssR0FBTDtBQUNFLGdCQUFNLElBQUlGLGlCQUFKLENBQWFDLHdCQUFPSyxlQUFwQixDQUFOOztBQUNGLGFBQUssR0FBTDtBQUNFLGdCQUFNWCxRQUFRLENBQUNYLElBQVQsQ0FBY3VCLElBQXBCO0FBZko7QUFpQkQsS0FsQkQsTUFrQk87QUFDTCxhQUFPWixRQUFQO0FBQ0Q7QUFDRixHQXRDRCxFQXNDRyxVQUFBUixLQUFLLEVBQUk7QUFDVkMsSUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWY7QUFDQSxVQUFNLElBQUlhLGlCQUFKLENBQWFDLHdCQUFPTyxhQUFwQixDQUFOO0FBQ0QsR0F6Q0Q7QUEwQ0QsQ0F4RU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtcbiAgZGVjcmVtZW50TG9hZGVyUXVldWUsXG4gIGluY3JlbWVudExvYWRlclF1ZXVlLFxuICB1cGRhdGVMb2dnZWRJblN0YXR1cyxcbiAgdXBkYXRlVXNlclJvbGVcbn0gZnJvbSAnLi4vYWN0aW9ucy9nbG9iYWwnO1xuaW1wb3J0IHsgQXBwUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0YW50cy9hcHBsaWNhdGlvbi5wcm9wZXJ0aWVzJztcbmltcG9ydCBFUlJPUlMgZnJvbSAnLi4vY29uc3RhbnRzL2Vycm9yQ29uc3RhbnRzJztcbmltcG9ydCBBcGlFcnJvciBmcm9tICcuLi9lcnJvcnMvQXBpRXJyb3InO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vdXRpbHMvc3RvcmFnZSc7XG5cbi8qKlxuICogU2F2ZXMgdXNlciBzZXNzaW9uIGluIHN0b3JhZ2UgYW5kIHNldHMgYXMgZGVmYXVsdFxuICogQHBhcmFtIHZhbGlkOiBib29sZWFuIDogdXNlclNlc3Npb25cbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJTZXNzaW9uID0gKHZhbGlkOiBib29sZWFuKSA9PiB7XG4gIHN0b3JhZ2Uuc2V0SXRlbShBcHBQcm9wZXJ0aWVzLlVTRVJfU0VTU0lPTiwgdmFsaWQpO1xufTtcblxuLyoqXG4gKiBTZXR1cCBkZWZhdWx0cyBhbmQgcmVxdWVzdCByZXNwb25zZSBpbnRlcmNlcHRvcnMgZm9yIGF4aW9zIG9uIGxvYWRcbiAqIEBwYXJhbSBzdG9yZSA6IFJlZHV4IEFwcCBTdG9yZVxuICovXG5leHBvcnQgY29uc3Qgc2V0dXBJbnRlcmNlcHRvcnMgPSAoc3RvcmU6IGFueSkgPT4ge1xuICBzdG9yYWdlLnNldEl0ZW0oQXBwUHJvcGVydGllcy5SVUxFU19VUERBVEVELCAnZmFsc2UnKTtcbiAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IEFwcFByb3BlcnRpZXMuQkFTRV9VUkw7XG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gIGF4aW9zLmRlZmF1bHRzLnZhbGlkYXRlU3RhdHVzID0gKCkgPT4gdHJ1ZTtcbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGNvbmZpZyA9PiB7XG4gICAgY29uZmlnLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgLyoqXG4gICAgICogV2UgcmVjZWl2ZSByZW1vdmVGcm9tUXVldWUgZnJvbSBzZXJ2aWNlIC0gUm9sZSBQZXJtaXNzaW9uLlxuICAgICAqIEl0IGNvbWVzIHdpdGggZGVmYXVsdCB2YWx1ZSB0cnVlLlxuICAgICAqL1xuICAgIGlmIChjb25maWcuZGF0YSAmJiBjb25maWcuZGF0YS5yZW1vdmVGcm9tUXVldWUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgcmVtb3ZlRnJvbVF1ZXVlIGlzIHRydWUsIHRoaXMgZGlzcGF0Y2ggbWV0aG9kIGRlY3JlYXNlIHRoZSB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgc3RvcmUuZGlzcGF0Y2goZGVjcmVtZW50TG9hZGVyUXVldWUoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHJlbW92ZUZyb21RdWV1ZSBpcyBmYWxzZSwgdGhpcyBkaXNwYXRjaCBtZXRob2QgaW5jcmVhc2UgdGhlIHZhbHVlLlxuICAgICAqL1xuICAgIHN0b3JlLmRpc3BhdGNoKGluY3JlbWVudExvYWRlclF1ZXVlKCkpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH0sIGVycm9yID0+IFByb21pc2UucmVqZWN0KGVycm9yKSk7XG4gIGNvbnN0IHVzZXJTZXNzaW9uID0gc3RvcmFnZS5nZXRJdGVtKEFwcFByb3BlcnRpZXMuVVNFUl9TRVNTSU9OKTtcbiAgY29uc3QgdXNlclJvbGUgPSBzdG9yYWdlLmdldEl0ZW0oQXBwUHJvcGVydGllcy5ST0xFUyk7XG4gIHVwZGF0ZVVzZXJTZXNzaW9uKHVzZXJTZXNzaW9uKTtcbiAgc3RvcmUuZGlzcGF0Y2godXBkYXRlTG9nZ2VkSW5TdGF0dXModXNlclNlc3Npb24gIT09ICd0cnVlJyA/IHsgbG9nZ2VkSW46IGZhbHNlIH0gOiB7IGxvZ2dlZEluOiB0cnVlIH0pKTtcbiAgaWYgKHVzZXJSb2xlKSB7XG4gICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlVXNlclJvbGUodXNlclJvbGUpKTtcbiAgfVxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlO1xuICAgIC8qKiBQcm9jZXNzZXMgcmVzcG9uc2UgYm9keVxuICAgICAqICB1c2Ugc3RvcmUuZGlzcGF0Y2goKSB0byBkaXNwYXRjaCBhbnkgcmVkdXggYWN0aW9uc1xuICAgICAqICBjb25zaWRlcmVkIGZvciBsb2dvdXQgc3RhdHVzIHRvIGJlIDIwMVxuICAgICAqL1xuICAgIGNvbnN0IGhlYWRlciA9IHJlc3BvbnNlLmNvbmZpZy5kYXRhO1xuICAgIGlmIChoZWFkZXIgJiYgSlNPTi5wYXJzZShoZWFkZXIpLnJlbW92ZUZyb21RdWV1ZSkge1xuICAgICAgLyoqXG4gICAgICAgKiBJbmNyZWFzZSB0aGUgdmFsdWUgZGVwb25kcyBvbiBob3cgbWFueSByZXF1ZXN0IHJlY2VpdmVzLlxuICAgICAgICovXG4gICAgICBzdG9yZS5kaXNwYXRjaChpbmNyZW1lbnRMb2FkZXJRdWV1ZSgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjcmVhc2UgdGhlIHZhbHVlIGRlcG9uZHMgb24gaG93IG1hbnkgcmVxdWVzdCBkb25lLlxuICAgICAqL1xuICAgIHN0b3JlLmRpc3BhdGNoKGRlY3JlbWVudExvYWRlclF1ZXVlKCkpO1xuICAgIGlmIChzdGF0dXMgPiAyMDUgJiYgc3RhdHVzICE9PSAyMDEpIHtcbiAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihFUlJPUlMuU0VSVkVSX0VSUk9SKTtcbiAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgdXBkYXRlVXNlclNlc3Npb24oZmFsc2UpO1xuICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlSXRlbShBcHBQcm9wZXJ0aWVzLlJPTEVTKTtcbiAgICAgICAgICBzdG9yYWdlLmRlbGV0ZUl0ZW0oQXBwUHJvcGVydGllcy5VU0VSX0lEKTtcbiAgICAgICAgICBzdG9yYWdlLmRlbGV0ZUl0ZW0oQXBwUHJvcGVydGllcy5SVUxFU19VUERBVEVEKTtcbiAgICAgICAgICBzdG9yYWdlLmRlbGV0ZUl0ZW0oQXBwUHJvcGVydGllcy5URU5BTlQpO1xuICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlSXRlbShBcHBQcm9wZXJ0aWVzLlVTRVJfU0VTU0lPTik7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlTG9nZ2VkSW5TdGF0dXMoeyBsb2dnZWRJbjogZmFsc2UgfSkpO1xuICAgICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihFUlJPUlMuU0VSVkVSX0VSUk9SKTtcbiAgICAgICAgY2FzZSA0MDk6XG4gICAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKEVSUk9SUy5TRVJWRVJfQ09ORkxJQ1QpO1xuICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICB0aHJvdyByZXNwb25zZS5kYXRhLmNvZGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gIH0sIGVycm9yID0+IHtcbiAgICBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgdGhyb3cgbmV3IEFwaUVycm9yKEVSUk9SUy5ORVRXT1JLX0VSUk9SKTtcbiAgfSk7XG59O1xuIl19