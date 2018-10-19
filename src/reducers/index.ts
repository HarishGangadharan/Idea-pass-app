import { RouterState } from 'connected-react-router';
import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import { counterReducer, ICounterReducer } from './counter';
import dynamicTableReducer, { IDataState, IMetaState } from './dynamicTable';
import { formFieldDataReducers, IFormFieldDataReducer } from './formfielddata';
import { formSchemaReducers, IFormSchemaReducer } from './formschema';
import { globalReducer, IGlobalReducer } from './global';
import { IModelReducer, modelReducers } from './model';
import { IOrganizationReducer, organizationReducers } from './organization';
import { IRoleReducer, roleReducers } from './role';
import { IRolePermissionReducer, rolePermissionReducer } from './rolepermission';
import { IthemeReducer, themeReducer } from './theme';
import { IuserReducer, userReducer } from './user';

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicTable: dynamicTableReducer,
  formFieldData: formFieldDataReducers,
  formSchema: formSchemaReducers,
  global: globalReducer,
  localize: localizeReducer,
  model: modelReducers,
  organization: organizationReducers,
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
  formFieldData: IFormFieldDataReducer,
  formSchema: IFormSchemaReducer,
  languageSelection: any;
  router: RouterState;
  model: IModelReducer,
  organization: IOrganizationReducer,
  role: IRoleReducer,
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
