"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _effects = require("redux-saga/effects");

var _constants = _interopRequireDefault(require("../actions/appform/constants"));

var _constants2 = _interopRequireDefault(require("../actions/config/constants"));

var _constants3 = _interopRequireDefault(require("../actions/counter/constants"));

var _constants4 = _interopRequireDefault(require("../actions/dynamicTable/constants"));

var _constants5 = _interopRequireDefault(require("../actions/emailTemplate/constants"));

var _constants6 = _interopRequireDefault(require("../actions/formfielddata/constants"));

var _constants7 = _interopRequireDefault(require("../actions/formschema/constants"));

var _constants8 = _interopRequireDefault(require("../actions/formTrigger/constants"));

var _constants9 = _interopRequireDefault(require("../actions/global/constants"));

var _constants10 = _interopRequireDefault(require("../actions/graphiQl/constants"));

var _constants11 = _interopRequireDefault(require("../actions/organization/constants"));

var _constants12 = _interopRequireDefault(require("../actions/querybuilder/constants"));

var _constants13 = _interopRequireDefault(require("../actions/role/constants"));

var _constants14 = _interopRequireDefault(require("../actions/rolepermission/constants"));

var _constants15 = _interopRequireDefault(require("../actions/user/constants"));

var _appform = require("./appform");

var _config = require("./config");

var _counter = require("./counter");

var _dynamicTable = _interopRequireDefault(require("./dynamicTable"));

var _emailTemplate = require("./emailTemplate");

var _formfielddata = require("./formfielddata");

var _formschema = require("./formschema");

var _formTrigger = require("./formTrigger");

var _graphiQl = require("./graphiQl");

var _organization = require("./organization");

var _querybuilder = require("./querybuilder");

var _role = require("./role");

var _rolepermission = require("./rolepermission");

var _user = require("./user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeLatest)(_constants3.default.DECREMENT, _counter.onDecrement);

        case 2:
          _context.next = 4;
          return (0, _effects.takeLatest)(_constants3.default.DECREMENT_ASYNC, _counter.onDecrementAsync);

        case 4:
          _context.next = 6;
          return (0, _effects.takeLatest)(_constants3.default.INCREMENT, _counter.onIncrement);

        case 6:
          _context.next = 8;
          return (0, _effects.takeLatest)(_constants3.default.INCREMENT_ASYNC, _counter.onIncrementAsync);

        case 8:
          _context.next = 10;
          return (0, _effects.takeLatest)(_constants15.default.FETCH_USERS, _user.onFetchUsers);

        case 10:
          _context.next = 12;
          return (0, _effects.takeLatest)(_constants15.default.LOGIN_USER, _user.onLoginUser);

        case 12:
          _context.next = 14;
          return (0, _effects.takeLatest)(_constants15.default.LOGOUT_USER, _user.onLogoutUser);

        case 14:
          _context.next = 16;
          return (0, _effects.takeLatest)(_constants7.default.FETCH_FORM_SCHEMA_LIST, _formschema.fetchFormList);

        case 16:
          _context.next = 18;
          return (0, _effects.takeLatest)(_constants7.default.FETCH_TEMPLATE_LIST, _formschema.fetchTemplateList);

        case 18:
          _context.next = 20;
          return (0, _effects.takeLatest)(_constants6.default.SAVE_FORM_FIELD_DATA_REQUEST, _formfielddata.saveFormFieldData);

        case 20:
          _context.next = 22;
          return (0, _effects.takeLatest)(_constants6.default.FETCH_FORM_FIELD_DATA_LIST_REQUEST, _formfielddata.fetchFormFieldDataList);

        case 22:
          _context.next = 24;
          return (0, _effects.takeLatest)(_constants6.default.FETCH_FORM_FIELD_DATA_REQUEST, _formfielddata.fetchFormFieldData);

        case 24:
          _context.next = 26;
          return (0, _effects.takeLatest)(_constants8.default.SAVE_FORM_TRIGGER_REQUEST, _formTrigger.saveFormTrigger);

        case 26:
          _context.next = 28;
          return (0, _effects.takeLatest)(_constants8.default.FETCH_FORM_TRIGGER_LIST_REQUEST, _formTrigger.fetchFormTriggerList);

        case 28:
          _context.next = 30;
          return (0, _effects.takeLatest)(_constants8.default.FETCH_FORM_TRIGGER_REQUEST, _formTrigger.fetchFormTrigger);

        case 30:
          _context.next = 32;
          return (0, _effects.takeLatest)(_constants8.default.FETCH_SOURCE_FORM_FIELDS_REQUEST, _formTrigger.fetchSourceFormTrigger);

        case 32:
          _context.next = 34;
          return (0, _effects.takeLatest)(_constants8.default.FETCH_TARGET_FORM_FIELDS_REQUEST, _formTrigger.fetchTargetFormTrigger);

        case 34:
          _context.next = 36;
          return (0, _effects.takeLatest)(_constants7.default.FETCH_FORM_SCHEMA_REQUEST, _formschema.fetchFormSchema);

        case 36:
          _context.next = 38;
          return (0, _effects.takeLatest)(_constants7.default.CREATE_FORM_SCHEMA_REQUEST, _formschema.createFormSchema);

        case 38:
          _context.next = 40;
          return (0, _effects.takeLatest)(_constants4.default.GET_TABLE_DATA, _dynamicTable.default.fetchTableData);

        case 40:
          _context.next = 42;
          return (0, _effects.takeLatest)(_constants4.default.GET_TABLE_META, _dynamicTable.default.fetchTableMeta);

        case 42:
          _context.next = 44;
          return (0, _effects.takeLatest)(_constants11.default.FETCH_ORGANIZATION_LIST_REQUEST, _organization.fetchOrganizationList);

        case 44:
          _context.next = 46;
          return (0, _effects.takeLatest)(_constants11.default.FETCH_ORGANIZATION_REQUEST, _organization.fetchOrganization);

        case 46:
          _context.next = 48;
          return (0, _effects.takeLatest)(_constants13.default.FETCH_ROLE_LIST_REQUEST, _role.fetchRoleList);

        case 48:
          _context.next = 50;
          return (0, _effects.takeLatest)(_constants14.default.FETCH_ROLE_PERMISSION_REQUEST, _rolepermission.fetchRolePermission);

        case 50:
          _context.next = 52;
          return (0, _effects.takeLatest)(_constants14.default.CREATE_ROLE_PERMISSION_REQUEST, _rolepermission.createRolePermission);

        case 52:
          _context.next = 54;
          return (0, _effects.takeLatest)(_constants2.default.FETCH_CONFIG_REQUEST, _config.fetchConfig);

        case 54:
          _context.next = 56;
          return (0, _effects.takeLatest)(_constants.default.SAVE_APP_FORM_REQUEST, _appform.saveAppForm);

        case 56:
          _context.next = 58;
          return (0, _effects.takeLatest)(_constants9.default.SET_USER_ROLE, _rolepermission.fetchRolePermissionRules);

        case 58:
          _context.next = 60;
          return (0, _effects.takeLatest)(_constants12.default.FETCH_QUERY_BUILDER_FIELDS_REQUEST, _querybuilder.fetchQueryFields);

        case 60:
          _context.next = 62;
          return (0, _effects.takeLatest)(_constants10.default.CREATE_UPDATE_QUERY_REQUEST, _graphiQl.createOrUpdateGraphiQl);

        case 62:
          _context.next = 64;
          return (0, _effects.takeLatest)(_constants10.default.FETCH_QUERY_REQUEST, _graphiQl.fetchGraphiQlById);

        case 64:
          _context.next = 66;
          return (0, _effects.takeLatest)(_constants10.default.FETCH_QUERY_LIST_REQUEST, _graphiQl.fetchGraphiQlList);

        case 66:
          _context.next = 68;
          return (0, _effects.takeLatest)(_constants5.default.CREATE_OR_UPDATE_EMAIL_TEMPLATE, _emailTemplate.createOrUpdateEmailTemplate);

        case 68:
          _context.next = 70;
          return (0, _effects.takeLatest)(_constants5.default.GET_EMAIL_TEMPLATE, _emailTemplate.getEmailTemplate);

        case 70:
          _context.next = 72;
          return (0, _effects.takeLatest)(_constants5.default.GET_ALL_EMAIL_TEMPLATES, _emailTemplate.getAllEmailTemplates);

        case 72:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9pbmRleC50cyJdLCJuYW1lcyI6WyJyb290U2FnYSIsIkNvdW50ZXJDb25zdGFudHMiLCJERUNSRU1FTlQiLCJvbkRlY3JlbWVudCIsIkRFQ1JFTUVOVF9BU1lOQyIsIm9uRGVjcmVtZW50QXN5bmMiLCJJTkNSRU1FTlQiLCJvbkluY3JlbWVudCIsIklOQ1JFTUVOVF9BU1lOQyIsIm9uSW5jcmVtZW50QXN5bmMiLCJVc2VyQ29uc3RhbnRzIiwiRkVUQ0hfVVNFUlMiLCJvbkZldGNoVXNlcnMiLCJMT0dJTl9VU0VSIiwib25Mb2dpblVzZXIiLCJMT0dPVVRfVVNFUiIsIm9uTG9nb3V0VXNlciIsIkZvcm1TY2hlbWFDb25zdGFudHMiLCJGRVRDSF9GT1JNX1NDSEVNQV9MSVNUIiwiZmV0Y2hGb3JtTGlzdCIsIkZFVENIX1RFTVBMQVRFX0xJU1QiLCJmZXRjaFRlbXBsYXRlTGlzdCIsIkZvcm1GaWVsZERhdGFDb25zdGFudHMiLCJTQVZFX0ZPUk1fRklFTERfREFUQV9SRVFVRVNUIiwic2F2ZUZvcm1GaWVsZERhdGEiLCJGRVRDSF9GT1JNX0ZJRUxEX0RBVEFfTElTVF9SRVFVRVNUIiwiZmV0Y2hGb3JtRmllbGREYXRhTGlzdCIsIkZFVENIX0ZPUk1fRklFTERfREFUQV9SRVFVRVNUIiwiZmV0Y2hGb3JtRmllbGREYXRhIiwiRm9ybVRyaWdnZXJDb25zdGFudHMiLCJTQVZFX0ZPUk1fVFJJR0dFUl9SRVFVRVNUIiwic2F2ZUZvcm1UcmlnZ2VyIiwiRkVUQ0hfRk9STV9UUklHR0VSX0xJU1RfUkVRVUVTVCIsImZldGNoRm9ybVRyaWdnZXJMaXN0IiwiRkVUQ0hfRk9STV9UUklHR0VSX1JFUVVFU1QiLCJmZXRjaEZvcm1UcmlnZ2VyIiwiRkVUQ0hfU09VUkNFX0ZPUk1fRklFTERTX1JFUVVFU1QiLCJmZXRjaFNvdXJjZUZvcm1UcmlnZ2VyIiwiRkVUQ0hfVEFSR0VUX0ZPUk1fRklFTERTX1JFUVVFU1QiLCJmZXRjaFRhcmdldEZvcm1UcmlnZ2VyIiwiRkVUQ0hfRk9STV9TQ0hFTUFfUkVRVUVTVCIsImZldGNoRm9ybVNjaGVtYSIsIkNSRUFURV9GT1JNX1NDSEVNQV9SRVFVRVNUIiwiY3JlYXRlRm9ybVNjaGVtYSIsIkR5bmFtaWNUYWJsZUNvbnN0YW50cyIsIkdFVF9UQUJMRV9EQVRBIiwiRHluYW1pY1RhYmxlU2FnYSIsImZldGNoVGFibGVEYXRhIiwiR0VUX1RBQkxFX01FVEEiLCJmZXRjaFRhYmxlTWV0YSIsIk9yZ2FuaXphdGlvbkNvbnN0YW50cyIsIkZFVENIX09SR0FOSVpBVElPTl9MSVNUX1JFUVVFU1QiLCJmZXRjaE9yZ2FuaXphdGlvbkxpc3QiLCJGRVRDSF9PUkdBTklaQVRJT05fUkVRVUVTVCIsImZldGNoT3JnYW5pemF0aW9uIiwiUm9sZUNvbnN0YW50cyIsIkZFVENIX1JPTEVfTElTVF9SRVFVRVNUIiwiZmV0Y2hSb2xlTGlzdCIsIlJvbGVQZXJtaXNzaW9uQ29uc3RhbnRzIiwiRkVUQ0hfUk9MRV9QRVJNSVNTSU9OX1JFUVVFU1QiLCJmZXRjaFJvbGVQZXJtaXNzaW9uIiwiQ1JFQVRFX1JPTEVfUEVSTUlTU0lPTl9SRVFVRVNUIiwiY3JlYXRlUm9sZVBlcm1pc3Npb24iLCJDb25maWdDb25zdGFudHMiLCJGRVRDSF9DT05GSUdfUkVRVUVTVCIsImZldGNoQ29uZmlnIiwiQXBwRm9ybUNvbnN0YW50cyIsIlNBVkVfQVBQX0ZPUk1fUkVRVUVTVCIsInNhdmVBcHBGb3JtIiwiR2xvYmFsQ29uc3RhbnRzIiwiU0VUX1VTRVJfUk9MRSIsImZldGNoUm9sZVBlcm1pc3Npb25SdWxlcyIsIlF1ZXJ5QnVpbGRlckNvbnN0YW50cyIsIkZFVENIX1FVRVJZX0JVSUxERVJfRklFTERTX1JFUVVFU1QiLCJmZXRjaFF1ZXJ5RmllbGRzIiwiR3JhcGhpUWxDb250YW50cyIsIkNSRUFURV9VUERBVEVfUVVFUllfUkVRVUVTVCIsImNyZWF0ZU9yVXBkYXRlR3JhcGhpUWwiLCJGRVRDSF9RVUVSWV9SRVFVRVNUIiwiZmV0Y2hHcmFwaGlRbEJ5SWQiLCJGRVRDSF9RVUVSWV9MSVNUX1JFUVVFU1QiLCJmZXRjaEdyYXBoaVFsTGlzdCIsIkVtYWlsVGVtcGxhdGVDb25zdGFudHMiLCJDUkVBVEVfT1JfVVBEQVRFX0VNQUlMX1RFTVBMQVRFIiwiY3JlYXRlT3JVcGRhdGVFbWFpbFRlbXBsYXRlIiwiR0VUX0VNQUlMX1RFTVBMQVRFIiwiZ2V0RW1haWxUZW1wbGF0ZSIsIkdFVF9BTExfRU1BSUxfVEVNUExBVEVTIiwiZ2V0QWxsRW1haWxUZW1wbGF0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O3dCQUV5QkEsUTs7QUFBVixTQUFVQSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLHlCQUFXQyxvQkFBaUJDLFNBQTVCLEVBQXVDQyxvQkFBdkMsQ0FBTjs7QUFEYTtBQUFBO0FBRWIsaUJBQU0seUJBQVdGLG9CQUFpQkcsZUFBNUIsRUFBNkNDLHlCQUE3QyxDQUFOOztBQUZhO0FBQUE7QUFHYixpQkFBTSx5QkFBV0osb0JBQWlCSyxTQUE1QixFQUF1Q0Msb0JBQXZDLENBQU47O0FBSGE7QUFBQTtBQUliLGlCQUFNLHlCQUFXTixvQkFBaUJPLGVBQTVCLEVBQTZDQyx5QkFBN0MsQ0FBTjs7QUFKYTtBQUFBO0FBS2IsaUJBQU0seUJBQVdDLHFCQUFjQyxXQUF6QixFQUFzQ0Msa0JBQXRDLENBQU47O0FBTGE7QUFBQTtBQU1iLGlCQUFNLHlCQUFXRixxQkFBY0csVUFBekIsRUFBcUNDLGlCQUFyQyxDQUFOOztBQU5hO0FBQUE7QUFPYixpQkFBTSx5QkFBV0oscUJBQWNLLFdBQXpCLEVBQXNDQyxrQkFB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QkFBbEMsRUFBc0RDLCtCQUF0RCxDQUFOOztBQW5DYTtBQUFBO0FBb0NiLGlCQUFNLHlCQUFXSixvQkFBdUJLLHVCQUFsQyxFQUEyREMsbUNBQTNELENBQU47O0FBcENhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgQXBwRm9ybUNvbnN0YW50cyBmcm9tICcuLi9hY3Rpb25zL2FwcGZvcm0vY29uc3RhbnRzJztcbmltcG9ydCBDb25maWdDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9jb25maWcvY29uc3RhbnRzJztcbmltcG9ydCBDb3VudGVyQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvY291bnRlci9jb25zdGFudHMnO1xuaW1wb3J0IER5bmFtaWNUYWJsZUNvbnN0YW50cyBmcm9tICcuLi9hY3Rpb25zL2R5bmFtaWNUYWJsZS9jb25zdGFudHMnO1xuaW1wb3J0IEVtYWlsVGVtcGxhdGVDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9lbWFpbFRlbXBsYXRlL2NvbnN0YW50cyc7XG5pbXBvcnQgRm9ybUZpZWxkRGF0YUNvbnN0YW50cyBmcm9tICcuLi9hY3Rpb25zL2Zvcm1maWVsZGRhdGEvY29uc3RhbnRzJztcbmltcG9ydCBGb3JtU2NoZW1hQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvZm9ybXNjaGVtYS9jb25zdGFudHMnO1xuaW1wb3J0IEZvcm1UcmlnZ2VyQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvZm9ybVRyaWdnZXIvY29uc3RhbnRzJztcbmltcG9ydCBHbG9iYWxDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9nbG9iYWwvY29uc3RhbnRzJztcbmltcG9ydCBHcmFwaGlRbENvbnRhbnRzIGZyb20gJy4uL2FjdGlvbnMvZ3JhcGhpUWwvY29uc3RhbnRzJztcbmltcG9ydCBPcmdhbml6YXRpb25Db25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9vcmdhbml6YXRpb24vY29uc3RhbnRzJztcbmltcG9ydCBRdWVyeUJ1aWxkZXJDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9xdWVyeWJ1aWxkZXIvY29uc3RhbnRzJztcbmltcG9ydCBSb2xlQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvcm9sZS9jb25zdGFudHMnO1xuaW1wb3J0IFJvbGVQZXJtaXNzaW9uQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvcm9sZXBlcm1pc3Npb24vY29uc3RhbnRzJztcbmltcG9ydCBVc2VyQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvdXNlci9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBzYXZlQXBwRm9ybSB9IGZyb20gJy4vYXBwZm9ybSc7XG5pbXBvcnQgeyBmZXRjaENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIG9uRGVjcmVtZW50LFxuICBvbkRlY3JlbWVudEFzeW5jLFxuICBvbkluY3JlbWVudCxcbiAgb25JbmNyZW1lbnRBc3luY1xufSBmcm9tICcuL2NvdW50ZXInO1xuaW1wb3J0IER5bmFtaWNUYWJsZVNhZ2EgZnJvbSAnLi9keW5hbWljVGFibGUnO1xuaW1wb3J0IHsgY3JlYXRlT3JVcGRhdGVFbWFpbFRlbXBsYXRlLCBnZXRBbGxFbWFpbFRlbXBsYXRlcywgZ2V0RW1haWxUZW1wbGF0ZSB9IGZyb20gJy4vZW1haWxUZW1wbGF0ZSc7XG5pbXBvcnQgeyBmZXRjaEZvcm1GaWVsZERhdGEsIGZldGNoRm9ybUZpZWxkRGF0YUxpc3QsIHNhdmVGb3JtRmllbGREYXRhICB9IGZyb20gJy4vZm9ybWZpZWxkZGF0YSc7XG5pbXBvcnQgeyBjcmVhdGVGb3JtU2NoZW1hLCBmZXRjaEZvcm1MaXN0LCBmZXRjaEZvcm1TY2hlbWEsIGZldGNoVGVtcGxhdGVMaXN0IH0gZnJvbSAnLi9mb3Jtc2NoZW1hJztcbmltcG9ydCB7IGZldGNoRm9ybVRyaWdnZXIsIGZldGNoRm9ybVRyaWdnZXJMaXN0LCBmZXRjaFNvdXJjZUZvcm1UcmlnZ2VyLCBmZXRjaFRhcmdldEZvcm1UcmlnZ2VyLCBzYXZlRm9ybVRyaWdnZXIgIH0gZnJvbSAnLi9mb3JtVHJpZ2dlcic7XG5pbXBvcnQgeyBjcmVhdGVPclVwZGF0ZUdyYXBoaVFsLCBmZXRjaEdyYXBoaVFsQnlJZCwgIGZldGNoR3JhcGhpUWxMaXN0IH0gZnJvbSAnLi9ncmFwaGlRbCc7XG5pbXBvcnQgeyBmZXRjaE9yZ2FuaXphdGlvbiwgZmV0Y2hPcmdhbml6YXRpb25MaXN0IH0gZnJvbSAnLi9vcmdhbml6YXRpb24nO1xuaW1wb3J0IHsgZmV0Y2hRdWVyeUZpZWxkcyB9IGZyb20gJy4vcXVlcnlidWlsZGVyJztcbmltcG9ydCB7IGZldGNoUm9sZUxpc3QgfSBmcm9tICcuL3JvbGUnO1xuaW1wb3J0IHsgY3JlYXRlUm9sZVBlcm1pc3Npb24sIGZldGNoUm9sZVBlcm1pc3Npb24sIGZldGNoUm9sZVBlcm1pc3Npb25SdWxlcyB9IGZyb20gJy4vcm9sZXBlcm1pc3Npb24nO1xuaW1wb3J0IHsgb25GZXRjaFVzZXJzLCBvbkxvZ2luVXNlciwgb25Mb2dvdXRVc2VyIH0gZnJvbSAnLi91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KENvdW50ZXJDb25zdGFudHMuREVDUkVNRU5ULCBvbkRlY3JlbWVudCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoQ291bnRlckNvbnN0YW50cy5ERUNSRU1FTlRfQVNZTkMsIG9uRGVjcmVtZW50QXN5bmMpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KENvdW50ZXJDb25zdGFudHMuSU5DUkVNRU5ULCBvbkluY3JlbWVudCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoQ291bnRlckNvbnN0YW50cy5JTkNSRU1FTlRfQVNZTkMsIG9uSW5jcmVtZW50QXN5bmMpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVzZXJDb25zdGFudHMuRkVUQ0hfVVNFUlMsIG9uRmV0Y2hVc2Vycyk7XG4gIHlpZWxkIHRha2VMYXRlc3QoVXNlckNvbnN0YW50cy5MT0dJTl9VU0VSLCBvbkxvZ2luVXNlcik7XG4gIHlpZWxkIHRha2VMYXRlc3QoVXNlckNvbnN0YW50cy5MT0dPVVRfVVNFUiwgb25Mb2dvdXRVc2VyKTtcbiAgeWllbGQgdGFrZUxhdGVzdChGb3JtU2NoZW1hQ29uc3RhbnRzLkZFVENIX0ZPUk1fU0NIRU1BX0xJU1QsIGZldGNoRm9ybUxpc3QpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZvcm1TY2hlbWFDb25zdGFudHMuRkVUQ0hfVEVNUExBVEVfTElTVCwgZmV0Y2hUZW1wbGF0ZUxpc3QpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZvcm1GaWVsZERhdGFDb25zdGFudHMuU0FWRV9GT1JNX0ZJRUxEX0RBVEFfUkVRVUVTVCwgc2F2ZUZvcm1GaWVsZERhdGEpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZvcm1GaWVsZERhdGFDb25zdGFudHMuRkVUQ0hfRk9STV9GSUVMRF9EQVRBX0xJU1RfUkVRVUVTVCwgZmV0Y2hGb3JtRmllbGREYXRhTGlzdCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoRm9ybUZpZWxkRGF0YUNvbnN0YW50cy5GRVRDSF9GT1JNX0ZJRUxEX0RBVEFfUkVRVUVTVCwgZmV0Y2hGb3JtRmllbGREYXRhKTtcbiAgeWllbGQgdGFrZUxhdGVzdChGb3JtVHJpZ2dlckNvbnN0YW50cy5TQVZFX0ZPUk1fVFJJR0dFUl9SRVFVRVNULCBzYXZlRm9ybVRyaWdnZXIpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZvcm1UcmlnZ2VyQ29uc3RhbnRzLkZFVENIX0ZPUk1fVFJJR0dFUl9MSVNUX1JFUVVFU1QsIGZldGNoRm9ybVRyaWdnZXJMaXN0KTtcbiAgeWllbGQgdGFrZUxhdGVzdChGb3JtVHJpZ2dlckNvbnN0YW50cy5GRVRDSF9GT1JNX1RSSUdHRVJfUkVRVUVTVCwgZmV0Y2hGb3JtVHJpZ2dlcik7XG4gIHlpZWxkIHRha2VMYXRlc3QoRm9ybVRyaWdnZXJDb25zdGFudHMuRkVUQ0hfU09VUkNFX0ZPUk1fRklFTERTX1JFUVVFU1QsIGZldGNoU291cmNlRm9ybVRyaWdnZXIpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZvcm1UcmlnZ2VyQ29uc3RhbnRzLkZFVENIX1RBUkdFVF9GT1JNX0ZJRUxEU19SRVFVRVNULCBmZXRjaFRhcmdldEZvcm1UcmlnZ2VyKTtcbiAgeWllbGQgdGFrZUxhdGVzdChGb3JtU2NoZW1hQ29uc3RhbnRzLkZFVENIX0ZPUk1fU0NIRU1BX1JFUVVFU1QsIGZldGNoRm9ybVNjaGVtYSk7XG4gIHlpZWxkIHRha2VMYXRlc3QoRm9ybVNjaGVtYUNvbnN0YW50cy5DUkVBVEVfRk9STV9TQ0hFTUFfUkVRVUVTVCwgY3JlYXRlRm9ybVNjaGVtYSk7XG4gIHlpZWxkIHRha2VMYXRlc3QoRHluYW1pY1RhYmxlQ29uc3RhbnRzLkdFVF9UQUJMRV9EQVRBLCBEeW5hbWljVGFibGVTYWdhLmZldGNoVGFibGVEYXRhKTtcbiAgeWllbGQgdGFrZUxhdGVzdChEeW5hbWljVGFibGVDb25zdGFudHMuR0VUX1RBQkxFX01FVEEsIER5bmFtaWNUYWJsZVNhZ2EuZmV0Y2hUYWJsZU1ldGEpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KE9yZ2FuaXphdGlvbkNvbnN0YW50cy5GRVRDSF9PUkdBTklaQVRJT05fTElTVF9SRVFVRVNULCBmZXRjaE9yZ2FuaXphdGlvbkxpc3QpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KE9yZ2FuaXphdGlvbkNvbnN0YW50cy5GRVRDSF9PUkdBTklaQVRJT05fUkVRVUVTVCwgZmV0Y2hPcmdhbml6YXRpb24pO1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJvbGVDb25zdGFudHMuRkVUQ0hfUk9MRV9MSVNUX1JFUVVFU1QsIGZldGNoUm9sZUxpc3QpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJvbGVQZXJtaXNzaW9uQ29uc3RhbnRzLkZFVENIX1JPTEVfUEVSTUlTU0lPTl9SRVFVRVNULCBmZXRjaFJvbGVQZXJtaXNzaW9uKTtcbiAgeWllbGQgdGFrZUxhdGVzdChSb2xlUGVybWlzc2lvbkNvbnN0YW50cy5DUkVBVEVfUk9MRV9QRVJNSVNTSU9OX1JFUVVFU1QsIGNyZWF0ZVJvbGVQZXJtaXNzaW9uKTtcbiAgeWllbGQgdGFrZUxhdGVzdChDb25maWdDb25zdGFudHMuRkVUQ0hfQ09ORklHX1JFUVVFU1QsIGZldGNoQ29uZmlnKTtcbiAgeWllbGQgdGFrZUxhdGVzdChBcHBGb3JtQ29uc3RhbnRzLlNBVkVfQVBQX0ZPUk1fUkVRVUVTVCwgc2F2ZUFwcEZvcm0pO1xuICB5aWVsZCB0YWtlTGF0ZXN0KEdsb2JhbENvbnN0YW50cy5TRVRfVVNFUl9ST0xFLCBmZXRjaFJvbGVQZXJtaXNzaW9uUnVsZXMpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KFF1ZXJ5QnVpbGRlckNvbnN0YW50cy5GRVRDSF9RVUVSWV9CVUlMREVSX0ZJRUxEU19SRVFVRVNULCBmZXRjaFF1ZXJ5RmllbGRzKTtcbiAgeWllbGQgdGFrZUxhdGVzdChHcmFwaGlRbENvbnRhbnRzLkNSRUFURV9VUERBVEVfUVVFUllfUkVRVUVTVCwgY3JlYXRlT3JVcGRhdGVHcmFwaGlRbCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoR3JhcGhpUWxDb250YW50cy5GRVRDSF9RVUVSWV9SRVFVRVNULCBmZXRjaEdyYXBoaVFsQnlJZCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoR3JhcGhpUWxDb250YW50cy5GRVRDSF9RVUVSWV9MSVNUX1JFUVVFU1QsIGZldGNoR3JhcGhpUWxMaXN0KTtcbiAgeWllbGQgdGFrZUxhdGVzdChFbWFpbFRlbXBsYXRlQ29uc3RhbnRzLkNSRUFURV9PUl9VUERBVEVfRU1BSUxfVEVNUExBVEUsIGNyZWF0ZU9yVXBkYXRlRW1haWxUZW1wbGF0ZSk7XG4gIHlpZWxkIHRha2VMYXRlc3QoRW1haWxUZW1wbGF0ZUNvbnN0YW50cy5HRVRfRU1BSUxfVEVNUExBVEUsIGdldEVtYWlsVGVtcGxhdGUpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KEVtYWlsVGVtcGxhdGVDb25zdGFudHMuR0VUX0FMTF9FTUFJTF9URU1QTEFURVMsIGdldEFsbEVtYWlsVGVtcGxhdGVzKTtcbn1cbiJdfQ==