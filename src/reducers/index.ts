import { RouterState } from 'connected-react-router';
import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import { counterReducer, ICounterReducer } from './counter';
import { formReducer, IFormReducer } from './form';
import { globalReducer, IGlobalReducer } from './global';
import { IMetaformState, metaformsReducer } from './metaforms';
import { IthemeReducer, themeReducer } from './theme';
import { IuserReducer, userReducer } from './user';

const rootReducer = combineReducers({
  counter: counterReducer,
  form: formReducer,
  global: globalReducer,
  localize: localizeReducer,
  metaform: metaformsReducer,
  theme: themeReducer,
  user: userReducer
});

export interface IActionProps {
  type: string;
  [key: string]: any;
}

export interface IState {
  counter: ICounterReducer;
  form: IFormReducer,
  languageSelection: any;
  router: RouterState;
  theme: IthemeReducer;
  user: IuserReducer;
  global: IGlobalReducer;
  metaform: IMetaformState;
}

export default rootReducer;
