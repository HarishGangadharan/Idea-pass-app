import { RouterState } from 'connected-react-router';
import { LocalizeState } from 'react-localize-redux';
import { localizeReducer } from 'react-localize-redux';
import { combineReducers, Reducer } from 'redux';
import { appFormReducer, IAppFormReducer } from './appform';
import { configReducer, IConfigReducer } from './config';
import { counterReducer, ICounterReducer } from './counter';
import dynamicTableReducer, { IDataState, IMetaState } from './dynamicTable';
import { formFieldDataReducers, IFormFieldDataReducer } from './formfielddata';
import { formSchemaReducers, IFormSchemaReducer } from './formschema';
import { formTriggerReducers, IFormTriggerReducer } from './formTrigger';
import { globalReducer, IGlobalReducer } from './global';
import { IOrganizationReducer, organizationReducers } from './organization';
import { IQueryBuilderReducer } from './querybuilder';
import { queryBuilderReducer } from './querybuilder';
import { IRoleReducer, roleReducers } from './role';
import { IRolePermissionReducer, rolePermissionReducer } from './rolepermission';
import { IthemeReducer, themeReducer } from './theme';
import { IuserReducer, userReducer } from './user';

const rootReducer : Reducer<IState> = combineReducers({
  appForm: appFormReducer,
  config: configReducer,
  counter: counterReducer,
  dynamicTable: dynamicTableReducer,
  formFieldData: formFieldDataReducers,
  formSchema: formSchemaReducers,
  formTrigger: formTriggerReducers,
  global: globalReducer,
  localize: localizeReducer,
  organization: organizationReducers,
  queryBuilder: queryBuilderReducer,
  role: roleReducers,
  rolePermission: rolePermissionReducer,
  theme: themeReducer,
  user: userReducer
});


export interface IActionProps {
  type: string;
  [key: string]: any;
}

export interface IState {
  counter: ICounterReducer;
  locale: LocalizeState,
  formFieldData: IFormFieldDataReducer,
  formSchema: IFormSchemaReducer,
  formTrigger: IFormTriggerReducer,
  languageSelection: any;
  router: RouterState;
  config: IConfigReducer;
  appForm: IAppFormReducer;
  organization: IOrganizationReducer,
  role: IRoleReducer,
  queryBuilder: IQueryBuilderReducer,
  rolePermission: IRolePermissionReducer
  theme: IthemeReducer;
  user: IuserReducer;
  global: IGlobalReducer;
  dynamicTable: {
    data: IDataState,
    meta: IMetaState
  };
}

export default rootReducer;
